module.exports = function(req, res, next){
  if(req.isAuthenticated()){
    console.log(req.user)
    return next();
  }
  req.flash('error', 'please login')
  res.redirect('/');
};
