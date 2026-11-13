"""极简 glTF / GLB 读写（只覆盖本工程素材用到的部分）。"""
import json, struct, os
import numpy as np

CT = {5120: np.int8, 5121: np.uint8, 5122: np.int16, 5123: np.uint16, 5125: np.uint32, 5126: np.float32}
NC = {'SCALAR': 1, 'VEC2': 2, 'VEC3': 3, 'VEC4': 4, 'MAT4': 16}


class Gltf:
    def __init__(self, path):
        self.path = path
        if path.endswith('.glb'):
            b = open(path, 'rb').read()
            n = struct.unpack('<I', b[12:16])[0]
            self.j = json.loads(b[20:20 + n])
            self.bins = [b[20 + n + 8:]]
        else:
            self.j = json.load(open(path))
            d = os.path.dirname(path)
            self.bins = [open(os.path.join(d, bf['uri'].replace('%20', ' ')), 'rb').read() for bf in self.j['buffers']]
        self.nodes = self.j['nodes']
        self.parent = {}
        for i, n in enumerate(self.nodes):
            for c in n.get('children', []):
                self.parent[c] = i

    def acc(self, idx, raw=False):
        a = self.j['accessors'][idx]
        bv = self.j['bufferViews'][a['bufferView']]
        dt = np.dtype(CT[a['componentType']])
        nc = NC[a['type']]
        off = bv.get('byteOffset', 0) + a.get('byteOffset', 0)
        stride = bv.get('byteStride') or dt.itemsize * nc
        buf = self.bins[bv['buffer']]
        arr = np.ndarray((a['count'], nc), dtype=dt, buffer=buf, offset=off, strides=(stride, dt.itemsize)).copy()
        if a.get('normalized') and not raw:
            if dt == np.uint8: arr = arr.astype(np.float32) / 255
            elif dt == np.uint16: arr = arr.astype(np.float32) / 65535
            elif dt == np.int16: arr = np.maximum(arr.astype(np.float32) / 32767, -1)
            elif dt == np.int8: arr = np.maximum(arr.astype(np.float32) / 127, -1)
        return arr[:, 0] if nc == 1 else arr

    def node_index(self, name):
        for i, n in enumerate(self.nodes):
            if n.get('name') == name: return i
        raise KeyError(name)

    def local_matrix(self, i):
        n = self.nodes[i]
        if 'matrix' in n: return np.array(n['matrix'], dtype=np.float64).reshape(4, 4).T
        return trs_matrix(n.get('translation', [0, 0, 0]), n.get('rotation', [0, 0, 0, 1]), n.get('scale', [1, 1, 1]))

    def world_matrix(self, i):
        m = self.local_matrix(i)
        while i in self.parent:
            i = self.parent[i]
            m = self.local_matrix(i) @ m
        return m

    def primitives(self, mesh_index):
        out = []
        for p in self.j['meshes'][mesh_index]['primitives']:
            d = {k: self.acc(v) for k, v in p['attributes'].items()}
            d['indices'] = self.acc(p['indices']).astype(np.uint32) if 'indices' in p else np.arange(len(d['POSITION']), dtype=np.uint32)
            d['material'] = p.get('material')
            out.append(d)
        return out


def quat_matrix(q):
    x, y, z, w = q
    return np.array([[1 - 2 * (y * y + z * z), 2 * (x * y - z * w), 2 * (x * z + y * w)],
                     [2 * (x * y + z * w), 1 - 2 * (x * x + z * z), 2 * (y * z - x * w)],
                     [2 * (x * z - y * w), 2 * (y * z + x * w), 1 - 2 * (x * x + y * y)]], dtype=np.float64)


def trs_matrix(t, r, s):
    m = np.eye(4)
    m[:3, :3] = quat_matrix(r) * np.array(s, dtype=np.float64)[None, :]
    m[:3, 3] = t
    return m


class GlbWriter:
    def __init__(self):
        self.j = {'asset': {'version': '2.0', 'generator': 'mountain-dash runner-assets'}, 'scene': 0, 'scenes': [{'nodes': []}], 'nodes': [],
                  'buffers': [{}], 'bufferViews': [], 'accessors': []}
        self.bin = bytearray()

    def view(self, data, target=None):
        while len(self.bin) % 4: self.bin.append(0)
        v = {'buffer': 0, 'byteOffset': len(self.bin), 'byteLength': len(data)}
        if target: v['target'] = target
        self.bin += data
        self.j['bufferViews'].append(v)
        return len(self.j['bufferViews']) - 1

    def accessor(self, arr, type_, normalized=False, target=None, minmax=False):
        arr = np.ascontiguousarray(arr)
        ct = {v: k for k, v in CT.items()}[arr.dtype.type]
        a = {'bufferView': self.view(arr.tobytes(), target), 'componentType': ct, 'count': int(arr.shape[0]), 'type': type_}
        if normalized: a['normalized'] = True
        if minmax:
            a['min'] = [float(x) for x in np.atleast_1d(arr.min(axis=0))]
            a['max'] = [float(x) for x in np.atleast_1d(arr.max(axis=0))]
        self.j['accessors'].append(a)
        return len(self.j['accessors']) - 1

    def node(self, **kw):
        self.j['nodes'].append(kw)
        return len(self.j['nodes']) - 1

    def save(self, path):
        for k in ('extensionsUsed', 'extensionsRequired'):
            if k in self.j and not self.j[k]: del self.j[k]
        while len(self.bin) % 4: self.bin.append(0)
        self.j['buffers'][0]['byteLength'] = len(self.bin)
        js = json.dumps(self.j, separators=(',', ':')).encode()
        js += b' ' * (-len(js) % 4)
        total = 12 + 8 + len(js) + 8 + len(self.bin)
        with open(path, 'wb') as f:
            f.write(struct.pack('<4sII', b'glTF', 2, total))
            f.write(struct.pack('<I4s', len(js), b'JSON'))
            f.write(js)
            f.write(struct.pack('<I4s', len(self.bin), b'BIN\x00'))
            f.write(self.bin)
        return total
