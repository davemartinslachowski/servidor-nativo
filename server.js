const http = require('node:http');
const porta = 3000;

const server = http.createServer((req, res) => {
    console.log(`Requisição recebida! ${req.method} ${req.url}`);
    console.log(`Data e hora: ${new Date().toISOString()}`);

    res.statusCode = 201;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ status: "ok" }));
});

server.listen(porta, () => {
    console.log(`Servidor ouvindo na porta ${porta}`);
});


// 4) => O navegador iria ficar carregando indefinidamente e não vai receber uma resposta completa.