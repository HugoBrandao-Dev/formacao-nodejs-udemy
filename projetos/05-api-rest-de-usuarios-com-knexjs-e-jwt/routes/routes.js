var express = require("express")
var app = express();
var router = express.Router();
var HomeController = require("../controllers/HomeController");
var UserController = require('../controllers/UserController')

router.get('/', HomeController.index);
router.post('/user', UserController.create)
router.get('/user', UserController.index)
router.post('/user/:id', UserController.findUser)
router.put('/user', UserController.edit)
router.delete('/user/:id', UserController.remove)
router.post('/recoverPassword', UserController.recoverPassword)
router.post('/changePassword', UserController.changePassword)
router.post('/login', UserController.login)

module.exports = router;
