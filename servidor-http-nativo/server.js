import http from 'node:http'
import { URL } from 'node:url'

const porta = 3000

const server = http.createServer();

const requisicao = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
     const urlObj = new URL(req.url, `http://${req.headers.host}`);

    if (req.method === 'GET' && urlObj.pathname === '/saudacao') {
        const nome = urlObj.searchParams.get('nome');
        return res.end(JSON.stringify({"nome": nome}))
    }
   
    const nome = urlObj.searchParams.get('nome');
    console.log(nome);
    return res.write(JSON.stringify({ "nome": nome }));

    return res.end(JSON.stringify({ "chave": "valor" }));


    console.log(`Requisição recebida! ${req.method} ${req.url}`);
    res.end();
}

server.on('request', requisicao);

server.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`)
});			