import Icon from './Icon.jsx';
import { useReveal } from '../motion.js';

const CAPABILITIES = [
  {
    icon: 'monitor',
    title: '1. Mobile-First Websites',
    body: 'Fast 1-page and multi-section sites tuned for Indian 4G phones with instant WhatsApp inquiry buttons and ₹0 monthly hosting.',
  },
  {
    icon: 'pin',
    title: '2. Google Business Profile & Local SEO',
    body: 'Complete Google Maps cleanup — categories, photos, timings, and review links — so nearby Patna customers call you first.',
  },
  {
    icon: 'robot',
    title: '3. WhatsApp Business Lead Systems',
    body: 'Automated welcome replies, service catalogs, and direct inquiry links so zero leads slip through your fingers.',
  },
  {
    icon: 'film',
    title: '4. Short-Form Reels Editing',
    body: 'Crisp Instagram Reels and YouTube Shorts cut on our studio workstation for educators, clinics, and fitness trainers.',
  },
];

/**
 * Clay-style capabilities: asymmetric 2-column split — sticky section title
 * on the left 4 cols, hairline-divided rows on the right 8 cols (plan.md §3 Section 3).
 */
export default function Capabilities() {
  const revealRef = useReveal();

  return (
    <section id="services" className="scroll-mt-20 bg-bg-main">
      <div ref={revealRef} className="container-x py-space-xl md:py-space-3xl">
        <div className="grid gap-space-lg md:grid-cols-12 md:gap-x-gutter">
          <div className="md:col-span-4 md:sticky md:top-24 md:self-start">
            <span className="text-label-sm-mobile font-semibold uppercase tracking-wider text-accent-primary md:text-label-sm">
              Hamari Services
            </span>
            <h2 className="mt-1 font-display text-headline-lg-mobile font-bold text-ink-primary md:text-headline-lg">
              Capabilities
            </h2>
          </div>

          <div className="md:col-span-8">
            <div className="flex flex-col">
              {CAPABILITIES.map((c, i) => (
                <div key={c.title}>
                  {i > 0 && <div className="h-px w-full bg-hairline" />}
                  <div className="group rounded-xl px-2 py-space-md transition-colors hover:bg-bg-surface">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-headline-md-mobile font-semibold text-ink-primary md:text-headline-md">
                        {c.title}
                      </h3>
                      <Icon
                        name={c.icon}
                        className="h-5 w-5 shrink-0 text-accent-primary transition-transform duration-300 group-hover:-translate-y-0.5"
                      />
                    </div>
                    <p className="mt-1.5 text-body-base text-ink-secondary">{c.body}</p>
                  </div>
                </div>
              ))}
              <div className="h-px w-full bg-hairline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
