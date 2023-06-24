import React from "react";
import "./SchedulePage.css";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

import NavComponent from "../components/navComponent";

import CalendarComponent from "../components/CalendarComponent";
function SchedulePage() {
  let doctor_FirstName = localStorage.getItem("doctor_firstname");
  let doctor_Name = localStorage.getItem("doctor_name");
  return (
    <div className="schedulepage">
      <Link to="/DocDashboard" className="link">
        <BiArrowBack className="back_arrow" />
      </Link>
      <NavComponent name={doctor_Name} firstName={doctor_FirstName} />
      <main>
        <CalendarComponent />
      </main>
    </div>
  );
}

export default SchedulePage;
