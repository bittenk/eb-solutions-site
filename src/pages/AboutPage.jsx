import React from 'react';
import {
  CheckCircle2,
  Cpu,
  TrendingUp,
  MapPin,
  Sparkles,
  ArrowRight,
  Award,
  Code2,
} from 'lucide-react';
import TiltCard3D from '../components/TiltCard3D';
import { WhatsAppIcon, InstagramColorIcon } from '../components/BrandLogo';
import { CONTACT_INFO, SERVICES_DATA, buildWhatsAppUrl } from '../data/servicesData';

export default function AboutPage({ onNavigate }) {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
      {/* Top Hero Split matching studio holographic design */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
        {/* Left: Holographic 3D Studio Photo Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm">
            {/* Ambient Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#2563EB]/40 via-[#38BDF8]/30 to-transparent blur-2xl animate-pulse-glow" />

            {/* Floating Holographic Icons */}
            <div className="absolute -top-4 -left-4 z-20 glass-panel p-3 rounded-2xl border border-[#38BDF8]/40 shadow-xl animate-float-slow">
              <Cpu className="w-6 h-6 text-[#38BDF8]" />
            </div>
            <div className="absolute top-12 -right-5 z-20 glass-panel p-3 rounded-2xl border border-[#38BDF8]/40 shadow-xl animate-float-reverse">
              <TrendingUp className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="absolute bottom-14 -left-5 z-20 glass-panel p-3 rounded-2xl border border-[#38BDF8]/40 shadow-xl animate-float-reverse">
              <Code2 className="w-6 h-6 text-[#38BDF8]" />
            </div>

            <TiltCard3D
              maxTilt={8}
              className="relative z-10 rounded-3xl p-2.5 glass-panel border-2 border-[#38BDF8]/50 shadow-[0_25px_75px_rgba(0,0,0,0.8)]"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#0B1220]">
                <img
                  src="/erick-bittencourt.jpg"
                  alt="Erick Bittencourt — Gestor de Tráfego Pago e Especialista em Presença Digital"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/60 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0B1220]/90 border border-[#38BDF8]/40 backdrop-blur-md">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                    <span className="font-display font-bold text-[11px] uppercase tracking-wider text-white">
                      Presença Digital
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#38BDF8] bg-[#0B1220]/85 px-2.5 py-1 rounded-lg border border-white/10">
                    EB Solutions
                  </span>
                </div>
              </div>
            </TiltCard3D>
          </div>
        </div>

        {/* Right: Biography & Positioning */}
        <div className="lg:col-span-7 space-y-6">
          {/* Hashtag Pills */}
          <div className="flex flex-wrap gap-2">
            {['#TráfegoPago', '#Desenvolvimento', '#GoogleMeuNegócio', '#Automação'].map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#1F2937]/70 text-[#E5E7EB] border border-[#38BDF8]/25"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-2">
            <p className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[#38BDF8]">
              QUEM EU SOU
            </p>
            <h1 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
              Erick Bittencourt
            </h1>
            <p className="font-display font-bold text-lg sm:text-xl text-[#38BDF8]">
              Gestor de Tráfego Pago &amp; Especialista em Presença Digital
            </p>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-[#E5E7EB]/85 leading-relaxed">
            <p>
              Minha missão é transformar a presença digital de empresas locais e negócios em
              expansão. Unindo <strong className="text-white">precisão técnica</strong>,{' '}
              <strong className="text-[#38BDF8]">estratégias de tráfego pago</strong> e{' '}
              <strong className="text-white">desenvolvimento web</strong>, ajudo empresas a
              saírem da invisibilidade para atrair clientes todos os dias.
            </p>
            <p>
              Com sólida experiência em engenharia e tecnologia, construí a{' '}
              <strong className="text-white">EB Solutions</strong> com uma visão prática: não basta
              ter um anúncio bonito se o cliente clica e encontra um perfil desatualizado, um site
              lento ou um WhatsApp sem resposta. Por isso, integro todas as pontas — da atração ao
              fechamento.
            </p>
            <p className="font-medium text-white border-l-2 border-[#38BDF8] pl-4 italic">
              &ldquo;Mais do que tráfego, é sobre pessoas e negócios. Seu sucesso também é o meu
              objetivo!&rdquo;
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={buildWhatsAppUrl(
                'Olá Erick! Li sua história no site e gostaria de conversar sobre o crescimento digital da minha empresa.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl font-display font-bold text-sm text-white bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] shadow-[0_12px_35px_rgba(37,99,235,0.5)] hover:scale-[1.02] transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Vamos Conversar</span>
            </a>

            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-4 rounded-2xl glass-card hover:border-pink-500/45 text-sm font-semibold text-white transition-all"
            >
              <InstagramColorIcon className="w-5 h-5" />
              <span>{CONTACT_INFO.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3 Pillars Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <TiltCard3D className="glass-card p-6 border border-[#38BDF8]/20">
          <div className="w-12 h-12 rounded-xl bg-[#2563EB]/25 text-[#38BDF8] flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-lg text-white mb-2">
            Precisão &amp; Método
          </h3>
          <p className="text-sm text-[#E5E7EB]/75 leading-relaxed">
            Cada campanha, site ou automação nasce de um diagnóstico claro: público certo,
            mensagem direta e métricas acompanhadas de perto.
          </p>
        </TiltCard3D>

        <TiltCard3D className="glass-card p-6 border border-[#38BDF8]/20">
          <div className="w-12 h-12 rounded-xl bg-[#2563EB]/25 text-[#38BDF8] flex items-center justify-center mb-4">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-lg text-white mb-2">
            Visão Full-Stack Digital
          </h3>
          <p className="text-sm text-[#E5E7EB]/75 leading-relaxed">
            Domínio completo do ecossistema: tráfego no Google e Meta, SEO local, código sob
            medida, automação no WhatsApp e conexão física com NFC.
          </p>
        </TiltCard3D>

        <TiltCard3D className="glass-card p-6 border border-[#38BDF8]/20">
          <div className="w-12 h-12 rounded-xl bg-[#2563EB]/25 text-[#38BDF8] flex items-center justify-center mb-4">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-lg text-white mb-2">
            Foco em Resultado Real
          </h3>
          <p className="text-sm text-[#E5E7EB]/75 leading-relaxed">
            Métricas de vaidade não pagam contas. O foco é gerar ligações, mensagens no WhatsApp,
            avaliações 5 estrelas e vendas reais para o seu caixa.
          </p>
        </TiltCard3D>
      </div>

      {/* Explore Services Strip */}
      <div className="glass-panel rounded-3xl p-8 border border-[#38BDF8]/25 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-display font-bold text-xl sm:text-2xl text-white">
            Conheça cada solução em detalhes
          </h2>
          <p className="text-sm text-[#E5E7EB]/75 mt-1">
            Veja como aplicamos nossa metodologia em 5 etapas em cada frente do seu negócio.
          </p>
        </div>
        <button
          onClick={() => onNavigate(`servico/${SERVICES_DATA[0].slug}`)}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-display font-bold text-xs uppercase tracking-wider shrink-0 transition-colors"
        >
          <span>Explorar Serviços</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
