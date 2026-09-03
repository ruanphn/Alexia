# Memorial de Desenvolvimento — Website Alexia Capibaribe

Este documento registra a memória do projeto, decisões técnicas, escolhas de design e funcionalidades implementadas no website profissional da advogada **Dra. Alexia Alencar Capibaribe** (OAB/CE 45.061), especialista em **Direito Digital & Proteção de Dados**.

---

## 🎯 Posicionamento e Dados Oficiais

*   **Nome Profissional:** Alexia Capibaribe
*   **Nome Completo:** ALEXIA ALENCAR CAPIBARIBE
*   **Inscrição Profissional:** OAB/CE 45.061
*   **WhatsApp Oficial:** (85) 99635-0989 (`+55 85 99635-0989`)
*   **Instagram Oficial:** `@alexiaalecapi.adv` (`https://www.instagram.com/alexiaalecapi.adv`)
*   **Posicionamento Oficial:** Advogada · Direito Digital & Proteção de Dados
*   **Público-alvo:** Empresas de pequeno e médio porte, startups, scale-ups, clínicas médicas e executivos que operam no ambiente digital com segurança, conformidade e inteligência jurídica.
*   **Slogan principal:** "Direito · Tecnologia · Dados · Negócios"
*   **Proposta de valor:** "Na fronteira entre inovação e conformidade." / "Uma marca jurídica boutique para empresas e executivos que operam na fronteira entre inovação e conformidade."
*   **Certificações de Autoridade:**
    *   Certificação Internacional pelo **Dale Carnegie Course** em liderança, comunicação estratégica e relações humanas de alto impacto.
    *   **EXIN BCS Artificial Intelligence (Foundation)**
    *   **EXIN Information Security Management ISO/IEC 27001 (Professional)**
    *   **EXIN Privacy & Data Protection (Foundation)**

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
*   **Hero Split:** Lado esquerdo com texto e CTAs em fundo navy; lado direito com a foto profissional da advogada (`assets/alexia2.jpg`).
*   **Métricas Atualizadas:**
    *   `+ 25` projetos de adequação à LGPD
    *   `+ 6` anos de atuação jurídica
    *   `+ 50` empresas assessoradas
    *   `Brasil` Atuação Digital Nacional

### 3. Reformulação Estratégica das Especialidades (2026-09-03)
Implementação de **sistema de abas interativas** elegantes em substituição ao grid estático antigo, abrangendo 5 áreas e todos os serviços listados pela Dra. Alexia:
1.  **Direito Digital:** 7 serviços detalhados (Remoção de conteúdo ofensivo, Recuperação de contas e perfis, Crimes e golpes virtuais, Proteção da honra e imagem, Preservação de provas digitais, Direito autoral na internet, Inteligência Artificial e Direito).
2.  **LGPD & Proteção de Dados:** 8 serviços detalhados (Adequação, Mapeamento, Governança, Contratos e cláusulas, Políticas internas/externas, Gestão de incidentes, Treinamentos, DPO as a Service).
3.  **Contratos de Tecnologia:** 5 serviços detalhados (Software e SaaS, Desenvolvimento de tecnologia, Serviços de TI e cloud, Startups e empresas tech, Negociação e gestão contratual).
4.  **Propriedade Intelectual:** 5 serviços detalhados (Proteção de marcas, Direitos autorais, Contratos de PI, Uso indevido e violação, Ativos em negócios digitais).
5.  **Governança de Dados na Saúde (Destaque):** Foco em Direito Médico e LGPD para Clínicas, com conceito e 10 tópicos de ação voltados ao art. 11 da LGPD, prontuários eletrônicos e relação médico-paciente.

### 4. Diagnóstico de Conformidade Digital (Quiz 6 Etapas)
*   6 novas perguntas objetivas com 4 opções de resposta (A, B, C, D) fornecidas no documento oficial.
*   Cálculo normalizado de 0 a 100 pontos de maturidade/risco e link automático com mensagem personalizada para o WhatsApp da Dra. Alexia.

### 5. Seção de Artigos & Insights Jurídicos (Substituição do FAQ)
*   Remoção integral da seção de FAQ para manter o foco na alta conversão.
*   Inclusão da seção **Artigos & Insights** com leitor em **modal imersivo clean** (sem sair da landing page) e botões dedicados ao WhatsApp.

### 6. Refinamentos Visuais & UX/UI (2026-09-03 · v3.1)
*   **Transição Métricas → Especialidades:** Eliminação do excesso de padding com adição de divisória elegante abaixo dos números de autoridade.
*   **Padronização da Governança na Saúde:** Unificação do cabeçalho no mesmo padrão limpo dos outros painéis.
*   **Diagnóstico em Linha Única:** Formatação tipográfica para o título não quebrar a palavra "Digital".
*   **Carrossel de Artigos:** Slider horizontal com 3 artigos por vez e navegação com setas (`←` / `→`).

### 7. Apresentação Editorial das Especialidades e Bloco Sobre (2026-09-03 · v3.3 a v4.0)
*   **Regra Universal dos 3 Cards Iniciais (Web & Mobile):** Cada especialidade abre exibindo exatamente 3 cards iniciais (1 linha no Desktop) e um botão expansor centralizado `Ver todos os serviços (+X)`. Ao clicar, expande todos os serviços com animação fluida; ao alternar abas, o estado compacto é automaticamente resetado.
*   **Grade de Especialidades no Mobile:** Botões em grade moderna 2x2 (+ 1 centralizado) com botão ativo em azul naval nobre, substituindo a lista vertical.
*   **Centralização Universal:** Títulos e subtítulos de todas as seções perfeitamente centralizados (`.section-header.centered`).
*   **Redesenho da Seção Sobre & Tags Otimizadas:** Topo centralizado com nome e citação de impacto; foto com badge OAB flutuante translúcido; 6 tags idênticas na web e no mobile organizadas em grade simétrica de 2 colunas compactas, economizando 60% de espaço vertical; Lado Direito com biografia, vitrine dos 3 selos EXIN e botão CTA 100% de ponta a ponta.
*   **Separação Cromática e Arquitetônica:** Linha divisória suave em degradê no encerramento de `#diagnostico`; seção `#sobre` com fundo `alt-bg`, conferindo contraste nítido e alternância harmônica contínua na rolagem da landing page.

---

## 📄 Estrutura de Arquivos

```
SITE-ALEXIA/
├── index.html          # Estrutura semântica e dados oficiais da Dra. Alexia
├── style.css           # Design system Navy/Prata/Papel + abas + modal + responsividade
├── script.js           # Lógica do preloader, abas, quiz 6 etapas, leitor modal e WhatsApp
├── MEMORIA.md          # Este memorial oficial atualizado
└── assets/
    ├── Identidade Visual - Alexia Capibaribe (1).png  # Manual de marca
    ├── alexia2.jpg             # Foto profissional oficial (Hero)
    ├── certificado.jpg         # Foto com certificado Dale Carnegie (Sobre)
    ├── selo-exin-ai.svg        # Selo EXIN BCS Artificial Intelligence Foundation
    ├── selo-exin-iso27001.svg  # Selo EXIN ISO/IEC 27001 Professional
    └── selo-exin-pdpf.svg      # Selo EXIN Privacy & Data Protection Foundation
```

---

## 🛠️ Próximos Passos

1.  **Ajuste Fino do Texto Sobre:** Dra. Alexia definirá o complemento final da frase *"Minha missão é entregar clareza jurídica e segurança para..."*.
2.  **Publicação Web:** Realizar deploy em plataforma de hospedagem estática (Vercel, Netlify ou GitHub Pages).
3.  **Configuração de Domínio:** Apontar o domínio personalizado (ex: `alexiacapibaribe.adv.br`).
4.  **Analytics:** Inserir tag de mensuração (Google Analytics 4 ou Meta Pixel) para acompanhar acessos e conversões do quiz, modal de artigos e WhatsApp.
