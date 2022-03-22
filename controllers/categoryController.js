const {Category} = require('../models')

class Controller{
    static async getCategory(req,res,next){
        try {
            const categories = await Category.findAll({
                attributes : {exclude : ['createdAt','updatedAt']}
            })
            res.status(200).json(categories)
        } catch (error) {
            res.json('fail get categories')
        }
    }
}

module.exports = Controller