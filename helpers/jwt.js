let jwt = require('jsonwebtoken');

function signToken(payload){
    return jwt.sign(payload, 'labasil');
}

function verifyToken(access_token){
    console.log('masuk verify');
    return jwt.verify(access_token, 'labasil');
}

module.exports = {
    signToken,
    verifyToken
}