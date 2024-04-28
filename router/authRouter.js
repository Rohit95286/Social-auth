const authRouter =  require('express').Router()
const githubAuthRouter = require('./githubAuthRouter');
const googleAuthRouter = require('./googleAuthRoute');
authRouter.use('/google' , googleAuthRouter);
authRouter.use('/github' , githubAuthRouter);


authRouter.get('/failure',(req, res)=>{
    console.log("there")
    res.status(401).send("login failed")
})

authRouter.get("/success", (req, res) => {
  
  if(req?.user){
    res.status(200).send(req?.user);
  }

  });








module.exports = authRouter