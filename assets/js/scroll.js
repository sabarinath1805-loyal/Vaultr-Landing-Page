(() => {
  const header = document.querySelector('[data-header]');
  const media = document.querySelector('.hero__media');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const onScroll = () => {
    header?.classList.toggle('is-solid', scrollY > 42);
    if (media && !reduced) media.style.transform = `scale(1.03) translateY(${Math.min(scrollY * .08, 48)}px)`;
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: .12, rootMargin: '0px 0px -40px' });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
})();
