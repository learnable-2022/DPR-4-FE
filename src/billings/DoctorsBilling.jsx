import React, { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import Notification from "../assets/images/Notification.png";
import PatientPics from "../assets/images/PatientPics.png";
import { useNavigate } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import { useState } from "react";
import url from "../api/BillingApi.jsx";

import ourlogo from "../assets/Frame 8.png";
import Dashboard from "../assets/Category.png";
import record from "../assets/Document.png";
import billinglogo from "../assets/streamline_money-cash-coins-stack-accounting-billing-payment-stack-cash-coins-currency-money-finance.png";
import logOut from "../assets/Logout.png";
import {AiOutlineClose} from "react-icons/ai";
import { Link } from 'react-router-dom';

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


  
  const [navOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!navOpen);
      };

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
                <img
                  style={{ width: "20px", height: "20px", borderRadius: "50%" }}
                  src={doctors_Image ? doctors_Image : PatientPics}
                  alt="pics"
                />
              </div>
            </div>
          </div>
        </div>

        {/* start*/}
        <div
        className={navOpen ? "patient_dashboard_nav" : "closeNav"}>
        <div className="_sideBar">
          <AiOutlineClose className="close_btn" onClick={toggleNav}  />
          <div className="_center-div">
            <img src={ourlogo} alt="app-logo" style={{width:"100px", height:"70px"}} />
          </div>

          <div className="_mid-section">
            <Link to="/Dashboard" className="link">
            <img src={Dashboard} alt="dash-logo"/>
            <p style={{fontFamily:"poppins"}}>Dashboard</p>
            </Link>
            <Link to="/Records" className="link">
            <img src={record} alt="record-logo" />
            <p style={{fontFamily:"poppins"}}>Records</p>
            </Link>
            <Link to="/Billing" className="link">
            <img src={billinglogo} alt="billing-logo"/>
            <p style={{fontFamily:"poppins"}}>Billings</p>
            </Link>
          </div>
          <div className="_lower-section">
            <div
              onClick={() => {
                localStorage.removeItem("patientToken");
                localStorage.removeItem("patientEmail");
              }}
            >
              <Link to="/" className="link">
              <img src={logOut} alt="logout" />
              <p style={{fontFamily:"poppins"}}>logout</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
          {/* stop */}

        {/* =========================================== */}
        <div className="smallScreenNav">
        <div className="searchParent">
          <div>
            <GiHamburgerMenu className="hamburger" onClick={toggleNav}/>
          </div>
              <div className="searchBox">
                <CiSearch />
                <input type="text" placeholder="Search.." />
              </div>

              <div className="searchIcons">
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
