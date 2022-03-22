const router = require('express').Router()
const categoryController = require('../controllers/categoryController')

router.get('/', categoryController.getCategory)

module.exports = router