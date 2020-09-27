
 const user = [
     {
        nome: 'Evandro',
        email: 'evandro@gmail.com',
        idade: 34,
     },

     {
        nome: 'raupp',
        email: 'jose.raupp@devoz.com.br',
        idade: 35,
     },

     {
        nome: 'João',
        email: 'jose@up.com.br',
        idade: 25,
     },

 ]

    
;

module.exports = {
    async index(ctx) {
        ctx.status = 200;
        ctx.body = `Seu servidor está online`;   
    },

    async index(ctx) {
        ctx.status = 200;
        ctx.body = {total:0, count: 0, rows:[]} 
    },

    async create(ctx) {
        return user;
    }
}

