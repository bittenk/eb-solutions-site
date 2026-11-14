import React, { useState } from 'react';
import { Mail, Check, Copy, MapPin, ArrowUpRight } from 'lucide-react';
import { BrandLogo, InstagramColorIcon, WhatsAppIcon } from './BrandLogo';
import { CONTACT_INFO, SERVICES_DATA, buildWhatsAppUrl } from '../data/servicesData';

export default function Footer({ onNavigate }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <footer
      id="contato"
      className="relative z-10 border-t border-[#38BDF8]/15 bg-[#070C16]/90 backdrop-blur-xl mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo />
            <p className="text-sm text-[#E5E7EB]/75 leading-relaxed max-w-sm">
              Mais do que tráfego, é sobre pessoas e negócios. Estratégias digitais completas para
              atrair mais clientes, fortalecer sua marca e impulsionar suas vendas.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-[#38BDF8] bg-[#2563EB]/15 border border-[#38BDF8]/25 px-3 py-1.5 rounded-full">
              <MapPin className="w-3.5 h-3.5" />
              <span>{CONTACT_INFO.location}</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-[#E5E7EB]/75">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#38BDF8] transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quem-sou-eu')}
                  className="hover:text-[#38BDF8] transition-colors"
                >
                  Quem Sou Eu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home#servicos')}
                  className="hover:text-[#38BDF8] transition-colors"
                >
                  Todos os Serviços
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Soluções &amp; Serviços
            </h4>
            <ul className="space-y-2 text-sm text-[#E5E7EB]/75">
              {SERVICES_DATA.map((service) => (
                <li key={service.slug}>
                  <button
                    onClick={() => onNavigate(`servico/${service.slug}`)}
                    className="hover:text-[#38BDF8] transition-colors text-left"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Communication Channels */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Canais de Comunicação
            </h4>
            <div className="space-y-3">
              {/* Instagram with official brand colors */}
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl glass-card hover:border-pink-500/50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <InstagramColorIcon className="w-6 h-6 shrink-0" />
                  <div>
                    <p className="text-[11px] text-[#E5E7EB]/60">Instagram Oficial</p>
                    <p className="text-xs font-semibold text-white group-hover:text-pink-300 transition-colors">
                      {CONTACT_INFO.instagramHandle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#E5E7EB]/50 group-hover:text-white" />
              </a>

              {/* WhatsApp */}
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl glass-card hover:border-emerald-500/50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#E5E7EB]/60">WhatsApp Direto</p>
                    <p className="text-xs font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      {CONTACT_INFO.whatsappDisplay}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#E5E7EB]/50 group-hover:text-white" />
              </a>

              {/* Email */}
              <div className="flex items-center justify-between p-3 rounded-xl glass-card hover:border-[#38BDF8]/50 transition-all group">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 min-w-0"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#2563EB]/25 text-[#38BDF8] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] text-[#E5E7EB]/60">E-mail Profissional</p>
                    <p className="text-xs font-semibold text-white truncate group-hover:text-[#38BDF8] transition-colors">
                      {CONTACT_INFO.email}
                    </p>
                  </div>
                </a>
                <button
                  onClick={handleCopyEmail}
                  title="Copiar e-mail"
                  className="p-1.5 rounded-lg hover:bg-white/10 text-[#E5E7EB]/70 hover:text-white shrink-0"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar — Developed by Erick Bittencourt */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E5E7EB]/65">
          <p>© {new Date().getFullYear()} EB | Erick Bittencourt. Todos os direitos reservados.</p>
          <p className="font-medium text-[#E5E7EB]/90 flex items-center gap-1.5">
            <span>Desenvolvido por</span>
            <span className="font-display font-bold text-[#38BDF8]">Erick Bittencourt</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
