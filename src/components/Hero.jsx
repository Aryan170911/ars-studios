import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Icon from './Icon.jsx';
import { reduceMotion } from '../motion.js';
import { wa, MSG } from '../site.js';

const HEADLINE = 'Apne Business ko Online Laaiye — Fast Websites & Google Maps Setup in Patna.';

/**
 * Oversized editorial hero — plan.md §3 Section 2.
 * Headline uses a masked line reveal: words slide up y:36 → 0 inside
 * overflow-hidden masks, staggered, power3.out, 0.85s, once on mount.
 * Under prefers-reduced-motion the headline is simply visible.
 */
export default function Hero() {
  const headlineRef = useRef(null);

  useLayoutEffect(() => {
    if (reduceMotion() || !headlineRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.hero-word', {
        y: 36,
        opacity: 0,
        duration: 0.85,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.1,
      });
    }, headlineRef);
    return () => ctx.revert();
  }, []);

  const words = HEADLINE.split(' ');

  return (
    <section id="top" className="container-x flex flex-col pb-space-xl pt-space-xl md:pt-space-2xl">
      {/* Micro-line: exactly one amber badge in this viewport (design.md rule) */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center rounded-full bg-badge-amber-bg px-3 py-1 text-label-sm-mobile font-semibold text-badge-amber-text md:text-label-sm">
          Starting @ ₹2,500
        </span>
        <span className="text-label-sm-mobile text-ink-muted md:text-label-sm">
          Patna Digital Studio • 48-Hr Launch
        </span>
      </div>

      {/* Masked line reveal */}
      <h1
        ref={headlineRef}
        className="mt-space-sm max-w-[18ch] font-display text-display-mobile font-extrabold tracking-tight text-ink-primary md:max-w-[15ch] md:text-display"
      >
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="mr-[0.28em] inline-block overflow-hidden align-bottom"
          >
            <span className="hero-word inline-block will-change-transform">{word}</span>
          </span>
        ))}
      </h1>

      <p className="mt-space-sm max-w-[58ch] text-body-base leading-relaxed text-ink-secondary md:text-body-lg">
        Clean mobile websites, Google Business Profile optimization, and WhatsApp lead systems
        built for Patna's coaching institutes, clinics, and local businesses. Pehle live preview
        dekhiye, phir pay kijiye.
      </p>

      <div className="mt-space-lg flex flex-col gap-space-sm sm:flex-row sm:items-center">
        <a
          href={wa(MSG.hero)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 min-h-12 w-full items-center justify-center gap-2 rounded-full bg-cta-whatsapp px-6 text-label-md font-semibold text-on-primary shadow-[0_4px_16px_rgba(21,128,61,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-cta-whatsapp-hover hover:shadow-[0_8px_16px_rgba(21,128,61,0.2)] active:scale-[0.99] sm:w-auto"
        >
          <Icon name="chat" className="h-5 w-5" />
          Get Free Demo on WhatsApp
        </a>
        <a
          href="#work"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#work')?.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth' });
          }}
          className="group inline-flex h-12 items-center justify-center gap-1 px-2 text-label-md font-medium text-accent-primary transition-colors hover:text-accent-hover"
        >
          Explore Sample Work
          <Icon
            name="arrowRight"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>

      {/* Full-width 16:9 showcase strip (plan.md §3 Section 2) */}
      <div className="mt-space-lg rounded-2xl border border-hairline bg-bg-surface p-2.5 shadow-sm">
        <div className="relative flex aspect-[16/9] flex-col justify-between overflow-hidden rounded-xl bg-ink-primary p-4 text-on-primary md:p-6">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="text-label-sm-mobile font-semibold uppercase tracking-wider text-inverse-primary md:text-label-sm">
                Patna Live Preview
              </span>
            </div>
            <span className="text-label-sm-mobile text-slate-300 md:text-label-sm">
              4G Optimized (1.4s)
            </span>
          </div>

          <div>
            <span className="mb-1 block text-[11px] font-medium uppercase tracking-widest text-emerald-300">
              Shiksha Academy • Bazar Samiti
            </span>
            <p className="max-w-[24ch] font-display text-headline-md-mobile font-bold leading-tight text-on-primary md:text-headline-lg">
              Target JEE / NEET 2026 Batch Admissions Open
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1 rounded-full bg-cta-whatsapp/90 px-2.5 py-1 text-[11px] font-medium">
                <Icon name="send" className="h-3 w-3" />
                WhatsApp Desk Ready
              </span>
              <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-slate-200">
                Bazar Samiti, Patna
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
