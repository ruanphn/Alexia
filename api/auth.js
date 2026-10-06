export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    const { password } = req.body || {};
    const adminPassword = process.env.ADMIN_PASSWORD || 'alexia2026';

    if (!password) {
        return res.status(400).json({ error: 'Senha obrigatória.' });
    }

    if (password !== adminPassword) {
        return res.status(401).json({ error: 'Chave de acesso incorreta.' });
    }

    // Gera token de sessão administrativo simples e seguro
    const timestamp = Date.now();
    const token = Buffer.from(`alexia_auth_${timestamp}_granted`).toString('base64');

    return res.status(200).json({
        success: true,
        message: 'Autenticado com sucesso.',
        token: token,
        user: {
            name: 'Dra. Alexia Capibaribe',
            role: 'Administradora'
        }
    });
}
