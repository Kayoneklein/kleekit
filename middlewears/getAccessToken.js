const JWT = require('jsonwebtoken')



module.exports = (user) => {
    // const {username} = user
    console.log(user)
     return  JWT.sign(user, process.env.JWT_SECRETE, {expiresIn: '100m'} )


}
