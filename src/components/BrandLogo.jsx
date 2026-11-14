import React from 'react';

export function BrandLogo({ compact = false, className = '' }) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Monogram EB SVG */}
      <svg
        viewBox="0 0 88 64"
        className={compact ? 'h-9 w-auto' : 'h-11 w-auto'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ebBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="55%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <filter id="ebGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Stylized E bars */}
        <path
          d="M4 10H40L34 20H4V10Z"
          fill="url(#ebBlueGrad)"
          filter="url(#ebGlow)"
        />
        <path d="M6 27H37L31 37H6V27Z" fill="url(#ebBlueGrad)" />
        <path d="M4 44H40L34 54H4V44Z" fill="url(#ebBlueGrad)" />

        {/* Stylized B */}
        <path
          d="M43 10H64C73.5 10 79.5 14.6 79.5 21.5C79.5 26.1 76.7 29.5 72.4 31.1C77.7 32.7 81 36.6 81 42C81 49.7 74.4 54 64.5 54H43V44H62.8C66.6 44 69 42.4 69 39.7C69 37 66.6 35.4 62.8 35.4H47V26.4H61.2C64.6 26.4 66.8 24.9 66.8 22.3C66.8 19.8 64.6 18.4 61.2 18.4H43V10Z"
          fill="#FFFFFF"
        />
      </svg>

      {/* Vertical Glowing Divider */}
      <div className="h-9 w-[2px] rounded-full bg-gradient-to-b from-[#38BDF8] via-[#2563EB] to-transparent shadow-[0_0_10px_#38BDF8]" />

      {/* Brand Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="font-display font-extrabold tracking-tight text-white text-sm sm:text-base">
          ERICK
        </span>
        <span className="font-display font-black tracking-tight text-[#2563EB] text-sm sm:text-base drop-shadow-[0_0_12px_rgba(37,99,235,0.45)]">
          BITTENCOURT
        </span>
        {!compact && (
          <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.16em] text-[#E5E7EB]/80 uppercase mt-1">
            Gestor de Tráfego &amp; Presença Digital
          </span>
        )}
      </div>
    </div>
  );
}

export function InstagramColorIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="igGrad" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#igGrad)" />
      <rect x="6.5" y="6.5" width="11" height="11" rx="3.2" stroke="white" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="2.6" stroke="white" strokeWidth="1.8" />
      <circle cx="15.6" cy="8.4" r="1" fill="white" />
    </svg>
  );
}

export function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.98 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
    </svg>
  );
}
