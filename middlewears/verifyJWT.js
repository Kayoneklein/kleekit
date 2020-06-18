const JWT = require('jsonwebtoken')

module.exports = (req, res, next) => {

    let token =  req.params.id


    if(token){
        JWT.verify(token, process.env.JWT_SECRETE, (err, decoded) => {
            if(err){
                res.send({msg:'invalid token'})
            }else{
                req.user = decoded
                next ()

            }
        }  )
    }else{
        res.status(401).json({errors:{global: 'no token'}})
    }
}
