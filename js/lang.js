function getWidgetLang(widget) {
  const source = window.WIDGETS_DE || {};
  return source[widget] || {};
}

function formatLang(template, vars) {
  if (!template || typeof template !== "string") {
    return "";
  }
  return Object.keys(vars || {}).reduce((str, key) => {
    return str.replace(new RegExp("\\{" + key + "\\}", "g"), String(vars[key]));
  }, template);
}

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

  document.querySelectorAll(".gloss").forEach((g) => {
    if (g instanceof Element) {
      const t = g.getAttribute("title");
      if (t) {
        g.setAttribute("data-tooltip", t);
        g.setAttribute("aria-label", t);
        g.removeAttribute("title");
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
