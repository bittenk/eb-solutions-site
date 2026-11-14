# EB | Erick Bittencourt — Site Oficial

Site institucional e comercial desenvolvido em **React + Vite + Tailwind CSS**, com animações 3D interativas, background dinâmico em Canvas 3D, cards com inclinação espacial e páginas dedicadas para cada serviço.

## Estrutura do Projeto

- `public/erick-bittencourt.jpg` — Foto profissional exibida na página **Quem Sou Eu** e na **Home**
- `src/components/Background3D.jsx` — Fundo 3D animado com rede neural, grade em perspectiva e feixes luminosos
- `src/components/TiltCard3D.jsx` — Componente reutilizável de card 3D interativo com reflexo especular
- `src/components/ServiceIllustrations3D.jsx` — Ícones e painéis 3D personalizados por serviço
- `src/components/Navbar.jsx` & `Footer.jsx` — Navegação responsiva e rodapé assinado com canais oficiais
- `src/pages/HomePage.jsx` — Página inicial completa
- `src/pages/AboutPage.jsx` — Página **Quem Sou Eu**
- `src/pages/ServiceDetailPage.jsx` — Páginas individuais para cada um dos 6 serviços
- `netlify.toml` — Configuração pronta para deploy automático na Netlify

## Como rodar localmente no seu computador

```bash
npm install
npm run dev
```

## Como publicar no GitHub e hospedar na Netlify

1. Crie um repositório no seu GitHub e envie os arquivos desta pasta (`git init`, `git add .`, `git commit -m "Site EB Solutions"`, `git push`).
2. Acesse [app.netlify.com](https://app.netlify.com), clique em **Add new site > Import an existing project** e conecte seu repositório do GitHub.
3. A Netlify detectará automaticamente o arquivo `netlify.toml` (`npm run build` e pasta `dist`). Basta clicar em **Deploy site**.
