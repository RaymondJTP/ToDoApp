const {User} = require('../models')
const {signToken} = require('../helpers/jwt')
const {comparePassword} = require('../helpers/bycript')

class Controller {
    static async registerUser(req,res,next){
        try {
            const {firstName, lastName, email, password, address,age} = req.body

            const registerUser = await User.create({
                firstName, lastName, email, password, address, age
            })

            const result = {
                message : 'Success register your account'
            }
            res.status(201).json(result)
        } catch (err) {
            console.log('errorrr');
        }
    }

    static async loginUser(req,res,next){
        try {
            const {email, password} = req.body

            if(!email || !password) throw({name : 'noacces', message : 'Please input email and password'})

            const getUser = await User.findOne({
                where : {
                    email
                }
            })

            if(!getUser) throw({name : 'noaccess', message : 'Wrong email/password'})

            const compareDataUser = comparePassword(password, getUser.password)

            if(!compareDataUser) throw({name : 'noaccess', message: 'Tes Wrong email/password'})

            const payload = {
                id : getUser.id,
                email : getUser.email
            }

            const access_token = signToken(payload)

            res.status(200).json({message : 'Login success', access_token})
        } catch (err) {
            console.log(err.message);
        }
    }
}

module.exports = Controller