# Epic trailer-style cues for the 3D cutscenes, written as MIDI and rendered with an orchestral soundfont.
import mido, sys
TPB = 480; BPM = 120; SEC = TPB * BPM / 60  # ticks per second (960)

class Song:
    def __init__(s): s.ev = []  # (tick, order, msg)
    def prog(s, ch, p): s.ev.append((0, 0, mido.Message('program_change', channel=ch, program=p)))
    def cc(s, ch, t, num, val): s.ev.append((int(t * SEC), 1, mido.Message('control_change', channel=ch, control=num, value=max(0, min(127, int(val))))))
    def ramp(s, ch, t0, t1, v0, v1, num=11, steps=24):
        for i in range(steps + 1):
            s.cc(ch, t0 + (t1 - t0) * i / steps, num, v0 + (v1 - v0) * i / steps)
    def note(s, ch, t, dur, n, vel=100):
        if isinstance(n, (list, tuple)):
            for x in n: s.note(ch, t, dur, x, vel)
            return
        a = int(t * SEC); b = int((t + dur) * SEC)
        s.ev.append((a, 3, mido.Message('note_on', channel=ch, note=n, velocity=max(1, min(127, int(vel))))))
        s.ev.append((max(a + 1, b), 2, mido.Message('note_off', channel=ch, note=n, velocity=0)))
    def save(s, path):
        mid = mido.MidiFile(ticks_per_beat=TPB); tr = mido.MidiTrack(); mid.tracks.append(tr)
        tr.append(mido.MetaMessage('set_tempo', tempo=mido.bpm2tempo(BPM)))
        last = 0
        for t, o, m in sorted(s.ev, key=lambda e: (e[0], e[1])):
            tr.append(m.copy(time=t - last)); last = t
        mid.save(path)

# channels
STR_LO, STR_HI, BRASS, HORN, CHOIR, TIMP, TAIKO, LOWB, HIT, DR, HARP, TREM = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
def setup(s):
    for ch, p in [(STR_LO, 48), (STR_HI, 49), (BRASS, 61), (HORN, 60), (CHOIR, 52), (TIMP, 47), (TAIKO, 116), (LOWB, 57), (HIT, 55), (HARP, 46), (TREM, 44)]:
        s.prog(ch, p)
    for ch in range(16):
        if ch != DR: s.cc(ch, 0, 7, 110); s.cc(ch, 0, 11, 100); s.cc(ch, 0, 91, 70)

D2, E2, F2, G2, A2, Bb2, C3, D3, E3, F3, G3, A3, Bb3, C4, D4, E4, F4, G4, A4, Bb4, C5, D5 = 38, 40, 41, 43, 45, 46, 48, 50, 52, 53, 55, 57, 58, 60, 62, 64, 65, 67, 69, 70, 72, 74
CH = {'Dm': [D3, F3, A3], 'Bb': [Bb2, D3, F3], 'F': [F3, A3, C4], 'C': [C3, E3, G3], 'Gm': [G2, Bb2, D3], 'A': [A2, 64 - 12 + 1, E3], 'D': [D3, 54, A3]}
ROOT = {'Dm': D2, 'Bb': Bb2 - 12, 'F': F2, 'C': C3 - 12, 'Gm': G2, 'A': A2 - 12, 'D': D2}

def hit(s, t, big=True, chord='Dm'):
    s.note(HIT, t, 0.6, [x + 12 for x in CH[chord]], 120)
    s.note(DR, t, 1.5, [49, 57], 127); s.note(DR, t, 0.5, 36, 127)
    s.note(TAIKO, t, 0.8, [D2 - 12, D2], 127); s.note(TIMP, t, 1.2, D2, 127)
    if big: s.note(LOWB, t, 2.2, [D2 - 12, D2], 120)
def timp_roll(s, t0, t1, n=D2, v0=40, v1=120):
    k = 0; t = t0
    while t < t1:
        s.note(TIMP, t, 0.07, n, v0 + (v1 - v0) * (t - t0) / (t1 - t0)); t += 0.07; k += 1
def snare_roll(s, t0, t1, v0=30, v1=120):
    t = t0
    while t < t1:
        s.note(DR, t, 0.05, 38, v0 + (v1 - v0) * (t - t0) / (t1 - t0)); t += max(0.04, 0.12 - 0.08 * (t - t0) / (t1 - t0))
def ostinato(s, t0, t1, chords, step=0.125, vel=92, per=1.0):
    t = t0; i = 0
    while t < t1 - 1e-6:
        c = chords[int((t - t0) / per) % len(chords)]; r = ROOT[c] + 12
        pat = [r, r, r + 12, r, r + 7, r, r + 12, r + 7]
        s.note(STR_LO, t, step * 0.9, pat[i % 8], vel - (0 if i % 4 == 0 else 14)); t += step; i += 1
def drums(s, t0, t1, heavy=True):
    t = t0; i = 0
    while t < t1 - 1e-6:
        b = i % 8
        if b in (0, 3, 6): s.note(TAIKO, t, 0.3, D2 - 12 if b == 0 else D2, 118 if b == 0 else 96)
        if b in (0, 4): s.note(DR, t, 0.2, 36, 120)
        if heavy and b in (2, 6): s.note(DR, t, 0.2, 38, 104)
        if b == 0 and i % 16 == 0: s.note(DR, t, 1, 49, 110)
        s.note(DR, t, 0.05, 42, 60 if b % 2 else 78)
        t += 0.25; i += 1
def pad(s, t0, chords, per, ch=STR_HI, vel=80, octave=0):
    for k, c in enumerate(chords):
        s.note(ch, t0 + k * per, per * 0.98, [x + octave for x in CH[c]], vel)

def mech():
    s = Song(); setup(s)
    # 0-1: rumble in
    s.note(LOWB, 0, 5.4, [D2 - 12], 70); s.note(STR_LO, 0, 5.4, [D2, A2], 75); s.ramp(STR_LO, 0, 5.4, 40, 120); timp_roll(s, 0, 1.0, D2, 30, 100)
    s.note(DR, 0.0, 2, 36, 110)
    # 1-5.5: power-up pulse
    for k in range(9): s.note(TAIKO, 1 + k * 0.5, 0.3, D2, 90 + k * 3)
    s.note(HORN, 1, 3.5, [D3, A3], 70); s.ramp(HORN, 1, 4.5, 50, 120)
    s.note(TREM, 2.5, 3, [D3, A3, D4], 60); s.ramp(TREM, 2.5, 5.5, 40, 110)
    s.note(BRASS, 4.5, 0.5, [D3, F3, A3, D4], 120); s.note(DR, 4.5, 1, 49, 115); s.note(TIMP, 4.5, 0.6, D2, 120)
    # 5.5-9: the fall (riser)
    for k in range(7): s.note(TREM, 5.5 + k * 0.5, 0.5, [D3 + k, A3 + k], 70 + k * 7)
    s.note(CHOIR, 5.5, 3.5, [D4, F4, A4], 70); s.ramp(CHOIR, 5.5, 9, 40, 127)
    snare_roll(s, 7.0, 9.0); timp_roll(s, 7.5, 9.0, A2, 50, 127)
    # 9: IMPACT
    hit(s, 9.0)
    s.note(STR_LO, 9.0, 3, [D2, D2 - 12], 100)
    # 10-12: Glitch's menace (half-step brass)
    s.note(LOWB, 10.0, 0.9, [D2, D3], 118); s.note(LOWB, 10.9, 1.0, [D2 + 1, D3 + 1], 122); s.note(TIMP, 10.0, 0.5, D2, 110); s.note(TIMP, 10.9, 0.5, D2 + 1, 115)
    s.note(BRASS, 11.0, 0.6, [D3 + 1, G3, Bb3 + 1], 115); s.note(DR, 11, 1, 57, 110)
    # 12-14.5: your cannon charges
    s.note(CHOIR, 12, 2.5, [A3, D4, F4, A4], 80); s.ramp(CHOIR, 12, 14.5, 50, 127); ostinato(s, 12, 14.5, ['Dm'], vel=80); snare_roll(s, 13.3, 14.5)
    # 14.5-18: full battle theme
    prog = ['Dm', 'Bb', 'F', 'C']; ostinato(s, 14.5, 18, prog, vel=100, per=0.875 * 1.0); drums(s, 14.5, 18)
    pad(s, 14.5, prog, 0.875, STR_HI, 92, 12)
    mel = [(D4, .44), (F4, .44), (A4, .875), (G4, .44), (F4, .44), (E4, .44), (F4, .44), (D5, .875)]
    t = 14.5
    for n, d in mel: s.note(BRASS, t, d * 0.95, [n, n - 12], 118); t += d
    s.note(HORN, 14.5, 3.5, [A3], 90); s.note(LOWB, 14.5, 3.5, [D2], 100)
    # 18: title slam, D major finish
    hit(s, 18.0, chord='D'); s.note(BRASS, 18.0, 2, [D3, 54, A3, D4], 120); s.note(CHOIR, 18.0, 2, [D4, 66, A4, D5], 120); s.note(STR_HI, 18, 2, [D3, 54, A3, D4, 66], 110)
    timp_roll(s, 18.6, 19.8, D2, 120, 60)
    return s

def world():
    s = Song(); setup(s)
    # 0-4: majestic opening (quiet under the narrator)
    prog = ['Dm', 'Bb', 'F', 'C']
    pad(s, 0, prog, 1.0, STR_HI, 62); s.ramp(STR_HI, 0, 4, 60, 95)
    for k in range(16): s.note(HARP, k * 0.25, 0.6, CH[prog[k // 4]][k % 3] + 12, 55)
    mel = [(D4, 1), (A4, 1), (G4, .5), (F4, .5), (E4, 1)]; t = 0.5
    for n, d in mel: s.note(HORN, t, d * 0.95, n, 72); t += d
    # 4-7.5: build
    pad(s, 4, ['Dm', 'Bb', 'Gm', 'A'], 0.875, STR_HI, 75, 12); s.note(CHOIR, 4, 3.5, [D4, F4, A4], 55); s.ramp(CHOIR, 4, 7.5, 40, 100)
    timp_roll(s, 6.5, 7.5, A2, 30, 100)
    # 7.5-11: adventure
    prog2 = ['Dm', 'Bb', 'F', 'C']; ostinato(s, 7.5, 11, prog2, vel=88, per=0.875); drums(s, 7.5, 11, heavy=False)
    t = 7.5
    for n, d in [(D4, .44), (E4, .44), (F4, .875), (A4, .875), (G4, .44), (F4, .44), (E4, .44)]:
        s.note(BRASS, t, d * 0.95, n, 92); t += d
    # 11: thunder, tension rises
    s.note(TIMP, 11, 1, D2, 120); s.note(DR, 11, 1.5, 49, 100)
    s.note(TREM, 11.2, 2.8, [D2 + 12, D2 + 13], 70); s.ramp(TREM, 11.2, 14, 40, 127)
    s.note(LOWB, 11.2, 2.8, [D2 - 12], 80); s.note(CHOIR, 11.6, 2.4, [D4, D4 + 1], 60); s.ramp(CHOIR, 11.6, 14, 40, 120)
    snare_roll(s, 12.6, 14.0); timp_roll(s, 13, 14, D2, 60, 127)
    # 14: IMPACT
    hit(s, 14.0)
    # 14-16.5: the boss's menace
    for k, n in enumerate([D2, D2 + 1, D2, D2 - 1]): s.note(LOWB, 14.4 + k * 0.5, 0.48, [n, n + 12], 120); s.note(TAIKO, 14.4 + k * 0.5, 0.3, D2 - 12, 120)
    s.note(BRASS, 16.0, 0.4, [D3 + 1, G3, Bb3 + 1], 118)
    # 16.5-18.5: hero theme returns
    prog3 = ['Bb', 'C', 'Dm', 'Dm']; ostinato(s, 16.5, 18.5, prog3, vel=104, per=0.5); drums(s, 16.5, 18.5)
    t = 16.5
    for n, d in [(F4, .5), (G4, .5), (A4, .5), (D5, .5)]:
        s.note(BRASS, t, d * 0.95, [n, n - 12], 122); t += d
    s.note(CHOIR, 16.5, 2, [D4, F4, A4], 110)
    # 18.5: title slam
    hit(s, 18.5, chord='D'); s.note(BRASS, 18.5, 2.5, [D3, 54, A3, D4], 122); s.note(CHOIR, 18.5, 2.5, [D4, 66, A4, D5], 122); s.note(STR_HI, 18.5, 2.5, [D3, 54, A3, D4, 66], 112)
    timp_roll(s, 19.0, 20.6, D2, 120, 50)
    return s

if __name__ == '__main__':
    mech().save(sys.argv[1] + '/mech.mid'); world().save(sys.argv[1] + '/world.mid'); print('ok')
