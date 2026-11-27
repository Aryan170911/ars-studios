import Icon from './Icon.jsx';
import { useReveal } from '../motion.js';
import { wa, MSG, PHONE_DISPLAY, EMAIL } from '../site.js';

/** Bold midnight-navy "Let's Talk" footer band — plan.md §3 Section 7. */
export default function Footer() {
  const revealRef = useReveal();

  return (
    <footer className="bg-ink-primary text-on-primary">
      <div ref={revealRef} className="container-x py-space-xl md:py-space-2xl">
        <div className="flex flex-col gap-space-md">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-primary text-on-primary">
            <Icon name="rocket" className="h-7 w-7" />
          </span>

          <h2 className="max-w-[16ch] font-display text-display-mobile font-bold leading-tight tracking-tight text-on-primary md:text-headline-lg">
            Let's Talk — Apne Business ka Free Demo Banwaiye
          </h2>

          <p className="max-w-[58ch] text-body-base text-slate-300">
            Apne coaching, clinic, ya showroom ka details bhejiye. Hum kal tak aapko live demo
            ready karke denge.
          </p>

          <div className="flex flex-col gap-space-sm pt-2">
            <a
              href={wa(MSG.footer)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 min-h-12 w-full items-center justify-center gap-2 rounded-full bg-cta-whatsapp px-6 text-label-md font-semibold text-on-primary shadow-[0_4px_16px_rgba(21,128,61,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-cta-whatsapp-hover hover:shadow-[0_8px_20px_rgba(21,128,61,0.35)] active:scale-[0.99] sm:w-auto"
            >
              <Icon name="chat" className="h-5 w-5" />
              Chat on WhatsApp Now
            </a>

            <div className="flex flex-col gap-2 pt-2 text-label-sm-mobile text-slate-300 sm:flex-row sm:gap-6 md:text-label-sm">
              <a
                href={`tel:${PHONE_DISPLAY.replace(/\s/g, '')}`}
                className="flex items-center gap-2 transition-colors hover:text-on-primary"
              >
                <Icon name="phone" className="h-[18px] w-[18px] text-accent-soft-bg" />
                {PHONE_DISPLAY} (Direct Studio Desk)
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 transition-colors hover:text-on-primary"
              >
                <Icon name="mail" className="h-[18px] w-[18px] text-accent-soft-bg" />
                {EMAIL}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-slate-700/50 pt-space-md">
            <span className="text-label-sm-mobile font-semibold uppercase tracking-widest text-inverse-primary md:text-label-sm">
              ARS Studios • Khemnichak, Patna, Bihar
            </span>
            <span className="text-[12px] text-slate-400">
              Boring Road • Kankarbagh • Bazar Samiti • Bailey Road
            </span>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-space-xl flex flex-col gap-space-sm border-t border-slate-700/50 pt-space-md sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display text-headline-md-mobile text-bg-main">ARS Studios</span>
          <p className="max-w-[46ch] text-label-sm text-secondary-fixed-dim">
            Crafting authoritative digital products and conversion architectures with calm
            editorial precision.
          </p>
          <div className="flex items-center gap-4 text-[12px] text-slate-400">
            <span>© 2025 ARS Studios</span>
            <a href="#top" className="transition-colors hover:text-bg-main">
              Privacy &amp; Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
