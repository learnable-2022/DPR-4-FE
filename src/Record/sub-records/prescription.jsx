import React from "react";
import drugpic1 from "../../assets/Frame 185 (4).png";

export default function Prescription() {
  return (
    <div className="overview-container">
      <h2 className="single-h2">Active Medication</h2>
      <div className="pres-component">
        <div className="first-pres-component">
          <div>
            <img src={drugpic1} className="img" alt="pics" />
          </div>
          <div>
            <p>Ciprofloxacin</p> <p>1 Tab twice daily</p>
          </div>
        </div>
        <div>
          <p>One off</p>
        </div>
        <div>
          <p>No Refill Required</p>
        </div>
      </div>
    </div>
  );
}
