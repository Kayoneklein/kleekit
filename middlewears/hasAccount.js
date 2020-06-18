module.exports = function(req, res, next){
  allSchema.User.findOne({email:req.body.email}, (err, user) =>{
      if(err){
          res.send({msg:'something went wrong'})
      }else if(!user){
          res.send({msg:"please create account"})
      }else{
          next()

      }

  })
};