import { useEffect } from 'react';

/**
 * Additive magnetic-button effect for primary CTAs (.btn-modern).
 * Pointer proximity nudges the button slightly toward the cursor via
 * CSS variables (--mx / --my), which index.css combines with the
 * existing hover transform — the original lift/scale hover still runs
 * exactly as before, this only layers a subtle pull on top of it.
 * No existing DOM, classes, or handlers are touched.
 */
export function useMagneticButtons() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || window.matchMedia('(pointer: coarse)').matches) return;

    const radius = 90;

    const handleMove = (e: PointerEvent) => {
      const buttons = document.querySelectorAll<HTMLElement>('.btn-modern');
      buttons.forEach((btn) => {
        const rect = btn.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);

        if (dist < radius + Math.max(rect.width, rect.height) / 2) {
          const pull = Math.max(0, 1 - dist / (radius + rect.width));
          btn.style.setProperty('--mx', `${(dx * 0.28 * pull).toFixed(1)}px`);
          btn.style.setProperty('--my', `${(dy * 0.28 * pull).toFixed(1)}px`);
          btn.style.setProperty('--mag-scale', `${1 + 0.02 * pull}`);
        } else {
          btn.style.setProperty('--mx', `0px`);
          btn.style.setProperty('--my', `0px`);
          btn.style.setProperty('--mag-scale', `1`);
        }
      });
    };

    window.addEventListener('pointermove', handleMove, { passive: true });
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);
}
