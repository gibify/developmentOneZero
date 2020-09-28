//Voce deve rodar os testes usando:  npm test
//Para testar a aplicação, rode: npm run dev

//mais infos
//https://github.com/ZijianHe/koa-router

// todas as configuraçoes devem ser passadas via environment variables
const PORT = process.env.PORT || 3333;
const router = require('./routes');

const Koa = require('koa');
const server = new Koa();

const body = require('koa-body')

server.use(body())
server.use(router.allowedMethods());
server.use(router.routes());

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});


module.exports = server;