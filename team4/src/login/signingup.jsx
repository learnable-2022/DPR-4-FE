import React, { useEffect, useState } from 'react';
import "./login.css";
import medblog from "../assets/logo-02.png";
import bigImage from "../assets/signup-second.png";
import { faCheck, faTimes, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from 'react-router-dom';
import { useRequestProcessor } from '../api/requestProcessor';



const USER_REGEX =  /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
const PWD_REGEX = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
const validEmailRex = new RegExp( '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

export default function Signingup() {
    const [userName , setUserName] = useState('');
    const { state } = useLocation();
    const[validUserName , setValidUserName]= useState(false);

    const [Email, setEmail]= useState('');
    const [validEmail, setValidEmail]=useState(false);

    const [password , setPassWord] = useState('');
    const [validPassword, setValidPassword]= useState(false);
    const [matchingPassoword , setMatchingPassword]= useState(false);
    const [confirmPassword , setConfirmPassword] = useState('');
    const[passwordVisible, setPasswordVisible]= useState(false);



    const[medicalId ,setMedicalId]=useState('');

    const [hospital , setHospital]=useState('');

    const [walletId , setWalletId]= useState('');

const { makeRequest } = useRequestProcessor();

    const toggle =()=>{
        setPasswordVisible(!passwordVisible);
    }
    const handleSumbit=(e)=>{
            e.preventDefault();
            const data = {
              name:userName,
              email:Email,
              password:password,
              license:medicalId,
              hospital:hospital,
              walletId: walletId,
            };
            const { response, error } = makeRequest({url:"/doctor/signup", method: "post", data})
            console.log("response:", response, "error:",error);

    }
    useEffect(()=>{
        setValidUserName(USER_REGEX.test(userName));
    },[userName])

    useEffect(()=>{
        setValidPassword(PWD_REGEX.test(password));
        setMatchingPassword(password === confirmPassword)
    },[password,confirmPassword])
    useEffect(()=>{
        setValidEmail(validEmailRex.test(Email))
    },[Email])

  return (
    <div className="first-container">
    <div className="sign-up-container">
       <div className="signup-form ">
           <div>
             <img src={medblog} alt="medblog-image" />
           </div>
           <h2>Sign up</h2>
           <p>Create your account</p>
           <form className="form" onClick={handleSumbit}>
                       <div class="input">
                       <label >Enter full name
                       <FontAwesomeIcon icon={faCheck} className={validUserName ? "valid" : "hide"} />
                          <FontAwesomeIcon icon={faTimes} className={ validUserName|| !userName ? "hide" : "invalid"} />
                       </label>
                       <input 
                       type="text" 
                       placeholder="Surname first"
                       onChange={(e)=> setUserName(e.target.value)}
                       value={userName}
                       />
                       </div>
                         <div class="input">
                       <label>Email Address
                       <FontAwesomeIcon icon={faCheck} className={ validEmail? "valid" : "hide"} />
                          <FontAwesomeIcon icon={faTimes} className={ validEmail|| !Email ? "hide" : "invalid"} />
                       </label>
                       <input
                        type="text"
                          placeholder="eg. janedoe@gmail.com"
                          onChange={(e)=> setEmail(e.target.value)}
                          value={Email}
                          />
                       </div>
                       <div class="input">
                       <label>Password
                       <FontAwesomeIcon icon={faCheck} className={validPassword ? "valid" : "hide"} />
                     <FontAwesomeIcon icon={faTimes} className={validPassword || !password ? "hide" : "invalid"} />
                     <FontAwesomeIcon
                    icon={passwordVisible ? faEyeSlash : faEye}
                    className="password-toggle"
                    onClick={toggle}
                  />
                       </label>
                       <input 
                       type={passwordVisible ? "text": "password"} 
                        placeholder="6+ characters, 1 capital letter"
                        onChange={(e)=>setPassWord(e.target.value)}
                        value={password}
                        />
                       </div>
                       <div class="input">
                       <label>Confirm Password
                       <FontAwesomeIcon icon={faCheck} className={matchingPassoword ? "valid" : "hide"} />
                     <FontAwesomeIcon icon={faTimes} className={validPassword || !matchingPassoword? "hide" : "invalid"} />
                       </label>
                       <input
                        type="password"  
                        placeholder="Password"
                        onChange={(e)=> setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        />
                       </div>
                       <div class="input">
                       <label >Medical Licence I.d</label>
                       <input
                        type="text"
                         placeholder="Medical ID"
                         onChange={(e)=>setMedicalId(e.target.value)}
                         value={medicalId}
                         required
                         />
                       </div>
                         <div class="input">
                       <label>Hospital name</label>
                       <input
                        type="text"
                         className='placeholder' 
                         placeholder="the name of your hospital"
                         onChange={(e)=> setHospital(e.target.value)}
                         value={hospital}
                         required
                         />
                       </div>
                       <div class="input">
                       <label>Wallet I.d</label>
                       <input 
                       type="text"  
                       placeholder="enter your metamask wallet"
                       onChange={(e)=> setWalletId(e.target.value)}
                       value={walletId}
                       required
                       />
                       </div>
                       <button disabled={!validUserName || !validPassword || !matchingPassoword} type="submit">
                        Continue
                       </button>
                      
           </form>
           <p className="create-account">Already  have an account?<Link to= "/login" className='wallet-link2'><span>Log in</span></Link></p>
       </div>
       <div className="image-placeholder">
         <img src={bigImage} alt="big-image"/>
       </div>
    </div>
   </div>
  )
}
