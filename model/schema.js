var mongoose                = require('mongoose');
var passportLocalMongoose   = require('passport-local-mongoose')
var schema                  = mongoose.Schema;
// coonnection manager
var connection              = mongoose.connection;
connection.on('connected',function(){
  console.log('db connected');
});

// mongoose schema for user
var userSchema              = new schema({
  username :{ 
    type: String,
    required:true
  },
  password : {
    type:String,
    // required:true
  },
  member: {
    type:Date,
    default:  Date.now

  },
  invest : {
    type:Number,
    default: 0
  

  },
  verify : {
    type:Boolean,
    default:false
 
  },
  new : {
    type:Number,
    default:0

  },
   mighty: {
    type:Boolean,
    default:false

  },
   allmighty: {
    type:Boolean,
    default:false
  
  },
  email: {
    type: String,
    required:true,
    unique:true
  },
  rate:{
    type:Number,
    dafault:7
  },

  comment: [
   

  ], 

  wallet:{
    type:String,
  }

});



// mongoose schema for comment
// const commentShema = new schema({
//   author: {
//     id:{
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'user'
//     },
//     username: String
//   },
//   say: String,
//   time: Date
// });
//mongoose schema for season



userSchema.plugin(passportLocalMongoose);

// const Season = mongoose.model('season', seasonSchema);
const User = mongoose.model('User', userSchema);
// const Ad  = mongoose.model('ad', adsSchema);
// const Comment = mongoose.model('comment', commentShema);
// const Wallet = mongoose.model('Wallet', walletSchema )

module.exports = {
  // Wallet: Wallet,  
  User: User,
  // Ad: Ad,
  // Comment: Comment,
  // Season: Season
};
