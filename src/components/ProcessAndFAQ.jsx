import { useState } from 'react';
import Icon from './Icon.jsx';
import { useReveal } from '../motion.js';

const STEPS = [
  {
    num: '01',
    title: 'Free Mobile Preview',
    body: 'Share your logo, photos, and services on WhatsApp. We draft your site within 24 hours.',
  },
  {
    num: '02',
    title: '48-Hour Customization',
    body: 'We polish content, configure direct WhatsApp links, and sync Google Business Profile.',
  },
  {
    num: '03',
    title: 'Launch & Pay via UPI',
    body: 'Your site goes live under your own domain name. You pay only after seeing it work live.',
  },
];

const FAQS = [
  {
    q: 'Kya har mahine hosting ka paisa dena padega?',
    a: 'Nahi, bilkul nahi! Hum ultra-fast modern infrastructure (Cloudflare Pages) use karte hain jisme monthly hosting charge ₹0 hota hai. Lifetime free fast hosting milti hai.',
  },
  {
    q: 'One-time Setup aur Monthly Retainer mein kya farak hai?',
    a: 'One-time Setup (₹2,500 – ₹4,000) mein hum aapki complete website, WhatsApp integration, aur Google Maps profile ready karke live deploy karte hain — iske baad koi monthly mandatory charge nahi hota. Monthly Retainer (₹1,000 – ₹5,000/mo) un businesses ke liye optional care plan hai jinhe lagatar schedule changes, Google Maps posts, weekly review handling, ya monthly 4–8 edited Reels chahiye taaki local competition mein hamesha aage rahein.',
  },
  {
    q: 'Domain name (.in / .com) ka kitna kharcha aata hai?',
    a: 'Domain (.in ya .com) ka normal renewal charge lagbhag ₹600 se ₹900 prati varsh hota hai. Domain seedha aapke khud ke name aur account se book karwaya jaata hai taaki full ownership aapke paas rahe.',
  },
  {
    q: 'Payment kab aur kaise karna hoga?',
    a: 'Pehle hum aapko live phone preview link bhejenge bina kisi charge ke. Pasandeedah hone par 50% advance UPI dwara, aur baki 50% site aapke live domain par deploy hone ke baad transfer karna hai.',
  },
  {
    q: 'Kya aap Patna mein milkar discuss kar sakte hain?',
    a: 'Haan, bilkul! Hamara studio Patna mein hai. Boring Road, Kankarbagh, Bazar Samiti, ya Bailey Road par in-person meeting schedule kar sakte hain, ya WhatsApp audio/screen-share call par 10 minute mein finalize kar sakte hain.',
  },
  {
    q: 'Kya website mobile aur 4G par fast chalegi?',
    a: 'Haan, 100%. Hum heavy WordPress plugins use nahi karte. Hand-tuned lightweight static code use hota hai jo kisi bhi regular Jio/Airtel 4G phone par 2 second ke andar instant open hota hai.',
  },
];

/** Single-open accordion: grid-template-rows 0fr → 1fr, + rotates 45° to ×. */
function FaqItem({ item, open, onToggle, id }) {
  return (
    <div className="border-b border-hairline">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-trigger`}
          onClick={onToggle}
          className="flex min-h-11 w-full items-center justify-between gap-space-sm py-space-md text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-primary"
        >
          <span className="text-label-md text-ink-primary md:text-[18px]">{item.q}</span>
          <Icon
            name="plus"
            className={`h-6 w-6 shrink-0 transition-transform duration-300 ease-out ${
              open ? 'rotate-45 text-accent-primary' : 'text-accent-primary'
            }`}
          />
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-space-md pr-8 text-body-base leading-relaxed text-ink-secondary">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Zero-risk 3-step process + Clay-style hairline FAQ accordion —
 * plan.md §3 Section 6. Keyboard accessible, single-open rhythm.
 */
export default function ProcessAndFAQ() {
  const [openId, setOpenId] = useState(0);
  const revealRef = useReveal();

  return (
    <section id="faq" className="scroll-mt-20 bg-bg-main">
      <div ref={revealRef} className="container-x py-space-xl md:py-space-3xl">
        {/* 3-step strip */}
        <div className="mb-space-md">
          <span className="text-label-sm-mobile font-semibold uppercase tracking-wider text-accent-primary md:text-label-sm">
            Simple Flow
          </span>
          <h2 className="mt-1 font-display text-headline-lg-mobile font-bold text-ink-primary md:text-headline-lg">
            3-Step Process
          </h2>
          <p className="mt-1 text-body-base text-ink-secondary">
            Pehle live site dekhiye, phir pay kijiye.
          </p>
        </div>

        <div className="grid gap-space-sm md:grid-cols-3 md:gap-gutter">
          {STEPS.map((s) => (
            <div key={s.num} className="flex items-start gap-space-sm rounded-xl bg-bg-surface p-space-md">
              <span className="font-display text-headline-lg font-bold leading-none text-accent-primary">
                {s.num}
              </span>
              <div>
                <h3 className="font-display text-headline-md-mobile font-bold text-ink-primary md:text-headline-md">
                  {s.title}
                </h3>
                <p className="mt-0.5 text-body-base text-ink-secondary">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ accordion */}
        <div className="mt-space-xl">
          <h2 className="mb-space-md font-display text-headline-lg-mobile font-bold text-ink-primary md:text-headline-lg">
            Frequently Asked Questions
          </h2>
          <div className="border-t border-hairline">
            {FAQS.map((item, i) => (
              <FaqItem
                key={item.q}
                id={`faq-${i}`}
                item={item}
                open={openId === i}
                onToggle={() => setOpenId(openId === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
