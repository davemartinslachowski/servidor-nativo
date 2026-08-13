const http = require('node:http')

const server = http.createServer();

const port = 3000;

server.on('request', (req, res) => {
    console.log(`Requisição recebida! Método ${req.method} e Rota: ${req.route}`);
    res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
    res.end("Servidor HTTP nativo Funcionando!");
});

server.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
});