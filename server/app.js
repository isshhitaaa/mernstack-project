const express= require('express');
const dotenv = require('dotenv');
const mongoose= require('mongoose');

const app= express();
const middleware=(req,res,next)=>{
    console.log('hello from middle');
    next();
}
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 app.use(require('./router/auth'));
//const User = require('./model/userSchema')
// require('./db/conn');
dotenv.config({path: './config.env'});
const DB= process.env.DATABASE;
mongoose.connect(DB).then(()=>{
    console.log("Connection succesfull");
}).catch((err)=>
    console.log("FAILED"));
   
    
app.get('/',(req,res)=>{
    res.send("Hello from mern developer");
})
// app.get('/about',middleware,(req,res)=>{
//     console.log("aboutpage");
//     res.send("Hello from ABOUT mern developer");
// })
console.log("hey");
app.listen(8000,()=>{
    console.log("Server is running");
})