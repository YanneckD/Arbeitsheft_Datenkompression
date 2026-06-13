function setupEfficiencyWidget(source) {
  const t = source || getWidgetLang("efficiency");
  const container = document.getElementById("widget-s1-efficiency");
  if (!container) { return; }

  const files = t.files || [];

  let selections = {};
  let revealed = {};
  let submitted = false;

  container.innerHTML = `

      <div id="efficiency-cards" style="display:grid;gap:0.75rem;margin-bottom:1rem"></div>

      <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-bottom:0.5rem">
        <button id="efficiency-submit" type="button" style="padding:6px 18px;font-size:14px;cursor:pointer;background:var(--accent);color:#fff;border:none;border-radius:3px;font-weight:600">${t.submitButton}</button>
        <button id="efficiency-reset" type="button" style="padding:6px 18px;font-size:14px;cursor:pointer;background:#f7efe1;color:var(--ink);border:1px solid var(--border);border-radius:3px">${t.resetButton}</button>
      </div>

      <div id="efficiency-summary" style="
        border:1px solid var(--border);border-radius:3px;
        background:#fffdf8;padding:0.65rem 0.8rem;
        font-size:0.9rem;font-family:sans-serif;
        display:none
      "></div>
    </div>`;

  const cardsEl = document.getElementById("efficiency-cards");
  const summaryEl = document.getElementById("efficiency-summary");
  const submitBtn = document.getElementById("efficiency-submit");
  const resetBtn = document.getElementById("efficiency-reset");

  function renderCards() {
    let html = "";
    files.forEach((f) => {
      const sel = selections[f.id] || "";
      const rev = revealed[f.id] || false;
      const isCorrect = sel === f.correct;

      let statusSymbol = "";
      let statusColor = "";
      if (rev) {
        if (isCorrect) {
          statusSymbol = "✓";
          statusColor = "#3f8f4b";
        } else {
          statusSymbol = "✗";
          statusColor = "#a92f2f";
        }
      }

      html += `
        <div style="
          border:1px solid var(--border);
          border-radius:4px;
          background:${rev ? (isCorrect ? "rgba(63,143,75,0.06)" : "rgba(169,47,47,0.06)") : "#fffdf8"};
          padding:0.7rem 0.85rem;
        ">
          <div style="margin-bottom:4px">
            <span style="font-weight:600;font-size:0.95rem">${f.label}</span>
            ${rev ? `<span style="margin-left:6px;font-weight:700;color:${statusColor};font-size:1.1rem">${statusSymbol}</span>` : ""}
          </div>
          <p style="margin:0 0 0.5rem;font-size:0.88rem;color:var(--muted);line-height:1.45">${escHtml(f.desc)}</p>
          <div style="display:flex;gap:6px;flex-wrap:wrap">
            <label style="display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border:1px solid var(--border);border-radius:3px;cursor:pointer;background:${sel === "rle" ? "rgba(28,93,140,0.13)" : "#fff"};font-size:0.85rem">
              <input type="radio" name="eff-${f.id}" value="rle" ${sel === "rle" ? "checked" : ""} style="margin:0;accent-color:var(--accent)" ${submitted ? "disabled" : ""}>
              ${t.optionRle}
            </label>
            <label style="display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border:1px solid var(--border);border-radius:3px;cursor:pointer;background:${sel === "dict" ? "rgba(28,93,140,0.13)" : "#fff"};font-size:0.85rem">
              <input type="radio" name="eff-${f.id}" value="dict" ${sel === "dict" ? "checked" : ""} style="margin:0;accent-color:var(--accent)" ${submitted ? "disabled" : ""}>
              ${t.optionDict}
            </label>
            <label style="display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border:1px solid var(--border);border-radius:3px;cursor:pointer;background:${sel === "none" ? "rgba(28,93,140,0.13)" : "#fff"};font-size:0.85rem">
              <input type="radio" name="eff-${f.id}" value="none" ${sel === "none" ? "checked" : ""} style="margin:0;accent-color:var(--accent)" ${submitted ? "disabled" : ""}>
              ${t.optionNone}
            </label>
          </div>
          ${rev ? `
            <div style="margin-top:0.5rem;padding:0.5rem 0.6rem;border-left:3px solid ${statusColor};background:rgba(0,0,0,0.03);font-size:0.88rem;line-height:1.4;border-radius:0 3px 3px 0">
              ${isCorrect ? escHtml(f.feedbackCorrect) : escHtml(f.feedbackWrong)}
            </div>
          ` : ""}
        </div>`;
    });
    cardsEl.innerHTML = html;

    cardsEl.querySelectorAll("input[type=radio]").forEach(function(input) {
      input.addEventListener("change", function() {
        if (submitted) return;
        const name = input.name.replace("eff-", "");
        const val = input.value;
        selections[name] = val;
        if (revealed[name]) {
          revealed[name] = false;
          updateSummary();
          renderCards();
        }
      });
    });
  }

  function updateSummary() {
    const allSelected = files.every(function(f) { return selections[f.id]; });
    if (!allSelected) {
      summaryEl.style.display = "none";
      return;
    }

    const correctCount = files.filter(function(f) { return selections[f.id] === f.correct; }).length;
    const total = files.length;

    if (submitted) {
      let html = `<strong style="font-size:1rem">${formatLang(t.summaryCorrect, { correct: correctCount, total })}</strong>`;
      if (correctCount === total) {
        html += `<span style="display:block;margin-top:4px;color:#3f8f4b">${t.summaryAllCorrect}</span>`;
      } else {
        const wrong = files.filter(function(f) { return selections[f.id] !== f.correct; });
        html += `<div style="margin-top:6px">`;
        wrong.forEach(function(f) {
          html += `<div style="margin-bottom:3px;font-size:0.85rem">
            <span style="color:#a92f2f">✗</span> ${escHtml(f.label)}: 
            <span style="font-weight:600">${renderAnswer(selections[f.id])}</span> 
            (richtig: <span style="font-weight:600">${renderAnswer(f.correct)}</span>)
          </div>`;
        });
        html += `</div>`;
      }
      summaryEl.innerHTML = html;
      summaryEl.style.display = "block";
    } else {
      summaryEl.style.display = "none";
    }
  }

  function renderAnswer(val) {
    if (val === "rle") return t.optionRle;
    if (val === "dict") return t.optionDict;
    if (val === "none") return t.optionNone;
    return "—";
  }

  function escHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function handleSubmit() {
    const allSelected = files.every(function(f) { return selections[f.id]; });
    if (!allSelected) {
      summaryEl.style.display = "block";
      summaryEl.innerHTML = `<span style="color:#a92f2f">${t.selectAllFirst}</span>`;
      return;
    }
    submitted = true;
    files.forEach(function(f) { revealed[f.id] = true; });
    renderCards();
    updateSummary();

    cardsEl.querySelectorAll("input[type=radio]").forEach(function(input) {
      input.disabled = true;
    });
  }

  function handleReset() {
    submitted = false;
    selections = {};
    revealed = {};
    renderCards();
    updateSummary();
    summaryEl.style.display = "none";
  }

  submitBtn.addEventListener("click", handleSubmit);
  resetBtn.addEventListener("click", handleReset);

  renderCards();
}
