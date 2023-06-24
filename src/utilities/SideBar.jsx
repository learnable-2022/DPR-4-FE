import React, { useState } from "react";
import { Link } from "react-router-dom";

import newlogo1 from "../assets/Group 5.svg";
import { useNavigate } from "react-router-dom";
import logOut from "../assets/Logout.png";
import Dashboard from "../assets/Category.png";
import record from "../assets/Document.png"
// import logo1 from "../assets/logo-03.png";
import billinglogo from "../assets/streamline_money-cash-coins-stack-accounting-billing-payment-stack-cash-coins-currency-money-finance.png";
import "../App.css";

export default function SideBar() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
  };
  const navigate = useNavigate();
  const returnHomeHandler = () => {
    navigate("/");
  };
  return (
    <>
      <div className="sideBar">
        <div className="center-div">
          <img
            src={newlogo1}
            alt="app-logo"
            onClick={returnHomeHandler}
            style={{ cursor: "pointer", width: "120px", height: "80px", border:"none" }}
          />
        </div>

        <div className="mid-section">
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
        <div className="lower-section">
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
    </>
  );
}
