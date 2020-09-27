 class UserController {
   async index(req, res) {}
   async create(req, res) {
       const { nome, email, idade }= req.body;

       
   }
   async edit(req, res) {}
   async delete(req, res) {}
}

module.exports = UserController;