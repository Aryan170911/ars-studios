/**
 * Site-wide contact details.
 * WHATSAPP_NUMBER: country code + number, no + or spaces (all wa.me CTAs build from it).
 */
export const WHATSAPP_NUMBER = '917091241322';
export const PHONE_DISPLAY = '+91 70912 41322';
export const EMAIL = 'aryankumar.170911@gmail.com';

/** Resolves a public/ asset against Vite's base — works on GH Pages subpaths too. */
export const asset = (file) => `${import.meta.env.BASE_URL}${file}`;

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
