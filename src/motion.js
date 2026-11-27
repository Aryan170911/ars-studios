/**
 * Motion architecture (plan.md §5):
 * - Lenis smooth inertial scroll, desktop pointers only, lerp 0.08,
 *   synced to gsap.ticker + ScrollTrigger.update
 * - Section reveals: y 28 → 0, opacity 0 → 1, 0.7s, start "top 85%", once
 * - Everything disabled under prefers-reduced-motion (content stays visible)
 */
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

let lenis = null;

export function reduceMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/** Smooth-scrolls to a selector/element, honoring Lenis when active. */
export function scrollToTarget(target, offset = -88) {
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return;
  if (lenis) {
    lenis.scrollTo(el, { offset });
  } else {
    el.scrollIntoView({
      behavior: reduceMotion() ? 'auto' : 'smooth',
      block: 'start',
    });
  }
}

/** Boots Lenis on fine pointers only (native touch scroll stays instant). */
export function initSmoothScroll() {
  if (reduceMotion()) return () => {};
  if (!window.matchMedia('(pointer: fine)').matches) return () => {};

  lenis = new Lenis({ lerp: 0.08 });
  lenis.on('scroll', ScrollTrigger.update);

  const tick = (time) => lenis.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(tick);
    lenis.destroy();
    lenis = null;
  };
}

/** Attaches the standard section reveal to a ref. No-op under reduced motion. */
export function useReveal() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || reduceMotion()) return; // content already visible — nothing to hide

    const ctx = gsap.context(() => {
      gsap.from(el, {
        y: 28,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
}
