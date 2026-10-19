// Inicialización de Lenis Smooth Scroll + Sincronización GSAP
const lenis = new Lenis({
  duration: 1.8,
  wheelMultiplier: 0.85,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});

// Sincronización exacta con GSAP ScrollTrigger
if (typeof ScrollTrigger !== 'undefined') {
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
} else {
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

// Navegación suave para enlaces ancla (#hero, #sobre-mi, #proyectos, etc.)
document.addEventListener('DOMContentLoaded', () => {
  // Manejo de todos los enlaces internos (#)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#' || targetId === '#contact-modal') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        if (typeof lenis !== 'undefined') {
          lenis.scrollTo(targetEl, {
            offset: 0,
            duration: 1.6,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        } else {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Lógica del botón REBOOT_SYSTEM (Ir Arriba)
  const btnReboot = document.getElementById('btn-reboot');
  if (btnReboot) {
    btnReboot.addEventListener('click', (e) => {
      e.preventDefault();
      if (typeof lenis !== 'undefined') {
        lenis.scrollTo(0, { duration: 1.5 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
});
