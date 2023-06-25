import React, { useEffect, useState } from "react";
import "./PatientsProfile.css";

import emptyProfile from "../../assets/ava3.png";
import ProfileComponent from "../components/profileComponent";
function PatientsProfile() {
  const [patient_Image, setPatientImage] = useState("");
  const [patient_Name, setPatientName] = useState("");
  const [patient_Gender, setPatientGender] = useState("");
  const [patient_Age, setPatientAge] = useState("");
  const [patient_Blood, setPatientBlood] = useState("");
  const [patient_Geno, setPatientGeno] = useState("");
  const [patient_Height, setPatientHeight] = useState("");
  const [patient_Weight, setPatientWeight] = useState("");
  const [patient_Email, setPatientEmail] = useState("");
  const [patient_Alle, setPatientAlle] = useState("");
  const [patient_Wallet, setPatientWallet] = useState("");
  const [patient_First_Name, setPatientFirstName] = useState("");
  const [patient_Last_Name, setPatientLastName] = useState("");
  const [patient_address, setPatientAddress] = useState("");
  const [patient_city, setPatientCity] = useState("");
  const [patient_country, setPatientCountry] = useState("");
  const [patient_state, setPatientState] = useState("");
  const [patient_number, setPatientNumber] = useState("");

  useEffect(() => {
    let pat_Image = localStorage.getItem("patient_image");
    let pat_Name = localStorage.getItem("patient_name");
    let pat_Email = localStorage.getItem("patient_email");
    let patient_gender = localStorage.getItem("patient_gender");
    let patient_address = localStorage.getItem("patient_address");
    let patient_city = localStorage.getItem("patient_city");
    let patient_country = localStorage.getItem("patient_country");
    let patient_number = localStorage.getItem("patient_number");
    let patient_state = localStorage.getItem("patient_state");
    let patient_DOB = localStorage.getItem("patient_DOB");
    let patient_Blood = localStorage.getItem("patient_blood");
    let patient_Geno = localStorage.getItem("patient_genotype");
    let patient_Height = localStorage.getItem("patient_height");
    let patient_Weight = localStorage.getItem("patient_weight");
    let patient_Alle = localStorage.getItem("patient_allergies");
    let patient_wallet = localStorage.getItem("patient_walletId");
    let patient_first_name = localStorage.getItem("patient_firstName");
    let patient_last_name = localStorage.getItem("patient_lastName");
    console.log(patient_number);
    setPatientNumber(patient_number);
    setPatientAddress(patient_address);
    setPatientCity(patient_city);
    setPatientCountry(patient_country);
    setPatientGender(patient_gender);
    setPatientState(patient_state);

    setPatientAge(patient_DOB);

    setPatientBlood(patient_Blood);

    setPatientGeno(patient_Geno);

    setPatientHeight(patient_Height);

    setPatientWeight(patient_Weight);

    setPatientAlle(patient_Alle);

    setPatientFirstName(patient_first_name);
    setPatientLastName(patient_last_name);
    setPatientWallet(patient_wallet);
    setPatientImage(pat_Image);
    setPatientName(pat_Name);
    setPatientEmail(pat_Email);
  }, [patient_Image]);

  return (
    <div className="patientsprofile">
      <div className="left_side">
        <ProfileComponent
          profileImage={patient_Image ? patient_Image : emptyProfile}
          patientEmail={patient_Email}
          patientName={patient_Name}
        />
        <div className="bottom_left">
          <h1 className="_header">General Information</h1>
          <div className="_bottom_profile_details">
            <div className="left_section">
              <h3>First name</h3>
              <div>
                <p>
                  {patient_First_Name
                    ? patient_First_Name
                    : patient_Name.split(" ")[0]}
                </p>
              </div>
              <h3>Middle name</h3>
              <div>
                <p>
                  {patient_First_Name
                    ? patient_First_Name
                    : patient_Name.split(" ")[1]}
                </p>
              </div>
              <h3>Date of birth</h3>
              <div>
                <p>{patient_Age ? patient_Age : "-"}</p>
              </div>
            </div>
            <div className="right_section">
              <h3>Last name</h3>
              <div>
                <p>
                  {patient_Last_Name
                    ? patient_Last_Name
                    : patient_Name.split(" ")[1]}
                </p>
              </div>
              <h3>Gender</h3>
              <div>
                <p>{patient_Gender ? patient_Gender : "-"}</p>
              </div>
              <h3>Wallet Address</h3>
              <div>
                <p>{patient_Wallet ? patient_Wallet : "-"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_side">
        <div className="right_side_top">
          <h1 className="_header">Contact Information</h1>
          <div className="_bottom_profile_details">
            <div className="left_section">
              <h3>Address</h3>
              <div>
                <p>{patient_address ? patient_address : "-"}</p>
              </div>
              <h3>City</h3>
              <div>
                <p>{patient_city ? patient_city : "-"}</p>
              </div>
            </div>
            <div className="right_section">
              <h3>Country</h3>
              <div>
                <p>{patient_country ? patient_country : "-"}</p>
              </div>
              <h3>State</h3>
              <div>
                <p>{patient_state ? patient_state : "-"}</p>
              </div>
            </div>
          </div>
          <div className="_down_part">
            <h3>Phone number</h3>
            <div>
              <p>{patient_number ? patient_number : "-"}</p>
            </div>
            <h3>Email address</h3>
            <div>
              <p>{patient_Email ? patient_Email : "-"}</p>
            </div>
          </div>
        </div>

        <div className="bottom_right_side">
          <h1 className="_header">Biometric And Genetic Information</h1>
          <div className="top_section">
            <div className="left_div">
              <h3>Blood Group</h3>
              <div>
                <p>{patient_Blood ? patient_Blood : "-"}</p>
              </div>
            </div>
            <div className="right_div">
              <h3>Genotype</h3>
              <div>
                <p>{patient_Geno ? patient_Geno : "-"}</p>
              </div>
            </div>
          </div>
          <div className="card">
            <h3>Allergies</h3>
            <div>
              <p>{patient_Alle ? patient_Alle : "-"}</p>
            </div>
          </div>
          <div className="down_section">
            <div className="left_div">
              <h3>Weight(Kilograms)</h3>
              <div>
                <p>{patient_Weight ? patient_Weight : "-"}</p>
              </div>
            </div>
            <div className="right_div">
              <h3>Height(metres)</h3>
              <div>
                <p>{patient_Height ? patient_Height : "-"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientsProfile;
