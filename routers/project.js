const router = require('express').Router()
const projectController = require('../controllers/projectController')

// router.get('/', projectController.getProjects)
router.get('/', projectController.getProjectsUser)
router.get('/:id', projectController.getProjectById)
router.post('/', projectController.addProjects)
router.post('/:id/addMember', projectController.addTeamProjects)
// router.delete('/:id', taskController.deleteTasks)

module.exports = router