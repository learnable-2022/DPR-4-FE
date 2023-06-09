import { React, useEffect } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsArrowLeft } from "react-icons/bs";
import smallLogo from "../assets/small.png";
import bigpic from "../assets/big.png";
import "./Record.css";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRequestProcessor } from "../api/requestProcessor";
import axios from "axios";

export default function PatientsRecord() {
  let patient_Image = localStorage.getItem("patient_image");
  let patient_Name = localStorage.getItem("patient_name");

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
          <BsArrowLeft onClick={handle} />
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
            <img
              src={patient_Image ? patient_Image : smallLogo}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                border: "1px solid black",
              }}
              alt="frame"
            />
            <p>{patient_Name}</p>
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
