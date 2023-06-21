import React, { useEffect, useState } from "react";
import "../Record/Record.css";

import { BsArrowLeft } from "react-icons/bs";

import { Link, NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useServiceProviderValue } from "../ServiceProvider";
import { contracts } from "../hooks/UseContract";

function DoctorsRecords() {
  const {tempContract} = contracts();

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
  let defaultAccount = JSON.parse(localStorage.getItem("defaultAccount"));

  const [getFormattedRecords, setFormattedRecords] = useState([]);
  const [vitalSigns, setVitalSigns] = useState([]);
  const [treatmentDetails, setTreatmentDetails] = useState([]);
  const [vaccine, setVaccine] = useState([]);
  const [prescription, setPrescription] = useState([]);
  const [billing, setPatientBilling] = useState([]);
  const [service, setPatientService] = useState([]);
  const [amount, setPatientAmount] = useState([]);
  const [noAccessMsg, setNoAccessMsg] = useState("");
  const [hasAccess, setHasAccess] = useState(false);

  
  const hasAccessFunc = async () => {
    
    try {
      const checkAccess = await tempContract.hasAccess(defaultAccount,patientWalletId);
      setHasAccess(checkAccess);
      console.log(checkAccess);
      return checkAccess; // Return the result
    } catch (error) {
      console.error('Error executing has access:', error);
      return false; // Return false in case of an error
    }
  };

  const checkRecord = async () => {
    

    try {
      if (tempContract) {
        let record = await tempContract.getPatientRecord(patientWalletId);
        
        const formattedRecords = record.map(record => {
          return {
            vitalSigns: record.vitalSigns,
            treatmentDetails: record.treatmentDetails,
            vaccine: record.vaccine,
            prescription: record.prescription,
            billing: record.billing,
            service: record.service,
            amount: record.amount
          };
        });
        setFormattedRecords(formattedRecords.reverse());
        console.log(formattedRecords);
        setVitalSigns(formattedRecords.map((record) => record.vitalSigns));
        setTreatmentDetails(formattedRecords.map((record) => record.treatmentDetails));
        setVaccine(formattedRecords.map((record) => record.vaccine));
        setPrescription(formattedRecords.map((record) => record.prescription));
        setPatientBilling(formattedRecords.map((record) => record.billing));
        setPatientService(formattedRecords.map((record) => record.service));
        setPatientAmount(formattedRecords.map((record) => record.amount));
  
        localStorage.setItem('getFormattedRecords', JSON.stringify(getFormattedRecords));
        
        localStorage.setItem('vitalSigns', JSON.stringify(vitalSigns));
        localStorage.setItem('treatmentDetails', JSON.stringify(treatmentDetails));
        localStorage.setItem('vaccine', JSON.stringify(vaccine));
        localStorage.setItem('prescription', JSON.stringify(prescription));
        localStorage.setItem('billing', JSON.stringify(billing));
        localStorage.setItem('service', JSON.stringify(service));
        localStorage.setItem('amount', JSON.stringify(amount));
      } else {
        console.error('Contract is not available');
      };
    } catch (error) {
      console.error('Error checking record:', error);
    }
  };

  useEffect(() =>{
    hasAccessFunc();
  },[]);


  useEffect(() =>{
    localStorage.setItem('getFormattedRecords', JSON.stringify(getFormattedRecords));
  },[getFormattedRecords]);

  useEffect(() => {
    localStorage.setItem("vitalSigns", JSON.stringify(vitalSigns));
  }, [vitalSigns]);

  useEffect(() => {
    localStorage.setItem("treatmentDetails", JSON.stringify(treatmentDetails));
  }, [treatmentDetails]);

  useEffect(() => {
    localStorage.setItem("vaccine", JSON.stringify(vaccine));
  }, [vaccine]);

  useEffect(() => {
    localStorage.setItem("prescription", JSON.stringify(prescription));
  }, [prescription]);

  useEffect(() => {
    localStorage.setItem("billing", JSON.stringify(billing));
  }, [billing]);

  useEffect(() => {
    localStorage.setItem("service", JSON.stringify(service));
  }, [service]);

  useEffect(() => {
    localStorage.setItem("amount", JSON.stringify(amount));
  }, [amount]);



  useEffect(() => {
   
  if (defaultAccount) {
    hasAccessFunc() // Call the async function
      .then((access) => {
        if (access) {
          checkRecord();
        } else {
          setNoAccessMsg("Don't Have access to view");
        }
      })
      .catch((error) => {
        console.error('Error checking access:', error);
        setNoAccessMsg("An error occurred while checking access");
      });
  }
  console.log(index);
  console.log(patientWalletId);
}, [index, patientWalletId, defaultAccount]);

// useEffect(() => {
//   console.log(typeof defaultAccount);
//   console.log(typeof patientWalletId);
  
//   if (defaultAccount) {
//     if( hasAccessFunc()){
      
//       checkRecord();
//     }else{
//       setNoAccessMsg("Don't Have access to view") 
      
//     }
   
//   }
//   console.log(index);
//   console.log(patientWalletId);
// }, [index, patientWalletId, defaultAccount]);

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
          <NavLink activeClassName="active" to="doctorsprescription">
            <p>Prescription</p>
          </NavLink>
        </li>

      </div>
    
      <div>
         {hasAccess?        <Outlet />:<p>No access yet </p>
}
      </div>

    </div>
  );
}

export default DoctorsRecords;
