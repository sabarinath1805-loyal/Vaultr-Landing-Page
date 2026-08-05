(() => {
  const banner = document.querySelector('#announcement');
  document.querySelector('[data-dismiss-banner]')?.addEventListener('click', () => banner.classList.add('is-hidden'));

  const menuButton = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-mobile-menu]');
  const setMenu = (open) => {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.setAttribute('aria-hidden', String(!open));
    menu.classList.toggle('is-open', open); document.body.classList.toggle('menu-open', open);
  };
  menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });

  const rail = document.querySelector('[data-feature-rail]');
  if (rail) {
    const move = (direction) => rail.scrollBy({ left: direction * Math.min(410, innerWidth * .82), behavior: 'smooth' });
    document.querySelector('[data-feature-prev]').addEventListener('click', () => move(-1));
    document.querySelector('[data-feature-next]').addEventListener('click', () => move(1));
    rail.addEventListener('keydown', (event) => { if (event.key === 'ArrowRight') move(1); if (event.key === 'ArrowLeft') move(-1); });
  }

  const form = document.querySelector('[data-access-form]');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button'); button.textContent = 'Access requested ✓'; button.disabled = true;
    document.querySelector('[data-form-note]').textContent = 'You’re on the list. We’ll be in touch shortly.';
    form.reset();
  });
})();
