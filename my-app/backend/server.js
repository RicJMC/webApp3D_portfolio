const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Rota para renderizar a página index.js
  server.get('/', async (req, res) => {
    try {
      // Renderize a página index.js usando o Next.js
      const html = await app.renderToHTML(req, res, '/index', req.query);
      
      // Envie o HTML renderizado como resposta
      res.send(html);
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro interno do servidor');
    }
  });

  // Todas as outras rotas serão tratadas pelo Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Inicie o servidor
  const port = process.env.PORT || 3001; // Porta em que o servidor será executado
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Servidor iniciado na porta ${port}`);
  });
});
