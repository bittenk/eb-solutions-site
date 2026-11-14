import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Zap,
  UserCheck,
} from 'lucide-react';
import TiltCard3D from '../components/TiltCard3D';
import { ServiceIcon3D } from '../components/ServiceIllustrations3D';
import { WhatsAppIcon, InstagramColorIcon } from '../components/BrandLogo';
import { SERVICES_DATA, CONTACT_INFO, buildWhatsAppUrl } from '../data/servicesData';

export default function HomePage({ onNavigate }) {
  return (
    <div className="relative z-10">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563EB]/20 border border-[#38BDF8]/35 text-xs font-semibold text-[#38BDF8]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gestor de Tráfego &amp; Especialista em Presença Digital</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight">
              SUA EMPRESA PRECISA DE{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#2563EB] to-[#60A5FA]">
                MAIS CLIENTES?
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#E5E7EB]/85 max-w-2xl leading-relaxed">
              Estratégias digitais completas para{' '}
              <strong className="text-white">atrair clientes</strong>,{' '}
              <strong className="text-[#38BDF8]">fortalecer sua marca</strong> e{' '}
              <strong className="text-white">impulsionar suas vendas</strong> — unindo tráfego
              pago, Google Meu Negócio, desenvolvimento web, automações e plaquinhas NFC.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-display font-bold text-sm text-white bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] hover:from-[#1D4ED8] hover:to-[#38BDF8] shadow-[0_12px_35px_rgba(37,99,235,0.5)] hover:shadow-[0_15px_40px_rgba(56,189,248,0.65)] transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Avaliação Gratuita do Meu Negócio</span>
              </a>

              <button
                onClick={() => {
                  document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-display font-bold text-sm text-white glass-card hover:border-[#38BDF8]/50 transition-all"
              >
                <span>Explorar Soluções</span>
                <ArrowRight className="w-4 h-4 text-[#38BDF8]" />
              </button>
            </div>

            {/* Trust Pillars */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-xl">
              <div>
                <p className="font-display font-extrabold text-xl sm:text-2xl text-white">360°</p>
                <p className="text-xs text-[#E5E7EB]/65">Ecossistema Digital</p>
              </div>
              <div>
                <p className="font-display font-extrabold text-xl sm:text-2xl text-[#38BDF8]">
                  24/7
                </p>
                <p className="text-xs text-[#E5E7EB]/65">Captação &amp; Automação</p>
              </div>
              <div>
                <p className="font-display font-extrabold text-xl sm:text-2xl text-white">
                  100%
                </p>
                <p className="text-xs text-[#E5E7EB]/65">Projetos Sob Medida</p>
              </div>
            </div>
          </div>

          {/* Right 3D Interactive Ecosystem Hub */}
          <div className="lg:col-span-5">
            <TiltCard3D
              maxTilt={11}
              className="glass-panel p-6 sm:p-8 border border-[#38BDF8]/30 shadow-[0_30px_80px_rgba(0,0,0,0.75)]"
            >
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#38BDF8]">
                    Ecossistema EB
                  </span>
                  <h2 className="font-display font-bold text-lg text-white">
                    Presença Digital Estratégica
                  </h2>
                </div>
                <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_#34D399]" />
              </div>

              <div className="grid grid-cols-2 gap-3 my-6">
                {SERVICES_DATA.map((item) => (
                  <button
                    key={item.slug}
                    onClick={() => onNavigate(`servico/${item.slug}`)}
                    className="p-3 rounded-xl bg-[#0B1220]/80 hover:bg-[#2563EB]/20 border border-white/10 hover:border-[#38BDF8]/45 text-left transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="scale-75 origin-top-left">
                        <ServiceIcon3D slug={item.slug} />
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#E5E7EB]/40 group-hover:text-[#38BDF8] group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <p className="font-display font-bold text-xs text-white -mt-2">
                      {item.shortTitle}
                    </p>
                    <p className="text-[10px] text-[#38BDF8] mt-0.5">{item.badge}</p>
                  </button>
                ))}
              </div>

              <div className="rounded-xl bg-gradient-to-r from-[#2563EB]/25 to-[#38BDF8]/15 border border-[#38BDF8]/30 p-3.5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-display font-bold text-white">
                    &ldquo;Seu sucesso também é o meu objetivo!&rdquo;
                  </p>
                  <p className="text-[11px] text-[#E5E7EB]/75">Erick Bittencourt</p>
                </div>
                <TrendingUp className="w-6 h-6 text-[#38BDF8] shrink-0" />
              </div>
            </TiltCard3D>
          </div>
        </div>
      </section>

      {/* SERVICES SHOWCASE SECTION */}
      <section id="servicos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#2563EB]/20 text-[#38BDF8] border border-[#38BDF8]/30">
            Soluções Completas
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Tudo o que sua empresa precisa para{' '}
            <span className="text-[#38BDF8]">crescer no digital</span>
          </h2>
          <p className="text-sm sm:text-base text-[#E5E7EB]/75">
            Clique em qualquer serviço abaixo para abrir sua página dedicada com metodologia passo
            a passo, detalhes técnicos e demonstrações interativas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <TiltCard3D
              key={service.slug}
              onClick={() => onNavigate(`servico/${service.slug}`)}
              className="glass-card p-6 sm:p-7 border border-[#38BDF8]/20 hover:border-[#38BDF8]/55 cursor-pointer flex flex-col justify-between group shadow-[0_18px_50px_rgba(0,0,0,0.45)]"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-5">
                  <ServiceIcon3D slug={service.slug} />
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#0B1220]/85 text-[#38BDF8] border border-[#38BDF8]/25">
                    {service.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white group-hover:text-[#38BDF8] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-[#E5E7EB]/75 mt-3 leading-relaxed">{service.summary}</p>

                <ul className="mt-5 space-y-2 border-t border-white/10 pt-4">
                  {service.highlights.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#E5E7EB]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-display font-bold text-[#38BDF8]">
                <span>Ver página detalhada</span>
                <span className="w-8 h-8 rounded-lg bg-[#2563EB]/25 group-hover:bg-[#2563EB] text-white flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </TiltCard3D>
          ))}
        </div>
      </section>

      {/* QUEM SOU EU PREVIEW STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <TiltCard3D
          maxTilt={5}
          className="glass-panel p-8 sm:p-10 border border-[#38BDF8]/25 shadow-[0_25px_70px_rgba(0,0,0,0.6)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-56 h-64 sm:w-64 sm:h-72 rounded-2xl overflow-hidden border-2 border-[#38BDF8]/50 shadow-[0_0_40px_rgba(37,99,235,0.45)]">
                <img
                  src="/erick-bittencourt.jpg"
                  alt="Erick Bittencourt"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0B1220] to-transparent" />
                <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-[#2563EB]/90 text-[10px] font-display font-bold text-white uppercase tracking-wider">
                  Erick Bittencourt
                </span>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#38BDF8]">
                Quem Está Por Trás dos Resultados
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                Prazer, eu sou o Erick Bittencourt
              </h2>
              <p className="text-sm sm:text-base text-[#E5E7EB]/80 leading-relaxed">
                Minha missão é transformar a presença digital de empresas unindo{' '}
                <strong className="text-white">precisão técnica</strong>,{' '}
                <strong className="text-[#38BDF8]">estratégias de tráfego pago</strong> e{' '}
                <strong className="text-white">desenvolvimento web</strong> para atrair mais
                clientes e gerar vendas previsíveis todos os dias.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#0B1220]/75 border border-white/10 flex items-center gap-2.5">
                  <Zap className="w-5 h-5 text-[#38BDF8] shrink-0" />
                  <span className="text-xs font-medium text-white">Estratégia Orientada a Dados</span>
                </div>
                <div className="p-3 rounded-xl bg-[#0B1220]/75 border border-white/10 flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#38BDF8] shrink-0" />
                  <span className="text-xs font-medium text-white">Engenharia &amp; Performance</span>
                </div>
                <div className="p-3 rounded-xl bg-[#0B1220]/75 border border-white/10 flex items-center gap-2.5">
                  <UserCheck className="w-5 h-5 text-[#38BDF8] shrink-0" />
                  <span className="text-xs font-medium text-white">Atendimento Próximo</span>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('quem-sou-eu')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors"
                >
                  <span>Conhecer Minha História</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={CONTACT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#E5E7EB]/85 hover:text-white"
                >
                  <InstagramColorIcon className="w-5 h-5" />
                  <span>{CONTACT_INFO.instagramHandle}</span>
                </a>
              </div>
            </div>
          </div>
        </TiltCard3D>
      </section>

      {/* DIAGNOSTIC CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#0284C7] p-8 sm:p-12 shadow-[0_25px_70px_rgba(37,99,235,0.45)] border border-white/20">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider">
                Avaliação Sem Compromisso
              </span>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-white leading-tight">
                SUA EMPRESA PODE ESTAR PERDENDO CLIENTES TODOS OS DIAS.
              </h2>
              <p className="text-sm sm:text-base text-white/90">
                Me chame agora para eu avaliar a presença digital da sua empresa e desenhar a
                melhor estratégia para atrair novas oportunidades.
              </p>
            </div>

            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#0B1220] hover:bg-[#111A2E] text-white font-display font-bold text-sm shadow-2xl border border-white/15 hover:scale-105 transition-all"
            >
              <WhatsAppIcon className="w-5 h-5 text-emerald-400" />
              <span>Vamos Conversar no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
