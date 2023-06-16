import React from "react";
import "./SchedulePage.css";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

import NavComponent from "../components/navComponent";

import CalendarComponent from "../components/CalendarComponent";
function SchedulePage() {
  return (
    <div className="schedulepage">
      <Link to="/DocDashboard" className="link">
        <BiArrowBack className="back_arrow" />
      </Link>
      <NavComponent />
      <main>
        <CalendarComponent />
      </main>
    </div>
  );
}

export default SchedulePage;
