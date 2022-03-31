const router = require('express').Router()
const routerProject = require('./project')
const routerCategory = require('./category.js')
const routerTask = require('../routers/task')
const routerUser = require('./user')

router.use('/', routerUser)
router.use('/project', routerProject)
router.use('/category', routerCategory)
router.use('/task', routerTask)

module.exports = router