import React from "react";
import { useNavigate } from "react-router-dom";
import checkCircle from "../assets/images/checkCircle.png";

function DoctorInvoiceSent() {
  const navigate = useNavigate();
  function handleClick(e) {
    navigate("/DoctorsBilling");
  }

  return (
    <>
      <div className="Confirmation">
        <img src={checkCircle} alt="pics" />
        <p>Invoice has been sent successfully</p>
        <div>
          <div className="dangerButtons">
            <button onClick={handleClick} className="successfullyBtn">
              Go back to dashboard
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorInvoiceSent;
