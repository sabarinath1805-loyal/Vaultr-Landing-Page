(() => {
  const canvas = document.querySelector('[data-vault-canvas]');
  if (!canvas || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const context = canvas.getContext('2d');
  let width = 0, height = 0, dpr = 1, frame = 0;
  const resize = () => {
    dpr = Math.min(devicePixelRatio || 1, 2); width = canvas.clientWidth; height = canvas.clientHeight;
    canvas.width = width * dpr; canvas.height = height * dpr; context.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  const draw = () => {
    frame += .004; context.clearRect(0, 0, width, height); const x = width * .76, y = height * .48;
    for (let i = 0; i < 7; i += 1) { const radius = 85 + i * 62 + Math.sin(frame * 4 + i) * 8; context.beginPath(); context.arc(x, y, radius, 0, Math.PI * 2); context.strokeStyle = `rgba(116,141,255,${.12 - i * .012})`; context.lineWidth = .75; context.stroke(); }
    context.beginPath(); context.moveTo(x, 0); context.lineTo(x, height); context.moveTo(0, y); context.lineTo(width, y); context.strokeStyle = 'rgba(255,255,255,.055)'; context.stroke(); requestAnimationFrame(draw);
  };
  addEventListener('resize', resize, { passive: true }); resize(); draw();
})();
