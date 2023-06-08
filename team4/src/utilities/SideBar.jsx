import React from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { AiOutlineSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
// import logo1 from "../assets/logo-03.png";
import logo1 from "../assets/images/logo-03.png";

import "../App.css";

export default function SideBar() {
  return (
    <>
      <div className="sideBar">
        <div>
          <img src={logo1} alt="app-logo" />
        </div>

        <div className="mid-section">
          <Link to="/Dashboard" className="link">
            <RxDashboard />
            <p>Dashboard</p>
          </Link>
          <Link to="/Records" className="link">
            <BsReverseLayoutTextSidebarReverse />
            <p>Records</p>
          </Link>
          <Link to="/Billing" className="link">
            <FontAwesomeIcon icon={faCoins} />
            <p>Billings</p>
          </Link>
        </div>
        <div className="lower-section">
          <Link to="*" className="link">
            <AiOutlineSetting />
            <p>settings</p>
          </Link>
          <div
            onClick={() => {
              localStorage.removeItem("patientToken");
            }}
          >
            <Link to="/" className="link">
              <FiLogOut />
              <p>logout</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
