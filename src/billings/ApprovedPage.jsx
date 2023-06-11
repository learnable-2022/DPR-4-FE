import React from "react";
import checkCircle from "../assets/images/checkCircle.png";

function ApprovedPage() {
  return (
    <>
      <div className="Confirmation">
        <img src={checkCircle} alt="pics" />
        <p>Payment has been sent successfully</p>
        <div>
          <div className="dangerButtons">
            <button className="successfullyBtn">Go back to dashboard</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApprovedPage;
