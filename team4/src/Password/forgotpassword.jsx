import React from 'react';
import logo from "./images/logo.png";
import desk from "./images/desk.png";
import "./password.css";


const Forgotpassword = () => {
    return (
        <div>
            <div className="container-favour confirmation">
                <div className="container-1-favour">
                    <img src={logo} alt="medbloc-logo" className="logo" />
                    <h2 className="container1-boldtext">Forgot Password</h2>
                    <p className="container1-text">
                        Please enter the email address associated with your account to receive confirmation code to reset your password
                    </p>
                    <input type="email" name="Email" id="forgotpassword-email" placeholder="Email Address" required></input>
                    <input type="submit" id="btn" value="Continue"></input>
                </div>

                <div className="container-2-favour">
                    <img src={desk} alt="deskimage" id="desk" />
                </div>
            </div>
        </div>
    )
}
export default Forgotpassword;