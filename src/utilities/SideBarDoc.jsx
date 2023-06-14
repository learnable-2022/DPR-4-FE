import React from "react";
import { RxDashboard } from "react-icons/rx";
import { TfiWrite } from "react-icons/tfi";
import { FiLogOut } from "react-icons/fi";
import ourlogo from "../assets/ourlogo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

export default function SideBarDoc() {
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
        <img src={ourlogo} alt="pics" />
        <p>Med<span>loc</span></p>
      </div>
      <div className="mid-section">
        <Link to="/DocDashboard" className="link">
          <RxDashboard style={{color:"white"}} />
          <p>Dashboard</p>
        </Link>

        <Link to="/DocBillings" className="link">
          <FontAwesomeIcon icon={faCoins}  style={{color:"white"}}/>
          <p>Billings</p>
        </Link>
        <Link to="/DocDraft" className="link">
          <TfiWrite style={{color:"white"}} />
          <p>Draft</p>
        </Link>
      </div>
      <div className="lower-section">
        <div
          onClick={() => {
            localStorage.removeItem("doctorToken");
            localStorage.removeItem("doctorEmail");
          }}
        >
          <Link to="/" className="link">
            <FiLogOut  style={{color:"white"}}/>
            <p>logout</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
