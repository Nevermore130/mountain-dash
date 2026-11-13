"""
下载并解压 build.py 需要的原始素材到 MD_ASSET_SRC（默认 /tmp/md_assets）。只用标准库和 curl。

  python3 tools/runner-assets/fetch.py

来源与许可证：
  Quaternius（CC0，itch.io 上自定价格、最低 0 元的 [Standard] 版）
    https://quaternius.itch.io/universal-base-characters      Universal Base Characters[Standard].zip      约 122 MB
    https://quaternius.itch.io/universal-animation-library    Universal Animation Library[Standard].zip    约 15 MB
    https://quaternius.itch.io/universal-animation-library-2  Universal Animation Library 2[Standard].zip  约 17 MB
  Poly Pizza 上的配件模型
    https://poly.pizza/m/crbuIoq2dO   Glasses · iPoly3D · CC0
    https://poly.pizza/m/dzfCdDABuiQ  Baseball cap · jeremy · CC-BY 3.0

itch.io 的下载流程是照着网页的行为写的（先换下载页地址，再换文件的临时地址），网站改版后可能失效；
失效时手工从上面的页面下载 zip，按 build.py 开头写的目录结构解压即可。
"""
import html, json, os, re, subprocess, sys, zipfile

SRC = os.environ.get('MD_ASSET_SRC', '/tmp/md_assets')
ITCH = {
    'Universal_Base_Characters': 'https://quaternius.itch.io/universal-base-characters',
    'Universal_Animation_Library': 'https://quaternius.itch.io/universal-animation-library',
    'Universal_Animation_Library_2': 'https://quaternius.itch.io/universal-animation-library-2',
}
PROPS = ['crbuIoq2dO', 'dzfCdDABuiQ']
UA = 'Mozilla/5.0'


def curl(*args, jar=None, out=None, timeout='900'):
    cmd = ['curl', '-s', '-L', '-m', timeout, '-A', UA]
    if jar: cmd += ['-b', jar, '-c', jar]
    if out: cmd += ['-o', out]
    r = subprocess.run(cmd + list(args), capture_output=True, text=True, errors='ignore')
    return r.stdout


def fetch_itch(folder, page):
    dest = os.path.join(SRC, folder)
    if os.path.isdir(dest) and os.listdir(dest):
        print('已存在，跳过', dest)
        return
    jar = os.path.join(SRC, folder + '.cookies')
    s = curl(page, jar=jar)
    csrf = re.search(r'name="csrf_token" value="([^"]+)"', s).group(1)
    dl = json.loads(curl('-X', 'POST', '--data-urlencode', 'csrf_token=' + csrf, page + '/download_url', jar=jar))['url']
    d = curl(dl, jar=jar)
    uploads = re.findall(r'data-upload_id="(\d+)".*?<strong[^>]*class="name"[^>]*>([^<]+)</strong>', d, flags=re.S)
    uid, name = next((u, html.unescape(n)) for u, n in uploads if 'standard' in n.lower())
    j = json.loads(curl('-X', 'POST', '-e', dl, '--data-urlencode', 'csrf_token=' + csrf, f'{page}/file/{uid}?source=game_download', jar=jar))
    z = os.path.join(SRC, name)
    print('下载', name)
    curl(j['url'], out=z)
    os.makedirs(dest, exist_ok=True)
    zipfile.ZipFile(z).extractall(dest)
    os.remove(jar)


def fetch_prop(pid):
    out = os.path.join(SRC, 'props', pid + '.glb')
    if os.path.exists(out):
        print('已存在，跳过', out)
        return
    os.makedirs(os.path.dirname(out), exist_ok=True)
    s = curl('https://poly.pizza/m/' + pid)
    url = re.search(r'https://static\.poly\.pizza/[A-Za-z0-9-]+\.glb', s).group(0)
    print('下载', pid, url)
    curl(url, out=out)


if __name__ == '__main__':
    os.makedirs(SRC, exist_ok=True)
    for folder, page in ITCH.items():
        fetch_itch(folder, page)
    for pid in PROPS:
        fetch_prop(pid)
    print('完成：', SRC)
