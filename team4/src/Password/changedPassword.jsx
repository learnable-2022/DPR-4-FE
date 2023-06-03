import React from 'react';
import logo from "./images/logo.png";
import desk from "./images/desk.png";
import "./password.css";

const ChangedPassword = () => {
  return (
    <div>
        <div className="container">
                <div className="container-1">
                    <img src={logo} alt="medbloc-logo" id="logo" />
                    <h2 className="container-text-1">Password Reset successful</h2>
                    <p className="container-text-2">
                        Your password has been reset successful, return to sign into your account...
                    </p>
                    <input type="email" name="Email" id="email" placeholder="Email Address" required></input>
                    <input type="submit" id="changed-btn" value="Return to Sign in"></input>
                </div>

                <div className="container-2">
                <img src={desk} alt="deskimage" id="desk" />
                </div>
            </div>
    </div>
  )
}

export default ChangedPassword;