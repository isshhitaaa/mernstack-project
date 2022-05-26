import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
// import {reg} from '../images/login vector/730_generated.jpg'
import reg from './loginPic.jpg';

const axios= require ("axios");
const Signup = () => {
  const [user, setUser] = useState({
    name: "", email: "", phone: "", work: "", password: "", cpassword: ""

  })
  let name, value;
  const history = useHistory();
  const handleInputs = (e) => {

    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value })
  }
  console.log({ [name]: value });
  const postData= async(e)=>{
    e.preventDefault();
   // const {name, email, phone, work, password, cpassword} = user;
   const data=await axios.post("/register",user)
   .then((res)=>{
     console.log("helllooo");
     console.log("Hello from abhi "+res);
    if(res.status===422 || !res){
          window.alert("Registration failed")
        }
        else{
          window.alert("Registration success");
          history.push("/login")
        }
    
   })
   .catch((err)=>{
      console.log(err);
      window.alert("Registration failed")
   })
    
    // fetch("/register",{
    //   method:"POST",
    //   headers:{
    //     "Content-type":"application/json"
    //   },
    //   body: JSON.stringify({
    //     name, email, phone, work, password, cpassword

      //})
     //  });
    
      // const data =  await res.json();
      //  if(data.status===422 || !data){
      //    window.alert("Registration failed")
      //  }
      //  else{
      //   window.alert("Registration success");
      //   history.push("/login")
      //  }
  }
  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2>Sign up</h2>
              <form method="POST">
              <div class="input-group mb-3">

                <input type="text" class="form-control" name="name" id="name" value={user.name} onChange={handleInputs} placeholder="Your name" aria-label="Username" aria-describedby="basic-addon1" />
              </div>

              <div class="input-group mb-3">
                <input type="email" class="form-control" name="email" id="email" value={user.email} onChange={handleInputs} placeholder="Your email" aria-label="Recipient's username" aria-describedby="basic-addon2" />

              </div>


              <div class="input-group mb-3">

                <input type="number" class="form-control" name="phone" id="phone" value={user.phone} onChange={handleInputs} placeholder="Mobile number" id="basic-url" aria-describedby="basic-addon3" />
              </div>

              <div class="input-group mb-3">

                <input type="text" class="form-control" name="work" id="work" value={user.work} onChange={handleInputs} placeholder="Your profession" aria-label="Amount (to the nearest dollar)" />

              </div>

              <div class="input-group mb-3">
                <input type="password" class="form-control" name="password" id="password" value={user.password} onChange={handleInputs} placeholder="Password" aria-label="Username" />
              </div>
              <div>
                <input type="password" class="form-control" name="cpassword" id="cpassword" value={user.cpassword} onChange={handleInputs} placeholder="Confirm password" aria-label="Server" />
              </div>
              <div className="register-button">
                <button type="button" class="btn btn-primary" onClick={postData}>Register!</button>
              </div>
              </form>
              <NavLink to="/login" className="already">I am already registered</NavLink>
            </div>
            
            <div className="Regpic">
              <img src={reg} alt="login" />
            </div>
          </div>

        </div>

      </section>

    </>
  )
  }
export default Signup;