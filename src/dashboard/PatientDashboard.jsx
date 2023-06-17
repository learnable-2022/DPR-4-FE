import React, {
  useContext,
  useState,
  useRef,
  useCallback,
  useEffect,
} from "react";

import "./PatientsDashboard.css";
import emptyProfile from "../assets/ava3.png";
import bpIcon from "../assets/bp_icon.svg";
import heartIcon from "../assets/heart.svg";
import pulseIcon from "../assets/pulse_icon.png";
import leftLine from "../assets/Line_9.png";
import redPulseIcon from "../assets/redpulse.svg";
import dotIcon from "../assets/dot.png";
import waveIcon from "../assets/wave.png";
import vetIcon from "../assets/vetbar.svg";
import vetIcon2 from "../assets/vetbar2.svg";
import EmptyCard from "./components/emptyCard";
import disease1 from "../assets/disease1.svg";
import disease2 from "../assets/disease2.svg";
import disease3 from "../assets/disease3.svg";
import drug1 from "../assets/drug1.svg";
import drug2 from "../assets/drug2.svg";
import drug3 from "../assets/drug3.svg";
import drug4 from "../assets/drug4.svg";
import notification from "../assets/Notification.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDropDownFill } from "react-icons/ri";

// for nav bar

import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { BsReverseLayoutTextSidebarReverse } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import { AiOutlineSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import ourlogo from "../assets/ourlogo.png";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";

// end for nav bar

export default function PatientDashboard() {
  let token = localStorage.getItem("patientToken");
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [patient_Name, setPatientName] = useState("");
  const [patient_Image, setPatientImage] = useState("");
  const [patient_Email, setPatientEmail] = useState("");
  const [patient_gender, setPatientGender] = useState("");
  const [patient_Age, setPatientAge] = useState("");
  const [patient_Blood, setPatientBlood] = useState("");
  const [patient_Geno, setPatientGeno] = useState("");
  const [patient_Height, setPatientHeight] = useState("");
  const [patient_Weight, setPatientWeight] = useState("");
  const [patient_Alle, setPatientAlle] = useState("");
  const [patient_WalletId, setPatientWallet] = useState("");
  const [patient_First_Name, setPatientFirstName] = useState("");
  const [patient_Last_Name, setPatientLastName] = useState("");

  const [data, setData] = useState(true);
  const drugs = [drug1, drug2, drug3, drug4];
  const [connectedWallet, setConnectedWallet] = useState(true);
  const diseases = [disease1, disease2, disease3];
  const mobileMenuRef = useRef();
  const mobileNavRef = useRef();
  const [navOpen, setIsNavOpen] = useState(false);
  const checkEffectName = localStorage.getItem("patient_name");
  const checkEffectImage = localStorage.getItem("patient_image");
  let checkEffectgender = localStorage.getItem("patient_gender");

  let checkEffectDOB = localStorage.getItem("patient_DOB");

  let checkEffectBlood = localStorage.getItem("patient_blood");

  let checkEffectGeno = localStorage.getItem("patient_genotype");

  let checkEffectHeight = localStorage.getItem("patient_height");

  let checkEffectWeight = localStorage.getItem("patient_weight");

  let checkEffectAlle = localStorage.getItem("patient_allergies");

  let checkEffectwallet = localStorage.getItem("patient_walletId");

  let checkEffectFirstName = localStorage.getItem("patient_firstName");

  let checkEffectLastName = localStorage.getItem("patient_lastName");

  const toggleNav = () => {
    setIsNavOpen(!navOpen);
  };

  const shareReport = () => {
    const options = {
      scrollY: -window.scrollY,
    };
    // html2canvas(screenshotRef.current, options).then((canvas) => {
    // const imageData = canvas.toDataURL();
    //shareScreenshot(imageData);
    // });
  };
  const closeOpenMenus = useCallback(
    (e) => {
      if (
        mobileMenuRef.current &&
        isDropOpen &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        setIsDropOpen(false);
      }
    },

    [isDropOpen]
  );
  const closeOpenNav = useCallback(
    (e) => {
      if (
        mobileNavRef.current &&
        navOpen === true &&
        !mobileNavRef.current.contains(e.target)
      ) {
        setIsNavOpen(false);
      }
    },
    [, navOpen]
  );
  let id = localStorage.getItem("patient_ID");

  const handleDropButtonClick = () => {
    setIsDropOpen(!isDropOpen);
  };
  //let patient_id = "64872c34b42f825762355d86";
  // const deletePatient = async () => {
  //   const response = await axios
  //     ?.delete(
  //       `https://medbloc-api.onrender.com/api/v1/patient/${patient_id}`,
  //       {
  //         headers: {
  //           "x-auth-token": token,
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //           "Access-Control-Allow-Origin": "*",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log("Patient successfully deleted");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const getPatientDetails = async () => {
    let PatientEmail = localStorage.getItem("patient_email");
    console.log(PatientEmail);
    const response = await axios
      ?.get(`https://medbloc-api.onrender.com/api/v1/patient/`, {
        headers: {
          "x-auth-token": token,
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log(res);
        const res1 = res?.data.find((item) => item.email === PatientEmail);
        console.log(res1);
        localStorage.setItem("patient_image", res1?.image);
        localStorage.setItem("patient_name", res1?.name);
        localStorage.setItem("patient_email", res1?.email);
        localStorage.setItem("patient_password", res1?.password);
        localStorage.setItem("patient_walletId", res1?.walletId);
        localStorage.setItem("patient_genotype", res1?.genotype);
        localStorage.setItem("patient_gender", res1?.gender);
        localStorage.setItem("patient_DOB", res1?.dateOfBirth);
        localStorage.setItem("patient_blood", res1?.bloodgroup);
        localStorage.setItem("patient_ID", res1?._id);
        localStorage.setItem("patient_middle_name", res1?.middleName);
        localStorage.setItem("patient_height", res1?.height);
        localStorage.setItem("patient_allergies", res1?.allergies);
        localStorage.setItem("patient_weight", res1?.weight);
        localStorage.setItem("patient_address", res1?.address);
        localStorage.setItem("patient_city", res1?.city);
        localStorage.setItem("patient_country", res1?.country);
        localStorage.setItem("patient_number", res1?.number);
        localStorage.setItem("patient_state", res1?.state);
        localStorage.setItem("patient_firstName", res1?.firstName);
        localStorage.setItem("patient_lastName", res1?.lastName);

        let patient_First_Name = localStorage.getItem("patient_firstName");
        setPatientFirstName(patient_First_Name);
        let patient_Last_Name = localStorage.getItem("patient_lastName");
        setPatientLastName(patient_Last_Name);
        let patient_Image = localStorage.getItem("patient_image");
        setPatientImage(patient_Image);
        let patient_Name = localStorage.getItem("patient_name");
        setPatientName(patient_Name);
        let patient_Email = localStorage.getItem("patient_email");
        setPatientEmail(patient_Email);
        let patient_gender = localStorage.getItem("patient_gender");
        setPatientGender(patient_gender);
        let patient_DOB = localStorage.getItem("patient_DOB");
        setPatientAge(patient_DOB);
        let patient_Blood = localStorage.getItem("patient_blood");
        setPatientBlood(patient_Blood);
        let patient_Geno = localStorage.getItem("patient_genotype");
        setPatientGeno(patient_Geno);
        let patient_Height = localStorage.getItem("patient_height");
        setPatientHeight(patient_Height);
        let patient_Weight = localStorage.getItem("patient_weight");
        setPatientWeight(patient_Weight);

        let patient_Alle = localStorage.getItem("patient_allergies");
        setPatientAlle(patient_Alle);
        let patient_wallet = localStorage.getItem("patient_walletId");
        setPatientWallet(patient_wallet);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  useEffect(() => {
    getPatientDetails();

    document.addEventListener("mousedown", closeOpenMenus);
    document.addEventListener("mousedown", closeOpenNav);

    return () => {
      document.removeEventListener("mousedown", closeOpenMenus);
      document.removeEventListener("mousedown", closeOpenNav);
    };
  }, [
    closeOpenMenus,
    checkEffectName,
    closeOpenNav,
    checkEffectAlle,
    checkEffectBlood,
    checkEffectDOB,
    checkEffectGeno,
    checkEffectHeight,
    checkEffectImage,
    checkEffectWeight,
    checkEffectgender,
    checkEffectwallet,
  ]); //]);

  return (
    <div className="patientdashboard">
      <nav
        className={navOpen ? "patient_dashboard_nav" : "closeNav"}
        ref={mobileNavRef}
      >
        <div className="_sideBar">
          <AiOutlineClose className="close_btn" onClick={toggleNav} />
          <div className="_center-div">
            <img src={ourlogo} alt="app-logo" />
            <p>
              Med<span>bloc</span>
            </p>
          </div>

          <div className="_mid-section">
            <Link to="/Dashboard" className="link">
              <RxDashboard style={{ color: "white" }} />
              <p>Dashboard</p>
            </Link>
            <Link to="/Records" className="link">
              <BsReverseLayoutTextSidebarReverse style={{ color: "white" }} />
              <p>Records</p>
            </Link>
            <Link to="/Billing" className="link">
              <FontAwesomeIcon icon={faCoins} style={{ color: "white" }} />
              <p>Billings</p>
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
                <FiLogOut style={{ color: "white" }} />
                <p>logout</p>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <header className="patientdashboard_header">
        <GiHamburgerMenu className="hamburger_icon" onClick={toggleNav} />
        <div className="left_side_header">
          <h1 className="h1_header_title">
            Welcome!{" "}
            {patient_First_Name
              ? patient_First_Name
              : checkEffectFirstName || patient_Name.split(" ")[0]}
            ,
          </h1>
        </div>
        <div className="right_side_header">
          <Link to="/share" className="link">
            <button className="share_btn" onClick={shareReport}>
              Share Report
            </button>
          </Link>
          <img src={notification} alt="notification" className="notifi_btn" />
          {/* <GrNotification className="profile_notification" /> */}

          <Link to="/Profile" className="link ">
            <div className="relative">
              <img
                className="profile_img"
                src={patient_Image ? patient_Image : checkEffectImage}
                alt="profile"
              />
            </div>
          </Link>

          <p className="profile_name">
            {patient_Name ? patient_Name : checkEffectName}
          </p>
          <RiArrowDropDownFill
            onClick={handleDropButtonClick}
            className="drop_down_btn"
          />
        </div>
      </header>
      {isDropOpen && (
        <div className="drop_content" ref={mobileMenuRef}>
          <Link to="/Profile" className="link ">
            <p className="drop_content_item">View Profile</p>
          </Link>
          <p className="drop_content_item">View Full Report</p>
        </div>
      )}

      <main className="patients_dashboard_main">
        <h1 className="responsive_h1_header_title">
          Welcome!{" "}
          {patient_First_Name
            ? patient_First_Name
            : checkEffectFirstName || patient_Name.split(" ")[0]}
          ,
        </h1>
        <div className="patientsvital">
          <div className="left_patient_vitals">
            <div className="image_div">
              <img
                src={patient_Image ? patient_Image : checkEffectImage}
                alt="patientspicture"
              />
            </div>

            <div className="info_div">
              <h2 className="name">
                {patient_Name ? patient_Name : checkEffectName}
              </h2>
              <div className="wrapper">
                <div className="first_info_div">
                  <p className="key">
                    Sex:{" "}
                    <strong className="value">
                      {patient_gender ? patient_gender : checkEffectgender}
                    </strong>
                  </p>

                  <p className="key">
                    Age:{" "}
                    <strong className="value">
                      {new Date().getFullYear() -
                        parseInt(patient_Age.split("-")[0])}
                    </strong>
                  </p>

                  <p className="key">
                    BloodGroup:{" "}
                    <strong className="value">
                      {patient_Blood ? patient_Blood : checkEffectBlood}
                    </strong>
                  </p>

                  <p className="key">
                    Genotype:{" "}
                    <strong className="value">
                      {patient_Geno ? patient_Geno : checkEffectGeno}
                    </strong>
                  </p>
                </div>
                <div className="second_info_div">
                  <p className="key">
                    Height:{" "}
                    <strong className="value">
                      {patient_Height ? patient_Height : checkEffectHeight}
                    </strong>{" "}
                    Metres
                  </p>

                  <p className="key">
                    Weight:{" "}
                    <strong className="value">
                      {patient_Weight ? patient_Weight : checkEffectWeight}
                    </strong>{" "}
                    Kilogram
                  </p>

                  <p className="key">
                    Allergies:{" "}
                    <strong className="value">
                      {patient_Alle ? patient_Alle : checkEffectAlle}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="right_patient_vitals">
            <button className="right_patient_vitals_btn">Patient</button>
            <p className="key">
              Primary site: <strong className="value">Nil</strong>
            </p>
            <p className="key">
              Stage: <strong className="value">Nil</strong>
            </p>
            <p className="key">
              Medical Condition: <strong className="value">Nil</strong>
            </p>
          </div>
        </div>
        {connectedWallet ? (
          <div className="middle_section">
            <div className="grant_access_div">
              <div className="access_div">
                <input
                  className="grant_access_input"
                  type="text"
                  placeholder="Enter Doctor's Wallet Address to grant access"
                />
                <button className="grant_access_btn">Grant Access</button>
              </div>
              <div className="revoke_div">
                <input
                  className="grant_access_input"
                  type="text"
                  placeholder="Enter Doctor's Wallet Address to grant access"
                />
                <button className="revoke_access_btn">Revoke Access</button>
              </div>
            </div>
            <div className="middle_section_header">
              <p>My Vitals</p>
              <button className="report_btn">View Full Report</button>
            </div>
            <div className="vitals_readings_cards">
              <div>
                <div className="card1">
                  <h4 className="card1_header">My Heart Condition</h4>
                  {data ? (
                    <div className="display_div">
                      <div className="top">
                        <div className="left_div">
                          <div
                            className="icon_div"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            {" "}
                            <img src={bpIcon} alt="patient" />
                          </div>
                          <div className="readings_div">
                            <p className="heading">Blood Status</p>
                            <p>
                              <strong className="value">116/70</strong>
                            </p>
                          </div>
                        </div>
                        <div className="right_div">
                          <div
                            className="icon_div"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            {" "}
                            <img src={heartIcon} alt="patient" />
                          </div>
                          <div className="readings_div">
                            <p className="heading">Heart Rate</p>
                            <p>
                              <strong className="value">120bpm</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="middle1">
                        <div className="middle1_left">
                          <img
                            className="pulse_icon"
                            alt="pics"
                            src={pulseIcon}
                          />
                          <div className="left_readings">
                            <img
                              className="left_line"
                              src={leftLine}
                              alt="line"
                            />
                            116
                            <br />
                            <span className="value_span">/70</span>
                            <img
                              className="bottom_left_line"
                              src={leftLine}
                              alt="line"
                            />
                          </div>
                        </div>
                        <div className="middle1_right">
                          <img
                            className="pulse_icon red_pulse_icon"
                            src={redPulseIcon}
                            alt="pics"
                          />
                          <div className="left_readings">
                            <img
                              className="left_line"
                              src={leftLine}
                              alt="line"
                            />
                            120
                            <br />
                            <span className="value_span1">bpm</span>
                            <img
                              className="bottom_left_line"
                              src={leftLine}
                              alt="line"
                            />
                          </div>
                        </div>
                      </div>
                      <hr color="#e7e6e6" />
                      <div className="middle2">
                        <div className="middle2_left">
                          <div
                            className="icon_div"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <img src={vetIcon} alt="icon" />
                          </div>
                          <div className="count_val_div">
                            <p>Blood Count</p>
                            <p>80/90</p>
                          </div>
                        </div>
                        <div className="middle2_right">
                          <div
                            className="icon_div"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            {" "}
                            <img src={vetIcon2} alt="patient" />{" "}
                          </div>
                          <div className="count_val_div">
                            <p>Glucose Level</p>
                            <p>240ml</p>
                          </div>
                        </div>
                      </div>
                      <div className="card1_down">
                        <div className="card1_down_left">
                          <div className="middle1_left">
                            <img
                              className="pulse_icon red_pulse_icon"
                              src={waveIcon}
                              alt="pics"
                            />
                            <div className="left_readings">
                              <img className="dot" src={dotIcon} alt="line" />
                              80
                              <br />
                              <span className="value_span">/90</span>
                            </div>
                          </div>
                        </div>

                        <div className="down_right">
                          <img
                            className="pulse_icon red_pulse_icon"
                            src={waveIcon}
                            alt="pics"
                          />
                          <div className="left_readings">
                            240
                            <br />
                            <span className="value_span1">ml</span>
                            <img
                              className="centre_line"
                              src={leftLine}
                              alt="line"
                            />
                            <img
                              className="dot"
                              src={dotIcon}
                              style={{ width: "5px", height: "5px" }}
                              alt="line"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <EmptyCard />
                  )}
                </div>
              </div>

              <div className="card2">
                <h4 className="card2_header">Recent Diagnosis</h4>
                {data ? (
                  <div>
                    <div className="diagnosis_container">
                      <div className="left">
                        <p className="diagnose_name">Malaria & Typoid</p>
                        <p className="diagnose_status">Active</p>
                      </div>
                      <div className="right">
                        <img src={diseases[0]} alt="diagnose_image" />
                      </div>
                    </div>
                    <div className="diagnosis_container">
                      <div className="left">
                        <p className="diagnose_name">Malaria & Typoid</p>
                        <p className="diagnose_status">Active</p>
                      </div>
                      <div className="right">
                        <img src={diseases[1]} alt="diagnose_image" />
                      </div>
                    </div>
                    <div className="diagnosis_container">
                      <div className="left">
                        <p className="diagnose_name">Malaria & Typoid</p>
                        <p className="diagnose_status">Active</p>
                      </div>
                      <div className="right">
                        <img src={diseases[2]} alt="diagnose_image" />
                      </div>
                    </div>

                    <div className="diagnosis_container">
                      <div className="left">
                        <p className="diagnose_name">Malaria & Typoid</p>
                        <p className="diagnose_status">Active</p>
                      </div>
                      <div className="right">
                        <img src={diseases[1]} alt="diagnose_image" />
                      </div>
                    </div>
                    <div className="diagnosis_container">
                      <div className="left">
                        <p className="diagnose_name">Malaria & Typoid</p>
                        <p className="diagnose_status">Active</p>
                      </div>
                      <div className="right">
                        <img src={diseases[0]} alt="diagnose_image" />
                      </div>
                    </div>
                    <div className="diagnosis_container">
                      <div className="left">
                        <p className="diagnose_name">Malaria & Typoid</p>
                        <p className="diagnose_status">Active</p>
                      </div>
                      <div className="right">
                        <img src={diseases[2]} alt="diagnose_image" />
                      </div>
                    </div>

                    <div className="diagnosis_container">
                      <div className="left">
                        <p className="diagnose_name">Malaria & Typoid</p>
                        <p className="diagnose_status">Active</p>
                      </div>
                      <div className="right">
                        <img src={diseases[0]} alt="diagnose_image" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <EmptyCard />
                )}
              </div>
              <div className="card3">
                <h4 className="card3_header">Active Medication</h4>
                {data ? (
                  <div>
                    <div className="med_div">
                      <div
                        className="drug_icon_div"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img src={drugs[0]} alt="drug" />
                      </div>
                      <div className="drug_name_div">
                        <p className="drug_name">Ciprofloxacin</p>
                        <p className="dosage">1 Tab twice daily</p>
                      </div>
                    </div>
                    <div className="med_div">
                      <div
                        className="drug_icon_div"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img src={drugs[1]} alt="drug" />
                      </div>
                      <div className="drug_name_div">
                        <p className="drug_name">Ciprofloxacin</p>
                        <p className="dosage">1 Tab twice daily</p>
                      </div>
                    </div>

                    <div className="med_div">
                      <div
                        className="drug_icon_div"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img src={drugs[2]} alt="drug" />
                      </div>
                      <div className="drug_name_div">
                        <p className="drug_name">Ciprofloxacin</p>
                        <p className="dosage">1 Tab twice daily</p>
                      </div>
                    </div>

                    <div className="med_div">
                      <div
                        className="drug_icon_div"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img src={drugs[3]} alt="drug" />
                      </div>
                      <div className="drug_name_div">
                        <p className="drug_name">Ciprofloxacin</p>
                        <p className="dosage">1 Tab twice daily</p>
                      </div>
                    </div>
                    <div className="med_div">
                      <div
                        className="drug_icon_div"
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img src={drugs[0]} alt="drug" />
                      </div>
                      <div className="drug_name_div">
                        <p className="drug_name">Ciprofloxacin</p>
                        <p className="dosage">1 Tab twice daily</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <EmptyCard />
                )}
              </div>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: "center", marginTop: "20%" }}>
            <p>You are not yet connected, Please click to the button connect</p>
            <button className="connect_meta">Connect to Metamask!</button>
          </div>
        )}
      </main>
    </div>
  );
}
