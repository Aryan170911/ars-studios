import Icon from './Icon.jsx';
import { wa, MSG } from '../site.js';

/** Floating mobile-only WhatsApp quick-chat — plan.md §3 Section 7. */
export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-4 z-40 md:hidden">
      <a
        href={wa(MSG.nav)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp consultation"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-cta-whatsapp text-on-primary shadow-[0_4px_16px_rgba(21,128,61,0.35)] transition-transform duration-200 active:scale-95"
      >
        <Icon name="chat" className="h-6 w-6" />
      </a>
    </div>
  );
}
