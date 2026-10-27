#!/usr/bin/env python3
"""Long-division tutorial (3-digit ÷ 1-digit): builds the step-by-step script for 4 problems and the narration jobs.
Every step is a question Dev answers (numbers, or Yes/No). Writes site/tut/longdiv3.json and tut/jobs.json (Kokoro TTS).
Usage: gen.py"""
import json, os, hashlib
HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.join(HERE, '..', 'site', 'tut')
os.makedirs(SITE, exist_ok=True)
N, E = 'am_michael', 'am_puck'          # narrator (the lesson videos' voice) and Ellie
PROBLEMS = [(857, 3), (645, 4), (247, 7), (614, 3)]
jobs = {}

def clip(text, voice=N):
    k = hashlib.md5((voice + text).encode()).hexdigest()[:10]
    jobs[k] = (text, voice)
    return k

def say(text, voice=N):
    return {'t': text, 'a': clip(text, voice), 'v': 'E' if voice == E else 'N'}

def counting(d, upto):
    out, k = [], 1
    while k * d <= upto + d and len(out) < 10:
        out.append(str(k * d)); k += 1
    return ', '.join(out)

def plan(n, d):
    s = str(n); i = 0; cur = int(s[0])
    small = cur < d
    while cur < d and i < len(s) - 1:
        i += 1; cur = cur * 10 + int(s[i])
    rows = []; col = i
    while True:
        q = cur // d; prod = q * d; diff = cur - prod
        rows.append(dict(col=col, cur=cur, q=q, prod=prod, diff=diff))
        if col >= len(s) - 1: break
        col += 1; cur = diff * 10 + int(s[col])
    return s, small, rows

steps = []
def step(**k): steps.append(k)

# ---- intro
step(kind='intro', say=[say("Welcome to the Long Division Workshop! Today you'll divide three-digit numbers, one step at a time."),
                        say("Every long division follows the Knight's Code: Divide, Multiply, Subtract, Bring down. Then we do it again!"),
                        say("You'll do every single step with me. Ready? Let's go!", E)], vis=[{'act': 'legend'}])

for pi, (n, d) in enumerate(PROBLEMS):
    s, small, rows = plan(n, d); Q, R = n // d, n % d
    lead = pi == 0                                     # problem 1: extra help in every prompt
    step(kind='problem', p=pi, n=n, d=d, say=[say(f"Problem {pi+1} of 4: {n} divided by {d}.")], vis=[{'act': 'new', 'n': n, 'd': d}])
    if small:
        first = int(s[0]); two = int(s[:2])
        step(kind='ask', p=pi, tag='D', q='yn', ans='no', say=[say(f"First look at the {first}. Can a {d} fit into {first}?")],
             hint=say(f"{first} is smaller than {d}, so a {d} can't fit into it."), vis=[{'act': 'hl', 'cols': [0]}],
             after=[say(f"Right! So we use the first two digits together: {two}.")], afterVis=[{'act': 'hl', 'cols': [0, 1]}])
    for ri, r in enumerate(rows):
        cur, q, prod, diff, col = r['cur'], r['q'], r['prod'], r['diff'], r['col']
        L = len(str(cur)); cols = list(range(col - L + 1, col + 1))
        # Divide
        if cur < d:
            hint = say(f"{cur} is smaller than {d}, so no {d}s fit. That's zero!")
            after = [say("Zero! We still write the 0 on top. Never skip it!", E)]
        else:
            hint = say(f"Count by {d}s: {counting(d, cur)}. Stop before you go past {cur}.")
            after = [say(f"Yes! {q}. Write it on top, above the {s[col]}.")] if lead else []
        prompt = f"Divide: how many {d}s fit into {cur}?" + (f" Count by {d}s if you need to." if lead and cur >= d else "")
        step(kind='ask', p=pi, tag='D', q='num', ans=q, say=[say(prompt)], hint=hint, vis=[{'act': 'hl', 'cols': cols, 'row': ri}],
             after=after, afterVis=[{'act': 'quot', 'col': col, 'v': q}])
        # Multiply
        step(kind='ask', p=pi, tag='M', q='num', ans=prod, say=[say(f"Multiply: {q} times {d}?")],
             hint=say(f"{q} groups of {d}. Count by {d}s {q} times." if q > 0 else f"Zero times anything is zero."),
             vis=[{'act': 'hlq', 'col': col}], afterVis=[{'act': 'prod', 'row': ri, 'col': col, 'v': prod}])
        # Subtract
        step(kind='ask', p=pi, tag='S', q='num', ans=diff, say=[say(f"Subtract: {cur} minus {prod}?")],
             hint=say(f"Start at {prod} and count up to {cur}. How many did you count?" if prod != cur else f"{cur} minus {prod}: they're the same, so it's zero."),
             vis=[{'act': 'line', 'row': ri, 'cols': cols}], afterVis=[{'act': 'diff', 'row': ri, 'col': col, 'v': diff}])
        # Check: the leftover must be smaller than the divisor
        step(kind='ask', p=pi, tag='C', q='yn', ans='yes', say=[say(f"Check: is {diff} smaller than {d}?")],
             hint=say(f"{diff} is smaller than {d}. If it weren't, we could fit one more {d}."),
             vis=[{'act': 'hld', 'row': ri, 'col': col}], after=[say("Good. That means our Divide step was right.")] if lead else [])
        # Bring down
        if ri < len(rows) - 1:
            nxt = rows[ri + 1]; dig = s[nxt['col']]; newcur = nxt['cur']
            hint = say(f"Put the {dig} next to the {diff}. That makes {newcur}." if diff else f"The leftover was zero, so we just have the {dig}.")
            step(kind='ask', p=pi, tag='B', q='num', ans=newcur, say=[say(f"Bring down the {dig}. What number do we have now?")], hint=hint,
                 vis=[{'act': 'hlcol', 'col': nxt['col']}], afterVis=[{'act': 'bring', 'row': ri, 'col': nxt['col'], 'v': dig}],
                 after=[say("Now we do the Knight's Code again.", E)] if lead and ri == 0 else [])
    # remainder and the answer
    step(kind='ask', p=pi, tag='R', q='num', ans=R, say=[say("There are no more digits to bring down. What's the remainder?")],
         hint=say(f"The remainder is the number left at the bottom: {R}."), vis=[{'act': 'hlrem'}],
         after=[say(f"So {n} divided by {d} is {Q}, remainder {R}!")], afterVis=[{'act': 'answer', 'v': f"{Q} R {R}"}])
    # check by multiplying back
    step(kind='ask', p=pi, tag='K', q='num', ans=n, say=[say(f"Let's check it. {Q} times {d} is {Q*d}. Add the remainder: {Q*d} plus {R} is?")],
         hint=say(f"{Q*d} plus {R}. Count up {R} from {Q*d}."), vis=[{'act': 'check', 'Q': Q, 'd': d, 'R': R}],
         after=[say("That's the number we started with. Perfect!", E)], afterVis=[{'act': 'done'}])

step(kind='outro', say=[say("You did every step of long division! Divide, Multiply, Subtract, Bring down.", E),
                        say("Class Practice is open. Go show what you can do!")], vis=[{'act': 'outro'}])

# shared lines
SHARED = {'yes': [say(t, E) for t in ["Yes!", "Nice!", "That's it!", "Great job!", "Exactly!"]],
          'miss': say("Not quite. Here's a hint."),
          'show': say("Let's look together. Write this number to keep going.")}
json.dump({'problems': PROBLEMS, 'steps': steps, 'shared': SHARED}, open(os.path.join(SITE, 'longdiv3.json'), 'w'), indent=1)
json.dump([[k, t, v] for k, (t, v) in jobs.items()], open(os.path.join(HERE, 'jobs.json'), 'w'), indent=1)
print(len(steps), 'steps,', sum(1 for s in steps if s['kind'] == 'ask'), 'questions,', len(jobs), 'narration clips')
