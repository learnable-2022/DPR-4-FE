import React from "react";
import "./billing.css";
import ArrowRight2 from "../../src/assets/images/ArrowRight2.png";
import Calendar from "../../src/assets/images/Calendar.png";
import { useNavigate } from "react-router-dom";

function DoctorPaymentHistory() {
  const navigate = useNavigate();

  function handleClick(e) {
    navigate("/DoctorsBilling");
  }

  function handlePress(e) {
    navigate("/ConsultationBilling");
  }

  return (
    <>
      <div className="Right">
        <div className="billingNavHistory">
          <h1>Billing</h1>
          <div className="Consultation">
            <div className="Bill" onClick={handlePress}>
              <h6 onClick={handlePress}>Consultation Bill </h6>
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
                <img src={Calendar} alt="pics" />
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
                <li>Amaka</li>
                <li>8:00am </li>
                <li>ECG, Blood Test</li>
                <li className="">Successful</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="underline"></hr>

              <ul className="ulContent">
                <li>Chris</li>
                <li>8:00am </li>
                <li>Dental care</li>
                <li className="Declined">Paid</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="underline"></hr>

              <ul className="ulContent">
                <li> Tim</li>
                <li>8:00am </li>
                <li>MRI</li>
                <li className="Declined">Unpaid</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="underline"></hr>

              <ul className="ulContent">
                <li> Kemi</li>
                <li>8:00am </li>
                <li>CT Scan</li>
                <li className="Declined">Paid</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="underline"></hr>

              <ul className="ulContent">
                <li> Saint</li>
                <li>8:00am </li>
                <li>CT Scan</li>
                <li className="Declined">Unpaid</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="underline"></hr>

              <ul className="ulContent">
                <li>Obed</li>
                <li>8:00am </li>
                <li>ECG, Blood Test</li>
                <li className="Declined">Paid</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="underline"></hr>
            </div>
          </div>
          {/* /////////////////////////down////////////////////////////// */}
          <div className="down">
            <div className="Details">
              <div className="DateCalDown">
                <h4>22nd May 2023</h4>
                <img src={Calendar} alt="pics" />
              </div>

              <div className="DetailEntities">
                <ul className="ulContent">
                  <li>Ada</li>
                  <li>8:00am </li>
                  <li>ECG, Blood Test</li>
                  <li className="">Paid</li>
                  <li>USD 22,000 </li>
                </ul>
                <hr className="underline"></hr>

                <ul className="ulContent">
                  <li>Chris</li>
                  <li>8:00am </li>
                  <li>Dental care</li>
                  <li className="Declined">Paid</li>
                  <li>USD 22,000 </li>
                </ul>
                <hr className="underline"></hr>

                <ul className="ulContent">
                  <li>Tim</li>
                  <li>8:00am </li>
                  <li>MRI</li>
                  <li className="Declined">Unpaid</li>
                  <li>USD 22,000 </li>
                </ul>
                <hr className="underline"></hr>

                <ul className="ulContent">
                  <li>Saint</li>
                  <li>8:00am </li>
                  <li>CT Scan</li>
                  <li className="Declined">Paid</li>
                  <li>USD 22,000 </li>
                </ul>
                <hr className="underline"></hr>

                <ul className="ulContent">
                  <li>Tobi</li>
                  <li>8:00am </li>
                  <li>ECG, Blood Test</li>
                  <li className="Declined">Paid</li>
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

export default DoctorPaymentHistory;
