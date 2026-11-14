import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { BrandLogo, WhatsAppIcon } from './BrandLogo';
import { SERVICES_DATA, buildWhatsAppUrl } from '../data/servicesData';
import { ServiceIcon3D } from './ServiceIllustrations3D';

export default function Navbar({ currentRoute, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const go = (route) => {
    setMobileOpen(false);
    setServicesDropdownOpen(false);
    onNavigate(route);
  };

  const isServicePage = currentRoute.startsWith('servico/');

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#38BDF8]/15 bg-[#0B1220]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => go('home')}
          className="text-left focus:outline-none group"
          aria-label="Ir para o início"
        >
          <BrandLogo />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <button
            onClick={() => go('home')}
            className={`text-sm font-medium transition-colors ${
              currentRoute === 'home'
                ? 'text-[#38BDF8] font-semibold'
                : 'text-[#E5E7EB]/85 hover:text-white'
            }`}
          >
            Início
          </button>

          <button
            onClick={() => go('quem-sou-eu')}
            className={`text-sm font-medium transition-colors ${
              currentRoute === 'quem-sou-eu'
                ? 'text-[#38BDF8] font-semibold'
                : 'text-[#E5E7EB]/85 hover:text-white'
            }`}
          >
            Quem Sou Eu
          </button>

          {/* Services Mega Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesDropdownOpen((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                isServicePage
                  ? 'text-[#38BDF8] font-semibold'
                  : 'text-[#E5E7EB]/85 hover:text-white'
              }`}
            >
              <span>Serviços</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesDropdownOpen ? 'rotate-180 text-[#38BDF8]' : ''
                }`}
              />
            </button>

            {servicesDropdownOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-[560px] glass-panel rounded-2xl p-4 shadow-[0_25px_70px_rgba(0,0,0,0.75)] border border-[#38BDF8]/25 animate-page-enter">
                <div className="flex items-center justify-between px-2 pb-3 mb-2 border-b border-white/10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#38BDF8]">
                    Soluções Digitais &amp; Físicas EB
                  </span>
                  <button
                    onClick={() => go('home#servicos')}
                    className="text-xs text-[#E5E7EB]/70 hover:text-white inline-flex items-center gap-1"
                  >
                    Ver todos <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {SERVICES_DATA.map((service) => (
                    <button
                      key={service.slug}
                      onClick={() => go(`servico/${service.slug}`)}
                      className={`flex items-start gap-3 p-2.5 rounded-xl text-left transition-all ${
                        currentRoute === `servico/${service.slug}`
                          ? 'bg-[#2563EB]/25 border border-[#38BDF8]/40'
                          : 'hover:bg-white/5 border border-transparent'
                      }`}
                    >
                      <div className="shrink-0 mt-0.5 scale-75 origin-top-left">
                        <ServiceIcon3D slug={service.slug} />
                      </div>
                      <div className="-ml-2">
                        <p className="font-display font-bold text-xs text-white">
                          {service.shortTitle}
                        </p>
                        <p className="text-[11px] text-[#E5E7EB]/65 line-clamp-2 mt-0.5">
                          {service.tagline}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => go('contato')}
            className="text-sm font-medium text-[#E5E7EB]/85 hover:text-white transition-colors"
          >
            Contato
          </button>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] hover:from-[#1D4ED8] hover:to-[#38BDF8] shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:shadow-[0_0_32px_rgba(56,189,248,0.65)] transition-all"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Avaliação Gratuita</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden p-2 rounded-xl text-[#E5E7EB] hover:bg-white/10 focus:outline-none"
          aria-label="Abrir menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#38BDF8]/15 bg-[#0B1220]/95 backdrop-blur-2xl px-4 pt-4 pb-6 space-y-4">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => go('home')}
              className={`px-3 py-2.5 rounded-xl text-left font-medium ${
                currentRoute === 'home'
                  ? 'bg-[#2563EB]/20 text-[#38BDF8] font-semibold'
                  : 'text-[#E5E7EB]'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => go('quem-sou-eu')}
              className={`px-3 py-2.5 rounded-xl text-left font-medium ${
                currentRoute === 'quem-sou-eu'
                  ? 'bg-[#2563EB]/20 text-[#38BDF8] font-semibold'
                  : 'text-[#E5E7EB]'
              }`}
            >
              Quem Sou Eu
            </button>
          </div>

          <div className="pt-2 border-t border-white/10">
            <p className="px-3 text-xs font-semibold uppercase tracking-wider text-[#38BDF8] mb-2">
              Nossos Serviços
            </p>
            <div className="grid grid-cols-1 gap-1.5">
              {SERVICES_DATA.map((service) => (
                <button
                  key={service.slug}
                  onClick={() => go(`servico/${service.slug}`)}
                  className={`px-3 py-2.5 rounded-xl text-left text-sm flex items-center justify-between ${
                    currentRoute === `servico/${service.slug}`
                      ? 'bg-[#2563EB]/25 text-white font-semibold border border-[#38BDF8]/30'
                      : 'text-[#E5E7EB]/85 hover:bg-white/5'
                  }`}
                >
                  <span>{service.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#38BDF8]" />
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-display font-bold text-sm text-white bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] shadow-[0_0_25px_rgba(37,99,235,0.45)]"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Falar no WhatsApp Agora</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
