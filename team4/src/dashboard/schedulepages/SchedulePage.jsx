import React from "react";
import "./SchedulePage.css";

import NavComponent from "../components/navComponent";

import CalendarComponent from "../components/CalendarComponent";
function SchedulePage() {
  return (
    <div className="schedulepage">
      <NavComponent />
      <main>
        <CalendarComponent />
      </main>
    </div>
  );
}

export default SchedulePage;
