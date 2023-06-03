import React from 'react'
import logo from "./images/logo.png";
import desk from "./images/desk.png";
import "./password.css";

const NewPassword = () => {
  return (
    <div>
        <div className="container">
                <div className="container-4">
                    <img src={logo} alt="medbloc-logo" id="logo" />
                    <h2 className="new-text1">New Password</h2>
                    <p className="new-text2">
                        Please enter your new password
                    </p>
                    <input type="email" name="Email" id="email" placeholder="Email Address" required></input>
                    <input type="submit" id="new-btn" value="Continue"></input>
                </div>

                <div className="container-2">
                <img src={desk} alt="deskimage" id="desk" />
                </div>
            </div>
    </div>
  )
}

export default NewPassword