import React from "react";
import profileImage from "../assets/Ellipse1.png";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

function Share() {
  return (
    <div className="share">
      <header>
        <div className="left_side_share_header">
          <Link to="/DocDashboard" className="link">
            <BiArrowBack className="back_arrow" />
          </Link>
          <p>Back</p>
        </div>
        <div className="right_side_share_header">
          <img className="prof_img" src={profileImage} alt="profileImage" />
          <h2 className="name"> Mrs. Doe Roseline</h2>
        </div>
      </header>
    </div>
  );
}

export default Share;
