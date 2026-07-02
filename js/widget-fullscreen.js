function setShellPreviewMode(body, enabled) {
  if (!body) { return; }
  if (enabled) {
    body.classList.add("widget-shell-body--preview");
    body.setAttribute("inert", "");
  } else {
    body.classList.remove("widget-shell-body--preview");
    body.removeAttribute("inert");
  }
}

function setupWidgetFullscreen(langData) {
  const openLabel = getLangValue(langData, "common.openSimulation") || "";
  const closeLabel = getLangValue(langData, "common.closeSimulation") || "";
  const challengeTitle = getLangValue(langData, "common.challengeTitle") || "";
  const challengeReset = getLangValue(langData, "common.challengeReset") || "";

  document.querySelectorAll(".widget-shell").forEach(function(shell) {
    if (shell.hasAttribute("data-no-fullscreen")) { return; }

    const body = shell.querySelector(".widget-shell-body");
    if (!body) { return; }

    setShellPreviewMode(body, true);

    let toolbar = shell.querySelector(".widget-shell-toolbar");
    if (!toolbar) {
      toolbar = document.createElement("div");
      toolbar.className = "widget-shell-toolbar";
      shell.insertBefore(toolbar, body);
    }

    let openBtn = toolbar.querySelector(".widget-fullscreen-open");
    if (!openBtn) {
      openBtn = document.createElement("button");
      openBtn.type = "button";
      openBtn.className = "widget-fullscreen-open";
      openBtn.textContent = openLabel;
      toolbar.appendChild(openBtn);
    }

    function open() {
      openWidgetOverlay(shell, closeLabel, challengeTitle, challengeReset);
    }

    openBtn.addEventListener("click", function(e) {
      e.stopPropagation();
      open();
    });
    shell.addEventListener("click", function(e) {
      if (e.target.closest(".widget-shell-toolbar")) { return; }
      open();
    });
  });
}

function findWidgetIdInShell(body) {
  if (!body) { return null; }
  const el = body.querySelector("[id^='widget-']");
  return el ? el.id : null;
}

function openWidgetOverlay(shell, closeLabel, challengeTitle, challengeReset) {
  if (document.getElementById("widget-fullscreen-overlay")) { return; }

  const body = shell.querySelector(".widget-shell-body");
  if (!body) { return; }

  setShellPreviewMode(body, false);

  const widgetId = findWidgetIdInShell(body);
  const challengeEntry = widgetId ? window.WidgetChallengeRegistry[widgetId] : null;

  const overlay = document.createElement("div");
  overlay.id = "widget-fullscreen-overlay";
  overlay.className = "widget-fullscreen-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");

  const panel = document.createElement("div");
  panel.className = "widget-fullscreen-panel" + (challengeEntry ? " widget-fullscreen-panel--with-sidebar" : "");

  const header = document.createElement("div");
  header.className = "widget-fullscreen-header";

  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "widget-fullscreen-close";
  closeBtn.textContent = closeLabel;
  header.appendChild(closeBtn);

  const bodyRow = document.createElement("div");
  bodyRow.className = "widget-fullscreen-body-row";

  let sidebarPanel = null;
  if (challengeEntry && challengeEntry.challenges) {
    const sidebar = document.createElement("aside");
    sidebar.className = "challenge-sidebar";
    sidebar.setAttribute("aria-label", challengeTitle);
    bodyRow.appendChild(sidebar);
    sidebarPanel = createChallengePanel(sidebar, {
      title: challengeTitle,
      resetLabel: challengeReset,
      challenges: challengeEntry.challenges,
      onReset: challengeEntry.onReset,
      stickyComplete: challengeEntry.stickyComplete
    });
    challengeEntry.panel = sidebarPanel;
  }

  const content = document.createElement("div");
  content.className = "widget-fullscreen-content";
  bodyRow.appendChild(content);

  panel.appendChild(header);
  panel.appendChild(bodyRow);
  overlay.appendChild(panel);
  document.body.appendChild(overlay);

  const placeholder = document.createElement("div");
  placeholder.className = "widget-shell-body widget-shell-body--overlay";
  content.appendChild(placeholder);

  while (body.firstChild) {
    placeholder.appendChild(body.firstChild);
  }

  shell._fsPlaceholder = placeholder;
  shell._fsOriginalBody = body;
  shell._fsWidgetId = widgetId;

  document.body.classList.add("widget-fullscreen-active");

  function syncChallenges() {
    if (!challengeEntry || !sidebarPanel) { return; }
    const metrics = challengeEntry.getMetrics ? challengeEntry.getMetrics() : {};
    sidebarPanel.check(metrics);
  }

  if (challengeEntry && sidebarPanel) {
    syncChallenges();
    shell._fsChallengeInterval = window.setInterval(syncChallenges, 400);
  }

  function close() {
    if (shell._fsChallengeInterval) {
      window.clearInterval(shell._fsChallengeInterval);
      shell._fsChallengeInterval = null;
    }
    if (challengeEntry) {
      challengeEntry.panel = null;
    }
    const ph = shell._fsPlaceholder;
    const orig = shell._fsOriginalBody;
    if (ph && orig) {
      while (ph.firstChild) {
        orig.appendChild(ph.firstChild);
      }
      setShellPreviewMode(orig, true);
    }
    overlay.remove();
    document.body.classList.remove("widget-fullscreen-active");
    document.removeEventListener("keydown", onKey);
    shell._fsPlaceholder = null;
    shell._fsOriginalBody = null;
    shell._fsWidgetId = null;
  }

  function onKey(e) {
    if (e.key === "Escape") { close(); }
  }

  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", function(e) {
    if (e.target === overlay) { close(); }
  });
  document.addEventListener("keydown", onKey);
  closeBtn.focus();
}
