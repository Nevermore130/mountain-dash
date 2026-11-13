// 调试用：在预览页里给人物模型拍「影棚」对比图。由调试脚本按需注入，不随游戏打包。
(() => {
  const g = window.__mountainDash;
  const c = document.getElementById('game');
  const THREEcam = g.camera.constructor, V = g.camera.position.constructor, Color = g.scene.fog.color.constructor;
  const all = () => [g.player.runner, ...g.rivals.map((r) => r.runner)];
  const S = {};
  S.pose = (r, clip, t) => {
    for (const k in r.actions) { r.weights[k] = k === clip ? 1 : 0; r.actions[k].setEffectiveWeight(r.weights[k]); }
    const a = r.actions[clip]; a.paused = false; a.enabled = true; a.time = t * a.getClip().duration; a.timeScale = 0;
    r.mixer.update(0);
    if (clip !== 'jog' && clip !== 'sprint') a.timeScale = 1;
  };
  // 静止姿势（T-pose）
  S.rest = (r) => { for (const k in r.actions) { r.weights[k] = 0; r.actions[k].setEffectiveWeight(0); } r.mixer.update(0); };
  // cells: [{r: 跑者下标, clip, t, dir(相机方位角, 0 = 正后方), h(看向的高度), dist, fov}]
  S.sheet = (cells, cols, cw, ch, bg) => {
    const rs = all();
    const saved = [];
    g.scene.children.forEach((o) => { saved.push([o, o.visible]); if (!o.isLight && rs.every((r) => r.root !== o)) o.visible = false; });
    const fog = g.scene.fog; g.scene.fog = null;
    const oldBg = g.scene.background; g.scene.background = new Color(bg || 0x8e98a3);
    const keep = rs.map((r) => ({ p: r.root.position.clone(), q: r.root.quaternion.clone(), tag: r.tag && r.tag.visible }));
    rs.forEach((r, i) => { r.root.position.set(i * 8, 300, 0); r.root.rotation.set(0, 0, 0); if (r.tag) r.tag.visible = false; r.root.visible = true; });
    const rows = Math.ceil(cells.length / cols);
    const k = document.createElement('canvas'); k.width = cw * cols; k.height = ch * rows;
    const ctx = k.getContext('2d');
    const aspect = cw / ch;
    const cam = new THREEcam(22, c.width / c.height, 0.1, 500);
    const sw = Math.min(c.width, c.height * aspect), sh = sw / aspect;
    g.renderer.autoClear = true;
    const sun = g.scene.children.find((o) => o.isDirectionalLight);
    cells.forEach((cell, i) => {
      const r = rs[cell.r];
      if (cell.rest) S.rest(r);
      else if (cell.clip) S.pose(r, cell.clip, cell.t || 0);
      const p = r.root.position;
      const mid = new V(p.x, p.y + (cell.h === undefined ? 0.95 : cell.h), p.z);
      const d = cell.dist || 5.6;
      cam.fov = cell.fov || 22; cam.updateProjectionMatrix();
      cam.position.set(mid.x + Math.sin(cell.dir) * d, mid.y + (cell.up === undefined ? 0.25 : cell.up), mid.z + Math.cos(cell.dir) * d);
      cam.lookAt(mid);
      g.renderer.render(g.scene, cam);
      ctx.drawImage(c, (c.width - sw) / 2, (c.height - sh) / 2, sw, sh, (i % cols) * cw, Math.floor(i / cols) * ch, cw, ch);
    });
    saved.forEach(([o, v]) => (o.visible = v));
    g.scene.fog = fog; g.scene.background = oldBg;
    rs.forEach((r, i) => { r.root.position.copy(keep[i].p); r.root.quaternion.copy(keep[i].q); if (r.tag) r.tag.visible = keep[i].tag; });
    return k.toDataURL('image/jpeg', 0.9);
  };
  S.info = () => all().map((r) => { let tris = 0, meshes = 0, bones = 0; r.root.traverse((o) => { if (o.isSkinnedMesh) { meshes++; tris += o.geometry.index.count / 3; bones = o.skeleton.bones.length; } }); return { name: r.name, tris, meshes, bones, clips: Object.keys(r.actions || {}) }; });
  // 预设的几组对比图
  const four = (fn) => [0, 1, 2, 3].map(fn);
  S.layouts = {
    front: () => S.sheet(four((i) => ({ r: i, clip: 'idle', t: 0.2, dir: Math.PI - 0.45, dist: 7.4 })), 4, 330, 560),
    back: () => S.sheet(four((i) => ({ r: i, clip: 'idle', t: 0.2, dir: 0.4, dist: 7.4 })), 4, 330, 560),
    side: () => S.sheet(four((i) => ({ r: i, clip: 'idle', t: 0.2, dir: Math.PI / 2, dist: 7.4 })), 4, 330, 560),
    tpose: () => S.sheet([{ r: 0, clip: 'idle', t: 0, dir: Math.PI, rest: true, dist: 7 }, { r: 3, clip: 'idle', t: 0, dir: Math.PI, rest: true, dist: 7 }], 2, 700, 560),
    head: () => S.sheet(four((i) => ({ r: i, clip: 'idle', t: 0.2, dir: Math.PI - 0.5, h: 1.6, dist: 1.9, up: 0.05 })).concat(four((i) => ({ r: i, clip: 'idle', t: 0.2, dir: 0.5, h: 1.6, dist: 1.9, up: 0.05 }))), 4, 330, 330),
    caps: () => S.sheet([0, 2, 3].flatMap((i) => [Math.PI, Math.PI / 2, 0, Math.PI - 0.8].map((dir) => ({ r: i, rest: true, dir, h: 1.68, dist: 2.3, up: 0.05 }))), 4, 300, 300),
    tposes: () => S.sheet(four((i) => ({ r: i, rest: true, dir: Math.PI, dist: 9, h: 0.95 })), 4, 460, 480),
    feet: () => S.sheet(four((i) => ({ r: i, clip: 'idle', t: 0.2, dir: Math.PI - 0.7, h: 0.14, dist: 4.4, up: 0.5 })).concat(four((i) => ({ r: i, clip: 'idle', t: 0.2, dir: 0.7, h: 0.14, dist: 4.4, up: 0.5 }))), 4, 330, 300),
    torso: () => S.sheet(four((i) => ({ r: i, clip: 'idle', t: 0.2, dir: Math.PI - 0.4, h: 1.25, dist: 2.6, up: 0.1 })).concat(four((i) => ({ r: i, clip: 'idle', t: 0.2, dir: 0.4, h: 1.25, dist: 2.6, up: 0.1 }))), 4, 330, 400),
    run: () => S.sheet([0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875].map((t) => ({ r: 0, clip: 'sprint', t, dir: Math.PI / 2 + 0.25, dist: 6 })), 8, 250, 420),
    jog: () => S.sheet(four((i) => ({ r: i, clip: 'jog', t: 0.1 + i * 0.22, dir: 0.5, dist: 6 })).concat(four((i) => ({ r: i, clip: 'sprint', t: 0.1 + i * 0.22, dir: Math.PI - 0.6, dist: 6 }))), 4, 330, 520),
    actions: () => S.sheet([['crouch', 0.3], ['jump_start', 0.3], ['jump_land', 0.15], ['slide_start', 0.4], ['slide_loop', 0.3], ['slide_exit', 0.55], ['hit', 0.5], ['yes', 0.4], ['cheer', 0.3], ['collapse', 0.3], ['collapse', 0.45], ['collapse', 0.9]].map(([clip, t], i) => ({ r: i % 4, clip, t, dir: Math.PI / 2 + 0.5, dist: 6.4, h: 0.85 })), 6, 300, 420),
  };
  // 一段动画均匀取 n 帧
  S.frames = (clip, n = 8, r = 0, dir = Math.PI / 2 + 0.35, t0 = 0, t1 = 1) =>
    S.sheet(Array.from({ length: n }, (_, i) => ({ r, clip, t: t0 + ((t1 - t0) * i) / (n - 1) * 0.999, dir, dist: 6.6, h: 0.85 })), n, 230, 400);
  S.run = (...names) => JSON.stringify({ info: S.info(), errs: window.__errs, imgs: names.map((n) => S.layouts[n]()) });
  window.__studio = S;
  return JSON.stringify({ ready: g.assets === 'ready', errs: window.__errs, info: g.assets === 'ready' ? S.info() : null });
})()
