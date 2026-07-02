window.WidgetChallengeRegistry = {};

function createChallengeBanner(container, options) {
  const opts = options || {};
  const successText = opts.successText || getLangValue(window.LANG_DE, "common.challengeSuccess") || "";
  const el = document.createElement("div");
  el.className = "challenge-banner";
  el.setAttribute("role", "status");
  el.setAttribute("aria-live", "polite");
  el.hidden = true;

  if (container instanceof HTMLElement) {
    container.insertBefore(el, container.firstChild);
  }

  return {
    element: el,
    check: function(metrics) {
      const results = (opts.challenges || []).map(function(ch) {
        return { challenge: ch, passed: !!ch.test(metrics) };
      });
      const passed = results.filter(function(r) { return r.passed; });
      const failed = results.filter(function(r) { return !r.passed; });

      if (opts.mode === "all" && passed.length === results.length && results.length > 0) {
        el.hidden = false;
        el.className = "challenge-banner challenge-banner--success";
        el.textContent = successText;
        return true;
      }
      if (opts.mode === "any" && passed.length > 0) {
        el.hidden = false;
        el.className = "challenge-banner challenge-banner--success";
        el.textContent = passed[0].challenge.successText || successText;
        return true;
      }
      if (failed.length > 0 && opts.showPending !== false) {
        el.hidden = false;
        el.className = "challenge-banner challenge-banner--pending";
        el.textContent = failed[0].challenge.prompt || opts.pendingText || "";
        return false;
      }
      el.hidden = true;
      return false;
    },
    reset: function() {
      el.hidden = true;
      el.textContent = "";
      el.className = "challenge-banner";
    }
  };
}

function createChallengePanel(container, options) {
  const opts = options || {};
  const challenges = opts.challenges || [];
  const title = opts.title || getLangValue(window.LANG_DE, "common.challengeTitle") || "";
  const resetLabel = opts.resetLabel || getLangValue(window.LANG_DE, "common.challengeReset") || "";

  container.className = (container.className + " challenge-sidebar-inner").trim();
  container.innerHTML =
    '<p class="challenge-sidebar-title">' + escChallengeHtml(title) + '</p>' +
    '<ul class="challenge-sidebar-list"></ul>' +
    '<button type="button" class="challenge-sidebar-reset">' + escChallengeHtml(resetLabel) + '</button>';

  const listEl = container.querySelector(".challenge-sidebar-list");
  const resetBtn = container.querySelector(".challenge-sidebar-reset");
  const itemEls = [];

  challenges.forEach(function(ch) {
    const li = document.createElement("li");
    li.className = "challenge-sidebar-item";
    li.innerHTML =
      '<span class="challenge-sidebar-status" aria-hidden="true">○</span>' +
      '<span class="challenge-sidebar-text">' + escChallengeHtml(ch.prompt || "") + '</span>';
    listEl.appendChild(li);
    itemEls.push({ el: li, status: li.querySelector(".challenge-sidebar-status"), challenge: ch, completed: false });
  });

  function escChallengeHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  const stickyComplete = !!opts.stickyComplete;

  const api = {
    check: function(metrics) {
      let allPassed = true;
      itemEls.forEach(function(item) {
        const passed = !!item.challenge.test(metrics);
        if (stickyComplete && passed) {
          item.completed = true;
        }
        const showPassed = stickyComplete ? item.completed : passed;
        item.el.classList.toggle("challenge-sidebar-item--done", showPassed);
        item.el.classList.toggle("challenge-sidebar-item--failed", !showPassed);
        item.status.textContent = showPassed ? "✓" : "✗";
        if (!showPassed) { allPassed = false; }
      });
      return allPassed;
    },
    reset: function() {
      itemEls.forEach(function(item) {
        item.completed = false;
        item.el.classList.remove("challenge-sidebar-item--done", "challenge-sidebar-item--failed");
        item.status.textContent = "○";
      });
      if (typeof opts.onReset === "function") {
        opts.onReset();
      }
    }
  };

  resetBtn.addEventListener("click", function() {
    api.reset();
  });

  return api;
}

function registerWidgetChallenges(widgetId, config) {
  if (!widgetId || !config) { return; }
  window.WidgetChallengeRegistry[widgetId] = config;
}

function refreshWidgetChallenges(widgetId) {
  const entry = window.WidgetChallengeRegistry[widgetId];
  if (!entry || !entry.panel) { return; }
  const metrics = entry.getMetrics ? entry.getMetrics() : {};
  entry.panel.check(metrics);
}
