import React, { useState } from 'react';
import "./login.css";
import medblog from "../assets/logo-02.png";
import bigImage from "../assets/signup-second.png";



export default function Signingup() {
    const [userName , setUserName] = useState('');

    const [Email, setEmail]= useState('');

    const [password , setPassWord] = useState('');

    const [cofirmPassword , setConfirmPassword] = useState('')


  return (
    <div className="first-container">
    <div className="sign-up-container">
       <div className="signup-form ">
           <div>
             <img src={medblog} alt="medblog-image" />
           </div>
           <h2>Sign up</h2>
           <p>Create your account</p>
           <form className="form">
                       <div class="input">
                       <label >Enter full name</label>
                       <input 
                       type="text" 
                       placeholder="Surname first"
                       onChange={()=> setUserName}
                       value={userName}
                       />
                       </div>
                         <div class="input">
                       <label>Email Address</label>
                       <input
                        type="text"
                          placeholder="eg. janedoe@gmail.com"
                          onChange={(e)=> setEmail(e.target.value)}
                          value={Email}
                          />
                       </div>
                       <div class="input">
                       <label>Password</label>
                       <input 
                       type="text" 
                        placeholder="6+ characters, 1 capital letter"/>
                       </div>
                       <div class="input">
                       <label>Confirm Password</label>
                       <input
                        type="text"  
                        placeholder="Password"
                        onChange={(e)=> setConfirmPassword(e.target.value)}
                        />
                       </div>
                       <button type="submit">
                        Continue
                       </button>
                      
           </form>
           <p className="create-account">Already  have an account?<span>Log in</span></p>
       </div>
       <div className="image-placeholder">
         <img src={bigImage} alt="big-image"/>
       </div>
    </div>
   </div>
  )
}
