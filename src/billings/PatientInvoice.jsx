import React from "react";
import ArrowRight2 from "../assets/images/ArrowRight2.png";
import Notification from "../assets/images/Notification.png";
import PatientPics from "../assets/images/PatientPics.png";
import PatientProfile from "../assets/images/PatientProfile.png";
import ArrowDownColoured from "../assets/images/ArrowDownColoured.png";
import printer from "../assets/images/printer.png";
import Heart from "../assets/images/Heart.png";
import Syring from "../assets/images/Syring.png";
import { useNavigate } from "react-router-dom";
import RadioButton from "../assets/images/RadioButton.png";
import pay from "../assets/images/pay.png";
import PayPal from "../assets/images/PayPal.png";
import VISA from "../assets/images/VISA.png";

function PatientInvoice() {
  const navigate = useNavigate();

  function handleClick(e) {
    navigate("/PatientsBilling");
  }

  function onPress(e) {
    navigate("/PatientInvoiceConfirmation");
  }

  return (
    <>
      <div className="Right">
        <div className="billingNavHistory">
          <div className="navFlex">
            <div>
              <h1>Billing</h1>
              <div className="Consultation">
                <div className="Bill">
                  <h6>Invoice Statement </h6>
                  <img src={ArrowRight2} className="ArrowHistory" alt="pics" />
                </div>

                <div className="Bill">
                  <h6 onClick={handleClick}>Payment History</h6>
                  <img src={ArrowRight2} className="ArrowHistory" alt="pics" />
                </div>
              </div>
            </div>

            <div className="invoiceIcons">
              <img src={Notification} alt="pics" />
              <img src={PatientPics} alt="pics" />
            </div>
          </div>
        </div>

        <div className="invoiceHero">
          <div className="invoiceProfile">
            <div className="patientProfile">
              <div>
                <img src={PatientProfile} alt="pics" />
              </div>
              <ul>
                <li>
                  <span>Gender</span> : Female
                </li>
                <li>
                  <span>Age</span> : 25 years
                </li>
                <li>
                  <span>Weight</span> : 75 kg
                </li>
                <li>
                  <span>Height</span> : 6’1
                </li>
              </ul>
            </div>

            <div className="profileLeft">
              <p>
                <span>Patient Category</span> : Hypertension, Diabetes <br />{" "}
                Mellitus
              </p>
              <p className="id">
                <span>Patient ID</span> : 232548
              </p>
            </div>
          </div>

          <div className="editProfile">
            <p>EDIT PROFILE</p>
            <img src={ArrowDownColoured} alt="pics" />
          </div>
        </div>

        <div className="billingStatement">
          <div className="billingStatementNav">
            <p>
              Payments /<span className="invoice">Invoice 00319</span>
            </p>
            <div className="PrinterSide">
              <img src={printer} alt="pics" />
              <p>Print</p>
            </div>
          </div>
          <hr className="billingStatementNavUnderline"></hr>

          <ul className="invoiceDetails">
            <li>Dr. Ada</li>
            <li>Endocrinologist M.D</li>
            <li>Medcare Clinic</li>
            <li className="invoice">https://drada.medbloc.com</li>
            <li>Reg No : 65487</li>
          </ul>
          <hr className="billingStatementNavUnderline"></hr>

          <div className="billingPatientDetails">
            <ul className="BillingDetails">
              <h3>Billing Details</h3>
              <li>
                <span>Bill Date</span> : 23rd May, 2023
              </li>
              <li>
                <span>Total Cost </span>: USD 22,000
              </li>
              <li>
                <span>Tax </span>: USD 1,000
              </li>
              <li>
                <span>Payment Status </span>: <span className="paid">Paid</span>
              </li>
            </ul>
            <hr className="demarcation"></hr>
            <ul className="PatientDetails">
              <h3>Patient Details</h3>
              <li>
                <span>Payment Status </span> : Amaka Chibueze
              </li>
              <li>
                <span>Phone number</span> : +2349054876241
              </li>
              <li>
                <span>Email</span> : amakachidozie@gmail.com
              </li>
            </ul>
          </div>

          <div className="billItem">
            <h4>Billed Items</h4>
            <div className="billItemNav">
              <div className="billItemContent">
                <p>Service name</p>
                <p>Amount (NGN)</p>
              </div>
            </div>

            <div className="billPreview">
              <div>
                <div className="medicalTools">
                  <img src={Heart} alt="pics" />
                  <p>ECG Test</p>
                </div>
                <div className="medicalTools">
                  <img src={Syring} alt="pics" />
                  <p>Blood Test</p>
                </div>
                <p>Total Amount (Including Tax)</p>
              </div>

              <div>
                <p>USD 10,000</p>
                <p>USD 10,000</p>
                <p>USD 10,000</p>
              </div>
            </div>
          </div>
          <div className="paymentDetails">
            <div className="paymentOptionsNav">
              <p>Payment Options</p>
            </div>

            <div className="paymentOptions">
              <div className="paymentImage">
                <div className="radioText">
                  <img
                    onClick={onPress}
                    className="RadioButton"
                    src={RadioButton}
                    alt="pics"
                  />
                  <p>Paystack</p>
                </div>
                <img className="Pay" src={pay} alt="pics" />
              </div>

              <div className="paymentImage">
                <div className="radioText">
                  {/* <customRadioButton/> */}
                  <img className="RadioButton" alt="pics" src={RadioButton} />
                  <p>PayPal</p>
                </div>
                <img className="Paypal" alt="pics" src={PayPal} />
              </div>

              <div className="paymentImage">
                <div className="radioText">
                  <img className="RadioButton" alt="pics" src={RadioButton} />
                  <p>Credit Card</p>
                </div>
                <img className="visa" alt="pics" src={VISA} />
              </div>

              <div className="paymentImage">
                <div className="radioText">
                  <img className="RadioButton" alt="pics" src={RadioButton} />
                  <p>Debit Card</p>
                </div>
                <img className="visa" alt="pics" src={VISA} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientInvoice;
