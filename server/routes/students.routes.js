const router = require('express').Router();

const custom = require('../middlewares/custom');

const studentCtrl = require('../controllers/student.controller');

router.post('/', /*custom.ensureAuthenticated,*/ studentCtrl.createStudent);
router.get('/names', custom.ensureAuthenticated, studentCtrl.getNameStudents);
router.get('/:id', custom.ensureAuthenticated, studentCtrl.getStudent);
router.put('/disable', custom.ensureAuthenticated, studentCtrl.disableStudent);
router.put('/', custom.ensureAuthenticated, studentCtrl.putStudent);

module.exports = router;