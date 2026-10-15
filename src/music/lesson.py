# A light, curious adventure loop for the division lessons (sits under the narration).
import sys
from compose import *
MAR, PIZ, FLU, GLK = 12, 13, 14, 15
F3_, A3_, C4_, F4_, G4_, A4_, Bb4_, C5_, D5_, E5_, F5_ = 53, 57, 60, 65, 67, 69, 70, 72, 74, 76, 77
CHD = {'F': [53, 57, 60], 'Dm': [50, 53, 57], 'Bb': [46, 50, 53], 'C': [48, 52, 55], 'Gm': [43, 46, 50], 'Am': [45, 48, 52]}
ROOTS = {'F': 41, 'Dm': 38, 'Bb': 34, 'C': 36, 'Gm': 43, 'Am': 45}
BAR = 2.5; E8 = BAR / 8
def lesson(total=84):
    s = Song()
    for ch, p in [(MAR, 12), (PIZ, 45), (FLU, 73), (GLK, 9), (STR_HI, 49), (HARP, 46)]: s.prog(ch, p)
    for ch in range(16):
        if ch != DR: s.cc(ch, 0, 7, 100); s.cc(ch, 0, 91, 85)
    s.cc(STR_HI, 0, 7, 70); s.cc(FLU, 0, 7, 88)
    prog = ['F', 'Dm', 'Bb', 'C', 'F', 'Am', 'Bb', 'C']
    mel = [[(0, F5_, 1), (1, E5_, 1), (2, C5_, 2), (4, A4_, 2), (6, C5_, 2)], [(0, D5_, 3), (3, C5_, 1), (4, A4_, 4)], [(0, Bb4_, 2), (2, D5_, 2), (4, F5_, 4)], [(0, E5_, 2), (2, D5_, 2), (4, C5_, 4)]]
    bars = int(total / BAR) + 1
    for b in range(bars):
        t0 = b * BAR; c = prog[b % 8]; sec = (b // 8) % 4
        # marimba arpeggio, plucked bass
        notes = CHD[c] + [CHD[c][0] + 12, CHD[c][1] + 12]
        for i in range(8):
            s.note(MAR, t0 + i * E8, E8 * 0.9, notes[[0, 2, 1, 3, 2, 4, 3, 2][i]] + 12, 78 if i % 2 else 92)
        s.note(PIZ, t0, E8 * 1.6, ROOTS[c], 96); s.note(PIZ, t0 + 4 * E8, E8 * 1.6, ROOTS[c] + 7, 84)
        s.note(STR_HI, t0, BAR * 0.98, CHD[c], 50 + 8 * (sec > 0))
        if b % 2 == 0: s.note(HARP, t0, BAR, [x + 12 for x in CHD[c]], 60)
        # light percussion from the second section
        if sec >= 1:
            for i in range(8): s.note(DR, t0 + i * E8, 0.05, 42 if i % 2 == 0 else 70, 56 if i % 2 else 66)
            s.note(DR, t0 + 2 * E8, 0.1, 54, 50); s.note(DR, t0 + 6 * E8, 0.1, 54, 50)
        # flute tune in sections 2 and 3, glockenspiel sparkles
        if sec in (1, 3):
            for (beat, n, d) in mel[b % 4]: s.note(FLU, t0 + beat * E8, d * E8 * 0.95, n, 84)
        if b % 4 == 3: s.note(GLK, t0 + 6 * E8, 0.3, [84, 88], 70)
    return s
if __name__ == '__main__':
    lesson().save(sys.argv[1]); print('ok')
