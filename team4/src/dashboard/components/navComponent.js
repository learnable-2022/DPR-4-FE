import React, { useState } from "react";

import "./navComponent.css";
import { GrNotification } from "react-icons/gr";
import { RiAccountCircleFill } from "react-icons/ri";
import emptyProfile from "../../assets/empty_profile.png";
import { Link } from "react-router-dom";

function NavComponent() {
  const [open, setOpen] = useState(false);

  const [isThereNotification, setisThereNotification] = useState(true);
  const handleButtonClick = () => {
    setOpen(!open);
  };
  const handleMarkRead = () => {
    setisThereNotification(false);
  };
  return (
    <div className="header">
      <div className="header_text_part">
        <h1>
          You are welcome <span className="doc_name">Dr.Chijindu</span>
        </h1>
        <p>I trust you’re ready to save lives today...</p>
      </div>
      <div className="header_icon_part">
        <GrNotification className="header_icon" onClick={handleButtonClick} />
        <Link to="/DocProfile" className="link">
          {
            <img src={emptyProfile} className="header_icon" alt="profile" />
            // <RiAccountCircleFill className="header_icon" />
          }
        </Link>
        {open &&
          (isThereNotification ? (
            <div className="notification_drop">
              <header>
                <p>Notification</p>
                <p style={{ color: "#3399FF" }} onClick={handleMarkRead}>
                  Mark as read
                </p>
              </header>
              <hr />
              <div className="not_card">
                <img
                  style={{ width: "70px", height: "70px", borderRadius: "50%" }}
                  src={emptyProfile}
                  alt="profile_img"
                />
                <div className="not_text_div">
                  <p>
                    Patient #2451 has granted you access to his medical record
                  </p>
                  <div>
                    <button className="view_profile_btn">Go to profile</button>
                    <p className="time">5min. ago</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="notification_drop">
              <header>
                <p>Notification</p>
              </header>
              <hr />
              <div className="not_card" style={{ display: "block" }}>
                <p style={{ textAlign: "center", fontWeight: "bold" }}>
                  There are no notificatons
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default NavComponent;
