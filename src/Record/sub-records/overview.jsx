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
import { useNavigate } from "react-router-dom";


export default function Overview() {
  let vitalSigns = JSON.parse(localStorage.getItem("vitalSigns"));
  let treatmentDetails = JSON.parse(localStorage.getItem('treatmentDetails'));
  let vaccine = JSON.parse(localStorage.getItem('vaccine'));
  let prescription = JSON.parse(localStorage.getItem('prescription'));
  
  const navigate = useNavigate();
  return (
    <div className="overview-container">
      <div className="split-div">
      <p className="p-tag">Recent Report </p>
      <div className='select-folder'>
          <select name="link" id="link-id" onChange={(e)=> navigate(e.target.value)}>
            <option value="/Records/overview">overview</option>
            <option   value="/Records/visit">visit</option>
            <option   value="/Records/vaccine">vaccine</option>
            <option  value="/Records/prescription">prescription</option>
            <option  value="/Records/lab">lab</option>
          </select>
        </div>
      </div>
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
                     
                    <span style={{color:"#000"}}>{vitalSigns[vitalSigns.length - 1][4]}/70</span>
                    </p>
                  </div>
                  <div className="over-1-first-son">
                    <img src={picture10} className="img-love" alt="pic10" />
                    <p>
                      Heart Rate <br />
                      
                     <span style={{color:"#000"}}>{vitalSigns[vitalSigns.length - 1][1]} bpm</span>
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
                <div className="border-line"></div>
              <div className="over-1-2">
                <div className="over-1-first">
                  <div className="over-1-first-son">
                    <img src={picture11} className="img-love" alt="pic9" />
                    <p>
                      Blood Count <br />
                      
                     <span style={{color:"#000"}}>{vitalSigns[vitalSigns.length - 1][5]}-90</span>
                    </p>
                  </div>
                  <div className="over-1-first-son">
                    <img src={picture12} className="img-love" alt="pic10" />
                    <p>
                      Glucose Level <br />
                      
                     <span style={{color:"#000", fontWeight:"bold",}}>{vitalSigns[vitalSigns.length - 1][6]}ml</span>
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
                  <h2>{detail[1]}</h2>
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
                <h4>{medication[0]}</h4>
                <p>{medication[2]}</p>
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
