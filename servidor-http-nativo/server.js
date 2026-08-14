import http from 'node:http'
import { URL } from 'node:url'

const porta = 3000
const server = http.createServer()

const requisicao = (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
<<<<<<< HEAD
=======
    
>>>>>>> 6d88531 (edit: ex 2 part 2certo)
    const urlObj = new URL(req.url, `http://${req.headers.host}`)
    if (req.method === 'GET' && urlObj.pathname === '/saudacao') {
        const nome = urlObj.searchParams.get('nome')
        return res.end(JSON.stringify({ nome: nome }))
    }
    else if (req.method === 'GET' && urlObj.pathname === '/status') {
        return res.end(JSON.stringify({ status: 'ok' }))
    }
    else if (req.method === 'GET' && urlObj.pathname === '/') {
<<<<<<< HEAD
        return res.end(JSON.stringify({
            data: 'Esta é a página inicial.' }))
    }
    return res.end(JSON.stringify({ chave: 'valor' }))
}

=======
        return res.end(JSON.stringify({ data: 'Esta é a página inicial.' }))
    }
    return res.end(JSON.stringify({ chave: 'valor' }))
}
>>>>>>> 6d88531 (edit: ex 2 part 2certo)
server.on('request', requisicao)
server.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`)
})