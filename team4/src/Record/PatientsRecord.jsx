import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsArrowLeft } from "react-icons/bs";
import logo2 from "../images/Rectangle 20.png";
import pic1 from "../images/Rectangle 10.png";
import "./Record.css";
import { Link, Outlet } from "react-router-dom";

export default function PatientsRecord() {
  return (
    <div className="container">
      <nav className="nav-container">
        <div className="nav-container-left">
          <BsArrowLeft />
          <h2>Medical Record</h2>
        </div>
        <div className="nav-container-right">
          <div>
            <button>share report</button>
          </div>
          <div>
            <IoIosNotificationsOutline />
          </div>
          <div className="nav-short">
            <img src={logo2} alt="frame" />
            <p>Mr John Doe</p>
          </div>
        </div>
      </nav>
      <div className="second-section">
        <div className="second-section-image">
          <img src={pic1} alt="profile-pic" />
        </div>
        <div className="second-section-text">
          <div>
            <h2>Name</h2>
            <p>John</p>
            <h2>Gender</h2>
            <p>M</p>
            <h2>Height</h2>
            <p>5ft 8inc</p>
          </div>
          <div>
            <h2>Middle Name</h2>
            <p>-</p>
            <h2>Genotype</h2>
            <p>AA</p>
            <h2>Weight</h2>
            <p>62kg</p>
          </div>
          <div>
            <h2>Surname</h2>
            <p>Doe</p>
            <h2>Blood Group</h2>
            <p>O+</p>
            <h2>Allergies</h2>
            <p>Peanut, Aspirin, Penicillin</p>
          </div>
          <div>
            <h2>Medical Condition</h2>
            <p>Asthma</p>
          </div>
        </div>
      </div>
      <div className="third-section-link">
        <Link className="navi-link" to="overview">
          Overview
        </Link>
        <Link className="navi-link" to="visit">
          Visits
        </Link>
        <Link className="navi-link" to="lab">
          Labs
        </Link>
        <Link className="navi-link" to="vaccine">
          Vaccines
        </Link>
        <Link className="navi-link" to="prescription">
          Prescription
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}