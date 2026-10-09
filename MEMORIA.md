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
├── index.html          # Landing page boutique com SEO, Diagnóstico 7 etapas e Cookie Banner LGPD
├── admin.html          # Portal Administrativo executivo para gestão de Leads e Artigos
├── style.css           # Design system Navy/Prata/Papel + formulários + modais + responsividade
├── script.js           # Lógica do preloader, abas, quiz 7 etapas, leitor de artigos, lead gate e cookies LGPD
├── favicon.svg         # Favicon institucional da Dra. Alexia Capibaribe
├── robots.txt          # Diretivas de rastreamento com proteção para /admin.html
├── sitemap.xml         # Mapa do site para indexação do Google
├── package.json        # Dependências Vercel / Neon Serverless Postgres
├── MEMORIA.md          # Memorial oficial atualizado
├── api/
│   ├── auth.js         # Autenticação serverless para o Portal Administrativo
│   ├── diagnostico.js  # Recepção e processamento de leads e respostas do Quiz
│   ├── leads.js        # Consulta e gerenciamento dos leads para o Admin
│   └── artigos.js      # CRUD completo e persistência dos artigos no Neon Postgres
└── assets/
    ├── alexia2.jpg             # Foto profissional oficial (Hero)
    ├── certificado.jpg         # Foto com certificado Dale Carnegie (Sobre)
    ├── selo-exin-ai.svg        # Selo EXIN BCS Artificial Intelligence Foundation
    ├── selo-exin-iso27001.svg  # Selo EXIN ISO/IEC 27001 Professional
    ├── selo-exin-pdpf.svg      # Selo EXIN Privacy & Data Protection Foundation
    └── brand/                  # Identidade vetorial e ativos em uso
        ├── monograma-alexia.svg        # Monograma vetorial (Navbar e Admin)
        ├── monograma-transparent.svg   # Marca d'água vetorial de fundo (Seções e Rodapé)
        └── logo-principal-white.png    # Logotipo oficial (Preloader e Rodapé)
```

---

## 🚀 Novas Atualizações & Arquitetura (v4.3 — Em Andamento Local)

### 1. Conformidade LGPD Rigorosa (Cookie Banner & Central de Privacidade)
*   **Aviso Transparente:** Banner fixo na base com design executivo, fundamentação legal na LGPD (Lei nº 13.709/2018) e paridade de botões (*Aceitar Todos*, *Rejeitar Não Essenciais*, *Preferências*).
*   **Modal de Preferências Granulares:** Divisão em três categorias (*Necessários*, *Analíticos & Estatísticos*, *Atendimento & Comunicação*) com controle por switches acessíveis.
*   **Gestão de Autonomia do Usuário:** Armazenamento em `localStorage` e botão flutuante permanente no canto inferior esquerdo para alteração ou revogação a qualquer momento.

### 2. Diagnóstico & Captura de Leads (Inbound Gate Integrado)
*   **Etapa 7 de Identificação Corporativa:** Adição de formulário com Nome Completo, E-mail Corporativo, WhatsApp com máscara automática `(85) 9XXXX-XXXX`, Empresa, Perfil e Checkbox de consentimento da LGPD.
*   **Gravação de Respostas Detalhadas:** Cada pergunta assinalada (1 a 6) é gravada junto com os dados cadastrais do lead, permitindo auditoria completa antes do primeiro contato.
*   **Resultado e WhatsApp Dinâmico:** Geração do score (0 a 100), classificação de risco (Alto, Moderado, Baixo) e link de WhatsApp já configurado com o nome do cliente e da empresa.

### 3. Portal Administrativo Executivo (`admin.html`)
*   **Acesso Seguro:** Tela de login corporativa blindada com autenticação serverless (`/api/auth`) e chave de acesso configurada exclusivamente via variável de ambiente da Vercel (`ADMIN_PASSWORD`), sem qualquer senha gravada no código.
*   **Métricas em Tempo Real:** Total de leads, urgências de Risco Alto, Risco Moderado e Risco Baixo.
*   **Raio-X do Lead:** Modal interativo para a Dra. Alexia consultar exatamente o que a empresa respondeu sobre mapeamento, políticas, contratos, incidentes e suporte jurídico.
*   **Ações Rápidas:** Botão para iniciar conversa no WhatsApp em 1 clique chamando o lead pelo nome, e exportação completa da base em planilha CSV (Excel).
*   **Gestão de Artigos:** Painel e modal de edição para publicação, edição e exclusão de artigos em tempo real.

### 4. Backend Serverless & Banco de Dados Neon Postgres (`/api`)
*   **Rotas Serverless:** Endpoints nativos Vercel (`auth.js`, `diagnostico.js`, `leads.js`, `artigos.js`) com tratamento de CORS e segurança por Bearer token.
*   **Driver Neon Serverless:** Utilização de `@neondatabase/serverless` para conexão rápida sem sobrecarga de pools via `DATABASE_URL`.
*   **Auto-Migration & Tabelas:** Criação sob demanda das tabelas `leads` e `artigos` caso não existam, garantindo deploys sem necessidade de scripts manuais.
*   **Resiliência Offline:** Fallback transparente para `localStorage` no frontend caso a API remota esteja indisponível em ambiente de desenvolvimento local.

### 5. Identidade Visual Oficial & Branding Vetorial
*   **Paleta Institucional Oficial:** Navy `#212e4e`, Ice Blue `#dae1f1`, Prata `#9ba7c2` e Off-White `#f6f8fc`.
*   **Tipografia Oficial:** Títulos em *Playfair Display*, citações em *Cormorant Garamond* e corpo em *Plus Jakarta Sans*.
*   **Ativos de Grife:** Inserção do logotipo oficial vetorizado e PNGs de alta fidelidade no Preloader, Header e Footer, além de `favicon.svg` dedicado.
*   **Presença de Marca no Preloader:** Logomarca no carregamento ampliada para 330px de largura e até 160px de altura (com limite responsivo de `82vw`), assegurando leitura nítida do nome e subtítulo da advocacia logo no primeiro contato.

### 6. Refinamento da Transição e Ergonomia do Hero (Foto Rente aos Ícones + Fade de 95px)
*   **Fundo do Bloco de Texto 100% Sólido:** Desativação definitiva dos glows decorativos de fundo (`.hero-glow-1` e `.hero-glow-2`) e aplicação explícita de `background: var(--color-navy)` (`#212e4e`) na coluna de texto (`.hero-text-col`) com alinhamento vertical uniforme (`align-items: stretch`).
*   **Foto Rente aos Ícones de Pilares (Eliminação de Vazio na Base):** Remoção de `display: flex; align-items: center` da `.hero-photo-col` e configuração de `display: block; width: 100%; height: 100%;` com `.hero-photo` em `object-position: center top; height: 100%; object-fit: cover;`. Isso faz com que a fotografia cubra 100% da coluna de cima a baixo, encostando a base da imagem diretamente sobre a faixa de ícones dos Pilares (`.pillars-section`), eliminando totalmente a faixa azul escura ociosa na junção entre os blocos.
*   **Ergonomia do Bloco Textual:** Elevação calibrada para `transform: translateY(-60px);`, mantendo o título nobre, os botões (*Falar no WhatsApp* e *Diagnóstico Gratuito*) e o badge OAB em altura ergonômica sem gerar vazios artificiais na base.
*   **Faixa de Transição Discreta (95px):** Calibração da largura do elemento (`.hero-transition-divider`) para **95px**, ocultando com precisão a linha de corte lateral do estúdio fotográfico sem avançar ou escurecer a iluminação e os cabelos da Dra. Alexia.
*   **Curva de Opacidade Natural:** Gradiente linear que parte de 100% sólido Navy no ponto divisório e se dissolve progressivamente (`100% -> 95% -> 72% -> 40% -> 12% -> 0%`), mantendo a integridade da foto de estúdio.
*   **Responsividade:** Ocultação automática da transição em telas mobile (`<= 900px`) com reset do transform (`transform: none`) e restauração do enquadramento padrão (`object-position: center 8%`).

### 7. Preloader Inteligente com Carregamento Real & Failsafe (UX/Performance)
*   **Condicionamento ao Carregamento Real:** Eliminação do timer cego anterior. Agora o preloader monitora em paralelo:
    1. O evento `window.load` (renderização do DOM, scripts e folhas de estilo);
    2. O carregamento completo das fontes oficiais do Google Fonts (`document.fonts.ready`);
    3. A decodificação e download da foto principal em alta resolução do Hero (`heroPhoto.complete` / `decode`).
*   **Grace Period (Tempo Mínimo de 750ms):** Caso o site carregue muito rápido (ex: em cache), o preloader não pisca em 1 frame — mantém um piso mínimo de 750ms para que a logomarca da Dra. Alexia anime com elegância antes de abrir o site.
*   **Failsafe de Segurança (2.8s):** Caso a rede do usuário oscile ou ocorra lentidão externa, um temporizador máximo de segurança garante que a cortina de carregamento feche automaticamente, impedindo tela travada.
*   **Desbloqueio Imediato de Interações:** Inclusão de `pointer-events: none` na classe `.fade-out`, permitindo que o usuário comece a navegar e clicar imediatamente assim que a transição de abertura tem início.

### 8. Textura de Monograma 'AC' em Repetição Nobre & Espaçada (Banner CTA Intermediário & Rodapé)
*   **Contexto & Refinamento:** O usuário enviou o ícone isolado da marca (`assets/brand/icone-alexia-square.jpg`) para orientar a proporção ideal, apontando que o micro-padrão denso anterior não havia ficado harmônico. O objetivo visual exato era recuperar a presença imponente da marca d'água grandiosa que o usuário havia apreciado na versão anterior, mas garantindo que o monograma aparecesse **100% completo, sem corte superior ou inferior**, e com respiro elegante.
*   **Aplicação do Ícone Vetorial Isolado (`assets/brand/monograma-transparent.svg`):**
    *   Utilização do vetor oficial do monograma "AC" com fundo 100% transparente e traços no tom da identidade visual (`#dae1f1`).
    *   Graças ao enquadramento com margens generosas (~35% de respiro superior/inferior nativos do ícone), o monograma agora fica perfeitamente contido na altura do banner sem ser cortado nas extremidades.
*   **Arquitetura & Calibração de Escala:**
    *   **Banner CTA:** Escala ampla e nobre com `background-size: 380px 380px;`, repetindo em uma única linha horizontal grandiosa, com opacidade sutil de **10% (`opacity: 0.10`)** via pseudo-elemento `::before`.
    *   **Rodapé:** Repetição sutil no mesmo padrão com `background-size: 380px 380px;` e opacidade suave de **8% (`opacity: 0.08`)**, criando um pano de fundo discreto atrás das colunas de navegação sem poluir a leitura.
    *   **Responsividade Mobile:** Em telas menores (`<= 900px`), a escala ajusta-se para `280px 280px`, mantendo o monograma centralizado e sem distorções no smartphone.
*   **Resultado Visual:**
    *   Acabamento de marca d'água de alta-costura/alfaiataria jurídica: o monograma ganha presença nobre e espaçada, sem a poluição de um papel de parede repetitivo e sem o corte grosseiro de uma imagem esticada. Textos, links e botões permanecem com contraste e legibilidade impecáveis (WCAG AAA).

### 9. Redesign e Ergonomia do Menu Mobile & Botão de Agendar Consulta
*   **Gaveta 100% Sólida em Dark Luxury Navy (#0c152a a #070d1a):** Substituição do antigo drawer recortado (280px em tom papel creme #f2f2e7 que cortava o cabeçalho) por uma gaveta full-width que cobre toda a viewport (height: calc(100vh - 80px) e 100dvh), com fundo 100% opaco e sólido. Isso eliminou completamente qualquer vazamento ou transparência do texto do Hero e de outros elementos de fundo.
*   **Botão CTA 'Agendar Consulta' Redesenhado:** Transformação completa do botão no mobile, que antes aparecia com texto invisível/desbotado, largura truncada e deslocado. Agora ele é um componente de destaque com largura total (width: 100%), gradiente verde WhatsApp vibrante (#25d366 a #1eb855), ícone oficial do WhatsApp vetorizado, tipografia branca nítida em peso 600, cantos arredondados (8px), sombra luminosa e excelente ergonomia de toque (16px de padding).
*   **Indicadores de Navegação (Chevrons ›):** Inclusão de elegantes chevrons à direita em cada link do menu (›), conferindo um padrão visual refinado de aplicativo móvel de grife jurídica.
*   **Hierarquia de Camadas (Z-Index) & Ocultação Automática do Banner de Cookies:**
    *   Header estruturado em z-index: 10001 e botão hambúrguer em 10002.
    *   Gaveta do menu em z-index: 10000 !important.
    *   Adição de classe dinâmica no ody (.mobile-menu-open) que oculta com transição limpa o banner e botão flutuante de cookies enquanto o menu móvel estiver ativo, garantindo zero sobreposição indesejada.
*   **Rodapé Institucional Integrado:** Inclusão de dados essenciais na base do menu com inscrição oficial da OAB (OAB/CE 45.061) e canal direto telefônico ((85) 99635-0989).
*   **Trava de Rolagem e Fechamento Ágil:** Ao abrir o menu, o scroll da página é travado (overflow: hidden), e ao clicar em qualquer item da navegação ou no botão de fechar, a gaveta se recolhe instantaneamente com restauração limpa da rolagem da página.

### 10. Integração Oficial do LinkedIn & Presença Profissional
*   **Canal Oficial Adicionado:** Integração do perfil profissional da Dra. Alexia Capibaribe (https://www.linkedin.com/in/alexia-alencar-capibaribe-422246178/).
*   **SEO Estruturado (Schema.org JSON-LD):** Adição de propriedade sameAs nos schemas de LegalService e no objeto ounder (Pessoa física), conectando a identidade do escritório ao perfil profissional verificado da Dra. Alexia para autoridade nos algoritmos do Google.
*   **Seção 'Sobre' (Call-to-Action Corporativo):** Inclusão do botão estilizado 'LinkedIn' ao lado de 'Agendar uma conversa', com ícone vetorial SVG e borda alinhada à paleta Navy. No mobile, os dois botões empilham-se harmonicamente em largura total (width: 100%).
*   **Rodapé Institucional:**
    *   Inclusão do botão de ícone de LinkedIn na barra de redes sociais (.footer-socials), compondo a tríade: LinkedIn, Instagram e WhatsApp.
    *   Inclusão do link textual 'LinkedIn Profissional' na coluna de Contato & Navegação.

### 11. Auditoria Mobile de Ponta a Ponta & Refinamentos Ergonômicos
*   **Verificação de Vazamento Lateral:** Confirmação via Playwright de scrollWidth == windowWidth em 393px, garantindo zero oscilação ou rolagem horizontal acidental em dispositivos móveis.
*   **Respiro Superior do Hero no Mobile:** Ajuste do padding de .hero-text-col para 104px 24px 48px;, assegurando que o subtítulo superior (*ADVOGADA · DIREITO DIGITAL & PROTEÇÃO DE DADOS*) fique 100% visível e com folga confortável abaixo do cabeçalho fixo de 80px.
*   **Modal de Leitura de Artigos em Camada Máxima:** Elevação de .article-modal-overlay para z-index: 11000, sobrepondo o cabeçalho do site com fechamento em 'X' destacado no topo direito e leitura imersiva.
*   **Diagnóstico Interativo (Quiz de 7 Etapas) no Smartphone:**
    *   Fluxo completo testado e validado: Etapas 1 a 6 com seleção por toque, avanço com validação e etapa 7 de captura de lead.
    *   Âncoras com scroll-margin-top: 100px: O relatório final rola suavemente para o campo visual sem ter o topo escondido pela barra de navegação fixa.
    *   Badge do Lead (*Relatório preparado para...*) com quebra de linha natural e centralizada.
    *   Botão de CTA do WhatsApp com ícone vetorizado preservado (lex-shrink: 0) e texto direto em largura total (*Falar com a Dra. Alexia no WhatsApp*).
    *   Widget flutuante de WhatsApp ajustado para mobile (ottom: 20px; right: 16px;) com supressão da bolha de texto expansiva em telas menores que 600px, impedindo que ela tape os botões de ação do formulário.

### 12. Blindagem de Segurança do Painel Administrativo & Proteção Antivazamento
*   **Purga Total de Credenciais do Código-Fonte:**
    *   Remoção definitiva de qualquer senha, chave ou hash de todos os arquivos do repositório (`admin.html`, `api/auth.js`, etc.).
    *   A validação da chave depende 100% da variável de ambiente `ADMIN_PASSWORD` cadastrada no cofre de segredos da Vercel.
*   **Autenticação 100% Server-Side na Vercel:**
    *   O endpoint `/api/auth` valida as requisições via POST no ambiente seguro do Node.js da Vercel, comparando com `process.env.ADMIN_PASSWORD`. O código do navegador apenas envia a tentativa via HTTPS e recebe o token de sessão. Nenhuma credencial ou hash existe no cliente.
*   **Proteção do DOM e Ocultação Anti-Inspecionar:**
    *   Toda a interface do painel (cabeçalho, abas, métricas, tabela de leads, editor de artigos e modais) foi encapsulada no container `#admin-app` com `display: none` nativo.
    *   Remoção das chamadas automáticas de `renderLeads()` e `renderArticles()` na carga inicial. Os dados só são injetados no DOM após a validação bem-sucedida de sessão (`ac_admin_auth === 'true'`). Um usuário não autenticado que inspecionar a página encontra apenas o formulário de login limpo, sem estrutura ou dados confidenciais expostos.
*   **Eliminação de Pistas em Arquivos Públicos (Robots & Scripts):**
    *   **`robots.txt`:** Remoção da diretiva `Disallow: /admin.html`, eliminando a exposição pública da URL para robôs e curiosos que vasculham o arquivo de rastreamento.
    *   **`admin.html`:** Adição de diretivas estritas `<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">` e `<meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet">` para impedir indexação nos mecanismos de busca sem divulgar a rota.
    *   **`script.js`:** Higienização de comentários de desenvolvimento que faziam menção à rota `/admin`.
*   **Protocolo de Deploy:**
    *   Respeito estrito à diretriz do usuário: nenhum commit ou push no repositório remoto Git sem prévia e explícita autorização.

### 13. Aplicação da Nova Foto (Hero & Currículo) e Otimização Extrema de Imagens (WebP & Picture) (2026-10-09)
*   **Nova Fotografia da Dra. Alexia no Hero e no Currículo/Sobre:** Inserção da fotografia oficial solicitada (`assets/alexia3.jpg` e `assets/alexia3.webp`), trazendo uma estética calorosa, comunicativa e contemporânea (blazer off-white/creme com conjunto rosa e fundo de tijolos claros), integrada tanto no Hero principal quanto no card de apresentação da seção Sobre / Currículo.
*   **Resolução do Problema de Tamanho/Peso de Imagens (WebP + `<picture>`):**
    *   A fotografia antiga do Hero (`alexia2.jpg`) pesava quase 3 MB (2.935 KB). A nova fotografia foi tratada e convertida para WebP moderno (`assets/alexia3.webp`), reduzindo para apenas **125 KB** (**95,7% de economia** de banda).
    *   A fotografia da certificação Dale Carnegie (`assets/certificado.jpg`) também foi convertida para WebP (`assets/certificado.webp`), caindo de 2,34 MB para **267 KB** (**88,5% de economia**).
    *   **Economia total combinada:** Redução de **~4,88 MB** na carga inicial de imagens do site, acelerando drasticamente o Largest Contentful Paint (LCP) e o preloader no mobile.
    *   Implementação da tag moderna `<picture>` com `<source type="image/webp">` e fallback padrão para JPG em navegadores legados no Hero e na seção Sobre.
*   **Enquadramento & Responsividade:**
    *   Configuração de `.hero-picture` e `.about-photo-picture` em `display: block; width: 100%; height: 100%;`.
    *   Alinhamento de `object-position` para valorizar a expressão facial, corte de ombro e blazer sem cortar o topo da cabeça em telas desktop (1440px / 1920px) e em celulares (393px).
    *   Atualização dos metatags `og:image` e `twitter:image` para exibição correta no compartilhamento social.
