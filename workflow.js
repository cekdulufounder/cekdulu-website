(function () {
  "use strict";

  var root = document.querySelector("[data-workflow]");
  if (!root) return;

  var steps = Array.from(root.querySelectorAll("[data-workflow-step]"));
  var scenes = Array.from(root.querySelectorAll("[data-workflow-scene]"));
  var amount = root.querySelector("[data-workflow-amount-text]");
  var buttons = Array.from(root.querySelectorAll("[data-workflow-select]"));
  var toggle = root.querySelector("[data-workflow-toggle]");
  var replay = root.querySelector("[data-workflow-replay]");
  var announcement = root.querySelector("[data-workflow-announcement]");
  var scenarioControls = root.closest("section").querySelector("[data-workflow-scenarios]");
  var resultImage = root.querySelector("[data-workflow-result]");
  var caption = root.querySelector("[data-workflow-caption]");
  var guide = root.querySelector("[data-workflow-guide]");
  var guidePositioned = false;
  var guideAnimation = null;
  var rupiah = new Intl.NumberFormat("id-ID");
  var scenarios = {
    safe: {
      amount: 25000,
      digits: [2, 25, 250, 2500, 25000, 25000],
      remaining: 64000,
      image: "assets/reflection-safe.jpg",
      description: "Contoh hasil Aman: setelah pembelian Rp25.000, sisa ruang Rp39.000 dan total terpakai hari ini Rp61.000."
    },
    over: {
      amount: 1000000,
      digits: [1, 10, 100, 1000, 10000, 100000],
      remaining: 100000,
      image: "assets/reflection-over-limit-current.png",
      description: "Contoh melewati batas: pembelian pertama Rp1.000.000, total terpakai Rp1.000.000. Hasil Terjaga Harian dipakai Rp400.000 dan ruang harian mulai besok berubah dari Rp100.000 menjadi Rp80.000 untuk 25 hari."
    }
  };
  var scenario = scenarios.over;
  var assetVersion = 0;
  var motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var frames = [
    { at: 0, phase: "input", amount: 0, zoom: false },
    { at: 350, zoom: true },
    { at: 750, digit: 0 },
    { at: 1000, digit: 1 },
    { at: 1250, digit: 2 },
    { at: 1500, digit: 3 },
    { at: 1750, digit: 4 },
    { at: 2000, digit: 5 },
    { at: 2250, amount: "full" },
    { at: 2550, zoom: false },
    { at: 3100, phase: "impact" },
    { at: 5600, phase: "decision" },
    { at: 7800, done: true }
  ];
  var visible = false;
  var inView = false;
  var ready = false;
  var preparation = null;
  var failed = false;
  var complete = false;
  var running = false;
  var elapsed = 0;
  var startedAt = 0;
  var cursor = 0;
  var timer = null;
  var userPaused = motion.matches;
  var explicitPlayback = false;
  var pageActive = true;
  var operation = 0;
  var entranceTargets = Array.from(root.querySelectorAll("[data-scroll-reveal]"));

  function updateControls() {
    var label = failed ? "Contoh tidak tersedia" : motion.matches ? "Animasi dinonaktifkan" :
      complete ? "Contoh selesai" : running ? "Jeda contoh" : "Lanjutkan contoh";
    toggle.disabled = motion.matches || failed || complete;
    toggle.setAttribute("aria-label", label);
    toggle.title = label;
    toggle.querySelector("img").src = running ? "assets/pause.svg" : "assets/play.svg";
    replay.disabled = failed;
    buttons.forEach(function (button) { button.disabled = failed; });
  }

  function canRun() {
    return (visible || (explicitPlayback && inView)) && pageActive && !document.hidden &&
      !motion.matches && !userPaused && !complete && !failed && entranceTargets.every(function (target) {
        return !target.dataset.motionState || target.dataset.motionState === "settled";
      });
  }

  function positionGuide(animate) {
    if (!guide) return;
    var active = steps.find(function (step) { return step.classList.contains("is-active"); });
    if (!active) return;
    var parent = guide.parentElement.getBoundingClientRect();
    var previous = guide.getBoundingClientRect();
    var target = active.getBoundingClientRect();
    if (guideAnimation) guideAnimation.cancel();
    var transform = "translate(" + (target.left - parent.left) + "px, " + (target.top - parent.top) + "px)";
    guide.style.transform = transform;
    guide.style.width = target.width + "px";
    guide.style.height = target.height + "px";
    guide.hidden = false;
    root.classList.add("has-guide");
    var moved = Math.abs(previous.left - target.left) > 0.5 || Math.abs(previous.top - target.top) > 0.5 ||
      Math.abs(previous.width - target.width) > 0.5 || Math.abs(previous.height - target.height) > 0.5;
    if (animate && guidePositioned && moved && !motion.matches && guide.animate) {
      guideAnimation = guide.animate([
        { transform: "translate(" + (previous.left - parent.left) + "px, " + (previous.top - parent.top) + "px)", width: previous.width + "px", height: previous.height + "px" },
        { transform: transform, width: target.width + "px", height: target.height + "px" }
      ], { duration: 380, easing: "cubic-bezier(0.22, 1, 0.36, 1)" });
    }
    guidePositioned = true;
  }

  function render(frame) {
    if ("amount" in frame || "digit" in frame) {
      var value = "digit" in frame ? scenario.digits[frame.digit] : frame.amount === "full" ? scenario.amount : frame.amount;
      amount.textContent = "Rp" + rupiah.format(value);
    }
    if (typeof frame.zoom === "boolean") root.dataset.zoom = String(frame.zoom);
    if (!frame.phase) return;
    root.dataset.phase = frame.phase;
    var index = ["input", "impact", "decision"].indexOf(frame.phase);
    steps.forEach(function (step, i) {
      step.classList.toggle("is-active", i === index);
      if (i === index) step.setAttribute("aria-current", "step");
      else step.removeAttribute("aria-current");
      buttons[i].setAttribute("aria-pressed", String(i === index));
    });
    positionGuide(true);
    scenes.forEach(function (scene) {
      var active = (scene.dataset.workflowScene === "input") === (frame.phase === "input");
      scene.setAttribute("aria-hidden", String(!active));
    });
  }

  function pause() {
    if (running) elapsed += performance.now() - startedAt;
    running = false;
    window.clearTimeout(timer);
    timer = null;
    if (ready && !complete) root.dataset.playback = userPaused ? "manual" : "paused";
    updateControls();
  }

  function pauseForUser() {
    userPaused = true;
    explicitPlayback = false;
    pause();
    if (!complete && ready) root.dataset.playback = "manual";
  }

  function tick() {
    if (!canRun()) { pause(); return; }
    var time = elapsed + performance.now() - startedAt;
    while (cursor < frames.length && frames[cursor].at <= time) {
      var frame = frames[cursor++];
      render(frame);
      if (frame.done) {
        complete = true;
        running = false;
        timer = null;
        root.dataset.playback = "complete";
        updateControls();
        return;
      }
    }
    timer = window.setTimeout(tick, Math.max(0, frames[cursor].at - time));
  }

  function prepare() {
    if (ready) return Promise.resolve(true);
    if (failed) return Promise.resolve(false);
    if (!preparation) {
      var version = assetVersion;
      preparation = (async function () {
        try {
          await Promise.all(scenes.map(function (scene) {
            var image = scene.querySelector("img");
            image.loading = "eager";
            return image.decode();
          }));
          if (version !== assetVersion) return false;
          scenes.forEach(function (scene) { scene.hidden = false; });
          root.querySelectorAll("[data-workflow-focus]").forEach(function (focus) { focus.hidden = false; });
          ready = true;
          return true;
        } catch (error) {
          if (version !== assetVersion) return false;
          failed = true;
          render({ phase: "input", amount: "full", zoom: false });
          root.dataset.playback = "unavailable";
          updateControls();
          return false;
        }
      })();
    }
    return preparation;
  }

  async function reconcile() {
    if (!canRun()) {
      pause();
      return;
    }
    var token = operation;
    if (!await prepare() || token !== operation || !canRun() || running) return;
    running = true;
    startedAt = performance.now();
    root.dataset.playback = "running";
    updateControls();
    tick();
  }

  async function selectStep(index) {
    var token = ++operation;
    pauseForUser();
    complete = false;
    updateControls();
    if (!await prepare() || token !== operation) return;
    elapsed = [0, 3100, 5600][index];
    cursor = frames.findIndex(function (frame) { return frame.at === elapsed; });
    render({ phase: ["input", "impact", "decision"][index], amount: "full", zoom: false });
    root.dataset.playback = "manual";
    announcement.textContent = "Langkah " + (index + 1) + " dari 3. " + buttons[index].textContent + ".";
  }

  async function restart(explicit) {
    var token = ++operation;
    pause();
    complete = false;
    elapsed = 0;
    cursor = 0;
    userPaused = motion.matches;
    explicitPlayback = explicit !== false && !motion.matches;
    updateControls();
    render({ phase: "input", amount: motion.matches ? "full" : 0, zoom: false });
    if (!await prepare() || token !== operation) return;
    root.dataset.playback = motion.matches ? "manual" : "idle";
    announcement.textContent = "Contoh kembali ke langkah pertama. Ketik nominal.";
    reconcile();
  }

  function setScenario(key) {
    ++operation;
    pause();
    scenario = scenarios[key];
    root.dataset.scenario = key;
    scenarioControls.querySelectorAll("input").forEach(function (input) { input.checked = input.value === key; });
    ++assetVersion;
    ready = false;
    preparation = null;
    failed = false;
    complete = false;
    elapsed = 0;
    cursor = 0;
    resultImage.closest("[data-workflow-scene]").hidden = true;
    resultImage.src = scenario.image;
    resultImage.alt = scenario.description;
    var formatted = "Rp" + rupiah.format(scenario.amount);
    caption.textContent = "Contoh pembelian " + formatted;
    root.querySelector('[data-workflow-scene="input"] img').alt = "Contoh halaman utama: ruang hari ini Rp" + rupiah.format(scenario.remaining) + " sebelum mengecek pembelian " + formatted + ".";
    render({ phase: "input", amount: "full", zoom: false });
    updateControls();
  }

  buttons.forEach(function (button, index) {
    button.addEventListener("click", function () { selectStep(index); });
    button.addEventListener("focus", pauseForUser);
    button.addEventListener("keydown", function (event) {
      var next = index;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % buttons.length;
      else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index + buttons.length - 1) % buttons.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = buttons.length - 1;
      else return;
      event.preventDefault();
      buttons[next].focus();
      selectStep(next);
    });
  });
  toggle.addEventListener("click", function () {
    if (running) pauseForUser();
    else {
      userPaused = false;
      explicitPlayback = true;
      reconcile();
    }
  });
  replay.addEventListener("click", function () { restart(true); });
  scenarioControls.querySelectorAll("input").forEach(function (input) {
    input.addEventListener("change", function () {
      if (!input.checked) return;
      setScenario(input.value);
      restart(false);
    });
  });

  root.classList.add("is-enhanced");
  root.dataset.playback = "idle";
  setScenario("over");
  if (!motion.matches) render({ phase: "input", amount: 0, zoom: false });
  scenarioControls.hidden = false;
  root.querySelector("[data-workflow-controls]").hidden = false;
  updateControls();

  if (guide) {
    if ("ResizeObserver" in window) {
      new ResizeObserver(function () { positionGuide(false); }).observe(guide.parentElement);
    } else {
      window.addEventListener("resize", function () { positionGuide(false); });
    }
  }

  // Pause the finite timeline without losing its place when the user scrolls away.
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      inView = entries[0].isIntersecting && entries[0].intersectionRatio > 0;
      visible = entries[0].intersectionRatio >= 0.8;
      reconcile();
    }, { threshold: [0, 0.01, 0.8], rootMargin: "-84px 0px -12px" }).observe(root);
  } else {
    inView = true;
  }
  document.addEventListener("visibilitychange", reconcile);
  root.addEventListener("cekdulu:motion-settled", function (event) {
    if (!event.detail.manual) reconcile();
  });
  window.addEventListener("pagehide", function () { pageActive = false; pause(); });
  window.addEventListener("pageshow", function () { pageActive = true; reconcile(); });
  motion.addEventListener("change", function () {
    if (motion.matches) {
      pauseForUser();
      render({ phase: root.dataset.phase, amount: "full", zoom: false });
    }
    updateControls();
    reconcile();
  });
})();
