document.addEventListener("DOMContentLoaded", function () {
  // Mobile navigation toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Services dropdown (click / touch toggle; hover handled in CSS)
  var dd = document.querySelector(".nav-dropdown");
  var ddToggle = document.querySelector(".nav-dropdown-toggle");
  if (dd && ddToggle) {
    ddToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = dd.classList.toggle("open");
      ddToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", function (e) {
      if (!dd.contains(e.target)) {
        dd.classList.remove("open");
        ddToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Solid header background once scrolled off the top
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Highlight the active nav item based on the current path
  var path = window.location.pathname.replace(/index\.html$/, "");
  if (!path.endsWith("/")) path += "/";
  document.querySelectorAll(".site-nav a").forEach(function (a) {
    if (a.getAttribute("href") === path) {
      a.classList.add("active");
      var parent = a.closest(".nav-dropdown");
      if (parent) {
        var t = parent.querySelector(".nav-dropdown-toggle");
        if (t) t.classList.add("active");
      }
    }
  });
});
