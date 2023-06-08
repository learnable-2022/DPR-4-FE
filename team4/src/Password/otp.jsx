import React from 'react'
import logo from "./images/logo.png";
import desk from "./images/desk.png";
import "./password.css";
// import PinField from "react-pin-field"

const Otp = () => {
  return (
    <div>
            <div className="container-favour confirmation">
                <div className="container-3-favour">
                    <img src={logo} alt="medbloc-logo" className="logo" />
                    <h2 className="container-text">Verification Code</h2>
                    <p className="ver-code">
                        Verification code sent to chimuanyaruth20@email.com
                    </p>

                    <input type="email" name="Email" id="email" placeholder="Email Address" required></input>
                    <p className="code">05:54 Resend confirmation code</p>
                    <input type="submit" id="otp-btn" value="Continue"></input>
                </div>

                <div className="container-2-favour">
                <img src={desk} alt="deskimage" id="desk" />
                </div>
            </div>
        </div>
  )
}

export default Otp