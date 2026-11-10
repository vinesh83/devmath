# Two more Number Isle themes, so the island does not play one loop all day. The island plays them in turn with island.py's theme.
#   python3 island2.py sails sails.mid   -> "Sunny Sails": bouncy G major, 112 bpm (marimba, pizzicato, flute, trumpet)
#   python3 island2.py trail trail.mid   -> "Starlit Trail": calm A minor, 88 bpm (harp, ocarina, horn, celesta)
# Render: fluidsynth -ni -g 0.8 -F out.wav -r 44100 FluidR3_GM.sf2 x.mid, then
#   ffmpeg -i out.wav -af "loudnorm=I=-16:TP=-1.5,afade=t=out:st=<len-2>:d=2" -ar 44100 -b:a 112k ../../audio/island-<name>.mp3
import sys
from compose import Song
N = {'C': 0, 'C#': 1, 'D': 2, 'D#': 3, 'E': 4, 'F': 5, 'F#': 6, 'G': 7, 'G#': 8, 'A': 9, 'Bb': 10, 'B': 11}
def p(name):  # 'F#5' -> midi
    return 12 * (int(name[-1]) + 1) + N[name[:-1]]
CHORD = {'G': ['G3', 'B3', 'D4'], 'C': ['C3', 'E3', 'G3'], 'D': ['D3', 'F#3', 'A3'], 'Em': ['E3', 'G3', 'B3'], 'Bm': ['B2', 'D3', 'F#3'],
         'Am': ['A2', 'C3', 'E3'], 'F': ['F2', 'A2', 'C3'], 'E': ['E3', 'G#3', 'B3'], 'Dm': ['D3', 'F3', 'A3']}
DR = 9

def mel(s, ch, B, bar, notes, vel=100, oct=0):
    t = bar * 4 * B
    for n, d in notes:
        if n != 'r': s.note(ch, t, d * B * 0.92, p(n) + oct, vel)
        t += d * B

def voices(s, table):
    for ch, prog, vol, rev in table: s.prog(ch, prog); s.cc(ch, 0, 7, vol); s.cc(ch, 0, 11, 110); s.cc(ch, 0, 91, rev)

def sails():
    B = 60 / 112; s = Song()
    MAR, PIZZ, GTR, FLUTE, TRPT, STR, CLAR, GLOCK = 0, 1, 2, 3, 4, 5, 6, 7
    voices(s, [(MAR, 12, 108, 50), (PIZZ, 45, 112, 50), (GTR, 24, 96, 50), (FLUTE, 73, 110, 80), (TRPT, 56, 92, 80), (STR, 48, 84, 90), (CLAR, 71, 108, 80), (GLOCK, 9, 92, 80)])
    PROG = ['G', 'G', 'C', 'G', 'Em', 'C', 'D', 'D',   'G', 'G', 'C', 'G', 'Em', 'C', 'D', 'G',
            'C', 'D', 'Bm', 'Em', 'C', 'D', 'G', 'G',  'Em', 'C', 'G', 'D', 'Em', 'C', 'D', 'D']
    for bar, c in enumerate(PROG):
        t = bar * 4 * B; sec = bar // 8; c3 = [p(x) for x in CHORD[c]]; root = c3[0] - 12; calm = sec == 3
        s.note(PIZZ, t, B * 0.6, root, 100); s.note(PIZZ, t + 2 * B, B * 0.6, root + 7 if root + 7 < 48 else root - 5, 88)
        arp = [c3[0], c3[2], c3[1], c3[2], c3[0] + 12, c3[2], c3[1], c3[2]]
        for k, n in enumerate(arp): s.note(MAR, t + k * B / 2, B * 0.45, n + 12, (62 if calm else 78) - (0 if k % 2 == 0 else 12))
        if not calm:
            for k in (1, 3): s.note(GTR, t + k * B, B * 0.5, [n + 12 for n in c3], 70)
            s.note(DR, t, 0.1, 36, 78); s.note(DR, t + 2 * B, 0.1, 36, 64)
            for k in (1, 3): s.note(DR, t + k * B, 0.1, 54, 58)
        for k in range(8): s.note(DR, t + k * B / 2, 0.05, 82, 44 if k % 2 else 56)
        if sec >= 2: s.note(STR, t, 4 * B * 0.98, [n + 12 for n in c3], 72 if sec == 2 else 54)
        if sec == 2 and bar % 4 == 0: s.note(DR, t, 1, 49, 66)
    A1 = [('D5', 1), ('B4', .5), ('D5', .5), ('G5', 1.5), ('E5', .5), ('D5', 1), ('B4', 1), ('G4', 1), ('r', 1),
          ('E5', 1), ('C5', .5), ('E5', .5), ('G5', 1.5), ('E5', .5), ('D5', 2), ('B4', 1), ('r', 1)]
    A2 = [('E5', 1), ('G5', 1), ('B5', 1.5), ('A5', .5), ('G5', 1), ('E5', 1), ('C5', 1), ('E5', 1),
          ('F#5', 1), ('A5', 1), ('D6', 1.5), ('C6', .5), ('A5', 2), ('F#5', 1), ('r', 1)]
    A3 = [('E5', 1), ('G5', 1), ('B5', 1.5), ('A5', .5), ('G5', 1), ('E5', 1), ('C5', 1), ('E5', 1),
          ('F#5', 1), ('A5', 1), ('C6', 1), ('A5', 1), ('G5', 3), ('r', 1)]
    mel(s, FLUTE, B, 0, A1, 100); mel(s, FLUTE, B, 4, A2, 100)
    mel(s, FLUTE, B, 8, A1, 104); mel(s, GLOCK, B, 8, A1, 70, 12); mel(s, FLUTE, B, 12, A3, 104); mel(s, GLOCK, B, 12, A3, 70, 12)
    Bt = [('E5', 1.5), ('G5', .5), ('C6', 2), ('D6', 1), ('A5', 1), ('F#5', 1), ('A5', 1), ('D6', 1.5), ('B5', .5), ('F#5', 2), ('G5', 1), ('B5', 1), ('E5', 2),
          ('E5', 1.5), ('G5', .5), ('C6', 2), ('D6', 1), ('C6', 1), ('A5', 1), ('F#5', 1), ('G5', 1), ('B5', 1), ('D6', 2), ('G5', 3), ('r', 1)]
    mel(s, TRPT, B, 16, Bt, 96, -12); mel(s, FLUTE, B, 16, Bt, 84)
    Cc = [('B4', 2), ('E5', 2), ('G5', 1.5), ('E5', .5), ('C5', 2), ('D5', 2), ('B4', 1), ('G4', 1), ('A4', 3), ('r', 1),
          ('B4', 1), ('E5', 1), ('G5', 2), ('E5', 1), ('G5', 1), ('C6', 2), ('A5', 1), ('F#5', 1), ('D5', 1), ('F#5', 1), ('A5', 2), ('D5', 1), ('r', 1)]
    mel(s, CLAR, B, 24, Cc, 96)
    return s, 32 * 4 * B

def trail():
    B = 60 / 88; s = Song()
    HARP, CELLO, OCA, HORN, STR, CHOIR, CEL, TIMP = 0, 1, 2, 3, 4, 5, 6, 7
    voices(s, [(HARP, 46, 116, 80), (CELLO, 42, 96, 80), (OCA, 79, 104, 90), (HORN, 60, 104, 90), (STR, 48, 84, 100), (CHOIR, 52, 70, 100), (CEL, 8, 96, 90), (TIMP, 47, 90, 80)])
    PROG = ['Am', 'F', 'C', 'G', 'Am', 'F', 'G', 'E',   'F', 'G', 'Em', 'Am', 'F', 'G', 'C', 'C',   'Am', 'F', 'C', 'G', 'Dm', 'E', 'Am', 'Am']
    for bar, c in enumerate(PROG):
        t = bar * 4 * B; sec = bar // 8; c3 = [p(x) for x in CHORD[c]]; root = c3[0] - 12
        arp = [c3[0], c3[1], c3[2], c3[0] + 12, c3[1] + 12, c3[2] + 12, c3[1] + 12, c3[0] + 12]
        for k, n in enumerate(arp): s.note(HARP, t + k * B / 2, B * 0.95, n + 12, 80 if k % 4 == 0 else 66)
        s.note(CELLO, t, 4 * B * 0.98, root + 12, 76)
        if sec >= 1: s.note(STR, t, 4 * B * 0.98, [n + 12 for n in c3], 66 if sec == 1 else 54)
        if sec == 1: s.note(CHOIR, t, 4 * B * 0.98, [n + 12 for n in c3], 60); s.note(TIMP, t, B, root + 12, 72 if bar % 2 == 0 else 50)
        if bar % 2 == 1: s.note(CEL, t + 3 * B, B * 0.5, c3[2] + 36, 60); s.note(CEL, t + 3.5 * B, B * 0.5, c3[0] + 48, 56)
    A = [('E5', 1.5), ('A5', .5), ('C6', 2), ('A5', 1), ('F5', 1), ('C5', 2), ('E5', 1.5), ('G5', .5), ('C6', 2), ('B5', 1), ('G5', 1), ('D5', 2),
         ('E5', 1.5), ('A5', .5), ('C6', 1), ('E6', 1), ('D6', 1), ('C6', 1), ('A5', 2), ('B5', 1), ('D6', 1), ('G5', 1), ('B5', 1), ('G#5', 3), ('r', 1)]
    mel(s, OCA, B, 0, A, 92)
    Bh = [('A4', 1), ('C5', 1), ('F5', 2), ('G5', 1), ('D5', 1), ('B4', 2), ('G4', 1), ('B4', 1), ('E5', 2), ('E5', 1), ('C5', 1), ('A4', 2),
          ('A4', 1), ('C5', 1), ('F5', 1), ('A5', 1), ('G5', 1), ('B5', 1), ('D6', 2), ('C6', 2), ('G5', 1), ('E5', 1), ('C5', 3), ('r', 1)]
    mel(s, HORN, B, 8, Bh, 100, -12); mel(s, OCA, B, 8, Bh, 76)
    C = [('E5', 1.5), ('A5', .5), ('C6', 2), ('A5', 1), ('F5', 1), ('C5', 2), ('E5', 1.5), ('G5', .5), ('C6', 2), ('D6', 1), ('B5', 1), ('G5', 2),
         ('F5', 1), ('A5', 1), ('D6', 2), ('E6', 1), ('B5', 1), ('G#5', 2), ('A5', 2), ('E5', 1), ('C5', 1), ('A4', 3), ('r', 1)]
    mel(s, OCA, B, 16, C, 94); mel(s, CEL, B, 16, C, 62, 12)
    return s, 24 * 4 * B

if __name__ == '__main__':
    s, secs = {'sails': sails, 'trail': trail}[sys.argv[1]](); s.save(sys.argv[2]); print('ok', round(secs, 2), 's')
