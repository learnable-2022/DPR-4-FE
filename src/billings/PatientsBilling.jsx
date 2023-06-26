import React from "react";
import SideBar from "../utilities/SideBar";
import "./billing.css";
import "./Responsiveness.css";
import "../App.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import Notification from "../assets/images/Notification.png";
import PatientPics from "../assets/images/PatientPics.png";
import Show from "../assets/images/Show.png";
import Dollar from "../assets/images/CurrencyDollarOutline.png";
import ArrowDown2 from "../assets/images/ArrowDown2.png";
import BlockIcon from "../assets/images/BlockIcon.png";
import ArrowDown from "../assets/images/ArrowDown.png";
import ArrowUp from "../assets/images/ArrowUp.png";
import ArrowSlant from "../assets/images/ArrowSlant.png";
import Calendar from "../assets/images/Calendar.png";
import BlockIconResize from "../assets/images/BlockIconResize.png";
import {AiOutlineClose} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Dashboard from "../assets/Category.png";
import url from "../api/BillingApi.jsx";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import ResponsivenessSidebar from "../billings/ResponsivenessSidebar";
import logOut from "../assets/Logout.png";
import ourlogo from "../assets/Frame 8.png";
import record from "../assets/Document.png"
import billinglogo from "../assets/streamline_money-cash-coins-stack-accounting-billing-payment-stack-cash-coins-currency-money-finance.png";




export default function PatientsBilling() {
  const [transactionArray, setTransactionArray] = useState([]);
  const [patientId, setPatientId] = useState([]);
  let patient_Image = localStorage.getItem("patient_image");
  let patient_Name = localStorage.getItem("patient_name");

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await url.get("/transactions");
        console.log("response::  ", response);
        setTransactionArray(response.data.transactions);

        setPatientId(response.data.transactions._id);

        console.log("trans :: ", response.data.transactions);
      } catch (err) {
        console.log("err:: ", err);
      }
    };
    fetchdata();
  }, []);

  console.log("patientId", patientId);

  const navigate = useNavigate();
  function handleClick(e) {
    navigate("/PatientPaymentHistory");
  }

  function handlePress(e) {
    navigate("/PatientInvoice");
  }


  const [navOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!navOpen);
  };

  return (
    <>
      <div className="Right">
        <div className="billingBoardDashboard">

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



          <div className="billingNav">
            <div className="patientName">
              <h2>
                Hello, {patient_Name.split(" ")[0]} <br />{" "}
                {patient_Name.split(" ")[1]}!
              </h2>
            </div>

            <div className="searchParent">
              <div className="searchBox">
                <CiSearch />
                <input type="text" placeholder="Search.." />
              </div>

              <div className="searchIcons">
                <img src={PatientPics} alt="pics" />
              </div>
            </div>
          </div>
        </div>
        {/* =========================================== */}
        <div className="smallScreenNav">
          <div className="searchParent">
            <div>
              <GiHamburgerMenu className="hamburger" onClick={toggleNav} />
            </div>
            <div className="searchBox">
              <CiSearch />
              <input type="text" placeholder="Search.." />
            </div>

            <div className="searchIcons">
              <img src={PatientPics} alt="pics" />
            </div>
          </div>

        </div>

        {/* ============================================= */}

        <div className="Dashboard">
          <div className="patientDashboardHeading">
            <p>Payment History</p>
          </div>
          <div className="patientDashboard">
            <div className="patientNav">
              <ul>
                <li>Name</li>
                <li>Status</li>
                <li className="patientNavAmount">Amount </li>
              </ul>
            </div>

            <div className="PatientEntities">
              {transactionArray.length > 0 && transactionArray.map((transaction,index)=>{
                    // display: grid;
                    // grid-template-columns: 1fr 1fr 1fr;
                return(
               <div key={transaction._id}>
                  <ul>
                    <li>{transaction.healthcareProvider}</li>
                  <li className={`${transaction.status}`}>{transaction.status}</li>
                  <li>USD {transaction.amount} </li> 
                 
                </ul>
                <hr className="PatientUnderline" key={`${index}-${transaction._id}`}/>
                 </div>
                )
              })}


              
              {/* <ul >
                <li>Dr. Ada</li>
                <li className="Successful">Successful</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="PatientUnderline"></hr> */}
              {/* <ul>
                <li>Dr. Charl</li>
                <li className="Declined">Declined</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="PatientUnderline"></hr> */}
              {/* <ul>
                <li>Dr. Chris</li>
                <li className="Successful">Successful</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="PatientUnderline"></hr> */}
              {/* <ul>
                <li>Dr. Kemisola</li>
                <li className="Successful">Successful</li>
                <li>USD 22,000 </li>
              </ul> */}
            </div>
          </div>
          <div className="ViewAll">
            <p onClick={handleClick}>View all</p>
          </div>

          {/* /////////////////////////down////////////////////////////// */}
          <div className="patientDashboardHeading">
            <p>Invoice Statement</p>
          </div>
          <div className="patientDashboard">
            <div className="patientNav">
              <ul>
                <li>Name</li>
                <li>Status</li>
                <li className="patientNavAmount">Amount </li>
              </ul>
            </div>

            <div className="PatientEntities" onClick={handlePress}>
              <ul>
                <li>Dr. Ada</li>
                <li className="successful">Paid</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="PatientUnderline"></hr>
              <ul>
                <li>Dr. Charl</li>
                <li className="declined">Declined</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="PatientUnderline"></hr>
              <ul>
                <li>Dr. Chris</li>
                <li className="successful">Paid</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="PatientUnderline"></hr>
              <ul>
                <li>Dr. Kemisola</li>
                <li className="successful">Paid</li>
                <li>USD 22,000 </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
