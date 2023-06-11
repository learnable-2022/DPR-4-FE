import React, { useCallback, useEffect, useRef, useState } from "react";

import "./navComponent.css";
import { GrNotification } from "react-icons/gr";
import { RiAccountCircleFill } from "react-icons/ri";
import emptyProfile from "../../assets/empty_profile.png";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

function NavComponent() {
  const [open, setOpen] = useState(false);
  const [isPromptOpen, setIsPromptOpen] = useState(false);
  const [isCreateAppointOpen, setIsCreateAppointOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const [isThereNotification, setisThereNotification] = useState(true);
  const mobileMenuRef = useRef();

  const closeOpenMenus = useCallback(
    (e) => {
      if (
        mobileMenuRef.current &&
        isCreateAppointOpen &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        setIsCreateAppointOpen(false);
      }
      if (
        mobileMenuRef.current &&
        open &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    },
    [isCreateAppointOpen, open]
  );
  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus);
  }, [closeOpenMenus]);

  // function for handling open and closing of notificaton box
  const handleButtonClick = () => {
    setOpen(!open);
  };
  //function for clearing notifications on notification pane
  const handleMarkRead = () => {
    setisThereNotification(false);
  };
  // function for handling opening and closing of appointment box
  const handleCreateAppoint = () => {
    setIsCreateAppointOpen(!isCreateAppointOpen);
  };

  //function for closing the appointment box from inside the box
  const handleCloseDiv = () => {
    setIsCreateAppointOpen(false);
  };

  // For mouse over effect on the create appointment icon
  const handleMouseOver = () => {
    setIsPromptOpen(true);
  };

  // For mouse out effect on the create appointment icon
  const handleMouseOut = () => {
    setIsPromptOpen(false);
  };
  // function to handle date selection
  const handleDateSelect = (e) => {
    reFormatDate(e);
    setSelectedDate(e.target.value);
  };
  const reFormatDate = (e) => {
    let date = e.target.value.toString().split("-");
    // console.log(date[0] + " " + date[1] + " " + date[2]);
  };
  return (
    <div className="header">
      <div className="header_text_part">
        <h1>
          You are welcome <span className="doc_name">{""}</span>
        </h1>
        <p>I trust you’re ready to save lives today...</p>
      </div>
      <div className="header_icon_part">
        <AiOutlinePlus
          className="create_appoint"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={handleCreateAppoint}
        />
        <GrNotification className="header_icon" onClick={handleButtonClick} />
        <Link to="/DocProfile" className="link">
          {
            <img src={emptyProfile} className="header_icon" alt="profile" />
            // <RiAccountCircleFill className="header_icon" />
          }
        </Link>
        {open &&
          (isThereNotification ? (
            <div className="notification_drop" ref={mobileMenuRef}>
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
        {isPromptOpen && (
          <div
            className="show_on_hover"
            style={{ textAlign: "center", position: "absolute" }}
          >
            <p>Create Appointment</p>
          </div>
        )}
        {isCreateAppointOpen && (
          <div className="appointment_div" ref={mobileMenuRef}>
            <div className="appointment_header">
              <div className="left_header">
                <div className="close_div" onClick={handleCloseDiv}>
                  <AiOutlineClose />
                </div>
              </div>
              <div className="middle_header">
                <p>Add schedule</p>
              </div>
            </div>
            <div className="appointment_main">
              <p style={{ fontWeight: "400", fontSize: "13px" }}>Title</p>
              <input
                style={{
                  width: "100%",
                  fontSize: "14px",
                  padding: "4px",
                  borderRadius: "5px",
                  border: "solid black 0.5px",
                }}
                className="d_input"
                type="text"
                placeholder="Enter title"
              />
              <p style={{ fontWeight: "400", fontSize: "13px" }}>Patient ID</p>
              <input
                style={{
                  width: "100%",
                  fontSize: "14px",
                  padding: "4px",
                  borderRadius: "5px",
                  border: "solid black 0.5px",
                }}
                className="d_input"
                type="number"
                placeholder="Enter Patient Id"
              />
              <p style={{ fontWeight: "400", fontSize: "13px" }}>
                Select Appointment Date
              </p>
              <input
                style={{
                  width: "100%",
                  fontSize: "14px",
                  padding: "4px",
                  borderRadius: "5px",
                  border: "solid black 0.5px",
                }}
                className="d_input"
                type="date"
                onSelect={handleDateSelect}
                placeholder="select date"
              />
            </div>
            <p
              style={{
                textAlign: "center",
                marginTop: ".5rem",
                fontWeight: "400",
                fontSize: "13px",
              }}
            >
              Selected Date
            </p>
            <p style={{ textAlign: "center" }}>{selectedDate}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: ".4rem",
              }}
            >
              <button className="appointment_btn">Create Appointment</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavComponent;
