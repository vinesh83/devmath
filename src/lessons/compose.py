#!/usr/bin/env python3
"""Cut each division lesson into one MP4: 3D shots (or Veo clips when present) + math animations,
title card, narration, ducked music bed. Writes site/video/<id>.mp4, <id>.jpg and index.json.
Usage: compose.py [div1,div2,...]"""
import json, os, subprocess, sys
HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.join(HERE, '..', 'site', 'video')
FR = os.path.join(HERE, 'frames')
VEO = os.path.join(HERE, 'veo')
BED = os.path.join(HERE, '..', 'music', 'lesson-bed.wav')
TMP = os.path.join(HERE, 'tmp')
FPS = 30
os.makedirs(SITE, exist_ok=True); os.makedirs(TMP, exist_ok=True)

def run(cmd):
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode: print(r.stderr[-3000:]); raise SystemExit('ffmpeg failed: ' + ' '.join(cmd[:6]))

def dur(f):
    return float(subprocess.check_output(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', f]).decode())

def has_audio(f):
    return bool(subprocess.run(['ffprobe', '-v', 'error', '-select_streams', 'a', '-show_entries', 'stream=index', '-of', 'csv=p=0', f], capture_output=True, text=True).stdout.strip())

ENC = ['-c:v', 'libx264', '-preset', 'medium', '-crf', '23', '-maxrate', '3M', '-bufsize', '6M', '-pix_fmt', 'yuv420p', '-r', str(FPS)]

def segment(TL, bi, B, n, out):
    """Encode one beat to exactly n frames."""
    title = os.path.join(FR, TL['id'], 'title.png')
    veo = os.path.join(VEO, (B.get('shot') or '') + '.mp4')
    if B['type'] == 'shot' and os.path.exists(veo):
        d = dur(veo); D = n / FPS; r = D / d
        # A Veo clip runs 8s. Stretch a little if the beat runs longer; hold the last frame past that.
        sp = f'setpts=PTS*{min(r, 1.3):.4f},' if r > 1 else ''
        src = ['-i', veo]; base = f'[0:v]scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,{sp}fps={FPS},tpad=stop_mode=clone:stop=-1'
    else:
        d = os.path.join(FR, B['shot']) if B['type'] == 'shot' else os.path.join(FR, TL['id'], f'b{bi}')
        src = ['-framerate', str(FPS), '-i', os.path.join(d, 'f%05d.jpg')]
        # The software 3D render has fine grain; a light temporal denoise cuts the bitrate by about 7x.
        dn = 'hqdn3d=4:3:6:4.5,' if B['type'] == 'shot' else ''
        base = f'[0:v]scale=1280:720,{dn}tpad=stop_mode=clone:stop=-1'
    if B.get('title'):
        src += ['-loop', '1', '-framerate', str(FPS), '-i', title]
        fc = (f'{base}[b];[1:v]format=rgba,fade=t=in:st=0.25:d=0.35:alpha=1,fade=t=out:st=2.9:d=0.45:alpha=1[t];'
              f'[b][t]overlay=0:0:shortest=0:eof_action=pass,fade=t=in:st=0:d=0.4[v]')
    else:
        fc = base + '[v]'
    run(['ffmpeg', '-y', '-v', 'error', *src, '-filter_complex', fc, '-map', '[v]', '-frames:v', str(n), '-an', *ENC, out])

def audio(TL, out):
    D = TL['D']; ins = ['-stream_loop', '-1', '-i', BED]; parts = []
    for i, a in enumerate(TL['audio'], start=1):
        ins += ['-i', os.path.join(HERE, 'vo', 'proc', a['file'])]
        ms = int(round(a['t'] * 1000))
        parts.append(f'[{i}:a]aformat=sample_rates=48000:channel_layouts=stereo,adelay={ms}:all=1[n{i}]')
    k = len(TL['audio'])
    # Veo clips carry their own sound effects: lay them under the narration with the music, so both duck.
    fx = []
    for B in TL['beats']:
        v = os.path.join(VEO, (B.get('shot') or '') + '.mp4')
        if B['type'] != 'shot' or not os.path.exists(v) or not has_audio(v): continue
        j = 1 + k + len(fx); ins += ['-i', v]; L = min(B['D'], dur(v)); ms = int(round(B['start'] * 1000))
        parts.append(f'[{j}:a]aformat=sample_rates=48000:channel_layouts=stereo,atrim=0:{L:.3f},afade=t=out:st={max(0, L-0.5):.3f}:d=0.5,volume=0.5,adelay={ms}:all=1[x{j}]')
        fx.append(f'[x{j}]')
    bed = f'[0:a]atrim=0:{D:.3f},asetpts=PTS-STARTPTS,volume=0.55,afade=t=in:d=0.6,afade=t=out:st={D-1.5:.3f}:d=1.5'
    bed = (bed + '[m0];[m0]' + ''.join(fx) + f'amix=inputs={1+len(fx)}:normalize=0:duration=first[bed];') if fx else bed + '[bed];'
    fc = ';'.join(parts) + ';' + ''.join(f'[n{i}]' for i in range(1, k + 1)) + \
        f'amix=inputs={k}:normalize=0:duration=longest,apad=whole_dur={D:.3f},atrim=0:{D:.3f},asplit=2[vo][sc];' + bed + \
        '[bed][sc]sidechaincompress=threshold=0.03:ratio=5:attack=25:release=450:makeup=1[duck];' + \
        '[duck][vo]amix=inputs=2:normalize=0:duration=first,volume=1.32,alimiter=limit=0.95[a]'
    run(['ffmpeg', '-y', '-v', 'error', *ins, '-filter_complex', fc, '-map', '[a]', '-c:a', 'pcm_s16le', out])

def lesson(lid):
    TL = json.load(open(os.path.join(HERE, f'timeline-{lid}.json')))
    segs = []
    for bi, B in enumerate(TL['beats']):
        n = round((B['start'] + B['D']) * FPS) - round(B['start'] * FPS)   # cumulative rounding: no drift
        seg = os.path.join(TMP, f'{lid}-{bi}.mp4'); segment(TL, bi, B, n, seg); segs.append(seg)
    lst = os.path.join(TMP, f'{lid}.txt'); open(lst, 'w').write(''.join(f"file '{s}'\n" for s in segs))
    vid = os.path.join(TMP, f'{lid}-v.mp4'); run(['ffmpeg', '-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', lst, '-c', 'copy', vid])
    wav = os.path.join(TMP, f'{lid}.wav'); audio(TL, wav)
    out = os.path.join(SITE, f'{lid}.mp4')
    run(['ffmpeg', '-y', '-v', 'error', '-i', vid, '-i', wav, '-map', '0:v', '-map', '1:a', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '128k',
         '-shortest', '-movflags', '+faststart', out])
    run(['ffmpeg', '-y', '-v', 'error', '-ss', '1.6', '-i', out, '-frames:v', '1', '-vf', 'scale=640:360', '-q:v', '4', os.path.join(SITE, f'{lid}.jpg')])
    print(lid, TL['title'], f"{dur(out):.1f}s", f"{os.path.getsize(out)/1e6:.1f}MB", 'veo' if any(os.path.exists(os.path.join(VEO, (b.get('shot') or '') + '.mp4')) for b in TL['beats']) else '3d')
    return TL

if __name__ == '__main__':
    ids = sys.argv[1].split(',') if len(sys.argv) > 1 else ['div1', 'div2', 'div3', 'div4', 'div5', 'div6']
    idx_f = os.path.join(SITE, 'index.json')
    idx = json.load(open(idx_f)) if os.path.exists(idx_f) else {'videos': {}}
    for lid in ids:
        TL = lesson(lid)
        idx['videos'][lid] = {'title': TL['title'], 'D': round(TL['D'], 1), 'stops': TL['stops']}
    json.dump(idx, open(idx_f, 'w'), ensure_ascii=False, indent=1)
