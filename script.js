const langData = window.LANG_DE || {};

function getLangValue(source, path) {
  if (!source || !path) {
    return undefined;
  }

  return path.split(".").reduce((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return acc[key];
    }
    return undefined;
  }, source);
}

function applyLang(source) {
  if (!source || typeof source !== "object") {
    return;
  }

  if (source.meta && source.meta.lang) {
    document.documentElement.lang = source.meta.lang;
  }

  if (source.meta && source.meta.title) {
    document.title = source.meta.title;
  }

  document.querySelectorAll("[data-lang]").forEach((element) => {
    const value = getLangValue(source, element.dataset.lang);
    if (typeof value === "string") {
      element.innerHTML = value;
    }
  });

  document.querySelectorAll('.gloss').forEach((g) => {
    if (g instanceof Element) {
      const t = g.getAttribute('title');
      if (t) {
        g.setAttribute('data-tooltip', t);
        g.setAttribute('aria-label', t);
        g.removeAttribute('title');
      }
    }
  });

  document.querySelectorAll("[data-lang-attr]").forEach((element) => {
    const mappings = element.dataset.langAttr
      .split(";")
      .map((pair) => pair.trim())
      .filter(Boolean);

    mappings.forEach((pair) => {
      const [attr, key] = pair.split(":").map((part) => part.trim());
      if (!attr || !key) {
        return;
      }
      const value = getLangValue(source, key);
      if (typeof value === "string") {
        element.setAttribute(attr, value);
      }
    });
  });
}

const navToggle = document.getElementById("navToggle");
const sideNav = document.getElementById("sideNav");

function setupNavigation() {
  if (!navToggle || !sideNav) {
    return;
  }

  navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });

  sideNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement && window.innerWidth < 960) {
      document.body.classList.remove("nav-open");
    }
  });
}

function setupIntroCalculator(source) {
  const bitrateInput = document.getElementById("bitrateInput");
  const durationInput = document.getElementById("durationInput");
  const calcButton = document.getElementById("introCalcBtn");
  const result = document.getElementById("introCalcResult");
  const barFill = document.getElementById("sdCardBarFill");
  const barText = document.getElementById("sdCardBarText");

  if (!(bitrateInput instanceof HTMLInputElement) ||
      !(durationInput instanceof HTMLInputElement) ||
      !(calcButton instanceof HTMLButtonElement) ||
      !(result instanceof HTMLElement) ||
      !(barFill instanceof HTMLElement) ||
      !(barText instanceof HTMLElement)) {
    return;
  }

  const sizeTemplate = getLangValue(source, "intro.resultTemplate") || "";
  const invalidText = getLangValue(source, "intro.resultInvalid") || "";
  const cardSizeMb = 2 * 1024 * 8;

  const calculate = () => {
    const bitrate = Number.parseFloat(bitrateInput.value);
    const minutes = Number.parseFloat(durationInput.value);

    if (!Number.isFinite(bitrate) || !Number.isFinite(minutes) || bitrate <= 0 || minutes <= 0) {
      result.textContent = invalidText;
      barFill.style.width = "0%";
      barFill.classList.remove("sd-card-bar-fill--overflow");
      barText.textContent = "";
      return;
    }

    const sizeMb = bitrate * minutes * 60;
    const sizeMB = sizeMb / 8;
    const percent = (sizeMb / cardSizeMb) * 100;
    const videoCount = Math.floor(cardSizeMb / sizeMb);

    const line1 = sizeTemplate
      .replace("{sizeMb}", sizeMb.toFixed(1))
      .replace("{sizeMB}", sizeMB.toFixed(1))
      .replace("{percent}", percent.toFixed(1))
      .replace("{videoCount}", videoCount.toString());
    const clampedPercent = Math.min(percent, 100);

    result.textContent = line1;
    barFill.style.width = `${clampedPercent}%`;
    barFill.classList.toggle("sd-card-bar-fill--overflow", sizeMb > cardSizeMb);
    barText.textContent = `Füllstand: ${percent.toFixed(1)}%`;
  };

  calcButton.addEventListener("click", calculate);
}

function setupAssumptionHelp() {
  const toggle = document.getElementById("assumptionHelpToggle");
  const box = document.getElementById("assumptionHelpBox");

  if (!(toggle instanceof HTMLButtonElement) || !(box instanceof HTMLElement)) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isHidden = box.hasAttribute("hidden");
    if (isHidden) {
      box.removeAttribute("hidden");
      toggle.setAttribute("aria-expanded", "true");
    } else {
      box.setAttribute("hidden", "");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

applyLang(langData);
setupNavigation();
setupIntroCalculator(langData);
setupAssumptionHelp();
