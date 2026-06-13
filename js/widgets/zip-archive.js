function setupZipArchiveWidget(source) {
  const t = source || getWidgetLang("zipArchive");
  var container = document.getElementById("widget-s3-zip");
  if (!container) { return; }

  var ZIP_OVERHEAD = 320;

  var FILES = (t.files || []).map(function (f) {
    return {
      name: f.name,
      text: f.text,
      bytes: new Blob([f.text]).size
    };
  });

  var totalBytes = FILES.reduce(function (sum, f) { return sum + f.bytes; }, 0);
  var archiveBytes = totalBytes + ZIP_OVERHEAD;

  function formatBytes(n) {
    if (n >= 1024) {
      return (n / 1024).toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + " KB";
    }
    return n.toLocaleString("de-DE") + " Bytes";
  }

  function formatTotalHint(n) {
    if (n >= 1024) {
      return "~" + Math.round(n / 1024).toLocaleString("de-DE") + " KB";
    }
    return "~" + n.toLocaleString("de-DE") + " Bytes";
  }

  var overheadGlossHtml =
    '<span class="gloss" title="' + t.overheadGloss + '">Overhead</span>';

  var hintText = formatLang(t.hint, {
    sizeHint: formatTotalHint(totalBytes),
    overhead: overheadGlossHtml
  });

  container.classList.remove("widget-placeholder");
  container.style.cssText = "border:1px solid var(--border);background:#fffdf8;padding:0.8rem 1rem 1rem;border-radius:3px;margin:0.75rem 0";

  var fileRowsHtml = FILES.map(function (f, i) {
    return (
      '<div id="zip-file-' + i + '" class="zip-file-row" style="' +
        "display:flex;align-items:center;gap:8px;padding:6px 10px;border-radius:3px;" +
        "border-bottom:1px solid var(--border);font-family:monospace;font-size:13px" +
      '">' +
        '<span class="zip-file-status" style="width:18px;text-align:center;font-size:12px;color:var(--muted)">\u2013</span>' +
        '<span style="font-size:14px;flex-shrink:0">\uD83D\uDCC4</span>' +
        '<span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + f.name + '</span>' +
        '<span style="font-size:12px;color:var(--muted);flex-shrink:0">' + formatBytes(f.bytes) + '</span>' +
      '</div>'
    );
  }).join("");

  var treeRowsHtml = FILES.map(function (f, i) {
    var branch = i < FILES.length - 1 ? "\u251C\u2500" : "\u2514\u2500";
    return (
      '<div id="zip-inner-' + i + '" class="zip-inner-row" style="' +
        "padding:2px 4px;display:flex;align-items:center;gap:6px;font-size:13px;border-radius:2px" +
      '">' +
        '<span class="zip-inner-status" style="width:14px;text-align:center;font-size:11px;color:var(--muted)"></span>' +
        '<span style="color:var(--muted)">' + branch + '</span>' +
        '<span style="color:#555">' + f.name + '</span>' +
      '</div>'
    );
  }).join("");

  container.innerHTML =
    '<div style="text-align:center;margin-bottom:14px">' +
      '<button id="zip-sim-btn" type="button" style="' +
        "border:1px solid var(--accent);background:var(--accent);color:#fff;" +
        "padding:0.45rem 1.2rem;border-radius:3px;cursor:pointer;" +
        "font-family:'Source Sans 3','Gill Sans',sans-serif;font-size:14px;font-weight:600" +
      '">' + t.simulateButton + '</button>' +
    '</div>' +

    '<div id="zip-columns" style="display:grid;grid-template-columns:1fr 1fr;gap:18px">' +

      '<div style="border:1px solid var(--border);border-radius:4px;overflow:hidden;background:#fff;display:flex;flex-direction:column">' +
        '<div style="padding:10px 12px 8px;background:var(--bg);border-bottom:1px solid var(--border)">' +
          '<div style="font-weight:600;font-family:sans-serif;font-size:14px;margin-bottom:2px">' + t.scenarioA + '</div>' +
          '<div style="font-size:12px;color:var(--muted)">' + t.scenarioADesc + '</div>' +
        '</div>' +
        '<div style="flex:1">' + fileRowsHtml + '</div>' +
        '<div id="zip-stats-a" style="padding:10px 12px;background:var(--bg);border-top:1px solid var(--border);font-size:12px;line-height:1.7">' +
          '<div><span style="color:var(--muted)">' + t.filesToSend + '</span> <strong id="zip-stat-a-files">10</strong></div>' +
          '<div><span style="color:var(--muted)">' + t.transfers + '</span> <strong id="zip-stat-a-transfers">10</strong></div>' +
          '<div style="margin-top:4px"><span style="color:var(--muted)">' + t.totalSize + '</span> <strong id="zip-stat-a-size">' + formatBytes(totalBytes) + '</strong></div>' +
        '</div>' +
      '</div>' +

      '<div style="border:1px solid var(--border);border-radius:4px;overflow:hidden;background:#fff;display:flex;flex-direction:column">' +
        '<div style="padding:10px 12px 8px;background:var(--bg);border-bottom:1px solid var(--border)">' +
          '<div style="font-weight:600;font-family:sans-serif;font-size:14px;margin-bottom:2px">' + t.scenarioB + '</div>' +
          '<div style="font-size:12px;color:var(--muted)">' + t.scenarioBDesc + '</div>' +
        '</div>' +
        '<div style="padding:10px 12px;flex:1">' +
          '<div id="zip-archive-header" style="' +
            "display:flex;justify-content:space-between;align-items:center;padding:8px 10px;" +
            "background:#f5f2f0;border-radius:3px;border:1px solid var(--border);margin-bottom:8px" +
          '">' +
            '<div style="display:flex;align-items:center;gap:8px">' +
              '<span id="zip-archive-status" style="width:18px;text-align:center;font-size:12px;color:var(--muted)">\u2013</span>' +
              '<span style="font-size:16px">\uD83D\uDCE6</span>' +
              '<span style="font-weight:600;font-family:monospace;font-size:14px">' + t.archiveName + '</span>' +
            '</div>' +
            '<span id="zip-archive-size" style="font-size:12px;color:var(--muted);font-family:monospace">' + formatBytes(archiveBytes) + '</span>' +
          '</div>' +
          '<div style="padding-left:8px;border-left:1px dashed var(--border);margin-left:14px;font-family:monospace">' +
            treeRowsHtml +
          '</div>' +
        '</div>' +
        '<div id="zip-stats-b" style="padding:10px 12px;background:var(--bg);border-top:1px solid var(--border);font-size:12px;line-height:1.7">' +
          '<div><span style="color:var(--muted)">' + t.filesToSend + '</span> <strong id="zip-stat-b-files">1</strong></div>' +
          '<div><span style="color:var(--muted)">' + t.transfers + '</span> <strong id="zip-stat-b-transfers">1</strong></div>' +
          '<div style="margin-top:4px"><span style="color:var(--muted)">' + t.totalSize + '</span> <strong id="zip-stat-b-size">' + formatBytes(archiveBytes) + '</strong></div>' +
        '</div>' +
      '</div>' +

    '</div>' +

    '<div style="margin-top:14px;padding:10px 12px;background:var(--bg);border:1px solid var(--border);border-radius:3px;font-size:13px;color:var(--muted);font-style:italic;line-height:1.6">' +
      hintText +
    '</div>';

  var simBtn = document.getElementById("zip-sim-btn");
  var archiveHeader = document.getElementById("zip-archive-header");
  var archiveStatus = document.getElementById("zip-archive-status");
  var statsA = document.getElementById("zip-stats-a");
  var statsB = document.getElementById("zip-stats-b");
  var animating = false;
  var timers = [];

  function clearTimers() {
    timers.forEach(function (timer) { clearTimeout(timer); });
    timers = [];
  }

  function resetVisuals() {
    for (var i = 0; i < FILES.length; i++) {
      var row = document.getElementById("zip-file-" + i);
      var status = row.querySelector(".zip-file-status");
      row.style.background = "";
      status.textContent = "\u2013";
      status.style.color = "var(--muted)";

      var inner = document.getElementById("zip-inner-" + i);
      var innerStatus = inner.querySelector(".zip-inner-status");
      inner.style.background = "";
      innerStatus.textContent = "";
    }
    archiveHeader.style.background = "#f5f2f0";
    archiveHeader.style.borderColor = "var(--border)";
    archiveStatus.textContent = "\u2013";
    archiveStatus.style.color = "var(--muted)";
    statsA.style.outline = "";
    statsB.style.outline = "";
  }

  function highlightStats(el) {
    el.style.outline = "2px solid var(--accent)";
    el.style.outlineOffset = "2px";
  }

  function runSimulation() {
    if (animating) { return; }
    animating = true;
    simBtn.disabled = true;
    simBtn.style.opacity = "0.65";
    simBtn.style.cursor = "wait";
    clearTimers();
    resetVisuals();

    var delay = 0;
    var stepMs = 300;
    var archiveDoneMs = 2 * stepMs;

    FILES.forEach(function (_f, i) {
      timers.push(setTimeout(function () {
        var row = document.getElementById("zip-file-" + i);
        var status = row.querySelector(".zip-file-status");
        row.style.background = "rgba(63,143,75,0.08)";
        status.textContent = "\u2713";
        status.style.color = "#3f8f4b";
      }, delay));
      delay += stepMs;
    });

    timers.push(setTimeout(function () {
      archiveHeader.style.background = "rgba(28,93,140,0.1)";
      archiveHeader.style.borderColor = "var(--accent)";
      archiveStatus.textContent = "\u2713";
      archiveStatus.style.color = "#3f8f4b";
      for (var j = 0; j < FILES.length; j++) {
        var inner = document.getElementById("zip-inner-" + j);
        var innerStatus = inner.querySelector(".zip-inner-status");
        inner.style.background = "rgba(63,143,75,0.08)";
        innerStatus.textContent = "\u2713";
        innerStatus.style.color = "#3f8f4b";
      }
    }, archiveDoneMs));

    timers.push(setTimeout(function () {
      highlightStats(statsA);
      highlightStats(statsB);
      animating = false;
      simBtn.disabled = false;
      simBtn.style.opacity = "1";
      simBtn.style.cursor = "pointer";
      simBtn.textContent = t.simulateAgain;
    }, delay + 200));
  }

  container.querySelectorAll(".gloss").forEach(function (g) {
    var tooltip = g.getAttribute("title");
    if (tooltip) {
      g.setAttribute("data-tooltip", tooltip);
      g.setAttribute("aria-label", tooltip);
      g.removeAttribute("title");
    }
  });

  simBtn.addEventListener("click", runSimulation);

  if (window.matchMedia("(max-width: 640px)").matches) {
    var cols = document.getElementById("zip-columns");
    cols.style.gridTemplateColumns = "1fr";
  }

  window.addEventListener("resize", function () {
    var cols = document.getElementById("zip-columns");
    if (!cols) { return; }
    cols.style.gridTemplateColumns = window.matchMedia("(max-width: 640px)").matches ? "1fr" : "1fr 1fr";
  });
}
