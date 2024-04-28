const app = require('express')();
const cors = require('cors')
const passport = require('passport');
const session = require('express-session');
const authRouter = require('./router/authRouter');
require('dotenv').config();
app.use(cors());
app.use(session({
    resave : false ,
    saveUninitialized:false,
    secret : process.env.SESSION_SECRET
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth' , authRouter);



app.listen(3002 , ()=>{
    console.log('server running on port 3002')
})