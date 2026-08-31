# Memorial de Desenvolvimento — Website Alexia Capibaribe

Este documento registra a memória do projeto, decisões técnicas, escolhas de design e funcionalidades implementadas no website profissional da advogada **Dra. Alexia Alencar Capibaribe** (OAB/CE 45.061), especialista em **Direito Digital**.

---

## 🎯 Posicionamento e Dados Oficiais

*   **Nome Profissional:** Alexia Capibaribe
*   **Nome Completo:** ALEXIA ALENCAR CAPIBARIBE
*   **Inscrição Profissional:** OAB/CE 45.061
*   **WhatsApp Oficial:** (85) 99635-0989 (`+55 85 99635-0989`)
*   **Instagram Oficial:** `@alexiaalecapi.adv` (`https://www.instagram.com/alexiaalecapi.adv`)
*   **Especialidade:** Advogada · Direito Digital, LGPD, Contratos de Tecnologia e Consultoria Empresarial
*   **Público-alvo:** Empresas, startups, scale-ups e executivos que operam na fronteira entre inovação e conformidade
*   **Slogan principal:** "Direito · Tecnologia · Dados · Negócios"
*   **Proposta de valor:** Uma marca jurídica boutique para empresas e executivos que operam na fronteira entre inovação e conformidade.
*   **Diferencial Curricular:** Certificação Internacional pelo **Dale Carnegie Course** em liderança, comunicação estratégica e relações humanas de alto impacto.

---

## 📅 Histórico de Desenvolvimento

### 1. Planejamento e Identidade Visual (2026-08-31)
*   **Identidade Visual:** Baseada no manual oficial (`assets/Identidade Visual - Alexia Capibaribe (1).png`).
*   **Paleta de Cores:**
    *   Azul Marinho (`#19315f`) — autoridade, corporativo, tech.
    *   Prata Metálico (`#9ea4b4`) — sofisticação e precisão.
    *   Papel (`#f2f2e7`) — fundo editorial elegante com conforto visual.
    *   Tinta (`#1f1f1e`) — contraste refinado para leitura.
*   **Tipografia:**
    *   `Marcellus` (Google Fonts) — títulos, nome e citações com estética contemporânea.
    *   `Jost` (Google Fonts) — parágrafos, botões e elementos funcionais.
*   **Monograma AC:** Iniciais entrelaçadas em SVG vetorizado integrado no Preloader, Header e Footer.

### 2. Estruturação e Diferenciação de Layout
*   **Hero Split:** Lado esquerdo com texto e CTAs em fundo navy; lado direito com a foto profissional da advogada (`assets/alexia.PNG`) em enquadramento nobre.
*   **Pilares Temáticos:** Faixa horizontal com ícones para Direito, Tecnologia, Dados e Negócios.
*   **Áreas de Atuação:** Grid 2×2 com números decorativos e hover interativo em Azul Marinho.
*   **Diagnóstico de Conformidade:** Quiz interativo de 5 etapas com cálculo de risco LGPD e geração de lead com mensagem pronta para o WhatsApp.
*   **Seção Sobre:** Apresentação da trajetória com foto da advogada segurando seu certificado oficial (`assets/certificado.jpg`) e badge de destaque da certificação Dale Carnegie.
*   **FAQ Estratégico:** Dúvidas sobre LGPD, DPAs, contratos de tecnologia, retenção jurídica e produtos digitais.
*   **Widget WhatsApp:** Botão flutuante inteligente com balão de saudação e janela de chat interativa.

---

## 📄 Estrutura de Arquivos

```
SITE-ALEXIA/
├── index.html          # Estrutura semântica e dados oficiais da Dra. Alexia
├── style.css           # Design system Navy/Prata/Papel + responsividade total
├── script.js           # Lógica do preloader FLIP, quiz LGPD e WhatsApp lead
├── MEMORIA.md          # Este documento oficial
└── assets/
    ├── Identidade Visual - Alexia Capibaribe (1).png  # Manual de marca
    ├── alexia2.jpg      # Foto profissional oficial (Hero)
    └── certificado.jpg  # Foto com certificado Dale Carnegie (Sobre)
```

---

## 🛠️ Próximos Passos

1.  **Publicação Web:** Realizar deploy em plataforma de hospedagem estática (Vercel, Netlify ou GitHub Pages).
2.  **Configuração de Domínio:** Apontar o domínio personalizado (ex: `alexiacapibaribe.adv.br`).
3.  **Analytics:** Inserir tag de mensuração (Google Analytics 4 ou Meta Pixel) para acompanhar acessos e conversões do quiz e WhatsApp.
