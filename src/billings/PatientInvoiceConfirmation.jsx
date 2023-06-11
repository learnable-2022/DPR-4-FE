import React from "react";
import DangerCircle from "../assets/images/DangerCircle.png";

function PatientInvoiceConfirmation() {
  return (
    <>
      <div className="Confirmation">
        <img src={DangerCircle} alt="pics" />
        <p>
          You will be required to pay with your ATM Card or <br />. Bank Account
          information. Payment is processed by
          <br />
          Paystack’s secure payment system. Be rest assured
          <br /> that your details are secured.
        </p>
        <div>
          <div className="dangerButtons">
            <button className="danger1">I understand, proceed</button>
            <button className="danger2">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientInvoiceConfirmation;
