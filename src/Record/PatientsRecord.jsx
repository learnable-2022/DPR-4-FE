import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsArrowLeft } from "react-icons/bs";
import smallLogo from "../assets/small.png";
import { GiHamburgerMenu } from "react-icons/gi";
import html2canvas from "html2canvas";
import "./Record.css";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRequestProcessor } from "../api/requestProcessor";
import Dashboard from "../assets/Category.png";
import { Link } from "react-router-dom";
import record from "../assets/Document.png";
import billinglogo from "../assets/streamline_money-cash-coins-stack-accounting-billing-payment-stack-cash-coins-currency-money-finance.png";
import notification from "../assets/Notification.svg";
import logOut from "../assets/Logout.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import ourlogo from "../assets/Group 5.svg";
import { AiOutlineClose } from "react-icons/ai";
import { useServiceProviderValue } from "../ServiceProvider";

export default function PatientsRecord() {
  const [{}, dispatch] = useServiceProviderValue();
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
  const location = useLocation();
  const screenshotRef = useRef(null);
  const { makeRequest } = useRequestProcessor();
  const { response, error } = makeRequest({ url: "/patient/", method: "GET" });
  console.log("response:", response, "error:", error);

  const navigate = useNavigate();
  const handle = () => {
    navigate(-1);
  };
  useEffect(() => {}, []);
  const shareReport = () => {
    if (screenshotRef.current) {
      const body = document.body;
      const html = document.documentElement;
      const documentHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      const windowWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      const windowHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

      window.scrollTo(0, 0); // Scroll to the top of the page

      html2canvas(document.documentElement, {
        width: windowWidth,
        height: documentHeight,
        scrollX: window.scrollX,
        scrollY: window.scrollY,
        windowWidth,
        windowHeight,
      })
        .then((canvas) => {
          const imageDataURL = canvas.toDataURL();

          // const link = document.createElement("a");
          // link.href = canvas.toDataURL();
          // link.download = "screenshot.png";
          // link.click();

          dispatch({ type: "SET_SCREENSHOT", screenshot: imageDataURL });

          navigate("/share");
        })
        .catch((error) => {
          console.error("Error capturing screenshot:", error);
        });
    }
  };
  const [navOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!navOpen);
  };
  return (
    <div className="container" ref={screenshotRef}>
      <div
        className={navOpen ? "patient_dashboard_nav" : "closeNav"}
        // ref={mobileNavRef}
      >
        <div className="_sideBar">
          <AiOutlineClose className="close_btn" onClick={toggleNav} />
          <div className="_center-div">
            <img
              src={ourlogo}
              alt="app-logo"
              style={{ width: "100px", height: "70px" }}
            />
          </div>

          <div className="_mid-section">
            <Link to="/Dashboard" className="link">
              <img src={Dashboard} alt="dash-logo" />
              <p style={{ fontFamily: "poppins" }}>Dashboard</p>
            </Link>
            <Link to="/Records" className="link">
              <img src={record} alt="record-logo" />
              <p style={{ fontFamily: "poppins" }}>Records</p>
            </Link>
            <Link to="/Billing" className="link">
              <img src={billinglogo} alt="billing-logo" />
              <p style={{ fontFamily: "poppins" }}>Billings</p>
            </Link>
          </div>
          <div className="_lower-section">
            <div
              onClick={() => {
                localStorage.removeItem("patientToken");
                localStorage.removeItem("patientEmail");
              }}
            >
              <Link to="/" className="link">
                <img src={logOut} alt="logout" />
                <p style={{ fontFamily: "poppins" }}>logout</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <nav className="nav-container">
        <GiHamburgerMenu className="hamburger" onClick={toggleNav} />
        <div className="nav-container-left">
          <BsArrowLeft onClick={handle} style={{ cursor: "pointer" }} />
          <h1>Medical Record</h1>
        </div>
        <div className="nav-container-right">
          <div>
            <button style={{ cursor: "pointer" }} onClick={shareReport}>
              download report
            </button>
          </div>
          <div>
            {/* <img src={notification} alt="notification" className="notifi_btn" /> */}
          </div>
          <div className="nav-short">
            <img
              src={patient_Image ? patient_Image : smallLogo}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                boxShadow: "1px 2px 4px rgb(224 222 222)",
                border: "1px solid rgb(255 255 255)",
                borderRadius: " 50%",
                objectFit: "fill",
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
              style={{ borderRadius: "50%" }}
              alt="bigpics"
            />
          </div>
          <div className="second-section-inner">
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
        <div className="second-section-second"></div>
      </div>
      <div className="third-section-link">
        <li>
          <Link
            exact
            className={location.pathname === "/Records" ? "active" : ""}
            to=""
          >
            <p>Overview</p>
          </Link>
        </li>
        <li>
          {" "}
          <NavLink activeClassName="active" to="visit">
            <p>Visits</p>
          </NavLink>
        </li>
        {/* <li>
          {" "}
          <NavLink activeClassName="active" to="lab">
            <p>Labs</p>
          </NavLink>
        </li> */}
        <li>
          {" "}
          <NavLink activeClassName="active" to="vaccine">
            <p>Vaccines</p>
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink activeClassName="active" to="prescription">
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
