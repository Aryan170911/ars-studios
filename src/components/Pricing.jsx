import { useState } from 'react';
import Icon from './Icon.jsx';
import { useReveal } from '../motion.js';
import { wa } from '../site.js';

const ONETIME = [
  {
    tier: 'Starter',
    price: '₹2,500',
    suffix: 'one-time',
    body: 'Perfect for local services wanting an authoritative web link for bio and Google Maps.',
    features: [
      '1-page high-speed mobile website',
      'Direct WhatsApp lead capture button',
      'Google Maps location embed',
      '48-hr launch & ₹0 monthly hosting',
    ],
    cta: 'Book Starter Demo',
    href: wa('Hi ARS Studios, I want to book the Starter Demo for ₹2500'),
    style: 'soft',
    featured: false,
  },
  {
    tier: 'Growth Bundle',
    flag: 'MOST POPULAR',
    chip: 'Complete Setup',
    price: '₹4,000',
    suffix: 'one-time',
    body: 'The standard choice for institutes and clinics demanding full Google Maps visibility.',
    features: [
      { text: 'Everything in Starter included', strong: true },
      'Full Google Business Profile setup & SEO',
      'WhatsApp Business auto-reply & catalog setup',
      'Custom lead-tracking smart link',
    ],
    cta: 'Start Growth Bundle',
    href: wa('Hi ARS Studios, I am interested in the Growth Bundle for ₹4000'),
    style: 'solid',
    featured: true,
  },
  {
    tier: 'Full Brand & Multi-Page',
    price: '₹7,500',
    suffix: 'one-time',
    body: 'For multi-branch centers, syllabus downloads, test schedules & custom branding.',
    features: [
      { text: 'All Growth Bundle features', strong: true },
      'Up to 5 custom branded sections/pages',
      'PDF brochure / syllabus download capture',
      'Speed-audited 100/100 Core Web Vitals',
    ],
    cta: 'Enquire for Brand Setup',
    href: wa('Hi ARS Studios, I want to discuss the Multi-Page Brand Setup for ₹7500'),
    style: 'neutral',
    featured: false,
  },
];

const MONTHLY = [
  {
    tier: 'Basic Care',
    price: '₹1,000',
    suffix: '/ month',
    body: 'Essential local maintenance & schedule sync for single clinics and shops.',
    features: [
      '2 Google Business Profile updates & photo posts / month',
      'Timely OPD, batch timing & holiday notice updates',
      'Google Maps review reply assistance & rating monitoring',
      'Cloudflare zero-cost hosting maintenance & SSL check',
      'WhatsApp support with 48-hr turnaround',
    ],
    cta: 'Start Basic Care',
    href: wa('Hi ARS Studios, I want to subscribe to Basic Care Retainer (₹1000/mo)'),
    style: 'soft',
    featured: false,
  },
  {
    tier: 'Growth + Reels Partner',
    flag: 'RECOMMENDED',
    chip: 'Studio Tier',
    price: '₹2,500',
    suffix: '/ month',
    body: 'High-engagement video & local SEO push for coaching centers & doctors.',
    features: [
      { text: '4 high-converting edited Reels / Shorts per month (captions & hooks)', strong: true },
      'Weekly Google Maps SEO & local keyword ranking push',
      'Unlimited website copy, banner & schedule edits',
      'WhatsApp Business catalog & direct booking link updates',
      'Same-day priority WhatsApp support desk',
    ],
    cta: 'Choose Reels Partner',
    href: wa('Hi ARS Studios, I am interested in Growth + Reels Partner (₹2500/mo)'),
    style: 'solid',
    featured: true,
  },
  {
    tier: 'Studio Partner',
    price: '₹5,000',
    suffix: '/ month',
    body: 'Complete end-to-end digital growth & video production partner.',
    features: [
      { text: '8-10 professionally edited Reels / Shorts per month', strong: true },
      'Local Meta / Instagram ad campaign setup & creative refreshes',
      'Dedicated on-site Patna photo/video shoot coordination',
      'Monthly local lead & conversion performance report',
      'Direct 1-on-1 WhatsApp & in-person Patna desk support',
    ],
    cta: 'Talk to Account Lead',
    href: wa('Hi ARS Studios, I want to partner on the Studio Partner Plan (₹5000/mo)'),
    style: 'neutral',
    featured: false,
  },
];

const CTA_CLASSES = {
  soft: 'bg-accent-soft-bg text-accent-primary hover:bg-accent-primary hover:text-on-primary',
  solid:
    'bg-accent-primary text-on-primary shadow-[0_4px_14px_rgba(15,118,110,0.3)] hover:bg-accent-hover',
  neutral: 'bg-surface-container text-ink-primary hover:bg-surface-container-high',
};

function PlanCard({ plan }) {
  return (
    <div
      className={`relative flex min-h-[380px] min-w-0 flex-col justify-between rounded-2xl bg-bg-main p-space-lg shadow-sm ${
        plan.featured ? 'border-2 border-accent-primary' : 'border border-hairline'
      }`}
    >
      {plan.flag && (
        <div className="absolute -top-3 left-6">
          <span className="rounded-full bg-badge-amber-bg px-3 py-1 text-label-sm-mobile font-semibold text-badge-amber-text shadow-sm">
            {plan.flag}
          </span>
        </div>
      )}

      <div>
        <div className="flex items-center justify-between gap-2">
          <span
            className={`text-label-sm-mobile font-semibold uppercase tracking-wider ${
              plan.featured ? 'text-accent-primary' : 'text-ink-muted'
            }`}
          >
            {plan.tier}
          </span>
          {plan.chip && (
            <span className="rounded-full bg-accent-soft-bg px-2 py-0.5 text-[11px] font-semibold text-accent-primary">
              {plan.chip}
            </span>
          )}
        </div>

        <div className="mt-1.5 flex items-baseline gap-1">
          <span className="font-display text-numeral-display-mobile font-extrabold tracking-tight text-ink-primary md:text-numeral-display">
            {plan.price}
          </span>
          <span className="text-label-sm-mobile text-ink-muted md:text-label-sm">{plan.suffix}</span>
        </div>

        <p className="mt-2 text-body-base text-ink-secondary">{plan.body}</p>

        <ul className="mt-4 flex flex-col gap-2.5 text-label-sm text-ink-secondary">
          {plan.features.map((f) => {
            const item = typeof f === 'string' ? { text: f } : f;
            return (
              <li
                key={item.text}
                className={`flex items-start gap-2 ${item.strong ? 'font-semibold text-ink-primary' : ''}`}
              >
                <Icon
                  name={item.strong ? 'verified' : 'checkCircle'}
                  className="mt-0.5 h-[18px] w-[18px] shrink-0 text-accent-primary"
                />
                <span>{item.text}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-space-lg">
        <a
          href={plan.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex h-12 min-h-12 w-full items-center justify-center rounded-full px-4 text-label-md font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.99] ${CTA_CLASSES[plan.style]}`}
        >
          {plan.cta}
        </a>
      </div>
    </div>
  );
}

/**
 * Transparent pricing — plan.md §3 Section 5.
 * Segmented One-time / Monthly switcher (from the Stitch export) with a
 * 260ms glide-in deck swap; max one amber badge per card, featured cards only.
 */
export default function Pricing() {
  const [tab, setTab] = useState('onetime');
  const revealRef = useReveal();

  const plans = tab === 'onetime' ? ONETIME : MONTHLY;

  return (
    <section id="pricing" className="scroll-mt-20 bg-bg-surface">
      <div ref={revealRef} className="container-x py-space-xl md:py-space-3xl">
        <div className="mb-space-md">
          <span className="text-label-sm-mobile font-semibold uppercase tracking-wider text-accent-primary md:text-label-sm">
            No Surprises
          </span>
          <h2 className="mt-1 max-w-[20ch] font-display text-headline-lg-mobile font-bold text-ink-primary md:text-headline-lg">
            Seedha Pricing, Koi Hidden Charges Nahi
          </h2>
          <p className="mt-1 text-body-base text-ink-secondary">
            Clear one-time setup with zero recurring platform lock-ins.
          </p>
        </div>

        {/* Segmented switcher */}
        <div className="mb-space-lg flex justify-center">
          <div
            role="tablist"
            aria-label="Pricing plan type"
            className="inline-flex rounded-full border border-hairline bg-surface-container p-1 shadow-sm"
          >
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'onetime'}
              onClick={() => setTab('onetime')}
              className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 text-label-sm-mobile font-semibold transition-all duration-200 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary md:text-label-sm ${
                tab === 'onetime'
                  ? 'bg-ink-primary text-on-primary shadow-sm'
                  : 'text-ink-muted hover:text-ink-primary'
              }`}
            >
              One-time Setup
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'monthly'}
              onClick={() => setTab('monthly')}
              className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 text-label-sm-mobile font-semibold transition-all duration-200 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary md:text-label-sm ${
                tab === 'monthly'
                  ? 'bg-ink-primary text-on-primary shadow-sm'
                  : 'text-ink-muted hover:text-ink-primary'
              }`}
            >
              Monthly Retainer
              <span className="rounded-full bg-badge-amber-bg px-1.5 py-0.5 text-[10px] font-bold leading-none text-badge-amber-text">
                Care
              </span>
            </button>
          </div>
        </div>

        <div
          key={tab}
          role="tabpanel"
          className="deck-enter grid gap-space-md md:grid-cols-3 md:gap-gutter"
        >
          {plans.map((p) => (
            <PlanCard key={p.tier} plan={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
