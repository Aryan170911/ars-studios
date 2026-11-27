import { useReveal } from '../motion.js';

const PROJECTS = [
  {
    img: '/assets/work-coaching.jpg',
    alt: 'Editorial mobile app interface design mockup for a premier coaching institute in Patna',
    locality: 'Bazar Samiti',
    title: 'Patna Coaching Institute',
    body: 'Batch timings, topper results, syllabus download, and 1-tap WhatsApp admission inquiry.',
    tags: ['Mobile Website', 'WhatsApp Leads', 'Education'],
  },
  {
    img: '/assets/work-clinic.jpg',
    alt: 'Clean clinical mobile healthcare landing page for dental and medical practice in Boring Road Patna',
    locality: 'Boring Road',
    title: 'Dental & Health Clinic',
    body: 'Doctor credentials, morning/evening OPD timings, Google Maps directions, and instant WhatsApp booking.',
    tags: ['Web Design', 'Google Maps', 'Healthcare'],
  },
  {
    img: '/assets/work-gym.jpg',
    alt: 'Bold fitness gym landing page UI on smartphone screen for modern workout studio in Kankarbagh Patna',
    locality: 'Kankarbagh',
    title: 'Local Gym & Fitness Club',
    body: 'Membership plans, batch slots, trainer showcase, and 1-day free trial request on WhatsApp.',
    tags: ['Landing Page', 'Reels Ready', 'Fitness'],
  },
];

/**
 * Big editorial sample demos — plan.md §3 Section 4.
 * 2-col asymmetric showcase on desktop (first frame spans wider), 16:10 frames
 * with a 1.03 hover zoom inside rounded-2xl overflow-hidden containers.
 */
export default function SampleWork() {
  const revealRef = useReveal();

  return (
    <section id="work" className="scroll-mt-20 bg-bg-main">
      <div ref={revealRef} className="container-x py-space-xl md:py-space-3xl">
        <div className="mb-space-md">
          <span className="text-label-sm-mobile font-semibold uppercase tracking-wider text-accent-primary md:text-label-sm">
            Portfolio
          </span>
          <h2 className="mt-1 font-display text-headline-lg-mobile font-bold text-ink-primary md:text-headline-lg">
            Recent Work in Patna
          </h2>
          <p className="mt-1 text-body-base text-ink-muted">
            Real business interfaces designed with high conversion clarity.
          </p>
        </div>

        <div className="grid gap-space-md md:grid-cols-2 md:gap-gutter">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className={
                i === 0
                  ? 'min-w-0 rounded-2xl border border-hairline bg-bg-surface p-space-md shadow-sm md:col-span-2 md:flex md:gap-gutter md:p-space-lg'
                  : 'min-w-0 rounded-2xl border border-hairline bg-bg-surface p-space-md shadow-sm'
              }
            >
              <div
                className={
                  i === 0
                    ? 'relative mb-3 aspect-[16/10] w-full shrink-0 overflow-hidden rounded-xl bg-ink-primary md:mb-0 md:aspect-[16/10] md:w-1/2'
                    : 'relative mb-3 aspect-[16/10] w-full overflow-hidden rounded-xl bg-ink-primary'
                }
              >
                <img
                  src={p.img}
                  alt={p.alt}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
                />
                <span className="absolute right-2.5 top-2.5 rounded-full bg-bg-main/90 px-2.5 py-1 text-[11px] font-semibold text-ink-primary shadow-sm backdrop-blur-md">
                  {p.locality}
                </span>
              </div>

              <div className={i === 0 ? 'md:flex md:flex-col md:justify-center' : ''}>
                <h3 className="font-display text-headline-md-mobile font-bold text-ink-primary md:text-headline-md">
                  {p.title}
                </h3>
                <p className="mt-1 text-body-base text-ink-secondary">{p.body}</p>
                <div className="mt-3 flex flex-wrap items-center gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="whitespace-nowrap rounded-full border border-hairline bg-bg-main px-2.5 py-1 text-[11px] font-medium text-ink-secondary shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
