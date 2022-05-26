import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import reg from './loginPic.jpg';
const About =()=>{
    const history = useHistory();
    const [userData,setUserData] = useState(0);
    //const data="";
    const callAboutPage= async()=>{
        try{
             const res= await fetch('/about',{
                 method:"GET",
                 headers:{
                     Accept: "application/json",
                     "Content-Type":"application/json"

                 },
                 credentials:"include"
             })
           const  data = await res.json();
             console.log(data.name);
             setUserData(data);
            
             if(!data.status===200){
                 window.alert("Cannot sign in successfully")
             }
             else{
                
             }
        }catch(err){
             console.log(err);
             history.push("/login")
        }
    }
    useEffect(()=>{
           callAboutPage();
    },[])
    return(
        <>
            <div className="container emp-profile">
                <form method="">
                    <div className="row">
                        <div className="col-md-4">
                            <img className="aboutImg" src={reg} alt="profile"/>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h3> {userData.name}</h3>
                                <h4>{userData.work}</h4>
                                
                                <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active m-4 mb-0" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                                    
                                </li>
                                <li className="nav-item">
                                <a className="nav-link active  m-4 mb-0" id="home-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                               
                                </li>
                                
                                </ul>
                                <h5 className="profile-rating"> {userData.email} </h5>
                                <h6 className="profile-rating mt-3 mb-5"> {userData.phone} </h6>
                             </div>   

                        </div>
                        <div className="col-md-2">
                            <input type="submit" className="profile_edit_btn" value="edit-profile"/>
                        </div>

                    </div>

                </form>

            </div>
        </>
    )
}
export default About;