/* hw.js - tiny handwritten-number recognizer (digits + optional decimal point).
 * Classic script, defines one global: HW.
 *   HW.recognize(strokes, {allowDot=true, maxLen}) -> {text, items:[{ch,p,alts,box}], minP}
 *   HW.classify28(Float32Array(784)) -> Float32Array(10) softmax over digits
 *   HW.render(strokesOfOneChar) -> Float32Array(784) 28x28 MNIST-like image (row-major, 0..1)
 * strokes: [[{x,y},...],...] in CSS px, y down.
 * Model: small CNN (conv16-pool-conv32-pool-conv64-pool3/2-fc96-fc11) trained on MNIST +
 * UCI pendigits trajectories; class 10 = "not a single digit" (used only for segmentation).
 */
const HW = (function () {
  'use strict';
  var MODEL = /*MODEL*/null/*ENDMODEL*/;

  // ---------------------------------------------------------------- weights
  var NET = null;
  function b64bytes(s) {
    var tbl = new Int16Array(128), i, n = 0;
    var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    for (i = 0; i < 128; i++) tbl[i] = -1;
    for (i = 0; i < 64; i++) tbl[abc.charCodeAt(i)] = i;
    var len = s.length; while (len && s.charAt(len - 1) === '=') len--;
    var out = new Uint8Array((len * 3) >> 2), acc = 0, bits = 0;
    for (i = 0; i < len; i++) {
      var v = tbl[s.charCodeAt(i)]; if (v < 0) continue;
      acc = (acc << 6) | v; bits += 6;
      if (bits >= 8) { bits -= 8; out[n++] = (acc >> bits) & 255; }
    }
    return out;
  }
  function init() {
    if (NET) return NET;
    if (!MODEL) throw new Error('HW: no model');
    var q = b64bytes(MODEL.q), off = 0;
    NET = {};
    MODEL.layers.forEach(function (L) {
      var nOut = L.shape[0], per = 1, i, k;
      for (i = 1; i < L.shape.length; i++) per *= L.shape[i];
      var w = new Float64Array(nOut * per);
      for (k = 0; k < nOut; k++) {
        var s = L.scale[k];
        for (i = 0; i < per; i++) { var b = q[off++]; w[k * per + i] = (b > 127 ? b - 256 : b) * s; }
      }
      NET[L.name] = { w: w, b: new Float64Array(L.bias), shape: L.shape };
    });
    return NET;
  }

  // ---------------------------------------------------------------- CNN forward
  // input: padded planes [C][(S+2)*(S+2)], output: relu(conv) [Cout][S*S]   (Float64 buffers)
  function conv3(inp, C, S, L) {
    var Cout = L.shape[0], P = S + 2, SS = S * S, w = L.w, out = new Float64Array(Cout * SS);
    var acc = new Float64Array(S * P); // rows computed at padded width, cropped afterwards
    for (var oc = 0; oc < Cout; oc++) {
      var y, x, n = S * P - 2;
      for (x = 0; x < S * P; x++) acc[x] = 0;
      for (var ic = 0; ic < C; ic++) {
        var ib = ic * P * P, wb = (oc * C + ic) * 9;
        for (var ky = 0; ky < 3; ky++) {
          var w0 = w[wb + ky * 3], w1 = w[wb + ky * 3 + 1], w2 = w[wb + ky * 3 + 2], r = ib + ky * P;
          // one long loop over all rows at once (positions in padded-width space)
          for (x = 0; x < n; x++) acc[x] += w0 * inp[r + x] + w1 * inp[r + x + 1] + w2 * inp[r + x + 2];
        }
      }
      var ob = oc * SS, bias = L.b[oc];
      for (y = 0; y < S; y++) for (x = 0; x < S; x++) {
        var v = acc[y * P + x] + bias; out[ob + y * S + x] = v > 0 ? v : 0;
      }
    }
    return out;
  }
  // maxpool k x k stride 2 from [C][S*S] -> padded [C][(So+2)^2] (pad=1 for next conv) or plain if !pad
  function pool(inp, C, S, k, pad) {
    var So = Math.floor((S - k) / 2) + 1, P = pad ? So + 2 : So, o0 = pad ? P + 1 : 0;
    var out = new Float64Array(C * P * P);
    for (var c = 0; c < C; c++) {
      var ib = c * S * S, obase = c * P * P + o0;
      for (var y = 0; y < So; y++) for (var x = 0; x < So; x++) {
        var m = 0;
        for (var dy = 0; dy < k; dy++) for (var dx = 0; dx < k; dx++) {
          var v = inp[ib + (2 * y + dy) * S + 2 * x + dx]; if (v > m) m = v;
        }
        out[obase + y * P + x] = m;
      }
    }
    return { a: out, S: So };
  }
  function dense(inp, L, relu) {
    var nOut = L.shape[0], nIn = L.shape[1], out = new Float64Array(nOut), w = L.w;
    for (var o = 0; o < nOut; o++) {
      var s = L.b[o], base = o * nIn;
      for (var i = 0; i < nIn; i++) s += w[base + i] * inp[i];
      out[o] = relu && s < 0 ? 0 : s;
    }
    return out;
  }
  function logits(img) {
    var N = init();
    var p0 = new Float64Array(30 * 30);
    for (var y = 0; y < 28; y++) for (var x = 0; x < 28; x++) p0[(y + 1) * 30 + x + 1] = img[y * 28 + x];
    var a = conv3(p0, 1, 28, N.c1);
    var p = pool(a, N.c1.shape[0], 28, 2, true);
    a = conv3(p.a, N.c1.shape[0], 14, N.c2);
    p = pool(a, N.c2.shape[0], 14, 2, true);
    a = conv3(p.a, N.c2.shape[0], 7, N.c3);
    p = pool(a, N.c3.shape[0], 7, 3, false);
    var h = dense(p.a, N.f1, true);
    return dense(h, N.f2, false);
  }
  function softmax(z, n) {
    var m = -1e30, i, s = 0, out = new Float32Array(n);
    for (i = 0; i < n; i++) if (z[i] > m) m = z[i];
    for (i = 0; i < n; i++) { out[i] = Math.exp(z[i] - m); s += out[i]; }
    for (i = 0; i < n; i++) out[i] /= s;
    return out;
  }
  function classify28(img) { return softmax(logits(img), 10); }
  function classify11(img) { return softmax(logits(img), 11); }

  // ---------------------------------------------------------------- rendering
  // strokes -> flat [[x0,y0,x1,y1,...],...]
  function flat(strokes) {
    var out = [];
    for (var i = 0; i < strokes.length; i++) {
      var s = strokes[i]; if (!s || !s.length) continue;
      var f = [];
      for (var j = 0; j < s.length; j++) {
        var x = +(s[j] && s[j].x), y = +(s[j] && s[j].y);
        if (isFinite(x) && isFinite(y)) f.push(x, y);
      }
      if (f.length) out.push(f);
    }
    return out;
  }
  var R0 = 1.1; // pen radius (28px units) at thick=1; antialias ramp of 1px
  function raster(fs, s, ox, oy, rad) {
    var img = new Float32Array(784), Rp = rad + 0.5, ext = Math.ceil(Rp + 1);
    for (var k = 0; k < fs.length; k++) {
      var f = fs[k], n = f.length >> 1, px = [], py = [], i;
      for (i = 0; i < n; i++) {
        var X = f[2 * i] * s + ox, Y = f[2 * i + 1] * s + oy, m = px.length;
        if (m && i < n - 1 && Math.abs(X - px[m - 1]) + Math.abs(Y - py[m - 1]) < 0.4) continue;
        px.push(X); py.push(Y);
      }
      var segs = px.length > 1 ? px.length - 1 : 1;
      for (i = 0; i < segs; i++) {
        var ax = px[i], ay = py[i], bx = px.length > 1 ? px[i + 1] : ax, by = px.length > 1 ? py[i + 1] : ay;
        var dx = bx - ax, dy = by - ay, L2 = dx * dx + dy * dy;
        var xa = Math.max(0, Math.floor(Math.min(ax, bx) - ext)), xb = Math.min(27, Math.ceil(Math.max(ax, bx) + ext));
        var ya = Math.max(0, Math.floor(Math.min(ay, by) - ext)), yb = Math.min(27, Math.ceil(Math.max(ay, by) + ext));
        for (var yy = ya; yy <= yb; yy++) for (var xx = xa; xx <= xb; xx++) {
          var cx = xx + 0.5 - ax, cy = yy + 0.5 - ay, t = L2 > 0 ? (cx * dx + cy * dy) / L2 : 0;
          if (t < 0) t = 0; else if (t > 1) t = 1;
          var ex = cx - t * dx, ey = cy - t * dy, d = Math.sqrt(ex * ex + ey * ey), v = Rp - d;
          if (v > 0) { if (v > 1) v = 1; var q = yy * 28 + xx; if (v > img[q]) img[q] = v; }
        }
      }
    }
    return img;
  }
  function renderFlat(fs, thick) {
    var x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9, k, i;
    for (k = 0; k < fs.length; k++) for (i = 0; i < fs[k].length; i += 2) {
      var x = fs[k][i], y = fs[k][i + 1];
      if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
    }
    if (x0 > x1) return new Float32Array(784);
    var m = Math.max(x1 - x0, y1 - y0, 1e-3), s = 20 / m;
    var rad = R0 * (thick || 1);
    var ox = 14 - (x0 + x1) / 2 * s, oy = 14 - (y0 + y1) / 2 * s;
    var img = raster(fs, s, ox, oy, rad), sm = 0, sx = 0, sy = 0;
    for (var yy = 0; yy < 28; yy++) for (var xx = 0; xx < 28; xx++) {
      var v = img[yy * 28 + xx]; sm += v; sx += v * (xx + 0.5); sy += v * (yy + 0.5);
    }
    if (sm <= 0) return img;
    var sx2 = 14 - sx / sm, sy2 = 14 - sy / sm;
    sx2 = Math.max(-4, Math.min(4, sx2)); sy2 = Math.max(-4, Math.min(4, sy2));
    return raster(fs, s, ox + sx2, oy + sy2, rad);
  }
  function render(strokes, thick) { return renderFlat(flat(strokes), thick); }

  // ---------------------------------------------------------------- segmentation
  function strokeInfo(f, idx) {
    var x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9, len = 0;
    for (var i = 0; i < f.length; i += 2) {
      var x = f[i], y = f[i + 1];
      if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
      if (i) len += Math.hypot(x - f[i - 2], y - f[i - 1]);
    }
    return { f: f, idx: idx, x0: x0, x1: x1, y0: y0, y1: y1, w: x1 - x0, h: y1 - y0, cx: (x0 + x1) / 2, cy: (y0 + y1) / 2, len: len };
  }
  function bboxOf(list) {
    var b = { x0: 1e9, y0: 1e9, x1: -1e9, y1: -1e9 };
    for (var i = 0; i < list.length; i++) {
      var s = list[i];
      if (s.x0 < b.x0) b.x0 = s.x0; if (s.x1 > b.x1) b.x1 = s.x1;
      if (s.y0 < b.y0) b.y0 = s.y0; if (s.y1 > b.y1) b.y1 = s.y1;
    }
    b.w = b.x1 - b.x0; b.h = b.y1 - b.y0; b.cx = (b.x0 + b.x1) / 2;
    return b;
  }
  function median(a) { a = a.slice().sort(function (p, q) { return p - q; }); return a.length ? a[a.length >> 1] : 0; }
  function ptSegDist(px, py, f) {
    var best = 1e18, n = f.length;
    if (n === 2) return Math.hypot(px - f[0], py - f[1]);
    for (var i = 0; i + 3 < n; i += 2) {
      var ax = f[i], ay = f[i + 1], dx = f[i + 2] - ax, dy = f[i + 3] - ay, L2 = dx * dx + dy * dy;
      var t = L2 > 0 ? ((px - ax) * dx + (py - ay) * dy) / L2 : 0;
      if (t < 0) t = 0; else if (t > 1) t = 1;
      var ex = px - ax - t * dx, ey = py - ay - t * dy, d = ex * ex + ey * ey;
      if (d < best) best = d;
    }
    return Math.sqrt(best);
  }
  function inkDist(a, b) { // min distance between the ink of strokes a and b
    var best = 1e18;
    for (var i = 0; i < a.f.length; i += 2) { var d = ptSegDist(a.f[i], a.f[i + 1], b.f); if (d < best) best = d; }
    for (i = 0; i < b.f.length; i += 2) { d = ptSegDist(b.f[i], b.f[i + 1], a.f); if (d < best) best = d; }
    return best;
  }
  function overlap(a0, a1, b0, b1) { return Math.min(a1, b1) - Math.max(a0, b0); }

  var STATS = { calls: 0 };
  // classification of a group of strokes (cached)
  function makeClassifier(ext) {
    var cache = ext || {};
    return function (list) {
      var key = list.map(function (s) { return s.idx; }).sort(function (a, b) { return a - b; }).join(',');
      var r = cache[key];
      if (!r) {
        STATS.calls++;
        var p = classify11(renderFlat(list.map(function (s) { return s.f; })));
        var best = 0;
        for (var d = 1; d < 10; d++) if (p[d] > p[best]) best = d;
        r = cache[key] = { p: p, d: best, pd: p[best] };
      }
      return r;
    };
  }

  // Tunable constants (fit on training-writer composites).
  var K = {
    SMALL: 0.33,     // marks with max(w,h) < SMALL*H are punctuation/speck candidates
    SPECK: 0.10,     // tiny marks
    ATTACH: 0.10,    // a small mark within ATTACH*H of big ink belongs to that digit
    LOWER: 0.42,     // punctuation must start below this fraction of local digit height
    MINH: 0.42,      // a character must be at least MINH*H tall
    GAPMAX: 0.35,    // no merge across horizontal gaps > GAPMAX*H
    TALLGAP: 0.10,   // tall parts separated by more than this are different characters
    SPLITP: 0.6,     // try splitting a wide character only if its digit prob < SPLITP or garbage prob > 0.25
    SPLITGAIN: 0.3,  // required log-prob gain to accept a split
    WMAX: 2.0,       // max char width / H
    OVL: 1.0,        // penalty weight for overlap between neighbouring characters
    GAPPEN: 0.0,     // penalty weight for gaps inside a character
    CHARPEN: 0.0,    // per-character penalty
    LOGFLOOR: 1e-4
  };

  function recognize(strokes, opts) {
    opts = opts || {};
    var allowDot = opts.allowDot !== false, maxLen = opts.maxLen > 0 ? opts.maxLen | 0 : 0;
    var fs = flat(strokes || []), S = [], i, j;
    for (i = 0; i < fs.length; i++) S.push(strokeInfo(fs[i], i));
    var empty = { text: '', items: [], minP: 1 };
    if (!S.length) return empty;

    // --- reference digit height H: cluster strokes by x-overlap, take robust height of big clusters
    var order = S.slice().sort(function (a, b) { return a.x0 - b.x0; }), cl = [], cur = null;
    for (i = 0; i < order.length; i++) {
      var s = order[i];
      if (cur && s.x0 <= cur.x1 + 0.0) { cur.list.push(s); cur.x1 = Math.max(cur.x1, s.x1); cur.y0 = Math.min(cur.y0, s.y0); cur.y1 = Math.max(cur.y1, s.y1); }
      else { cur = { list: [s], x1: s.x1, y0: s.y0, y1: s.y1 }; cl.push(cur); }
    }
    var hs = cl.map(function (c) { return c.y1 - c.y0; }), hmax = Math.max.apply(null, hs);
    var H = median(hs.filter(function (h) { return h >= 0.5 * hmax; }));
    // single-stroke widths can exceed height for touching digits; height is the reliable cue
    if (H < 6) return empty; // nothing but specks

    // --- classify marks
    var big = [], small = [];
    S.forEach(function (s) { (Math.max(s.w, s.h) < K.SMALL * H ? small : big).push(s); });
    if (!big.length) return empty;
    var gTop = median(big.map(function (s) { return s.y0; })), gBot = median(big.map(function (s) { return s.y1; }));
    var keep = big.slice(), dots = [];
    small.forEach(function (m) {
      var near = 1e9, insideX = false;
      for (var k = 0; k < big.length; k++) {
        var b = big[k];
        if (m.cx >= b.x0 - 0.03 * H && m.cx <= b.x1 + 0.03 * H) insideX = true;
        // cheap bbox distance first
        var bd = Math.max(0, b.x0 - m.x1, m.x0 - b.x1, b.y0 - m.y1, m.y0 - b.y1);
        if (bd > K.ATTACH * H) continue;
        var d = inkDist(m, b); if (d < near) near = d;
      }
      var isSpeck = Math.max(m.w, m.h) < K.SPECK * H || m.len < 0.12 * H;
      // local line: big strokes horizontally near the mark
      var loc = big.filter(function (b) { return b.x1 > m.cx - 0.8 * H && b.x0 < m.cx + 0.8 * H; });
      var top = loc.length ? median(loc.map(function (b) { return b.y0; })) : gTop;
      var bot = loc.length ? median(loc.map(function (b) { return b.y1; })) : gBot;
      var lower = m.y0 > top + K.LOWER * (bot - top) && m.cy > top + 0.6 * (bot - top);
      // a low mark beside (not under) the digits is punctuation even if it nearly touches one
      if (lower && !insideX) { dots.push({ s: m, top: top, bot: bot }); return; }
      if (near <= K.ATTACH * H) {
        if (!isSpeck) keep.push(m); // e.g. serif of a 1, crossbar of a 7, bar of a 5
        return;
      }
      if (lower) { dots.push({ s: m, top: top, bot: bot }); return; }
      if (!isSpeck) keep.push(m); // free-floating medium mark (e.g. detached 5 bar); DP decides
    });

    // --- DP over x-sorted strokes into characters
    var cls = makeClassifier(opts._cache); // _cache: optional external cache (tuning only)
    keep.sort(function (a, b) { return a.cx - b.cx; });
    var n = keep.length, MAXG = 5;
    var dotSlot = allowDot && dots.length ? 1 : 0;
    var maxChars = maxLen ? Math.max(1, maxLen - dotSlot) : 1e9;
    // group validity / score, keyed j,i (strokes j..i-1)
    var gcache = {};
    function group(j, i) {
      var key = j + ':' + i; if (key in gcache) return gcache[key];
      var list = keep.slice(j, i), b = bboxOf(list), r = null;
      var ok = b.h >= K.MINH * H && (list.length === 1 || b.w <= K.WMAX * H), gapPen = 0;
      if (ok) {
        var ex = list.slice().sort(function (p, q) { return p.x0 - q.x0; }), right = ex[0].x1;
        for (var k = 1; k < ex.length; k++) {
          var g = ex[k].x0 - right;
          if (g > K.GAPMAX * H) { ok = false; break; }
          if (g > K.TALLGAP * H && ex[k].h >= 0.6 * H && bboxOf(ex.slice(0, k)).h >= 0.6 * H) { ok = false; break; }
          if (g > 0) gapPen += g / H;
          right = Math.max(right, ex[k].x1);
        }
      }
      if (ok) {
        var c = cls(list);
        r = { j: j, i: i, b: b, c: c, score: Math.log(Math.max(c.pd, K.LOGFLOOR)) - K.GAPPEN * gapPen - K.CHARPEN };
      }
      gcache[key] = r; return r;
    }
    function boundaryPen(g1, g2) {
      var o = overlap(g1.b.x0, g1.b.x1, g2.b.x0, g2.b.x1);
      if (o <= 0) return 0;
      // one part above the other with big horizontal overlap = the same character (e.g. an 8 drawn as two circles)
      var stk = (g1.b.y1 <= g2.b.y0 + 0.3 * H) || (g2.b.y1 <= g1.b.y0 + 0.3 * H);
      if (stk && o >= 0.45 * Math.max(Math.min(g1.b.w, g2.b.w), 1)) return 50;
      var mw = Math.max(Math.min(g1.b.w, g2.b.w), 0.25 * H);
      return K.OVL * Math.min(1.5, o / mw);
    }
    // state: (end i, last group start j, count k)
    var best = {}; // key "i,j,k" -> {score, prev}
    best['0,-1,0'] = { score: 0, prev: null, g: null };
    var states = {}; states[0] = [['0,-1,0', 0, -1, 0]];
    for (i = 0; i < n; i++) {
      var st = states[i]; if (!st) continue;
      for (var si = 0; si < st.length; si++) {
        var sk = st[si], from = best[sk[0]], kcnt = sk[3];
        if (kcnt >= maxChars) continue;
        for (var e = i + 1; e <= Math.min(n, i + MAXG); e++) {
          var g = group(i, e); if (!g) continue;
          var sc = from.score + g.score - (from.g ? boundaryPen(from.g, g) : 0);
          var key = e + ',' + i + ',' + (kcnt + 1);
          if (!best[key] || best[key].score < sc) {
            if (!best[key]) { (states[e] = states[e] || []).push([key, e, i, kcnt + 1]); }
            best[key] = { score: sc, prev: sk[0], g: g };
          }
        }
      }
    }
    var fin = null;
    (states[n] || []).forEach(function (sk) { var b = best[sk[0]]; if (!fin || b.score > fin.score) fin = b; });
    var groups = [];
    if (fin) { var t = fin; while (t && t.g) { groups.unshift({ list: keep.slice(t.g.j, t.g.i), b: t.g.b, c: t.g.c }); t = best[t.prev]; } }
    else { // fallback (no valid segmentation, e.g. maxLen too small): one char per x-overlap cluster
      var cur2 = null;
      keep.slice().sort(function (a, b) { return a.x0 - b.x0; }).forEach(function (s) {
        if (cur2 && s.x0 <= cur2.b.x1) { cur2.list.push(s); cur2.b = bboxOf(cur2.list); }
        else { cur2 = { list: [s], b: bboxOf([s]) }; groups.push(cur2); }
      });
      groups.forEach(function (g) { g.c = cls(g.list); });
    }

    // --- try splitting wide characters (connected digits) when it raises confidence
    var out = [], nChars = groups.length;
    groups.forEach(function (g) {
      var sp = nChars >= maxChars ? null : trySplit(g, H, cls);
      if (sp) { out.push(sp[0]); out.push(sp[1]); nChars++; } else out.push(g);
    });
    if (maxLen) while (out.length > maxChars) { // merge-free fallback: drop least confident
      var mi = 0; for (i = 1; i < out.length; i++) if (out[i].c.pd < out[mi].c.pd) mi = i; out.splice(mi, 1);
    }

    // --- two closed loops stacked vertically is an 8 ("snowman 8")
    function closedLoop(st) { var f = st.f, n = f.length; if (n < 8) return false; var d = Math.hypot(f[0] - f[n - 2], f[1] - f[n - 1]); return d < 0.45 * Math.max(st.w, st.h) && st.len > 2.2 * Math.max(st.w, st.h); }
    out.forEach(function (g) {
      if (g.list.length !== 2) return; var a = g.list[0], b = g.list[1]; if (a.cy > b.cy) { var tmp = a; a = b; b = tmp; }
      var ov = overlap(a.x0, a.x1, b.x0, b.x1);
      if (closedLoop(a) && closedLoop(b) && a.cy < b.y0 + 0.1 * H && b.cy > a.y1 - 0.1 * H && ov >= 0.45 * Math.min(a.w, b.w)) {
        var q = []; for (var d = 0; d < 10; d++) q.push(d === 8 ? 0.95 : g.c.p[d] * 0.05 / Math.max(1e-6, 1 - g.c.p[8])); g.c = Object.assign({}, g.c, { p: q, pd: 0.95 });
      }
    });
    // --- assemble items
    var items = out.map(function (g) {
      var p = g.c.p, ranked = [];
      for (var d = 0; d < 10; d++) ranked.push([String(d), +p[d].toFixed(4)]);
      ranked.sort(function (a, b) { return b[1] - a[1]; });
      return { ch: ranked[0][0], p: ranked[0][1], alts: ranked.slice(1, 3), box: { x0: g.b.x0, y0: g.b.y0, x1: g.b.x1, y1: g.b.y1 }, _cx: g.b.cx };
    });
    if (allowDot && dots.length && (!maxLen || items.length < maxLen)) {
      // choose the rightmost dot-like mark; others are ignored
      var dm = dots.reduce(function (a, b) { return b.s.cx > a.s.cx ? b : a; });
      var sz = Math.max(dm.s.w, dm.s.h) / H;
      items.push({ ch: '.', p: sz < 0.2 ? 0.95 : 0.8, alts: [], box: { x0: dm.s.x0, y0: dm.s.y0, x1: dm.s.x1, y1: dm.s.y1 }, _cx: dm.s.cx });
    }
    items.sort(function (a, b) { return a._cx - b._cx; });
    items.forEach(function (it) { delete it._cx; });
    var minP = 1, text = '';
    items.forEach(function (it) { text += it.ch; if (it.p < minP) minP = it.p; });
    return { text: text, items: items, minP: minP };
  }

  // split one character group at a low-ink column into two characters
  function cutStroke(f, cut) { // split polyline into pieces left/right of x=cut
    var L = [], R = [], cur = null, side = null;
    for (var i = 0; i < f.length; i += 2) {
      var x = f[i], y = f[i + 1], sd = x < cut;
      if (cur && sd !== side) {
        var px = f[i - 2], py = f[i - 1], t = (cut - px) / (x - px), yc = py + t * (y - py);
        cur.push(cut, yc); (side ? L : R).push(cur); cur = [cut, yc];
      }
      if (!cur) cur = [];
      cur.push(x, y); side = sd;
    }
    if (cur) (side ? L : R).push(cur);
    return [L, R];
  }
  var splitId = 1000000;
  function trySplit(g, H, cls) {
    var b = g.b;
    if (b.w < 0.75 * H) return null;
    if (g.c.p[10] < 0.25 && g.c.pd >= K.SPLITP) return null;
    // column ink profile
    var NB = 24, prof = new Float64Array(NB), k, i;
    g.list.forEach(function (s) {
      var f = s.f;
      for (i = 0; i + 3 < f.length; i += 2) {
        var a = (f[i] - b.x0) / b.w * NB, c = (f[i + 2] - b.x0) / b.w * NB, seg = Math.hypot(f[i + 2] - f[i], f[i + 3] - f[i + 1]);
        var lo = Math.max(0, Math.floor(Math.min(a, c))), hi = Math.min(NB - 1, Math.floor(Math.max(a, c)));
        for (k = lo; k <= hi; k++) prof[k] += seg / (hi - lo + 1);
      }
    });
    var cands = [];
    for (k = Math.floor(NB * 0.2); k <= Math.ceil(NB * 0.8) && k < NB; k++) cands.push([prof[k] + (k > 0 ? prof[k - 1] : 0) * 0.5 + (k < NB - 1 ? prof[k + 1] : 0) * 0.5, k]);
    cands.sort(function (p, q) { return p[0] - q[0]; });
    var cols = []; // up to 3 low-ink columns, at least 3 bins apart
    for (i = 0; i < cands.length && cols.length < 3; i++) {
      if (cols.every(function (c) { return Math.abs(c - cands[i][1]) >= 3; })) cols.push(cands[i][1]);
    }
    var hyps = [];
    function mk(Lf, Rf) {
      var Ls = Lf.map(function (f) { return strokeInfo(f, splitId++); }).filter(function (s) { return s.len > 0.05 * H; });
      var Rs = Rf.map(function (f) { return strokeInfo(f, splitId++); }).filter(function (s) { return s.len > 0.05 * H; });
      if (Ls.length && Rs.length) hyps.push([Ls, Rs]);
    }
    cols.forEach(function (bin) {
      var cut = b.x0 + (bin + 0.5) / NB * b.w, Lf = [], Rf = [];
      // (a) geometric cut at the column
      g.list.forEach(function (s) { var pr = cutStroke(s.f, cut); Lf = Lf.concat(pr[0]); Rf = Rf.concat(pr[1]); });
      mk(Lf, Rf);
      // (b) temporal cut: split the widest stroke where its trajectory crosses the column (pen-up between digits never happened)
      var ws = g.list.reduce(function (p, q) { return q.w > p.w ? q : p; }), f = ws.f, nx = 0;
      for (var j = 2; j < f.length && nx < 2; j += 2) {
        if ((f[j - 2] - cut) * (f[j] - cut) <= 0 && f[j - 2] !== f[j]) {
          nx++;
          var A = f.slice(0, j), B = f.slice(j - 2), ax = 0, bx = 0, t;
          for (t = 0; t < A.length; t += 2) ax += A[t]; for (t = 0; t < B.length; t += 2) bx += B[t];
          var first = ax / (A.length / 2) < bx / (B.length / 2);
          var L2 = [first ? A : B], R2 = [first ? B : A];
          g.list.forEach(function (s) { if (s !== ws) (s.cx < cut ? L2 : R2).push(s.f); });
          mk(L2, R2);
        }
      }
    });
    var baseScore = Math.log(Math.max(g.c.pd, 1e-4)), bestS = null;
    hyps.forEach(function (hp) {
      var Ls = hp[0], Rs = hp[1], bl = bboxOf(Ls), br = bboxOf(Rs);
      if (bl.h < K.MINH * H || br.h < K.MINH * H) return;
      var cl = cls(Ls), cr = cls(Rs);
      var sc = Math.log(Math.max(cl.pd, 1e-4)) + Math.log(Math.max(cr.pd, 1e-4));
      if (sc > baseScore + K.SPLITGAIN && Math.min(cl.pd, cr.pd) > 0.5 && (!bestS || sc > bestS.sc))
        bestS = { sc: sc, parts: [{ list: Ls, b: bl, c: cl }, { list: Rs, b: br, c: cr }] };
    });
    return bestS ? bestS.parts : null;
  }

  return {
    recognize: recognize,
    classify28: classify28,
    render: render,
    _classify11: classify11,
    _K: K,
    _stats: STATS,
    version: '1.0'
  };
})();
if (typeof module !== 'undefined' && module.exports) module.exports = HW;
