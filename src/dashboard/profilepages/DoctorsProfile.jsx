import React from "react";
import "./DoctorsProfile.css";
import { Link } from "react-router-dom";
import profileImage from "../../assets/Ellipse1.png";
import { BiArrowBack } from "react-icons/bi";
import ProfileComponent from "../components/profileComponent";

function DoctorsProfile() {
  return (
    <div className="doctorsprofile">
      <div className="leftside">
        <div className="topleft">
          <Link to="/DocDashboard" className="link">
            <BiArrowBack className="back_arrow" />
          </Link>

          <img className="prof_img" src={profileImage} alt="profileImage" />
          <div className="profile_details">
            <h2 className="name">Dr. chukwuemeka James Eze</h2>
            <p className="email">Chukwuemekaeeze@gmail.com</p>
            <Link to="/DocEditProfile" className="link">
              <button className="profile_btn">Edit profile</button>
            </Link>
          </div>
        </div>
        <div className="bottomleft">
          <h1 className="header">General Information</h1>
          <div className="bottom_profile_details">
            <div className="leftsection">
              <h3>First name</h3>
              <div>
                <p>Chukwuemeka</p>
              </div>
              <h3>Middle name</h3>
              <div>
                <p>James</p>
              </div>
              <h3>Date of birth</h3>
              <div>
                <p>13/10/1989</p>
              </div>
            </div>
            <div className="rightsection">
              <h3>Last name</h3>
              <div>
                <p>Eze</p>
              </div>
              <h3>Gender</h3>
              <div>
                <p>Male</p>
              </div>
              <h3>Doctor’s ID</h3>
              <div>
                <p>1122334455</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rightside">
        <h1 className="header">Contact Information</h1>
        <div className="bottom_profile_details">
          <div className="leftsection">
            <h3>Address</h3>
            <div>
              <p>Uwani road</p>
            </div>
            <h3>State of origin</h3>
            <div>
              <p>Imo</p>
            </div>
          </div>
          <div className="rightsection">
            <h3>Country</h3>
            <div>
              <p>Nigeria</p>
            </div>
            <h3>State of residence</h3>
            <div>
              <p>Enugu</p>
            </div>
          </div>
        </div>
        <div className="down_part">
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
    </div>
  );
}

export default DoctorsProfile;
