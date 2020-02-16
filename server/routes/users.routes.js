const router = require('express').Router();

const userCtrl = require('../controllers/users.controller');

router.post('/signup', userCtrl.createUser);
router.post('/signin', userCtrl.loginUser);

module.exports = router;