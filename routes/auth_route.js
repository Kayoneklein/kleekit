const express         = require('express'),
      router          = express.Router(),
      auth            = require('../middlewears/authenticate')
      getAccessToken  = require('../middlewears/getAccessToken'),
      verifyJWT  = require('../middlewears/verifyJWT')
      hasAccount  = require('../middlewears/hasAccount')
      JWT             = require('jsonwebtoken')



router.get('/createAccount', (req, res) =>{
  res.send({msg:'please signup'})
})

router.post('/login', passport.authenticate('local',{
  // successRedirect: '/',
  failureRedirect: '/createAccount'
}),function(req, res){
  allSchema.User.find({}, (err, user)=> {
    if(err){
      res.send({msg:'something went wrong'})
    }else{
      const [u1] = user.filter(user => user.email === req.user.email)
      const theRest = user.filter(user => user.email !== req.user.email && user.mighty === false && user.allmighty === false)
      const [mighty] = user.filter(user => user.email === req.user.email && user.mighty === true)
      const [allmighty] = user.filter(user => user.email === req.user.email && user.allmighty=== true)
    if(req.user.mighty !== true && req.user.allmighty !== true ){
      console.log('////')
      const accessToken = getAccessToken({user:req.user})
      res.send({u1:u1, theRest:theRest, accessToken:accessToken})
    }else if(req.user.mighty === true && req.user.allmighty !== true){
      console.log('// vip')
      console.log(mighty)
      const accessToken = getAccessToken({user:req.user})
      res.send({u1:mighty, theRest:theRest, accessToken:accessToken})

    }else{
      console.log('// v vip')
      console.log(allmighty)
      const accessToken = getAccessToken({user:req.user})
      res.send({u1:allmighty, theRest:theRest, accessToken:accessToken})
    }
    }
    
  })

  // console.log('+++++++++++++++++++++')
  // console.log(req.user)
  // res.end()


  // console.log('/login')
  // console.log(req.body)
  // const user = req.body
  // const user = {user:username, email:password}
  
  // console.log(accessToken)
  // res.send({user, accessToken:accessToken})
});

router.post('/signup', function(req, res){

  // console.log(`req.body`)
    allSchema.User.register(new allSchema.User({username:req.body.username, email:req.body.email}), req.body.password, function(err, user){
    if(err){
      console.log(err);
      return res.send({msg:'account with email already exist'});
    }else {
    const token = getAccessToken(req.body)
    console.log(token)
     var transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
         user: process.env.POST,
         pass: process.env.PASSWORD
       },
       tls: { rejectUnauthorized: false }
     });
     var mailOptions = {
       from: 'globaltheo@gmail.com',
       to: req.body.email,
       subject: 'Verify your email',
       text: `<h1>http://localhost:3000/signin/${token}</h1>`
     };
     transporter.sendMail(mailOptions, function(error, info){
       if (error) {
         allSchema.User.findOneAndRemove({email:req.user.email}, (err, remove) =>{
           remove.save()
           console.log(remove)
           res.send({msg: 'sorry, signup again'})
         })
       } else {
        // allSchema.User.findOneAndRemove({email:'mighty@gmail.com'})
         console.log('Email sent: ' + info.response +' ' + user);
         res.send({msg: 'congrats! check your email to verifiy your account'})
       }
     });
    }
  });
});


router.get('/signin/:id', verifyJWT, (req, res) => {
  allSchema.User.findOne({email:req.user.email}, (err, user) => {
    if(err){
      res.send({msg:'your acount has been removed'})
    }else{
      user.verify = true;
      user.mighty = true
      user.save();
      res.send({msg:'You can login and fund you wallet now!!!'})
    }

  })
  
})


router.get('/logout', (req, res)=>{

  const token = req.headers.authorization.split(' ' )[1]

  console.log(token)
  req.logout();
  res.send({msg:'see ypu soon'})
});


module.exports = router;
