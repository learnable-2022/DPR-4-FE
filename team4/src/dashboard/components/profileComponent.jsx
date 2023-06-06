import React from "react";
import "./profileComponent.css";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
function ProfileComponent({ profileImage }) {
  return (
    <div className="topleft">
      <Link to="/Dashboard" className="link">
        <BiArrowBack className="back_arrow" />
      </Link>

      <img className="prof_img" src={profileImage} alt="profileImage" />
      <div className="profile_details">
        <h2 className="name">Dr. chukwuemeka James Eze</h2>
        <p className="email">Chukwuemekaeeze@gmail.com</p>
        <Link to="/EditProfile" className="link">
          <button className="profile_btn">Edit profile</button>
        </Link>
      </div>
    </div>
  );
}

export default ProfileComponent;
