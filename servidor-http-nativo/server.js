import http from 'node:http'
import { URL } from 'node:url'

const porta = 3000
const server = http.createServer()
const requisicao = (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    const urlObj = new URL(req.url, `http://${req.headers.host}`)
    return res.end(JSON.stringify({
        erro: 'Rota não encontrada',
        statusCode : 404
    }))
}

server.on('request', requisicao)
server.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`)
})