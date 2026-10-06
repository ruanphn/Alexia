import { sql } from '@vercel/postgres';

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

    try {
        // Busca os leads ordenados pelo mais recente
        const { rows } = await sql`
            SELECT id, created_at, nome, email, whatsapp, empresa, cargo, score, nivel_risco, status, respostas
            FROM leads_diagnostico
            ORDER BY created_at DESC;
        `;

        return res.status(200).json({
            success: true,
            leads: rows
        });
    } catch (error) {
        console.error('Erro ao buscar leads no Vercel Postgres:', error);

        return res.status(200).json({
            success: false,
            warning: 'Storage Vercel Postgres ainda não conectado nas variáveis de ambiente.',
            leads: []
        });
    }
}
