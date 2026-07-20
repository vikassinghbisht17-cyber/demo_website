import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Additive scroll-reveal system.
 * Finds sections/cards on the page and fades+lifts them in as they enter
 * the viewport, using IntersectionObserver. Elements already visible on
 * load are marked visible immediately (no flash-of-hidden-content).
 * Respects prefers-reduced-motion. Does not touch any existing markup,
 * classes, or logic — purely observes and toggles a class it owns.
 */
export function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Give the route's new DOM a tick to paint before we scan it.
    const raf = requestAnimationFrame(() => {
      const candidates = Array.from(
        document.querySelectorAll<HTMLElement>(
          'main section, main .common-card, main .card-hover, main .image-card'
        )
      );

      if (prefersReducedMotion || candidates.length === 0) {
        candidates.forEach((el) => el.classList.add('reveal-visible'));
        return;
      }

      const viewportH = window.innerHeight;

      candidates.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        const alreadyVisible = rect.top < viewportH * 0.92;

        if (alreadyVisible) {
          el.classList.add('reveal-visible');
          return;
        }

        el.classList.add('reveal-pending');
        el.style.setProperty('--reveal-delay', `${Math.min(i % 4, 3) * 90}ms`);
      });

      const pending = document.querySelectorAll<HTMLElement>('.reveal-pending');
      if (pending.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
      );

      pending.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname]);
}
