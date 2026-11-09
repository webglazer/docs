// Dark masthead for every docs page, built the way webglazer.com/faq builds it
// (landing-page src/site-pages/faq-page.tsx): a full-width #0a0a0a band with the
// bracket eyebrow, the title and the lede, and a white panel with 2.5rem top
// corners riding 40px over it. Mintlify renders the page header inside the
// content column, next to the sidebar, so CSS alone cannot put a full-width
// band above the sidebar. This script copies the header text into a band at the
// top of <body> and publishes its height as --wg-hero-h; style.css pushes the
// layout down by that height and hides the original header text visually (the
// real <h1 id="page-title"> stays in the DOM for search engines and readers).
(function () {
  if (typeof document === "undefined" || window.__wgHero) return;
  window.__wgHero = true;

  var hero, eyebrowEl, titleEl, ledeEl, frame;

  function build() {
    hero = document.createElement("div");
    hero.id = "wg-hero";
    hero.setAttribute("aria-hidden", "true");
    var inner = document.createElement("div");
    inner.className = "wg-hero-inner";
    eyebrowEl = document.createElement("p");
    eyebrowEl.className = "wg-eyebrow";
    titleEl = document.createElement("p");
    titleEl.className = "wg-hero-title";
    ledeEl = document.createElement("p");
    ledeEl.className = "wg-hero-lede";
    inner.appendChild(eyebrowEl);
    inner.appendChild(titleEl);
    inner.appendChild(ledeEl);
    hero.appendChild(inner);
    document.body.appendChild(hero);
  }

  function setText(el, text) {
    if (el.textContent !== text) el.textContent = text;
    el.hidden = !text;
  }

  function sync() {
    frame = 0;
    var title = document.getElementById("page-title");
    if (!title) {
      document.documentElement.removeAttribute("data-wg-hero");
      if (hero) hero.hidden = true;
      return;
    }
    if (!hero || !hero.isConnected) build();
    hero.hidden = false;
    var header = document.getElementById("header");
    var eyebrow = header && header.querySelector(".eyebrow");
    var lede = header && header.querySelector(".prose");
    setText(eyebrowEl, eyebrow ? eyebrow.textContent.trim().toLowerCase() : "");
    setText(titleEl, title.textContent.trim());
    setText(ledeEl, lede ? lede.textContent.trim() : "");
    var h = hero.offsetHeight + "px";
    var root = document.documentElement;
    if (root.style.getPropertyValue("--wg-hero-h") !== h) root.style.setProperty("--wg-hero-h", h);
    root.setAttribute("data-wg-hero", "");
  }

  function schedule() {
    if (!frame) frame = requestAnimationFrame(sync);
  }

  function start() {
    sync();
    new MutationObserver(schedule).observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });
    window.addEventListener("resize", schedule);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
