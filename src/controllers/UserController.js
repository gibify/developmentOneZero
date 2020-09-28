const connection = require('../database/connection');

module.exports = {
    async index(ctx) {
        try {
            ctx.status = 200;
            ctx.body = `Seu servidor está online`; 
        } catch (err)  {
            ctx.status = err.status || 500;
            ctx.body = err.message;
        };
    },

    async index(ctx) {
        try {
            ctx.status = 200;
            ctx.body = {total:0, count: 0, rows:[]}
        } catch {
            ctx.status = err.status||404;
            ctx.body = err.message;
        }
         
    },

    async list(ctx) {
        try {
            const users = await connection('users');
            ctx.body = { users };
        }  catch (err) {
            ctx.status = err.status || 500;
            ctx.body = err.message;
        };  
    },

    async create(ctx) {
        const {
            nome,
            email,
            idade
        } = ctx.request.body;

        if(idade < 18) {
            ctx.body = { message: 'Você ainda não tem 18 anos!'};
        } else {

        const trx = await connection.transaction();

            try {
                const insertUserId = await trx('users').insert({
                    nome,
                    email,
                    idade 
                });

                const id = insertUserId[0];

                await trx.commit();

                ctx.body = { id };
                ctx.status = 201;
            }  catch (err) {
                ctx.status = err.status || 500;
                ctx.body = err.message;
            };
        }
    },

    async edit(ctx) {
        const { id }= ctx.params;
        const { nome, email, idade } = ctx.request.body;

        if(idade < 18) {
            ctx.status = err.status || 404;
            ctx.body = { message: 'Você ainda não tem 18 anos!'};
        } else {
            try {
                await connection('users').where({ 'id': id }, {'nome': nome,  'email': email, 'idade': idade}, {new: true});
                ctx.body = { message: 'User Edited'};
                ctx.status = 200;
            }  catch (err) {
                ctx.status = err.status || 500;
                ctx.body = err.message;
            };
        };
    },

    async delete(ctx) {
        const { id }= ctx.params;

        try {
            await connection('users').where('id', id).del();
            await id.delete();

            ctx.status = 200;
            ctx.body = { message: 'User Deleted'};
        }  catch (err) {
            ctx.status = err.status || 404;
            ctx.body = err.message;
        };
    },
}

