import React from "react";

import './login.css'
import { Link } from "react-router-dom";

export default function Login(props) {
  
  return (
    <div>
      test login
    <Link to="/Dashboard"><button onClick={props.LoginUser}>Login</button></Link>
      <button onClick={props.patient}>
        patient
      </button>
      <button onClick={props.doctor}>
       doctor
      </button>
    </div>
  )
}
