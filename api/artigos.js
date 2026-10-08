import { neon } from '@neondatabase/serverless';

function getDb() {
    const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.DATABASE_URL_UNPOOLED;
    if (!connectionString) {
        return null;
    }
    return neon(connectionString);
}

const DEFAULT_ARTICLES = [
    {
        id: 'art_1',
        slug: 'ai-risks',
        titulo: 'Inteligência Artificial e Riscos Jurídicos: O que as Empresas Devem Blindar em 2026',
        categoria: 'Inovação & IA',
        tempo_leitura: '3 min de leitura',
        resumo: 'A rápida proliferação de IA generativa no ambiente corporativo exige governança sobre direitos autorais, vazamento de dados estratégicos e responsabilidade civil.',
        conteudo: `<p>A rápida proliferação de ferramentas de Inteligência Artificial generativa no ambiente corporativo transformou a produtividade de equipes de marketing, desenvolvimento de software, finanças e atendimento. Contudo, a velocidade da adoção tecnológica superou, na maioria das empresas, a criação de diretrizes jurídicas claras.</p><h4>1. O Risco de Violação de Propriedade Intelectual</h4><p>Sistemas de IA são treinados em bases massivas de dados que muitas vezes contêm criações protegidas por direitos autorais. Quando um colaborador gera textos, códigos ou ilustrações utilizando prompts empresariais, surgem dois dilemas imediatos: a autoria da obra criada pela IA e o risco de reproduzir inadvertidamente trechos patenteados ou registrados de concorrentes.</p><h4>2. Vazamento de Segredos de Negócio e Dados Pessoais</h4><p>Ao inserir relatórios internos, contratos com clientes ou dados cadastrais em ferramentas públicas de IA, a empresa pode estar transferindo informações confidenciais para servidores de terceiros cujos Termos de Uso permitem o reaproveitamento desses dados para retreinamento de modelos. Isso configura incidente de segurança perante a LGPD e quebra de dever de confidencialidade com parceiros.</p><h4>3. Diretrizes Práticas de Governança</h4><ul><li><strong>Política Interna de Uso de IA:</strong> Estabelecer formalmente quais ferramentas são homologadas pela organização e quais dados jamais podem ser submetidos a prompts públicos.</li><li><strong>Blindagem em Contratos de Trabalho:</strong> Atualizar os acordos de confidencialidade (NDA) para abranger o uso de inteligência artificial generativa.</li><li><strong>Auditoria em Fornecedores:</strong> Exigir cláusulas de transparência em ferramentas SaaS contratadas que declarem explicitamente onde os dados corporativos são processados.</li></ul><p>A inovação deve avançar, mas sempre amparada por governança jurídica para evitar sanções regulatórias e proteger o patrimônio intangível da organização.</p>`,
        cta_texto: 'Quer blindar o uso de Inteligência Artificial na sua empresa?',
        cta_msg: 'Olá Dra. Alexia, li seu artigo sobre Riscos Jurídicos e Inteligência Artificial e gostaria de orientações sobre como implementar uma política de governança de IA na minha empresa.',
        publicado: true
    },
    {
        id: 'art_2',
        slug: 'health-lgpd',
        titulo: 'Governança de Dados na Saúde: Da Coleta ao Prontuário Eletrônico',
        categoria: 'Direito Médico & LGPD',
        tempo_leitura: '4 min de leitura',
        resumo: 'Dados sensíveis de pacientes (art. 11 da LGPD) demandam protocolos rigorosos de controle de acesso, termos de consentimento válidos e conformidade técnica para clínicas.',
        conteudo: `<p>Na área da saúde, os dados pessoais dos pacientes pertencem à categoria mais protegida pelo ordenamento jurídico: os dados pessoais sensíveis (artigo 11 da LGPD). Prontuários, exames clínicos, laudos diagnósticos e informações genéticas exigem um rigor regulatório superior a qualquer outro segmento de mercado.</p><h4>1. Bases Legais Adequadas e o Mito do Consentimento Irrestrito</h4><p>Muitas clínicas ainda acreditam que o consentimento do paciente resolve todas as exigências legais. Todavia, em processos de saúde, o tratamento frequentemente se ampara na tutela da saúde ou no cumprimento de obrigação legal/regulatória (como as normas do CFM para guarda de prontuários por 20 anos). Compreender a base legal exata impede nulidades jurídicas.</p><h4>2. Segurança da Informação e Controle de Acesso</h4><p>O vazamento de um prontuário clínico acarreta danos morais presumidos e penalidades severas da ANPD. Por isso, a clínica precisa instituir:</p><ul><li><strong>Controle Granular de Permissões:</strong> Recepcionistas não devem acessar prescrições ou históricos médicos completos; o acesso deve ser restrito estritamente à necessidade de cada função.</li><li><strong>Rastreabilidade de Logs:</strong> Sistemas de prontuário eletrônico (PEP) devem registrar data, horário e usuário em cada visualização ou alteração.</li><li><strong>Acordo de Operador (DPA) com Fornecedores:</strong> Provedores de software médico, nuvem e laboratórios terceirizados devem assinar instrumentos de conformidade rigorosa.</li></ul><h4>3. Atendimento aos Direitos dos Pacientes</h4><p>O paciente possui o direito de saber com quem seus dados são compartilhados, solicitar correções e revogar consentimentos em ações que não interfiram na obrigação de guarda médica. Uma clínica em conformidade com a LGPD conquista autoridade, credibilidade e fidelização do paciente.</p>`,
        cta_texto: 'Deseja adequar sua clínica ou consultório à LGPD médica?',
        cta_msg: 'Olá Dra. Alexia, li o artigo sobre Governança de Dados na Saúde e gostaria de conversar sobre a adequação da minha clínica/consultório às exigências da LGPD.',
        publicado: true
    },
    {
        id: 'art_3',
        slug: 'saas-contracts',
        titulo: 'Contratos de Software & SaaS: Cláusulas Críticas de Limitação de Responsabilidade e SLA',
        categoria: 'Contratos Tech',
        tempo_leitura: '3 min de leitura',
        resumo: 'Como redigir instrumentos contratuais robustos que protegem a propriedade intelectual do software e limitam passivos indenizatórios desproporcionais com clientes.',
        conteudo: `<p>Startups e empresas desenvolvedoras de plataformas digitais muitas vezes utilizam modelos genéricos de prestação de serviços para licenciar soluções de software (SaaS). Essa prática representa um dos maiores riscos ao valuation e à saúde financeira do negócio.</p><h4>1. Limitação de Responsabilidade Civil (Cap de Indenização)</h4><p>Uma interrupção temporária de serviço ou instabilidade em uma API não pode gerar indenizações ilimitadas que superem o faturamento total da empresa. É imprescindível instituir tetos de responsabilidade civil proporcional ao valor médio mensal do contrato (ex: 3 a 6 mensalidades), afastando lucros cessantes desmedidos.</p><h4>2. SLA (Acordo de Nível de Serviço) com Métricas Factíveis</h4><p>Definir prazos de disponibilidade (uptime de 99,5%, janelas de manutenção programada e tempos de resposta de suporte conforme a severidade do incidente) evita caracterização de inadimplemento contratual culposo e multas abusivas.</p><h4>3. Propriedade Intelectual Inegociável</h4><p>O contrato de software deve estipular com clareza absoluta que o código-fonte, algoritmos, customizações e arquitetura pertencem exclusivamente à desenvolvedora, concedendo ao cliente apenas uma licença de uso temporária, não exclusiva e intransferível.</p>`,
        cta_texto: 'Precisa revisar ou estruturar os contratos da sua empresa de tecnologia?',
        cta_msg: 'Olá Dra. Alexia, li seu artigo sobre Contratos SaaS e gostaria de conversar sobre a revisão e blindagem contratual da minha plataforma/software.',
        publicado: true
    },
    {
        id: 'art_4',
        slug: 'data-breach',
        titulo: 'Vazamento de Dados e as Primeiras 24 Horas: O Roteiro Decisivo perante a ANPD',
        categoria: 'Segurança & LGPD',
        tempo_leitura: '4 min de leitura',
        resumo: 'Em incidentes com dados pessoais, a velocidade e a precisão do plano de resposta determinam a gravidade das sanções e a preservação da imagem corporativa.',
        conteudo: `<p>A ocorrência de um incidente de segurança da informação envolvendo dados pessoais é um dos momentos mais críticos para a governança corporativa de qualquer organização. A forma como a empresa reage nas primeiras 24 a 48 horas define se o episódio será tratado como uma crise gerida com maturidade ou um desastre regulatório e de imagem.</p><h4>1. Contenção Imediata e Isolamento Forense</h4><p>A primeira prioridade não é a comunicação pública, mas a contenção técnica do vetor de ataque. Isolar servidores comprometidos, revogar credenciais violadas e preservar logs de auditoria são passos fundamentais para viabilizar perícia técnica posterior.</p><h4>2. Avaliação de Relevância e Risco aos Titulares</h4><p>Nem todo incidente exige comunicação imediata à Autoridade Nacional de Proteção de Dados (ANPD). A lei exige comunicação quando houver risco ou dano relevante aos titulares. A equipe jurídica deve elaborar um parecer preliminar avaliando a sensibilidade dos dados expostos e o volume de titulares afetados.</p><h4>3. Comunicação Estratégica e Tempestividade</h4><p>Caso seja necessária a notificação à ANPD e aos titulares, ela deve conter clareza sobre as medidas de mitigação adotadas, os riscos identificados e as recomendações aos titulares, mitigando a aplicação de multas severas e ações civis públicas.</p>`,
        cta_texto: 'Sua empresa precisa de um plano preventivo de resposta a incidentes?',
        cta_msg: 'Olá Dra. Alexia, li seu artigo sobre Vazamento de Dados e gostaria de orientações sobre como estruturar um plano de resposta a incidentes na minha empresa.',
        publicado: true
    }
];

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    const sql = getDb();

    // GET: Lista artigos
    if (req.method === 'GET') {
        if (!sql) {
            return res.status(200).json({ success: true, artigos: DEFAULT_ARTICLES });
        }

        try {
            await ensureTable(sql);

            const rows = await sql`
                SELECT id, slug, titulo, categoria, tempo_leitura, resumo, conteudo, cta_texto, cta_msg, publicado, created_at, updated_at
                FROM artigos
                ORDER BY created_at ASC;
            `;

            return res.status(200).json({
                success: true,
                artigos: rows.length > 0 ? rows : DEFAULT_ARTICLES
            });
        } catch (error) {
            console.error('Erro ao ler artigos:', error);
            return res.status(200).json({ success: true, artigos: DEFAULT_ARTICLES });
        }
    }

    // Validação de autenticação para escrita/edição/exclusão
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Acesso não autorizado para gerenciar artigos.' });
    }

    // POST / PUT: Salva ou Atualiza Artigo
    if (req.method === 'POST' || req.method === 'PUT') {
        const { id, slug, titulo, categoria, tempo_leitura, resumo, conteudo, cta_texto, cta_msg, publicado } = req.body || {};

        if (!titulo || !categoria || !resumo || !conteudo) {
            return res.status(400).json({ error: 'Título, categoria, resumo e conteúdo são obrigatórios.' });
        }

        const artId = id || `art_${Date.now()}`;
        const artSlug = slug || generateSlug(titulo);
        const artReadTime = tempo_leitura || '3 min de leitura';
        const isPublic = publicado !== undefined ? publicado : true;

        if (!sql) {
            return res.status(200).json({
                success: true,
                message: 'Salvo em modo de desenvolvimento local.',
                artigo: { id: artId, slug: artSlug, titulo, categoria, tempo_leitura: artReadTime, resumo, conteudo, cta_texto, cta_msg, publicado: isPublic }
            });
        }

        try {
            await ensureTable(sql);

            await sql`
                INSERT INTO artigos (id, slug, titulo, categoria, tempo_leitura, resumo, conteudo, cta_texto, cta_msg, publicado, updated_at)
                VALUES (${artId}, ${artSlug}, ${titulo}, ${categoria}, ${artReadTime}, ${resumo}, ${conteudo}, ${cta_texto || ''}, ${cta_msg || ''}, ${isPublic}, CURRENT_TIMESTAMP)
                ON CONFLICT (id) DO UPDATE SET
                    slug = EXCLUDED.slug,
                    titulo = EXCLUDED.titulo,
                    categoria = EXCLUDED.categoria,
                    tempo_leitura = EXCLUDED.tempo_leitura,
                    resumo = EXCLUDED.resumo,
                    conteudo = EXCLUDED.conteudo,
                    cta_texto = EXCLUDED.cta_texto,
                    cta_msg = EXCLUDED.cta_msg,
                    publicado = EXCLUDED.publicado,
                    updated_at = CURRENT_TIMESTAMP;
            `;

            return res.status(200).json({
                success: true,
                message: 'Artigo salvo com sucesso no banco de dados.',
                id: artId
            });
        } catch (error) {
            console.error('Erro ao salvar artigo:', error);
            return res.status(500).json({ error: 'Erro ao salvar artigo no banco de dados.', details: error.message });
        }
    }

    // DELETE: Exclui artigo
    if (req.method === 'DELETE') {
        const { id } = req.body || {};
        if (!id) return res.status(400).json({ error: 'ID do artigo obrigatório.' });

        if (sql) {
            try {
                await sql`DELETE FROM artigos WHERE id = ${id};`;
            } catch (e) {
                console.warn('Erro ao deletar:', e);
            }
        }

        return res.status(200).json({ success: true, message: 'Artigo removido.' });
    }

    return res.status(405).json({ error: 'Método não suportado.' });
}

async function ensureTable(sql) {
    await sql`
        CREATE TABLE IF NOT EXISTS artigos (
            id VARCHAR(100) PRIMARY KEY,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            slug VARCHAR(255) UNIQUE NOT NULL,
            titulo VARCHAR(255) NOT NULL,
            categoria VARCHAR(100) NOT NULL,
            tempo_leitura VARCHAR(50) DEFAULT '3 min de leitura',
            resumo TEXT NOT NULL,
            conteudo TEXT NOT NULL,
            cta_texto VARCHAR(255),
            cta_msg TEXT,
            publicado BOOLEAN DEFAULT TRUE
        );
    `;

    // Se estiver vazia, insere os 4 iniciais
    const countRes = await sql`SELECT count(*) FROM artigos;`;
    if (parseInt(countRes[0].count, 10) === 0) {
        for (const art of DEFAULT_ARTICLES) {
            await sql`
                INSERT INTO artigos (id, slug, titulo, categoria, tempo_leitura, resumo, conteudo, cta_texto, cta_msg, publicado)
                VALUES (${art.id}, ${art.slug}, ${art.titulo}, ${art.categoria}, ${art.tempo_leitura}, ${art.resumo}, ${art.conteudo}, ${art.cta_texto}, ${art.cta_msg}, ${art.publicado})
                ON CONFLICT (id) DO NOTHING;
            `;
        }
    }
}

function generateSlug(text) {
    return text
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .substring(0, 80);
}
