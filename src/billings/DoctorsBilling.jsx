import React, { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import Notification from "../assets/images/Notification.png";
import PatientPics from "../assets/images/PatientPics.png";
import { useNavigate } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import { useState } from "react";
import url from "../api/BillingApi.jsx";

export default function DoctorsBilling() {
  const [transactionArray, setTransactionArray] = useState([])

useEffect(()=>{
    const fetchdata = async()=>{
      try{
        const response = await url.get('/transactions');
        console.log('response::  ',response);
        setTransactionArray(response.data.transactions);

        console.log('trans :: ',response.data.transactions);
      }catch(err){
        console.log('err:: ',err);
      }
    }
    fetchdata();
}, [])



  const navigate = useNavigate();

  function handleClick(e) {
    navigate("/DoctorPaymentHistory");
  }

  let doctors_Name = localStorage.getItem("doctor_name");
  let doctors_Image = localStorage.getItem("doctor_image");

  return (
    <>
      <div className="Right">
        <div className="billingBoardDashboard">
          <div className="billingNav">
            <div className="DoctorName">
              <h2>Hello, Dr. {doctors_Name.split(" ")[0]}</h2>
            </div>

            <div className="searchParent">
              <div className="searchBox">
                <CiSearch />
                <input type="text" placeholder="Search.." />
              </div>

              <div className="searchIcons">
                {/* <img src={Notification} alt="pics" /> */}
                <img
                  style={{ width: "20px", height: "20px", borderRadius: "50%" }}
                  src={doctors_Image ? doctors_Image : PatientPics}
                  alt="pics"
                />
              </div>
            </div>
          </div>
        </div>

        {/* =========================================== */}
        <div className="smallScreenNav">
        <div className="searchParent">
          <div>
            <GiHamburgerMenu/>
          </div>
              <div className="searchBox">
                <CiSearch />
                <input type="text" placeholder="Search.." />
              </div>

              <div className="searchIcons">
                {/* <img src={Notification} alt="pics" /> */}
                <img src={PatientPics} alt="pics" />
              </div>
            </div>

            <div className="smallScreenNavName">
              <p>Hello, Dr Ada!</p>
            </div>
            </div>

        {/* ============================================= */}


        <div className="Dashboard">
          <div className="patientDashboardHeading">
            <p>Payment History</p>
          </div>
          <div className="doctorsDashboard">
            <div className="patientNav">
              <ul>
                <li>Name</li>
                <li className="patientNavStatus">Status</li>
                <li className="patientNavAmount">Amount </li>
              </ul>
            </div>

            <div className="PatientEntities">
              {transactionArray.length > 0 && transactionArray.map((transaction,index)=>{
                return (
                  <div key={transaction._id}>
                    <ul>
                      <li>{transaction.name}</li>
                      <li className={`${transaction.status}`}>{transaction.status}</li>
                      <li>USD {transaction.amount}</li>
                    </ul>
                    <hr className="PatientUnderline"></hr>

                  </div>
                )
              })}
              {/* <ul >
                <li>Amaka</li>
                <li className="successful">Paid</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="PatientUnderline"></hr>
              <ul>
                <li>Timothy</li>
                <li className="declined">Unpaid</li>
                <li>USD 5,000 </li>
              </ul>
              <hr className="PatientUnderline"></hr>
              <ul>
                <li>Chris</li>
                <li className="successful">Paid</li>
                <li>USD 50,000 </li>
              </ul>
              <hr className="PatientUnderline"></hr>
              <ul>
                <li>Tobi</li>
                <li className="successful">Paid</li>
                <li>USD 150,000 </li>
              </ul> */}
            </div>
          </div>

          <div className="doctorViewAll" onClick={handleClick}>
            <p>View all</p>
          </div>
        </div>


        {/* /////////////////////////down////////////////////////////// */}
        {/* <div className="Dashboard">
          <div className="patientDashboardHeading">
            <p>Patient Consultation Billing</p>
          </div>
          <div className="doctorsDashboard">
            <div className="ConsultationBillingNav">
              <ul>
                <li>Name</li>
                <li>Status</li>
                <li>Amount </li>
              </ul>
            </div>

            <div className="ConsultationBilling">
              <ul>
                <li>Amaka</li>
                <li className="Successful">Paid</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="doctorUnderline"></hr>
              <ul>
                <li>Timothy</li>
                <li className="Declined">Unpaid</li>
                <li>USD 5,000   </li>
              </ul>
              <hr className="doctorUnderline"></hr>
              <ul>
                <li>Chris </li>
                <li className="Successful">Paid</li>
                <li>USD 50,000  </li>
              </ul>
              <hr className="doctorUnderline"></hr>
              <ul>
                <li>Tobi</li>
                <li className="Successful">Paid</li>
                <li>USD 150,000   </li>
              </ul>
            </div>
          </div>

          <div className="doctorViewAll" onClick={handleClick}>
              <p>View all</p>
          </div> 

        </div>  */}
        </div>

        
    
    </>
  );
}
