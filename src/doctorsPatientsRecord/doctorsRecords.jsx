import React from 'react';
import "../Record/Record.css";

import { BsArrowLeft } from "react-icons/bs";

import { Link, NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function DoctorsRecords() {

    let patient_Image = localStorage.getItem("patient_image");
    let patient_Name = localStorage.getItem("patient_name");


const navigate = useNavigate();
const handle=()=>{
    navigate(-1);
}

  return (
    <div className="container">
    <nav className="nav-container">
    <div className="nav-container-left-reverse">
        <BsArrowLeft onClick={handle} style={{cursor:"pointer"}} />
        <h2>Medical Record</h2>
      </div>
      <div className="nav-container-left">
        <BsArrowLeft onClick={handle} style={{cursor:"pointer"}} />
        <h2>Medical Record</h2>
      </div>
      <div className="nav-container-right">
        {/* <div>
          <button style={{cursor:"pointer"}}>share report</button>
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
          
          <p>hi! patient name</p>
        </div> */}
      </div>
    </nav>
    <div className="second-section">
      <div className="second-section-first">
        <div className="second-image">
          <img
            src={patient_Image}
            style={{ borderRadius: "50%", border: "1px solid black" }}
            alt="bigpics"
          />
        </div>
        <div className='second-section-inner'>
          <h2>patient name</h2>
          <div className="second-section-text">
            <div>
              <p>
                Sex: <span>Female</span>
              </p>
              <p>
                Age: <span>28</span>
              </p>
              <p>
                Blood Group:<span> O+</span>
              </p>
              <p>
                Genotype:<span> AA</span>
              </p>
            </div>
            <div>
              <p>
                Height: <span>5ft 8 inc</span>
              </p>
              <p>
                Weight:<span> 62kg</span>
              </p>
              <p>
                Allergies: <span>Peanut, Aspirin, Penicillin</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="second-section-second">
        <span className="patient">patient</span>
        <p>
          Cancer type: <span> Adenocarcinoma</span>
        </p>
        <p>
          {" "}
          Primary site: <span> Lungs</span>
        </p>
        <p>
          Stage:<span> Stage III</span>
        </p>
        <p>
          Medical Condition:<span> Asthma</span>
        </p>
      </div>
    </div>
    <div className="third-section-link">
      <li>
        <NavLink exact activeClassName="active" to="">
          <p>Overview</p>
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink activeClassName="active" to="doctorslab">
          <p>Labs</p>
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink activeClassName="active" to="doctorsvaccine">
          <p>Vaccines</p>
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink activeClassName="active"to="doctorsprescription">
          <p>Prescription</p>
        </NavLink>
      </li>
    </div>
    <div>
      <Outlet />
    </div>
  </div>
  )
}

export default DoctorsRecords
