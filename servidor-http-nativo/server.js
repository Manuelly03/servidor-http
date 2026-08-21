import http from 'node:http'
import { URL } from 'node:url'

const porta = 3000
const server = http.createServer()

const requisicao = (req, res) => {
 
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200

    const urlObj = new URL(req.url, `http://${req.headers.host}`)

    if (req.method === 'GET' && urlObj.pathname === '/saudacao') {
        console.log(`Requisição recebida! ${req.method} ${req.url}`)
        const nome = urlObj.searchParams.get('nome')
        return res.end(JSON.stringify({ nome: nome }))
    }

    else if (req.method === 'GET' && urlObj.pathname === '/') {
        console.log(`Requisição recebida! ${req.method} ${req.url}`)
        return res.end(JSON.stringify({
            data: 'Esta é a página inicial.'
        }))
    }

    else if (req.method === 'GET' && urlObj.pathname === '/contato') {
        console.log(`Requisição recebida! ${req.method} ${req.url}`)
        return res.end(JSON.stringify({
            data: [
                {
                    telefone: '67 99999-9999',
                    'e-mail': 'email@gmail.com'
                }
            ]
        }))
    }

    else if (req.method === 'GET' && urlObj.pathname === '/status') {
        console.log(`Requisição recebida! ${req.method} ${req.url}`)
        return res.end(JSON.stringify({
            status: 'ok'
        }))
    }

    else if (req.method === 'GET' && urlObj.pathname === '/produtos') {
        console.log(`Requisição recebida! ${req.method} ${req.url}`)
        return res.end(JSON.stringify({
            data: [
                {
                    produto: 'mascara capilar',
                    valor: 'R$250,00'
                }
            ]
        }))
    }
    console.log(`Requisição recebida! ${req.method} ${req.url}`)
    return res.end(JSON.stringify({
        chave: 'valor'
    }))
}
server.on('request', requisicao)
server.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`)
})