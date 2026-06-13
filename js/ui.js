function setupHiddenFollowups() {
  document.querySelectorAll("[data-reveals]").forEach(function(textarea) {
    var targetId = textarea.dataset.reveals;
    var target = document.getElementById(targetId);
    if (!target) { return; }
    textarea.addEventListener("input", function() {
      if (textarea.value.trim().length > 0) {
        target.removeAttribute("hidden");
      }
    });
  });
}

function setupGlossTooltips() {
  document.querySelectorAll(".gloss").forEach(function(el) {
    el.addEventListener("mouseenter", function() {
      var after = window.getComputedStyle(this, "::after");
      // force layout so ::after is rendered
      var origDisplay = this.style.display;
      this.classList.remove("gloss-tt-bottom", "gloss-tt-left", "gloss-tt-right");

      var rect = this.getBoundingClientRect();
      var tooltipWidth = Math.min(420, window.innerWidth * 0.85);

      // Check horizontal overflow
      var centerLeft = rect.left + rect.width / 2 - tooltipWidth / 2;
      if (centerLeft < 8) {
        this.classList.add("gloss-tt-left");
      } else if (centerLeft + tooltipWidth > window.innerWidth - 8) {
        this.classList.add("gloss-tt-right");
      }

      // Check vertical overflow (tooltip appears above by default)
      if (rect.top < 100) {
        this.classList.add("gloss-tt-bottom");
      }
    });
  });
}

function setupHelpToggles(source) {
  document.querySelectorAll(".help-toggle").forEach(function(toggle) {
    var targetId = toggle.getAttribute("aria-controls");
    if (!targetId) { return; }
    var box = document.getElementById(targetId);
    if (!box) { return; }
    toggle.addEventListener("click", function() {
      var isHidden = box.hasAttribute("hidden");
      if (isHidden) {
        box.removeAttribute("hidden");
        toggle.setAttribute("aria-expanded", "true");
        var hideLabel = getLangValue(source, "common.hideHint");
        if (hideLabel) { toggle.textContent = hideLabel; }
      } else {
        box.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", "false");
        var showLabel = getLangValue(source, "common.showHint");
        if (showLabel) { toggle.textContent = showLabel; }
      }
    });
  });
}
