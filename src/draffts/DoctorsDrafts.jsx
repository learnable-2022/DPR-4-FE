import React, { useEffect, useState } from "react";
import emptyProfile from "../assets/ava3.png";
import "./draft.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import { useServiceProviderValue } from "../ServiceProvider";

export default function DoctorsDrafts() {
  const [{}, dispatch] = useServiceProviderValue();
  const navigate = useNavigate();
  const handle = (e) => {
    navigate(+1);
  };
  let counter = 0;
  const [number1, setNumber1] = useState(<RiNumber1 />);
  const [number2, setNumber2] = useState(<RiNumber2 />);
  const [number3, setNumber3] = useState(<RiNumber3 />);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const handleClick1 = (e) => {
    navigate("./");
    setNumber1(<TiTick className="tick" />);
    setNumber2(<RiNumber2 />);
    setNumber3(<RiNumber3 />);

    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
  };
  const handleClick2 = (e) => {
    setNumber2(<TiTick className="tick" />);
    setNumber1(<RiNumber1 />);
    setNumber3(<RiNumber3 />);
    setIsActive1(false);
    setIsActive2(true);
    setIsActive3(false);
  };
  const handleClick3 = (e) => {
    setNumber3(<TiTick className="tick" />);
    setNumber1(<RiNumber1 />);
    setNumber2(<RiNumber2 />);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(true);
  };
  useEffect(() => {
    navigate("./");
    setNumber1(<TiTick className="tick" />);
    setIsActive1(true);
  }, []);
  return (
    <div className="doctorsdraft">
      <header className="doctorsdraft_header">
        <p className="drafts_header_left"> Add Patient Record</p>
        <div className="drafts_header_right">
          <img src={emptyProfile} alt="patientspicture" />
          <p className="drafts_profile_name">Mrs Roseline Doe</p>
        </div>
      </header>
      <div className="navigation_section">
        <div
          className={isActive1 ? "blue link" : "number_1 circle link"}
          onClick={handleClick1}
        >
          {number1}
        </div>

        <div className="lines"></div>
        <Link to="report" className="link">
          <div
            className={isActive2 ? "blue" : "number_2 circle"}
            onClick={handleClick2}
          >
            {number2}
          </div>
        </Link>
        <div className="lines"></div>
        <Link to="finish" className="link">
          <div
            className={isActive3 ? "blue" : "number_3 circle"}
            onClick={handleClick3}
          >
            {number3}
          </div>
        </Link>
      </div>
      <div className="nav_title">
        <p className={isActive1 ? "title_blue" : ""}>Vitals</p>
        <p className={isActive2 ? "title_blue" : ""}>Report</p>
        <p className={isActive3 ? "title_blue" : ""}>Finish</p>
      </div>
      <div className="grant_access_div">
        <input
          className="access_input"
          type="text"
          placeholder="Enter Patients Wallet Address"
        />
        <button className="access_btn">Grant Access</button>
      </div>
      <Outlet className="draft_outlet" />
    </div>
  );
}
