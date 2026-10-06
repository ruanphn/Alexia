import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
    // Permite CORS para desenvolvimento
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    try {
        const { id, nome, email, whatsapp, empresa, cargo, score, nivel_risco, status, respostas } = req.body;

        if (!nome || !email || !whatsapp || !empresa) {
            return res.status(400).json({ error: 'Campos obrigatórios ausentes.' });
        }

        const leadId = id || `lead_${Date.now()}`;
        const leadStatus = status || 'NOVO';
        const leadCargo = cargo || 'Não informado';
        const leadScore = typeof score === 'number' ? score : 0;
        const leadRisco = nivel_risco || 'MODERADO';
        const leadRespostasJson = JSON.stringify(respostas || {});

        // Garante que a tabela existe no Vercel Postgres
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

        // Insere o lead no banco
        await sql`
            INSERT INTO leads_diagnostico (id, nome, email, whatsapp, empresa, cargo, score, nivel_risco, status, respostas)
            VALUES (${leadId}, ${nome}, ${email}, ${whatsapp}, ${empresa}, ${leadCargo}, ${leadScore}, ${leadRisco}, ${leadStatus}, ${leadRespostasJson}::jsonb)
            ON CONFLICT (id) DO UPDATE SET
                status = EXCLUDED.status,
                respostas = EXCLUDED.respostas;
        `;

        return res.status(200).json({
            success: true,
            message: 'Lead registrado com sucesso no banco de dados.',
            id: leadId
        });

    } catch (error) {
        console.error('Erro ao processar diagnóstico no Vercel Postgres:', error);

        // Se o banco ainda não foi vinculado no dashboard da Vercel
        return res.status(200).json({
            success: false,
            warning: 'Storage Vercel Postgres ainda não conectado nas variáveis de ambiente.',
            details: error.message
        });
    }
}
