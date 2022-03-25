const {Task, Category, User} = require('../models')

class Controller{
    static async getTasks(req,res,next){
        try {
            const getTasks = await Task.findAll({
                attributes : {exclude : ["createdAt", "updatedAt"]},
                include : Category
            })

            res.status(200).json(getTasks)
        } catch (err) {
            res.json({message: err.message})
        }
    }

    static async postTasks(req,res,next){
        try {
            const{name,categoryId, userId} = req.body

            if(!name || !categoryId || !userId) throw({name : 'input', message : 'Please input '})

            const postTasks = await Task.create({name,categoryId,userId})

            const result = {
                message : 'Success add new task'
            }

            res.status(201).json(result)
        } catch (err) {
            res.json({message: err.message})
        }
    }

    static async deleteTasks(req,res,next){
        try {
            const id = +req.params.id

            const findTask = await Task.findOne({
                where :{
                    id
                }
            })

            if(!findTask) throw({name:'id', message : `Cant find task with id ${id}`})

            const deleteTask = await Task.destroy({
                where : {
                    id
                }
            })

            const result = {
                message : `Success delete ${findTask.name}`
            }

            res.status(200).json(result)
        } catch (err) {
            res.json({message : err.message})
        }
    }

}

module.exports = Controller