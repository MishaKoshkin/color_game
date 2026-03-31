# Chromix 🎨

**A browser-based pixel color-mixing game.**

Mix colors on your palette, paint zones on the canvas, and see how close you got to the original image.

## How to play

1. Open `index.html` in any modern browser — no server needed.
2. Choose an image, palette size, brush style, and difficulty.
3. Select a color from the palette (or mix up to 3 colors to create a new one).
4. Click zones on the canvas to paint them.
5. Hit **Завершить** to see your result — accuracy heatmap and score.

## Project structure

```
chromix/
├── index.html          # Entry point
├── css/
│   └── style.css       # All styles
├── js/
│   ├── images.js       # Built-in image definitions & pixel color generators
│   ├── palette.js      # Palette generation, color mixing, zone generation
│   ├── game.js         # Game state, canvas rendering, paint logic
│   ├── ui.js           # UI rendering (palette, mix slots, result screen)
│   └── main.js         # Entry point — wires up start screen & option groups
└── assets/             # Static assets (future: custom level images, sounds)
```

## Tech stack

- Vanilla HTML / CSS / JavaScript — zero dependencies
- Google Fonts (Playfair Display, DM Mono, Lato)
- Canvas 2D API for rendering

## Planned features

- [ ] More built-in images
- [ ] Peek at original (timed hint)
- [ ] High-score / local storage persistence
- [ ] Mobile touch support improvements
