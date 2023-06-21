import React from "react";
import Calender from "../../src/assets/images/Calendar.png";
import {IoIosArrowDown} from "react-icons/io";

import "./billing.css";

function PatientPaymentHistory() {
  return (
    <>
      <div className="Right">
        {/* -------------------------------- */}
        <div className="ResponsivenessBillingNavHistory">
          <h1>Billing</h1>
            <div className="Bill">
              <h6>Payment History</h6>
              <IoIosArrowDown className="ArrowHistory"/>
            </div>
        </div>
        {/* --------------------------------- */}
        <div className="billingNavHistory">
          <h1>Billing</h1>
            <div className="Bill">
              <h6>Payment History</h6>
              <IoIosArrowDown className="ArrowHistory"/>
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
                <li className="Successful">Successful</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="underline"></hr>

              <ul className="ulContent">
                <li>Dr. Ada</li>
                <li>8:00am </li>
                <li>Dental care</li>
                <li className="Successful">Successful</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="underline"></hr>

              <ul className="ulContent">
                <li>Dr. Tim</li>
                <li>8:00am </li>
                <li>MRI</li>
                <li className="Declined">Declined</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="underline"></hr>

              <ul className="ulContent">
                <li>Dr. Kem</li>
                <li>8:00am </li>
                <li>CT Scan</li>
                <li className="Successful">Successful</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="underline"></hr>

              <ul className="ulContent">
                <li>Dr. Kem</li>
                <li>8:00am </li>
                <li>CT Scan</li>
                <li className="Successful">Successful</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="underline"></hr>

              <ul className="ulContent">
                <li>Dr. Pat</li>
                <li>8:00am </li>
                <li>ECG, Blood Test</li>
                <li className="Declined">Declined</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="underline"></hr>

              <ul className="ulContent">
                <li>Dr. Alice</li>
                <li>8:00am </li>
                <li>ECG, Blood Test</li>
                <li className="Successful">Successful</li>
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
                  <li className="Successful">Successful</li>
                  <li>USD 22,000 </li>
                </ul>
                <hr className="underline"></hr>

                <ul className="ulContent">
                  <li>Dr. Chris</li>
                  <li>8:00am </li>
                  <li>Dental care</li>
                  <li className="Successful">Successful</li>
                  <li>USD 22,000 </li>
                </ul>
                <hr className="underline"></hr>

                <ul className="ulContent">
                  <li>Dr. Tim</li>
                  <li>8:00am </li>
                  <li>MRI</li>
                  <li className="Declined">Declined</li>
                  <li>USD 22,000 </li>
                </ul>
                <hr className="underline"></hr>

                <ul className="ulContent">
                  <li>Dr. Saint</li>
                  <li>8:00am </li>
                  <li>CT Scan</li>
                  <li className="Successful">Successful</li>
                  <li>USD 22,000 </li>
                </ul>
                <hr className="underline"></hr>

                <ul className="ulContent">
                  <li>Dr. Alice</li>
                  <li>8:00am </li>
                  <li>ECG, Blood Test</li>
                  <li className="Successful">Successful</li>
                  <li>USD 22,000 </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientPaymentHistory;
