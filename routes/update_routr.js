const express         = require('express'),
      update          = express.Router(),
      auth            = require('../middlewears/authenticate'),
      getAccessToken  = require('../middlewears/getAccessToken'),
      allschema       = require('../model/schema');


  const users = [
    { id: 1, username: "favour", member: "may 129", invest: "2", withdraw: 3 },
    { id: 2, username: "mass", member: "may 129", invest: "2", withdraw: 3 },
    { id: 3, username: "jupiter", member: "may 129", invest: "2", withdraw: 3 },
    { id: 4, username: "earth", member: "may 129", invest: "2", withdraw: 3 },
    { id: 5, username: "sun", member: "may 129", invest: "2", withdraw: 3 },
    { id: 6, username: "oghu", member: "may 129", invest: "2", withdraw: 3 },
    { id: 7, username: "oghu", member: "may 129", invest: "2", withdraw: 3 },
    { id: 8, username: "oghu", member: "may 129", invest: "2", withdraw: 3 },
    { id: 9, username: "oghu", member: "may 129", invest: "2", withdraw: 3 },
    { id: 10, username: "oghu", member: "may 129", invest: "2", withdraw: 3 },
  ]

// by both
 update.post('/request/:id', (req,res) =>{

    allschema.user.findById(req.params.id, (err, user)=>{
        if(err){
            res.send({msg:'something went wrong'})
        }
         if(!user){
            res.send({msg:'user not found'})
        }else{
            user.request = true;
            user.save()
            res.send({msg:'done'})
        }
    })

 })
 
//  only users 
 update.post('/address/:id', (req,res) =>{

    allschema.user.findById(req.params.id, (err, user)=>{
        if(err){
            res.send({msg:'something went wrong'})
        }
         if(!user){
            res.send({msg:'user not found'})
        }else{
            user.addresss = req.body.addresss;
            user.save()
            res.send({msg:'done'})
        }
    })

 })
 update.post('/msg/:id', (req,res) =>{

    allschema.user.findById(req.params.id, (err, user)=>{
        if(err){
            res.send({msg:'something went wrong'})
        }
         if(!user){
            res.send({msg:'user not found'})
        }else{
            // it should be an array . so push string
            user.message = req.body.msg;
            user.save()


     //nodemailer
    //    const token = getAccessToken(req.body)

    //   var transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //       user: process.env.POST,
    //       pass: process.env.PASSWORD
    //     },
    //     tls: { rejectUnauthorized: false }
    //   });

    //   var mailOptions = {
    //     from: 'globaltheo@gmail.com',
    //     to: req.body.email,
    //     subject: 'Verify your email',
    //     text: `<h1>http://localhost:3000/signin${token}</h1>`
    //   };

    //   transporter.sendMail(mailOptions, function(error, info){
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       console.log('Email sent: ' + info.response);
    //       res.send({msg: 'congrats! check your email to verifiy your account'})
    //     }
    //   });

            res.send({msg:'done'})
        }
    })

 })


 //only by mighty
 
  update.post('/closer/:id', (req,res) =>{

    allschema.user.findById(req.params.id, (err, user)=>{
        if(err){
            res.send({msg:'something went wrong'})
        }
         if(!user){
            res.send({msg:'user not found'})
        }else{
            user.request = true;
            user.save()
            res.send({msg:'done'})
        }
    })

 })
 

 update.get('/user/:who', (req,res) => {
     allschema.User.find({}, (err, users) => {
         if(err) {
               res.send({msg:'something went wrong'})
        
        }else{
            console.log(users)
            // filter base on authtoken to preserved m/a
              res.send(users)

         }
     })
 })
 

//   update.get('/getUser', (req,res) =>{
//       allschema.user.find({}, (err,user)=> {
//          if(err) {
//              res.send({msg:'something went wrong'})
//          }else{
//              res.send(user)
//          }
//       })

     
//  })








      module.exports = update;