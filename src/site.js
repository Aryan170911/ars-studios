/**
 * Site-wide constants.
 *
 * TODO (plan.md §6.3 — "Add Your Real Assets"):
 * Replace the WhatsApp number below with your real number (country code + number,
 * no +, no spaces). The current value mirrors the placeholder shown in the Stitch
 * export's footer: +91 98765 43210.
 */
export const WHATSAPP_NUMBER = '919876543210';
export const PHONE_DISPLAY = '+91 98765 43210';
export const EMAIL = 'contact@arsstudios.in';

/** Builds a wa.me deep link with a pre-filled Hinglish/English message. */
export function wa(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Pre-filled messages shared across sections (from the Stitch export copy). */
export const MSG = {
  hero: 'Namaste ARS Studios, mujhe apne business ke liye free demo chahiye',
  nav: 'Namaste ARS Studios, mujhe free demo ke liye baat karni hai',
  footer: 'Namaste, mujhe ARS Studios se free demo ke liye baat karni hai',
};
