 import React from 'react';
 import Navbar  from './components/Navbar';
 import { Route } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css'
const App=()=>{
  return(
    <div>

      <Navbar/>
      <Route exact path="/Home">
         <Home/>
      </Route>
      <Route path="/contact">
         <Contact/>
      </Route>
      <Route path="/about">
         <About/>
      </Route>
      <Route path="/signup">
         <Signup/>
      </Route>
      <Route path="/login">
         <Login/>
      </Route>
    </div>
  )
}

export default App;
