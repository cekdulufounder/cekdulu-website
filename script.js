(function () {
  "use strict";

  var body = document.body;
  var header = document.querySelector(".site-header");
  var menuToggle = document.querySelector(".menu-toggle");
  var navigation = document.querySelector(".main-nav");
  var toast = document.querySelector("[data-toast]");
  var toastTimer = null;
  var mobileNavigation = window.matchMedia("(max-width: 980px)");

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
    if (!navigation) return;
    var section = window.location.hash || "#top";
    if (["#mulai", "#keseharian", "#tampilan"].indexOf(section) !== -1) section = "#fitur";
    if (section === "#pengalaman") section = "#cara-kerja";
    navigation.querySelectorAll('a[href^="#"]').forEach(function (link) {
      if (link.getAttribute("href") === section) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
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
    updateCurrentLink();
    window.addEventListener("hashchange", updateCurrentLink);
  }

  function updateHeader() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 24);
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

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
