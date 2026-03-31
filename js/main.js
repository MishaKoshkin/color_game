/**
 * main.js
 * Entry point — wires up the start screen and starts the game flow.
 */

function initOptionGroup(groupId, stateKey, transform) {
  document.getElementById(groupId).addEventListener('click', e => {
    const btn = e.target.closest('.opt-btn');
    if (!btn) return;
    document.querySelectorAll(`#${groupId} .opt-btn`).forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    state[stateKey] = transform ? transform(btn.dataset.val) : btn.dataset.val;
  });
}

initOptionGroup('img-opts',    'imageIdx',   v => Number(v));
initOptionGroup('colors-opts', 'numColors',  v => Number(v));
initOptionGroup('style-opts',  'paintStyle', null);
initOptionGroup('level-opts',  'level',      null);

document.getElementById('start-btn').addEventListener('click', startNewGame);

/**
 * Full game start sequence:
 * 1. Generate image data
 * 2. Show preview screen (player memorises the image)
 * 3. Preview auto-advances to game screen after timer
 */
function startNewGame() {
  // Generate image & palette first so preview can display it
  initGame();
  startPreview();
}
