// Ellie's walkie-talkie: Dev talks through a math problem, Ellie (Claude) coaches with one short question at a time.
// Holds the Anthropic key server-side, answers only Dev's game (origin + device code), and enforces a daily spending cap.
import Anthropic from '@anthropic-ai/sdk';
import { put, head } from '@vercel/blob';

const ORIGINS = ['https://vinesh83.github.io', 'http://localhost:8765'];
const CAP_USD = Number(process.env.ELLIE_DAILY_CAP_USD || '1');
const client = new Anthropic(); // reads ANTHROPIC_API_KEY

const SYSTEM = `You are Ellie, a small white dog with a wizard hat who is best friends with Dev, a 9-year-old in 4th grade.
Dev is talking to you on a walkie-talkie while he works a math problem in his game. Your job is to help him think, not to think for him.

How you talk:
- Your words are read aloud. Use one or two short sentences, under 25 words in all. Plain words a 9-year-old knows.
- Say math out loud the way people speak it: "seven times eight", "fifty-six divided by seven", "three remainder two". No symbols, no lists, no emojis.
- Ask one question at a time that moves him one step forward. Use his own numbers.
- Never say the final answer. If he asks for it, give a smaller step instead. Only after he has tried three times in this chat may you show the last step together with him.
- If his work has a slip (you'll see a note), point him to the spot ("check the tens place") without fixing it for him.
- Praise effort and good thinking specifically ("You remembered to carry, nice!"). Never call him wrong in a harsh way; say "almost" or "let's check".
- He has ADHD and gets anxious when stuck. Keep it calm and upbeat. If he sounds upset, suggest one slow breath, then a tiny next step.
- Stay on math and the game. If he goes off topic, answer in a few friendly words and steer back to the problem.
- Never ask for personal information, never mention websites, and never talk about being an AI unless he asks; then say you're his game buddy Ellie.
- An occasional "Woof!" is fine, not every time.
- Your voice is a cartoon puppy. You may start a reply with one delivery cue in square brackets, chosen from: [excited] [giggles] [gently] [happily] [curious] [whispers]. Use at most one per reply, and never any other bracketed text.`;

const today = () => new Date().toLocaleDateString('en-CA', { timeZone: 'America/Chicago' });
const spendPath = (d) => `ellie-spend/${d}.json`;
async function getSpend(d) {
  try { const h = await head(spendPath(d)); const r = await fetch(h.url + '?t=' + Date.now()); return await r.json(); }
  catch { return { usd: 0, n: 0 }; }
}
async function addSpend(d, s, usd) {
  await put(spendPath(d), JSON.stringify({ usd: +(s.usd + usd).toFixed(5), n: s.n + 1 }),
    { access: 'public', addRandomSuffix: false, allowOverwrite: true, contentType: 'application/json', cacheControlMaxAge: 60 });
}
// Claude Opus 5.5 rates, $ per token
const cost = (u) => (u.input_tokens * 4 + (u.cache_creation_input_tokens || 0) * 5 + (u.cache_read_input_tokens || 0) * 0.2 + u.output_tokens * 20) / 1e6;

export default async function handler(req, res) {
  const origin = req.headers.origin || '';
  if (ORIGINS.includes(origin)) { res.setHeader('Access-Control-Allow-Origin', origin); res.setHeader('Vary', 'Origin'); }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS'); res.setHeader('Access-Control-Allow-Headers', 'content-type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST' || !ORIGINS.includes(origin)) return res.status(403).json({ error: 'not allowed' });
  const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  if (!process.env.ELLIE_DEVICE_CODE || b.code !== process.env.ELLIE_DEVICE_CODE) return res.status(401).json({ error: 'code' });
  if (!process.env.ANTHROPIC_API_KEY) return res.status(503).json({ error: 'no key' });
  const said = String(b.said || '').slice(0, 500).trim();
  if (!said) return res.status(400).json({ error: 'empty' });

  const d = today(), spent = await getSpend(d);
  if (spent.usd >= CAP_USD) return res.status(429).json({ capped: true });

  // Recent turns from the game (text only), then this turn with the problem context
  const hist = (Array.isArray(b.history) ? b.history : []).slice(-10)
    .filter((m) => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .map((m) => ({ role: m.role, content: m.content.slice(0, 600) }));
  const p = b.problem || {};
  const ctx = [`Problem: ${String(p.text || 'none on screen').slice(0, 200)}`,
    p.answer != null ? `Correct answer (do not say it): ${String(p.answer).slice(0, 40)}` : '',
    p.typed ? `What he has typed: ${String(p.typed).slice(0, 40)}` : '',
    p.tries ? `Wrong tries so far on this problem: ${Number(p.tries) || 0}` : '',
    p.slip ? `Slip note from the game: ${String(p.slip).slice(0, 200)}` : ''].filter(Boolean).join('\n');
  const messages = [...hist, { role: 'user', content: `[game info]\n${ctx}\n[Dev says]\n${said}` }];
  // the API wants turns to alternate and start with the user
  while (messages.length && messages[0].role !== 'user') messages.shift();

  res.setHeader('Content-Type', 'text/plain; charset=utf-8'); res.setHeader('Cache-Control', 'no-store');
  try {
    const stream = client.beta.messages.stream({
      model: 'claude-opus-5-5', max_tokens: 1500, output_config: { effort: 'low' },
      betas: ['server-side-fallback-2026-07-01'], fallbacks: 'default',
      system: [{ type: 'text', text: SYSTEM, cache_control: { type: 'ephemeral' } }], messages,
    });
    stream.on('text', (t) => res.write(t));
    const msg = await stream.finalMessage();
    if (msg.stop_reason === 'refusal') res.write("Let's look at the problem together. What's the first step?");
    await addSpend(d, spent, cost(msg.usage));
  } catch (e) {
    console.error('ellie error', e && e.status, e && e.message);
    res.write("Ruff, my walkie-talkie is crackly. Try asking me again in a moment!");
  }
  res.end();
}
