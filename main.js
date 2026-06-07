// Sticky-header border on scroll + auto year in footer.
(function () {
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
