/* ==========================================================================
   INTERATIVIDADE — ALEXIA CAPIBARIBE ADVOCACIA
   Vanilla JS ES6+ · Sem dependências · Alta performance
   ========================================================================== */

const WA_NUMBER = '5585996350989';

document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initHeaderScroll();
    initMobileMenu();
    initSpecialtyTabs();
    initQuiz();
    initArticleModal();
    initArticlesCarousel();
    initWhatsappWidget();
});


/* ==========================================================================
   0. PRELOADER — animação FLIP do monograma para o header
   ========================================================================== */
function initPreloader() {
    const preloader     = document.getElementById('preloader');
    const preloaderMono = document.getElementById('preloader-monogram');

    if (!preloader || !preloaderMono) return;

    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

    setTimeout(() => {
        preloaderMono.classList.add('animate-in');
    }, 100);

    setTimeout(() => {
        preloader.classList.add('fade-out');
    }, 1000);

    setTimeout(() => {
        preloader.style.display = 'none';
        document.body.classList.add('loaded');
    }, 1600);
}


/* ==========================================================================
   1. HEADER — efeito ao rolar
   ========================================================================== */
function initHeaderScroll() {
    const header = document.getElementById('main-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 30);
    }, { passive: true });
}


/* ==========================================================================
   2. MENU MOBILE
   ========================================================================== */
function initMobileMenu() {
    const mobileBtn = document.getElementById('mobile-btn');
    const navMenu   = document.getElementById('nav-menu');
    if (!mobileBtn || !navMenu) return;

    const navLinks = navMenu.querySelectorAll('a');

    mobileBtn.addEventListener('click', () => {
        mobileBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileBtn.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Fecha menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active')
            && !navMenu.contains(e.target)
            && !mobileBtn.contains(e.target)) {
            mobileBtn.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}


/* ==========================================================================
   3. ESPECIALIDADES — NAVEGAÇÃO ENTRE ABAS
   ========================================================================== */
function initSpecialtyTabs() {
    // Teclado acessível para abas
    const tabs = document.querySelectorAll('.editorial-tab-btn');
    tabs.forEach((tab, idx) => {
        tab.addEventListener('keydown', (e) => {
            let targetTab = null;
            if (e.key === 'ArrowRight') {
                targetTab = tabs[(idx + 1) % tabs.length];
            } else if (e.key === 'ArrowLeft') {
                targetTab = tabs[(idx - 1 + tabs.length) % tabs.length];
            }
            if (targetTab) {
                targetTab.focus();
                targetTab.click();
            }
        });
    });
}

function switchSpecialtyTab(tabKey) {
    const allTabs    = document.querySelectorAll('.editorial-tab-btn');
    const allPanels  = document.querySelectorAll('.specialty-panel');
    const activeTab  = document.getElementById(`tab-${tabKey}`);
    const activePanel = document.getElementById(`panel-${tabKey}`);

    if (!activeTab || !activePanel) return;

    allTabs.forEach(tab => {
        tab.classList.remove('active');
        tab.setAttribute('aria-selected', 'false');
    });

    allPanels.forEach(panel => {
        panel.classList.remove('active');
        panel.classList.remove('is-expanded');
        const expandBtn = panel.querySelector('.btn-expand-services');
        if (expandBtn) {
            expandBtn.setAttribute('aria-expanded', 'false');
            const label = expandBtn.querySelector('span');
            if (label) {
                const totalCards = panel.querySelectorAll('.service-item-card').length;
                const remaining = totalCards - 3;
                label.textContent = `Ver todos os serviços (+${remaining})`;
            }
        }
    });

    activeTab.classList.add('active');
    activeTab.setAttribute('aria-selected', 'true');
    activePanel.classList.add('active');
}

function toggleExpandPanel(btn) {
    const panel = btn.closest('.specialty-panel');
    if (!panel) return;
    const isExpanded = panel.classList.toggle('is-expanded');
    btn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    const label = btn.querySelector('span');
    if (label) {
        const totalCards = panel.querySelectorAll('.service-item-card').length;
        const remaining = totalCards - 3;
        label.textContent = isExpanded ? 'Recolher serviços' : `Ver todos os serviços (+${remaining})`;
    }
}


/* ==========================================================================
   4. DIAGNÓSTICO DE CONFORMIDADE DIGITAL — QUIZ LGPD (6 ETAPAS)
   ========================================================================== */
const QUIZ_TOTAL_STEPS = 6;
let quizAnswers = {};   // { step: score }
let quizCurrentStep = 1;

function initQuiz() {
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', () => {
            const step = option.closest('.quiz-step').id.replace('quiz-step-', '');
            option.closest('.quiz-options').querySelectorAll('.quiz-option').forEach(o => {
                o.classList.remove('selected');
            });
            option.classList.add('selected');
            quizAnswers[step] = parseInt(option.dataset.score, 10);
        });
    });

    updateProgressBar();
}

function quizNext(step) {
    if (quizAnswers[step] === undefined) {
        shakeQuizBtn(step);
        return;
    }

    const currentStepEl = document.getElementById(`quiz-step-${step}`);
    const nextStepEl    = document.getElementById(`quiz-step-${step + 1}`);

    if (!nextStepEl) return;

    currentStepEl.classList.remove('active');
    nextStepEl.classList.add('active');
    quizCurrentStep = step + 1;
    updateProgressBar();
}

function quizBack(step) {
    const currentStepEl = document.getElementById(`quiz-step-${step}`);
    const prevStepEl    = document.getElementById(`quiz-step-${step - 1}`);
    if (!prevStepEl) return;

    currentStepEl.classList.remove('active');
    prevStepEl.classList.add('active');
    quizCurrentStep = step - 1;
    updateProgressBar();
}

function quizFinish() {
    if (quizAnswers[QUIZ_TOTAL_STEPS] === undefined) {
        shakeQuizBtn(QUIZ_TOTAL_STEPS);
        return;
    }

    // Calcula score total (soma dos scores de cada resposta)
    const totalScore = Object.values(quizAnswers).reduce((sum, s) => sum + s, 0);
    // Score máximo: 6 perguntas * 3 pontos = 18. Normaliza para 0–100.
    const scorePercent = Math.round(((18 - totalScore) / 18) * 100);

    let level, desc, waMsg;

    if (scorePercent >= 80) {
        level  = '🟢 Risco Baixo';
        desc   = 'Excelente! Sua empresa demonstra maturidade jurídica digital e governança de dados. Recomendamos uma auditoria preventiva periódica para manter a conformidade frente às resoluções recentes da ANPD e novas tecnologias.';
        waMsg  = `Olá! Realizei o Diagnóstico de Conformidade Digital no site e obtive nível de risco *Baixo* (${scorePercent}/100 pontos). Gostaria de conversar com a Dra. Alexia sobre governança contínua e assessoria especializada para minha empresa.`;
    } else if (scorePercent >= 50) {
        level  = '🟡 Risco Moderado';
        desc   = 'Atenção: sua empresa possui práticas preliminares, mas há lacunas críticas em contratos, plano de incidentes ou governança de dados que podem gerar passivos perante a ANPD e clientes.';
        waMsg  = `Olá! Realizei o Diagnóstico de Conformidade Digital no site e obtive nível de risco *Moderado* (${scorePercent}/100 pontos). Identificamos vulnerabilidades jurídicas que precisamos corrigir. Gostaria de agendar uma consulta.`;
    } else {
        level  = '🔴 Risco Alto';
        desc   = 'Urgente: sua operação apresenta alto grau de exposição jurídica, ausência de mapeamento formal e vulnerabilidade em caso de incidentes. É fundamental estruturar um plano de conformidade para evitar sanções regulatórias e perdas financeiras.';
        waMsg  = `Olá! Realizei o Diagnóstico de Conformidade Digital no site e obtive nível de risco *Alto* (${scorePercent}/100 pontos). Minha empresa precisa urgentemente de assessoria em Direito Digital e adequação LGPD. Podemos conversar?`;
    }

    document.getElementById('quiz-score-value').textContent = scorePercent;
    document.getElementById('quiz-result-level').textContent = level;
    document.getElementById('quiz-result-desc').textContent  = desc;

    const waLink = document.getElementById('quiz-whatsapp-btn');
    if (waLink) {
        waLink.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMsg)}`;
    }

    document.getElementById('quiz-body').style.display = 'none';
    document.querySelector('.quiz-progress-bar-track').style.display = 'none';

    const result = document.getElementById('quiz-result');
    result.classList.add('active');

    updateProgressBar(100);
}

function quizReset() {
    quizAnswers = {};
    quizCurrentStep = 1;

    document.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));

    document.getElementById('quiz-result').classList.remove('active');
    document.getElementById('quiz-body').style.display = 'block';
    document.querySelector('.quiz-progress-bar-track').style.display = 'block';

    document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
    document.getElementById('quiz-step-1').classList.add('active');

    updateProgressBar();
}

function updateProgressBar(forcePercent = null) {
    const fill = document.getElementById('quiz-progress');
    if (!fill) return;
    const percent = forcePercent !== null
        ? forcePercent
        : Math.round(((quizCurrentStep - 1) / QUIZ_TOTAL_STEPS) * 100);
    fill.style.width = percent + '%';
}

// Animação de shake quando o usuário tenta avançar sem responder
function shakeQuizBtn(step) {
    const btn = document.getElementById(`quiz-btn-${step}`);
    if (!btn) return;
    btn.style.animation = 'none';
    btn.offsetHeight; // reflow
    btn.style.animation = 'quizShake 0.4s ease';
    btn.addEventListener('animationend', () => { btn.style.animation = ''; }, { once: true });
}

// Injeta keyframe de shake dinamicamente
(function injectShakeKeyframe() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes quizShake {
            0%, 100% { transform: translateX(0); }
            20%       { transform: translateX(-6px); }
            40%       { transform: translateX(6px); }
            60%       { transform: translateX(-4px); }
            80%       { transform: translateX(4px); }
        }
    `;
    document.head.appendChild(style);
})();


/* ==========================================================================
   5. WIDGET FLUTUANTE DE ATENDIMENTO DO WHATSAPP
   ========================================================================== */
function initWhatsappWidget() {
    const widget  = document.getElementById('whatsapp-widget');
    const trigger = document.getElementById('whatsapp-btn-trigger');
    const chatBox = document.getElementById('whatsapp-chat-box');
    const bubble  = document.getElementById('whatsapp-bubble');

    if (!widget || !trigger || !chatBox) return;

    widget.classList.add('whatsapp-hidden');
    let revealed = false;

    const reveal = () => {
        if (revealed) return;
        revealed = true;
        widget.classList.remove('whatsapp-hidden');
        widget.classList.add('whatsapp-visible');
        window.removeEventListener('scroll', onScroll);

        // Mostra a bolha de atenção após 4s
        setTimeout(() => {
            if (!chatBox.classList.contains('open') && bubble) {
                bubble.classList.add('show');
            }
        }, 4000);

        // Esconde a bolha após 12s
        setTimeout(() => {
            if (bubble) bubble.classList.remove('show');
        }, 12000);
    };

    const onScroll = () => {
        if (window.scrollY > 100) reveal();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
}

function toggleWhatsappChat(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    const chatBox = document.getElementById('whatsapp-chat-box');
    const bubble  = document.getElementById('whatsapp-bubble');
    const badge   = document.querySelector('.notification-badge');

    if (!chatBox) return;

    const isOpen = chatBox.classList.contains('open');

    if (isOpen) {
        chatBox.classList.remove('open');
    } else {
        chatBox.classList.add('open');
        if (bubble) bubble.classList.remove('show');
        if (badge)  badge.style.display = 'none';

        // Foca no botão de chat após abertura
        setTimeout(() => {
            const sendBtn = document.querySelector('.btn-whatsapp-chat');
            if (sendBtn) sendBtn.focus();
        }, 150);
    }
}

function closeWhatsappBubble(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    const bubble = document.getElementById('whatsapp-bubble');
    if (bubble) bubble.classList.remove('show');
}

function recordWhatsappClick() {
    const chatBox = document.getElementById('whatsapp-chat-box');
    if (chatBox) {
        setTimeout(() => chatBox.classList.remove('open'), 1000);
    }
}


/* ==========================================================================
   6. ARTIGOS & INSIGHTS — LEITOR MODAL IMERSIVO
   ========================================================================== */
const ARTICLES_DATA = {
    'ai-risks': {
        category: 'Inovação & IA',
        readTime: '3 min de leitura',
        date: 'Atualizado em 2026',
        title: 'Inteligência Artificial e Riscos Jurídicos: O que as Empresas Devem Blindar em 2026',
        content: `
            <p>A rápida proliferação de ferramentas de Inteligência Artificial generativa no ambiente corporativo transformou a produtividade de equipes de marketing, desenvolvimento de software, finanças e atendimento. Contudo, a velocidade da adoção tecnológica superou, na maioria das empresas, a criação de diretrizes jurídicas claras.</p>
            
            <h4>1. O Risco de Violação de Propriedade Intelectual</h4>
            <p>Sistemas de IA são treinados em bases massivas de dados que muitas vezes contêm criações protegidas por direitos autorais. Quando um colaborador gera textos, códigos ou ilustrações utilizando prompts empresariais, surgem dois dilemas imediatos: a autoria da obra criada pela IA e o risco de reproduzir inadvertidamente trechos patenteados ou registrados de concorrentes.</p>

            <h4>2. Vazamento de Segredos de Negócio e Dados Pessoais</h4>
            <p>Ao inserir relatórios internos, contratos com clientes ou dados cadastrais em ferramentas públicas de IA, a empresa pode estar transferindo informações confidenciais para servidores de terceiros cujos Termos de Uso permitem o reaproveitamento desses dados para retreinamento de modelos. Isso configura incidente de segurança perante a LGPD e quebra de dever de confidencialidade com parceiros.</p>

            <h4>3. Diretrizes Práticas de Governança</h4>
            <ul>
                <li><strong>Política Interna de Uso de IA:</strong> Estabelecer formalmente quais ferramentas são homologadas pela organização e quais dados jamais podem ser submetidos a prompts públicos.</li>
                <li><strong>Blindagem em Contratos de Trabalho:</strong> Atualizar os acordos de confidencialidade (NDA) para abranger o uso de inteligência artificial generativa.</li>
                <li><strong>Auditoria em Fornecedores:</strong> Exigir cláusulas de transparência em ferramentas SaaS contratadas que declarem explicitamente onde os dados corporativos são processados.</li>
            </ul>

            <p>A inovação deve avançar, mas sempre amparada por governança jurídica para evitar sanções regulatórias e proteger o patrimônio intangível da organização.</p>
        `,
        ctaText: 'Quer blindar o uso de Inteligência Artificial na sua empresa?',
        ctaMsg: 'Olá Dra. Alexia, li seu artigo sobre Riscos Jurídicos e Inteligência Artificial e gostaria de orientações sobre como implementar uma política de governança de IA na minha empresa.'
    },

    'health-lgpd': {
        category: 'Direito Médico & LGPD',
        readTime: '4 min de leitura',
        date: 'Especial Clínicas 2026',
        title: 'Governança de Dados na Saúde: Da Coleta ao Prontuário Eletrônico',
        content: `
            <p>Na área da saúde, os dados pessoais dos pacientes pertencem à categoria mais protegida pelo ordenamento jurídico: os dados pessoais sensíveis (artigo 11 da LGPD). Prontuários, exames clínicos, laudos diagnósticos e informações genéticas exigem um rigor regulatório superior a qualquer outro segmento de mercado.</p>

            <h4>1. Bases Legais Adequadas e o Mito do Consentimento Irrestrito</h4>
            <p>Muitas clínicas ainda acreditam que o consentimento do paciente resolve todas as exigências legais. Todavia, em processos de saúde, o tratamento frequentemente se ampara na tutela da saúde (com procedimento realizado por profissionais ou entidades de saúde) ou no cumprimento de obrigação legal/regulatória (como as normas do CFM para guarda de prontuários por 20 anos). Compreender a base legal exata impede nulidades jurídicas.</p>

            <h4>2. Segurança da Informação e Controle de Acesso</h4>
            <p>O vazamento de um prontuário clínico acarreta danos morais presumidos e penalidades severas da ANPD. Por isso, a clínica precisa instituir:</p>
            <ul>
                <li><strong>Controle Granular de Permissões:</strong> Recepcionistas não devem acessar prescrições ou históricos médicos completos; o acesso deve ser restrito estritamente à necessidade de cada função.</li>
                <li><strong>Rastreabilidade de Logs:</strong> Sistemas de prontuário eletrônico (PEP) devem registrar data, horário e usuário em cada visualização ou alteração.</li>
                <li><strong>Acordo de Operador (DPA) com Fornecedores:</strong> Provedores de software médico, nuvem e laboratórios terceirizados devem assinar instrumentos de conformidade rigorosa.</li>
            </ul>

            <h4>3. Atendimento aos Direitos dos Pacientes</h4>
            <p>O paciente possui o direito de saber com quem seus dados são compartilhados, solicitar correções e revogar consentimentos em ações que não interfiram na obrigação de guarda médica. Uma clínica em conformidade com a LGPD conquista autoridade, credibilidade e fidelização do paciente.</p>
        `,
        ctaText: 'Deseja adequar sua clínica ou consultório à LGPD médica?',
        ctaMsg: 'Olá Dra. Alexia, li o artigo sobre Governança de Dados na Saúde e gostaria de conversar sobre a adequação da minha clínica/consultório às exigências da LGPD.'
    },

    'saas-contracts': {
        category: 'Contratos Tech',
        readTime: '3 min de leitura',
        date: 'Guia Tech 2026',
        title: 'Contratos de Software & SaaS: Cláusulas Críticas de Limitação de Responsabilidade e SLA',
        content: `
            <p>Startups e empresas desenvolvedoras de plataformas digitais muitas vezes utilizam modelos genéricos de prestação de serviços para licenciar soluções de software (SaaS). Essa prática representa um dos maiores riscos ao valuation e à saúde financeira do negócio.</p>

            <h4>1. Limitação de Responsabilidade Civil (Cap de Indenização)</h4>
            <p>Uma interrupção temporária de serviço ou instabilidade em uma API não pode gerar indenizações ilimitadas que superem o faturamento total da empresa. É imprescindível instituir tetos de responsabilidade civil proporcional ao valor médio mensal do contrato (ex: 3 a 6 mensalidades), afastando lucros cessantes desmedidos.</p>

            <h4>2. SLA (Acordo de Nível de Serviço) com Métricas Factíveis</h4>
            <p>Definir prazos de disponibilidade (uptime de 99,5%, janelas de manutenção programada e tempos de resposta de suporte conforme a severidade do incidente) evita caracterização de inadimplemento contratual culposo e multas abusivas.</p>

            <h4>3. Propriedade Intelectual Inegociável</h4>
            <p>O contrato de software deve estipular com clareza absoluta que o código-fonte, algoritmos, customizações e arquitetura pertencem exclusivamente à desenvolvedora, concedendo ao cliente apenas uma licença de uso temporária, não exclusiva e intransferível.</p>
        `,
        ctaText: 'Precisa revisar ou estruturar os contratos da sua empresa de tecnologia?',
        ctaMsg: 'Olá Dra. Alexia, li seu artigo sobre Contratos SaaS e gostaria de conversar sobre a revisão e blindagem contratual da minha plataforma/software.'
    },

    'data-breach': {
        category: 'Segurança & LGPD',
        readTime: '4 min de leitura',
        date: 'Compliance 2026',
        title: 'Vazamento de Dados e as Primeiras 24 Horas: O Roteiro Decisivo perante a ANPD',
        content: `
            <p>Incidentes de segurança com dados pessoais não são uma hipótese remota, mas uma realidade estatística para qualquer negócio digital. O fator determinante entre uma advertência administrativa e uma multa de milhões de reais reside na rapidez e na qualidade jurídica da resposta nas primeiras 24 horas.</p>

            <h4>1. Contenção Imediata e Preservação de Evidências</h4>
            <p>Antes de qualquer manifestação pública, a equipe técnica e jurídica deve isolar os sistemas afetados, revogar credenciais comprometidas e congelar os registros de auditoria (logs) para perícia. A preservação probatória é essencial para demonstrar à ANPD que a empresa não agiu com negligência.</p>

            <h4>2. Avaliação de Impacto e Gravidade</h4>
            <p>A LGPD exige a comunicação à ANPD e aos titulares quando o incidente puder acarretar risco ou dano relevante aos indivíduos (ex: dados sensíveis, bancários, senhas criptografadas violadas). Um diagnóstico jurídico rápido define a obrigatoriedade e a dosimetria do reporte oficial.</p>

            <h4>3. Gestão de Crise e Comunicação Estratégica</h4>
            <p>Declarações precipitadas na imprensa ou redes sociais podem criar admissão de culpa desnecessária. O DPO e a assessoria jurídica especializada devem redigir notas oficiais transparentes, informando as medidas técnicas adotadas para proteger os titulares e restabelecer a segurança.</p>
        `,
        ctaText: 'Sua empresa está preparada para responder a um vazamento de dados?',
        ctaMsg: 'Olá Dra. Alexia, li seu artigo sobre Vazamento de Dados e gostaria de avaliar o plano de resposta a incidentes e a governança LGPD da minha empresa.'
    }
};

function initArticleModal() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeArticleModal();
        }
    });
}

function openArticleModal(articleKey) {
    const article = ARTICLES_DATA[articleKey];
    if (!article) return;

    const modal = document.getElementById('article-modal');
    const scrollContainer = document.getElementById('article-modal-content');
    if (!modal || !scrollContainer) return;

    const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(article.ctaMsg)}`;

    scrollContainer.innerHTML = `
        <div class="article-modal-header">
            <div class="modal-meta-row">
                <span class="article-badge ${articleKey === 'health-lgpd' ? 'badge-health' : ''}">${article.category}</span>
                <span class="article-readtime">${article.readTime}</span>
                <span class="article-readtime">· ${article.date}</span>
            </div>
            <h2 class="article-modal-title">${article.title}</h2>
            <div class="article-modal-author">
                <div class="author-avatar-badge">AC</div>
                <div>
                    <strong>Dra. Alexia Alencar Capibaribe</strong>
                    <div>Advogada · OAB/CE 45.061 · Especialista em Direito Digital</div>
                </div>
            </div>
        </div>

        <div class="article-modal-body">
            ${article.content}

            <div class="article-modal-cta">
                <h4>${article.ctaText}</h4>
                <p>Agende uma reunião consultiva individual para analisar a situação da sua operação e desenhar uma estratégia jurídica sob medida.</p>
                <a href="${waHref}" target="_blank" class="btn btn-whatsapp" style="display: inline-flex; align-items: center; gap: 8px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    Falar com a Dra. Alexia no WhatsApp
                </a>
            </div>
        </div>
    `;

    scrollContainer.scrollTop = 0;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeArticleModal(event) {
    if (event && event.target && !event.target.classList.contains('article-modal-overlay') && !event.target.closest('.article-modal-close')) {
        return;
    }
    const modal = document.getElementById('article-modal');
    if (!modal) return;

    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}


/* ==========================================================================
   7. ARTIGOS & INSIGHTS — CARROSSEL HORIZONTAL (SLIDER)
   ========================================================================== */
let articlesCurrentIndex = 0;

function initArticlesCarousel() {
    updateArticlesCarousel();
    window.addEventListener('resize', () => {
        updateArticlesCarousel();
    }, { passive: true });
}

function getVisibleArticlesCount() {
    if (window.innerWidth > 1024) return 3;
    if (window.innerWidth > 640) return 2;
    return 1;
}

function articlesNext() {
    const track = document.getElementById('articles-track');
    if (!track) return;
    const cards = track.querySelectorAll('.article-card');
    const visibleCount = getVisibleArticlesCount();
    const maxIndex = Math.max(0, cards.length - visibleCount);

    if (articlesCurrentIndex < maxIndex) {
        articlesCurrentIndex++;
        updateArticlesCarousel();
    }
}

function articlesPrev() {
    if (articlesCurrentIndex > 0) {
        articlesCurrentIndex--;
        updateArticlesCarousel();
    }
}

function updateArticlesCarousel() {
    const track = document.getElementById('articles-track');
    const prevBtn = document.getElementById('articles-prev-btn');
    const nextBtn = document.getElementById('articles-next-btn');
    if (!track) return;

    const cards = track.querySelectorAll('.article-card');
    const totalCards = cards.length;
    const visibleCount = getVisibleArticlesCount();
    const maxIndex = Math.max(0, totalCards - visibleCount);

    if (articlesCurrentIndex > maxIndex) {
        articlesCurrentIndex = maxIndex;
    }

    if (cards.length > 0) {
        const cardWidth = cards[0].offsetWidth;
        const gap = 24;
        const shiftX = articlesCurrentIndex * (cardWidth + gap);
        track.style.transform = `translateX(-${shiftX}px)`;
    }

    if (prevBtn) prevBtn.disabled = articlesCurrentIndex === 0;
    if (nextBtn) nextBtn.disabled = articlesCurrentIndex >= maxIndex;
}


