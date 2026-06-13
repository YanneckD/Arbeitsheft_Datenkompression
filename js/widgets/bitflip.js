function setupBitflipWidget(source) {
  const t = source || getWidgetLang("bitflip");
  const container = document.getElementById("widget-s1-bitflip");
  if (!container) { return; }

  const SIZE = 128;
  const TOTAL_PIXELS = SIZE * SIZE;
  const TOTAL_BITS = TOTAL_PIXELS;

  const origPixels = new Uint8Array(TOTAL_PIXELS);
  const cx = SIZE / 2, cy = SIZE / 2, r = 52, t2 = 4;
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
      if (dist >= r - t2 && dist <= r + t2) {
        origPixels[y * SIZE + x] = 1;
      }
    }
  }

  let pixels = origPixels.slice();
  let flippedBit = -1;
  let pwBits = [];
  let pwFlipped = -1;

  const PW_ORIG = t.password || "M3inGeh3im!";
  function strToBits(s) {
    const bits = [];
    for (const c of s) {
      const code = c.charCodeAt(0);
      for (let i = 7; i >= 0; i--) bits.push((code >> i) & 1);
    }
    return bits;
  }
  function bitsToStr(bits) {
    let out = "";
    for (let i = 0; i < bits.length; i += 8) {
      let b = 0;
      for (let j = 0; j < 8; j++) b = (b << 1) | (bits[i + j] || 0);
      out += String.fromCharCode(b);
    }
    return out;
  }
  pwBits = strToBits(PW_ORIG);
  const PW_TOTAL_BITS = pwBits.length;

  container.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:0.75rem 0">
      <div style="background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:var(--border-radius-lg);padding:1rem 1.25rem">
        <p style="font-size:13px;color:var(--color-text-secondary);margin:0 0 6px">${t.passwordLabel}</p>
        <div id="bfw-pw-val" style="font-family:var(--font-mono);font-size:15px;font-weight:500;margin:6px 0 2px;min-height:24px"></div>
        <div id="bfw-pw-bits-info" style="font-size:12px;color:var(--color-text-secondary);margin:0 0 10px"></div>
        <p id="bfw-pw-status" style="font-size:13px;margin:0 0 10px;min-height:20px"></p>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button id="bfw-pw-flip" type="button" style="font-size:13px;padding:4px 12px">${t.flipButton}</button>
          <button id="bfw-pw-reset" type="button" style="font-size:13px;padding:4px 12px">${t.resetButton}</button>
        </div>
      </div>
      <div style="background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:var(--border-radius-lg);padding:1rem 1.25rem">
        <p style="font-size:13px;color:var(--color-text-secondary);margin:0 0 6px">${t.imageLabel}</p>
        <canvas id="bfw-canvas" width="128" height="128" style="display:block;image-rendering:pixelated;border:0.5px solid var(--color-border-tertiary);border-radius:4px;margin:6px 0 2px;width:128px;height:128px"></canvas>
        <div id="bfw-img-bits-info" style="font-size:12px;color:var(--color-text-secondary);margin:0 0 10px"></div>
        <p id="bfw-img-status" style="font-size:13px;margin:0 0 10px;min-height:20px"></p>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button id="bfw-img-flip" type="button" style="font-size:13px;padding:4px 12px">${t.flipButton}</button>
          <button id="bfw-img-reset" type="button" style="font-size:13px;padding:4px 12px">${t.resetButton}</button>
        </div>
      </div>
    </div>`;

  const canvas = document.getElementById("bfw-canvas");
  const ctx = canvas.getContext("2d");

  function formatBitsInfo(totalBits, changed) {
    return formatLang(t.bitsInfo, {
      bits: totalBits,
      changed,
      plural: changed !== 1 ? "s" : ""
    });
  }

  function drawImg() {
    const id = ctx.createImageData(SIZE, SIZE);
    for (let i = 0; i < TOTAL_PIXELS; i++) {
      const v = pixels[i] ? 0 : 255;
      id.data[i * 4] = v; id.data[i * 4 + 1] = v;
      id.data[i * 4 + 2] = v; id.data[i * 4 + 3] = 255;
    }
    ctx.putImageData(id, 0, 0);
  }

  function updatePw() {
    const cur = bitsToStr(pwBits);
    document.getElementById("bfw-pw-val").textContent = cur;
    const flipped = pwBits.filter((b, i) => b !== strToBits(PW_ORIG)[i]).length;
    document.getElementById("bfw-pw-bits-info").textContent = formatBitsInfo(PW_TOTAL_BITS, flipped);
    const st = document.getElementById("bfw-pw-status");
    if (pwFlipped >= 0 && cur === PW_ORIG) {
      st.textContent = t.passwordCorrect;
      st.style.color = "var(--color-text-success)";
    } else {
      st.textContent = ""; st.style.color = "";
    }
  }

  function updateImg() {
    drawImg();
    const changed = pixels.filter((b, i) => b !== origPixels[i]).length;
    document.getElementById("bfw-img-bits-info").textContent = formatBitsInfo(TOTAL_BITS, changed);
    const st = document.getElementById("bfw-img-status");
    if (flippedBit >= 0) {
      st.textContent = t.pixelChanged;
      st.style.color = "var(--color-text-success)";
    } else {
      st.textContent = ""; st.style.color = "";
    }
  }

  document.getElementById("bfw-pw-flip").addEventListener("click", () => {
    if (pwFlipped >= 0) { pwBits[pwFlipped] ^= 1; }
    pwFlipped = Math.floor(Math.random() * PW_TOTAL_BITS);
    pwBits[pwFlipped] ^= 1;
    updatePw();
  });
  document.getElementById("bfw-pw-reset").addEventListener("click", () => {
    pwBits = strToBits(PW_ORIG); pwFlipped = -1; updatePw();
  });
  document.getElementById("bfw-img-flip").addEventListener("click", () => {
    if (flippedBit >= 0) { pixels[flippedBit] ^= 1; }
    flippedBit = Math.floor(Math.random() * TOTAL_PIXELS);
    pixels[flippedBit] ^= 1;
    updateImg();
  });
  document.getElementById("bfw-img-reset").addEventListener("click", () => {
    pixels = origPixels.slice(); flippedBit = -1; updateImg();
  });

  updatePw();
  updateImg();
}
