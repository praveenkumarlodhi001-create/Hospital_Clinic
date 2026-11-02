(() => {
  const R = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.fxn-card img').forEach(i => i.addEventListener('error', () => i.closest('.fxn-card').classList.add('fx-broken')));
  const hero = document.querySelector('.hero');
  if (hero) {
    const NS = 'http://www.w3.org/2000/svg', s = document.createElementNS(NS, 'svg'), p = document.createElementNS(NS, 'path');
    s.setAttribute('class', 'fxn-ecg'); s.setAttribute('viewBox', '0 0 1600 70'); s.setAttribute('preserveAspectRatio', 'none'); s.setAttribute('aria-hidden', 'true');
    let d = 'M0 35 H300'; for (let x = 300; x < 1500; x += 380) d += ` H${x + 70} l14 -6 l14 6 H${x + 140} l10 6 l16 -34 l16 52 l12 -24 H${x + 260} q22 -22 44 0 H${x + 380}`;
    p.setAttribute('d', d + ' H1600'); s.append(p); hero.append(s);
  }
  if (R || !('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('fxn-js');
  const secs = [...document.querySelectorAll('main>section')].slice(1); secs.forEach(x => x.classList.add('fxn-sec'));
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .06 });
  secs.forEach(x => io.observe(x));
  if (matchMedia('(hover:hover)').matches) document.querySelectorAll('.fxn-card').forEach(c => {
    c.addEventListener('pointermove', e => { const r = c.getBoundingClientRect(); c.style.setProperty('--tx', ((e.clientY - r.top) / r.height - .5) * -2.4 + 'deg'); c.style.setProperty('--ty', ((e.clientX - r.left) / r.width - .5) * 3 + 'deg'); });
    c.addEventListener('pointerleave', () => { c.style.setProperty('--tx', '0deg'); c.style.setProperty('--ty', '0deg'); });
  });
})();
