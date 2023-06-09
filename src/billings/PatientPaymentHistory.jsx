import React from "react";
import ArrowRight2 from "../../src/assets/images/ArrowRight2.png";
import Calender from "../../src/assets/images/Calendar.png";
import "./billing.css";

function PatientPaymentHistory() {
  return (
    <>
      <div className="Right">
        <div className="billingNavHistory">
          <h1>Billing</h1>
          <div className="Consultation">
            <div className="Bill">
              <h6>Consultation Bill </h6>
              <img src={ArrowRight2} className="ArrowHistory" alt="pics" />
            </div>

            <div className="Bill">
              <h6>Payment History</h6>
              <img src={ArrowRight2} className="ArrowHistory" alt="pics" />
            </div>
          </div>
        </div>

        <div className="coincoin">
          <div className="Details">
            <div className="Name">
              <div className="DateCal">
                <h4>22nd May 2023</h4>
                <img src={Calender} alt="pics" />
              </div>

              <ul className="ulHead">
                <li>Name</li>
                <li>Time </li>
                <li>Service</li>
                <li>Status</li>
                <li>Amount </li>
              </ul>
            </div>

            <div className="DetailEntities">
              <ul className="ulContent">
                <li>Dr. Ada</li>
                <li>8:00am </li>
                <li>ECG, Blood Test</li>
                <li className="">Successful</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="underline"></hr>

              <ul className="ulContent">
                <li>Dr. Chris</li>
                <li>8:00am </li>
                <li>Dental care</li>
                <li className="shitty">Successful</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="underline"></hr>

              <ul className="ulContent">
                <li>Dr. Tim</li>
                <li>8:00am </li>
                <li>MRI</li>
                <li className="Declined">Successful</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="underline"></hr>

              <ul className="ulContent">
                <li>Dr. Kemi</li>
                <li>8:00am </li>
                <li>CT Scan</li>
                <li className="Declined">Successful</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="underline"></hr>

              <ul className="ulContent">
                <li>Dr. Kemi</li>
                <li>8:00am </li>
                <li>CT Scan</li>
                <li className="Declined">Successful</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="underline"></hr>

              <ul className="ulContent">
                <li>Dr. Saint</li>
                <li>8:00am </li>
                <li>ECG, Blood Test</li>
                <li className="Declined">Successful</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="underline"></hr>

              <ul className="ulContent">
                <li>Dr. Alice</li>
                <li>8:00am </li>
                <li>ECG, Blood Test</li>
                <li className="Declined">Successful</li>
                <li>USD 22,000 </li>
              </ul>
              <hr></hr>
            </div>
          </div>
          {/* /////////////////////////down////////////////////////////// */}
          <div className="down">
            <div className="Details">
              <div className="DateCalDown">
                <h4>22nd May 2023</h4>
                <img src={Calender} alt="pics" />
              </div>

              <div className="DetailEntities">
                <ul className="ulContent">
                  <li>Dr. Ada</li>
                  <li>8:00am </li>
                  <li>ECG, Blood Test</li>
                  <li className="">Successful</li>
                  <li>USD 22,000 </li>
                </ul>
                <hr className="underline"></hr>

                <ul className="ulContent">
                  <li>Dr. Chris</li>
                  <li>8:00am </li>
                  <li>Dental care</li>
                  <li className="Declined">Successful</li>
                  <li>USD 22,000 </li>
                </ul>
                <hr className="underline"></hr>

                <ul className="ulContent">
                  <li>Dr. Tim</li>
                  <li>8:00am </li>
                  <li>MRI</li>
                  <li className="Declined">Successful</li>
                  <li>USD 22,000 </li>
                </ul>
                <hr className="underline"></hr>

                <ul className="ulContent">
                  <li>Dr. Saint</li>
                  <li>8:00am </li>
                  <li>CT Scan</li>
                  <li className="Declined">Successful</li>
                  <li>USD 22,000 </li>
                </ul>
                <hr className="underline"></hr>

                <ul className="ulContent">
                  <li>Dr. Alice</li>
                  <li>8:00am </li>
                  <li>ECG, Blood Test</li>
                  <li className="Declined">Successful</li>
                  <li>USD 22,000 </li>
                </ul>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientPaymentHistory;
