import React from 'react';
import './login.css';
import medblog from "../assets/logo-02.png";
import bigImage from "../assets/signup-second.png";
import { Link } from "react-router-dom";


export default function Patientlogin() {
  return (
    <div className="first-container">
    <div className="sign-up-container">
       <div className="signup-form length">
           <div>
             <img src={medblog} alt="medblog-image" />
           </div>
           <h2>Login</h2>
           <p>Please enter your login details to sign in.</p>
           <form className="form">
                       <div class="input">
                       <label >Username or Email Address</label>
                       <input type="text" placeholder="chimuanyaruth20@gmail.com"/>
                       </div>
                         <div class="input">
                       <label>Password</label>
                       <input type="password"  placeholder="password"/>
                       </div>
                         <div className="diverge">
                          <div>
                           <input type="checkbox" />
                            <span>Keep me logged in</span>
                           </div>
                           <div>
                           <Link to="" className="linky"><span>Forgot password?</span></Link>
                           </div>
                         </div>
                       <button className="btn"  type="submit">
                       Log in
                       </button>
                      
           </form>
           <p className="create-account">Don’t have an account?<Link to ="/patient-sign-up" className='wallet-link2'><span>sign up</span></Link></p>
       </div>
       <div className="image-placeholder">
         <img src={bigImage} alt="big-image"/>
       </div>
    </div>
   </div>
  )
}
