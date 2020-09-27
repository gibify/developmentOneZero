//Voce deve rodar os testes usando:  npm test
//Para testar a aplicação, rode: npm run dev

//mais infos
//https://github.com/ZijianHe/koa-router

// todas as configuraçoes devem ser passadas via environment variables
const PORT = process.env.PORT || 3000;
const router = require('./routes');

const Koa = require('koa');
const server = new Koa();

server.use(router.routes());
server.use(router.allowedMethods());

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});


module.exports = server;