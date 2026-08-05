(() => {
  requestAnimationFrame(() => document.querySelector('.hero')?.classList.add('is-ready'));

  const carousel = document.querySelector('[data-quote-carousel]');
  if (carousel) {
    const quotes = [...carousel.querySelectorAll('.quote')];
    const dots = carousel.querySelector('[data-quote-dots]');
    let current = 0;
    let timer;
    const show = (index) => {
      current = (index + quotes.length) % quotes.length;
      quotes.forEach((quote, i) => quote.classList.toggle('is-active', i === current));
      [...dots.children].forEach((dot, i) => { dot.classList.toggle('is-active', i === current); dot.setAttribute('aria-current', i === current ? 'true' : 'false'); });
    };
    const start = () => { clearInterval(timer); timer = setInterval(() => show(current + 1), 6000); };
    quotes.forEach((_, i) => { const dot = document.createElement('button'); dot.type = 'button'; dot.setAttribute('aria-label', `Show quote ${i + 1}`); dot.addEventListener('click', () => { show(i); start(); }); dots.append(dot); });
    carousel.querySelector('[data-quote-prev]').addEventListener('click', () => { show(current - 1); start(); });
    carousel.querySelector('[data-quote-next]').addEventListener('click', () => { show(current + 1); start(); });
    show(0); start();
  }

  const response = document.querySelector('[data-typed-response]');
  if (response && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const text = response.textContent.trim(); response.textContent = '';
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect(); let i = 0;
      const type = () => { response.textContent = text.slice(0, ++i); if (i < text.length) setTimeout(type, 9); };
      type();
    }, { threshold: .5 }); observer.observe(response);
  }
})();
