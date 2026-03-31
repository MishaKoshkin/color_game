/**
 * palette.js
 * Color utilities, palette generation.
 * Zone generation removed — game now works pixel-by-pixel.
 */

const LEVELS = {
  easy:   { pixelSize: 10 },
  medium: { pixelSize: 8  },
  hard:   { pixelSize: 6  },
};

function rgbStr(c) {
  return `rgb(${c.r},${c.g},${c.b})`;
}

function colorDistance(a, b) {
  return Math.sqrt((a.r - b.r) ** 2 + (a.g - b.g) ** 2 + (a.b - b.b) ** 2);
}

function mixColors(colors) {
  if (!colors.length) return { r: 200, g: 200, b: 200 };
  return {
    r: Math.round(colors.reduce((a, c) => a + c.r, 0) / colors.length),
    g: Math.round(colors.reduce((a, c) => a + c.g, 0) / colors.length),
    b: Math.round(colors.reduce((a, c) => a + c.b, 0) / colors.length),
  };
}

/**
 * Samples `numColors` representative colors from the image color map
 * using a simple grid-sampled k-means-like approach.
 */
function generatePalette(colorMap, numColors, w, h) {
  // Sample pixels on a grid to get candidate colors
  const candidates = [];
  const step = Math.max(1, Math.floor(Math.sqrt(w * h / (numColors * 4))));
  for (let row = 0; row < h; row += step)
    for (let col = 0; col < w; col += step)
      candidates.push({ ...colorMap[row][col] });

  // Simple furthest-point sampling for variety
  const palette = [];
  // Start with a random candidate
  palette.push({ ...candidates[Math.floor(Math.random() * candidates.length)], mixed: false });

  for (let i = 1; i < numColors; i++) {
    // Pick the candidate furthest from all existing palette colors
    let best = null, bestDist = -1;
    for (const cand of candidates) {
      const minDist = Math.min(...palette.map(p => colorDistance(p, cand)));
      if (minDist > bestDist) { bestDist = minDist; best = cand; }
    }
    if (best) palette.push({ ...best, mixed: false });
  }

  // Add slight variation so palette is not identical to original pixels
  return palette.map(c => ({
    r: Math.max(0, Math.min(255, c.r + Math.floor((Math.random() - 0.5) * 30))),
    g: Math.max(0, Math.min(255, c.g + Math.floor((Math.random() - 0.5) * 30))),
    b: Math.max(0, Math.min(255, c.b + Math.floor((Math.random() - 0.5) * 30))),
    mixed: false,
  }));
}
