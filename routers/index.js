const router = require('express').Router()
const routerCategory = require('./category.js')

router.use('/category', routerCategory)

module.exports = router