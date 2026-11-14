import React from 'react';
import {
  Target,
  MapPin,
  Code2,
  ShoppingCart,
  MessageSquare,
  Nfc,
  Star,
  TrendingUp,
  Sparkles,
  QrCode,
  CheckCircle2,
} from 'lucide-react';

export function ServiceIcon3D({ slug, size = 'md' }) {
  const dim = size === 'lg' ? 'w-16 h-16' : 'w-12 h-12';
  const iconDim = size === 'lg' ? 'w-8 h-8' : 'w-6 h-6';

  const map = {
    'trafego-pago': {
      bg: 'from-[#2563EB] to-[#38BDF8]',
      shadow: 'shadow-[0_10px_28px_rgba(37,99,235,0.5)]',
      Icon: Target,
    },
    'google-meu-negocio': {
      bg: 'from-[#1D4ED8] to-[#38BDF8]',
      shadow: 'shadow-[0_10px_28px_rgba(56,189,248,0.45)]',
      Icon: MapPin,
    },
    'sites-e-sistemas': {
      bg: 'from-[#2563EB] to-[#0EA5E9]',
      shadow: 'shadow-[0_10px_28px_rgba(37,99,235,0.5)]',
      Icon: Code2,
    },
    'lojas-virtuais': {
      bg: 'from-[#0284C7] to-[#38BDF8]',
      shadow: 'shadow-[0_10px_28px_rgba(14,165,233,0.45)]',
      Icon: ShoppingCart,
    },
    'automacao-whatsapp': {
      bg: 'from-[#16A34A] to-[#22C55E]',
      shadow: 'shadow-[0_10px_28px_rgba(34,197,94,0.4)]',
      Icon: MessageSquare,
    },
    'plaquinhas-inteligentes': {
      bg: 'from-[#2563EB] via-[#38BDF8] to-[#6366F1]',
      shadow: 'shadow-[0_10px_28px_rgba(56,189,248,0.5)]',
      Icon: Nfc,
    },
  };

  const entry = map[slug] || map['trafego-pago'];
  const { Icon } = entry;

  return (
    <div
      className={`${dim} rounded-2xl bg-gradient-to-br ${entry.bg} ${entry.shadow} flex items-center justify-center text-white relative border border-white/25`}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/25 to-white/20 pointer-events-none" />
      <Icon className={`${iconDim} relative z-10 drop-shadow`} />
    </div>
  );
}

export function ServiceHeroVisual3D({ slug }) {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center select-none">
      {/* Ambient Halo */}
      <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-[#2563EB]/30 via-[#38BDF8]/20 to-transparent blur-3xl animate-pulse-glow" />

      {/* Outer Orbit Ring */}
      <div className="absolute inset-4 rounded-full border border-[#38BDF8]/25 border-dashed animate-[spin_28s_linear_infinite]" />
      <div className="absolute inset-12 rounded-full border border-[#2563EB]/30 animate-[spin_20s_linear_infinite_reverse]" />

      {/* Central 3D Floating Card */}
      <div className="relative z-10 w-72 sm:w-80 glass-panel rounded-3xl p-6 shadow-[0_25px_70px_rgba(0,0,0,0.65)] border border-[#38BDF8]/35 animate-float-slow">
        {slug === 'trafego-pago' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#38BDF8]">
                Campanha Ativa
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                +312% Alcance
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#38BDF8] flex items-center justify-center shadow-[0_0_25px_rgba(56,189,248,0.5)]">
                <Target className="w-9 h-9 text-white" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-lg">Google &amp; Meta Ads</p>
                <p className="text-xs text-[#E5E7EB]/75">Segmentação por intenção e região</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="bg-[#0B1220]/80 rounded-xl p-2.5 border border-white/10">
                <p className="text-[10px] text-[#E5E7EB]/60">Cliques</p>
                <p className="font-display font-bold text-[#38BDF8] text-sm">4.890</p>
              </div>
              <div className="bg-[#0B1220]/80 rounded-xl p-2.5 border border-white/10">
                <p className="text-[10px] text-[#E5E7EB]/60">Leads</p>
                <p className="font-display font-bold text-white text-sm">642</p>
              </div>
              <div className="bg-[#0B1220]/80 rounded-xl p-2.5 border border-white/10">
                <p className="text-[10px] text-[#E5E7EB]/60">Conversão</p>
                <p className="font-display font-bold text-emerald-400 text-sm">13,1%</p>
              </div>
            </div>
          </div>
        )}

        {slug === 'google-meu-negocio' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#38BDF8]">
                Google Maps &amp; Busca
              </span>
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#38BDF8] flex items-center justify-center shadow-[0_0_25px_rgba(37,99,235,0.6)]">
                <MapPin className="w-9 h-9 text-white" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-lg">Top 3 Local</p>
                <p className="text-xs text-[#E5E7EB]/75">Perfil verificado e otimizado</p>
              </div>
            </div>
            <div className="space-y-2 bg-[#0B1220]/80 rounded-xl p-3 border border-white/10 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[#E5E7EB]/80">Rotas traçadas no Maps</span>
                <span className="font-bold text-[#38BDF8]">+185%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#E5E7EB]/80">Ligações e WhatsApp</span>
                <span className="font-bold text-emerald-400">+240%</span>
              </div>
            </div>
          </div>
        )}

        {slug === 'sites-e-sistemas' && (
          <div className="space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2 text-[11px] font-mono text-[#38BDF8]">suaempresa.com.br</span>
            </div>
            <div className="bg-[#0B1220]/90 rounded-2xl p-4 border border-[#38BDF8]/25 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#38BDF8] flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-display font-bold text-white text-sm">Arquitetura Moderna</p>
                  <p className="text-[11px] text-[#38BDF8]">Performance 99/100 • SSL • SEO</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="px-2.5 py-1.5 rounded-lg bg-[#1F2937]/70 text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" /> Design 3D
                </div>
                <div className="px-2.5 py-1.5 rounded-lg bg-[#1F2937]/70 text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" /> Sistemas Web
                </div>
              </div>
            </div>
          </div>
        )}

        {slug === 'lojas-virtuais' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#38BDF8]">
                Vitrine Digital 24/7
              </span>
              <span className="px-2 py-0.5 rounded-md bg-[#2563EB]/30 text-[#38BDF8] text-[11px] font-bold">
                Checkout PIX
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0284C7] to-[#38BDF8] flex items-center justify-center shadow-[0_0_25px_rgba(56,189,248,0.45)]">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-lg">E-commerce Próprio</p>
                <p className="text-xs text-[#E5E7EB]/75">Catálogo, frete e pagamento</p>
              </div>
            </div>
            <div className="bg-[#0B1220]/80 rounded-xl p-3 border border-white/10 flex items-center justify-between">
              <span className="text-xs text-[#E5E7EB]/80">Pedido #1048 aprovado</span>
              <span className="text-xs font-bold text-emerald-400">Venda 24h ✓</span>
            </div>
          </div>
        )}

        {slug === 'automacao-whatsapp' && (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-[0_0_25px_rgba(34,197,94,0.45)]">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-base">Fluxo Inteligente 24h</p>
                <p className="text-xs text-emerald-400">● Online agora • Resposta em 2s</p>
              </div>
            </div>
            <div className="space-y-2 text-xs">
              <div className="bg-[#0B1220]/90 border border-emerald-500/30 rounded-xl p-2.5 text-[#E5E7EB]">
                Olá! Como posso acelerar seu atendimento hoje?
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-lg bg-[#2563EB]/30 border border-[#38BDF8]/30 text-[#38BDF8]">
                  1. Orçamento
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#2563EB]/30 border border-[#38BDF8]/30 text-[#38BDF8]">
                  2. Horários
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-400/30 text-emerald-300">
                  3. Falar com Especialista
                </span>
              </div>
            </div>
          </div>
        )}

        {slug === 'plaquinhas-inteligentes' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                Plaquinha EB • NFC + QR
              </span>
              <Nfc className="w-5 h-5 text-[#38BDF8] animate-pulse" />
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-[#0F172A] via-[#1E3A8A]/50 to-[#0B1220] border border-[#38BDF8]/40 p-4 text-center space-y-2 shadow-inner">
              <div className="flex justify-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="font-display font-extrabold text-white text-sm">
                APROXIME SEU CELULAR
              </p>
              <div className="flex items-center justify-center gap-4 pt-1 text-[#38BDF8]">
                <div className="flex flex-col items-center text-[10px]">
                  <Nfc className="w-6 h-6" />
                  <span>NFC</span>
                </div>
                <span className="text-white/40 text-xs">OU</span>
                <div className="flex flex-col items-center text-[10px]">
                  <QrCode className="w-6 h-6" />
                  <span>QR CODE</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Satellite Badges */}
      <div className="absolute top-6 right-4 z-20 glass-card px-3 py-2 rounded-xl flex items-center gap-2 text-xs font-semibold text-white shadow-lg animate-float-reverse">
        <TrendingUp className="w-4 h-4 text-[#38BDF8]" />
        <span>Alta Conversão</span>
      </div>
      <div className="absolute bottom-8 left-2 z-20 glass-card px-3 py-2 rounded-xl flex items-center gap-2 text-xs font-semibold text-white shadow-lg animate-float-slow">
        <Sparkles className="w-4 h-4 text-[#2563EB]" />
        <span>EB Solutions</span>
      </div>
    </div>
  );
}
