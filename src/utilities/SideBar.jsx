import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import ourlogo from "../assets/ourlogo.png";
import newlogo1 from "../assets/newlogo1.png";
import { useNavigate } from "react-router-dom";
// import logo1 from "../assets/logo-03.png";
import logo1 from "../assets/images/logo-03.png";

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
            style={{ cursor: "pointer", width: "70px", height: "70px" }}
          />
          {/* <p>Med<span>bloc</span></p> */}
        </div>

        <div className="mid-section">
          <Link to="/Dashboard" className="link">
            <RxDashboard style={{ color: "white" }} />
            <p>Dashboard</p>
          </Link>
          <Link to="/Records" className="link">
            <BsReverseLayoutTextSidebarReverse style={{ color: "white" }} />
            <p>Records</p>
          </Link>
          <Link to="/Billing" className="link">
            <FontAwesomeIcon icon={faCoins} style={{ color: "white" }} />
            <p>Billings</p>
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
              <FiLogOut style={{ color: "white" }} />
              <p>logout</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
