(() => {
  const marquee = document.querySelector('.marquee');
  if (!marquee) return;
  marquee.addEventListener('keydown', (event) => {
    if (event.key === ' ') { event.preventDefault(); marquee.classList.toggle('is-paused'); }
  });
})();
