// Ellie's voice: turns one sentence of Ellie's reply into speech with ElevenLabs, in a cartoon-puppy voice.
// Same guards as /api/ellie (origin + device code) plus a daily character cap. The voice is designed once from
// a description and its id is saved in Blob storage, unless ELLIE_VOICE_ID is set.
import { put, head } from '@vercel/blob';

const ORIGINS = ['https://vinesh83.github.io', 'http://localhost:8765'];
const CHARS_DAY = Number(process.env.ELLIE_VOICE_CHARS_DAY || '6000');
const XI = 'https://api.elevenlabs.io/v1';
const DESCRIPTION = 'A cheerful cartoon puppy sidekick for a children\'s adventure game. Bright, high, bouncy young voice, ' +
  'warm and friendly American accent, playful and encouraging, a little squeaky with lots of happy energy, ' +
  'like an animated dog best friend. Clear diction and an upbeat pace.';

const today = () => new Date().toLocaleDateString('en-CA', { timeZone: 'America/Chicago' });
async function readJson(path, dflt) {
  try { const h = await head(path); const r = await fetch(h.url + '?t=' + Date.now()); return await r.json(); }
  catch { return dflt; }
}
const writeJson = (path, v) => put(path, JSON.stringify(v),
  { access: 'public', addRandomSuffix: false, allowOverwrite: true, contentType: 'application/json', cacheControlMaxAge: 60 });
const xi = (path, body) => fetch(XI + path, {
  method: 'POST', headers: { 'xi-api-key': process.env.ELEVENLABS_API_KEY, 'content-type': 'application/json' }, body: JSON.stringify(body),
});

// Design the puppy voice the first time, then reuse it
async function voiceId() {
  if (process.env.ELLIE_VOICE_ID) return process.env.ELLIE_VOICE_ID;
  const saved = await readJson('ellie-voice.json', null);
  if (saved && saved.voice_id) return saved.voice_id;
  const d = await xi('/text-to-voice/design', { voice_description: DESCRIPTION, model_id: 'eleven_ttv_v3', auto_generate_text: true, seed: 2026 });
  if (!d.ok) throw new Error('design ' + d.status + ' ' + (await d.text()).slice(0, 200));
  const g = (await d.json()).previews[0].generated_voice_id;
  const c = await xi('/text-to-voice', { voice_name: 'Ellie the puppy', voice_description: DESCRIPTION, generated_voice_id: g });
  if (!c.ok) throw new Error('create ' + c.status + ' ' + (await c.text()).slice(0, 200));
  const id = (await c.json()).voice_id;
  await writeJson('ellie-voice.json', { voice_id: id, made: new Date().toISOString() });
  return id;
}

export default async function handler(req, res) {
  const origin = req.headers.origin || '';
  if (ORIGINS.includes(origin)) { res.setHeader('Access-Control-Allow-Origin', origin); res.setHeader('Vary', 'Origin'); }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS'); res.setHeader('Access-Control-Allow-Headers', 'content-type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST' || !ORIGINS.includes(origin)) return res.status(403).json({ error: 'not allowed' });
  const b = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  if (!process.env.ELLIE_DEVICE_CODE || b.code !== process.env.ELLIE_DEVICE_CODE) return res.status(401).json({ error: 'code' });
  if (!process.env.ELEVENLABS_API_KEY) return res.status(503).json({ error: 'no voice key' });
  const text = String(b.text || '').slice(0, 300).trim();
  if (!text) return res.status(400).json({ error: 'empty' });

  const d = today(), path = `ellie-spend/voice-${d}.json`, used = await readJson(path, { chars: 0, n: 0 });
  if (used.chars + text.length > CHARS_DAY) return res.status(429).json({ capped: true });
  try {
    const id = await voiceId();
    const r = await xi(`/text-to-speech/${id}?output_format=mp3_44100_64`, {
      text, model_id: 'eleven_v4_turbo', voice_settings: { stability: 0.4, similarity_boost: 0.8, style: 0.5 },
    });
    if (!r.ok) { console.error('tts', r.status, (await r.text()).slice(0, 300)); return res.status(502).json({ error: 'tts' }); }
    const audio = Buffer.from(await r.arrayBuffer());
    await writeJson(path, { chars: used.chars + text.length, n: used.n + 1 });
    res.setHeader('Content-Type', 'audio/mpeg'); res.setHeader('Cache-Control', 'no-store');
    return res.status(200).send(audio);
  } catch (e) {
    console.error('voice error', e && e.message);
    return res.status(502).json({ error: 'voice' });
  }
}
