const {Category, Task} = require('../models')

class Controller{
    static async getCategory(req,res,next){
        try {
            const categories = await Category.findAll({
                attributes : {exclude : ['createdAt','updatedAt']},
                include : Task
            })
            res.status(200).json(categories)
        } catch (error) {
            res.json('fail get categories')
        }
    }

    static async postCategory(req,res,next){
        try {
            const {name} = req.body
            if(!name){
                throw ({name : 'empty', message: `Please input data` })
            }

            const findCategory = await Category.findOne({
                where : {
                    name
                }
            })

            if(findCategory) throw ({name : 'duplicate', message : `Cant put same category`})

            const addCategory = await Category.create({
                name
            })
            
            const result = {
                message : `Success add ${name} as new category`
            }

            res.status(201).json(result)        
        } catch (err) {
            res.json({error : err.message})
        }
    }

    static async deleteCategory(req,res,next){
        try {
            const id = +req.params.id
            console.log(id);

            const findCategory = await Category.findOne({
                where : {
                    id
                }
            })
            console.log(findCategory);

            if(!findCategory) throw ({name : `id`, message : `Cant find the category with id ${id}`})

            const deleteCategory = await Category.destroy({
                where : {
                    id
                }
            })

            const result = {
                message : `Success delete Category with id ${id}`
            }

            res.status(200).json(result)
        } catch (err) {
            res.json({error : err.message})
        }
    }
}

module.exports = Controller