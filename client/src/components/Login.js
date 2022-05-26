import React, { useState } from 'react';
import { NavLink,useHistory } from 'react-router-dom';
// import {reg} from '../images/login vector/730_generated.jpg'
import reg from './loginPic.jpg';
const Login =()=>{
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  const history = useHistory();
  const loginUser= async(e)=>{
    e.preventDefault();
    //  const { email, password} = user;
    const res=await fetch("/login",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify({
         email, password

      })
       });
    //  await   res.body.email.save();
    //   await res.body.password.save();
    if(!email || !password){
      window.alert("Login failed");
    }
    else{
       const data =  await res.json();
      
       console.log(data);
       console.log(email);
       console.log(password);
       if(data.status===400|| !data || data.status===422){
        window.alert("Login failed");
        
       }
       else{
         
        
        window.alert("Login success");
        history.push('./Home')
       }
      }
  }
    return(
        <>
        <section className="signin">
            <div className="container mt-5">
            <div className="signup-content">
           
            <div className="signup-form">
                <h2>Sign in</h2>
                
<form method="POST">
<div className="input-group mb-3">
  <input type="email" className="form-control" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
 
</div>

<div className="input-group mb-3">
  <input type="password" className="form-control" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" aria-label="Username"/>
  </div>
  
<div className="register-button">
<button type="button" className="btn btn-primary" onClick={loginUser}>Sign in!</button>
</div>
</form>
<NavLink to="/signup" className="already">Create an account </NavLink>

                </div>
                <div className="Regpic">
            <img  className="logimg" src={reg} alt="login"/>
            </div>
            </div>
            
            </div>
            
        </section>
        </>
    )
}
export default Login;