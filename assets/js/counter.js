(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const animate = (el) => {
    const target = Number(el.dataset.counter);
    if (reduced || target === 0) { el.textContent = target; return; }
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / 1250, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { animate(entry.target); observer.unobserve(entry.target); }
  }), { threshold: .55 });
  document.querySelectorAll('[data-counter]').forEach((el) => observer.observe(el));
})();
