import React from "react";
import { CiSearch } from "react-icons/ci";
import Notification from "../assets/images/Notification.png";
import PatientPics from "../assets/images/PatientPics.png";
import { useNavigate } from "react-router-dom";

export default function DoctorsBilling() {
  const navigate = useNavigate();

  function handleClick(e) {
    navigate("/DoctorPaymentHistory");
  }

  return (
    <>
      <div className="Right">
        <div className="billingBoardDashboard">
          <div className="billingNav">
            <div className="DoctorName">
              <h2>Hello, Dr. Ada!</h2>
            </div>

            <div className="searchParent">
              <div className="searchBox">
                <CiSearch />
                <input type="text" placeholder="Search.." />
              </div>

              <div className="searchIcons">
                <img src={Notification} alt="pics" />
                <img src={PatientPics} alt="pics" />
              </div>
            </div>
          </div>
        </div>

        <div className="Dashboard">
          <div className="patientDashboardHeading">
            <p>Payment History</p>
          </div>
          <div className="doctorsDashboard">
            <div className="patientNav">
              <ul>
                <li>Name</li>
                <li>Status</li>
                <li>Amount </li>
              </ul>
            </div>

            <div className="PatientEntities" onClick={handleClick}>
              <ul>
                <li>Amaka</li>
                <li className="Successful">Paid</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="PatientUnderline"></hr>
              <ul>
                <li>Timothy</li>
                <li className="Declined">Unpaid</li>
                <li>USD 5,000 </li>
              </ul>
              <hr className="PatientUnderline"></hr>
              <ul>
                <li>Chris</li>
                <li className="Successful">Paid</li>
                <li>USD 50,000 </li>
              </ul>
              <hr className="PatientUnderline"></hr>
              <ul>
                <li>Tobi</li>
                <li className="Successful">Paid</li>
                <li>USD 150,000 </li>
              </ul>
            </div>
          </div>

          <div className="doctorViewAll" onClick={handleClick}>
            <p>View all</p>
          </div>
        </div>

        {/* /////////////////////////down////////////////////////////// */}
        <div className="Dashboard">
          <div className="patientDashboardHeading">
            <p>Patient Consultation Billing</p>
          </div>
          <div className="doctorsDashboard">
            <div className="ConsultationBillingNav">
              <ul>
                <li>Name</li>
                {/* <li>Status</li> */}
                <li>Amount </li>
              </ul>
            </div>

            <div className="ConsultationBilling">
              <ul>
                <li>Amaka</li>
                {/* <li className="Successful">Paid</li> */}
                <li>USD 22,000 </li>
              </ul>
              <hr className="doctorUnderline"></hr>
              <ul>
                <li>Timothy</li>
                {/* <li className="Declined">Unpaid</li> */}
                <li>USD 5,000 </li>
              </ul>
              <hr className="doctorUnderline"></hr>
              <ul>
                <li>Chris </li>
                {/* <li className="Successful">Paid</li> */}
                <li>USD 50,000 </li>
              </ul>
              <hr className="doctorUnderline"></hr>
              <ul>
                <li>Tobi</li>
                {/* <li className="Successful">Paid</li> */}
                <li>USD 150,000 </li>
              </ul>
            </div>
          </div>

          <div className="doctorViewAll" onClick={handleClick}>
            <p>View all</p>
          </div>
        </div>
      </div>
    </>
  );
}
