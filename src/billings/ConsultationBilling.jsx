import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowRight2 from "../assets/images/ArrowRight2.png";
import Notification from "../assets/images/Notification.png";
import PatientPics from "../assets/images/PatientPics.png";
import Calendar from "../assets/images/Calendar.png";
import PatientPics2 from "../assets/images/PatientPics2.png";
import Heart from "../assets/images/Heart.png";
import Syring from "../assets/images/Syring.png";
import Delete from "../assets/images/Delete.png";
import PlusCircle from "../assets/images/PlusCircle.png";
import Danger from "../assets/images/Danger.png";
import Checker from "../assets/images/Checker.png";
import TickSquare from "../assets/images/TickSquare.png";

function ConsultationBilling() {
  const navigate = useNavigate();

  function handleClick(e) {
    navigate("/DoctorInvoiceSent");
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
                  <h6>Consultation Bill </h6>
                  <img src={ArrowRight2} className="ArrowHistory" alt="pics" />
                </div>

                <div className="Bill">
                  <h6>Payment History</h6>
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

        <div className="ConsultationBillingContainer">
          <div className="ConsultationInformation">
            <div className="ConsultationDate">
              <p>Bill Date</p>
              <div>
                <div className="DateCalConsultationPropertyDown">
                  <p>23-05-23</p>
                  <img src={Calendar} alt="pics" />
                </div>
                <hr className="scroll"></hr>
              </div>
            </div>

            <div className="ConsultationName">
              <img src={PatientPics2} alt="pics" />
              <div className="ConsultationProfile">
                <p>Patient Name</p>
                <p className="ConsultationPropertyDown">Amaka</p>

                <hr className="scroll"></hr>
              </div>
            </div>

            <div className="ConsultationProvider">
              <p>Healthcare Provider</p>
              <p className="ConsultationPropertyDown">Dr. Ada</p>
              <hr className="scroll"></hr>
            </div>

            <div className="ConsultationLocation">
              <p>Location</p>
              <p className="ConsultationPropertyDown">Medcare Clinic</p>
              <hr className="scroll"></hr>
            </div>
          </div>

          <div className="billItem">
            <div className="ConsultationBillItemNav">
              <div className="ConsultationBillItemContent">
                <p>Service Type</p>
                <p>Service Charge</p>
                <p>Tax (NGN) </p>
                <p>Subtotal (NGN)</p>
              </div>
            </div>

            <div className="ConsultationBillPreview">
              <div className="deleteFlex">
                <div className="ConsultationBillPreviewDetails">
                  <div className="ConsultationMedicalTools">
                    <img src={Heart} alt="pics" />
                    <p>ECG Test</p>
                  </div>
                  <p>USD 10,000</p>
                  <p>USD 1,000</p>
                  <p>USD 11,000</p>
                </div>

                <div>
                  <img src={Delete} alt="pics" />
                </div>
              </div>

              <div className="deleteFlex">
                <div className="ConsultationBillPreviewDetails">
                  <div className="ConsultationMedicalTools">
                    <img src={Syring} alt="pics" />
                    <p>Blood Test</p>
                  </div>
                  <p>USD 10,000</p>
                  <p>USD 1,000</p>
                  <p>USD 11,000</p>
                </div>
                <div>
                  <img src={Delete} alt="pics" />
                </div>
              </div>
            </div>
          </div>

          <div className="summary">
            <div className="addService">
              <img src={PlusCircle} alt="pics" />
              <p>Add Another Service</p>
            </div>
            <p>Total Amount : USD 22,000</p>
          </div>

          <div className="authUp">
            <p>Payment Status</p>
            <img src={Danger} alt="pics" />
            <p>Send Invoice Via</p>
          </div>

          <div className="authDown">
            <div className="paidWrapper">
              <p className="authDownPaid">Unpaid</p>
              <hr className="authDownPaidU"></hr>
            </div>

            <div className="checkWrapper">
              <div className="checkMail">
                <img src={Checker} alt="pics" />
                <p>Email</p>
              </div>

              <div className="check">
                <img src={TickSquare} alt="pics" />
                <p>SMS</p>
              </div>
            </div>
          </div>

          <div className="sendContainer">
            <div className="sendInvoice">
              <button onClick={handleClick}>Send Invoice</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConsultationBilling;
