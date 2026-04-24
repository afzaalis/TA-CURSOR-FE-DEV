/* =============================================================
   main.js — Image Diff Tool using resemble.js
   ============================================================= */

'use strict';

// ── State ──────────────────────────────────────────────────────
const state = {
  imgA: null,   // data URL
  imgB: null,
  diffDataUrl: null,
};

// ── DOM refs ──────────────────────────────────────────────────
const $  = (id) => document.getElementById(id);

// ── Initialise file inputs + drag & drop ──────────────────────
function initUpload(side) {
  const input    = $(`input-${side}`);
  const dropZone = $(`drop-${side}`);

  input.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) loadImage(file, side);
  });

  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('drag-over');
  });
  dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) loadImage(file, side);
  });
}

// ── Load an image file into state ─────────────────────────────
function loadImage(file, side) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    state[`img${side.toUpperCase()}`] = dataUrl;

    // Show preview
    const preview = $(`preview-${side}`);
    preview.src = dataUrl;

    $(`placeholder-${side}`).classList.add('hidden');
    $(`preview-wrapper-${side}`).classList.remove('hidden');

    // Populate slider / side-by-side images
    if (side === 'a') {
      $('slider-img-a').src = dataUrl;
      $('side-img-a').src   = dataUrl;
    } else {
      $('slider-img-b').src = dataUrl;
      $('side-img-b').src   = dataUrl;
    }

    updateCompareBtn();
    hideResults();
  };
  reader.readAsDataURL(file);
}

// ── Remove image ──────────────────────────────────────────────
window.removeImage = function(side) {
  state[`img${side.toUpperCase()}`] = null;
  $(`input-${side}`).value = '';
  $(`preview-${side}`).src = '';
  $(`preview-wrapper-${side}`).classList.add('hidden');
  $(`placeholder-${side}`).classList.remove('hidden');
  updateCompareBtn();
  hideResults();
};

// ── Swap images ───────────────────────────────────────────────
window.swapImages = function() {
  const tmp = state.imgA;
  state.imgA = state.imgB;
  state.imgB = tmp;

  if (state.imgA) {
    $('preview-a').src   = state.imgA;
    $('slider-img-a').src = state.imgA;
    $('side-img-a').src  = state.imgA;
    $('placeholder-a').classList.add('hidden');
    $('preview-wrapper-a').classList.remove('hidden');
  } else {
    $('preview-wrapper-a').classList.add('hidden');
    $('placeholder-a').classList.remove('hidden');
  }

  if (state.imgB) {
    $('preview-b').src   = state.imgB;
    $('slider-img-b').src = state.imgB;
    $('side-img-b').src  = state.imgB;
    $('placeholder-b').classList.add('hidden');
    $('preview-wrapper-b').classList.remove('hidden');
  } else {
    $('preview-wrapper-b').classList.add('hidden');
    $('placeholder-b').classList.remove('hidden');
  }

  updateCompareBtn();
  hideResults();
};

// ── Compare button state ──────────────────────────────────────
function updateCompareBtn() {
  $('compare-btn').disabled = !(state.imgA && state.imgB);
}

// ── Run comparison ────────────────────────────────────────────
window.runComparison = function() {
  if (!state.imgA || !state.imgB) return;

  hideResults();
  $('loader').classList.remove('hidden');

  const ignoreMode      = $('ignore-mode').value;
  const shouldIgnoreColors = $('ignore-colors').checked;
  const shouldIgnoreAA     = $('ignore-antialiasing').checked;
  const diffColorHex    = $('diff-color').value;    // e.g. "#ff2d55"
  const diffColor       = hexToRgb(diffColorHex);

  // Apply diff color globally before comparison
  resemble.outputSettings({
    errorColor: { red: diffColor.r, green: diffColor.g, blue: diffColor.b },
  });

  // Build comparison chain — ignore methods take NO arguments in resemble.js
  let comparison = resemble(state.imgA).compareTo(state.imgB);

  if (shouldIgnoreAA || ignoreMode === 'antialiasing') {
    comparison = comparison.ignoreAntialiasing();
  } else if (shouldIgnoreColors || ignoreMode === 'colors') {
    comparison = comparison.ignoreColors();
  } else if (ignoreMode === 'alpha') {
    comparison = comparison.ignoreAlpha();
  } else if (ignoreMode === 'less') {
    comparison = comparison.ignoreLess();
  } else if (ignoreMode === 'nothing') {
    comparison = comparison.ignoreNothing();
  }

  comparison.onComplete((data) => {
    $('loader').classList.add('hidden');
    renderResults(data, diffColor);
  });
};

// ── Render results ────────────────────────────────────────────
function renderResults(data, diffColor) {
  const mismatch    = parseFloat(data.misMatchPercentage).toFixed(2);
  const mismatchNum = parseFloat(mismatch);
  const similarity  = (100 - mismatchNum).toFixed(2);

  // ── Similarity stat card ──────────────────────────────────────
  $('val-similarity').textContent = `${similarity}%`;

  const simBar  = $('similarity-bar');
  const simCard = $('stat-similarity');

  // Animate bar width after a tiny delay so CSS transition fires
  requestAnimationFrame(() => {
    simBar.style.width = `${similarity}%`;
  });

  // Color coding: green ≥ 95 | yellow ≥ 80 | red < 80
  const simNum = parseFloat(similarity);
  if (simNum >= 95) {
    simCard.style.borderColor = 'rgba(16,185,129,0.6)';
    simBar.style.background   = 'linear-gradient(90deg,#10b981,#34d399)';
    $('val-similarity').style.color = '#10b981';
  } else if (simNum >= 80) {
    simCard.style.borderColor = 'rgba(245,158,11,0.6)';
    simBar.style.background   = 'linear-gradient(90deg,#f59e0b,#fbbf24)';
    $('val-similarity').style.color = '#f59e0b';
  } else {
    simCard.style.borderColor = 'rgba(244,63,94,0.6)';
    simBar.style.background   = 'linear-gradient(90deg,#f43f5e,#fb7185)';
    $('val-similarity').style.color = '#f43f5e';
  }

  // ── Mismatch & other stats ────────────────────────────────────
  $('val-mismatch').textContent    = `${mismatch}%`;
  $('val-dimensions').textContent  = `${data.dimensionDifference?.width ?? '—'} × ${data.dimensionDifference?.height ?? '—'}`;
  $('val-same').textContent        = data.isSameDimensions ? 'Yes' : 'No';

  // Calculate different pixels from mismatch % and image area
  const img = new Image();
  img.onload = () => {
    const totalPx = img.width * img.height;
    const diffPx  = Math.round(totalPx * (mismatchNum / 100));
    $('val-pixels').textContent = diffPx.toLocaleString();
  };

  // Draw diff on canvas
  const diffUrl = data.getImageDataUrl ? data.getImageDataUrl() : null;

  if (diffUrl) {
    state.diffDataUrl = diffUrl;
    img.src = diffUrl;

    const canvas = $('diff-canvas');
    const ctx    = canvas.getContext('2d');
    const scale  = parseFloat($('output-scale').value);
    const diffImg = new Image();
    diffImg.onload = () => {
      canvas.width  = diffImg.width  * scale;
      canvas.height = diffImg.height * scale;
      ctx.drawImage(diffImg, 0, 0, canvas.width, canvas.height);
    };
    diffImg.src = diffUrl;
  }

  // Color mismatch stat card
  const statCard = $('stat-mismatch');
  statCard.style.borderColor =
    mismatchNum === 0  ? 'rgba(16,185,129,0.5)' :
    mismatchNum < 5    ? 'rgba(245,158,11,0.5)' :
                         'rgba(244,63,94,0.5)';

  $('results').classList.remove('hidden');
  $('results').scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Switch to diff tab
  switchTab('diff');
}

// ── Download diff image ───────────────────────────────────────
window.downloadDiff = function() {
  if (!state.diffDataUrl) return;
  const a    = document.createElement('a');
  a.href     = state.diffDataUrl;
  a.download = `diff-${Date.now()}.png`;
  a.click();
};

// ── Tab switching ─────────────────────────────────────────────
window.switchTab = function(tab) {
  document.querySelectorAll('.view-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `tab-${tab}`);
  });
  if (tab === 'slider') initSlider();
};

// ── A/B Slider ────────────────────────────────────────────────
function initSlider() {
  const container = $('slider-container');
  const handle    = $('slider-handle');
  const clip      = $('slider-clip');
  const clipImg   = $('slider-img-b');

  let dragging = false;

  function setPosition(x) {
    const rect  = container.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (x - rect.left) / rect.width));
    const pct   = ratio * 100;
    handle.style.left    = `${pct}%`;
    clip.style.left      = `${pct}%`;
    clipImg.style.left   = `-${pct}%`;
    clipImg.style.width  = `${100 / Math.max(ratio, 0.001)}%`;
  }

  container.addEventListener('mousedown',  (e) => { dragging = true; setPosition(e.clientX); });
  container.addEventListener('touchstart', (e) => { dragging = true; setPosition(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('mousemove',  (e) => { if (dragging) setPosition(e.clientX); });
  window.addEventListener('touchmove',  (e) => { if (dragging) setPosition(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('mouseup',   () => dragging = false);
  window.addEventListener('touchend',  () => dragging = false);
}

// ── Helpers ───────────────────────────────────────────────────
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : { r: 255, g: 45, b: 85 };
}

function hideResults() {
  $('results').classList.add('hidden');
  state.diffDataUrl = null;
}

// ── Settings live updates ─────────────────────────────────────
$('diff-color').addEventListener('input', (e) => {
  $('diff-color-label').textContent = e.target.value;
});

$('output-scale').addEventListener('input', (e) => {
  $('scale-val').textContent = `${parseFloat(e.target.value).toFixed(2)}×`;
});

// ── Bootstrap ─────────────────────────────────────────────────
initUpload('a');
initUpload('b');
