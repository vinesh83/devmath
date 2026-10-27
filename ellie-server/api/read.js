// A second reader for handwritten answers: the iPad's own reader is fast but misreads some digits.
// When it reads an answer as wrong (or isn't sure), the game sends a picture of the ink here. Claude reads the
// number without knowing the right answer, so a misread can't mark Dev wrong. Same guards and budget as /api/ellie.
import Anthropic from '@anthropic-ai/sdk';
import { put, head } from '@vercel/blob';
import { waitUntil } from '@vercel/functions';

const ORIGINS = ['https://vinesh83.github.io', 'http://localhost:8765'];
const CAP_USD = Number(process.env.ELLIE_DAILY_CAP_USD || '1');
const client = new Anthropic();

const SYSTEM = `You read a 9-year-old's handwritten answer to a math problem.
Reply with only the number exactly as it is written: digits, plus a decimal point only if one is clearly written.
Children's digits can be messy: a 1 may have a flag or base, a 4 may be open at the top, a 7 may have a cross bar, a 9 may look like a g.
Read every digit from left to right and count them; never drop or add a digit. A plain vertical line is a 1.
Read what he wrote, even if it looks like a wrong answer. If you truly cannot tell, reply with ?`;

const today = () => new Date().toLocaleDateString('en-CA', { timeZone: 'America/Chicago' });
const spendPath = (d) => `ellie-spend/${d}.json`;
async function getSpend(d) {
  try { const h = await head(spendPath(d)); const r = await fetch(h.url + '?t=' + Date.now()); return await r.json(); }
  catch { return { usd: 0, n: 0 }; }
}
// Claude Haiku 5.5 rates, $ per token
const cost = (u) => (u.input_tokens * 0.1 + (u.cache_creation_input_tokens || 0) * 0.125 + (u.cache_read_input_tokens || 0) * 0.01 + u.output_tokens * 0.5) / 1e6;

export default async function handler(req, res) {
  const origin = req.headers.origin || '';
  if (ORIGINS.includes(origin)) { res.setHeader('Access-Control-Allow-Origin', origin); res.setHeader('Vary', 'Origin'); }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS'); res.setHeader('Access-Control-Allow-Headers', 'content-type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST' || !ORIGINS.includes(origin)) return res.status(403).json({ error: 'not allowed' });
  const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  if (!process.env.ELLIE_DEVICE_CODE || b.code !== process.env.ELLIE_DEVICE_CODE) return res.status(401).json({ error: 'code' });
  if (!process.env.ANTHROPIC_API_KEY) return res.status(503).json({ error: 'no key' });
  const img = typeof b.image === 'string' && /^data:image\/png;base64,/.test(b.image) && b.image.length < 300000 ? b.image.split(',')[1] : null;
  if (!img) return res.status(400).json({ error: 'image' });

  const d = today(), spentP = getSpend(d);
  try {
    const msgP = client.messages.create({
      model: 'claude-haiku-5-5', max_tokens: 16, thinking: { type: 'disabled' }, output_config: { effort: 'low' },
      system: SYSTEM,
      messages: [{ role: 'user', content: [
        { type: 'image', source: { type: 'base64', media_type: 'image/png', data: img } },
        { type: 'text', text: b.dot ? 'What number did he write? (decimals are possible)' : 'What number did he write? (whole number)' },
      ] }],
    });
    const [spent, msg] = await Promise.all([spentP, msgP]);
    if (spent.usd >= CAP_USD) return res.status(429).json({ capped: true });
    const raw = (msg.content.find((c) => c.type === 'text') || {}).text || '';
    const text = raw.trim().replace(/[^0-9.?]/g, '');
    // count it against the same daily budget, after the answer is on its way
    waitUntil(put(spendPath(d), JSON.stringify({ usd: +(spent.usd + cost(msg.usage)).toFixed(5), n: spent.n + 1 }),
      { access: 'public', addRandomSuffix: false, allowOverwrite: true, contentType: 'application/json', cacheControlMaxAge: 60 }).catch(() => {}));
    return res.status(200).json({ text: /^[0-9]+(\.[0-9]+)?$/.test(text) ? text : null });
  } catch (e) {
    console.error('read error', e && e.status, e && e.message);
    return res.status(502).json({ error: 'read' });
  }
}
