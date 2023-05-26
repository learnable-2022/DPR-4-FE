import React from "react";
import SideBar from "../utilities/SideBar";
import "./billing.css";
import "../App.css";
import { CiSearch } from "react-icons/ci";
import Notification from "../assets/Notification.png";
import PatientPics from "../assets/PatientPics.png";
import Show from "../assets/Show.png";
// import ArrowDown2 from "../assets/ArrowDown2";

export default function PatientsBilling() {
  return (
    <>
      <div className="Right">
      
        <div className="billingBoardDashboard">
        {/* <SideBar className="sideBar" /> */}
          <div className="billingNav">
            <div className="patientName">
              <h2>
                Hello, Amaka <br /> Chibueze!
              </h2>
            </div>

            <div className="searchParent">
              <div className="searchBox">
                <CiSearch />
                <input type="text" placeholder="Search.." />
              </div>

              <div className="searchIcons">
                <img src={Notification} alt=""/>
                <img src={PatientPics}  alt=""/>
              </div>
            </div>
          </div>
        </div>

        <div className="paymentCard">
          <div className="cardDetails">
            <div className="portfolio">
              <h5>Portfolio Balance</h5>
              <img src={Show} alt="" />
            </div>

            <div>
              <p>USD</p>
              {/* <img src={ArrowDown2} alt=""/> */}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
