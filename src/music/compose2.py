import sys
from compose import *
KOTO, SHAKU = 12, 13
CH['A'] = [A2, 49, E3]

def setup2(s):
    setup(s); s.prog(KOTO, 107); s.prog(SHAKU, 77); s.cc(KOTO, 0, 7, 105); s.cc(SHAKU, 0, 7, 100); s.cc(KOTO, 0, 91, 80); s.cc(SHAKU, 0, 91, 90)

def theme(s, t, vel=118, oct=0):
    for n, d in [(D4, .44), (F4, .44), (A4, .875), (G4, .44), (F4, .44), (E4, .44), (F4, .44), (D5, .875)]:
        s.note(BRASS, t, d * 0.95, [n + oct, n - 12 + oct], vel); t += d
    return t

def mech():
    s = Song(); setup2(s)
    # 0-4.5: the arena in the dark: drone and horn calls
    s.note(LOWB, 0, 9, [D2 - 12], 64); s.note(STR_LO, 0, 9, [D2, A2], 70); s.ramp(STR_LO, 0, 9, 40, 115)
    s.note(HORN, 0.8, 1.6, [D3, A3], 82); s.note(HORN, 2.8, 1.6, [C3, G3], 82); s.note(DR, 0, 2, 36, 100); timp_roll(s, 3.5, 4.5, D2, 30, 90)
    # 4.5-9: power-up pulse
    for k in range(9): s.note(TAIKO, 4.5 + k * 0.5, 0.3, D2, 88 + k * 3)
    s.note(TREM, 6, 3, [D3, A3, D4], 60); s.ramp(TREM, 6, 9, 40, 110)
    s.note(BRASS, 8, 0.5, [D3, F3, A3, D4], 120); s.note(DR, 8, 1, 49, 115); s.note(TIMP, 8, 0.6, D2, 120)
    # 9-12.5: the fall
    for k in range(7): s.note(TREM, 9 + k * 0.5, 0.5, [D3 + k, A3 + k], 70 + k * 7)
    s.note(CHOIR, 9, 3.5, [D4, F4, A4], 70); s.ramp(CHOIR, 9, 12.5, 40, 127); snare_roll(s, 10.5, 12.5); timp_roll(s, 11, 12.5, A2, 50, 127)
    hit(s, 12.5); s.note(STR_LO, 12.5, 3, [D2, D2 - 12], 100)
    # 13.5-15.5: Glitch's menace
    s.note(LOWB, 13.5, 0.9, [D2, D3], 118); s.note(LOWB, 14.4, 1.0, [D2 + 1, D3 + 1], 122); s.note(TIMP, 13.5, 0.5, D2, 110); s.note(TIMP, 14.4, 0.5, D2 + 1, 115)
    s.note(BRASS, 15.0, 0.6, [D3 + 1, G3, Bb3 + 1], 115); s.note(DR, 15, 1, 57, 110)
    # 15.5-19: cannon charge
    s.note(CHOIR, 15.5, 3.5, [A3, D4, F4, A4], 80); s.ramp(CHOIR, 15.5, 19, 50, 127); ostinato(s, 15.5, 19, ['Dm'], vel=80); snare_roll(s, 17.8, 19)
    # 19-23: battle theme
    prog = ['Dm', 'Bb', 'F', 'C']; ostinato(s, 19, 23, prog, vel=100, per=0.875); drums(s, 19, 23); pad(s, 19, prog, 0.875, STR_HI, 92, 12)
    theme(s, 19); s.note(LOWB, 19, 4, [D2], 100); s.note(BRASS, 20.6, 0.4, [D3, F3, A3, D4], 124)
    # 23-25: the charge
    for k in range(8): s.note(TREM, 23 + k * 0.25, 0.25, [D3 + k, A3 + k], 80 + k * 5)
    snare_roll(s, 23, 25, 50, 127); timp_roll(s, 23.6, 25, D2, 60, 127); s.note(CHOIR, 23, 2, [D4, F4, A4, D5], 100); s.ramp(CHOIR, 23, 25, 60, 127)
    hit(s, 25.0)
    # 25-28.5: slow-motion glory
    pad(s, 25.1, ['Bb', 'C', 'Dm', 'Dm'], 0.85, STR_HI, 100, 12); s.note(CHOIR, 25.1, 3.4, [D4, F4, A4], 110)
    for k, c in enumerate(['Bb', 'C', 'Dm', 'Dm']):
        s.note(LOWB, 25.1 + k * 0.85, 0.8, [ROOT[c], ROOT[c] + 12], 110); s.note(TAIKO, 25.1 + k * 0.85, 0.4, D2 - 12, 120)
    t = 25.1
    for n in [F4, G4, A4, D5]: s.note(BRASS, t, 0.8, [n, n - 12], 120); t += 0.85
    snare_roll(s, 27.6, 28.5, 60, 127)
    # 28.5: title slam, D major
    hit(s, 28.5, chord='D'); s.note(BRASS, 28.5, 2.5, [D3, 54, A3, D4], 122); s.note(CHOIR, 28.5, 2.5, [D4, 66, A4, D5], 122); s.note(STR_HI, 28.5, 2.5, [D3, 54, A3, D4, 66], 112)
    timp_roll(s, 29.2, 30.6, D2, 120, 50)
    return s

def world():
    s = Song(); setup2(s)
    prog = ['Dm', 'Bb', 'F', 'C']
    # 0-5: majestic
    pad(s, 0, prog + ['Dm'], 1.0, STR_HI, 66); s.ramp(STR_HI, 0, 5, 60, 100)
    for k in range(20): s.note(HARP, k * 0.25, 0.6, CH[(prog + ['Dm'])[k // 4]][k % 3] + 12, 58)
    t = 0.5
    for n, d in [(D4, 1), (A4, 1), (G4, .5), (F4, .5), (E4, 1), (D4, 1)]: s.note(HORN, t, d * 0.95, n, 82); t += d
    # 5-9: build
    pad(s, 5, ['Dm', 'Bb', 'Gm', 'A'], 1.0, STR_HI, 82, 12); s.note(CHOIR, 5, 4, [D4, F4, A4], 60); s.ramp(CHOIR, 5, 9, 40, 110)
    s.note(HORN, 5, 4, [A3, D4], 85); timp_roll(s, 8, 9, A2, 30, 110)
    # 9-16: adventure
    ostinato(s, 9, 16, prog, vel=92, per=0.875); drums(s, 9, 16); pad(s, 9, prog * 2, 0.875, STR_HI, 86, 12)
    theme(s, 9, 104); theme(s, 12.5, 114, 0); s.note(LOWB, 9, 7, [D2], 90)
    # 16: thunder, tension
    s.note(TIMP, 16, 1, D2, 120); s.note(DR, 16, 1.5, 49, 100)
    s.note(TREM, 16.2, 3.3, [D2 + 12, D2 + 13], 70); s.ramp(TREM, 16.2, 19.5, 40, 127)
    s.note(LOWB, 16.2, 3.3, [D2 - 12], 80); s.note(CHOIR, 16.6, 2.9, [D4, D4 + 1], 60); s.ramp(CHOIR, 16.6, 19.5, 40, 120)
    snare_roll(s, 18.1, 19.5); timp_roll(s, 18.5, 19.5, D2, 60, 127)
    hit(s, 19.5)
    # 19.9-22.5: menace
    for k, n in enumerate([D2, D2 + 1, D2, D2 - 1]): s.note(LOWB, 19.9 + k * 0.5, 0.48, [n, n + 12], 120); s.note(TAIKO, 19.9 + k * 0.5, 0.3, D2 - 12, 120)
    s.note(BRASS, 21.5, 0.5, [D3 + 1, G3, Bb3 + 1], 118); s.note(CHOIR, 20.5, 2, [D3 + 1, A3], 90)
    # 22.5-25.5: hero theme
    ostinato(s, 22.5, 25.5, ['Bb', 'C', 'Dm', 'Dm'], vel=104, per=0.75); drums(s, 22.5, 25.5)
    t = 22.5
    for n, d in [(F4, .75), (G4, .75), (A4, .75), (D5, .75)]: s.note(BRASS, t, d * 0.95, [n, n - 12], 122); t += d
    s.note(CHOIR, 22.5, 3, [D4, F4, A4], 112)
    # 25.5-27.5: the charge
    for k in range(8): s.note(TREM, 25.5 + k * 0.25, 0.25, [D3 + k, A3 + k], 80 + k * 5)
    snare_roll(s, 25.5, 27.5, 50, 127); timp_roll(s, 26.3, 27.5, D2, 60, 127)
    # 27.5: title
    hit(s, 27.5, chord='D'); s.note(BRASS, 27.5, 2.5, [D3, 54, A3, D4], 122); s.note(CHOIR, 27.5, 2.5, [D4, 66, A4, D5], 122); s.note(STR_HI, 27.5, 2.5, [D3, 54, A3, D4, 66], 112)
    timp_roll(s, 28.2, 29.6, D2, 120, 50)
    return s

def victory():
    s = Song(); setup2(s)
    s.note(TREM, 0, 3.3, [D2 + 12, D2 + 13], 70); s.ramp(TREM, 0, 3.3, 50, 127); s.note(LOWB, 0, 3.3, [D2 - 12], 90); timp_roll(s, 1.5, 3.3, D2, 40, 127); snare_roll(s, 2.2, 3.3)
    hit(s, 3.3)
    s.note(STR_LO, 3.4, 1.6, [D2, A2], 90)
    # 5-16: triumphant fanfare in D major
    P = ['D', 'G2M', 'A', 'D']
    CH['G2M'] = [G2 + 12, 59, D3 + 12 - 12 + 12]; ROOT['G2M'] = G2
    CH['Bm'] = [47, D3, 54]; ROOT['Bm'] = 35
    ostinato(s, 5, 13.5, ['D', 'G2M', 'A', 'D', 'Bm', 'G2M', 'A', 'D'], vel=100, per=1.0625); drums(s, 5, 13.5)
    pad(s, 5, ['D', 'G2M', 'A', 'D', 'Bm', 'G2M', 'A', 'D'], 1.0625, STR_HI, 94, 12)
    t = 5
    for n, d in [(D4, .53), (54 + 12, .53), (A4, 1.06), (A4, .53), (71, .53), (A4, .53), (54 + 12, .53), (G4, 1.06), (E4, 1.06), (54 + 12, .53), (G4, .53), (A4, 1.06), (71, .53), (C5 + 1, .53), (D5, 1.06)]:
        s.note(BRASS, t, d * 0.95, [n, n - 12], 120); t += d
    s.note(CHOIR, 9.25, 4.25, [D4, 66, A4], 110); s.note(HORN, 5, 8.5, [A3], 90)
    hit(s, 13.5, chord='D'); s.note(BRASS, 13.5, 2.5, [D3, 54, A3, D4], 122); s.note(CHOIR, 13.5, 2.5, [D4, 66, A4, D5], 122); s.note(STR_HI, 13.5, 2.5, [D3, 54, A3, D4, 66], 112)
    timp_roll(s, 14, 15.5, D2, 110, 40)
    return s

def belt():
    s = Song(); setup2(s)
    # 0-7: the dojo at sunset: koto and flute over soft strings
    pad(s, 0, ['Dm', 'Bb', 'C', 'Dm', 'Bb', 'C', 'Dm'], 1.0, STR_HI, 60); s.ramp(STR_HI, 0, 7, 55, 90)
    pent = [D4, F4, G4, A4, C5, D5, C5, A4]
    for k in range(28): s.note(KOTO, k * 0.25, 0.5, pent[(k * 3) % 8] - (12 if k % 2 else 0), 70)
    t = 1
    for n, d in [(A4, 1), (G4, .5), (F4, .5), (D4, 1.5), (F4, .5), (G4, 1.5)]: s.note(SHAKU, t, d * 0.95, n, 85); t += d
    for k in range(7): s.note(TAIKO, k, 0.3, D2, 60 + k * 4)
    # 7-10: the belt descends
    s.note(CHOIR, 7, 3, [D4, F4, A4, D5], 70); s.ramp(CHOIR, 7, 10, 40, 127); s.note(TREM, 7, 3, [D3, A3], 70); s.ramp(TREM, 7, 10, 40, 120)
    timp_roll(s, 8.5, 10, D2, 50, 127); snare_roll(s, 9, 10, 40, 120)
    hit(s, 10, chord='D')
    # 10-15: triumph in D major with taiko and koto
    CH['G2M'] = [G2 + 12, 59, D3 + 12]; ROOT['G2M'] = G2
    ostinato(s, 10.1, 13.5, ['D', 'G2M', 'A', 'D'], vel=96, per=0.85); drums(s, 10.1, 13.5)
    pad(s, 10.1, ['D', 'G2M', 'A', 'D'], 0.85, STR_HI, 96, 12)
    t = 10.1
    for n, d in [(D4, .425), (E4, .425), (54 + 12, .85), (A4, .85), (D5, 1.2)]: s.note(BRASS, t, d * 0.95, [n, n - 12], 118); t += d
    for k in range(14): s.note(KOTO, 10.1 + k * 0.25, 0.4, [D4, 66, A4, D5][k % 4], 80)
    s.note(CHOIR, 13.5, 1.5, [D4, 66, A4, D5], 118); s.note(BRASS, 13.5, 1.5, [D3, 54, A3, D4], 118); s.note(DR, 13.5, 1.5, 49, 115); s.note(TIMP, 13.5, 1, D2, 120)
    return s

if __name__ == '__main__':
    o = sys.argv[1]
    for name, f in [('mech', mech), ('world', world), ('victory', victory), ('belt', belt)]:
        f().save(f'{o}/{name}.mid')
    print('ok')
