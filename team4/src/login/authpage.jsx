import React from 'react';
import "./login.css";
import medblog from "../assets/logo-02.png";
import bigImage from "../assets/signup-second.png";
import {BsArrowLeft} from "react-icons/bs";


export default function Authpage() {
  return (
    <div className="first-container">
    <div className="sign-up-container">
       <div className="signup-form length">
           <div>
             <img src={medblog} alt="medblog-image" />
           </div>
           <h2 > <BsArrowLeft className='auth-text'/>Complete your authentication</h2>
           <form className="form">
                       <div class="input">
                       <label >Medical Licence I.d</label>
                       <input type="text" placeholder="Surname first"/>
                       </div>
                         <div class="input">
                       <label>Hospital name</label>
                       <input type="text"  className='placeholder' placeholder="eg. janedoe@gmail.com"/>
                       </div>
                       <div class="input">
                       <label>Wallet I.d</label>
                       <input type="text"  placeholder="6+ characters, 1 capital letter"/>
                       </div>
                       <div className='terms'>
                        <input type="checkbox"/>
                        <span>I agree to the terms of service and privacy policy</span>
                       </div>
                       <button type="submit">
                       Sign up
                       </button>
                      
           </form>
           <p className="create-account">Don’t have a wallet I.D?<span> Get wallet I.D</span></p>
       </div>
       <div className="image-placeholder">
         <img src={bigImage} alt="big-image"/>
       </div>
    </div>
   </div>
  )
}
