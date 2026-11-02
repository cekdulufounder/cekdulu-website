(function () {
  "use strict";

  var body = document.body;
  var header = document.querySelector(".site-header");
  var menuToggle = document.querySelector(".menu-toggle");
  var navigation = document.querySelector(".main-nav");
  var toast = document.querySelector("[data-toast]");
  var toastTimer = null;
  var mobileNavigation = window.matchMedia("(max-width: 980px)");
  var navigationSections = [];
  var currentSection = null;
  var headerUpdatePending = false;

  if (navigation) {
    navigation.querySelectorAll('a[href^="#"]').forEach(function (link) {
      var section = document.getElementById(link.getAttribute("href").slice(1));
      if (section) navigationSections.push({ link: link, section: section });
    });
  }

  // Older shared homepage links now lead to their dedicated pages.
  if (document.querySelector(".hero--intro")) {
    function openLegacyPage() {
      var pages = { "#bantuan": "faq.html", "#privasi": "privacy.html" };
      var target = pages[window.location.hash];
      if (target) window.location.replace(target);
    }
    openLegacyPage();
    window.addEventListener("hashchange", openLegacyPage);
  }

  function setMenu(open) {
    if (!menuToggle || !navigation) return;

    body.classList.toggle("nav-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
    navigation.inert = mobileNavigation.matches && !open;
    if (open) navigation.scrollTop = 0;
  }

  function syncNavigation() {
    if (!navigation || !menuToggle) return;
    var focusInsideMenu = navigation.contains(document.activeElement);
    setMenu(false);
    if (mobileNavigation.matches && focusInsideMenu) menuToggle.focus();
  }

  function updateCurrentLink() {
    if (!navigationSections.length) return;
    var active = navigationSections[0];
    var headerBottom = header ? header.getBoundingClientRect().bottom : 0;
    var activationLine = Math.min(window.innerHeight / 3, headerBottom + 24);

    // Sections without a menu item stay grouped with the preceding navigation section.
    navigationSections.forEach(function (item) {
      if (item.section.getBoundingClientRect().top <= activationLine) active = item;
    });
    if (currentSection === active.section) return;
    currentSection = active.section;
    navigationSections.forEach(function (item) {
      if (item === active) {
        item.link.setAttribute("aria-current", "location");
      } else {
        item.link.removeAttribute("aria-current");
      }
    });
  }

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", function () {
      setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
    });

    navigation.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("click", function (event) {
      if (!body.classList.contains("nav-open")) return;
      if (navigation.contains(event.target) || menuToggle.contains(event.target)) return;
      setMenu(false);
    });

    navigation.addEventListener("focusout", function (event) {
      if (!navigation.contains(event.relatedTarget) && event.relatedTarget !== menuToggle) setMenu(false);
    });

    mobileNavigation.addEventListener("change", syncNavigation);
    syncNavigation();
    window.addEventListener("hashchange", queueHeaderUpdate);
  }

  function updateHeader() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 24);
    updateCurrentLink();
  }

  function queueHeaderUpdate() {
    if (headerUpdatePending) return;
    headerUpdatePending = true;
    window.requestAnimationFrame(function () {
      headerUpdatePending = false;
      updateHeader();
    });
  }

  updateHeader();
  window.addEventListener("scroll", queueHeaderUpdate, { passive: true });
  window.addEventListener("resize", queueHeaderUpdate, { passive: true });
  window.addEventListener("load", queueHeaderUpdate);
  window.addEventListener("pageshow", queueHeaderUpdate);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && body.classList.contains("nav-open")) {
      setMenu(false);
      menuToggle.focus();
    }
  });

  document.querySelectorAll(".faq-list details").forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (!item.open) return;

      document.querySelectorAll(".faq-list details[open]").forEach(function (openItem) {
        if (openItem !== item) openItem.removeAttribute("open");
      });
    });
  });

  function showToast(message) {
    if (!toast) return;

    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add("is-visible");
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 2800);
  }

  document.querySelectorAll("[data-coming-soon]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      showToast("Tautan " + link.dataset.comingSoon + " segera tersedia.");
    });
  });

  var lightbox = document.querySelector("[data-lightbox]");
  var lightboxImage = document.querySelector("[data-lightbox-image]");
  var lightboxCaption = document.querySelector("[data-lightbox-caption]");
  var lightboxClose = document.querySelector("[data-lightbox-close]");

  document.querySelectorAll("[data-gallery-image]").forEach(function (item) {
    item.addEventListener("click", function () {
      if (!lightbox || !lightboxImage || !lightboxCaption) return;

      lightboxImage.src = item.dataset.galleryImage;
      lightboxImage.alt = item.dataset.galleryAlt || "Screenshot aplikasi CekDulu";
      lightboxCaption.textContent = item.dataset.galleryCaption || "";
      lightbox.showModal();
    });
  });

  if (lightbox && lightboxClose) {
    lightboxClose.addEventListener("click", function () {
      lightbox.close();
    });

    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) lightbox.close();
    });
  }
})();
