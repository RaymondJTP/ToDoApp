const router = require('express').Router()
const taskController = require('../controllers/taskController')

router.get('/', taskController.getTasks)
router.post('/', taskController.postTasks)
router.delete('/:id', taskController.deleteTasks)

module.exports = router