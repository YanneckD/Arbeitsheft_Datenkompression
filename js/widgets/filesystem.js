function setupFilesystemWidget(source) {
  const t = source || getWidgetLang("filesystem");
  var container = document.getElementById("widget-s4-filesystem");
  if (!container) { return; }

  var CARD_BYTES = 32 * 1024 * 1024 * 1024;
  var GB = 1024 * 1024 * 1024;
  var MB = 1024 * 1024;

  var FILE_COLORS = {
    video: "#c0392b",
    text: "#2980b9",
    spreadsheet: "#27ae60",
    image: "#8e44ad",
    encrypted: "#2c3e50"
  };

  var TYPE_LABELS = t.typeLabels || {};

  function buildLogGroups(totalFiles, groupSize, bytesPerFile) {
    var groups = [];
    var remaining = totalFiles;
    var idx = 1;
    while (remaining > 0) {
      var n = Math.min(groupSize, remaining);
      var start = idx;
      var end = idx + n - 1;
      groups.push({
        name: "log_" + String(start).padStart(4, "0") + ".txt \u2026 log_" + String(end).padStart(4, "0") + ".txt",
        bytes: n * bytesPerFile,
        type: "text",
        count: n
      });
      idx += n;
      remaining -= n;
    }
    return groups;
  }

  var SCENARIOS = [
    {
      id: "s1",
      label: (t.scenarios && t.scenarios.s1) || "Szenario 1",
      layout: "s1",
      files: [
        { name: "interview_keller.mp4", bytes: 8 * GB, type: "video" },
        { name: "ueberwachung_hof.mp4", bytes: 7 * GB, type: "video" },
        { name: "treffen_park.mp4", bytes: 6 * GB, type: "video" },
        { name: "hintereingang.mp4", bytes: 6 * GB, type: "video" },
        { name: "parkplatz_nacht.mp4", bytes: 5.5 * GB, type: "video" },
        { name: "empfang_halle.mp4", bytes: 5 * GB, type: "video" },
        { name: "fluchtweg.mp4", bytes: 4.5 * GB, type: "video" },
        { name: "notiz_01.txt", bytes: 450 * MB, type: "text" },
        { name: "notiz_02.txt", bytes: 420 * MB, type: "text" },
        { name: "notiz_03.txt", bytes: 380 * MB, type: "text" },
        { name: "notiz_04.txt", bytes: 350 * MB, type: "text" },
        { name: "notiz_05.txt", bytes: 320 * MB, type: "text" },
        { name: "notiz_06.txt", bytes: 290 * MB, type: "text" },
        { name: "notiz_07.txt", bytes: 260 * MB, type: "text" },
        { name: "notiz_08.txt", bytes: 230 * MB, type: "text" },
        { name: "kontakte.csv", bytes: 750 * MB, type: "text" },
        { name: "zeitplan.csv", bytes: 680 * MB, type: "text" },
        { name: "abrechnung.csv", bytes: 620 * MB, type: "text" },
        { name: "protokoll.csv", bytes: 580 * MB, type: "text" }
      ]
    },
    {
      id: "s2",
      label: (t.scenarios && t.scenarios.s2) || "Szenario 2",
      layout: "s2",
      files: (function () {
        var files = buildLogGroups(4200, 100, 8 * MB);
        files.push(
          { name: "beweis_foto_01.raw", bytes: 2.4 * GB, type: "image" },
          { name: "beweis_foto_02.raw", bytes: 2.1 * GB, type: "image" },
          { name: "beweis_foto_03.raw", bytes: 1.9 * GB, type: "image" },
          { name: "beweis_foto_04.raw", bytes: 1.6 * GB, type: "image" },
          { name: "bericht_entwurf.docx", bytes: 220 * MB, type: "text" },
          { name: "zusammenfassung.docx", bytes: 195 * MB, type: "text" },
          { name: "protokoll_sitzung.docx", bytes: 180 * MB, type: "text" },
          { name: "notizen_redaktion.docx", bytes: 165 * MB, type: "text" },
          { name: "anhang_office.docx", bytes: 150 * MB, type: "text" },
          { name: "kontakte.csv", bytes: 140 * MB, type: "text" },
          { name: "zeitplan.csv", bytes: 125 * MB, type: "text" },
          { name: "abrechnung.csv", bytes: 110 * MB, type: "text" },
          { name: "auswertung.csv", bytes: 95 * MB, type: "text" }
        );
        return files;
      })()
    },
    {
      id: "s3",
      label: (t.scenarios && t.scenarios.s3) || "Szenario 3",
      layout: "s3",
      files: [
        { name: "bericht_1.txt", bytes: 1.2 * GB, type: "text" },
        { name: "bericht_2.txt", bytes: 1.1 * GB, type: "text" },
        { name: "protokoll.txt", bytes: 1 * GB, type: "text" },
        { name: "notizen.txt", bytes: 950 * MB, type: "text" },
        { name: "anhang.txt", bytes: 900 * MB, type: "text" },
        { name: "kontakte.csv", bytes: 850 * MB, type: "text" },
        { name: "zusammenfassung.txt", bytes: 800 * MB, type: "text" },
        { name: "anmerkungen.txt", bytes: 750 * MB, type: "text" },
        { name: "bericht_redaktion.docx", bytes: 480 * MB, type: "text" },
        { name: "notizen_office.docx", bytes: 420 * MB, type: "text" },
        { name: "protokoll_final.docx", bytes: 390 * MB, type: "text" },
        { name: "anhang_word.docx", bytes: 360 * MB, type: "text" },
        { name: "planung.csv", bytes: 340 * MB, type: "text" },
        { name: "kosten.csv", bytes: 310 * MB, type: "text" },
        { name: "auswertung.csv", bytes: 280 * MB, type: "text" },
        { name: "beweis_01.png", bytes: 620 * MB, type: "image" },
        { name: "beweis_02.png", bytes: 580 * MB, type: "image" },
        { name: "beweis_03.png", bytes: 540 * MB, type: "image" },
        { name: "scan.psd", bytes: 1.8 * GB, type: "image" },
        { name: "montage.psd", bytes: 1.5 * GB, type: "image" },
        { name: "gespraech_01.mp4", bytes: 3.2 * GB, type: "video" },
        { name: "gespraech_02.mp4", bytes: 2.8 * GB, type: "video" },
        { name: "aufnahme_hof.mp4", bytes: 2.5 * GB, type: "video" },
        { name: "nachtaufnahme.mp4", bytes: 2.2 * GB, type: "video" },
        { name: "dokumente.enc.7z", bytes: 4.2 * GB, type: "encrypted" },
        { name: "datenbank.enc.zip", bytes: 3.6 * GB, type: "encrypted" },
        { name: "schluessel.enc.rar", bytes: 3.1 * GB, type: "encrypted" }
      ]
    }
  ];

  function formatSize(bytes) {
    if (bytes >= 1048576) {
      return (bytes / 1048576).toLocaleString("de-DE", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
      }) + " MB";
    }
    if (bytes >= 1024) {
      return (bytes / 1024).toLocaleString("de-DE", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
      }) + " KB";
    }
    return bytes.toLocaleString("de-DE") + " Bytes";
  }

  function formatGb(bytes) {
    return (bytes / (1024 * 1024 * 1024)).toLocaleString("de-DE", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    }) + " GB";
  }

  function sumBytes(files) {
    return files.reduce(function (s, f) { return s + f.bytes; }, 0);
  }

  function countFiles(files) {
    return files.reduce(function (n, f) { return n + (f.count || 1); }, 0);
  }

  function pct(part, total) {
    return total > 0 ? (part / total) * 100 : 0;
  }

  function filterTypes(files, types) {
    return files.filter(function (f) { return types.indexOf(f.type) >= 0; });
  }

  function filterType(files, type) {
    return files.filter(function (f) { return f.type === type; });
  }

  function segmentStyle(color) {
    return (
      "background:" + color + ";" +
      "border:1px solid rgba(0,0,0,0.12);" +
      "box-sizing:border-box;cursor:pointer;" +
      "min-width:2px;min-height:2px;overflow:hidden;" +
      "transition:filter 120ms ease"
    );
  }

  function renderLeaf(file, flexStyle, extraStyle) {
    var countAttr = file.count ? ' data-count="' + file.count + '"' : "";
    return (
      '<div class="fs-segment" tabindex="0"' +
        ' data-name="' + file.name + '"' +
        ' data-type="' + file.type + '"' +
        ' data-bytes="' + file.bytes + '"' +
        countAttr +
        ' style="' + segmentStyle(FILE_COLORS[file.type]) + flexStyle + (extraStyle || "") + '"' +
        ' aria-label="' + file.name + ", " + TYPE_LABELS[file.type] + ", " + formatSize(file.bytes) + '"' +
      '></div>'
    );
  }

  function renderFlexGroup(files, direction, outerFlex) {
    if (!files.length) { return ""; }
    var total = sumBytes(files);
    var flexDir = direction === "col" ? "column" : "row";
    var inner = files.map(function (f) {
      var share = pct(f.bytes, total);
      return renderLeaf(f, "flex:0 0 " + share.toFixed(4) + "%;width:" + (direction === "col" ? "100%" : share.toFixed(4) + "%") + ";height:" + (direction === "col" ? share.toFixed(4) + "%" : "100%") + ";");
    }).join("");
    return (
      '<div style="display:flex;flex-direction:' + flexDir + ";" + outerFlex + '">' +
        inner +
      '</div>'
    );
  }

  function renderScenario1(files) {
    var videos = filterType(files, "video");
    var texts = filterType(files, "text");
    var sheets = filterType(files, "spreadsheet");
    var total = sumBytes(files);
    var restBytes = sumBytes(texts) + sumBytes(sheets);
    var videoPct = pct(sumBytes(videos), total).toFixed(4);
    var textInRestPct = restBytes > 0 ? pct(sumBytes(texts), restBytes).toFixed(4) : "0";
    var sheetInRestPct = restBytes > 0 ? pct(sumBytes(sheets), restBytes).toFixed(4) : "0";
    var restPct = (100 - parseFloat(videoPct)).toFixed(4);

    return (
      '<div style="display:flex;flex-direction:row;width:100%;height:100%">' +
        renderFlexGroup(videos, "col", "flex:0 0 " + videoPct + "%;height:100%") +
        '<div style="display:flex;flex-direction:column;flex:0 0 ' + restPct + '%;height:100%">' +
          renderFlexGroup(texts, "col", "flex:0 0 " + textInRestPct + "%;width:100%") +
          renderFlexGroup(sheets, "col", "flex:0 0 " + sheetInRestPct + "%;width:100%") +
        '</div>' +
      '</div>'
    );
  }

  function renderScenario2(files) {
    var texts = filterType(files, "text");
    var others = files.filter(function (f) { return f.type !== "text"; });
    var total = sumBytes(files);
    var textPct = pct(sumBytes(texts), total).toFixed(4);
    var otherPct = pct(sumBytes(others), total).toFixed(4);
    var cols = 7;
    var rows = Math.ceil(texts.length / cols);
    var gridCells = texts.map(function (f) {
      return renderLeaf(f, "", "width:100%;height:100%;min-width:0;min-height:0");
    }).join("");

    return (
      '<div style="display:flex;flex-direction:row;width:100%;height:100%">' +
        '<div style="flex:0 0 ' + textPct + '%;height:100%;display:grid;' +
          "grid-template-columns:repeat(" + cols + ",1fr);" +
          "grid-template-rows:repeat(" + rows + ",1fr);" +
          'gap:1px;padding:1px;background:rgba(0,0,0,0.08)">' +
          gridCells +
        '</div>' +
        renderFlexGroup(others, "col", "flex:0 0 " + otherPct + "%;height:100%") +
      '</div>'
    );
  }

  function renderScenario3(files) {
    var docs = filterTypes(files, ["text", "spreadsheet"]);
    var media = filterTypes(files, ["image", "video"]);
    var encrypted = filterType(files, "encrypted");
    var total = sumBytes(files);
    var docsPct = pct(sumBytes(docs), total).toFixed(4);
    var mediaPct = pct(sumBytes(media), total).toFixed(4);
    var encPct = pct(sumBytes(encrypted), total).toFixed(4);

    return (
      '<div style="display:flex;flex-direction:row;width:100%;height:100%">' +
        renderFlexGroup(docs, "col", "flex:0 0 " + docsPct + "%;height:100%") +
        renderFlexGroup(media, "col", "flex:0 0 " + mediaPct + "%;height:100%") +
        renderFlexGroup(encrypted, "col", "flex:0 0 " + encPct + "%;height:100%") +
      '</div>'
    );
  }

  function renderTreemap(scenario) {
    if (scenario.layout === "s1") { return renderScenario1(scenario.files); }
    if (scenario.layout === "s2") { return renderScenario2(scenario.files); }
    return renderScenario3(scenario.files);
  }

  function legendHtml() {
    var types = ["video", "text", "image", "encrypted"];
    return types.map(function (t) {
      return (
        '<div style="display:flex;align-items:center;gap:6px;font-size:12px;font-family:sans-serif">' +
          '<span style="width:14px;height:14px;border-radius:2px;background:' + FILE_COLORS[t] + ';border:1px solid rgba(0,0,0,0.12);flex-shrink:0"></span>' +
          '<span>' + TYPE_LABELS[t] + '</span>' +
        '</div>'
      );
    }).join("");
  }

  container.classList.remove("widget-placeholder");
  container.style.cssText = "border:1px solid var(--border);background:#fffdf8;padding:0.8rem 1rem 1rem;border-radius:3px;margin:0.75rem 0";

  var tabHtml = SCENARIOS.map(function (s, i) {
    return (
      '<button type="button" class="fs-tab" data-scenario="' + s.id + '"' +
        ' aria-selected="' + (i === 0 ? "true" : "false") + '"' +
        ' style="' +
          "border:1px solid var(--border);background:" + (i === 0 ? "var(--accent)" : "#fff") + ";" +
          "color:" + (i === 0 ? "#fff" : "var(--ink)") + ";" +
          "padding:0.4rem 0.75rem;border-radius:3px;cursor:pointer;" +
          "font-family:'Source Sans 3','Gill Sans',sans-serif;font-size:13px;font-weight:600;" +
          "flex:1 1 0;min-width:0" +
        '">' + s.label + '</button>'
    );
  }).join("");

  container.innerHTML =
    '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px">' +
      tabHtml +
    '</div>' +
    '<div style="display:flex;justify-content:space-between;align-items:baseline;gap:12px;margin-bottom:8px;flex-wrap:wrap">' +
      '<div style="font-size:12px;color:var(--muted);font-family:sans-serif">' +
        t.memoryCard + ' <strong style="color:var(--ink)">' + formatGb(CARD_BYTES) + '</strong>' +
      '</div>' +
      '<div id="fs-stats" style="font-size:12px;color:var(--muted);font-family:sans-serif;text-align:right"></div>' +
    '</div>' +
    '<div id="fs-treemap" style="position:relative;width:100%;height:min(360px,50vh);border:1px solid var(--border);border-radius:4px;overflow:hidden;background:#fff"></div>' +
    '<div style="display:flex;flex-wrap:wrap;gap:14px 20px;margin-top:12px;padding-top:10px;border-top:1px solid var(--border)">' +
      legendHtml() +
    '</div>' +
    '<div style="margin-top:12px;padding:10px 12px;background:var(--bg);border:1px solid var(--border);border-radius:3px;font-size:13px;color:var(--muted);font-style:italic;line-height:1.6">' +
      t.hint +
    '</div>' +
    '<div id="fs-tooltip" role="tooltip" hidden style="' +
      "position:fixed;z-index:9999;pointer-events:none;" +
      "background:#122;color:#fff;padding:8px 10px;border-radius:4px;" +
      "font-size:12px;line-height:1.5;font-family:sans-serif;" +
      "box-shadow:0 4px 12px rgba(0,0,0,0.2);max-width:min(320px,90vw)" +
    '"></div>';

  var treemapEl = document.getElementById("fs-treemap");
  var statsEl = document.getElementById("fs-stats");
  var tooltip = document.getElementById("fs-tooltip");
  var activeId = SCENARIOS[0].id;

  function getScenario(id) {
    for (var i = 0; i < SCENARIOS.length; i++) {
      if (SCENARIOS[i].id === id) { return SCENARIOS[i]; }
    }
    return SCENARIOS[0];
  }

  function updateStats(scenario) {
    var used = sumBytes(scenario.files);
    var totalFiles = countFiles(scenario.files);
    var diff = used - CARD_BYTES;
    var diffHtml;
    if (diff > 0) {
      diffHtml = '<span style="color:#c0392b">' + formatLang(t.statsOver, { size: formatGb(diff) }) + '</span>';
    } else if (diff < 0) {
      diffHtml = '<span style="color:#3f8f4b">' + formatLang(t.statsFree, { size: formatGb(-diff) }) + '</span>';
    } else {
      diffHtml = '<span style="color:var(--ink)">' + t.statsFull + '</span>';
    }
    statsEl.innerHTML =
      t.statsUsed + ' <strong style="color:var(--ink)">' + formatGb(used) + '</strong> (' +
      totalFiles.toLocaleString("de-DE") + ' ' + t.statsFiles + ') \u00b7 ' + diffHtml;
  }

  function setActiveTab(id) {
    activeId = id;
    container.querySelectorAll(".fs-tab").forEach(function (btn) {
      var on = btn.getAttribute("data-scenario") === id;
      btn.setAttribute("aria-selected", on ? "true" : "false");
      btn.style.background = on ? "var(--accent)" : "#fff";
      btn.style.color = on ? "#fff" : "var(--ink)";
    });
    var scenario = getScenario(id);
    updateStats(scenario);
    treemapEl.innerHTML = renderTreemap(scenario);
    bindSegments();
  }

  function positionTooltip(e) {
    tooltip.hidden = false;
    var offset = 14;
    var x = e.clientX + offset;
    var y = e.clientY + offset;
    tooltip.style.left = x + "px";
    tooltip.style.top = y + "px";

    var rect = tooltip.getBoundingClientRect();
    if (rect.right > window.innerWidth - 8) {
      x = e.clientX - rect.width - offset;
      tooltip.style.left = Math.max(8, x) + "px";
    }
    if (rect.bottom > window.innerHeight - 8) {
      y = e.clientY - rect.height - offset;
      tooltip.style.top = Math.max(8, y) + "px";
    }
    rect = tooltip.getBoundingClientRect();
    if (rect.left < 8) {
      tooltip.style.left = "8px";
    }
    if (rect.top < 8) {
      tooltip.style.top = "8px";
    }
  }

  function showTooltip(e, seg) {
    var name = seg.getAttribute("data-name");
    var type = seg.getAttribute("data-type");
    var bytes = parseInt(seg.getAttribute("data-bytes"), 10);
    var count = seg.getAttribute("data-count");
    var html =
      "<strong style=\"display:block;margin-bottom:2px;font-family:monospace;font-size:11px\">" + name + "</strong>" +
      TYPE_LABELS[type];
    if (count) {
      html += "<br>" + formatLang(t.tooltipFiles, { count: parseInt(count, 10).toLocaleString("de-DE") });
    }
    html += "<br>" + formatSize(bytes);
    tooltip.innerHTML = html;
    seg.style.filter = "brightness(1.12)";
    positionTooltip(e);
  }

  function hideTooltip(seg) {
    tooltip.hidden = true;
    seg.style.filter = "";
  }

  function bindSegments() {
    container.querySelectorAll(".fs-segment").forEach(function (seg) {
      seg.addEventListener("mouseenter", function (e) { showTooltip(e, seg); });
      seg.addEventListener("mousemove", function (e) { positionTooltip(e); });
      seg.addEventListener("mouseleave", function () { hideTooltip(seg); });
      seg.addEventListener("focus", function () {
        showTooltip({ clientX: window.innerWidth / 2, clientY: 120 }, seg);
      });
      seg.addEventListener("blur", function () { hideTooltip(seg); });
    });
  }

  container.querySelectorAll(".fs-tab").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setActiveTab(btn.getAttribute("data-scenario"));
    });
  });

  setActiveTab(activeId);
}
