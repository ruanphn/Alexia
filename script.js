/* ==========================================================================
   INTERATIVIDADE — ALEXIA CAPIBARIBE ADVOCACIA
   Vanilla JS ES6+ · Sem dependências · Alta performance
   ========================================================================== */

const WA_NUMBER = '5585996350989';

document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initHeaderScroll();
    initMobileMenu();
    initQuiz();
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
   3. ACORDEÃO FAQ
   ========================================================================== */
function toggleFaq(button) {
    const item   = button.closest('.faq-item');
    const isOpen = item.classList.contains('open');

    // Fecha todos os itens abertos (comportamento de sanfona)
    document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    // Abre o item clicado se estava fechado
    if (!isOpen) {
        item.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
    }
}


/* ==========================================================================
   4. DIAGNÓSTICO DE CONFORMIDADE DIGITAL — QUIZ LGPD
   ========================================================================== */
const QUIZ_TOTAL_STEPS = 5;
let quizAnswers = {};   // { step: score }
let quizCurrentStep = 1;

function initQuiz() {
    // Adiciona listener de clique para cada opção
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', () => {
            const step = option.closest('.quiz-step').id.replace('quiz-step-', '');
            // Desmarca as outras opções do mesmo step
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
    // Verifica se a última pergunta foi respondida
    if (quizAnswers[QUIZ_TOTAL_STEPS] === undefined) {
        shakeQuizBtn(QUIZ_TOTAL_STEPS);
        return;
    }

    // Calcula score total (soma dos scores de cada resposta)
    const totalScore = Object.values(quizAnswers).reduce((sum, s) => sum + s, 0);
    // Score máximo: QUIZ_TOTAL_STEPS * 3 = 15. Normaliza para 0–100.
    const scorePercent = Math.round(((15 - totalScore) / 15) * 100);

    // Determina nível de risco
    let level, desc, waMsg;

    if (scorePercent >= 80) {
        level  = '🟢 Risco Baixo';
        desc   = 'Parabéns! Sua empresa demonstra maturidade jurídica digital. Recomendamos uma revisão periódica para manter a conformidade frente às constantes mudanças regulatórias.';
        waMsg  = 'Olá! Realizei o Diagnóstico de Conformidade Digital no site e obtive nível de risco *Baixo* (pontuação ' + scorePercent + '/100). Gostaria de conversar sobre uma revisão preventiva e assessoria contínua para a minha empresa.';
    } else if (scorePercent >= 50) {
        level  = '🟡 Risco Moderado';
        desc   = 'Sua empresa tem algumas boas práticas, mas existem pontos de atenção importantes que precisam ser endereçados para evitar exposição regulatória e contratual.';
        waMsg  = 'Olá! Realizei o Diagnóstico de Conformidade Digital no site e obtive nível de risco *Moderado* (pontuação ' + scorePercent + '/100). Minha empresa tem lacunas jurídicas no ambiente digital e gostaria de entender como proceder.';
    } else {
        level  = '🔴 Risco Alto';
        desc   = 'Atenção: sua empresa está em situação de exposição jurídica significativa. É essencial iniciar um processo de adequação o quanto antes para evitar sanções, litígios e prejuízos financeiros.';
        waMsg  = 'Olá! Realizei o Diagnóstico de Conformidade Digital no site e obtive nível de risco *Alto* (pontuação ' + scorePercent + '/100). Minha empresa precisa urgentemente de assessoria em conformidade digital. Podemos conversar?';
    }

    // Atualiza o DOM com o resultado
    document.getElementById('quiz-score-value').textContent = scorePercent;
    document.getElementById('quiz-result-level').textContent = level;
    document.getElementById('quiz-result-desc').textContent  = desc;

    // Configura botão do WhatsApp com mensagem pré-preenchida
    const waLink = document.getElementById('quiz-whatsapp-btn');
    if (waLink) {
        waLink.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMsg)}`;
    }

    // Mostra resultado, oculta quiz
    document.getElementById('quiz-body').style.display = 'none';
    document.querySelector('.quiz-progress-bar-track').style.display = 'none';

    const result = document.getElementById('quiz-result');
    result.classList.add('active');

    updateProgressBar(100);
}

function quizReset() {
    quizAnswers = {};
    quizCurrentStep = 1;

    // Reseta opções selecionadas
    document.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));

    // Esconde resultado, mostra quiz
    document.getElementById('quiz-result').classList.remove('active');
    document.getElementById('quiz-body').style.display = 'block';
    document.querySelector('.quiz-progress-bar-track').style.display = 'block';

    // Volta ao step 1
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
