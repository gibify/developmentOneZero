const Router = require('koa-router');
const router = new Router();

const userController = require('./controllers/userController');

router.get('/', userController.index);
router.get('/users', userController.index);
  
router.post('/user', userController.create);

module.exports = router;