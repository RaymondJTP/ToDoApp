const router = require('express').Router()
const categoryController = require('../controllers/categoryController')

router.get('/', categoryController.getCategory)
router.post('/', categoryController.postCategory)
router.delete('/:id', categoryController.deleteCategory)

module.exports = router