import React from 'react';
import "./login.css";
import medblog from "../assets/logo-02.png";
import bigImage from "../assets/signup-second.png";
import {BsArrowLeft} from "react-icons/bs";
import { Link } from 'react-router-dom';


export default function Authpage() {
  return (
    <div className="first-container">
    <div className="sign-up-container">
       <div className="signup-form length">
           <div>
             <img src={medblog} alt="medblog-image" />
           </div>
           <h2 ><Link to="/signup" Link className='wallet-link'><BsArrowLeft className='auth-text'/></Link>Complete your authentication</h2>
           <form className="form">
                       <div class="input">
                       <label >Medical Licence I.d</label>
                       <input type="text" placeholder="Medical ID"/>
                       </div>
                         <div class="input">
                       <label>Hospital name</label>
                       <input type="text"  className='placeholder' placeholder="the name of your hospital"/>
                       </div>
                       <div class="input">
                       <label>Wallet I.d</label>
                       <input type="text"  placeholder="enter your metamask wallet"/>
                       </div>
                       <div className='terms'>
                        <input type="checkbox"/>
                        <span>I agree to the terms of service and privacy policy</span>
                       </div>
                       <button type="submit">
                       Sign up
                       </button>  
           </form>
           <p className="create-account">Don’t have a wallet I.D?<Link className='wallet-link2'><span> Get wallet I.D</span></Link></p>
       </div>
       <div className="image-placeholder">
         <img src={bigImage} alt="big-image"/>
       </div>
    </div>
   </div>
  )
}
