const {User} = require('../models')
const {verifyToken} = require('../helpers/jwt.js')

const authentication = async(req,res,next) => {
    try {
        const{access_token} = req.headers
        console.log(access_token);

        if(!access_token) throw({name: 'noaccess', message : 'token Your input is wrong'})
        console.log('asup0');
        const verified = verifyToken(access_token)
        console.log('asu');
        const getUser = await User.findOne({
            where : {
                email : verified.email
            }
        })

        if(!getUser) throw({name : 'noaccess' , message :'input slaahYour input is wrong'})
        req.user = {
            id : getUser.id,
            email : getUser.email
        }
        next()
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = authentication