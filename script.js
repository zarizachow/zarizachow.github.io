// Mobile menu
var btn = document.getElementById('menuBtn');
var menu = document.getElementById('menu');
btn.addEventListener('click', function () {
  var open = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') menu.classList.remove('open');
});

var modal = document.getElementById('modal');
if (modal) {
  var body = document.getElementById('modalBody');
  var box = document.getElementById('lightbox');

  // Fill the popup from a card (its .head plus its hidden .more block)
  function openCard(id) {
    var card = document.getElementById(id);
    if (!card) return;
    body.innerHTML = '<div class="head">' + card.querySelector('.head').innerHTML + '</div>' +
                     card.querySelector('.more').innerHTML;
    if (!modal.open) modal.showModal();
    modal.scrollTop = 0;
  }

  document.addEventListener('click', function (e) {
    var open = e.target.closest('[data-open]');
    if (open) { e.preventDefault(); openCard(open.dataset.open); return; }
    var zoom = e.target.closest('[data-zoom]');
    if (zoom) {
      var img = document.getElementById('lightImg');
      img.src = zoom.dataset.zoom; img.alt = zoom.dataset.alt;
      box.showModal(); return;
    }
    if (e.target.closest('[data-close]')) { e.target.closest('dialog').close(); return; }
    // Click on the dark area outside a popup closes it
    if (e.target === modal || e.target === box) e.target.close();
  });

  // Stops right-click save on diploma images (screenshots cannot be prevented)
  document.addEventListener('contextmenu', function (e) {
    if (e.target.closest('.nosave')) e.preventDefault();
  });

  document.getElementById('year').textContent = new Date().getFullYear();
}
