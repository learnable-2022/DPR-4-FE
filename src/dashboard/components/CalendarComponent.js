import React, { useEffect } from "react";
import "./CalendarComponent.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  doc,
  addDoc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

import { useState } from "react";

import moment from "moment";
import { useServiceProviderValue } from "../../ServiceProvider";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function CalendarComponent() {
  const [{}, dispatch] = useServiceProviderValue();
  const [retrievedData, setRetrievedData] = useState([]);
  const [events, setEvents] = useState([]);
  let doctor_Name = localStorage.getItem("doctor_name");
  let doctor_Email = localStorage.getItem("doctor_email");

  let event3 = [
    retrievedData.map((item) => {
      return {
        start: moment(`${item.selectedDate}T${item.startTime}`).toDate(), //moment("2023-05-28T10:00:00").toDate(),
        end: moment(`${item.selectedDate}T${item.endTime}`).toDate(),
        title: item.title,
      };
    }),
  ];
  console.log(event3[0]);

  // console.log(events2);
  const [allEvents, setAllEvents] = useState(event3[0]);
  console.log(allEvents);
  const retrieveData = async () => {
    try {
      const userDocRef = doc(db, "Appointments", doctor_Email);
      const userDataCollectionRef = collection(
        userDocRef,
        `${doctor_Name} Appointments`
      );

      const snapshot = await getDocs(userDataCollectionRef);

      const userData = [];

      snapshot.forEach((doc) => {
        userData.push({ id: doc.id, ...doc.data() });
      });
      setRetrievedData(userData);

      console.log("Retrieved data:", userData);
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <div className="calendarcomponent">
      <h1>Schedule</h1>
      <div></div>
      <Calendar
        className="calendar"
        localizer={localizer}
        events={event3[0]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "3.125rem", marginTop: "1.5rem" }}
      />
    </div>
  );
}

export default CalendarComponent;
