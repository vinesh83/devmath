# Number Isle theme: a looping adventure piece (Zelda-like open-air feel) for the 3D island.
# 32 bars of 4/4 at 100 bpm (76.8 s), D major. A: flute over harp and pizzicato; B: heroic horns;
# C: full orchestra; D: calm harp bridge that leads back to the top so the loop is seamless.
import sys
from compose import Song, setup, STR_LO, STR_HI, BRASS, HORN, CHOIR, TIMP, HARP, DR
FLUTE, PIZZ, GLOCK, OBOE = 12, 13, 14, 15
B = 0.6  # one beat in seconds (100 bpm)
N = {'C': 0, 'C#': 1, 'D': 2, 'D#': 3, 'E': 4, 'F': 5, 'F#': 6, 'G': 7, 'G#': 8, 'A': 9, 'Bb': 10, 'B': 11}
def p(name):  # 'F#5' -> midi
    k = name[:-1]; o = int(name[-1]); return 12 * (o + 1) + N[k]
CHORD = {'D': ['D3', 'F#3', 'A3'], 'A': ['A2', 'C#3', 'E3'], 'Bm': ['B2', 'D3', 'F#3'], 'G': ['G2', 'B2', 'D3'], 'Em': ['E3', 'G3', 'B3'],
         'F#m': ['F#2', 'A2', 'C#3'], 'Bb': ['Bb2', 'D3', 'F3'], 'C': ['C3', 'E3', 'G3'], 'A7': ['A2', 'C#3', 'G3']}
ROOT = {k: v[0] for k, v in CHORD.items()}
PROG = ['D', 'A', 'Bm', 'G', 'D', 'G', 'A', 'A',      # A
        'G', 'A', 'F#m', 'Bm', 'G', 'A', 'D', 'D',    # B
        'Bb', 'C', 'D', 'D', 'G', 'A', 'Bm', 'G',     # C
        'Em', 'A', 'D', 'Bm', 'G', 'A7', 'D', 'A7']   # D (bridge back)

def mel(s, ch, bar, notes, vel=100, oct=0):
    t = bar * 4 * B
    for n, d in notes:
        if n != 'r': s.note(ch, t, d * B * 0.92, [p(n) + oct], vel)
        t += d * B

def song():
    s = Song(); setup(s)
    for ch, prog in [(FLUTE, 73), (PIZZ, 45), (GLOCK, 9), (OBOE, 68)]: s.prog(ch, prog); s.cc(ch, 0, 7, 105); s.cc(ch, 0, 91, 80)
    s.cc(HARP, 0, 7, 120); s.cc(STR_HI, 0, 7, 96); s.cc(STR_LO, 0, 7, 100)
    for bar, c in enumerate(PROG):
        t = bar * 4 * B; sec = bar // 8; ch3 = [p(x) for x in CHORD[c]]; root = p(ROOT[c]) - 12
        # harp arpeggio every bar (lighter in the big section)
        arp = [ch3[0], ch3[1], ch3[2], ch3[0] + 12, ch3[1] + 12, ch3[2] + 12, ch3[0] + 12, ch3[2]]
        for k, n in enumerate(arp): s.note(HARP, t + k * B / 2, B * 0.9, n + 12, 70 if sec == 2 else 82)
        # bass: pizzicato in A and D, bowed in B and C
        if sec in (0, 3):
            for k in (0, 2): s.note(PIZZ, t + k * B, B * 0.5, [root, root + 12 if k else root], 92)
        else:
            s.note(STR_LO, t, 4 * B * 0.98, [root, root + 12], 84 if sec == 1 else 100)
        # string pad
        if sec >= 1: s.note(STR_HI, t, 4 * B * 0.98, [n + 12 for n in ch3], 62 if sec == 1 else 80)
        # gentle percussion
        if sec == 1 and bar % 2 == 0: s.note(TIMP, t, B, root + 12, 70)
        if sec == 2:
            s.note(TIMP, t, B, root + 12, 96); s.note(TIMP, t + 2 * B, B, root + 12, 80)
            s.note(DR, t, B, 49 if bar % 4 == 0 else 51, 70)
    # A: flute melody (bars 0-7)
    A1 = [('F#5', 1.5), ('E5', .5), ('D5', 1), ('A4', 1), ('C#5', 1.5), ('D5', .5), ('E5', 2), ('B4', 1.5), ('C#5', .5), ('D5', 1), ('F#5', 1), ('G5', 3), ('r', 1)]
    A2 = [('F#5', 1.5), ('A5', .5), ('G5', 1), ('F#5', 1), ('E5', 1.5), ('D5', .5), ('B4', 2), ('C#5', 1), ('D5', 1), ('E5', 1), ('C#5', 1), ('A4', 3), ('r', 1)]
    mel(s, FLUTE, 0, A1, 96); mel(s, FLUTE, 4, A2, 96)
    mel(s, GLOCK, 3, [('D6', .5), ('F#6', .5), ('A6', 1), ('r', 2)], 70); mel(s, GLOCK, 7, [('E6', .5), ('A6', .5), ('C#7', 1), ('r', 2)], 70)
    # B: heroic horn (bars 8-15), oboe answers
    Bh = [('B3', 1), ('D4', 1), ('G4', 2), ('C#4', 1), ('E4', 1), ('A4', 2), ('F#4', 1.5), ('E4', .5), ('C#4', 2), ('D4', 1), ('F#4', 1), ('B4', 2),
          ('G4', 1), ('B4', 1), ('D5', 2), ('C#5', 1), ('B4', .5), ('A4', .5), ('E4', 2), ('F#4', 4), ('r', 4)]
    mel(s, HORN, 8, Bh, 104); mel(s, OBOE, 13, [('A5', 1), ('G5', 1), ('F#5', 1), ('E5', 1)], 80)
    # C: full orchestra (bars 16-23): brass theme with choir
    Cb = [('D4', 1), ('F4', 1), ('Bb4', 2), ('E4', 1), ('G4', 1), ('C5', 2), ('F#4', 1.5), ('A4', .5), ('D5', 2), ('D5', 1), ('E5', 1), ('F#5', 2),
          ('G5', 1.5), ('F#5', .5), ('E5', 1), ('D5', 1), ('C#5', 1.5), ('D5', .5), ('E5', 2), ('F#5', 1.5), ('E5', .5), ('D5', 1), ('B4', 1), ('D5', 4)]
    mel(s, BRASS, 16, Cb, 112, -12); mel(s, FLUTE, 16, Cb, 90, 12)
    for bar in range(16, 24):
        c = PROG[bar]; s.note(CHOIR, bar * 4 * B, 4 * B * 0.98, [p(x) + 12 for x in CHORD[c]], 70)
    # D: calm bridge (bars 24-31): oboe then flute, leading home
    Do = [('B4', 2), ('G4', 2), ('C#5', 2), ('E5', 2), ('F#5', 3), ('E5', 1), ('D5', 2), ('B4', 2)]
    mel(s, OBOE, 24, Do, 86)
    mel(s, FLUTE, 28, [('B4', 1), ('D5', 1), ('G5', 2), ('A4', 1), ('C#5', 1), ('E5', 2), ('F#5', 2), ('D5', 2), ('E5', 2), ('C#5', 2)], 90)
    return s

if __name__ == '__main__':
    song().save(sys.argv[1]); print('ok', 32 * 4 * B, 's')
