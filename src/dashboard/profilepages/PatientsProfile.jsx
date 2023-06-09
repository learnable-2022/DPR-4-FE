import React from "react";
import "./PatientsProfile.css";

import emptyProfile from "../../assets/ava3.png";
import ProfileComponent from "../components/profileComponent";
function PatientsProfile() {
  let patient_Image = localStorage.getItem("patient_image");

  return (
    <div className="patientsprofile">
      <div className="left_side">
        <ProfileComponent
          profileImage={patient_Image ? patient_Image : emptyProfile}
        />
        <div className="bottom_left">
          <h1 className="_header">General Information</h1>
          <div className="_bottom_profile_details">
            <div className="left_section">
              <h3>First name</h3>
              <div>
                <p>Kelechukwu</p>
              </div>
              <h3>Middle name</h3>
              <div>
                <p>Martins</p>
              </div>
              <h3>Date of birth</h3>
              <div>
                <p>13/10/1989</p>
              </div>
            </div>
            <div className="right_section">
              <h3>Last name</h3>
              <div>
                <p>Eze</p>
              </div>
              <h3>Gender</h3>
              <div>
                <p>Male</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_side">
        <div className="right_side_top">
          <h1 className="_header">Contact Information</h1>
          <div className="_bottom_profile_details">
            <div className="left_section">
              <h3>Address</h3>
              <div>
                <p>El-tabera Estate Nsukka</p>
              </div>
              <h3>City</h3>
              <div>
                <p>Imo</p>
              </div>
            </div>
            <div className="right_section">
              <h3>Country</h3>
              <div>
                <p>Nigeria</p>
              </div>
              <h3>State</h3>
              <div>
                <p>Enugu</p>
              </div>
            </div>
          </div>
          <div className="_down_part">
            <h3>Phone number</h3>
            <div>
              <p>0913245675</p>
            </div>
            <h3>Email address</h3>
            <div>
              <p>chukwue@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="bottom_right_side">
          <h1 className="_header">Billing Information</h1>
          <div className="top_section">
            <div className="left_div">
              <h3>First name</h3>
              <div>
                <p>Kelechukwu</p>
              </div>
            </div>
            <div className="right_div">
              <h3>Last name</h3>
              <div>
                <p>Ugwu</p>
              </div>
            </div>
          </div>
          <div className="card">
            <h3>Card number</h3>
            <div>
              <p>XXXXXXXXXXXXX235</p>
            </div>
          </div>
          <div className="down_section">
            <div className="left_div">
              <h3>Exp. Month</h3>
              <div>
                <p>08</p>
              </div>
            </div>
            <div className="right_div">
              <h3>Exp. Year</h3>
              <div>
                <p>2025</p>
              </div>
            </div>
          </div>
          <div className="wallet">
            <h3>Wallet Address</h3>
            <div>
              <p>XXXXXXXXXXXXX235</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientsProfile;
