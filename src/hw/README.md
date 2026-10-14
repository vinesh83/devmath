# hw.js: handwritten number recognizer

`hw.js` (134 KB, classic script, no dependencies, no network) defines one global, `HW`. It works in Safari/iPadOS 15+ and Chromium. Open `demo.html` to try it with a pen, finger or mouse.

```js
HW.recognize(strokes, { allowDot: true, maxLen: undefined })
  // -> { text: '4.25', items: [{ch:'4', p:0.97, alts:[['9',0.02],['1',0.004]], box:{x0,y0,x1,y1}}, ...], minP: 0.95 }
HW.classify28(Float32Array(784)) // -> Float32Array(10), softmax over digits
HW.render(strokesOfOneChar)       // -> Float32Array(784), 28x28 row-major image, values 0..1
```

* `strokes` is `[[{x,y},...],...]` in CSS px, with y pointing down.
* `items` are ordered left to right. `p` and `alts` are digit probabilities from the 11-way softmax, where the 11th class is "not a single digit". A merge or bad split therefore lowers `p`. A '.' item gets a heuristic `p` of 0.95, or 0.8 for a larger mark.
* `text` contains only digits and at most one '.'. It is `''` for empty input or input that is only specks, and `minP` is then 1.
* The first call decodes the weights, which takes about 30 ms. You can warm up at load time with `HW.classify28(new Float32Array(784))`.

## How it works
* **Preprocessing (`HW.render`)** takes the character's strokes and finds their bounding box. It scales that box so its longest side is 20 px while keeping the aspect ratio, so a '1' stays thin. Strokes are drawn as antialiased polylines with a constant 1.1 px radius in 28-px space, which makes the line thickness proportional to the scale, as in MNIST. The result is rendered again so that the centre of mass lands at (14,14). Average ink per image is calibrated to MNIST: 0.133 here vs 0.130 for MNIST.
* **Model** is a CNN: conv3x3·16, pool2, conv3x3·32, pool2, conv3x3·64, pool3/2, fc 576→96, fc 96→11. It has about 80k parameters. BatchNorm is folded into the weights, which are stored as per-channel int8 in base64. The forward pass is plain JS loops, about 2.3M multiply-adds per character.
* **Training (PyTorch)** used four sources:
  * MNIST with augmentation: elastic, rotation ±15°, shear ±0.35, aspect ×0.78–1.28 and stroke dilate/erode. Each image was then re-normalized exactly as `render` does.
  * UCI pendigits-orig trajectories from the 30 training writers. These were Catmull-Rom smoothed and stroke-augmented in the same ways plus jitter and thickness 0.7–1.5×. They were rendered with the real runtime `render` (node, `tools/gen.js`). 30% of 1s got a base serif and 30% of 7s got a crossbar.
  * Class 10, "not a single digit": 2–3 merged neighbouring digits from pendigits and MNIST, and connected pairs.
  * Digits carrying ligature tails, from cut connected strokes (`tools/gen_lig.js`).
  * The 14 pendigits test writers were never used for training or tuning.
* **Segmentation** has three steps:
  1. **Reference height and small marks.** It estimates the digit height H from clusters of strokes that overlap in x. Marks smaller than 0.33H are handled separately:
     * Tiny specks are dropped.
     * A small mark touching a digit's ink is kept as part of that digit (1 serif, 7 crossbar, 5 bar).
     * A low mark beside the digits is punctuation. It becomes '.' only with `allowDot`, and only the rightmost such mark is used. Otherwise it is ignored, which is how commas are handled.
  2. **Grouping by DP.** A dynamic program groups the x-sorted strokes into characters, up to 5 strokes each. A group's score is its log digit probability. A penalty applies to overlap between neighbouring characters. Hard limits:
     * No merging across gaps larger than 0.35H.
     * Two tall parts with a gap larger than 0.1H are never merged.
     * Every character must be at least 0.42H tall.

     `maxLen` limits the character count.
  3. **Splitting wide characters.** A character wider than 0.75H is a candidate when it is low-confidence or likely "not a digit". The splitter tries the three lowest-ink columns. For each column it tries a geometric cut and a cut in drawing order where the stroke crosses that column. A split is kept only if it raises the joint log-probability by at least 0.3 and both halves have p > 0.5.
  4. **Tuning.** The constants were tuned on composites built from training writers (`tools/tune.js`).

## Results (`node test.js <datadir> --n=1000`; held-out writers)
| Test | Result |
|---|---|
| JS vs PyTorch, same int8 model, 600 images | 600/600 argmax agree, max prob diff 7e-7 |
| MNIST test set, JS forward pass | **98.50%** |
| pendigits held-out writers (3498 digits, 14 unseen writers), clean, through `HW.render` | **99.31%** |
| same digits with random slant/rotation/aspect/elastic distortion | 98.91% |
| 1 with base serif, 7 with crossbar (held-out) | 100% |

The MNIST figure is about 1 point below a typical small CNN. The likely reason is that training puts most of its weight on pen-rendered and heavily augmented data, which is the intended target domain.

**Multi-digit composites.** Each number is built from held-out digits:
* Height is 40–120 px, with each digit varying ±15%.
* The gap between digits is −0.15H to +0.5H, and 20% of neighbours touch or overlap.
* Baseline wobbles by ±0.08H and the whole number is slanted.
* Each digit also gets per-digit shear, rotation and elastic distortion.
* 10% of numbers have a stray speck.

Exact string match:

| set | exact | share with minP≥0.8 | exact when minP≥0.8 |
|---|---|---|---|
| allowDot, 1 digit (30% of multi-digit with '.') | 98.3% | 95.5% | 99.7% |
| allowDot, 2 digits | 98.0% | 94.4% | 99.5% |
| allowDot, 3 digits | 95.7% | 89.4% | 98.2% |
| allowDot, 4 digits | 93.5% | 85.1% | 97.9% |
| no dot, 1 digit | 98.9% | 95.1% | 99.9% |
| no dot, 2 digits | 96.4% | 93.4% | 99.1% |
| no dot, 3 digits | 95.9% | 90.7% | 98.5% |
| no dot, 4 digits (50% written 1,234) | 95.6% | 82.9% | 99.0% |
| no dot, 5 digits written 12,450 | 93.4% | 81.2% | 98.0% |

Other measurements:
* **Error mix** over all 9,000 composites: merged or missing character 43, extra character 34. Digit confusions: 4→5 33, 9→7 30, 6→1 21, 9→3 20, 4→1 19, 4→6 18, 7→2 17, 2→7 11, 7→1 11.
* **Commas** (allowDot=false): a comma becomes an extra character in 0.75% of numbers.
* **Decimals:** the dot is missed in 1.45% of decimals, and a spurious dot appears on 0.10% of integers.
* **Two digits written as one connected stroke** (best effort): 69.6% exact, 80.2% correct length.
* **Edge cases** all pass: empty input, a single tap, a bare line as '1', a 1 with base serif, 11, 4.25 with and without dots allowed, 12,450 with a big comma, a stray speck, and maxLen.
* **Speed** (node 22 on a 2.8 GHz Xeon VM): 2.3 ms per classify, 13 ms per 3-digit `recognize()` (median 9.7 ms, p95 24 ms for 3–5 characters). A 3-digit number needs about 5 classifier calls.

## Known weaknesses
* Open single-stroke 4s, which look like 'y', get read as 1 or 5. 9 with a straight tail is read as 7, 7 as 2, and 6 as 1 when the loop is tiny. These cases usually have p < 0.8.
* Thin digits jammed into a neighbour's overhang, such as a '1' squeezed under a 7's top bar, are often merged. Digits written in one connected stroke are recovered only about 70% of the time.
* Strokes are grouped in x order, so heavily interleaved digits can't be segmented.
* Only one '.' is supported. When there are several, the rightmost low mark wins. With allowDot=true, a comma reads as '.'.
* There is no kids' handwriting in the training data; it is adults on a tablet (pendigits) plus MNIST scans. Please collect a few hundred real samples from the game, then retrain and re-tune.

## Rebuild
```
tools/fetch_data.sh ../data                    # MNIST + pendigits -> ../data, parse
node tools/gen.js ../data 24                   # pen renders (train writers) + merged-digit negatives
node tools/gen_lig.js ../data 40000            # ligature tails / connected pairs
python3 tools/train.py ../data ../out 30       # needs numpy + torch (CPU); ~16 min on 4 cores
node tools/build.js ../out/model.json          # hw_src.js + weights -> hw.js
node test.js ../data                           # tests above (MNIST/JS-vs-Py checks need ../data and ../out/ref_logits.json)
node tools/tune.js ../data                     # optional: re-tune segmentation constants on training writers
```
