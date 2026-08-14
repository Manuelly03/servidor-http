import http from 'node:http'

const porta = 3000

const server = http.createServer();



server.on('request', (req, res) => {
 console.log(`Requisição Recebida!  ${req.method} ${req.url}`);

 res.statusCode = 200
 res.setHeader('Content-Type', 'text/plain; charset=utf-8');
 res.end("Servidor Funcionando!")
 //se essa linha não existisse, não iria aparecer a mensagem que digitamos, não apareceria a resposta,
 // e ai não saberiamos se funcionou ou não, porque o servidor iria ficar carregando para sempre.
});

server.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`)
    console.log
});