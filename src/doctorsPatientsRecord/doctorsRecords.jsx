import React, { useEffect, useState } from "react";
import "../Record/Record.css";

import { BsArrowLeft } from "react-icons/bs";

import { Link, NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useServiceProviderValue } from "../ServiceProvider";

function DoctorsRecords() {
  const [{ index }, dispatch] = useServiceProviderValue();
  let patient_Image = localStorage.getItem("patient_image");
  let patient_Name = localStorage.getItem("patient_name");
  const [patientList, setPatientList] = useState("");

  const navigate = useNavigate();
  const handle = () => {
    navigate(-1);
  };
  let patientName = patientList[index]?.name;
  let patientImage = patientList[index]?.image;
  let patientGender = patientList[index]?.gender;
  let patientAge =
    new Date().getFullYear() -
    parseInt(patientList[index]?.dateOfBirth.split("-")[0]);
  let patientBlood = patientList[index]?.bloodgroup;
  let patientGeno = patientList[index]?.genotype;
  let patientHeight = patientList[index]?.height;
  let patientWeight = patientList[index]?.weight;
  let patientAllergies = patientList[index]?.allergies;
  let patientWalletId = patientList[index]?.walletId;

  useEffect(() => {
    const storedPatientList = localStorage.getItem("patient_list");
    const parsedPatientList = JSON.parse(storedPatientList);
    setPatientList(parsedPatientList);
  }, []);

  return (
    <div className="container">
      <nav className="nav-container">
        <div className="nav-container-left-reverse">
          <BsArrowLeft onClick={handle} style={{ cursor: "pointer" }} />
          <h2>Medical Record</h2>
        </div>
        <div className="nav-container-left">
          <BsArrowLeft onClick={handle} style={{ cursor: "pointer" }} />
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
              src={patientImage}
              style={{ borderRadius: "50%", border: "1px solid black" }}
              alt="bigpics"
            />
          </div>
          <div>
            <h2>{patientName}</h2>
            <div className="second-section-text">
              <div>
                <p>
                  Sex: <span>{patientGender}</span>
                </p>
                <p>
                  Age: <span>{patientAge}</span>
                </p>
                <p>
                  Blood Group:<span> {patientBlood}</span>
                </p>
                <p>
                  Genotype:<span> {patientGeno}</span>
                </p>
              </div>
              <div>
                <p>
                  Height: <span>{patientHeight}</span>
                </p>
                <p>
                  Weight:<span> {patientWeight}</span>
                </p>
                <p>
                  Allergies: <span>{patientAllergies}</span>
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
          <NavLink exact activeClassName="active" to="doctorsoverview">
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
          <NavLink activeClassName="active" to="doctorsprescription">
            <p>Prescription</p>
          </NavLink>
        </li>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default DoctorsRecords;
