import React, { useCallback, useEffect, useRef, useState } from "react";

import { CiCircleMore } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import "./dashboard.css";
import Calendar from "react-calendar";
import NavComponent from "./components/navComponent";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

//rescue kenneth
export default function DoctorsDashboard() {
  // const {auth} = useContext(StateContext);
  // const navigator = useNavigate();

  // console.log(auth.token);

  // if (auth.doctorToken) {
  //   return  navigator("./docdashboard");

  // }else if(!auth.doctorToken){

  //   return navigator("./landing");
  // }
  let token = localStorage.getItem("doctorToken");
  let doctorID = localStorage.getItem("doctor_id");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState(false);
  const options = { month: "short", year: "numeric" };
  const options2 = { day: "numeric", weekday: "long" };
  const mobileMenuRef = useRef();
  const closeOpenMenus = useCallback(
    (e) => {
      if (
        mobileMenuRef.current &&
        open &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    },
    [open]
  );
  useEffect(() => {
    const getDoctorsDetails = async () => {
      const response = await axios.get(
        `https://medbloc-api.onrender.com/api/v1/doctor/`,
        {
          headers: {
            "x-auth-token": token,
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      console.log(response);
      // const res = response?.data.find((item) => item._ === PatientEmail);
      // console.log(res);
    };
    getDoctorsDetails();
    console.log("uder");
    document.addEventListener("mousedown", closeOpenMenus);
  }, [closeOpenMenus]);

  const handleButtonClick = () => {
    setOpen(!open);
  };
  const handleButtonClick2 = () => {
    setOpen2(!open2);
  };

  const handleAddCargo = (e) => {};

  return (
    <div className="doctorsdashboard">
      <NavComponent />

      {connectedWallet ? (
        <main>
          <div className="left-side">
            <div className="header_div">
              <h2 className="title">Patient List</h2>
              <div className="search_div">
                <input type="text" placeholder="Search" />
                <CiSearch className="search_icon" />
              </div>
            </div>
            <div className="title_div">
              <p>File no.</p>
              <p>Patient Name</p>
              <p></p>
            </div>
            <div className="patients_div">
              <div className="patients_info">
                <p>#2451</p>
                <p>Omengbeoji Ifeanyichukwu</p>
                <CiCircleMore
                  className="circle_more"
                  onClick={handleButtonClick}
                />
                {open && (
                  <div class="dropdown" ref={mobileMenuRef}>
                    <ul>
                      <li>Patients Profile</li>
                      <li>Patients medical record</li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="patients_info">
                <p>#2451</p>
                <p>Omengbeoji Ifeanyichukwu</p>
                <CiCircleMore className="circle_more" />
                {/* <div class="dropdown">
                <ul>
                  <li>Patients Profile</li>
                  <li>Request Access</li>
                </ul>
              </div> */}
              </div>
              <div className="patients_info">
                <p>#2451</p>
                <p>Omengbeoji Ifeanyichukwu</p>
                <CiCircleMore className="circle_more" />
                {/* <div class="dropdown">
                <ul>
                  <li>Patients Profile</li>
                  <li>Request Access</li>
                </ul>
              </div> */}
              </div>

              <div className="patients_info">
                <p>#2451</p>
                <p>Omengbeoji Ifeanyichukwu</p>
                <CiCircleMore className="circle_more" />
                {/* <div class="dropdown">
                <ul>
                  <li>Patients Profile</li>
                  <li>Request Access</li>
                </ul>
              </div> */}
              </div>
              <div className="patients_info">
                <p>#2451</p>
                <p>Omengbeoji Ifeanyichukwu</p>
                <CiCircleMore className="circle_more" />
                {/* <div class="dropdown">
                <ul>
                  <li>Patients Profile</li>
                  <li>Request Access</li>
                </ul>
              </div> */}
              </div>
              <div className="patients_info">
                <p>#2451</p>
                <p>Omengbeoji Ifeanyichukwu</p>
                <CiCircleMore className="circle_more" />
                {/* <div class="dropdown">
                <ul>
                  <li>Patients Profile</li>
                  <li>Request Access</li>
                </ul>
              </div> */}
              </div>
              <div className="patients_info">
                <p>#2451</p>
                <p>Omengbeoji Ifeanyichukwu</p>
                <CiCircleMore className="circle_more" />
                {/* <div class="dropdown">
                <ul>
                  <li>Patients Profile</li>
                  <li>Request Access</li>
                </ul>
              </div> */}
              </div>
              <div className="patients_info">
                <p>#2451</p>
                <p>Omengbeoji Ifeanyichukwu</p>
                <CiCircleMore className="circle_more" />
                {/* <div class="dropdown">
                <ul>
                  <li>Patients Profile</li>
                  <li>Request Access</li>
                </ul>
              </div> */}
              </div>
              <div className="patients_info">
                <p>#2451</p>
                <p>Omengbeoji Ifeanyichukwu</p>
                <CiCircleMore className="circle_more" />
                {/* <div class="dropdown">
                <ul>
                  <li>Patients Profile</li>
                  <li>Request Access</li>
                </ul>
              </div> */}
              </div>

              <div className="patients_info">
                <p>#2451</p>
                <p>Omengbeoji Ifeanyichukwu</p>
                <CiCircleMore
                  className="circle_more"
                  onClick={handleButtonClick2}
                />
                {open2 && (
                  <div class="dropdown">
                    <ul>
                      <li>Patients Profile</li>
                      <li>Patients medical record</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="calendar-container">
              <Calendar
                onClickDay={handleAddCargo}
                onChange={setDate}
                value={date}
              />
            </div>
            <div className="schedule_div">
              <div className="schedule_wrapper">
                <div className="top">
                  <Link to="/DocSchedule" className="link">
                    <button>Schedule</button>
                  </Link>

                  <p>{date.toLocaleDateString("en-us", options)}</p>
                </div>
                <div className="middle">
                  <p>{date.toLocaleDateString("en-us", options2)}</p>
                  <div className="nav_icons">
                    <AiOutlineLeft />
                    <AiOutlineRight />
                  </div>
                </div>
                <div className="appointment_brief">
                  <p>Appointment with #2589 </p>
                  <p>12pm - 2pm</p>
                </div>
                {/* <div className="appointment_brief">
                <p>Appointment with #2589 </p>
                <p>12pm - 2pm</p>
              </div>
              <div className="appointment_brief">
                <p>Appointment with #2589 </p>
                <p>12pm - 2pm</p>
              </div>
              <div className="appointment_brief">
                <p>Appointment with #2589 </p>
                <p>12pm - 2pm</p>
              </div>
              <div className="appointment_brief">
                <p>Appointment with #2589 </p>
                <p>12pm - 2pm</p>
              </div> */}
              </div>
            </div>
          </div>
        </main>
      ) : (
        <div className="doc_connect_div">
          <p>You are not yet connected, Please click to the button connect</p>
          <button className="doc_connect_btn">Connect to Metamask</button>
        </div>
      )}
    </div>
  );
}
// rescue kenneth
