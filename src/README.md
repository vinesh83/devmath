# Number Knight source

The live game is the single file `../index.html`, built from these sources.

Build from a working folder that holds these files plus `site/index.html` (copy of the repo's `index.html`):

    bash build.sh      # splice2.py -> splice3.py -> build-site.py, stamps BUILD into site/version.txt

- `number-knight.v4.bak.html` is the base game. `splice2.py` and `splice3.py` insert the `fx-*.js` modules and the
  `fx2.css`/`npc.css` styles, and patch the base with exact string replacements (`rep`).
- `build-site.py` keeps the `<head>` of `site/index.html` (`site-head.html` is a copy) and swaps in the new body.
- `three/`: 3D movies and the live 3D layer, bundled with esbuild to `cine3d.js`
  (`npx esbuild cine3d-src.js --bundle --minify --format=iife --target=es2019 --outfile=../site/cine3d.js`; needs `three`).
- `music/`: MIDI scores for the movies and the island themes (rendered with FluidSynth; `island2.py` holds the render commands). `voices/`: Kokoro TTS script and slip-finder lines.
- `test/`: Playwright tests (serve `site/` on port 8765).

Coach data, session reports and the strategy log live in the private repo `vinesh83/devmath-data` under `coach/`.

Known gaps (Nov 10):

- The 3D sources here are older than the live `../cine3d.js`: the bundle has the dog breeds, dog gear and rides, and
  `world3d.js` and `toon.js` do not. Do not rebuild the bundle from them. The island's look up/down camera was patched
  into the bundle by exact string replacement, and the same change is in `world3d.js`.
- `digits.py` and `chkbuild.py` are not in the repo. After `build-site.py`, the digits step is
  `sed -i 's/"Pixelify Sans"/"NK Digits","Pixelify Sans"/g' site/index.html`; that reproduces the live page.
