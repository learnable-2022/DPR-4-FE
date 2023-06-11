import React from "react";
import "./Finish.css";
import { useServiceProviderValue } from "../../ServiceProvider";

function Finish() {
  const [
    {
      temperature,
      bloodCount,
      bloodPressure,
      glucoseLevel,
      heartRate,
      oxygen,
      respRate,
      medication,
      dosage,
      duration,
      complaints,
      comments,
      treatments,
      vaccineName,
      vaccineDate,
      vaccineStatus,
    },
    dispatch,
  ] = useServiceProviderValue();
  console.log(
    medication +
      " " +
      duration +
      " " +
      dosage +
      " " +
      temperature +
      " " +
      bloodCount +
      " " +
      vaccineStatus +
      " " +
      vaccineDate +
      " " +
      vaccineName +
      " " +
      bloodPressure +
      " " +
      glucoseLevel +
      " " +
      heartRate +
      " " +
      oxygen +
      " " +
      respRate +
      " " +
      complaints +
      " " +
      comments +
      " " +
      treatments +
      " "
  );
  return (
    <div>
      <div className="action_button">
        <button className="vitals_next">Save</button>
      </div>
    </div>
  );
}

export default Finish;
