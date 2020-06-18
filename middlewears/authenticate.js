const JWT = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const header = req.headers.authorization;
    let token
    if(header) token = header.slpit(' ')[1]
    console.log(header)
    res.end()

    if(token){
        jwt.verify(token, process.env.JWT_SECRETE, (err, decoded) => {
            if(err){
                res.status(401).json({error:{global: 'invalid token'}})
            }else{
                req.user = user
                next ()

            }  
        }  )
    }else{
        res.status(401).json({errors:{global: 'no token'}})
    }
}