import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Landing from './landing/landing';
import Login from './login/login';
import Signup from './signup/signup';


// note!!!
// i have only created the router part for the signup , login and Landing page.
// subsequent route path would follow suite. 

 function Approuter() {
  return (
    
        <Router>
            
            
                <Routes>
                     <Route path='/' element={<Landing/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path='signup' element={<Signup/>}/>

                    <Route>

                    </Route>

                </Routes>

                
         

        </Router>

  )
}


export default Approuter;