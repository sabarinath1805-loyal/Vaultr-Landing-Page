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

  const lexTabs = [...document.querySelectorAll('[data-lex-tab]')];
  const lexAnswer = document.querySelector('.lex-window__answer');
  const lexLabel = document.querySelector('[data-lex-label]');
  const lexTitle = document.querySelector('[data-lex-title]');
  const lexMetaPrimary = document.querySelector('[data-lex-meta-primary]');
  const lexMetaSecondary = document.querySelector('[data-lex-meta-secondary]');
  const lexModes = {
    review: {
      label: 'LEX / REVIEW',
      title: 'Clause drift detected.',
      primary: '12 deviations flagged',
      secondary: 'Source spans linked'
    },
    compare: {
      label: 'LEX / COMPARE',
      title: 'Section 7 favors the counterparty.',
      primary: '3 versions aligned',
      secondary: '0 bytes transmitted'
    },
    draft: {
      label: 'LEX / DRAFT',
      title: 'Response language ready.',
      primary: 'Tone: matter-specific',
      secondary: 'Source auditable'
    }
  };

  const setLexMode = (mode) => {
    const content = lexModes[mode] || lexModes.review;
    lexTabs.forEach((tab) => {
      const active = tab.dataset.lexTab === mode;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    if (lexAnswer) {
      lexAnswer.classList.add('is-changing');
      window.setTimeout(() => lexAnswer.classList.remove('is-changing'), 260);
    }
    if (lexLabel) lexLabel.textContent = content.label;
    if (lexTitle) lexTitle.textContent = content.title;
    if (lexMetaPrimary) lexMetaPrimary.textContent = content.primary;
    if (lexMetaSecondary) lexMetaSecondary.textContent = content.secondary;
  };

  lexTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => setLexMode(tab.dataset.lexTab));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const nextIndex = event.key === 'Home' ? 0
        : event.key === 'End' ? lexTabs.length - 1
          : (index + (event.key === 'ArrowRight' ? 1 : -1) + lexTabs.length) % lexTabs.length;
      const nextTab = lexTabs[nextIndex];
      nextTab.focus();
      setLexMode(nextTab.dataset.lexTab);
    });
  });

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
