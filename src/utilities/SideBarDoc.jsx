import React from "react";
import { RxDashboard } from "react-icons/rx";
import { TfiWrite } from "react-icons/tfi";
import { FiLogOut } from "react-icons/fi";
import Dashboard from "../assets/Category.png";
import newlogo1 from "../assets/Group 5.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import billinglogo from "../assets/streamline_money-cash-coins-stack-accounting-billing-payment-stack-cash-coins-currency-money-finance.png";
import logOut from "../assets/Logout.png";
import draft from "../assets/Edit Square.png";

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
        <img src={newlogo1} alt="pics"  
        style={{
        width: "120px",
         height: "80px",
          border:"none"
          
          }}/>
     
      </div>
      <div className="mid-section">
        <Link to="/DocDashboard" className="link">
        <div>
          <img src={Dashboard} alt="dash-logo"/>
          <p style={{fontFamily:"poppins"}}>Dashboard</p>
          </div>
        </Link>
          
        <Link to="/DocBillings" className="link">
        <div>
        <img src={billinglogo} alt="billing-logo"/>
          < p style={{fontFamily:"poppins"}}>Billings</p>
        </div>
        </Link>
       
        <Link to="/DocDraft" className="link">
        <div>
        <img src={draft} alt="draft" />
          <p style={{fontFamily:"poppins"}}>Draft</p>
        </div>
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
          <div>
          <img src={logOut} alt="logout" />
            <p style={{fontFamily:"poppins"}}>logout</p>
          </div>
          </Link>
         
        </div>
      </div>
    </div>
  );
}
