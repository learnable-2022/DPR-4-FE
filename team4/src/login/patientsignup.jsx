import React, { useEffect, useState } from 'react';
import "./login.css";
import medblog from "../assets/logo-02.png";
import bigImage from "../assets/signup-second.png";
import { faCheck, faTimes, faInfoCircle, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const USER_REGEX =  /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
const PWD_REGEX = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
const validEmailRex = new RegExp( '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

export default function Patientsignup() {
    const [PatientUserName , setPatientUserName] = useState('');
    const[PatientvalidUserName , setPatientValidUserName]= useState(false);

    const [PatientEmail, setPatientEmail]= useState('');
    const [PatientvalidEmail, setPatientValidEmail]=useState(false);

    const [Patientpassword , setPatientPassWord] = useState('');
    const [PatientvalidPassword, setPatientValidPassword]= useState(false);
    const [PatientmatchingPassoword , setPatientMatchingPassword]= useState(false);
    const [PatientconfirmPassword , setPatientConfirmPassword] = useState('');
    const[PatientpasswordVisible, setPatientPasswordVisible]= useState(false)


    const toggle =()=>{
        setPatientPasswordVisible(!PatientpasswordVisible);
    }
    const handleSumbit=(e)=>{
            e.preventDefault();
    }
    useEffect(()=>{
        setPatientValidUserName(USER_REGEX.test(PatientUserName));
    },[PatientUserName])

    useEffect(()=>{
        setPatientValidPassword(PWD_REGEX.test(Patientpassword));
        setPatientMatchingPassword(Patientpassword === PatientconfirmPassword)
    },[Patientpassword,PatientconfirmPassword])
    useEffect(()=>{
        setPatientValidEmail(validEmailRex.test(PatientEmail))
    })

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
                       <FontAwesomeIcon icon={faCheck} className={PatientvalidUserName ? "valid" : "hide"} />
                          <FontAwesomeIcon icon={faTimes} className={ PatientvalidUserName|| !PatientUserName ? "hide" : "invalid"} />
                       </label>
                       <input 
                       type="text" 
                       placeholder="Surname first"
                       onChange={(e)=> setPatientUserName(e.target.value)}
                       value={PatientUserName}
                       />
                       </div>
                         <div class="input">
                       <label>Email Address
                       <FontAwesomeIcon icon={faCheck} className={ PatientvalidEmail? "valid" : "hide"} />
                          <FontAwesomeIcon icon={faTimes} className={ PatientvalidEmail|| !PatientEmail ? "hide" : "invalid"} />
                       </label>
                       <input
                        type="text"
                          placeholder="eg. janedoe@gmail.com"
                          onChange={(e)=> setPatientEmail(e.target.value)}
                          value={PatientEmail}
                          />
                       </div>
                       <div class="input">
                       <label>Password
                       <FontAwesomeIcon icon={faCheck} className={PatientvalidPassword ? "valid" : "hide"} />
                     <FontAwesomeIcon icon={faTimes} className={PatientvalidPassword || !Patientpassword ? "hide" : "invalid"} />
                     <FontAwesomeIcon
                    icon={PatientpasswordVisible ? faEyeSlash : faEye}
                    className="password-toggle"
                    onClick={toggle}
                  />
                       </label>
                       <input 
                       type={PatientpasswordVisible ? "text": "password"} 
                        placeholder="6+ characters, 1 capital letter"
                        onChange={(e)=>setPatientPassWord(e.target.value)}
                        value={Patientpassword}
                        />
                       </div>
                       <div class="input">
                       <label>Confirm Password
                       <FontAwesomeIcon icon={faCheck} className={PatientmatchingPassoword ? "valid" : "hide"} />
                     <FontAwesomeIcon icon={faTimes} className={PatientvalidPassword || !PatientmatchingPassoword? "hide" : "invalid"} />
                       </label>
                       <input
                        type="password"  
                        placeholder="Password"
                        onChange={(e)=> setPatientConfirmPassword(e.target.value)}
                        value={PatientconfirmPassword}
                        />
                       </div>
                       <button disabled={!PatientvalidUserName || !PatientvalidPassword || !PatientmatchingPassoword} type="submit">
                        Continue
                       </button>
                      
           </form>
           <p className="create-account">Already  have an account?<Link to= "/patient-login"><span>Log in</span></Link></p>
       </div>
       <div className="image-placeholder">
         <img src={bigImage} alt="big-image"/>
       </div>
    </div>
   </div>
  )
}
