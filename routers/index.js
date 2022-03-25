const router = require('express').Router()
const routerCategory = require('./category.js')
const routerTask = require('../routers/task')

router.use('/category', routerCategory)
router.use('/task', routerTask)

module.exports = router