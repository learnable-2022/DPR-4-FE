import React, { useState } from "react";
import { useEffect } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsArrowLeft } from "react-icons/bs";
import smallLogo from "../assets/small.png";

import "./Record.css";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRequestProcessor } from "../api/requestProcessor";

export default function PatientsRecord() {
  let patient_Image = localStorage.getItem("patient_image");
  let patient_Name = localStorage.getItem("patient_name");
  let patient_gender = localStorage.getItem("patient_gender");
  let patient_DOB = localStorage.getItem("patient_DOB");
  let patient_Blood = localStorage.getItem("patient_blood");

  let patient_Geno = localStorage.getItem("patient_genotype");

  let patient_Height = localStorage.getItem("patient_height");

  let patient_Weight = localStorage.getItem("patient_weight");

  let patient_Alle = localStorage.getItem("patient_allergies");

  let patient_wallet = localStorage.getItem("patient_walletId");

  const { makeRequest } = useRequestProcessor();
  const { response, error } = makeRequest({ url: "/patient/", method: "GET" });
  console.log("response:", response, "error:", error);

  const navigate = useNavigate();
  const handle = () => {
    navigate(-1);
  };
  useEffect(() => {}, []);
  return (
    <div className="container">
      <nav className="nav-container">
        <div className="nav-container-left">
          <BsArrowLeft onClick={handle} style={{ cursor: "pointer" }} />
          <h2>Medical Record</h2>
        </div>
        <div className="nav-container-right">
          <div>
            <button style={{ cursor: "pointer" }}>share report</button>
          </div>
          <div>
            <IoIosNotificationsOutline />
          </div>
          <div className="nav-short">
            <img
              src={patient_Image ? patient_Image : smallLogo}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1px solid black",
              }}
              alt="frame"
            />

            <p>hi! {patient_Name}</p>
          </div>
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
          <div>
            <h2>{patient_Name.split(" ")[0]}</h2>
            <div className="second-section-text">
              <div>
                <p>
                  Sex: <span>{patient_gender ? patient_gender : "Nil"}</span>
                </p>
                <p>
                  Age:{" "}
                  <span>
                    {new Date().getFullYear() -
                      parseInt(patient_DOB.split("-")[0])}
                  </span>
                </p>
                <p>
                  Blood Group:
                  <span> {patient_Blood ? patient_Blood : "Nil"}</span>
                </p>
                <p>
                  Genotype:<span> {patient_Geno ? patient_Geno : "Nil"}</span>
                </p>
              </div>
              <div>
                <p>
                  Height: <span>{patient_Height ? patient_Height : "Nil"}</span>{" "}
                  Metres
                </p>
                <p>
                  Weight:
                  <span> {patient_Weight ? patient_Weight : "Nil"}</span>{" "}
                  Kilograms
                </p>
                <p>
                  Allergies: <span>{patient_Alle}</span>
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
          <Link className="navi-link" to="overview">
            <p>Overview</p>
          </Link>
        </li>
        <li>
          {" "}
          <Link className="navi-link" to="visit">
            <p>Visits</p>
          </Link>
        </li>
        <li>
          {" "}
          <Link className="navi-link" to="lab">
            <p>Labs</p>
          </Link>
        </li>
        <li>
          {" "}
          <Link className="navi-link" to="vaccine">
            <p>Vaccines</p>
          </Link>
        </li>
        <li>
          {" "}
          <Link className="navi-link" to="prescription">
            <p>Prescription</p>
          </Link>
        </li>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
