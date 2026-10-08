# Dra. Alexia Capibaribe — Advocacia Especializada

> **Direito Digital · Proteção de Dados (LGPD) · Inteligência Artificial · Contratos Tech · Negócios**  
> Website Oficial & Portal Administrativo da **Dra. Alexia Alencar Capibaribe** (OAB/CE 45.061).

🌐 **URL de Produção:** [https://alexiacapibaribe.vercel.app/](https://alexiacapibaribe.vercel.app/)  
📖 **Manual Completo de Entrega:** Consulte [DOCUMENTACAO_ENTREGA.md](file:///c:/Users/RuanPereiraIGSA/OneDrive%20-%20Imaculada%20Gordiano%20Advogados/Documentos/vscodeprojects/SITE-ALEXIA/DOCUMENTACAO_ENTREGA.md) para todos os detalhes arquiteturais e operacionais.

---

## 🏛️ Sobre o Projeto

Ecossistema digital corporativo desenvolvido sob medida com estética executiva (*Dark Luxury Navy* & Tipografia Editorial), rigor técnico e conformidade com o Provimento nº 205/2021 da OAB e a LGPD (Lei nº 13.709/2018).

### ✨ Principais Funcionalidades:
- **Landing Page de Alta Conversão:** Hero Split imersivo, pilares de especialidade, credenciais com selos internacionais EXIN e rodapé com marca d'água vetorial.
- **Menu Mobile Reestruturado:** Gaveta 100% sólida em Dark Navy (`#0c152a`), travamento de rolagem e botão em largura total para o WhatsApp.
- **Diagnóstico Digital Interativo (Quiz de 7 Etapas):** Mecanismo de qualificação de maturidade jurídica que gera relatório de risco e direcionamento personalizado no WhatsApp.
- **Central de Privacidade & Cookies (LGPD):** Banner transparente e modal de preferências granulares com persistência local.
- **Blog Jurídico Dinâmico:** Leitura de artigos em modal imersivo com integração serverless.
- **Portal Administrativo Executivo (`admin.html`):** Painel interno restrito com autenticação serverless via `ADMIN_PASSWORD`, métricas de risco, visualização detalhada de respostas de leads, exportação para Excel (CSV) e editor completo de artigos.
- **Backend Serverless & Neon Postgres:** Rotas de API na Vercel (`/api`) conectadas ao banco de dados relacional na nuvem.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** HTML5 Semântico, CSS3 Moderno (Custom Properties, Flexbox, CSS Grid, Glassmorphism), JavaScript ES6+ Vanilla (zero frameworks pesados).
- **Backend:** Node.js Serverless Functions na Vercel (`/api/auth.js`, `/api/diagnostico.js`, `/api/leads.js`, `/api/artigos.js`).
- **Banco de Dados:** Neon Postgres Serverless (`@neondatabase/serverless`).
- **Tipografia:** Cormorant Garamond & Plus Jakarta Sans.
- **Hospedagem & CI/CD:** Vercel com deploy contínuo integrado ao GitHub.

---

## 🔐 Configuração de Ambiente (Vercel)

| Variável | Função |
| :--- | :--- |
| `ADMIN_PASSWORD` | Chave de acesso do portal administrativo |
| `DATABASE_URL` | String de conexão com o banco Neon Postgres |

Para instruções passo a passo de operação, exportação de dados e publicação de artigos, consulte o arquivo [DOCUMENTACAO_ENTREGA.md](file:///c:/Users/RuanPereiraIGSA/OneDrive%20-%20Imaculada%20Gordiano%20Advogados/Documentos/vscodeprojects/SITE-ALEXIA/DOCUMENTACAO_ENTREGA.md).
