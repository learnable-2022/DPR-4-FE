import React from "react";
import drugpic1 from "../../assets/Frame 185 (4).png";
import { useNavigate } from "react-router-dom";

export default function Prescription() {
  const navigate =useNavigate();
  return (
    <div className="overview-container">
     <div className="pres-flex">
     <h2 className="single-h2">Active Medication</h2>
      <div className='select-folder'>
      <select name="link" id="link-id" onChange={(e)=> navigate(e.target.value)}>
          <option value="/Records/overview">overview</option>
            <option   value="/Records/visit">visit</option>
            <option   value="/Records/vaccine">vaccine</option>
            <option  value="/Records/prescription">prescription</option>
            <option  value="/Records/lab">lab</option>
          </select>
        </div>
     </div>
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
