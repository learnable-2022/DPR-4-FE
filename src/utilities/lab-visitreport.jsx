import React from "react";
import "../Record/Record.css";
import bigpic from "../assets/big.png";

export default function Labvisitreport() {
  return (
    <>
      <div className="second-section">
        <div className="second-section-first">
          <div className="second-image">
            <img
              src={bigpic}
              style={{ borderRadius: "50%", border: "1px solid black" }}
              alt="bigpics"
            />
          </div>
          <div>
            <h2>Miss Roseline</h2>
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
    </>
  );
}
