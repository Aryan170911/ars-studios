import Icon from './Icon.jsx';
import { scrollToTarget } from '../motion.js';
import { wa, MSG } from '../site.js';

const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

/** Minimal sticky white navbar — plan.md §3 Section 1. */
export default function Navbar() {
  const go = (e, href) => {
    e.preventDefault();
    scrollToTarget(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-bg-main/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          onClick={(e) => go(e, '#top')}
          aria-label="ARS Studios — home"
          className="shrink-0"
        >
          <img
            src="/assets/ars-studios-logo.png"
            alt="ARS Studios"
            className="h-[34px] w-auto mix-blend-multiply md:h-[42px]"
            width="480"
            height="268"
          />
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => go(e, l.href)}
                  className="text-label-md text-ink-muted transition-colors hover:text-accent-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={wa(MSG.nav)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-full bg-cta-whatsapp px-4 text-label-sm font-semibold text-on-primary shadow-[0_2px_8px_rgba(21,128,61,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-cta-whatsapp-hover hover:shadow-[0_8px_16px_rgba(21,128,61,0.2)] active:scale-[0.98] md:h-11 md:text-label-md"
        >
          <Icon name="chat" className="h-4 w-4" />
          <span>
            WhatsApp<span className="hidden sm:inline"> Us</span>
          </span>
        </a>
      </div>
    </header>
  );
}
