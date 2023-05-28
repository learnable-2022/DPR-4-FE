import React from "react";
import { GrNotification } from "react-icons/gr";
import { RiAccountCircleFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import "./dashboard.css";
//rescue kenneth
export default function DoctorsDashboard() {
  return (
    <div className="doctorsdashboard">
      <div className="header">
        <div className="header_text_part">
          <h1>
            You are welcome <span className="doc_name">Dr.Chijindu</span>
          </h1>
          <p>I trust you’re ready to save lives today...</p>
        </div>
        <div className="header_icon_part">
          <GrNotification className="header_icon" />
          <RiAccountCircleFill className="header_icon" />
        </div>
      </div>

      <main>
        <div className="left-side">
          <div className="header_div">
            <h2 className="title">Patient List</h2>
            <div className="search_div">
              <input type="text" placeholder="Search" />
              <CiSearch className="search_icon" />
            </div>
          </div>
        </div>
        <div className="right-side"></div>
      </main>
    </div>
  );
}
// rescue kenneth