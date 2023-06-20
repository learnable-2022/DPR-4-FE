import React from "react";
import "../Record/Record.css";
import bigpic from "../assets/big.png";

export default function Labvisitreport() {
  let patient_Image = localStorage.getItem("patient_image");
  let patient_Name = localStorage.getItem("patient_name");
  let patient_gender = localStorage.getItem("patient_gender");
  let patient_DOB = localStorage.getItem("patient_DOB");
  let patient_Blood = localStorage.getItem("patient_blood");

  let patient_Geno = localStorage.getItem("patient_genotype");

  let patient_Height = localStorage.getItem("patient_height");

  let patient_Weight = localStorage.getItem("patient_weight");

  let patient_Alle = localStorage.getItem("patient_allergies");
  return (
    <>
      <div className="second-section">
        <div className="second-section-first">
          <div className="second-image">
            <img src={patient_Image} alt="bigpics" />
          </div>
          <div>
            <h2>{patient_Name}</h2>
            <div className="second-section-text">
              <div>
                <p>
                  Sex: <span>{patient_gender}</span>
                </p>
                <p>
                  Age:{" "}
                  <span>
                    {new Date().getFullYear() -
                      parseInt(patient_DOB.split("-")[0])}
                  </span>
                </p>
                <p>
                  Blood Group:<span> {patient_Blood}</span>
                </p>
                <p>
                  Genotype:<span> {patient_Geno}</span>
                </p>
              </div>
              <div>
                <p>
                  Height: <span>{patient_Height}</span> Metres
                </p>
                <p>
                  Weight:<span> {patient_Weight}</span> Kilogram
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
    </>
  );
}
