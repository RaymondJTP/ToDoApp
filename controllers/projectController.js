const {Projects,ProjectUser, User} = require('../models')

class Controller{
    static async getProjects(req,res,next){
        try {
            const {id} = +req.user
            console.log('masuk 6');
            const result = await Projects.findAll({
                attributes : {
                    exclude : ['createdAt', 'updatedAt']
                }
            })

            // const results = await ProjectUser.findAll({
            //     where : {
            //         id
            //     },
            //     attributes : {
            //         exclude : ['createdAt', 'updatedAt']
            //     }
            // })

            console.log('masuk 11');
            res.status(200).json(result)
        } catch (err) {
            console.log('error di controller project');
        }
    }

    static async getProjectById(req,res,next){
        try {
            const projectId = +req.params.id

            console.log('34');

            const project = await Projects.findOne({
                where : {
                    id : projectId
                },
                attributes : {
                    exclude : ['createdAt', 'updatedAt']
                },
                // include : User
            })

            console.log('44');

            const result = await ProjectUser.findAll(
                {
                where : {
                    projectId : project.id
                },
                include : User
            }
            )

            res.status(200).json(result)
        } catch (err) {
            console.log('eror di project id');
        }
    }

    static async getProjectsUser (req,res,next){
        try {
            const id = +req.user.id
            console.log(id);
            const results = await ProjectUser.findAll({
                where : {
                    userId : id
                },
                attributes : {
                    exclude : ['createdAt', 'updatedAt']
                },
                include : Projects
            })

            res.status(200).json(results)

        } catch (err) {
            console.log('error di project user');            
        }
    }

    static async addProjects(req,res,next){
        try {
            const id = +req.user.id
            const {name} = req.body

            if(!name) throw ({name : 'empty', message : 'Project name cant be empty'})

            const project = await Projects.create({
                name
            })

            const projectUser = await ProjectUser.create({
                projectId : project.id,
                userId : id
            })

            res.status(201).json({message :`Succes add ${name} as your new project`})
        } catch (err) {
            console.log('errror di add project');
        }
    }

    static async addTeamProjects(req,res,next){
        try {
            const {email} = req.body
            const projectId = +req.params.id
            const teamMember = await User.findOne({
                where : {
                    email
                }
            })

            if(!teamMember) throw ({name : 'empty', message : 'No user founded'})

            const result = await ProjectUser.create({
                userId :teamMember.id,
                projectId
            })

            res.status(201).json({message : `Success add ${email} as new team member on project`})
        } catch (err) {
            console.log('error di add team member');            
        }
    }
}


module.exports = Controller