const express                  = require('express'),
      app                      = express(),
      env                      = require('dotenv').config()
      nodemailer               = require('nodemailer')
      port                     = 5000;
      path                     = require('path')
      session                  = require('express-session'),
      allSchema                = require('./model/schema'),
      cors                     = require('cors')
      passport                 = require('passport'),
      mongoose                 = require('mongoose'),
      bodyParser               = require('body-parser'),
      localStrategy            = require('passport-local'),
      passportLocalMongoose    = require('passport-local-mongoose'),
      auth                     = require('./middlewears/authenticate')



      //router =========
      // update_router             =require('./routes/update_routr')
      // auth_router               = require('./routes/auth_route')


// mongoose.connect('mongodb://localhost:27017/weed',
//   {
//     useNewUrlParser: true,
//      useUnifiedTopology: true,
//      useCreateIndex:true
//     });
if(process.env.NODE_ENV==='production'){
  app.use(express.static('v1/build'));
}
  // app.use(express.static('v1/build'));


app.use(cors())
app.use(session({
  secret: 'you only rest when you die',
  resave: true,
  saveUninitialized: true
}));
// app.use(isLoggedIn)
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next)=>{
  res.locals.currentUser = req.user;
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('assets'));



passport.use(new localStrategy(allSchema.User.authenticate()));
passport.serializeUser(allSchema.User.serializeUser());
passport.deserializeUser(allSchema.User.deserializeUser());
  

  app.get('*', (req, res) => {
    // res.send('Wooooooooomd')
    res.sendFile(path.resolve(__dirname, 'v1', 'build', 'index.html'))
  })



app.listen(process.env.PORT || port, () => console.log(`connented to port ${port}`))
