var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controllers')
/* GET users listing. */
router.get('/all',userController.getAll);
router.post('/new',userController.newUser);
router.post('/update/:id',userController.updateUser);
router.post('/delete/:id',userController.deleteUser);
router.post('/find/:id',userController.findUser);
module.exports = router;
