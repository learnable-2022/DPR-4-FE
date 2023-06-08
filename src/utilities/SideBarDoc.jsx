import React from "react";
import { RxDashboard } from "react-icons/rx";
import { TfiWrite } from "react-icons/tfi";
import { AiOutlineSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import logo1 from "../assets/images/logo-03.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from '@fortawesome/free-solid-svg-icons';


export default function SideBarDoc() {
  const paths = [
      {name: "DocDashboard", route: "/DocDashboard", icon: <RxDashboard />},
      {name: "DocBillings", route: "/DocBillings", icon:<FontAwesomeIcon icon={faCoins} />},
      {name: "DocDraft", route:"/DocDraft", icon:<TfiWrite/>},
      {name: "Docsettings", route:"/Docsettings" , icon:<AiOutlineSetting/>},
      {name: "DocLogout", route:"/DocLogout", icon:<FiLogOut/>}
    ]
  return (
    <div className="sideBar">
      <div>
        <img src={logo1} alt="pics" />
      </div>
      <div className="mid-section">
        <Link to="/DocDashboard" className="link">
          <RxDashboard />
          <p>Dashboard</p>
        </Link>

        <Link to="/DocBillings" className="link">
          <FontAwesomeIcon icon={faCoins} />
          <p>Billings</p>
        </Link>
        <Link to="/DocDraft" className="link">
          <TfiWrite />
          <p>Draft</p>
        </Link>
      </div>
      <div className="lower-section">
        <Link to="/Docsettings" className="link">
          <AiOutlineSetting />
          <p>settings</p>
        </Link>
        <div
          onClick={() => {
            localStorage.removeItem("doctorToken");
          }}
        >
          <Link to="/" className="link">
            <FiLogOut />
            <p>logout</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
