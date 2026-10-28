(function () {
  "use strict";

  var root = document.querySelector("[data-carousel]");
  if (!root) return;

  var viewport = root.querySelector("[data-carousel-viewport]");
  var track = root.querySelector("[data-carousel-track]");
  var slides = Array.from(root.querySelectorAll("[data-slide]"));
  var dots = Array.from(root.querySelectorAll("[data-carousel-dot]"));
  var title = root.querySelector("[data-carousel-title]");
  var note = root.querySelector("[data-carousel-note-text]");
  var announcement = root.querySelector("[data-carousel-announcement]");
  var toggle = root.querySelector("[data-carousel-toggle]");
  var motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var index = 0;
  var requestedIndex = 0;
  var timer = null;
  var request = 0;
  var userPaused = motion.matches;
  var hovered = false;
  var focused = false;
  var visible = false;
  var pointer = null;

  function schedule() {
    window.clearTimeout(timer);
    timer = null;
    if (userPaused || hovered || focused || !visible || document.hidden) return;
    timer = window.setTimeout(function () { show(index + 1, false); }, 6000);
  }

  function updateToggle() {
    var label = userPaused ? "Putar otomatis" : "Jeda pergantian otomatis";
    toggle.setAttribute("aria-label", label);
    toggle.title = label;
    toggle.querySelector("img").src = userPaused ? "assets/play.svg" : "assets/pause.svg";
    root.dataset.paused = String(userPaused);
  }

  function pauseForInteraction() {
    userPaused = true;
    updateToggle();
    schedule();
  }

  async function show(nextIndex, manual) {
    if (manual) pauseForInteraction();
    window.clearTimeout(timer);
    var token = ++request;
    var next = (nextIndex + slides.length) % slides.length;
    requestedIndex = next;
    var image = slides[next].querySelector("img");
    image.loading = "eager";
    try {
      await image.decode();
    } catch (error) {
      if (token === request) schedule();
      return;
    }
    if (token !== request) return;
    if (!manual && (userPaused || hovered || focused || !visible || document.hidden)) {
      schedule();
      return;
    }

    index = next;
    root.dataset.index = String(index);
    track.style.transform = "translateX(-" + index * 100 + "%)";
    slides.forEach(function (slide, i) { slide.setAttribute("aria-hidden", String(i !== index)); });
    dots.forEach(function (dot, i) {
      if (i === index) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
    title.textContent = slides[index].dataset.title;
    note.textContent = slides[index].dataset.note;
    announcement.setAttribute("aria-live", manual ? "polite" : "off");
    announcement.textContent = (index + 1) + " dari " + slides.length + ": " + title.textContent;
    note.classList.remove("carousel-caption-in");
    void note.offsetWidth;
    note.classList.add("carousel-caption-in");
    schedule();
  }

  root.querySelector("[data-carousel-prev]").addEventListener("click", function () { show(requestedIndex - 1, true); });
  root.querySelector("[data-carousel-next]").addEventListener("click", function () { show(requestedIndex + 1, true); });
  dots.forEach(function (dot, i) { dot.addEventListener("click", function () { show(i, true); }); });
  toggle.addEventListener("click", function () {
    userPaused = !userPaused;
    updateToggle();
    schedule();
  });

  root.addEventListener("pointerenter", function (event) {
    if (event.pointerType === "mouse") { hovered = true; schedule(); }
  });
  root.addEventListener("pointerleave", function (event) {
    if (event.pointerType === "mouse") { hovered = false; schedule(); }
  });
  root.addEventListener("focusin", function (event) {
    focused = event.target !== toggle;
    schedule();
  });
  root.addEventListener("focusout", function () {
    window.setTimeout(function () {
      focused = root.contains(document.activeElement) && document.activeElement !== toggle;
      schedule();
    }, 0);
  });
  root.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      show(requestedIndex + (event.key === "ArrowRight" ? 1 : -1), true);
    }
  });

  viewport.addEventListener("pointerdown", function (event) {
    if (!event.isPrimary || event.button !== 0) return;
    pauseForInteraction();
    pointer = { id: event.pointerId, x: event.clientX, y: event.clientY };
    viewport.setPointerCapture(event.pointerId);
  });
  viewport.addEventListener("pointerup", function (event) {
    if (!pointer || event.pointerId !== pointer.id) return;
    var dx = event.clientX - pointer.x;
    var dy = event.clientY - pointer.y;
    pointer = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.25) show(requestedIndex + (dx < 0 ? 1 : -1), true);
  });
  viewport.addEventListener("pointercancel", function () { pointer = null; });
  viewport.addEventListener("dragstart", function (event) { event.preventDefault(); });

  document.addEventListener("visibilitychange", schedule);
  motion.addEventListener("change", function () {
    if (motion.matches) userPaused = true;
    updateToggle();
    schedule();
  });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].intersectionRatio >= 0.25;
      schedule();
    }, { threshold: 0.25 }).observe(root);
  } else {
    visible = true;
  }

  root.querySelector("[data-carousel-controls]").hidden = false;
  updateToggle();
  schedule();
})();
