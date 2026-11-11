// Mobile menu: opens and closes the menu on small screens
var btn = document.getElementById('menuBtn');
var menu = document.getElementById('menu');
btn.addEventListener('click', function () {
  var open = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
// Close the menu after tapping a link
menu.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') { menu.classList.remove('open'); btn.setAttribute('aria-expanded', false); }
});
// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
