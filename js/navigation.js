const navToggle = document.getElementById("navToggle");
const sideNav = document.getElementById("sideNav");
const SECTION_IDS = ["intro", "lossless", "lossy", "filetypes", "final"];

function showSection(sectionId) {
  const targetId = SECTION_IDS.includes(sectionId) ? sectionId : "intro";

  document.querySelectorAll(".panel").forEach((panel) => {
    const isActive = panel.id === targetId;
    panel.classList.toggle("is-active", isActive);
    panel.toggleAttribute("hidden", !isActive);
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    const linkId = link.getAttribute("href")?.slice(1) || "";
    const isActive = linkId === targetId;
    link.classList.toggle("is-active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  if (location.hash !== `#${targetId}`) {
    history.replaceState(null, "", `#${targetId}`);
  }

  window.scrollTo(0, 0);
}

function setupSectionViews() {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const sectionId = link.getAttribute("href")?.slice(1);
      if (!sectionId) {
        return;
      }
      showSection(sectionId);
      if (window.innerWidth < 960) {
        document.body.classList.remove("nav-open");
      }
    });
  });

  window.addEventListener("hashchange", () => {
    showSection(location.hash.slice(1));
  });

  showSection(location.hash.slice(1) || "intro");
}

function setupNavigation() {
  if (!navToggle || !sideNav) {
    return;
  }

  navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
  });
}
