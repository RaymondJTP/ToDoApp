const router = require('express').Router()
const userController = require('../controllers/userController')
const authentication = require('../middlewares/authentication')

router.post('/register', userController.registerUser)
router.post('/login', userController.loginUser)
router.use(authentication)

module.exports = router