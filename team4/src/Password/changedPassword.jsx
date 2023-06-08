import React from 'react';
import logo from "./images/logo.png";
import desk from "./images/desk.png";
import whatsapp from "./images/whatsapp-logo.png";
import "./password.css";

const ChangedPassword = () => {
  return (
    <div>
        <div className="container-favour confirmation">
                <div className="container-6-favour">
                    <img src={logo} alt="medbloc-logo" className="logo" />
                    <h2 className="container-text-1">Password Reset successful</h2>
                    <p className="container-text-2">
                        Your password has been reset successful, return to sign into your account...
                    </p>
                    <img src={whatsapp} alt="success-logo" className="success-logo" />
                    <input type="submit" id="changed-btn" value="Return to Sign in"></input>
                </div>

                <div className="container-2-favour">
                <img src={desk} alt="deskimage" id="changed-desk" />
                </div>
            </div>
    </div>
  )
}

export default ChangedPassword;