import React from "react";
import "../../Record/sub-records/sub-records.css";
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

export default function DoctorsOverview() {
  const navigate = useNavigate();
  return (
    <div className="overview-container">
      <div className="split-div">
      <p className="p-tag">Recent Report </p>
      <div className='select-folder'>
          <select name="link" id="link-id" onChange={(e)=> navigate(e.target.value)}>
            <option value="/DoctorsRecords/doctorsoverview">overview</option>
            <option   value="/DoctorsRecords/doctorsvaccine">vaccine</option>
            <option  value="/DoctorsRecords/doctorsprescription">prescription</option>
            <option  value="/DoctorsRecords/doctorslab">lab</option>
          </select>
        </div>
      </div>
      <div className="overview-sub-container">
     
        <div className="over-1">
          <div className="contain-container">
            <p className="sp-p"> My Heart Condition</p>
            <div className="new-class">
              <div className="over-1-1">
                <div className="over-1-first">
                  <div className="over-1-first-son">
                    <img src={picture9} className="img-love" alt="pic9" />
                    <p>
                      Blood Status <br />
                    <span style={{color:"#000"}}>  116/70</span>
                    </p>
                  </div>
                  <div className="over-1-first-son">
                    <img src={picture10} className="img-love" alt="pic10" />
                    <p>
                      Heart Rate <br />
                     <span style={{color:"#000"}}> 120bpm</span>
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
                     <span style={{color:"#000"}}> 80-90</span>
                    </p>
                  </div>
                  <div className="over-1-first-son">
                    <img src={picture12} className="img-love" alt="pic10" />
                    <p>
                      Glucose Level <br />
                     <span style={{color:"#000", fontWeight:"bold",}}> 240ml</span>
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
          </div>
        </div>
        <div className="over-2">
          <h2> Recent Diagnosis</h2>
          <div className="one">
            <div>
              {" "}
              <div className="two">
                {" "}
                <div>
                  <h2>Malaria & Typoid</h2>
                  <p>Active</p>
                </div>{" "}
                <div>
                  <img src={picture1} alt="pics" />
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div className="two">
                {" "}
                <div>
                  <h2>Chest Pain</h2>
                  <p>Last Month</p>
                </div>{" "}
                <div>
                  <img src={picture2} alt="pics" />
                </div>
              </div>{" "}
            </div>
            <div>
              {" "}
              <div className="two">
                {" "}
                <div>
                  <h2>Cold & Flu</h2>
                  <p>2 Month Ago</p>
                </div>{" "}
                <div>
                  <img src={picture3} alt="pics" />
                </div>
              </div>{" "}
            </div>
            <div>
              {" "}
              <div className="two">
                {" "}
                <div>
                  <h2>Cold & Flu</h2>
                  <p>Last Month</p>
                </div>{" "}
                <div>
                  <img src={picture3} alt="pics" />
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div className="two">
                {" "}
                <div>
                  <h2>Chest Pain</h2>
                  <p>Last Month</p>
                </div>{" "}
                <div>
                  <img src={picture2} alt="pics" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="over-3">
          <h4>Active Medication</h4>
          <div className="three">
            <div className="four">
              {" "}
              <div>
                <img src={picture7} alt="overview" />
              </div>
              <div>
                <h4>Ciprofloxacin</h4>
                <p>1 Tab twice daily</p>
              </div>{" "}
            </div>
            <div className="four">
              {" "}
              <div>
                <img src={picture6} alt="overview" />
              </div>
              <div>
                <h4>Amatem Forte soft gel</h4>
                <p>1 Tab twice daily</p>
              </div>
            </div>
            <div className="four">
              {" "}
              <div>
                <img src={picture5} alt="overview" />
              </div>
              <div>
                <h4>Vitamin C</h4>
                <p>1 Tab twice daily</p>
              </div>
            </div>
            <div className="four">
              {" "}
              <div>
                <img src={picture4} alt="overview" />
              </div>
              <div>
                <h4>Omega 3</h4>
                <p>1 Tab twice daily</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
