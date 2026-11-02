(function () {
  "use strict";

  var targets = document.querySelectorAll("[data-motion-hero], [data-motion-goal], [data-motion-note], [data-scroll-reveal]");
  if (!targets.length || !("IntersectionObserver" in window)) return;
  var hero = document.querySelector("[data-motion-hero]");
  var motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var scrollTargets = document.querySelectorAll("[data-scroll-reveal]");
  var visible = new Set();

  function decoration(target) {
    return target.hasAttribute("data-motion-goal") || target.hasAttribute("data-motion-note");
  }

  function companionsRunning(target) {
    return Array.from(target.closest("section").querySelectorAll("[data-scroll-reveal]")).some(function (item) {
      return item.dataset.motionState === "entering";
    });
  }

  function flushDecorations() {
    if (document.hidden) return;
    visible.forEach(function (target) {
      if (decoration(target) && !companionsRunning(target)) reveal(target);
    });
  }

  function settle(target, manual) {
    if (target.dataset.motionState === "settled") return;
    target.dataset.motionState = "settled";
    target.dispatchEvent(new CustomEvent("cekdulu:motion-settled", { bubbles: true, detail: { manual: manual === true } }));
    flushDecorations();
  }

  function reveal(target, animate) {
    var scroll = target.hasAttribute("data-scroll-reveal");
    var managed = target === hero || scroll;
    var instant = animate === false || motion.matches;
    if (instant) target.classList.remove("is-hero-entering", "is-scroll-entering", "is-decoration-entering");
    if (target.classList.contains("is-motion-seen")) {
      if (managed && instant) settle(target, true);
      return;
    }
    if (decoration(target) && !instant && companionsRunning(target)) return;
    if (target === hero && !instant) target.classList.add("is-hero-entering");
    if (scroll && !instant) target.classList.add("is-scroll-entering");
    if (decoration(target) && !instant) target.classList.add("is-decoration-entering");
    target.classList.add("is-motion-seen");
    visible.delete(target);
    observer.unobserve(target);
    if (!managed) return;
    target.dataset.motionState = "entering";
    var name = target === hero ? "intro-preview-entrance" : "motion-scroll-reveal";
    var animation = !instant && target.getAnimations && target.getAnimations().find(function (item) { return item.animationName === name; });
    if (animation) {
      animation.finished.then(function () { settle(target, false); }, function () { settle(target, false); });
    } else settle(target, instant);
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var threshold = entry.target.hasAttribute("data-scroll-reveal") ? 0.12 : 0.35;
      // A short landscape viewport cannot always expose the usual target fraction.
      if (entry.rootBounds && entry.rootBounds.height < entry.boundingClientRect.height * threshold) threshold = 0;
      if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
        visible.add(entry.target);
        if (!document.hidden) reveal(entry.target);
      } else visible.delete(entry.target);
    });
  }, { threshold: [0, 0.12, 0.35], rootMargin: "-84px 0px -16px" });

  targets.forEach(function (target) { observer.observe(target); });
  scrollTargets.forEach(function (target) {
    target.dataset.motionState = "pending";
    target.classList.add("is-scroll-ready");
    if (motion.matches) reveal(target, false);
  });
  if (hero) {
    hero.dataset.motionState = "pending";
    hero.classList.add("is-motion-ready");
    if (motion.matches) reveal(hero, false);
  }
  motion.addEventListener("change", function () {
    if (!motion.matches) return;
    targets.forEach(function (target) { reveal(target, false); });
  });
  function finishInteraction(event) {
    var scope = event.target.closest("[data-carousel], [data-workflow]");
    if (scope) {
      if (scope === hero) reveal(hero, false);
      scope.querySelectorAll("[data-scroll-reveal]").forEach(function (target) { reveal(target, false); });
    }
    var target = event.target.closest("[data-scroll-reveal]");
    if (target) reveal(target, false);
  }
  document.addEventListener("focusin", function (event) {
    if (event.target.matches(":focus-visible")) finishInteraction(event);
  });
  // Complete movement after the click target is fixed, not during pointer-down.
  document.addEventListener("click", finishInteraction, true);
  document.addEventListener("pointerup", function (event) {
    if (event.target.closest("[data-carousel-viewport]")) finishInteraction(event);
  }, { passive: true });
  document.addEventListener("visibilitychange", function () {
    if (!document.hidden) visible.forEach(reveal);
  });
  // Viewport changes can alter the attainable ratio without crossing a threshold.
  window.addEventListener("resize", function () {
    targets.forEach(function (target) {
      if (target.classList.contains("is-motion-seen")) return;
      visible.delete(target);
      observer.unobserve(target);
      observer.observe(target);
    });
  }, { passive: true });
})();
