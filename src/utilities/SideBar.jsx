import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import newlogo1 from "../assets/Group 5.svg";
import { useNavigate } from "react-router-dom";
import logOut from "../assets/Logout.png";
import Dashboard from "../assets/Category.png";
import record from "../assets/Document.png";
// import logo1 from "../assets/logo-03.png";
import billinglogo from "../assets/streamline_money-cash-coins-stack-accounting-billing-payment-stack-cash-coins-currency-money-finance.png";
import "../App.css";

export default function SideBar() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [getLocation, setLocation] = useState("");
  const location = useLocation();

  const handleMenuClick = (item) => {
    setSelectedItem(item);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/Dashboard") {
      setSelectedItem("dashboardLink");
      setLocation(document.getElementById("dashboardLink"));
    } else if (location.pathname === "/Records") {
      setSelectedItem("recordsLink");
      setLocation(document.getElementById("recordsLink"));
    } else if (location.pathname === "/Billing") {
      setSelectedItem("billingLink");
      setLocation(document.getElementById("billingLink"));
    }
  }, []);

  return (
    <>
      <div className="sideBar">
        <div className="center-div">
          <img
            src={newlogo1}
            alt="app-logo"
            style={{ width: "120px", height: "80px", border: "none" }}
          />
        </div>

        <div className="mid-section">
          {selectedItem && (
            <div
              className="vertical-stroke"
              style={{
                top: `${selectedItem.offsetTop || getLocation.offsetTop}px`,
              }}
            ></div>
          )}
          <div
            className={`${location.pathname === "/Dashboard" ? "active" : ""}`}
            onClick={() =>
              handleMenuClick(document.getElementById("dashboardLink"))
            }
            id="dashboardLink"
          >
            <Link to="/Dashboard" className="link">
              <img src={Dashboard} alt="dash-logo" />
              <p style={{ fontFamily: "poppins" }}>Dashboard</p>
            </Link>
          </div>
          <div
            className={`${location.pathname === "/Records" ? "active" : ""}`}
            onClick={() =>
              handleMenuClick(document.getElementById("recordsLink"))
            }
            id="recordsLink"
          >
            <Link to="/Records" className="link">
              <img src={record} alt="record-logo" />
              <p style={{ fontFamily: "poppins" }}>Records</p>
            </Link>
          </div>
          <div
            className={`${location.pathname === "/Billing" ? "active" : ""}`}
            onClick={() =>
              handleMenuClick(document.getElementById("billingLink"))
            }
            id="billingLink"
          >
            <Link to="/Billing" className="link">
              <img src={billinglogo} alt="billing-logo" />
              <p style={{ fontFamily: "poppins" }}>Billings</p>
            </Link>
          </div>
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
              <p style={{ fontFamily: "poppins" }}>logout</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
