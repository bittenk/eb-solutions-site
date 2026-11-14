export const CONTACT_INFO = {
  whatsappNumber: '5511987217124',
  whatsappDisplay: '(11) 98721-7124',
  instagramHandle: '@erickbittencourt.digital',
  instagramUrl: 'https://instagram.com/erickbittencourt.digital',
  email: 'erickbittencourt1812@gmail.com',
  location: 'Diadema — Grande São Paulo, SP',
};

export const buildWhatsAppUrl = (customMessage) => {
  const text =
    customMessage ||
    'Olá Erick! Vim pelo seu site e gostaria de fazer uma avaliação gratuita da presença digital da minha empresa.';
  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
};

export const SERVICES_DATA = [
  {
    id: 'trafego-pago',
    slug: 'trafego-pago',
    shortTitle: 'Tráfego Pago',
    title: 'Gestão de Tráfego Pago',
    badge: 'Google Ads & Meta Ads',
    tagline: 'Mais visibilidade, público segmentado e resultados reais.',
    summary:
      'Campanhas estratégicas no Google Ads e Meta Ads para atrair o público certo, gerar oportunidades qualificadas e impulsionar suas vendas.',
    heroDescription:
      'Anunciar não é apertar o botão impulsionar. Estruturamos campanhas de alta intenção no Google Ads e anúncios persuasivos no Instagram e Facebook para colocar sua empresa na frente de quem realmente está pronto para comprar.',
    whatsappMessage:
      'Olá Erick! Quero planejar minhas campanhas de Tráfego Pago (Google Ads / Meta Ads) para atrair mais clientes.',
    highlights: [
      'Mais visibilidade na sua região e nicho',
      'Público altamente segmentado por intenção e perfil',
      'Acompanhamento contínuo de métricas e ROI',
      'Otimização inteligente de criativos e orçamento',
    ],
    steps: [
      {
        step: '01',
        title: 'Definir o Objetivo',
        description:
          'Antes de investir um real em anúncios, mapeamos exatamente quem você quer alcançar e qual ação o cliente deve tomar.',
      },
      {
        step: '02',
        title: 'Planejamento Estratégico',
        description:
          'Definimos público-alvo, raio geográfico, palavras-chave e a mensagem ideal de acordo com o momento do seu negócio.',
      },
      {
        step: '03',
        title: 'Escolha dos Canais Certos',
        description:
          'Google Ads para capturar buscas ativas ligadas ao seu serviço; Meta Ads (Instagram e Facebook) para gerar desejo e escala.',
      },
      {
        step: '04',
        title: 'Acompanhamento e Otimização',
        description:
          'Publicar é só uma etapa. Monitoramos os dados diariamente para ajustar público, anúncios e distribuição de verba.',
      },
      {
        step: '05',
        title: 'Diagnóstico Personalizado',
        description:
          'Analisamos seu segmento, sua cidade e sua oferta para desenhar um plano de aquisição previsível e escalável.',
      },
    ],
    deliverables: [
      'Configuração profissional de Pixel, API de Conversões e Google Tag Manager',
      'Pesquisa de palavras-chave de fundo de funil e negativação de termos',
      'Estruturação de campanhas de Pesquisa, Rede de Display, Instagram e Facebook',
      'Relatórios claros focados em leads, mensagens no WhatsApp e vendas',
    ],
  },
  {
    id: 'google-meu-negocio',
    slug: 'google-meu-negocio',
    shortTitle: 'Google Meu Negócio',
    title: 'Google Meu Negócio & SEO Local',
    badge: 'Presença Local & Maps',
    tagline: 'Seu cliente procura no Google. Garanta que ele encontre você.',
    summary:
      'Criação, verificação e otimização completa do Perfil da Empresa no Google para dominar as buscas locais e o Google Maps.',
    heroDescription:
      'Quando alguém pesquisa pelo seu serviço na sua cidade, seu perfil no Google é a sua principal porta de entrada. Organizamos cada detalhe técnico e visual para transformar buscas locais em ligações, rotas e mensagens.',
    whatsappMessage:
      'Olá Erick! Quero otimizar o Google Meu Negócio da minha empresa para aparecer melhor nas buscas locais.',
    highlights: [
      'Destaque nas buscas locais e no Google Maps',
      'Informações estratégicas que facilitam o contato',
      'Estratégia para conquistar avaliações 5 estrelas',
      'Mais autoridade, confiança e visitas físicas',
    ],
    steps: [
      {
        step: '01',
        title: 'Diagnóstico de Visibilidade',
        description:
          'Avaliamos como sua empresa aparece hoje quando um cliente busca pelo seu serviço ou nome no Google e no Maps.',
      },
      {
        step: '02',
        title: 'Estruturação da Porta de Entrada',
        description:
          'Configuramos categorias principais e secundárias, área de atendimento e descrição otimizada com palavras-chave locais.',
      },
      {
        step: '03',
        title: 'Dados que Facilitam o Contato',
        description:
          'Atualizamos horários, telefone, WhatsApp, endereço, serviços e fotos profissionais que representam a qualidade do seu negócio.',
      },
      {
        step: '04',
        title: 'Reputação e Avaliações Reais',
        description:
          'Implementamos rotinas e ferramentas (como as Plaquinhas NFC EB) para multiplicar avaliações espontâneas e respostas estratégicas.',
      },
      {
        step: '05',
        title: 'Posicionamento Contínuo',
        description:
          'Seu perfil passa a trabalhar 24 horas por dia atraindo clientes da sua região sem depender apenas de indicação.',
      },
    ],
    deliverables: [
      'Criação, reivindicação ou desbloqueio do Perfil da Empresa no Google',
      'Otimização completa de SEO Local (categorias, serviços, produtos e atributos)',
      'Padronização visual de capa, logotipo e galeria de fotos',
      'Guia prático de gestão de avaliações e postagens locais',
    ],
  },
  {
    id: 'sites-e-sistemas',
    slug: 'sites-e-sistemas',
    shortTitle: 'Sites e Sistemas',
    title: 'Desenvolvimento Web & Sistemas',
    badge: 'Engenharia Sob Medida',
    tagline: 'Sua empresa no digital com velocidade, design e autoridade.',
    summary:
      'Sites institucionais, landing pages de alta conversão e sistemas web personalizados desenvolvidos sob medida para a rotina do seu negócio.',
    heroDescription:
      'Quem recebe o link da sua empresa entende imediatamente o valor do que você entrega? Desenvolvemos sites modernos, rápidos e responsivos, além de sistemas internos sob medida para organizar seus processos e escalar sua operação.',
    whatsappMessage:
      'Olá Erick! Tenho interesse em desenvolver um Site Profissional ou Sistema sob medida para minha empresa.',
    highlights: [
      'Design exclusivo alinhado à identidade da marca',
      'Performance extrema, SEO técnico e 100% responsivo',
      'Landing Pages focadas em conversão de tráfego pago',
      'Sistemas personalizados para automatizar rotinas',
    ],
    steps: [
      {
        step: '01',
        title: 'Clareza de Posicionamento',
        description:
          'Estruturamos a arquitetura da informação para que o visitante entenda o que você faz e como falar com você em segundos.',
      },
      {
        step: '02',
        title: 'Endereço Digital da Marca',
        description:
          'Criamos uma interface moderna, tecnológica e persuasiva que transmite profissionalismo imediato em qualquer tela.',
      },
      {
        step: '03',
        title: 'Sistemas Sob Medida',
        description:
          'Se a sua rotina exige agendamentos, painéis administrativos ou controle interno, projetamos a solução exata para o problema.',
      },
      {
        step: '04',
        title: 'Escopo Transparente Antes do Código',
        description:
          'Alinhamos objetivos, funcionalidades e etapas antes do desenvolvimento para você ter total previsibilidade do que está contratando.',
      },
      {
        step: '05',
        title: 'Entrega, Publicação e Suporte',
        description:
          'Publicamos seu projeto em infraestrutura rápida e segura com domínio próprio, certificado SSL e integração com WhatsApp.',
      },
    ],
    deliverables: [
      'Sites Institucionais, Portfólios e Landing Pages de Alta Conversão',
      'Sistemas Web Full-Stack (painéis, agendamentos, cadastros e dashboards)',
      'Integração nativa com WhatsApp, formulários, pixels de rastreamento e Google',
      'Código limpo, moderno e otimizado para carregamento ultrarrápido',
    ],
  },
  {
    id: 'lojas-virtuais',
    slug: 'lojas-virtuais',
    shortTitle: 'Lojas Virtuais',
    title: 'Lojas Virtuais & E-commerce',
    badge: 'Venda 24h para todo o Brasil',
    tagline: 'Transforme produtos perdidos em conversas em uma vitrine profissional.',
    summary:
      'E-commerces completos, seguros e otimizados para apresentar seu catálogo, calcular frete e fechar vendas automaticamente 24 horas por dia.',
    heroDescription:
      'Quando seu catálogo fica espalhado em mensagens soltas, você perde vendas todos os dias. Construímos sua loja virtual própria com identidade visual marcante, checkout transparente e operação alinhada à sua rotina.',
    whatsappMessage:
      'Olá Erick! Quero criar ou profissionalizar minha Loja Virtual para vender 24h por dia.',
    highlights: [
      'Vitrine própria com a identidade visual da sua marca',
      'Catálogo organizado com fotos, variações e estoque',
      'Checkout seguro com PIX, Cartão e cálculo de frete',
      'Preparada para receber campanhas de Tráfego Pago',
    ],
    steps: [
      {
        step: '01',
        title: 'Fim do Catálogo Perdido',
        description:
          'Organizamos a jornada de compra para o cliente consultar produtos, preços e condições sem depender de respostas manuais.',
      },
      {
        step: '02',
        title: 'Vitrine com Identidade Própria',
        description:
          'Reunimos catálogo, fotos e descrições persuasivas em uma loja que valoriza seus produtos e gera confiança.',
      },
      {
        step: '03',
        title: 'Do Produto ao Carrinho',
        description:
          'Configuramos variações (tamanho, cor, kit), meios de pagamento e regras de envio conforme a necessidade do seu projeto.',
      },
      {
        step: '04',
        title: 'Operação Alinhada ao Negócio',
        description:
          'Antes de lançar, mapeamos sua logística de entregas, estoque e atendimento para que a loja rode sem gargalos.',
      },
      {
        step: '05',
        title: 'Pronta para Escalar Vendas',
        description:
          'Conectamos sua loja ao Instagram Shopping, Google e campanhas de tráfego para atrair compradores todos os dias.',
      },
    ],
    deliverables: [
      'Layout responsivo otimizado para compras pelo celular',
      'Integração com gateways de pagamento (PIX, cartão de crédito e boleto)',
      'Configuração de frete (Correios, transportadoras e entrega local)',
      'Treinamento completo para gerenciar pedidos, produtos e cupons',
    ],
  },
  {
    id: 'automacao-whatsapp',
    slug: 'automacao-whatsapp',
    shortTitle: 'Automação WhatsApp',
    title: 'Atendentes Virtuais & Automações',
    badge: 'Atendimento Inteligente 24/7',
    tagline: 'Menos repetição no atendimento, mais agilidade e conversão.',
    summary:
      'Atendimento automatizado no WhatsApp com fluxos inteligentes disponíveis 24 horas por dia para qualificar leads e agilizar orçamentos.',
    heroDescription:
      'Responder todo dia às mesmas perguntas sobre horários, preços e serviços consome o tempo da sua equipe. Criamos fluxos inteligentes no WhatsApp que organizam o primeiro contato, filtram a necessidade do cliente e transferem para o humano na hora certa.',
    whatsappMessage:
      'Olá Erick! Quero automatizar o atendimento do WhatsApp da minha empresa.',
    highlights: [
      'Respostas instantâneas 24 horas por dia, 7 dias por semana',
      'Triagem inteligente por tipo de serviço ou orçamento',
      'Redução drástica de tarefas repetitivas da equipe',
      'Transbordo organizado para atendimento humano',
    ],
    steps: [
      {
        step: '01',
        title: 'Mapeamento das Perguntas Frequentes',
        description:
          'Identificamos os gargalos do seu atendimento diário: horários, localização, catálogo e pedidos de orçamento.',
      },
      {
        step: '02',
        title: 'Abertura com Clareza',
        description:
          'Estruturamos mensagens de boas-vindas objetivas e humanizadas que entregam as informações iniciais em segundos.',
      },
      {
        step: '03',
        title: 'Um Fluxo para Cada Necessidade',
        description:
          'Direcionamos dúvidas, agendamentos, suporte e solicitações de orçamento por trilhas inteligentes sob medida.',
      },
      {
        step: '04',
        title: 'Automação + Toque Humano',
        description:
          'Automatizamos o que é repetitivo e mantemos um caminho rápido e organizado para falar com um especialista da sua equipe.',
      },
      {
        step: '05',
        title: 'Atendimento Escalável',
        description:
          'Nenhum lead fica sem resposta fora do horário comercial — sua empresa atende com velocidade e padrão profissional.',
      },
    ],
    deliverables: [
      'Desenho completo da árvore de atendimento e copywriting das mensagens',
      'Fluxos automatizados de qualificação de leads e envio de catálogos/links',
      'Roteamento por setor e transbordo para atendente humano',
      'Ajustes finos baseados nas conversas reais dos seus clientes',
    ],
  },
  {
    id: 'plaquinhas-inteligentes',
    slug: 'plaquinhas-inteligentes',
    shortTitle: 'Plaquinhas NFC + QR',
    title: 'Plaquinhas Inteligentes (NFC + QR Code)',
    badge: 'Conexão Físico + Digital',
    tagline: 'Aproximou, conectou: mais avaliações no Google, seguidores e PIX instantâneo.',
    summary:
      'Plaquinhas físicas personalizadas com tecnologia NFC (aproximação) e QR Code para acelerar avaliações no Google, seguidores no Instagram e pagamentos via PIX.',
    heroDescription:
      'Conecte o balcão físico da sua empresa diretamente ao digital. Com as Plaquinhas Inteligentes EB, seu cliente apenas aproxima o celular (NFC) ou aponta a câmera (QR Code) para avaliar sua empresa com 5 estrelas, seguir seu Instagram ou pagar via PIX sem erros.',
    whatsappMessage:
      'Olá Erick! Quero encomendar as Plaquinhas Inteligentes EB (NFC + QR Code) para o meu negócio.',
    highlights: [
      'Tecnologia dupla: Aproximação NFC + QR Code de alta leitura',
      'Acabamento premium personalizado com a sua marca',
      'Compra no varejo ou atacado — sem pedido mínimo',
      'Dashboard de vendas integrado para parceiros e revenda',
    ],
    steps: [
      {
        step: '01',
        title: 'Escolha os Modelos Ideais',
        description:
          'Selecione entre Placa Google Avaliações, Placa Instagram, Placa PIX ou o kit completo para o seu balcão.',
      },
      {
        step: '02',
        title: 'Personalização e Programação',
        description:
          'Gravamos os links diretos do seu perfil do Google, Instagram ou chave PIX no chip NFC e no QR Code de alta precisão.',
      },
      {
        step: '03',
        title: 'Posicione no Ponto de Contato',
        description:
          'Coloque no caixa, mesa, recepção ou entregador — onde o cliente já está satisfeito e com o celular na mão.',
      },
      {
        step: '04',
        title: 'Aproximou, Converteu',
        description:
          'Sem precisar digitar @ ou procurar o nome da loja: em 2 segundos a tela certa abre no smartphone do cliente.',
      },
      {
        step: '05',
        title: 'Crescimento Contínuo',
        description:
          'Mais avaliações 5 estrelas no Google, mais seguidores reais no Instagram e pagamentos PIX sem fila no balcão.',
      },
    ],
    deliverables: [
      'Placa EB Google Avaliações (direto para a tela de 5 estrelas)',
      'Placa EB Instagram (conexão instantânea com seu perfil)',
      'Placa EB PIX (pagamento rápido e sem erro de digitação)',
      'Opções unitárias ou no atacado sem pedido mínimo',
    ],
    plaques: [
      {
        id: 'google',
        name: 'Placa EB — Avaliações Google',
        subtitle: 'Conquiste a confiança do cliente com avaliações 5 estrelas agora',
        accent: '#2563EB',
        badge: 'Mais Vendida',
        description:
          'Você não precisa implorar por avaliações: simplifique e acelere a conquista de provas sociais reais no Google Meu Negócio.',
        cta: 'Quero minha Plaquinha Google EB',
      },
      {
        id: 'instagram',
        name: 'Placa EB — Seguidores Instagram',
        subtitle: 'Transforme visitantes do seu espaço físico em seguidores engajados',
        accent: '#EC4899',
        badge: 'Engajamento Real',
        description:
          'Mostre que seu negócio é ativo e conecte cada cliente que passa pelo seu balcão ao seu perfil oficial no Instagram.',
        cta: 'Quero minha Plaquinha Instagram EB',
      },
      {
        id: 'pix',
        name: 'Placa EB — Pagamento PIX',
        subtitle: 'Pagamentos instantâneos e vendas sem interrupções no caixa',
        accent: '#10B981',
        badge: 'Agilidade no Caixa',
        description:
          'Elimine erros de digitação de chave PIX e filas no atendimento com pagamento por aproximação NFC ou leitura rápida de QR Code.',
        cta: 'Quero minha Plaquinha PIX EB',
      },
    ],
  },
];
