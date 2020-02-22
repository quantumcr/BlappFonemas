const router = require('express').Router();

const custom = require('../middlewares/custom');

const userCtrl = require('../controllers/users.controller');

router.post('/signup', userCtrl.createUser);
router.post('/signin', userCtrl.loginUser);
router.get('/withIdStudent/:idUsuario', custom.ensureAuthenticated, userCtrl.getUserWithIdStudent);

module.exports = router;