import React, { useState } from "react";

import { CiCircleMore } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import "./dashboard.css";
import Calendar from "react-calendar";
import NavComponent from "./components/navComponent";
import { Link } from "react-router-dom";

//rescue kenneth
export default function DoctorsDashboard() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const options = { month: "short", year: "numeric" };
  const options2 = { day: "numeric", weekday: "long" };
  const handleButtonClick = () => {
    setOpen(!open);
  };
  const handleButtonClick2 = () => {
    setOpen2(!open2);
  };

  return (
    <div className="doctorsdashboard">
      <NavComponent />

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
                <div class="dropdown">
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
            <Calendar onChange={setDate} value={date} />
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
    </div>
  );
}
// rescue kenneth
