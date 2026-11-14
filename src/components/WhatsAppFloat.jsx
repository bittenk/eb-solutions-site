import React from 'react';
import { WhatsAppIcon } from './BrandLogo';
import { CONTACT_INFO, buildWhatsAppUrl } from '../data/servicesData';

export default function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Fale comigo no WhatsApp ${CONTACT_INFO.whatsappDisplay}`}
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
    >
      {/* Hover Tooltip */}
      <span className="hidden sm:inline-flex flex-col items-end px-3.5 py-2 rounded-xl glass-panel border border-emerald-400/35 shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
        <span className="text-[11px] font-semibold text-emerald-400">Fale comigo no WhatsApp</span>
        <span className="text-xs font-bold text-white">{CONTACT_INFO.whatsappDisplay}</span>
      </span>

      {/* Magnetic Floating Button */}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-[0_10px_30px_rgba(16,185,129,0.55)] group-hover:scale-110 transition-transform duration-300 border border-white/25">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30" />
        <WhatsAppIcon className="w-7 h-7 relative z-10" />
      </span>
    </a>
  );
}
