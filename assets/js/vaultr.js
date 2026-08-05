(() => {
  const banner = document.querySelector('[data-banner]');
  const header = document.querySelector('[data-header]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');

  document.querySelector('[data-close-banner]')?.addEventListener('click', () => {
    banner?.classList.add('is-hidden');
    header?.style.setProperty('top', '0');
  });

  const setMenu = (open) => {
    menuButton?.setAttribute('aria-expanded', String(open));
    menuButton?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileMenu?.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  };

  menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));

  let lastY = 0;
  const syncHeader = () => {
    const y = window.scrollY;
    header?.classList.toggle('is-fixed', y > 48);
    lastY = y;
  };
  window.addEventListener('scroll', syncHeader, { passive: true });
  syncHeader();

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -40px' });
  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

  const quotes = [...document.querySelectorAll('[data-quote]')];
  const dots = [...document.querySelectorAll('[data-quote-dot]')];
  let currentQuote = 0;
  let quoteTimer;

  const showQuote = (index) => {
    currentQuote = (index + quotes.length) % quotes.length;
    quotes.forEach((quote, i) => quote.classList.toggle('is-active', i === currentQuote));
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === currentQuote));
  };

  const restartCarousel = () => {
    window.clearInterval(quoteTimer);
    quoteTimer = window.setInterval(() => showQuote(currentQuote + 1), 7000);
  };

  document.querySelector('[data-quote-prev]')?.addEventListener('click', () => { showQuote(currentQuote - 1); restartCarousel(); });
  document.querySelector('[data-quote-next]')?.addEventListener('click', () => { showQuote(currentQuote + 1); restartCarousel(); });
  dots.forEach((dot) => dot.addEventListener('click', () => { showQuote(Number(dot.dataset.quoteDot)); restartCarousel(); }));
  restartCarousel();

  document.querySelector('[data-deployment-form]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = new FormData(form).get('email');
    const status = document.querySelector('[data-form-status]');
    if (!email) return;
    status.textContent = 'Request received. Your work remains local.';
    status.classList.add('is-success');
    form.reset();
  });
})();
