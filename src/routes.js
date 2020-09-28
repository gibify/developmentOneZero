const Router = require('koa-router');
const router = new Router();

const userController = require('./controllers/userController');

router.get('/', userController.index);
router.get('/users', userController.list);
router.get('/users/:id', userController.index);
  
router.post('/users', userController.create);
router.delete('/users/:id', userController.delete);
router.put('/users/:id', userController.edit);

module.exports = router;