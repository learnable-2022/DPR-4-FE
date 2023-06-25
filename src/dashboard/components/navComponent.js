import React, { useCallback, useEffect, useRef, useState } from "react";

import "./navComponent.css";
import { GrNotification } from "react-icons/gr";
import { RiAccountCircleFill, RiArrowDropDownFill } from "react-icons/ri";
import emptyProfile from "../../assets/empty_profile.png";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import notification from "../../assets/Notification.svg";
import medLogo from "../../assets/newlogo2.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import { TfiWrite } from "react-icons/tfi";
import { FaSpinner } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import ourlogo from "../../assets/Group 5.svg";
import { BiArrowBack } from "react-icons/bi";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { useServiceProviderValue } from "../../ServiceProvider";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  query,
  orderBy,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";

function NavComponent({ name, image, firstName }) {
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [docFirstName, setDocFistName] = useState("");
  const [docLastName, setDocLastName] = useState("");
  const [docName, setDocName] = useState("");
  const [{}, dispatch] = useServiceProviderValue();
  const [patName, setName] = useState("");
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [deleteMsg, setDeleteMsg] = useState("");
  const [emptyMsg, setEmptyMsg] = useState("");
  const [isPromptOpen, setIsPromptOpen] = useState(false);
  const [isCreateAppointOpen, setIsCreateAppointOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [navOpen, setIsNavOpen] = useState(false);
  const [retrievedData, setRetrievedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isdeleting, setIsDeleting] = useState(false);
  const mobileNavRef = useRef();
  const [isThereNotification, setisThereNotification] = useState(true);
  const mobileMenuRef = useRef();
  const mobileDropdownRef = useRef();
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  let doctor_Image = localStorage.getItem("doctor_image");

  let doctor_Name = localStorage.getItem("doctor_name");
  let doctor_Email = localStorage.getItem("doctor_email");

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
  const closeOpenDropdown = useCallback(
    (e) => {
      if (
        mobileDropdownRef.current &&
        isDropOpen &&
        !mobileDropdownRef.current.contains(e.target)
      ) {
        setIsDropOpen(false);
      }
      if (
        mobileDropdownRef.current &&
        open &&
        !mobileDropdownRef.current.contains(e.target)
      ) {
        setIsDropOpen(false);
      }
    },
    [isDropOpen, open]
  );
  const closeOpenNav = useCallback(
    (e) => {
      if (
        mobileNavRef.current &&
        navOpen === true &&
        !mobileNavRef.current.contains(e.target)
      ) {
        setIsNavOpen(false);
      }
    },
    [navOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus);
    document.addEventListener("mousedown", closeOpenNav);
    document.addEventListener("mousedown", closeOpenDropdown);
    let doctor_Last_Name = localStorage.getItem("doctor_lastname");
    let doctor_FirstName = localStorage.getItem("doctor_firstname");
    let doctor_Name = localStorage.getItem("doctor_name");
    setDocFistName(doctor_FirstName);
    setDocLastName(doctor_Last_Name);
    setDocName(doctor_Name);
    //retrieveData();
  }, [
    closeOpenMenus,
    closeOpenDropdown,
    closeOpenNav,
    startTime,
    endTime,
    selectedDate,
  ]);

  const toggleNav = () => {
    setIsNavOpen(!navOpen);
  };

  // function for handling open and closing of notificaton box
  const handleButtonClick = () => {
    setOpen(!open);
  };
  //function for clearing notifications on notification pane
  const handleMarkRead = () => {
    setisThereNotification(false);
  };
  const handleDropButtonClick = () => {
    setIsDropOpen(!isDropOpen);
  };
  // function for handling opening and closing of appointment box
  const handleCreateAppoint = () => {
    setIsCreateAppointOpen(!isCreateAppointOpen);
    setIsDropOpen(false);
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
    console.log(selectedDate);
  };
  const handleSave = async () => {
    setIsLoading(true);
    try {
      const userDocRef = doc(db, "Appointments", doctor_Email);
      const userDataCollectionRef = collection(userDocRef, `My Appointments`);
      if (title && selectedDate && startTime && endTime) {
        const docRef = await addDoc(userDataCollectionRef, {
          title,
          selectedDate,
          startTime,
          endTime,
        });
        console.log("Appointment successfully created");
        setIsLoading(false);
        setSuccessMsg("Appointment successfully created");
        setTimeout(() => {
          setSuccessMsg("");
        }, 2000);
      } else {
        setIsLoading(false);
        setEmptyMsg("Please all fields are required");
        setTimeout(() => {
          setEmptyMsg("");
        }, 2000);
      }
    } catch (error) {
      console.error("Error saving notification:", error);
      setIsLoading(false);
    }
  };
  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const userDocRef = doc(db, "Appointments", doctor_Email);
      const userDataCollectionRef = collection(
        userDocRef,
        `${doctor_Name} Appointments`
      );

      // Delete all documents within the "userData" subcollection
      const userDataSnapshot = await getDocs(userDataCollectionRef);
      userDataSnapshot.forEach((doc) => {
        deleteDoc(doc.ref);
      });

      // Delete the email document
      await deleteDoc(userDocRef);

      setIsDeleting(false);
      setDeleteMsg("Appointments cleared");
      setTimeout(() => {
        setDeleteMsg("");
      }, 2000);
      console.log("Email document deleted successfully.");
    } catch (error) {
      setIsDeleting(false);
      console.error("Error deleting email document:", error);
    }
  };
  const handlePatientName = (e) => {
    setName(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const reFormatDate = (e) => {
    let date = e.target.value.toString().split("-");
    // console.log(date[0] + " " + date[1] + " " + date[2]);
  };
  const handleStartTime = (e) => {
    setStartTime(e.target.value);
    console.log(startTime);
  };
  const handleEndTime = (e) => {
    setEndTime(e.target.value);
  };
  return (
    <div className="header">
      <GiHamburgerMenu className="hamburger_icon" onClick={toggleNav} />
      <img className="doc_med_logo" src={medLogo} alt="med_logo" />
      <div className="header_text_part">
        <h1>
          You are welcome{" "}
          <span className="doc_name">
            Dr. {docName ? docName.split(" ")[0] : docFirstName}
          </span>
        </h1>
        <p>I trust you’re ready to save lives today</p>
      </div>

      <div className="header_icon_part">
        <AiOutlinePlus
          className="create_appoint"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={handleCreateAppoint}
        />

        <Link to="/DocProfile" className="link">
          {
            <img
              src={image ? image : doctor_Image}
              className="header_icon"
              alt="profile"
            />
            // <RiAccountCircleFill className="header_icon" />
          }
        </Link>
        <RiArrowDropDownFill
          onClick={handleDropButtonClick}
          className="_drop_down_btn"
          style={{ fontSize: "23px" }}
        />
        {isDropOpen && (
          <div className="_drop_content" ref={mobileDropdownRef}>
            <Link to="/DocProfile" className="_link">
              <p className="_drop_content_item">View Profile</p>
            </Link>

            <p className="_drop_content_item" onClick={handleCreateAppoint}>
              Create Appointment
            </p>
            <Link to="/DocSchedule" className="_link">
              <p className="_drop_content_item">View Schedule</p>
            </Link>
          </div>
        )}
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
                style={{}}
                className="d_input"
                type="text"
                value={title}
                onChange={handleTitle}
                placeholder="Enter title"
              />

              <p style={{ fontWeight: "400", fontSize: "13px" }}>
                Select Appointment Date
              </p>
              <input
                className="d_input"
                type="date"
                onSelect={handleDateSelect}
                placeholder="select date"
              />
              <p style={{ fontWeight: "400", fontSize: "13px" }}>Start Time</p>
              <input
                className="d_input"
                type="time"
                onSelect={handleStartTime}
                placeholder="select time"
              />
              <p style={{ fontWeight: "400", fontSize: "13px" }}>End Time</p>
              <input
                className="d_input"
                type="time"
                onSelect={handleEndTime}
                placeholder="select time"
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
                gap: "1rem",
                alignItems: "center",
                marginTop: ".4rem",
              }}
            >
              <button
                className="appointment_btn"
                disabled={isLoading}
                onClick={handleSave}
              >
                {isLoading ? (
                  <FaSpinner className="_spin" />
                ) : (
                  "Create Appointment"
                )}
              </button>
              <button
                className="appointment_btn"
                disabled={isLoading}
                onClick={handleDelete}
              >
                {isdeleting ? (
                  <FaSpinner className="_spin" />
                ) : (
                  "Clear all Appointments"
                )}
              </button>
            </div>
            <p
              style={{ textAlign: "center", marginTop: "4px", color: "green" }}
            >
              {successMsg || deleteMsg}
            </p>
            <p style={{ textAlign: "center", marginTop: "4px", color: "red" }}>
              {emptyMsg}
            </p>
          </div>
        )}
      </div>
      <nav
        className={navOpen ? "doctors_dashboard_nav" : "closeNav"}
        ref={mobileNavRef}
      >
        <div className="_sideBar_">
          <AiOutlineClose className="_close_btn_" onClick={toggleNav} />
          <div className="_center-div_">
            <img
              src={ourlogo}
              style={{ width: "70px", height: "70px" }}
              alt="pics"
            />
          </div>
          <div className="_mid-section_">
            <Link to="/DocDashboard" className="link">
              <RxDashboard style={{ color: "white" }} />
              <p>Dashboard</p>
            </Link>

            <Link to="/DocBillings" className="link">
              <FontAwesomeIcon icon={faCoins} style={{ color: "white" }} />
              <p>Billings</p>
            </Link>
            <Link to="/DocDraft" className="link">
              <TfiWrite style={{ color: "white" }} />
              <p>Draft</p>
            </Link>
          </div>
          <div className="_lower-section_">
            <Link to="/Docsettings" className="link">
              <AiOutlineSetting style={{ color: "white" }} />
              <p>settings</p>
            </Link>
            <div
              onClick={() => {
                localStorage.removeItem("doctorToken");
                localStorage.removeItem("doctorEmail");
              }}
            >
              <Link to="/" className="link">
                <FiLogOut style={{ color: "white" }} />
                <p>logout</p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavComponent;
