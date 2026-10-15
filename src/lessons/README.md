# Division lesson videos

Six short lessons for the Division Dungeon (`video/div1.mp4` … `div6.mp4`). Each mixes 3D scenes from the game engine, math animations, narration, and a music bed.

## Pipeline

1. `lessons.json` holds the script: beats (shot, math, stop), narration lines, and "Your turn" questions.
2. Narration: Kokoro TTS (`kokoro/say.py vo/jobs.json`). The narrator is `am_michael`. Ellie is `am_puck`, pitched up with ffmpeg (`asetrate=24000*1.2,aresample=24000,atempo=0.9`, then loudnorm). Lengths go in `vo/durations.json`.
3. `timeline.py` times every beat from the narration: cue times, animation events, stops. It writes `timeline-divN.json`.
4. Frames:
   - `test/mathfx.js all render` draws the math beats with `lessonfx.js`.
   - `test/shot.js shots-timed.json all clip 1280x720` renders the 3D shots with `three/cine3d-src.js` (scene `shot`).
   - Both read the hero's look from `dev-hero.json`. It is kept in the private data repo.
5. Music: `music/lesson.py` writes `lesson-bed.wav`.
6. `compose.py` cuts each lesson to MP4. It overlays the title, ducks the music under the voices, and writes `video/index.json` with the stop times.

## Veo

`veo.py` makes 8-second Veo 3.1 clips from each shot's first frame and prompt, with a hard $50 cap and a ledger. When `veo/<shot>.mp4` exists, `compose.py` uses it in place of the 3D shot and mixes its sound effects under the narration. The kit and the clips live in the private data repo (`veo-kit/`).
