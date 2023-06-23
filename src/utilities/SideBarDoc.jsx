import React from "react";
import { RxDashboard } from "react-icons/rx";
import { TfiWrite } from "react-icons/tfi";
import { FiLogOut } from "react-icons/fi";
import Dashboard from "../assets/Category.png";
import newlogo1 from "../assets/Frame 8.png";
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
  const navigate = useNavigate();
  const returnHomeHandler =()=>{
    navigate("/");
  }
  return (
    <div className="sideBar">
      <div className="center-div">
        <img src={newlogo1} alt="pics" onClick={returnHomeHandler}  
        style={{cursor:"pointer",
        width: "120px",
         height: "80px",
          border:"none"
          
          }}/>
     
      </div>
      <div className="mid-section">
        <Link to="/DocDashboard" className="link">
        <img src={Dashboard} alt="dash-logo"/>
          <p style={{fontFamily:"poppins"}}>Dashboard</p>
        </Link>

        <Link to="/DocBillings" className="link">
     
          <img src={billinglogo} alt="billing-logo"/>
          < p style={{fontFamily:"poppins"}}>Billings</p>
        </Link>
        <Link to="/DocDraft" className="link">
     
          <img src={draft} alt="draft" />
          <p style={{fontFamily:"poppins"}}>Draft</p>
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
          <img src={logOut} alt="logout" />
        
            <p style={{fontFamily:"poppins"}}>logout</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
