import { neon } from '@neondatabase/serverless';

function getDb() {
    const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.DATABASE_URL_UNPOOLED;
    if (!connectionString) {
        return null;
    }
    return neon(connectionString);
}

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    // Validação básica do cabeçalho de autorização
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Acesso não autorizado. Token ausente.' });
    }

    const sql = getDb();
    if (!sql) {
        return res.status(200).json({
            success: false,
            warning: 'DATABASE_URL não configurada no ambiente.',
            leads: []
        });
    }

    try {
        // Garante que a tabela existe antes de fazer SELECT
        await sql`
            CREATE TABLE IF NOT EXISTS leads_diagnostico (
                id VARCHAR(100) PRIMARY KEY,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                nome VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                whatsapp VARCHAR(50) NOT NULL,
                empresa VARCHAR(255) NOT NULL,
                cargo VARCHAR(255),
                score INTEGER NOT NULL,
                nivel_risco VARCHAR(50) NOT NULL,
                status VARCHAR(50) DEFAULT 'NOVO',
                respostas JSONB
            );
        `;

        const rows = await sql`
            SELECT id, created_at, nome, email, whatsapp, empresa, cargo, score, nivel_risco, status, respostas
            FROM leads_diagnostico
            ORDER BY created_at DESC;
        `;

        return res.status(200).json({
            success: true,
            leads: rows
        });
    } catch (error) {
        console.error('Erro ao buscar leads no Neon Postgres:', error);

        return res.status(200).json({
            success: false,
            warning: 'Erro ao consultar banco de dados Neon.',
            leads: [],
            details: error.message
        });
    }
}
