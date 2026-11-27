import Icon from './Icon.jsx';
import { useReveal } from '../motion.js';

const TESTIMONIALS = [
  {
    badge: '85+ Inquiries via WhatsApp',
    quote:
      'Humare 2025-26 batch ke 85+ WhatsApp inquiries pehle 3 hafte mein live website se convert huye. Fast 4G speed aur Google Maps pin se students ko direct center visit karna asaan ho gaya.',
    name: 'Er. R.K. Verma',
    role: 'Director, Apex JEE & NEET Academy',
    initials: 'RV',
    locality: 'Bazar Samiti',
  },
  {
    badge: '48-Hr Launch & Zero Hassle',
    quote:
      'Website preview 24 ghante mein ready mil gaya tha. Fees aur schedule sync hone se daily calls par repetitive baatein samjhane ki zaroorat nahi padti.',
    name: 'Dr. Priya Sahay',
    role: 'Founder, Boring Road Commerce Hub',
    initials: 'PS',
    locality: 'Boring Road',
  },
  {
    badge: '#1 Local Maps Rank',
    quote:
      'Google Maps setup aur clean mobile page ne local ranking mein humein Boring Road aur Kankarbagh mein #1 spot par la diya. Patna ke liye best digital studio.',
    name: 'Alok Kumar',
    role: 'Head Coach, Target Defense & NDA Prep',
    initials: 'AK',
    locality: 'Kankarbagh',
  },
];

/** Client stories — hairline-framed cards with amber-free teal outcome pills. */
export default function Testimonials() {
  const revealRef = useReveal();

  return (
    <section className="bg-bg-main">
      <div ref={revealRef} className="container-x py-space-xl md:py-space-3xl">
        <div className="mb-space-md">
          <span className="text-label-sm-mobile font-semibold uppercase tracking-wider text-accent-primary md:text-label-sm">
            Client Stories
          </span>
          <h2 className="mt-1 max-w-[22ch] font-display text-headline-lg-mobile font-bold text-ink-primary md:text-headline-lg">
            Patna Institutes &amp; Educators Trust ARS Studios
          </h2>
          <p className="mt-1 text-body-base text-ink-secondary">
            Real outcomes from Bazar Samiti to Boring Road coaching hubs.
          </p>
        </div>

        <div className="grid gap-space-md md:grid-cols-3 md:gap-gutter">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex min-w-0 flex-col justify-between rounded-2xl border border-hairline bg-bg-surface p-space-md shadow-sm"
            >
              <div>
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2 gap-y-1.5">
                  <div className="flex items-center gap-1 text-badge-amber-text" aria-label="5 out of 5 stars">
                    {[0, 1, 2, 3, 4].map((n) => (
                      <Icon key={n} name="star" className="h-[18px] w-[18px]" />
                    ))}
                  </div>
                  <span className="whitespace-nowrap rounded-full bg-accent-soft-bg px-2.5 py-0.5 text-[11px] font-semibold text-accent-primary">
                    {t.badge}
                  </span>
                </div>
                <blockquote className="text-body-base leading-relaxed text-ink-primary">
                  “{t.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-4 flex items-center justify-between gap-2 border-t border-hairline pt-3">
                <div className="flex min-w-0 items-center gap-2.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft-bg text-[14px] font-bold text-accent-primary">
                    {t.initials}
                  </span>
                  <div className="min-w-0">
                    <div className="truncate text-label-md font-bold text-ink-primary">{t.name}</div>
                    <div className="block text-[12px] leading-snug text-ink-muted">{t.role}</div>
                  </div>
                </div>
                <span className="shrink-0 whitespace-nowrap rounded-full border border-hairline bg-bg-main px-2.5 py-1 text-[11px] font-medium leading-none text-ink-secondary">
                  {t.locality}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
