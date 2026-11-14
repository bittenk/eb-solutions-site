import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Nfc,
  QrCode,
  Star,
  MessageSquare,
  Search,
  Instagram,
  Send,
} from 'lucide-react';
import TiltCard3D from '../components/TiltCard3D';
import { ServiceHeroVisual3D, ServiceIcon3D } from '../components/ServiceIllustrations3D';
import { WhatsAppIcon } from '../components/BrandLogo';
import { SERVICES_DATA, buildWhatsAppUrl } from '../data/servicesData';

export default function ServiceDetailPage({ slug, onNavigate }) {
  const serviceIndex = SERVICES_DATA.findIndex((s) => s.slug === slug);
  const service = SERVICES_DATA[serviceIndex >= 0 ? serviceIndex : 0];
  const nextService = SERVICES_DATA[(serviceIndex + 1) % SERVICES_DATA.length];

  // Interactive states for service-specific widgets
  const [selectedAdChannel, setSelectedAdChannel] = useState('google');
  const [selectedPlaqueIdx, setSelectedPlaqueIdx] = useState(0);
  const [chatStep, setChatStep] = useState('inicio');

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
      {/* Top Breadcrumb & Quick Service Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#E5E7EB]/75 hover:text-[#38BDF8] transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para Início</span>
        </button>

        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {SERVICES_DATA.map((item) => (
            <button
              key={item.slug}
              onClick={() => onNavigate(`servico/${item.slug}`)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                item.slug === service.slug
                  ? 'bg-[#2563EB] text-white shadow-[0_0_20px_rgba(37,99,235,0.55)]'
                  : 'bg-[#1F2937]/60 text-[#E5E7EB]/75 hover:text-white border border-white/10'
              }`}
            >
              {item.shortTitle}
            </button>
          ))}
        </div>
      </div>

      {/* Service Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563EB]/20 border border-[#38BDF8]/35 text-xs font-semibold text-[#38BDF8]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{service.badge}</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl text-white leading-tight">
            {service.title}
          </h1>

          <p className="font-display font-semibold text-lg text-[#38BDF8]">{service.tagline}</p>

          <p className="text-sm sm:text-base text-[#E5E7EB]/85 leading-relaxed">
            {service.heroDescription}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {service.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl glass-card border border-[#38BDF8]/20"
              >
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-white">{highlight}</span>
              </div>
            ))}
          </div>

          <div className="pt-3">
            <a
              href={buildWhatsAppUrl(service.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl font-display font-bold text-sm text-white bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] shadow-[0_12px_35px_rgba(37,99,235,0.5)] hover:shadow-[0_15px_40px_rgba(56,189,248,0.65)] transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Solicitar Proposta de {service.shortTitle}</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <ServiceHeroVisual3D slug={service.slug} />
        </div>
      </div>

      {/* Interactive Service-Specific Showcase */}
      {service.slug === 'trafego-pago' && (
        <section className="my-12 glass-panel rounded-3xl p-6 sm:p-8 border border-[#38BDF8]/25">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#38BDF8]">
                Comparador Interativo
              </span>
              <h2 className="font-display font-bold text-2xl text-white">
                Google Ads ou Meta Ads? Entenda onde anunciar
              </h2>
            </div>
            <div className="inline-flex rounded-xl bg-[#0B1220] p-1 border border-white/10">
              <button
                onClick={() => setSelectedAdChannel('google')}
                className={`px-4 py-2 rounded-lg text-xs font-display font-bold transition-all ${
                  selectedAdChannel === 'google'
                    ? 'bg-[#2563EB] text-white'
                    : 'text-[#E5E7EB]/70 hover:text-white'
                }`}
              >
                Google Ads
              </button>
              <button
                onClick={() => setSelectedAdChannel('meta')}
                className={`px-4 py-2 rounded-lg text-xs font-display font-bold transition-all ${
                  selectedAdChannel === 'meta'
                    ? 'bg-[#2563EB] text-white'
                    : 'text-[#E5E7EB]/70 hover:text-white'
                }`}
              >
                Meta Ads (Instagram/FB)
              </button>
            </div>
          </div>

          {selectedAdChannel === 'google' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[#0B1220]/80 border border-[#38BDF8]/25">
                <Search className="w-6 h-6 text-[#38BDF8] mb-2" />
                <h3 className="font-display font-bold text-white text-sm">Intenção Imediata</h3>
                <p className="text-xs text-[#E5E7EB]/75 mt-1">
                  Seu anúncio aparece exatamente no momento em que o cliente pesquisa pelo seu
                  serviço ou produto no Google.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#0B1220]/80 border border-[#38BDF8]/25">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 mb-2" />
                <h3 className="font-display font-bold text-white text-sm">Leads Prontos para Fechar</h3>
                <p className="text-xs text-[#E5E7EB]/75 mt-1">
                  Ideal para serviços locais, clínicas, escritórios, oficinas, delivery e empresas
                  B2B.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#0B1220]/80 border border-[#38BDF8]/25">
                <Sparkles className="w-6 h-6 text-[#38BDF8] mb-2" />
                <h3 className="font-display font-bold text-white text-sm">Segmentação Geográfica</h3>
                <p className="text-xs text-[#E5E7EB]/75 mt-1">
                  Foco cirúrgico no seu bairro, cidade ou raio de atendimento para não desperdiçar
                  verba.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[#0B1220]/80 border border-pink-500/30">
                <Instagram className="w-6 h-6 text-pink-400 mb-2" />
                <h3 className="font-display font-bold text-white text-sm">Descoberta &amp; Desejo</h3>
                <p className="text-xs text-[#E5E7EB]/75 mt-1">
                  Alcança pessoas com o perfil exato do seu comprador enquanto navegam no Feed,
                  Stories e Reels.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#0B1220]/80 border border-pink-500/30">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 mb-2" />
                <h3 className="font-display font-bold text-white text-sm">Escala Visual &amp; Marca</h3>
                <p className="text-xs text-[#E5E7EB]/75 mt-1">
                  Excelente para lojas virtuais, estética, gastronomia, lançamentos e geração de
                  mensagens no WhatsApp.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#0B1220]/80 border border-pink-500/30">
                <Sparkles className="w-6 h-6 text-[#38BDF8] mb-2" />
                <h3 className="font-display font-bold text-white text-sm">Remarketing Inteligente</h3>
                <p className="text-xs text-[#E5E7EB]/75 mt-1">
                  Reimpacta quem visitou seu site ou interagiu com seu perfil até concluir a
                  compra.
                </p>
              </div>
            </div>
          )}
        </section>
      )}

      {service.slug === 'automacao-whatsapp' && (
        <section className="my-12 glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Simulador Interativo
              </span>
              <h2 className="font-display font-bold text-2xl text-white">
                Teste na prática um fluxo automatizado
              </h2>
              <p className="text-sm text-[#E5E7EB]/75">
                Clique nas opções do chat ao lado para ver como o cliente é atendido em segundos e
                encaminhado com contexto para sua equipe.
              </p>
            </div>

            <div className="lg:col-span-7 bg-[#0B1220] rounded-2xl border border-white/10 p-4 sm:p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-xs text-white">
                      Assistente Virtual EB
                    </p>
                    <p className="text-[11px] text-emerald-400">● Online 24h</p>
                  </div>
                </div>
                <button
                  onClick={() => setChatStep('inicio')}
                  className="text-[11px] text-[#38BDF8] hover:underline"
                >
                  Reiniciar fluxo
                </button>
              </div>

              <div className="space-y-3 min-h-[130px] text-xs">
                <div className="bg-[#1F2937]/75 rounded-2xl rounded-tl-none p-3.5 text-[#E5E7EB] max-w-md">
                  Olá! Seja bem-vindo. Para agilizar seu atendimento, escolha uma das opções
                  abaixo:
                </div>

                {chatStep === 'orcamento' && (
                  <div className="space-y-2 animate-page-enter">
                    <div className="ml-auto bg-[#2563EB] text-white rounded-2xl rounded-tr-none p-3 max-w-xs">
                      1. Quero solicitar um orçamento
                    </div>
                    <div className="bg-[#1F2937]/75 border border-emerald-500/30 rounded-2xl rounded-tl-none p-3.5 text-[#E5E7EB] max-w-md">
                      Perfeito! Já separei nosso catálogo e conectei você com um especialista. Em
                      instantes ele continua seu orçamento com prioridade.
                    </div>
                  </div>
                )}

                {chatStep === 'horarios' && (
                  <div className="space-y-2 animate-page-enter">
                    <div className="ml-auto bg-[#2563EB] text-white rounded-2xl rounded-tr-none p-3 max-w-xs">
                      2. Horários e endereço
                    </div>
                    <div className="bg-[#1F2937]/75 border border-emerald-500/30 rounded-2xl rounded-tl-none p-3.5 text-[#E5E7EB] max-w-md">
                      Atendemos de Segunda a Sábado das 08h às 19h. Aqui está nossa localização
                      exata no Google Maps! Deseja agendar um horário?
                    </div>
                  </div>
                )}

                {chatStep === 'humano' && (
                  <div className="space-y-2 animate-page-enter">
                    <div className="ml-auto bg-[#2563EB] text-white rounded-2xl rounded-tr-none p-3 max-w-xs">
                      3. Falar com atendente humano
                    </div>
                    <div className="bg-[#1F2937]/75 border border-emerald-500/30 rounded-2xl rounded-tl-none p-3.5 text-[#E5E7EB] max-w-md">
                      Transferindo agora com todo o histórico da conversa para nossa equipe
                      comercial!
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                <button
                  onClick={() => setChatStep('orcamento')}
                  className="px-3 py-2 rounded-xl bg-[#2563EB]/25 hover:bg-[#2563EB] text-white text-xs font-semibold border border-[#38BDF8]/30 transition-colors inline-flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" /> 1. Solicitar Orçamento
                </button>
                <button
                  onClick={() => setChatStep('horarios')}
                  className="px-3 py-2 rounded-xl bg-[#2563EB]/25 hover:bg-[#2563EB] text-white text-xs font-semibold border border-[#38BDF8]/30 transition-colors inline-flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" /> 2. Horários &amp; Local
                </button>
                <button
                  onClick={() => setChatStep('humano')}
                  className="px-3 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-600 text-emerald-200 hover:text-white text-xs font-semibold border border-emerald-400/30 transition-colors inline-flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" /> 3. Falar com Pessoa
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {service.slug === 'plaquinhas-inteligentes' && service.plaques && (
        <section className="my-12 glass-panel rounded-3xl p-6 sm:p-10 border border-[#38BDF8]/30">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#38BDF8]">
              Catálogo Interativo 3D
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-1">
              Conheça os 3 Modelos de Plaquinhas EB
            </h2>
            <p className="text-xs sm:text-sm text-[#E5E7EB]/75 mt-2">
              Dashboard de vendas integrado • Compra no varejo ou atacado • Sem pedido mínimo.
            </p>
          </div>

          {/* Model Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {service.plaques.map((plaque, index) => (
              <button
                key={plaque.id}
                onClick={() => setSelectedPlaqueIdx(index)}
                className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs transition-all ${
                  selectedPlaqueIdx === index
                    ? 'bg-[#2563EB] text-white shadow-[0_0_25px_rgba(37,99,235,0.6)]'
                    : 'glass-card text-[#E5E7EB]/80 hover:text-white'
                }`}
              >
                {plaque.name}
              </button>
            ))}
          </div>

          {/* Active 3D Plaque Preview */}
          {(() => {
            const activePlaque = service.plaques[selectedPlaqueIdx];
            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 flex justify-center">
                  <TiltCard3D
                    maxTilt={14}
                    glowColor={`${activePlaque.accent}55`}
                    className="w-72 sm:w-80 rounded-3xl p-6 bg-gradient-to-br from-[#111A2E] via-[#0B1220] to-[#1E293B] border-2 border-[#38BDF8]/45 shadow-[0_25px_65px_rgba(0,0,0,0.75)] text-center space-y-4"
                  >
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#38BDF8]">
                      <span>EB | ERICK BITTENCOURT</span>
                      <span>{activePlaque.badge}</span>
                    </div>

                    <div className="flex justify-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>

                    <div
                      className="py-4 px-3 rounded-2xl border border-white/15"
                      style={{ backgroundColor: `${activePlaque.accent}22` }}
                    >
                      <p className="font-display font-black text-white text-base leading-snug">
                        {activePlaque.id === 'google' && 'NÓS ADORARÍAMOS A SUA AVALIAÇÃO NO GOOGLE'}
                        {activePlaque.id === 'instagram' && 'SIGA NOSSO PERFIL OFICIAL NO INSTAGRAM'}
                        {activePlaque.id === 'pix' && 'FAÇA SEU PAGAMENTO INSTANTÂNEO COM PIX'}
                      </p>
                    </div>

                    <div className="flex items-center justify-around pt-2 text-white">
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#38BDF8]">
                          <Nfc className="w-7 h-7" />
                        </div>
                        <span className="text-[10px] font-semibold">Aproxime (NFC)</span>
                      </div>
                      <span className="text-xs font-bold text-[#E5E7EB]/50">OU</span>
                      <div className="flex flex-col items-center gap-1">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#38BDF8]">
                          <QrCode className="w-7 h-7" />
                        </div>
                        <span className="text-[10px] font-semibold">Leia o QR Code</span>
                      </div>
                    </div>
                  </TiltCard3D>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#2563EB]/25 text-[#38BDF8]">
                    {activePlaque.badge}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                    {activePlaque.name}
                  </h3>
                  <p className="font-semibold text-base text-[#38BDF8]">{activePlaque.subtitle}</p>
                  <p className="text-sm sm:text-base text-[#E5E7EB]/80 leading-relaxed">
                    {activePlaque.description}
                  </p>
                  <div className="pt-2">
                    <a
                      href={buildWhatsAppUrl(
                        `Olá Erick! Tenho interesse na ${activePlaque.name} (NFC + QR Code).`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl font-display font-bold text-sm text-white bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] shadow-[0_12px_35px_rgba(37,99,235,0.45)]"
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                      <span>{activePlaque.cta}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })()}
        </section>
      )}

      {/* 5-STEP METHODOLOGY SECTION */}
      <section className="py-12">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#38BDF8]">
            Metodologia EB em 5 Etapas
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-1">
            Como conduzimos seu projeto de {service.shortTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {service.steps.map((item) => (
            <TiltCard3D
              key={item.step}
              maxTilt={8}
              className="glass-card p-5 border border-[#38BDF8]/20 flex flex-col justify-between"
            >
              <div>
                <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-display font-black bg-[#2563EB]/30 text-[#38BDF8] border border-[#38BDF8]/35 mb-4">
                  {item.step} / 05
                </span>
                <h3 className="font-display font-bold text-base text-white mb-2">{item.title}</h3>
                <p className="text-xs text-[#E5E7EB]/75 leading-relaxed">{item.description}</p>
              </div>
            </TiltCard3D>
          ))}
        </div>
      </section>

      {/* DELIVERABLES + NEXT SERVICE NAVIGATION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-6">
        <div className="lg:col-span-7 glass-panel rounded-3xl p-7 border border-[#38BDF8]/25">
          <h3 className="font-display font-bold text-xl text-white mb-4">
            O que está incluso na entrega
          </h3>
          <ul className="space-y-3">
            {service.deliverables.map((deliv, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[#E5E7EB]/85">
                <CheckCircle2 className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                <span>{deliv}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 glass-card rounded-3xl p-7 border border-[#38BDF8]/25 flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#38BDF8]">
              Próxima Solução
            </span>
            <div className="flex items-center gap-3 mt-3">
              <ServiceIcon3D slug={nextService.slug} />
              <div>
                <h4 className="font-display font-bold text-lg text-white">{nextService.title}</h4>
                <p className="text-xs text-[#E5E7EB]/70">{nextService.badge}</p>
              </div>
            </div>
            <p className="text-xs text-[#E5E7EB]/75 mt-4 leading-relaxed">{nextService.summary}</p>
          </div>

          <button
            onClick={() => onNavigate(`servico/${nextService.slug}`)}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-display font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <span>Explorar {nextService.shortTitle}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
