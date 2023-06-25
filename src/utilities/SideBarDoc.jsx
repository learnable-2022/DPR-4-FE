import React, { useEffect, useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { TfiWrite } from "react-icons/tfi";
import { FiLogOut } from "react-icons/fi";
import Dashboard from "../assets/Category.png";
import newlogo1 from "../assets/Group 5.svg";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import billinglogo from "../assets/streamline_money-cash-coins-stack-accounting-billing-payment-stack-cash-coins-currency-money-finance.png";
import logOut from "../assets/Logout.png";
import draft from "../assets/Edit Square.png";

export default function SideBarDoc() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [getLocation, setLocation] = useState("");
  const location = useLocation();

  const handleMenuClick = (item) => {
    setSelectedItem(item);
  };
  useEffect(() => {
    if (location.pathname === "/DocDashboard") {
      setSelectedItem("docdashboardLink");
      setLocation(document.getElementById("docdashboardLink"));
    } else if (location.pathname === "/DocBillings") {
      setSelectedItem("docBillingsLink");
      setLocation(document.getElementById("docBillingsLink"));
    } else if (location.pathname === "/DocDraft/") {
      setSelectedItem("docDraftLink");
      setLocation(document.getElementById("docDraftLink"));
    }
  }, []);
  const paths = [
    { name: "DocDashboard", route: "/DocDashboard", icon: <RxDashboard /> },
    {
      name: "DocBillings",
      route: "/DocBillings",
      icon: <FontAwesomeIcon icon={faCoins} />,
    },
    { name: "DocDraft", route: "/DocDraft", icon: <TfiWrite /> },
    { name: "DocLogout", route: "/DocLogout", icon: <FiLogOut /> },
  ];

  return (
    <div className="sideBar">
      <div className="center-div">
        <img
          src={newlogo1}
          alt="pics"
          style={{
            width: "120px",
            height: "80px",
            border: "none",
          }}
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
          className={`${location.pathname === "/DocDashboard" ? "active" : ""}`}
          onClick={() =>
            handleMenuClick(document.getElementById("docdashboardLink"))
          }
          id="docdashboardLink"
        >
          <Link to="/DocDashboard" className="link">
            <img src={Dashboard} alt="dash-logo" />
            <p style={{ fontFamily: "poppins" }}>Dashboard</p>
          </Link>
        </div>

        <div
          className={`${location.pathname === "/DocBillings" ? "active" : ""}`}
          onClick={() =>
            handleMenuClick(document.getElementById("docBillingsLink"))
          }
          id="docBillingsLink"
        >
          <Link to="/DocBillings" className="link">
            <img src={billinglogo} alt="billing-logo" />
            <p style={{ fontFamily: "poppins" }}>Billings</p>
          </Link>
        </div>
        <div
          className={`${location.pathname === "/DocDraft" ? "active" : ""}`}
          onClick={() =>
            handleMenuClick(document.getElementById("docDraftLink"))
          }
          id="docDraftLink"
        >
          <Link to="/DocDraft" className="link">
            <img src={draft} alt="draft" />
            <p style={{ fontFamily: "poppins" }}>Draft</p>
          </Link>
        </div>
      </div>
      <div className="lower-section">
        <div
          onClick={() => {
            localStorage.removeItem("doctorToken");
            localStorage.removeItem("doctorEmail");
          }}
        >
          <Link to="/" className="link">
            <img src={logOut} alt="logout" />

            <p style={{ fontFamily: "poppins" }}>logout</p>
          </Link>
         
        </div>
      </div>
    </div>
  );
}
