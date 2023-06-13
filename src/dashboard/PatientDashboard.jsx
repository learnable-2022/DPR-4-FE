import React, { useContext, useState, useEffect } from "react";
import { GrNotification } from "react-icons/gr";
import "./PatientsDashboard.css";
import emptyProfile from "../assets/ava3.png";
import bpIcon from "../assets/bp_icon.svg";
import heartIcon from "../assets/heart.svg";
import pulseIcon from "../assets/pulse_icon.png";
import leftLine from "../assets/Line_9.png";
import redPulseIcon from "../assets/redpulse.svg";
import dotIcon from "../assets/dot.png";
import waveIcon from "../assets/wave.png";
import heartIcon2 from "../assets/heart1.png";
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
import axios from "axios";
import { useRequestProcessor } from "../api/requestProcessor";
import { Link, useNavigate } from "react-router-dom";
import StateContext from "../stateProvider/stateprovider";
import abi from "../abi.json";
import { ethers } from 'ethers';

export default function PatientDashboard() {
  // const {auth} = useContext(StateContext);
  // const patientNavigator = useNavigate();

  // console.log(auth.token);

  // if (auth.doctorToken) {
  //   return  patientNavigator("./docdashboard");

  // }else if(!auth.doctorToken){

  //   return patientNavigator("./landing");
  // }
  let PatientId = localStorage.getItem("patient_id");
  let PatientEmail = localStorage.getItem("patientEmail");

  let token = localStorage.getItem("patientToken");
  // console.log(PatientId);

  // const { makeRequest } = useRequestProcessor();
  // const { response, error } = makeRequest({
  //   url: "/patient/",
  //   method: "GET",
  // });
  // console.log(response);
  // console.log("response:", response, "error:", error);

  // const getUser = response?.data.find((item) => item._id === PatientId);
  // const getAll = response?.data.map((item) => item._id);

  // console.log(getUser?.name);
  const [patientName, setPatientName] = useState("");
  const [patientImage, setPatientImage] = useState("");
  const [data, setData] = useState(true);
  const drugs = [drug1, drug2, drug3, drug4];
  const [connectedWallet, setConnectedWallet] = useState(false);
  const diseases = [disease1, disease2, disease3];


  let contractAddress = "0xd018103D21Cc9ae90a5Bc23aFB920F95A1C140D2";
  const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect to Metamask!');

	const [provider, setProvider] = useState(null);
	const [signer, setSigner] = useState(null);
	const [contract, setContract] = useState(null);
  const [getForm , setGetForm] = useState('');
  const [getFormattedRecords , setFormattedRecords] = useState([["45","76","68"],[],[]]);
  const [getMedication , setMedication] = useState([]);
  const [getDiagnosis , setDiagnosis] = useState([]);

  const connectWalletHandler = () =>{

    if (window.ethereum && window.ethereum.isMetaMask) {

  window.ethereum.request({ method: 'eth_requestAccounts'})
  .then(result => {
    accountChangedHandler(result[0]);
    setConnectedWallet(true);
    console.log(defaultAccount);
  
    // setConnButtonText('Wallet Connected');
  })
  .catch(error => {
    setErrorMessage(error.message);
  
  });

} else {
  console.log('Need to install MetaMask');
  setErrorMessage('Please install MetaMask browser extension to interact');
}
};

const updateEthers = async () => {
  try {
    if (window.ethereum && window.ethereum.isMetaMask) {
      let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
  setProvider(tempProvider);
  

  let tempSigner = tempProvider.getSigner();
  setSigner(tempSigner);
  console.log(tempSigner);
  let tempContract = new ethers.Contract(contractAddress, abi, tempSigner);
  setContract(tempContract);
  // console.log(tempContract);
  
  
      
      
    } else {
      console.error('Please install MetaMask or use a compatible Ethereum browser extension.');
    }
  } catch (error) {
    console.error('Error updating Ethers:', error);
  }
};


const accountChangedHandler = (newAccount) => {
setDefaultAccount(newAccount);
};


const grantDoctorAccess = async (e) => {

  try{
      if(defaultAccount == null && getForm == '')return ;
      let access = await contract.grantAccess( getForm,defaultAccount);
      console.log("Access Granted");
  }catch(err){

  }
 
};

const revokeDoctorAccess = async (e) => {

  try{
      if(defaultAccount == null && getForm == '')return ;
      let access = await contract.revokeAccess( getForm,defaultAccount);
      console.log("Access Granted");
  }catch(err){

  }
 
};



const checkRecord = async () => {
  try {
    if (contract) {
      let record = await contract.getPatientRecord(defaultAccount);
      
      const formattedRecords = record.map(record => {
        return {
          vitalSigns: record.vitalSigns.slice(-5),
          treatmentDetails: record.treatmentDetails.slice(-5),
          vaccine: record.vaccine.slice(-5),
          prescription: record.prescription.slice(-5)
        };
        
      });
      // setFormattedRecords(formattedRecords);
      
      // const lastFiveRecords = formattedRecords.map(record => {
        //   return {
          //     vitalSigns: record.vitalSigns.slice(-5),
      //     treatmentDetails: record.treatmentDetails.slice(-5), // Get the last 5 entries
      //     vaccine: record.vaccine.slice(-5),
      //     prescription: record.prescription.slice(-5) // Get the last 5 entries
      //   };
      // });
      // console.log(formattedRecords);

      for (let i = 0; i < formattedRecords.length; i++) {
        setDiagnosis(formattedRecords[i].treatmentDetails);
        setMedication(formattedRecords[i].prescription);
        console.log(getDiagnosis);
      };
      
      
      
    } else {
      console.error('Contract is not available');
    };
  } catch (error) {
    console.error('Error checking record:', error);
  }
};

// console.log(getFormattedRecords);

const generateDrugPic = () => {
    let number = Math.floor(Math.random() * 4);
    let val = number;

    return val;
  };
  const generateDiseasePic = () => {
    let number1 = Math.floor(Math.random() * 3);
    let val = number1;

    return val;
  };
  let patient_Image = localStorage.getItem("patient_image");
  let patient_Name = localStorage.getItem("patient_name");
  useEffect(() => {
    const getPatientDetails = async () => {
      const response = await axios.get(
        `https://medbloc-api.onrender.com/api/v1/patient/`,
        {
          headers: {
            "x-auth-token": token,
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      console.log(response);
      const res = response?.data.find((item) => item.email === PatientEmail);
      console.log(res);
      localStorage.setItem("patient_image", res.image);
      localStorage.setItem("patient_name", res.name);
    };
    connectWalletHandler();
    updateEthers();
    checkRecord();
    getPatientDetails();
  }, []);
  return (
    <div className="patientdashboard">
      <header className="patientdashboard_header">
        <div className="left_side_header">
          <h1>Welcome! {patient_Name?.split(" ")[0]},</h1>
        </div>
        <div className="right_side_header">
          <button className="share_btn">Share Report</button>
          <GrNotification className="profile_notification" />
          <Link to="/Profile" className="link">
            <img
              className="profile_img"
              src={patient_Image ? patient_Image : emptyProfile}
              alt="profile"
            />
          </Link>

          <p className="profile_name">{patient_Name}</p>
        </div>
      </header>

      <main className="patients_dashboard_main">
        <div className="patientsvital">
          <div className="left_patient_vitals">
            <div className="image_div">
              <img
                src={patient_Image ? patient_Image : emptyProfile}
                alt="patientspicture"
              />
            </div>

            <div className="info_div">
              <h2 className="name">{patient_Name}</h2>
              <div className="wrapper">
                <div className="first_info_div">
                  <p className="key">
                    Sex: <strong className="value">Female</strong>
                  </p>

                  <p className="key">
                    Age: <strong className="value">28</strong>
                  </p>

                  <p className="key">
                    BloodGroup: <strong className="value">Nil</strong>
                  </p>

                  <p className="key">
                    Genotype: <strong className="value">Nil</strong>
                  </p>
                </div>
                <div className="second_info_div">
                  <p className="key">
                    Height: <strong className="value">Nil</strong>
                  </p>

                  <p className="key">
                    Weight: <strong className="value">Nil</strong>
                  </p>

                  <p className="key">
                    Allergies: <strong className="value">Nil</strong>
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
            <input
              name="doctorAddress"
                className="grant_access_input"
                type="text"
                onChange={(e)=>setGetForm(e.target.value)}
                placeholder="Enter Doctor's Wallet Address to grant access"
              />
              <button onClick={()=>grantDoctorAccess()}  className="grant_access_btn">Grant Access</button>
              <input
              name="doctorAddress"
                className="grant_access_input"
                type="text"
                onChange={(e)=>setGetForm(e.target.value)}
                placeholder="Enter Doctor's Wallet Address to revoke access"
              />
              <button onClick={()=>revokeDoctorAccess()}  className="revoke_access_btn">Revoke Access</button>
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
                    <div>
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
                        <img
                          src={diseases[generateDiseasePic()]}
                          alt="diagnose_image"
                        />
                      </div>
                    </div>
                    <div className="diagnosis_container">
                      <div className="left">
                        <p className="diagnose_name">Malaria & Typoid</p>
                        <p className="diagnose_status">Active</p>
                      </div>
                      <div className="right">
                        <img
                          src={diseases[generateDiseasePic()]}
                          alt="diagnose_image"
                        />
                      </div>
                    </div>
                    <div className="diagnosis_container">
                      <div className="left">
                        <p className="diagnose_name">Malaria & Typoid</p>
                        <p className="diagnose_status">Active</p>
                      </div>
                      <div className="right">
                        <img
                          src={diseases[generateDiseasePic()]}
                          alt="diagnose_image"
                        />
                      </div>
                    </div>

                    <div className="diagnosis_container">
                      <div className="left">
                        <p className="diagnose_name">Malaria & Typoid</p>
                        <p className="diagnose_status">Active</p>
                      </div>
                      <div className="right">
                        <img
                          src={diseases[generateDiseasePic()]}
                          alt="diagnose_image"
                        />
                      </div>
                    </div>
                    <div className="diagnosis_container">
                      <div className="left">
                        <p className="diagnose_name">Malaria & Typoid</p>
                        <p className="diagnose_status">Active</p>
                      </div>
                      <div className="right">
                        <img
                          src={diseases[generateDiseasePic()]}
                          alt="diagnose_image"
                        />
                      </div>
                    </div>
                    <div className="diagnosis_container">
                      <div className="left">
                        <p className="diagnose_name">Malaria & Typoid</p>
                        <p className="diagnose_status">Active</p>
                      </div>
                      <div className="right">
                        <img
                          src={diseases[generateDiseasePic()]}
                          alt="diagnose_image"
                        />
                      </div>
                    </div>

                    <div className="diagnosis_container">
                      <div className="left">
                        <p className="diagnose_name">Malaria & Typoid</p>
                        <p className="diagnose_status">Active</p>
                      </div>
                      <div className="right">
                        <img
                          src={diseases[generateDiseasePic()]}
                          alt="diagnose_image"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <EmptyCard />
                )}
              </div>
              {}
              <div className="card3">
                <h4 className="card3_header">Active Medication</h4>
                { getFormattedRecords ? getFormattedRecords?.map((meds)=>(
                  meds?.prescription?.map((drug)=>(
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
                        <img src={drugs[generateDrugPic()]} alt="drug" />
                      </div>
                      <div className="drug_name_div">
                        <p className="drug_name">{drug[0]}</p>
                        <p className="dosage">{drug[1]}</p>
                      </div>
                    </div>
                    </div>

                  ))
                )): <EmptyCard />}
                  
                 
              </div>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: "center", marginTop: "20%" }}>
            <p>You are not yet connected, Please click to the button connect</p>
            <button className="connect_meta" onClick={connectWalletHandler}>{connButtonText}</button>
          </div>
        )}
      </main>
    </div>
  );
}
