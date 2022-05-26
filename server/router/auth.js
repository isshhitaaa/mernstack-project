const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const router = express.Router();
const authenticate = require("../middleware/authenticate")
router.get('/',(req,res)=>{
    res.send("Hello from mern developer of router");
})
const User=require('../model/userSchema');
const mongoose= require('mongoose');
require('../db/conn');


router.post('/register',(req,res)=>{
   
    const {name,email,phone, work, password,cpassword}= req.body;

     if(!name || !email|| !phone || !work || !password || !cpassword){
         
         res.send({status:422});
        //  return res.status(422).json({ error:"Invalid"})
     }

User.findOne({email:email})
.then((userExists)=>{
    if(userExists){
        console.log("status send");
        res.send({status:422});
        // return res.status(422).json({ error:"Already exists"})
    }
    const user = new User({name,email,phone, work, password,cpassword})
    user.save().then(()=>{
        console.log(req.body);
        res.status(201).json({message:"User register success"})
    }).catch((err)=>res.status(500).json({error:"failed to register"}))
}).catch(err=>{console.log(err)});
})


router.post('/login', async(req,res)=>{
   
    const {email,password} = req.body;

  
    
    if(!email || !password){
        console.log("missing");
        console.log(email);
    console.log(password);
        return res.status(400).json({ error:"Fill the credentials"})
    }
    console.log("now trying");
    try{     console.log("trying");
              const userLogin = await User.findOne({email:email});
              console.log("finding user");
              if(userLogin){
                const passMatch = await bcrypt.compare(password, userLogin.password);
                const token = await userLogin.generateAuthToken();
                // console.log(token);
                res.cookie("jwtoken", token,{
                    expires: new Date(Date.now()+ 25892000000),
                    httpOnly:true
                })
                if(passMatch){
                    console.log("pass atched");
                    // console.log(email);
                    // console.log(password);
            return  res.status(200).json({message:"Signed in sucessfully"})
            }
            else{
                // console.log("wrong credentials");
                res.send({status:400});
                // return  res.status(400).json({message:"Invalid credentials"})
            }
              }
              
              else{
                //   console.log("not found dear");
                  res.send({status:400});
                // return res.status(400).json({ error:"email not found"});
               
              }
    } 
    catch(err){
           console.log(err);
    }
})
var cookieParser = require('cookie-parser');
router.use(cookieParser());
router.get('/about',authenticate,(req,res)=>{
    // console.log("aboutpage");
    
    res.send(req.rootUser)
})
module.exports= router;