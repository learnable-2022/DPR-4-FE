import React from "react";
import "../Record/sub-records/sub-records.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsArrowLeft } from "react-icons/bs";
import smallLogo from "../assets/small.png";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router";
export default function NavBar() {

const navigation = useNavigate();
const returnHandler =()=>{
  navigation(-1);
}
  return (
    <>
      <nav className="nav-container">
        <div className="nav-container-left">
          <BsArrowLeft onClick={returnHandler} style={{cursor:"pointer"}}/>
          <h2 className="Nav-labreport">
            Medical Record
            <IoIosArrowForward />
            Hospital Visit
            <IoIosArrowForward /> View Report
          </h2>
        </div>
        <div className="nav-container-right">
          <div>
            <button>share report</button>
          </div>
          <div>
            <IoIosNotificationsOutline />
          </div>
          <div className="nav-short">
            <img
              src={smallLogo}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                border: "1px solid black",
              }}
              alt="frame"
            />
            <p>Mrs Rosaline Doe</p>
          </div>
        </div>
      </nav>
    </>
  );
}
