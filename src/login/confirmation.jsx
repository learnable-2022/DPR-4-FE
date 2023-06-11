import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import medblog from "../assets/logo-02.png";
import bigImage from "../assets/signup-second.png";
import { useServiceProviderValue } from "../ServiceProvider";

const Confirmation = () => {
  const navigate = useNavigate();
  const [{}, dispatch] = useServiceProviderValue();
  const [value, setValue] = useState("");

  const toDoctor = () => {
    setValue("doctor");
    dispatch({ type: "SET_USER", user: "doctor" });
    console.log(value);
    if (value == "doctor") {
      setTimeout(() => {
        navigate("/signup", { replace: true, state: { value } });
        console.log(value);
      }, 1000);
    }
  };
  const toPatient = () => {
    setValue("patient");
    dispatch({ type: "SET_USER", user: "patient" });
    console.log(value);
    if (value == "patient") {
      setTimeout(() => {
        navigate("/signup", { replace: true, state: { value } });
        console.log(value);
      }, 1000);
    }
  };

  // const handleFunction=()=>{
  //     navigate("/signup", {replace:true, state:{value}})
  // }
  console.log(value);
  return (
    <>
      {/* <div>
      <select name="user" id="user-id" onChange={(e)=>setValue(e.target.value)}>
        <option value="doctor">doctor</option>
        <option value="patient">patient</option>
      </select>
      <button onClick={handleFunction}>To signup</button>
    </div> */}
      <div className="first-container confirmation">
        <div className="sign-up-container">
          <div className="signup-form length">
            <div>
              <img src={medblog} alt="medblog" />
            </div>
            <h2>Get Started</h2>
            <p>
              Creating an account is very easy, your privacy is our priority.
              <br />
              Please select a category
            </p>
            <div className="confirmation-buttons">
              <button className="con-button-1" type="button" onClick={toDoctor}>
                Doctor
              </button>
              <button
                className="con-button-2"
                type="button"
                onClick={toPatient}
              >
                Patient
              </button>
            </div>
          </div>
          <div className="image-placeholder">
            <img src={bigImage} alt="big" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
