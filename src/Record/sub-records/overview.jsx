import React from "react";
import "./sub-records.css";
import picture1 from "../../assets/Vector (1).png";
import picture2 from "../../assets/Vector (2).png";
import picture3 from "../../assets/Mask Group.png";
import picture4 from "../../assets/Frame 185 (2).png";
import picture5 from "../../assets/Frame 185 (4).png";
import picture6 from "../../assets/Frame 185 (5).png";
import picture7 from "../../assets/Group 91 (1).png";
import picture8 from "../../assets/Group 88.png";
import picture9 from "../../assets/Frame 185 (1).png";
import picture10 from "../../assets/Frame 185.png";
import picture11 from "../../assets/Frame 185 (3).png";
import picture12 from "../../assets/Group 91.png";


export default function Overview() {
  let vitalSigns = JSON.parse(localStorage.getItem("vitalSigns"));
  let treatmentDetails = JSON.parse(localStorage.getItem('treatmentDetails'));
  let vaccine = JSON.parse(localStorage.getItem('vaccine'));
  let prescription = JSON.parse(localStorage.getItem('prescription'));
  
  return (
    <div className="overview-container">
      <p className="p-tag">Recent Report </p>
      <div className="overview-sub-container">
        <div className="over-1">
          <div className="contain-container">
            <p className="sp-p"> My Heart Condition</p>
            {vitalSigns.length > 0 ? (
            <div className="new-class">
              <div className="over-1-1">
                <div className="over-1-first">
                  <div className="over-1-first-son">
                    <img src={picture9} className="img-love" alt="pic9" />
                    <p>
                      Blood Status <br />
                      {vitalSigns[0][5]}
                    </p>
                  </div>
                  <div className="over-1-first-son">
                    <img src={picture10} className="img-love" alt="pic10" />
                    <p>
                      Heart Rate <br />
                      {vitalSigns[0][1]}
                    </p>
                  </div>
                </div>
                <div className="over-1-second-son">
                  <div>
                    <img src={picture8} alt="pics8" />
                  </div>
                  <div>
                    <img src={picture8} alt="pics8" />
                    
                  </div>
                </div>
              </div>
              <div className="over-1-2">
                <div className="over-1-first">
                  <div className="over-1-first-son">
                    <img src={picture11} className="img-love" alt="pic9" />
                    <p>
                      Blood Count <br />
                      {vitalSigns[0][6]}-90
                    </p>
                  </div>
                  <div className="over-1-first-son">
                    <img src={picture12} className="img-love" alt="pic10" />
                    <p>
                      Glucose Level <br />
                      {vitalSigns[0][6]}ml
                    </p>
                  </div>
                </div>
                <div className="over-1-second-son">
                  <div>
                    <img src={picture8} alt="pics8" />
                  </div>
                  <div>
                    <img src={picture8} alt="pics8" />
                  </div>
                </div>
              </div>
            </div>
            ): null}
           
          </div>
        </div>
        <div className="over-2">
          <h2> Recent Diagnosis</h2>
          {treatmentDetails.length > 0 ? (
          <div className="one">
            {treatmentDetails.slice(0, 5).map((detail, index) => (
            <div>
             
              <div className="two" key={index}>
                
                <div>
                  <h2>{detail}</h2>
                  <p>Active</p>
                </div>
                <div>
                  <img src={picture1} alt="pics" />
                </div>
              </div>
            </div>
            ))}
            
          </div>
          ): null}
        </div>
        <div className="over-3">
          <h4>Active Medication</h4>
          {prescription.length > 0 ? (
          <div className="three">
          {prescription.slice(0, 5).map((medication, index) => (
            <div className="four">
            
              <div key={index}>
                <img src={picture7} alt="overview" />
              </div>
              <div>
                <h4>{medication}</h4>
                <p>1 Tab twice daily</p>
              </div>
            </div>
            ))}
          </div>
          ): null}
        </div>
      </div>
    </div>
  );
}
