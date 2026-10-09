document.querySelectorAll('.sidehead').forEach(function (b) {
  b.addEventListener('click', function () {
    var l = document.getElementById(b.dataset.target);
    if (!l) return;
    var o = l.classList.toggle('open');
    b.setAttribute('aria-expanded', o ? 'true' : 'false');
  });
});
