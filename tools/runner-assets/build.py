"""
把 CC0 / CC-BY 的人物、动画、配件素材加工成游戏直接加载的文件，输出到 minigame/assets/runners/。

准备（原始素材约 160 MB，不进仓库；放在环境变量 MD_ASSET_SRC 指向的目录，默认 /tmp/md_assets）：

  python3 -m venv .venv && .venv/bin/pip install -r tools/runner-assets/requirements.txt
  npm install                                         # 减面用的 meshoptimizer 在 devDependencies 里
  .venv/bin/python tools/runner-assets/fetch.py       # 下载并解压原始素材（需要能访问 itch.io 和 poly.pizza）
  .venv/bin/python tools/runner-assets/build.py       # 全部重新生成；也可以只生成某几个：build.py anims player

原始素材（下载地址见 fetch.py；fetch.py 失效时可以手工下载，解压成下面的目录结构）：
  <MD_ASSET_SRC>/Universal_Base_Characters/Universal Base Characters[Standard]/...
      Quaternius · Universal Base Characters [Standard] · CC0 · https://quaternius.itch.io/universal-base-characters
  <MD_ASSET_SRC>/Universal_Animation_Library/Universal Animation Library[Standard]/...
      Quaternius · Universal Animation Library [Standard] · CC0 · https://quaternius.itch.io/universal-animation-library
  <MD_ASSET_SRC>/Universal_Animation_Library_2/Universal Animation Library 2[Standard]/...
      Quaternius · Universal Animation Library 2 [Standard] · CC0 · https://quaternius.itch.io/universal-animation-library-2
  <MD_ASSET_SRC>/props/<id>.glb
      Poly Pizza 上的单个配件模型，见下面的 PROPS（帽子是 CC-BY 3.0，游戏里要署名）

输出：
  <name>.glb          人物网格 + 骨骼（23 根，手指已经烘焙成半握拳并并入手掌）。不含贴图、不含动画；
                      用到 KHR_mesh_quantization，不需要任何 wasm 解码器
  <name>_body.jpg     身体贴图 1024（肤色 + 画上去的运动服）
  <name>_extras.jpg   头发 / 眉毛 / 眼睛 / 配件共用的小图集 512
  anims.glb           共用的骨骼动画（只有骨架和动画轨道）
  manifest.json       文件清单、三角形数、来源与许可证
"""
import json, os, subprocess, sys, tempfile
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage

sys.path.insert(0, os.path.dirname(__file__))
from gltfio import Gltf, GlbWriter, quat_matrix, trs_matrix

SRC = os.environ.get('MD_ASSET_SRC', '/tmp/md_assets')
OUT = os.path.join(os.path.dirname(__file__), '..', '..', 'minigame', 'assets', 'runners')
UBC = SRC + '/Universal_Base_Characters/Universal Base Characters[Standard]/'
UAL1 = SRC + '/Universal_Animation_Library/Universal Animation Library[Standard]/Unreal-Godot/UAL1_Standard.glb'
UAL2 = SRC + '/Universal_Animation_Library_2/Universal Animation Library 2[Standard]/Unreal-Godot/UAL2_Standard.glb'
HAIR_DIR = UBC + 'Hairstyles/Rigged to Head Bone/glTF (Godot -Unreal)/'
TEX_DIR = UBC + 'Base Characters/Textures/'

BODY_TEX = 1024
ATLAS = 512

SOURCES = {
    'body': {'name': 'Universal Base Characters [Standard]', 'author': 'Quaternius', 'license': 'CC0 1.0', 'url': 'https://quaternius.com/packs/universalbasecharacters.html'},
    'anim1': {'name': 'Universal Animation Library [Standard]', 'author': 'Quaternius', 'license': 'CC0 1.0', 'url': 'https://quaternius.com/packs/universalanimationlibrary.html'},
    'anim2': {'name': 'Universal Animation Library 2 [Standard]', 'author': 'Quaternius', 'license': 'CC0 1.0', 'url': 'https://quaternius.com/packs/universalanimationlibrary2.html'},
}

# 配件：都是 Poly Pizza 上的单个模型
PROPS = {
    'glasses': {'file': 'props/crbuIoq2dO.glb', 'name': 'Glasses', 'author': 'iPoly3D', 'license': 'CC0 1.0', 'url': 'https://poly.pizza/m/crbuIoq2dO'},
    'cap': {'file': 'props/dzfCdDABuiQ.glb', 'name': 'Baseball cap', 'author': 'jeremy', 'license': 'CC-BY 3.0', 'url': 'https://poly.pizza/m/dzfCdDABuiQ'},
}

# 动画：输出名 -> (来源库, 原名)
CLIPS = {
    'idle': (UAL1, 'Idle_Loop'),
    'jog': (UAL1, 'Jog_Fwd_Loop'),
    'sprint': (UAL1, 'Sprint_Loop'),
    'jump_start': (UAL1, 'Jump_Start'),
    'jump_land': (UAL1, 'Jump_Land'),
    'slide_start': (UAL2, 'Slide_Start'),
    'slide_loop': (UAL2, 'Slide_Loop'),
    'slide_exit': (UAL2, 'Slide_Exit'),
    'hit': (UAL1, 'Hit_Chest'),
    'cheer': (UAL1, 'Dance_Loop'),
    'yes': (UAL2, 'Yes'),
    'crouch': (UAL1, 'Crouch_Idle_Loop'),
    'collapse': (UAL1, 'Death01'),
}

# 只给这些骨骼存动画轨道；手指保持一个固定的半握拳姿势
# 人物骨架只保留这些骨骼（都能塞进着色器的 uniform 数组，不依赖浮点贴图）
KEEP_BONES = ['root', 'pelvis', 'spine_01', 'spine_02', 'spine_03', 'neck_01', 'Head',
              'clavicle_l', 'upperarm_l', 'lowerarm_l', 'hand_l', 'clavicle_r', 'upperarm_r', 'lowerarm_r', 'hand_r',
              'thigh_l', 'calf_l', 'foot_l', 'ball_l', 'thigh_r', 'calf_r', 'foot_r', 'ball_r']
ANIM_BONES = ['pelvis', 'spine_01', 'spine_02', 'spine_03', 'neck_01', 'Head',
              'clavicle_l', 'upperarm_l', 'lowerarm_l', 'hand_l', 'clavicle_r', 'upperarm_r', 'lowerarm_r', 'hand_r',
              'thigh_l', 'calf_l', 'foot_l', 'ball_l', 'thigh_r', 'calf_r', 'foot_r', 'ball_r']


def srgb(hex_):
    return np.array([(hex_ >> 16) & 255, (hex_ >> 8) & 255, hex_ & 255], dtype=np.float32) / 255


# ---------------------------------------------------------------------------
# 读取素材
# ---------------------------------------------------------------------------

class Character:
    def __init__(self, gender):
        self.gender = gender
        g = self.g = Gltf(UBC + 'Base Characters/Godot - UE/Superhero_%s_FullBody.gltf' % ('Male' if gender == 'm' else 'Female'))
        skin = g.j['skins'][0]
        self.joints = skin['joints']
        self.names = [g.nodes[i]['name'] for i in self.joints]
        self.ibm = g.acc(skin['inverseBindMatrices']).astype(np.float32)
        self.parts = {}
        for n in g.nodes:
            if 'mesh' not in n: continue
            p = g.primitives(n['mesh'])[0]
            key = 'eyes' if n['name'] == 'Eyes' else 'brows' if n['name'] == 'Eyebrows' else 'body'
            self.parts[key] = p
        self.bone_world = {g.nodes[i]['name']: g.world_matrix(i) for i in self.joints}

    def joint_index(self, name):
        return self.names.index(name)

    def bake_fists(self, fists, pos, nrm, joints, weights):
        """把手指摆成半握拳并烘焙进网格（之后手指骨骼就不需要了）。"""
        g = self.g
        pose = {}
        def world(i):
            if i in pose: return pose[i]
            n = g.nodes[i]
            m = trs_matrix(n.get('translation', [0, 0, 0]), fists.get(n['name'], n.get('rotation', [0, 0, 0, 1])), n.get('scale', [1, 1, 1]))
            pose[i] = world(g.parent[i]) @ m if i in g.parent else m
            return pose[i]
        M = np.tile(np.eye(4), (len(self.joints), 1, 1))
        for k, i in enumerate(self.joints):
            if self.names[k] in fists or self.names[k].endswith('_leaf') and self.names[k].split('_')[0] in ('index', 'middle', 'ring', 'pinky', 'thumb'):
                M[k] = world(i) @ self.ibm[k].reshape(4, 4).T.astype(np.float64)
        moved = (np.abs(M - np.eye(4)).max(axis=(1, 2)) > 1e-6)
        sel = (moved[joints] & (weights > 0)).any(axis=1)
        if not sel.any(): return pos, nrm
        pos, nrm = pos.copy(), nrm.copy()
        ph = np.concatenate([pos[sel], np.ones((sel.sum(), 1))], axis=1)
        acc_p = np.zeros((sel.sum(), 3))
        acc_n = np.zeros((sel.sum(), 3))
        for c in range(4):
            Mj = M[joints[sel, c]]
            w = weights[sel, c][:, None]
            acc_p += w * np.einsum('nij,nj->ni', Mj, ph)[:, :3]
            acc_n += w * np.einsum('nij,nj->ni', Mj[:, :3, :3], nrm[sel])
        pos[sel] = acc_p / weights[sel].sum(axis=1, keepdims=True)
        nrm[sel] = acc_n / np.maximum(np.linalg.norm(acc_n, axis=1, keepdims=True), 1e-9)
        return pos, nrm

    def reduce_joints(self, joints, weights):
        """把权重并到保留下来的骨骼上（手指 -> 手掌，脚尖末端 -> 脚尖），返回新骨架下的 (joints, weights)。"""
        g = self.g
        target = np.zeros(len(self.joints), dtype=np.int64)
        for k, i in enumerate(self.joints):
            while g.nodes[i]['name'] not in KEEP_BONES: i = g.parent[i]
            target[k] = KEEP_BONES.index(g.nodes[i]['name'])
        dense = np.zeros((len(joints), len(KEEP_BONES)), dtype=np.float64)
        for c in range(4):
            np.add.at(dense, (np.arange(len(joints)), target[joints[:, c]]), weights[:, c])
        top = np.argsort(-dense, axis=1)[:, :4]
        w = np.take_along_axis(dense, top, axis=1)
        top[w <= 0] = 0
        return top, (w / w.sum(axis=1, keepdims=True)).astype(np.float32)


def load_hair(name, char):
    g = Gltf(HAIR_DIR + name + '.gltf')
    p = g.primitives(0)[0]
    names = [g.nodes[i]['name'] for i in g.j['skins'][0]['joints']]
    remap = np.array([char.joint_index(n) for n in names])
    p['JOINTS_0'] = remap[p['JOINTS_0']]
    tex = g.j['images'][g.j['textures'][g.j['materials'][p['material']]['pbrMetallicRoughness']['baseColorTexture']['index']]['source']]['uri']
    p['hair_tex'] = 1 if 'Hair_1' in tex else 2
    return p


def load_prop(key):
    """返回 [(positions, normals, indices, 线性空间的材质色, 材质名)]，已乘上节点变换。"""
    g = Gltf(os.path.join(SRC, PROPS[key]['file']))
    out = []
    for i, n in enumerate(g.nodes):
        if 'mesh' not in n: continue
        m = g.world_matrix(i)
        for p in g.primitives(n['mesh']):
            pos = p['POSITION'].astype(np.float64) @ m[:3, :3].T + m[:3, 3]
            idx = p['indices']
            if 'NORMAL' in p:
                nm = p['NORMAL'].astype(np.float64) @ np.linalg.inv(m[:3, :3])
            else:
                nm = np.zeros_like(pos)
                tri = pos[idx.reshape(-1, 3)]
                fn = np.cross(tri[:, 1] - tri[:, 0], tri[:, 2] - tri[:, 0])
                for k in range(3): np.add.at(nm, idx.reshape(-1, 3)[:, k], fn)
            nm /= np.maximum(np.linalg.norm(nm, axis=1, keepdims=True), 1e-9)
            mat = g.j['materials'][p['material']]
            col = np.array(mat.get('pbrMetallicRoughness', {}).get('baseColorFactor', [1, 1, 1, 1])[:3])
            out.append(dict(pos=pos, nrm=nm, idx=idx, color=col, mat=mat.get('name', '')))
    return out


# ---------------------------------------------------------------------------
# 动画
# ---------------------------------------------------------------------------

def build_anims():
    w = GlbWriter()
    libs = {}
    ref = Gltf(UAL1)
    skin = ref.j['skins'][0]
    # 骨架节点原样拷过去（动画文件自己带一套骨架，加载后按骨骼名绑定到人物上）
    index = {}
    def copy(i):
        n = ref.nodes[i]
        node = {'name': n['name']}
        for k in ('translation', 'rotation', 'scale'):
            if k in n: node[k] = n[k]
        me = w.node(**node)
        index[n['name']] = me
        kids = [copy(c) for c in n.get('children', []) if c in skin['joints']]
        if kids: w.j['nodes'][me]['children'] = kids
        return me
    root = copy(ref.node_index('root'))
    w.j['scenes'][0]['nodes'] = [root]
    w.j['animations'] = []
    info = {}
    for out_name, (lib, src_name) in CLIPS.items():
        g = libs.setdefault(lib, Gltf(lib))
        a = next(x for x in g.j['animations'] if x['name'] == src_name)
        anim = {'name': out_name, 'channels': [], 'samplers': []}
        times = {}
        for c in a['channels']:
            bone = g.nodes[c['target']['node']]['name']
            path = c['target']['path']
            if bone not in ANIM_BONES or path == 'scale': continue
            if path == 'translation' and bone != 'pelvis': continue
            s = a['samplers'][c['sampler']]
            if s['input'] not in times:
                t = g.acc(s['input']).astype(np.float32)
                times[s['input']] = (w.accessor(t, 'SCALAR', minmax=True), float(t.max()))
            v = g.acc(s['output'])
            if path == 'rotation':
                v = v / np.linalg.norm(v, axis=1, keepdims=True)
                # 相邻关键帧取同一半球，线性插值才不会绕远路
                for k in range(1, len(v)):
                    if np.dot(v[k], v[k - 1]) < 0: v[k] = -v[k]
                out = w.accessor(np.round(v * 32767).astype(np.int16), 'VEC4', normalized=True)
            else:
                out = w.accessor(v.astype(np.float32), 'VEC3')
            anim['samplers'].append({'input': times[s['input']][0], 'output': out, 'interpolation': 'LINEAR'})
            anim['channels'].append({'sampler': len(anim['samplers']) - 1, 'target': {'node': index[bone], 'path': path}})
        w.j['animations'].append(anim)
        info[out_name] = {'source': src_name, 'duration': round(max(t[1] for t in times.values()), 3)}
    pelvis = ref.nodes[ref.node_index('pelvis')]['translation']
    # 左脚落地的相位（0..1）：游戏里用它把慢跑 / 冲刺两段动画的脚步对齐，并在落脚时出脚步声和扬尘
    contacts = {k: foot_contact(libs[CLIPS[k][0]], CLIPS[k][1]) for k in ('jog', 'sprint')}
    w.j['scenes'][0]['extras'] = {'pelvisRest': pelvis, 'contacts': contacts}
    size = w.save(os.path.join(OUT, 'anims.glb'))
    return {'file': 'anims.glb', 'bytes': size, 'clips': info, 'bones': len(ANIM_BONES), 'contacts': contacts}


def foot_contact(g, clip_name, samples=60):
    """用正向运动学求一段跑步循环里左脚落地的相位。"""
    a = next(x for x in g.j['animations'] if x['name'] == clip_name)
    tracks = {}
    for c in a['channels']:
        s = a['samplers'][c['sampler']]
        tracks[(g.nodes[c['target']['node']]['name'], c['target']['path'])] = (g.acc(s['input']), g.acc(s['output']))
    dur = max(float(t[0].max()) for t in tracks.values())
    def value(key, t, rest):
        if key not in tracks: return rest
        ts, vs = tracks[key]
        i = int(np.clip(np.searchsorted(ts, t) - 1, 0, len(ts) - 2))
        k = float(np.clip((t - ts[i]) / max(1e-9, ts[i + 1] - ts[i]), 0, 1))
        v = vs[i] * (1 - k) + vs[i + 1] * k
        return v / np.linalg.norm(v) if len(v) == 4 else v
    def height(bone, t):
        chain, i = [], g.node_index(bone)
        while True:
            chain.append(i)
            if i not in g.parent: break
            i = g.parent[i]
        m = np.eye(4)
        for i in reversed(chain):
            n = g.nodes[i]
            m = m @ trs_matrix(value((n.get('name'), 'translation'), t, n.get('translation', [0, 0, 0])), value((n.get('name'), 'rotation'), t, n.get('rotation', [0, 0, 0, 1])), n.get('scale', [1, 1, 1]))
        return m[1, 3]
    phases = []
    for side, shift in (('l', 0.0), ('r', 0.5)):
        h = np.array([min(height('ball_' + side, dur * k / samples), height('foot_' + side, dur * k / samples) - 0.06) for k in range(samples)])
        # 支撑期 = 脚贴近最低点的最长一段；落脚时刻取这一段的开头
        low = h < h.min() + 0.045
        best, start = 0, 0
        for k in range(samples):
            if low[k] and not low[k - 1]:
                n = 0
                while low[(k + n) % samples] and n < samples: n += 1
                if n > best: best, start = n, k
        phases.append(((start / samples) - shift) % 1)
    # 左右脚各算一次（右脚减半个周期），取环形平均
    ang = np.array(phases) * 2 * np.pi
    print('  落脚相位', clip_name, [round(x, 3) for x in phases])
    return round(float((np.arctan2(np.sin(ang).mean(), np.cos(ang).mean()) / (2 * np.pi)) % 1), 3)


def fist_pose():
    """跑步动画第 0 帧的手指姿势（整段动画里手指不动），写成人物骨架的静止姿势。"""
    g = Gltf(UAL1)
    a = next(x for x in g.j['animations'] if x['name'] == 'Jog_Fwd_Loop')
    pose = {}
    for c in a['channels']:
        bone = g.nodes[c['target']['node']]['name']
        if c['target']['path'] != 'rotation': continue
        if any(bone.startswith(f) for f in ('index', 'middle', 'ring', 'pinky', 'thumb')):
            pose[bone] = [float(x) for x in g.acc(a['samplers'][c['sampler']]['output'])[0]]
    return pose


# ---------------------------------------------------------------------------
# 贴图：把网格摊到 UV 空间，得到每个像素对应的身体位置 / 朝向 / 骨骼归属
# ---------------------------------------------------------------------------

GROUPS = {
    'torso': ['pelvis', 'spine_01', 'spine_02', 'spine_03', 'clavicle_l', 'clavicle_r'],
    'head': ['neck_01', 'Head'],
    'upperarm': ['upperarm_l', 'upperarm_r'],
    'lowerarm': ['lowerarm_l', 'lowerarm_r'],
    'hand': ['hand_'] + [f for f in ('index', 'middle', 'ring', 'pinky', 'thumb')],
    'thigh': ['thigh_l', 'thigh_r'],
    'calf': ['calf_l', 'calf_r'],
    'foot': ['foot_l', 'foot_r', 'ball_'],
}


def group_weights(char, prim):
    jn, wt = prim['JOINTS_0'], prim['WEIGHTS_0']
    out = {}
    for key, pats in GROUPS.items():
        sel = np.array([any(n == p or (p.endswith('_') and n.startswith(p)) or (p in ('index', 'middle', 'ring', 'pinky', 'thumb') and n.startswith(p)) for p in pats) for n in char.names])
        out[key] = (wt * sel[jn]).sum(axis=1)
    return out


def bake_uv_maps(prim, attrs, size):
    """把逐顶点属性光栅化到贴图空间。attrs: {name: (N, k)}。返回 {name: (size, size, k)} 和覆盖掩码。"""
    uv = prim['TEXCOORD_0'].astype(np.float64) * size - 0.5
    idx = prim['indices'].reshape(-1, 3)
    names = list(attrs)
    data = np.concatenate([attrs[n].reshape(len(uv), -1) for n in names], axis=1)
    out = np.zeros((size, size, data.shape[1]), dtype=np.float32)
    mask = np.zeros((size, size), dtype=bool)
    for a, b, c in idx:
        p0, p1, p2 = uv[a], uv[b], uv[c]
        x0 = max(int(np.floor(min(p0[0], p1[0], p2[0]))) - 1, 0)
        x1 = min(int(np.ceil(max(p0[0], p1[0], p2[0]))) + 1, size - 1)
        y0 = max(int(np.floor(min(p0[1], p1[1], p2[1]))) - 1, 0)
        y1 = min(int(np.ceil(max(p0[1], p1[1], p2[1]))) + 1, size - 1)
        if x1 < x0 or y1 < y0: continue
        d = (p1[1] - p2[1]) * (p0[0] - p2[0]) + (p2[0] - p1[0]) * (p0[1] - p2[1])
        if abs(d) < 1e-12: continue
        xs, ys = np.meshgrid(np.arange(x0, x1 + 1), np.arange(y0, y1 + 1))
        l0 = ((p1[1] - p2[1]) * (xs - p2[0]) + (p2[0] - p1[0]) * (ys - p2[1])) / d
        l1 = ((p2[1] - p0[1]) * (xs - p2[0]) + (p0[0] - p2[0]) * (ys - p2[1])) / d
        l2 = 1 - l0 - l1
        e = -0.6 / max(1.0, np.sqrt(abs(d)))  # 边上稍微外扩一点，避免接缝漏像素
        inside = (l0 >= e) & (l1 >= e) & (l2 >= e)
        if not inside.any(): continue
        l0, l1, l2 = np.clip(l0[inside], 0, 1), np.clip(l1[inside], 0, 1), np.clip(l2[inside], 0, 1)
        s = l0 + l1 + l2
        val = (l0[:, None] * data[a] + l1[:, None] * data[b] + l2[:, None] * data[c]) / s[:, None]
        out[ys[inside], xs[inside]] = val
        mask[ys[inside], xs[inside]] = True
    # 没被覆盖的像素用最近的有效像素填上
    _, (iy, ix) = ndimage.distance_transform_edt(~mask, return_indices=True)
    out = out[iy, ix]
    res, k = {}, 0
    for n in names:
        w = attrs[n].reshape(len(uv), -1).shape[1]
        res[n] = out[:, :, k:k + w]
        k += w
    return res, mask


def smooth(x, a, b):
    t = np.clip((x - a) / (b - a), 0, 1)
    return t * t * (3 - 2 * t)


# ---------------------------------------------------------------------------
# 穿搭：在身体贴图上画运动服，并把对应区域的网格略微外扩出衣服的厚度
# ---------------------------------------------------------------------------

def body_metrics(char):
    bw = char.bone_world
    y = lambda n: float(bw[n][1, 3])
    return {
        'ankle': y('foot_l'), 'knee': y('calf_l'), 'hip': y('thigh_l'), 'pelvis': y('pelvis'), 'waist': y('spine_01'), 'chest': y('spine_03'),
        'neck': y('neck_01'), 'head': y('Head'), 'shoulder_x': abs(float(bw['upperarm_l'][0, 3])), 'elbow_x': abs(float(bw['lowerarm_l'][0, 3])),
        'wrist_x': abs(float(bw['hand_l'][0, 3])), 'shoulder_y': y('upperarm_l'), 'neck_z': float(bw['neck_01'][2, 3]),
    }


def garment_masks(char, look, P, N, G):
    """返回 {名字: 0..1 的覆盖度}。P/N 是每个采样点（像素或顶点）的静止姿势位置 / 法线，G 是骨骼分组权重。"""
    m = body_metrics(char)
    x, y, z = np.abs(P[..., 0]), P[..., 1], P[..., 2]
    e = 0.006  # 边缘过渡宽度（米）
    legs = np.clip(G['thigh'] + G['calf'] + G['foot'], 0, 1)
    arms = np.clip(G['upperarm'] + G['lowerarm'] + G['hand'], 0, 1)
    trunk = np.clip(G['torso'] + G['head'], 0, 1)
    out = {}

    # ---- 下装 ----
    leg_len = m['hip'] - m['knee']
    hem = {'shorts': m['knee'] + leg_len * 0.42, 'split': m['knee'] + leg_len * 0.68, 'half': m['knee'] + leg_len * 0.12, 'tights': m['ankle'] + 0.07}[look['legs']]
    waist = m['waist'] + 0.035
    lower = smooth(y, hem - e, hem + e) * (1 - smooth(y, waist - e, waist + e)) * np.clip(G['torso'] + legs, 0, 1) * (1 - arms)
    if look['legs'] == 'split':
        # 竞速短裤两侧开衩：外侧裤脚更高
        side = smooth(x, 0.1, 0.19) * (1 - smooth(y, hem + 0.07, hem + 0.1))
        lower = lower * (1 - 0.0 * side)
    out['shorts'] = lower
    out['hem'] = hem

    # ---- 上衣 ----
    top_hem = m['waist'] + (0.0 if look.get('crop') else -0.03)
    if look.get('crop'): top_hem = m['waist'] + 0.16
    neck_r = np.sqrt(P[..., 0] ** 2 + (z - m['neck_z'] - 0.01) ** 2 * 0.8)
    # 领口：圆领；背心领口开得更低更宽
    collar_y = m['neck'] - (0.035 if look['sleeves'] != 'none' else 0.075)
    collar = smooth(neck_r, 0.062, 0.062 + e * 2) if look['sleeves'] != 'none' else smooth(neck_r, 0.085, 0.085 + e * 2)
    collar = np.maximum(collar, 1 - smooth(y, collar_y - e, collar_y + e))
    body_top = smooth(y, top_hem - e, top_hem + e) * trunk * (1 - G['head'] * smooth(y, m['neck'] - 0.01, m['neck'] + 0.02)) * collar
    sx = m['shoulder_x']
    if look['sleeves'] == 'none':
        # 背心：肩带宽约 9 cm，袖窿从腋下挖到肩头
        strap = 1 - smooth(x, sx - 0.075, sx - 0.06)
        arm_hole = smooth(y, m['shoulder_y'] - 0.15, m['shoulder_y'] - 0.11) * smooth(x, sx - 0.085, sx - 0.06)
        top = body_top * np.maximum(strap, 1 - arm_hole) * (1 - smooth(arms, 0.45, 0.6))
    else:
        end = sx + (m['elbow_x'] - sx) * 0.52 if look['sleeves'] == 'short' else m['wrist_x'] - 0.015
        sleeve = (1 - smooth(x, end - e, end + e)) * np.clip(arms + G['torso'], 0, 1) * smooth(x, sx - 0.06, sx - 0.02)
        top = np.maximum(body_top, sleeve * smooth(y, top_hem, top_hem + 0.05))
    out['top'] = np.clip(top, 0, 1)
    out['top_hem'] = top_hem

    # ---- 小腿：压缩腿套 / 袜子 / 鞋 ----
    sock_top = m['ankle'] + (0.085 if look.get('sock', 'crew') == 'crew' else 0.035)
    shoe_top = m['ankle'] + 0.012
    foot = np.clip(G['foot'] + G['calf'], 0, 1)
    out['shoe'] = (1 - smooth(y, shoe_top - e, shoe_top + e)) * foot
    out['sock'] = (1 - smooth(y, sock_top - e, sock_top + e)) * foot * (1 - out['shoe'])
    if look.get('calf'):
        c0, c1 = sock_top + 0.012, m['knee'] - 0.065
        out['calf'] = smooth(y, c0 - e, c0 + e) * (1 - smooth(y, c1 - e, c1 + e)) * np.clip(G['calf'] + G['thigh'], 0, 1)
    # 鞋底：朝下的面 + 贴地的一圈
    out['sole'] = out['shoe'] * np.maximum(smooth(-N[..., 1], 0.35, 0.6), 1 - smooth(y, 0.012, 0.022))
    out['midsole'] = out['shoe'] * (1 - smooth(y, 0.03, 0.036)) * (1 - out['sole'])
    out['toe'] = out['shoe'] * smooth(z, 0.105, 0.125)
    out['heel'] = out['shoe'] * (1 - smooth(z, -0.075, -0.055))
    out['laces'] = out['shoe'] * smooth(N[..., 1], 0.55, 0.75) * smooth(z, 0.0, 0.02) * (1 - smooth(z, 0.085, 0.1)) * (1 - smooth(np.abs(x - 0.105), 0.016, 0.022))

    # ---- 手臂：袖套 / 手表 ----
    if look.get('arm_sleeve'):
        a0, a1 = m['elbow_x'] - 0.1, m['wrist_x'] - 0.02
        out['arm_sleeve'] = smooth(x, a0 - e, a0 + e) * (1 - smooth(x, a1 - e, a1 + e)) * arms
    if look.get('watch', True):
        w0 = m['wrist_x'] - 0.035
        out['watch'] = smooth(x, w0 - 0.003, w0) * (1 - smooth(x, w0 + 0.03, w0 + 0.033)) * arms * (P[..., 0] > 0)
    if look.get('headband'):
        hb = m['head'] + 0.115
        out['headband'] = smooth(y, hb - 0.02, hb - 0.017) * (1 - smooth(y, hb + 0.017, hb + 0.02)) * G['head']

    # ---- 越野背包的肩带（画在上衣外面）；包体是挂在后背上的配件模型 ----
    if look.get('vest'):
        front = smooth(N[..., 2], -0.25, 0.1)
        back = 1 - front
        no_head = (1 - G['head']) * (1 - smooth(arms, 0.45, 0.65))
        bottom = m['waist'] + 0.15
        cx = 0.088 - (m['shoulder_y'] - y) * 0.05
        # 胸前两条宽肩带，翻过肩膀接到后背的包体
        strap = (1 - smooth(np.abs(x - cx), 0.036, 0.04)) * smooth(y, bottom - e, bottom + e) * trunk
        # 后背的包体：上宽下窄
        half = 0.125 + 0.035 * smooth(y, bottom, m['shoulder_y'])
        panel = (1 - smooth(x, half - e, half + e)) * smooth(y, bottom + 0.01 - e, bottom + 0.01 + e) * (1 - smooth(y, m['shoulder_y'] + 0.03, m['shoulder_y'] + 0.045)) * trunk * back
        # 腋下把肩带和包体连起来的侧带
        side = smooth(x, cx, cx + 0.01) * (1 - smooth(np.abs(y - (bottom + 0.05)), 0.03, 0.034)) * G['torso']
        chest_clip = (1 - smooth(x, cx, cx + 0.004)) * np.maximum(1 - smooth(np.abs(y - (m['chest'] + 0.1)), 0.007, 0.01), 1 - smooth(np.abs(y - (m['chest'] + 0.02)), 0.007, 0.01)) * front * trunk
        out['vest'] = np.clip(np.maximum.reduce([strap * front, panel, strap * back * smooth(y, m['shoulder_y'] - 0.02, m['shoulder_y']), side, chest_clip * 0.9]), 0, 1) * no_head
        out['pack'] = panel * no_head
        # 包体上的细节：中间一片网布口袋、两条反光条
        out['pack_pocket'] = out['pack'] * (1 - smooth(x, half * 0.62, half * 0.62 + e)) * (1 - smooth(y, m['chest'] + 0.07, m['chest'] + 0.075)) * smooth(y, bottom + 0.035, bottom + 0.04)
        out['pack_trim'] = out['pack'] * (1 - smooth(np.abs(x - half * 0.8), 0.006, 0.009)) * (1 - smooth(np.abs(y - (m['chest'] + 0.11)), 0.03, 0.033))
        fy = m['chest'] + 0.035
        fw, fh = (0.03, 0.062) if char.gender == 'm' else (0.023, 0.05)
        out['flask'] = (1 - smooth(np.sqrt(((x - cx) / fw) ** 2 + ((y - fy) / fh) ** 2), 0.9, 1.05)) * front * trunk * no_head
        out['flask_cap'] = (1 - smooth(np.sqrt(((x - cx) / 0.012) ** 2 + ((y - fy - fh - 0.006) / 0.014) ** 2), 0.9, 1.1)) * front * trunk * no_head
    if look.get('bib'):
        by = m['waist'] + 0.075
        out['bib'] = (1 - smooth(x, 0.082, 0.085)) * (1 - smooth(np.abs(y - by), 0.05, 0.053)) * smooth(z, 0.0, 0.02) * G['torso']
        out['bib_bar'] = out['bib'] * smooth(y, by + 0.028, by + 0.03)
    return out


def paint_body(char, look, base_img):
    size = BODY_TEX
    prim = char.parts['body']
    G = group_weights(char, prim)
    attrs = {'P': prim['POSITION'], 'N': prim['NORMAL']}
    attrs.update(G)
    maps, _ = bake_uv_maps(prim, attrs, size)
    P, N = maps['P'], maps['N']
    Gm = {k: maps[k][..., 0] for k in G}
    M = garment_masks(char, look, P, N, Gm)

    base = np.asarray(base_img.resize((size, size), Image.LANCZOS).convert('RGB'), dtype=np.float32) / 255
    base = np.clip(base * np.array(look.get('skin_gain', (1, 1, 1)), dtype=np.float32), 0, 1)
    # 原贴图上内衣的位置补成肤色（否则短裤 / 背心盖不住的地方会露出来）
    lum = base @ np.array([0.299, 0.587, 0.114], dtype=np.float32)
    sat = base.max(axis=2) - base.min(axis=2)
    under = (sat < 0.09) & (lum < 0.5) & (Gm['torso'] + Gm['thigh'] > 0.5)
    under = ndimage.binary_dilation(under, iterations=3)
    if under.any():
        skin_ok = ~under & (Gm['torso'] + Gm['thigh'] > 0.5)
        _, (iy, ix) = ndimage.distance_transform_edt(~skin_ok, return_indices=True)
        fill = base[iy, ix]
        fill = np.stack([ndimage.gaussian_filter(fill[..., c], 6) for c in range(3)], axis=2)
        base = np.where(under[..., None], fill, base)
        lum = base @ np.array([0.299, 0.587, 0.114], dtype=np.float32)
    # 布料上保留一点原贴图里烘焙的明暗（肌肉 / 褶皱的起伏），但压得很淡
    local = ndimage.gaussian_filter(lum, 24)
    relief = np.clip(lum / np.maximum(local, 1e-3), 0.8, 1.15)
    img = base.copy()

    def lay(mask, color, relief_k=0.55, shade=None):
        nonlocal img
        col = srgb(color)[None, None, :] * (1 + (relief[..., None] - 1) * relief_k)
        if shade is not None: col = col * shade[..., None]
        a = np.clip(mask, 0, 1)[..., None]
        img = img * (1 - a) + col * a

    def edge_shadow(mask, strength=0.35, width=3.0):
        # 衣服边缘在皮肤上投一圈淡淡的阴影，衣服自己的边缘压一道缝线
        nonlocal img
        blur = ndimage.gaussian_filter(mask.astype(np.float32), width)
        shadow = np.clip(blur - mask, 0, 1) * strength * 2
        img = img * (1 - shadow[..., None] * np.array([0.75, 0.85, 0.9])[None, None, :])
        seam = np.clip(mask - ndimage.gaussian_filter(mask.astype(np.float32), 1.6), 0, 1) * 1.2
        img = img * (1 - np.clip(seam, 0, 0.3)[..., None])

    y = P[..., 1]
    # 鞋
    lay(M['shoe'], look['shoe'], 0.3)
    lay(M['toe'] * 0.85, look.get('shoe2', 0x26282c), 0.2)
    lay(M['heel'] * 0.9, look.get('shoe2', 0x26282c), 0.2)
    lay(M['laces'], 0xf2f2ee, 0.1)
    lay(M['midsole'], look.get('sole', 0xf1ede4), 0.1)
    lay(M['sole'], 0x2a2826, 0.1)
    lay(M['sock'], look.get('sock_color', 0xf2f2f2), 0.4)
    if 'calf' in M:
        lay(M['calf'], look['calf'], 0.5)
        edge_shadow(M['calf'], 0.25)
    # 下装：侧面一条撞色
    side = smooth(np.abs(P[..., 0]), 0.0, 1.0)
    lay(M['shorts'], look['shorts'], 0.5)
    if look.get('accent') is not None:
        stripe = M['shorts'] * smooth(np.abs(N[..., 0]), 0.82, 0.9) * (1 - smooth(np.abs(P[..., 2] + 0.01), 0.022, 0.03))
        lay(stripe, look['accent'], 0.4)
    wb = M['shorts'] * smooth(y, M['top_hem'] + 0.035, M['top_hem'] + 0.04) if False else None
    edge_shadow(M['shorts'], 0.4)
    # 上衣
    lay(M['top'], look['shirt'], 0.6)
    if look.get('accent') is not None and look['sleeves'] != 'none':
        m = body_metrics(char)
        cuff = M['top'] * smooth(np.abs(P[..., 0]), m['shoulder_x'] + 0.05, m['shoulder_x'] + 0.06) * (Gm['upperarm'] + Gm['lowerarm'] > 0.5)
        end = m['shoulder_x'] + (m['elbow_x'] - m['shoulder_x']) * 0.52 if look['sleeves'] == 'short' else m['wrist_x'] - 0.015
        lay(cuff * smooth(np.abs(P[..., 0]), end - 0.03, end - 0.026), look['accent'], 0.4)
    if look.get('panel') is not None:
        # 上衣两侧的拼色片
        panel = M['top'] * smooth(np.abs(N[..., 0]), 0.78, 0.9) * (Gm['torso'] > 0.6) * (1 - smooth(y, body_metrics(char)['shoulder_y'] - 0.12, body_metrics(char)['shoulder_y'] - 0.08))
        lay(panel, look['panel'], 0.5)
    edge_shadow(M['top'], 0.4)
    for key, color in (('arm_sleeve', look.get('arm_sleeve')), ('headband', look.get('headband')), ('watch', 0x15171a)):
        if key in M and color is not None:
            lay(M[key], color, 0.4)
            edge_shadow(M[key], 0.25, 2.0)
    if 'bib' in M:
        lay(M['bib'], 0xf4f2ec, 0.15)
        lay(M['bib_bar'], look.get('bib'), 0.15)
        edge_shadow(M['bib'], 0.3, 2.0)
    if 'vest' in M:
        lay(M['vest'], look['vest'], 0.3)
        vest_dark = int(''.join('%02x' % int(c * 0.62) for c in ((look['vest'] >> 16) & 255, (look['vest'] >> 8) & 255, look['vest'] & 255)), 16)
        lay(M['pack_pocket'], vest_dark, 0.2)
        lay(M['pack_trim'], look.get('trim', 0xd8dde2), 0.1)
        edge_shadow(M['vest'], 0.45, 2.5)
        lay(M['flask'], 0xa8d4ea, 0.1, shade=0.82 + 0.3 * smooth(N[..., 1], -0.3, 0.6))
        lay(M['flask_cap'], 0x1f6fb8, 0.1)

    out = Image.fromarray((np.clip(img, 0, 1) * 255 + 0.5).astype(np.uint8))
    return out


def slim_body(char, look, pos):
    """原模型是健美身材，按骨骼把手臂 / 躯干 / 腿收细一些，更接近耐力跑者。"""
    k = dict({'arm': 0.86, 'torso_x': 0.95, 'torso_z': 0.9, 'thigh': 0.93, 'calf': 0.96}, **look.get('slim', {}))
    G = group_weights(char, char.parts['body'])
    bw = char.bone_world
    out = pos.copy()
    m = body_metrics(char)
    sign = np.sign(pos[:, 0])
    arm_w = np.clip(G['upperarm'] + G['lowerarm'], 0, 1)
    # 躯干：绕脊柱收窄；髋部以下不动
    tw = np.clip(G['torso'], 0, 1) * smooth(pos[:, 1], m['hip'] - 0.02, m['waist'] + 0.06)
    z0 = float(bw['spine_02'][2, 3])
    out[:, 0] *= 1 - (1 - k['torso_x']) * tw
    out[:, 2] = z0 + (out[:, 2] - z0) * (1 - (1 - k['torso_z']) * tw)
    # 肩膀跟着收窄，手臂整体往里挪
    out[:, 0] -= sign * (1 - k['torso_x']) * m['shoulder_x'] * np.clip(arm_w + G['hand'], 0, 1)
    def radial(a, b, w, f):
        d = (b - a) / np.linalg.norm(b - a)
        rel = out - a
        t = rel @ d
        rad = rel - t[:, None] * d
        return a + t[:, None] * d + rad * (1 - (1 - f) * w)[:, None]
    for s in ('l', 'r'):
        on = (sign > 0) == (bw['upperarm_' + s][0, 3] > 0)
        shift = np.array([-np.sign(bw['upperarm_' + s][0, 3]) * (1 - k['torso_x']) * m['shoulder_x'], 0, 0])
        out = radial(bw['upperarm_' + s][:3, 3] + shift, bw['hand_' + s][:3, 3] + shift, arm_w * on, k['arm'])
        out = radial(bw['thigh_' + s][:3, 3], bw['calf_' + s][:3, 3], G['thigh'] * on * (1 - smooth(pos[:, 1], m['hip'] - 0.05, m['hip'] + 0.03)), k['thigh'])
        out = radial(bw['calf_' + s][:3, 3], bw['foot_' + s][:3, 3], G['calf'] * on, k['calf'])
    return out


def inflate_body(char, look, pos, nrm):
    """让衣服有一点厚度：按同一套规则在顶点上求覆盖度，沿法线外扩。"""
    prim = char.parts['body']
    G = group_weights(char, prim)
    M = garment_masks(char, look, pos, nrm, G)
    y = pos[:, 1]
    off = np.zeros(len(pos))
    loose = {'shorts': 0.013, 'split': 0.012, 'half': 0.003, 'tights': 0.003}[look['legs']]
    # 宽松短裤：越靠近裤脚越往外撑
    flare = 1 + 1.3 * (1 - smooth(y, M['hem'], M['hem'] + 0.12)) if look['legs'] in ('shorts', 'split') else 1
    off = np.maximum(off, M['shorts'] * loose * flare)
    top_loose = 0.004 if look.get('tight_top') else 0.009
    off = np.maximum(off, M['top'] * top_loose * (1 + 0.8 * (1 - smooth(y, M['top_hem'], M['top_hem'] + 0.1))))
    off = np.maximum(off, M['shoe'] * 0.011)
    off = np.maximum(off, M['sock'] * 0.003)
    if 'calf' in M: off = np.maximum(off, M['calf'] * 0.002)
    if 'vest' in M: off = np.maximum(off, M['vest'] * 0.014 + M['flask'] * 0.03 + M['pack'] * (0.03 + 0.012 * M['pack_pocket']))
    out = pos + nrm * off[:, None]
    # 鞋底压平并加厚：脚底贴地的部分整体下移，做出中底的厚度
    sole = M['shoe'] * (1 - smooth(y, 0.0, 0.05))
    out[:, 1] -= sole * 0.014
    return out


# ---------------------------------------------------------------------------
# 头部附件图集：头发 / 眉毛 / 眼睛 + 纯色色块（配件用）
# ---------------------------------------------------------------------------

class Atlas:
    CELL = 32

    def __init__(self, hair_color, brow_color):
        self.img = np.zeros((ATLAS, ATLAS, 3), dtype=np.float32)
        h = ATLAS // 2
        for k in (1, 2):
            t = np.asarray(Image.open(TEX_DIR + 'T_Hair_%d_BaseColor.png' % k).convert('RGB').resize((h, h), Image.LANCZOS), dtype=np.float32) / 255
            g = t.mean(axis=2, keepdims=True)
            g = np.clip(g / max(1e-3, np.percentile(g, 85)), 0, 1.25)
            self.img[0:h, (k - 1) * h:k * h] = g * srgb(hair_color)[None, None, :]
        eye = np.asarray(Image.open(TEX_DIR + 'T_Eye_Brown.png').convert('RGB').resize((128, 128), Image.LANCZOS), dtype=np.float32) / 255
        self.img[h:h + 128, 0:128] = eye
        self.brow = self.color_uv(brow_color)
        self.cells = {}

    def hair_uv(self, uv, k):
        return np.stack([(np.clip(uv[:, 0], 0, 1) * 0.5 + (k - 1) * 0.5), np.clip(uv[:, 1], 0, 1) * 0.5], axis=1) * (1 - 2 / ATLAS) + 1 / ATLAS * np.array([1 if k == 1 else 0, 0]) if False else \
            np.stack([np.clip(uv[:, 0], 0.004, 0.996) * 0.5 + (k - 1) * 0.5, np.clip(uv[:, 1], 0.004, 0.996) * 0.5], axis=1)

    def eye_uv(self, uv):
        return np.stack([np.clip(uv[:, 0], 0.01, 0.99) * 0.25, 0.5 + np.clip(uv[:, 1], 0.01, 0.99) * 0.25], axis=1)

    def color_uv(self, color):
        """给一个纯色分配一个色块，返回色块中心的 UV。color 可以是 0xRRGGBB 或线性空间的 (r,g,b)。"""
        key = color if isinstance(color, int) else tuple(np.round(np.asarray(color), 4))
        if key not in getattr(self, 'cells', {}):
            if not hasattr(self, 'cells'): self.cells = {}
            n = len(self.cells)
            per_row = ATLAS // self.CELL
            cx, cy = n % per_row, n // per_row
            y0 = ATLAS - self.CELL * (cy + 1)
            rgb = srgb(color) if isinstance(color, int) else np.clip(np.asarray(color, dtype=np.float32), 0, 1) ** (1 / 2.2)
            self.img[y0:y0 + self.CELL, cx * self.CELL:(cx + 1) * self.CELL] = rgb
            self.cells[key] = np.array([(cx + 0.5) * self.CELL / ATLAS, (y0 + self.CELL / 2) / ATLAS])
        return self.cells[key]

    def image(self):
        return Image.fromarray((np.clip(self.img, 0, 1) * 255 + 0.5).astype(np.uint8))


# ---------------------------------------------------------------------------
# 组装并写出一个人物
# ---------------------------------------------------------------------------

def rigid(char, bone, pos, nrm):
    n = len(pos)
    j = np.zeros((n, 4), dtype=np.int64)
    j[:, 0] = KEEP_BONES.index(bone)
    w = np.zeros((n, 4), dtype=np.float32)
    w[:, 0] = 1
    return j, w


def place_prop(parts, scale, rot_xyz_deg, offset, squash=(1, 1, 1)):
    """把配件摆到人物静止姿势下的位置：先按自身包围盒居中，再缩放 / 旋转 / 平移。"""
    allp = np.concatenate([p['pos'] for p in parts])
    c = (allp.min(0) + allp.max(0)) / 2
    size = (allp.max(0) - allp.min(0)).max()
    rx, ry, rz = np.radians(rot_xyz_deg)
    Rx = np.array([[1, 0, 0], [0, np.cos(rx), -np.sin(rx)], [0, np.sin(rx), np.cos(rx)]])
    Ry = np.array([[np.cos(ry), 0, np.sin(ry)], [0, 1, 0], [-np.sin(ry), 0, np.cos(ry)]])
    Rz = np.array([[np.cos(rz), -np.sin(rz), 0], [np.sin(rz), np.cos(rz), 0], [0, 0, 1]])
    R = Rz @ Ry @ Rx
    S = np.diag(squash)
    out = []
    for p in parts:
        pos = ((p['pos'] - c) / size * scale) @ R.T @ S + np.array(offset)
        nrm = p['nrm'] @ R.T @ np.linalg.inv(S)
        nrm /= np.maximum(np.linalg.norm(nrm, axis=1, keepdims=True), 1e-9)
        out.append(dict(p, pos=pos, nrm=nrm))
    return out


def simplify(pos, nrm, uv, joints, weights, idx, ratio, error=0.01):
    """减面：返回压缩掉无用顶点之后的 (pos, nrm, uv, joints, weights, idx)。"""
    if ratio >= 0.999: return pos, nrm, uv, joints, weights, idx
    with tempfile.TemporaryDirectory() as d:
        np.ascontiguousarray(pos, dtype=np.float32).tofile(os.path.join(d, 'pos.f32'))
        np.ascontiguousarray(np.concatenate([nrm, uv], axis=1), dtype=np.float32).tofile(os.path.join(d, 'attr.f32'))
        np.ascontiguousarray(idx, dtype=np.uint32).tofile(os.path.join(d, 'idx.u32'))
        r = subprocess.run(['node', os.path.join(os.path.dirname(__file__), 'simplify.mjs'), d, str(ratio), str(error)], capture_output=True, text=True)
        if r.returncode != 0: raise RuntimeError(r.stderr)
        out = np.fromfile(os.path.join(d, 'out.u32'), dtype=np.uint32)
    used = np.unique(out)
    remap = np.full(len(pos), -1, dtype=np.int64)
    remap[used] = np.arange(len(used))
    return pos[used], nrm[used], uv[used], joints[used], weights[used], remap[out].astype(np.uint32)


def quantize_mesh(w, pos, nrm, uv, joints, weights, idx):
    n8 = np.zeros((len(nrm), 4), dtype=np.int8)
    n8[:, :3] = np.round(np.clip(nrm, -1, 1) * 127)
    wt = weights / np.maximum(weights.sum(axis=1, keepdims=True), 1e-9)
    w8 = np.floor(wt * 255 + 0.5).astype(np.int64)
    # 量化后每个顶点的权重和仍然是 255
    w8[np.arange(len(w8)), wt.argmax(axis=1)] += 255 - w8.sum(axis=1)
    attrs = {
        'POSITION': w.accessor(pos.astype(np.float32), 'VEC3', target=34962, minmax=True),
        'TEXCOORD_0': w.accessor(np.round(np.clip(uv, 0, 1) * 65535).astype(np.uint16), 'VEC2', normalized=True, target=34962),
        'JOINTS_0': w.accessor(joints.astype(np.uint8), 'VEC4', target=34962),
        'WEIGHTS_0': w.accessor(w8.astype(np.uint8), 'VEC4', normalized=True, target=34962),
    }
    # int8 法线：一个顶点占 4 字节（第 4 个字节是对齐用的填充）
    a = w.accessor(n8, 'VEC4', normalized=True, target=34962)
    w.j['accessors'][a]['type'] = 'VEC3'
    w.j['bufferViews'][w.j['accessors'][a]['bufferView']]['byteStride'] = 4
    attrs['NORMAL'] = a
    indices = w.accessor(idx.astype(np.uint16 if len(pos) < 65536 else np.uint32), 'SCALAR', target=34963)
    return {'attributes': attrs, 'indices': indices, 'mode': 4}


def build_runner(name, look, fists):
    char = Character(look['gender'])
    w = GlbWriter()
    w.j['extensionsUsed'] = ['KHR_mesh_quantization']
    w.j['extensionsRequired'] = ['KHR_mesh_quantization']
    g = char.g
    # 骨架：只写保留的骨骼
    joint_node = {}
    def copy(i):
        n = g.nodes[i]
        node = {'name': n['name']}
        for k in ('translation', 'rotation', 'scale'):
            if k in n: node[k] = n[k]
        me = w.node(**node)
        joint_node[n['name']] = me
        kids = [copy(c) for c in n.get('children', []) if c in char.joints and g.nodes[c]['name'] in KEEP_BONES]
        if kids: w.j['nodes'][me]['children'] = kids
        return me
    root = copy(g.node_index('root'))
    ibm = w.accessor(np.stack([char.ibm[char.joint_index(n)] for n in KEEP_BONES]), 'MAT4')
    w.j['skins'] = [{'joints': [joint_node[n] for n in KEEP_BONES], 'inverseBindMatrices': ibm, 'skeleton': root}]

    # ---- 身体 ----
    body = char.parts['body']
    pos = slim_body(char, look, body['POSITION'].astype(np.float64))
    pos = inflate_body(char, look, pos, body['NORMAL'].astype(np.float64))
    w.j['materials'] = [{'name': 'body', 'pbrMetallicRoughness': {'metallicFactor': 0, 'roughnessFactor': 0.8}},
                        {'name': 'extras', 'pbrMetallicRoughness': {'metallicFactor': 0, 'roughnessFactor': 0.8}, 'doubleSided': True}]
    pos, nrm = char.bake_fists(fists, pos, body['NORMAL'].astype(np.float64), body['JOINTS_0'], body['WEIGHTS_0'])
    sb = simplify(pos, nrm, body['TEXCOORD_0'], *char.reduce_joints(body['JOINTS_0'], body['WEIGHTS_0']), body['indices'], look.get('detail', 0.5))
    prim = quantize_mesh(w, *sb)
    prim['material'] = 0
    w.j['meshes'] = [{'name': 'body', 'primitives': [prim]}]
    tris = {'body': len(sb[5]) // 3}

    skin_tex = {'m': {'light': 'T_Superhero_Male_Ligh.png', 'dark': 'T_Superhero_Male_Dark.png'},
                'f': {'light': 'T_Superhero_Female_Light_BaseColor.png', 'dark': 'T_Superhero_Female_Dark_BaseColor.png'}}[look['gender']][look.get('skin', 'light')]
    body_img = paint_body(char, look, Image.open(TEX_DIR + skin_tex))
    body_img.save(os.path.join(OUT, name + '_body.jpg'), quality=86, optimize=True, subsampling=1)

    # ---- 头发 / 眉毛 / 眼睛 / 配件，合并成一个网格、共用一张小图集 ----
    atlas = Atlas(look.get('hair_color', 0x2a211c), look.get('brow_color', look.get('hair_color', 0x2a211c)))
    P, Nn, UV, J, W, I = [], [], [], [], [], []
    count = 0
    def add(pos, nrm, uv, joints, weights, idx, key):
        nonlocal count
        if key != 'prop': joints, weights = char.reduce_joints(joints, weights)  # 配件直接绑在保留的骨骼上，不用换算
        P.append(pos); Nn.append(nrm); UV.append(uv); J.append(joints); W.append(weights); I.append(idx + count)
        count += len(pos)
        tris[key] = tris.get(key, 0) + len(idx) // 3
    e = char.parts['eyes']
    add(*simplify(e['POSITION'], e['NORMAL'], atlas.eye_uv(e['TEXCOORD_0']), e['JOINTS_0'], e['WEIGHTS_0'], e['indices'], 0.5, 0.02), 'eyes')
    b = char.parts['brows']
    add(*simplify(b['POSITION'], b['NORMAL'], atlas.hair_uv(b['TEXCOORD_0'], 1 if look['gender'] == 'm' else 2), b['JOINTS_0'], b['WEIGHTS_0'], b['indices'], 0.5, 0.02), 'brows')
    head_dy = 0.0
    for h in look.get('hair', []):
        hp = load_hair(h, char)
        ratio = 0.45 if len(hp['indices']) > 6000 else 1
        sh = simplify(hp['POSITION'], hp['NORMAL'], atlas.hair_uv(hp['TEXCOORD_0'], hp['hair_tex']), hp['JOINTS_0'], hp['WEIGHTS_0'], hp['indices'], ratio, 0.02)
        add(*sh, 'hair')
    for pr in look.get('props', []):
        offset = np.array(pr['offset'], dtype=np.float64)
        if pr.get('anchor') == 'eyes':
            # 头上的配件相对眼睛定位（男女模型头的高度不一样）
            ep = char.parts['eyes']['POSITION']
            offset = offset + np.array([0, (ep[:, 1].min() + ep[:, 1].max()) / 2, ep[:, 2].max()])
        elif pr.get('anchor'):
            offset = offset + char.bone_world[pr['anchor']][:3, 3]
        parts = place_prop(load_prop(pr['prop']), pr['scale'], pr.get('rot', (0, 0, 0)), offset, pr.get('squash', (1, 1, 1)))
        for part in parts:
            color = pr.get('colors', {}).get(part['mat'], part['color'])
            uv = np.tile(atlas.color_uv(color), (len(part['pos']), 1))
            j, wt = rigid(char, pr['bone'], part['pos'], part['nrm'])
            add(part['pos'], part['nrm'], uv, j, wt, part['idx'], 'prop')
            tris[pr['prop']] = tris.pop('prop') + tris.get(pr['prop'], 0)
    prim = quantize_mesh(w, np.concatenate(P), np.concatenate(Nn), np.concatenate(UV), np.concatenate(J), np.concatenate(W), np.concatenate(I))
    prim['material'] = 1
    w.j['meshes'].append({'name': 'extras', 'primitives': [prim]})
    atlas.image().save(os.path.join(OUT, name + '_extras.jpg'), quality=88, optimize=True, subsampling=0)

    body_node = w.node(name='body', mesh=0, skin=0)
    extras_node = w.node(name='extras', mesh=1, skin=0)
    rig = w.node(name='rig', children=[root, body_node, extras_node])
    w.j['scenes'][0]['nodes'] = [rig]
    pelvis = g.nodes[g.node_index('pelvis')]['translation']
    w.j['scenes'][0]['extras'] = {'pelvisRest': pelvis, 'height': float(body['POSITION'][:, 1].max())}
    size = w.save(os.path.join(OUT, name + '.glb'))
    files = {f: os.path.getsize(os.path.join(OUT, f)) for f in (name + '.glb', name + '_body.jpg', name + '_extras.jpg')}
    used = ['body'] + [k for k in ('glasses', 'cap') if any(p['prop'] == k for p in look.get('props', []))]
    return {'files': files, 'triangles': sum(tris.values()), 'triangleBreakdown': tris, 'bones': len(KEEP_BONES),
            'sources': used, 'height': round(float(body['POSITION'][:, 1].max()), 3)}


def main():
    from looks import LOOKS
    os.makedirs(OUT, exist_ok=True)
    only = sys.argv[1:]
    manifest_path = os.path.join(OUT, 'manifest.json')
    manifest = json.load(open(manifest_path)) if os.path.exists(manifest_path) and only else {'runners': {}}
    fists = fist_pose()
    if not only or 'anims' in only:
        manifest['anims'] = build_anims()
        print('anims', manifest['anims']['bytes'])
    for name, look in LOOKS.items():
        if only and name not in only: continue
        manifest['runners'][name] = build_runner(name, look, fists)
        print(name, manifest['runners'][name]['files'], manifest['runners'][name]['triangles'])
    manifest['sources'] = dict(SOURCES, **{k: {x: v[x] for x in ('name', 'author', 'license', 'url')} for k, v in PROPS.items()})
    total = manifest['anims']['bytes'] + sum(sum(r['files'].values()) for r in manifest['runners'].values())
    manifest['totalBytes'] = total
    json.dump(manifest, open(manifest_path, 'w'), indent=1, ensure_ascii=False)
    print('total', total)


if __name__ == '__main__':
    main()
