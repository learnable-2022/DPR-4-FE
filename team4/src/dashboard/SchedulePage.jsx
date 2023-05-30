import React from "react";
import "./SchedulePage.css";

import NavComponent from "./navComponent";
import {
  Inject,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  ScheduleComponent,
} from "@syncfusion/ej2-react-schedule";
import CalendarComponent from "./CalendarComponent";
function SchedulePage() {
  return (
    <div className="schedulepage">
      <NavComponent />
      <main>
        <CalendarComponent />
        {/* <ScheduleComponent>
          <Inject services={[Day, Week, WorkWeek, Month]} />
        </ScheduleComponent> */}
      </main>
    </div>
  );
}

export default SchedulePage;
