import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import ourlogo from "../assets/Frame 8.png";
import Dashboard from "../assets/Category.png";
import record from "../assets/Document.png";
import billinglogo from "../assets/streamline_money-cash-coins-stack-accounting-billing-payment-stack-cash-coins-currency-money-finance.png";
import logOut from "../assets/Logout.png";
import {AiOutlineClose} from "react-icons/ai";
import { Link } from 'react-router-dom';


function ResponsivenessSidebar() {
    const [navOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!navOpen);
      };

  return (
    <> 
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
    </>
  )
}

export default ResponsivenessSidebar;