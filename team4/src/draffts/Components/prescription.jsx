import React, { useState } from "react";
import "./prescription.css";

function Prescription() {
  const [dosage, setDosage] = useState("");
  const [medication, setMedication] = useState("");
  const [duration, setDuration] = useState("");
  const handleDosage = (e) => {
    setDosage(e.target.value);
  };
  const handleMedication = (e) => {
    setMedication(e.target.value);
  };
  const handleDuration = (e) => {
    setDuration(e.target.value);
  };
  return (
    <div className="prescription_input_div">
      <input
        className="prescription_input"
        type="text"
        onChange={handleMedication}
        placeholder="Enter Medication"
      />
      <input
        className="prescription_input"
        type="text"
        onChange={handleDuration}
        placeholder="Enter Duration"
      />
      <input
        className="prescription_input"
        type="text"
        onChange={handleDosage}
        placeholder="Enter Dosage"
      />
    </div>
  );
}

export default Prescription;
