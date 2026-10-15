#!/usr/bin/env python3
"""Build each lesson's timeline from the narration lengths: beat durations, line cue times, animation events, "Your turn" stops."""
import json, os
HERE = os.path.dirname(os.path.abspath(__file__))
L = json.load(open(os.path.join(HERE, 'lessons.json')))
DUR = json.load(open(os.path.join(HERE, 'vo', 'durations.json')))
GAP = 0.35

def place(lines, start, lid, bi, key):
    out, t = [], start
    for li, (spk, text) in enumerate(lines):
        f = f'{lid}-{bi}-{key}-{li}-{spk}.wav'; d = DUR[f]
        out.append({'spk': spk, 'text': text, 't': round(t, 3), 'd': d, 'file': f}); t += d + GAP
    return out, t - GAP

def plan(n, d):
    s = str(n); i = 0; cur = int(s[0])
    while cur < d and i < len(s) - 1: i += 1; cur = cur * 10 + int(s[i])
    rows = []; col = i
    while True:
        q = cur // d; rows.append((col, cur, q));
        if col >= len(s) - 1: break
        col += 1; cur = (cur - q * d) * 10 + int(s[col])
    return rows

for les in L['lessons']:
    lid = les['id']; T = 0.0; beats = []; audio = []; stops = []
    for bi, b in enumerate(les['beats']):
        B = {'type': b['type'], 'scene': b.get('scene'), 'p': b.get('p', {}), 'shot': b.get('shot'), 'title': b.get('title', False), 'theme': lid, 'q': b.get('q')}
        lead = 2.2 if b.get('title') else (0.5 if b['type'] == 'shot' else 0.4)
        say, end = place(b.get('say', []), lead, lid, bi, 'say')
        B['cues'] = [x['t'] for x in say]; lines = say[:]
        sc, p = b.get('scene'), b.get('p', {})
        if b['type'] == 'stop':
            B['stopAt'] = round(end + 0.5, 3)
            after, end = place(b.get('after', []), B['stopAt'] + 0.6, lid, bi, 'after'); lines += after; B['acues'] = [x['t'] for x in after]
        sceneEnd = end
        if sc == 'deal':
            n, k = p['n'], p['k']
            if b['type'] == 'stop': B['dealAt'] = B['stopAt'] + 0.9; B['dealEnd'] = B['dealAt'] + 2.6
            else: B['dealAt'] = B['cues'][0] + 0.8; B['dealEnd'] = (B['cues'][1] - 0.2) if len(B['cues']) > 1 else B['dealAt'] + 4
            dt = min(0.42, (B['dealEnd'] - B['dealAt']) / n); B['endDeal'] = B['dealAt'] + (n - 1) * dt + 0.45
            B['eqAt'] = B['cues'][2] if (b['type'] != 'stop' and len(B['cues']) > 2) else B['endDeal'] + 0.5
            sceneEnd = max(sceneEnd, B['eqAt'] + 2.0)
        elif sc == 'bags':
            B['fillAt'] = B['cues'][0] + 1.5; fillEnd = B['fillAt'] + p['n'] * 0.32 + 0.4
            B['eqAt'] = max(fillEnd, B['cues'][1]) if len(B['cues']) > 1 else fillEnd; sceneEnd = max(sceneEnd, B['eqAt'] + 2.0)
        elif sc == 'blocks':
            if b['type'] == 'stop':
                B['tenAt'] = B['stopAt'] + 0.9
                if p.get('trade'): B['tradeAt'] = B['tenAt'] + 2.0; B['oneAt'] = B['tradeAt'] + 1.4
                else: B['oneAt'] = B['tenAt'] + 2.2
                B['done'] = B['oneAt'] + 2.6; B['eqAt'] = B['done']
            elif p.get('part') == 1:
                B['tenAt'] = B['cues'][0] + 0.8; B['oneAt'] = 1e9; B['done'] = 1e9
            elif p.get('part') == 2:
                B['tenAt'] = -10; B['tradeAt'] = 0.4; B['oneAt'] = B['cues'][1]; B['done'] = B['cues'][2]; B['eqAt'] = B['cues'][2] + 0.3
            else:
                B['tenAt'] = B['cues'][1]; B['oneAt'] = B['cues'][2]; B['done'] = B['cues'][3]; B['eqAt'] = B['cues'][3] + 0.3
            sceneEnd = max(sceneEnd, (B.get('eqAt') or 0) + 2.0, B['tenAt'] + 3)
        elif sc == 'house':
            rows = plan(p['n'], p['d']); ev = {}
            def spread(keys, t0, t1):
                for i, k in enumerate(keys): ev[k] = round(t0 + (t1 - t0) * (i + 0.5) / len(keys), 3)
            if p['show'] == 'map':
                l = say[0]; ev['q0'] = l['t'] + l['d'] * 0.35; ev['q1'] = l['t'] + l['d'] * 0.75
            elif p['show'] == 'trade':
                keys = []
                for ri in range(len(rows)): keys += [f'q{ri}', f'm{ri}', f's{ri}'] + ([f'b{ri}'] if ri < len(rows) - 1 else [])
                l = say[0]; spread(keys, l['t'], l['t'] + l['d'] + 1.0); sceneEnd = max(sceneEnd, l['t'] + l['d'] + 2.5)
            elif p.get('until') == 'd2':
                ev['q0'] = say[0]['t'] + say[0]['d'] * 0.85; ev['m0'] = say[1]['t'] + say[1]['d'] * 0.6; ev['s0'] = say[2]['t'] + say[2]['d'] * 0.6; ev['b0'] = say[3]['t'] + say[3]['d'] * 0.3
            elif p.get('until') == 'q2':
                for k in ['q0', 'm0', 's0', 'b0']: ev[k] = -1
                a = after[0]; spread(['q1', 'm1', 's1', 'b1'], a['t'], a['t'] + a['d'])
            else:
                for k in ['q0', 'm0', 's0', 'b0', 'q1', 'm1', 's1', 'b1']: ev[k] = -1
                spread(['q2', 'm2', 's2'], say[0]['t'], say[0]['t'] + say[0]['d']); B['answerAt'] = say[1]['t']
            B['ev'] = ev
        elif sc == 'check':
            sceneEnd = max(sceneEnd, B['cues'][0] + 0.8 + 3 * 0.7 + 1.5)
        B['lines'] = [{'spk': x['spk'], 'text': x['text'], 't': x['t'], 'd': x['d']} for x in lines]
        if b['type'] == 'shot': D = max(6.5, end + 0.8)
        else: D = max(end + 1.2, sceneEnd + 0.6)
        B['D'] = round(D, 3); B['start'] = round(T, 3)
        for x in lines: audio.append({'file': x['file'], 't': round(T + x['t'], 3), 'spk': x['spk']})
        if b['type'] == 'stop': stops.append([round(T + B['stopAt'], 2), b['q'], b['a']])
        beats.append(B); T += D
    out = {'id': lid, 'title': les['title'], 'num': les['num'], 'D': round(T, 3), 'beats': beats, 'audio': audio, 'stops': stops}
    json.dump(out, open(os.path.join(HERE, f'timeline-{lid}.json'), 'w'), indent=1, ensure_ascii=False)
    print(lid, les['title'], f'{T:.1f}s', 'beats', [f"{x['type'][0]}{x['D']:.1f}" for x in beats], 'stops', stops)
