import React from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '../images/logo.jfif';
// import 'bootstrap/dist/css/bootstrap.css'
const Navbar =()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href=" "  > Verifier </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=" navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  ms-auto">
        <li className="nav-item ">
          <NavLink className="nav-link active" aria-current="page" to="/Home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/Contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/Login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/Signup">Register</NavLink>
        </li>
        
        
      </ul>
     
    </div>
  </div>
</nav>
        
        </>
    )
}
export default Navbar;