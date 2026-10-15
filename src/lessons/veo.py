#!/usr/bin/env python3
"""Generate the lesson clips with Veo 3.1 from each shot's first frame and prompt.
Hard spending cap with a ledger. Downloads each clip as soon as it is ready (the API keeps them 2 days).
Key: GEMINI_API_KEY (or GOOGLE_API_KEY) from the environment; with neither, assumes the proxy adds it.
Usage: veo.py [plan|run] [shot ids, comma-separated | all] [--take N] [--cap 50]"""
import base64, json, os, sys, time, urllib.request, urllib.error
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, 'veo'); os.makedirs(OUT, exist_ok=True)
LEDGER = os.path.join(OUT, 'ledger.json')
API = 'https://generativelanguage.googleapis.com/v1beta'
KEY = os.environ.get('GEMINI_API_KEY') or os.environ.get('GOOGLE_API_KEY') or ''
RATE = {'std': 0.40, 'fast': 0.10}          # $ per second at 720p
SECS = 8
TAIL = (' Sound: gentle ambient sound effects that match the action only. No speech, no voices, no singing, no music.'
        ' Keep every character and object exactly as built in the first frame: blocky voxel toys.')
NEG = 'text, letters, numbers, captions, subtitles, watermark, logo, realistic humans, photorealism, gore, scary faces'

def req(method, url, body=None, raw=False):
    h = {'Content-Type': 'application/json'}
    if KEY: h['x-goog-api-key'] = KEY
    r = urllib.request.Request(url, data=json.dumps(body).encode() if body is not None else None, headers=h, method=method)
    with urllib.request.urlopen(r, timeout=120) as f:
        d = f.read()
    return d if raw else json.loads(d)

def ledger():
    return json.load(open(LEDGER)) if os.path.exists(LEDGER) else []

def spent(L):
    # Count every submission that produced a clip or whose outcome is unknown. Blocked or failed ones are not billed.
    return round(sum(x['cost'] for x in L if x['status'] in ('ok', 'submitted', 'unknown')), 2)

def save(L): json.dump(L, open(LEDGER, 'w'), indent=1)

def models():
    names = [m['name'].split('/')[-1] for m in req('GET', API + '/models?pageSize=1000').get('models', []) if 'veo' in m['name']]
    def pick(fast):
        c = [n for n in names if n.startswith('veo-3.1') and (('fast' in n) == fast) and 'lite' not in n]
        c.sort(key=lambda n: (('preview' in n), n))      # prefer GA over preview
        return c[0] if c else None
    return {'std': pick(False), 'fast': pick(True)}, names

def first_frame(sid):
    for ext, mt in (('.jpg', 'image/jpeg'), ('.png', 'image/png')):
        f = os.path.join(HERE, 'frames', sid + ext)
        if os.path.exists(f): return f, mt
    raise SystemExit('no first frame for ' + sid)

def submit(model, prompt, sid):
    f, mt = first_frame(sid); img = base64.b64encode(open(f, 'rb').read()).decode()
    params = {'aspectRatio': '16:9', 'resolution': '720p', 'durationSeconds': SECS, 'negativePrompt': NEG, 'personGeneration': 'allow_adult'}
    shapes = [{'bytesBase64Encoded': img, 'mimeType': mt}, {'inlineData': {'mimeType': mt, 'data': img}}]
    last = None
    for shape in shapes:
        for p in (params, {**params, 'durationSeconds': str(SECS)}):
            try:
                return req('POST', f'{API}/models/{model}:predictLongRunning', {'instances': [{'prompt': prompt, 'image': shape}], 'parameters': p})['name']
            except urllib.error.HTTPError as e:
                last = e.read().decode()[:500]
                if e.code != 400: raise RuntimeError(f'{e.code} {last}')
    raise RuntimeError('400 ' + (last or ''))

def poll(name, limit=900):
    t0 = time.time()
    while time.time() - t0 < limit:
        op = req('GET', f'{API}/{name}')
        if op.get('done'): return op
        time.sleep(10)
    return None

def run(ids, take, cap, dry):
    S = json.load(open(os.path.join(HERE, 'shots.json'))); style = S['style']
    shots = [s for s in S['shots'] if ids == ['all'] or s['id'] in ids]
    L = ledger(); M, names = (({'std': 'veo-3.1-generate-?', 'fast': 'veo-3.1-fast-generate-?'}, []) if dry else models())
    plan = [(s, s.get('veo', 'fast')) for s in shots if not os.path.exists(os.path.join(OUT, f"{s['id']}-t{take}.mp4"))]
    cost = round(sum(RATE[t] * SECS for _, t in plan), 2)
    print(f'models: {M}\nplanned: {len(plan)} clips, ${cost:.2f}; already spent ${spent(L):.2f} of ${cap:.2f}')
    if dry: return
    if not M['std'] or not M['fast']: raise SystemExit(f'Veo 3.1 models not found. Visible: {names}')
    live = []
    for s, tier in plan:
        c = round(RATE[tier] * SECS, 2)
        if spent(L) + c > cap: print('cap reached; skipping', s['id']); continue
        prompt = s['prompt'] + ' ' + style + TAIL
        try:
            name = submit(M[tier], prompt, s['id'])
        except Exception as e:
            print('submit failed', s['id'], e); L.append({'id': s['id'], 'take': take, 'tier': tier, 'cost': c, 'status': 'rejected', 'err': str(e)[:300], 'ts': time.time()}); save(L); continue
        L.append({'id': s['id'], 'take': take, 'tier': tier, 'model': M[tier], 'cost': c, 'status': 'submitted', 'op': name, 'ts': time.time()}); save(L)
        live.append(L[-1]); print('submitted', s['id'], tier, f'${c:.2f}', f'(spent ${spent(L):.2f})')
        time.sleep(3)
    for x in live:
        op = poll(x['op'])
        if op is None: x['status'] = 'unknown'; save(L); print('timed out', x['id']); continue
        if 'error' in op: x['status'] = 'failed'; x['err'] = json.dumps(op['error'])[:300]; save(L); print('failed', x['id'], x['err']); continue
        g = op.get('response', {}).get('generateVideoResponse', {})
        samples = g.get('generatedSamples') or []
        if not samples:
            x['status'] = 'blocked'; x['err'] = json.dumps({k: v for k, v in g.items() if k != 'generatedSamples'})[:300]; save(L); print('blocked', x['id'], x['err']); continue
        uri = samples[0]['video']['uri']; f = os.path.join(OUT, f"{x['id']}-t{take}.mp4")
        open(f, 'wb').write(req('GET', uri, raw=True)); x['status'] = 'ok'; x['file'] = os.path.basename(f); save(L)
        print('saved', x['id'], os.path.getsize(f) // 1024, 'KB')
    print(f'done. spent ${spent(L):.2f} of ${cap:.2f}')

if __name__ == '__main__':
    a = sys.argv[1:]; mode = a[0] if a else 'plan'; ids = (a[1] if len(a) > 1 and not a[1].startswith('--') else 'all').split(',')
    take = int(a[a.index('--take') + 1]) if '--take' in a else 1
    cap = float(a[a.index('--cap') + 1]) if '--cap' in a else 50.0
    run(ids, take, min(cap, 50.0), mode != 'run')
