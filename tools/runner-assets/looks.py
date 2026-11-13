"""四名选手的外形配置。字段含义见 build.py 的 garment_masks / build_runner。"""


def cap(crown, brim, button=None, tilt=-3):
    # Baseball cap by jeremy（CC-BY 3.0）。材质名：FFFFFF = 帽顶前片，039BE5 = 帽檐和后片，F44336 = 帽顶扣
    return dict(prop='cap', bone='Head', anchor='eyes', scale=0.352, rot=(tilt, 0, 0), offset=(0, 0.074, -0.034),
                colors={'FFFFFF': crown, '039BE5': brim, 'F44336': button if button is not None else brim})


def glasses(lens=0x14171b, frame=0x1b1d21):
    # Glasses by iPoly3D（CC0）。材质名：Glass = 镜片，Base = 镜框，black = 镜腿
    return dict(prop='glasses', bone='Head', anchor='eyes', scale=0.152, offset=(0, 0.002, -0.034),
                colors={'Glass': lens, 'Base': frame, 'black': frame})


LOOKS = {
    # 玩家：橙色短袖 + 黑短裤 + 黑色压缩腿套
    'player': dict(
        gender='m', skin='light', hair=['Hair_Buzzed'], hair_color=0x2a211c, skin_gain=(1.1, 1.08, 1.06),
        props=[cap(0xf1eee6, 0xf1eee6, 0xe8521c), glasses()],
        sleeves='short', legs='shorts', shirt=0xe8521c, accent=0x26282c, shorts=0x23262b,
        calf=0x23262b, sock_color=0xf2f2f2, shoe=0xffa01e, shoe2=0x2b2d31, vest=0x2e3338, bib=0xe8521c,
    ),
    # 阿峰：蓝色背心 + 半弹紧身裤，后程发力的竞速型
    'afeng': dict(
        gender='m', skin='dark', hair=['Hair_Buzzed'], hair_color=0x15110f,
        props=[glasses(0x1a2c44, 0x21c7ff)],
        sleeves='none', legs='half', tight_top=True, shirt=0x2f7fd8, accent=0x21c7ff, shorts=0x15181d,
        calf=0x1f5fb8, sock_color=0x1f5fb8, shoe=0x21c7ff, shoe2=0x123a66, vest=0x1d2a3a, bib=0x2f7fd8,
    ),
    # 老周：白色长袖防晒衣 + 灰短裤，匀速的老越野
    'laozhou': dict(
        gender='m', skin='light', hair=['Hair_Buzzed', 'Hair_Beard'], hair_color=0x8f8e8a, brow_color=0x6f6e6a, skin_gain=(1.06, 1.03, 1.0),
        slim={'arm': 0.9, 'torso_x': 0.97, 'torso_z': 0.96, 'thigh': 0.96},
        props=[cap(0xb9c0c8, 0x8f979f)],
        sleeves='long', legs='shorts', shirt=0xe9ebee, accent=0x8f979f, shorts=0x4a5148,
        calf=0x1a1c1f, sock_color=0x1a1c1f, shoe=0xff7a1a, shoe2=0x3a3d42, vest=0x5b4a3a, bib=0x8f979f,
    ),
    # 小野：红色背心 + 竞速短裤，起步很冲的女选手
    'xiaoye': dict(
        gender='f', skin='light', hair=['Hair_Buns'], hair_color=0x3a2418, skin_gain=(1.12, 1.1, 1.08),
        slim={'arm': 0.9, 'torso_x': 0.97, 'torso_z': 0.94, 'thigh': 0.95, 'calf': 0.97},
        props=[glasses(0x2a1418, 0xf4f1ea)],
        sleeves='none', legs='split', tight_top=True, shirt=0xd9384f, accent=0xf4f1ea, shorts=0x1b1d22,
        sock_color=0xf2f2f2, shoe=0xff4d8d, shoe2=0x7a1f3f, vest=0x3a2f3c, headband=0xf4f1ea, bib=0xd9384f,
    ),
}
