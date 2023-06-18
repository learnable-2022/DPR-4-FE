import React, { useEffect, useState } from "react";
import "./DoctorsProfile.css";
import { Link } from "react-router-dom";
import profileImage from "../../assets/Ellipse1.png";
import { BiArrowBack } from "react-icons/bi";
import ProfileComponent from "../components/profileComponent";
import { setDate } from "date-fns";

function DoctorsProfile() {
  const [doctors_name, setName] = useState("");
  const [doctors_dob, setDate] = useState("");
  const [doctors_gender, setGender] = useState("");
  const [doctors_license, setLicense] = useState("");
  const [doctors_email, setEmail] = useState("");
  const [doctors_image, setImage] = useState("");
  const [doctors_hospital, setHospital] = useState("");
  const [doctors_address, setAddress] = useState("");
  const [doctors_country, setCountry] = useState("");
  const [doctors_number, setNumber] = useState("");
  const [doctors_origin, setOrigin] = useState("");
  const [doctors_residence, setResidence] = useState("");
  const [doctors_wallet, setWallet] = useState("");
  const [doctors_first_name, setFirstName] = useState("");
  const [doctors_last_name, setLastName] = useState("");

  useEffect(() => {
    let doctors_DOB = localStorage.getItem("doctor_DOB");

    let doctors_Gender = localStorage.getItem("doctor_gender");

    let doctors_License = localStorage.getItem("doctor_license");

    let doctors_Email = localStorage.getItem("doctor_email");

    let doctors_Image = localStorage.getItem("doctor_image");
    let doctors_Name = localStorage.getItem("doctor_name");
    let doctors_hospital = localStorage.getItem("doctor_hospital");
    let doctors_address = localStorage.getItem("doctor_address");
    let doctors_country = localStorage.getItem("doctor_country");
    let doctors_number = localStorage.getItem("doctor_number");
    let doctors_origin = localStorage.getItem("doctor_origin");
    let doctors_residence = localStorage.getItem("doctor_residence");
    let doctors_wallet = localStorage.getItem("doctor_wallet");
    let doctors_first_name = localStorage.getItem("doctor_firstname");
    let doctors_last_name = localStorage.getItem("doctor_lastname");
    setDate(doctors_DOB);
    setGender(doctors_Gender);
    setLicense(doctors_License);
    setEmail(doctors_Email);
    setImage(doctors_Image);
    setName(doctors_Name);
    setHospital(doctors_hospital);
    setAddress(doctors_address);
    setCountry(doctors_country);
    setNumber(doctors_number);
    setOrigin(doctors_origin);
    setResidence(doctors_residence);
    setWallet(doctors_wallet);
    setFirstName(doctors_first_name);
    setLastName(doctors_last_name);
  }, []);

  return (
    <div className="doctorsprofile">
      <div className="leftside">
        <div className="topleft">
          <Link to="/DocDashboard" className="link">
            <BiArrowBack className="back_arrow" />
          </Link>

          <img className="prof_img" src={doctors_image} alt="profileImage" />
          <div className="profile_details">
            <h2 className="name">Dr. {doctors_name}</h2>
            <p className="email">{doctors_email}</p>
            <Link to="/DocEditProfile" className="link">
              <button className="profile_btn">Edit profile</button>
            </Link>
          </div>
        </div>
        <div className="bottomleft">
          <h1 className="header">General Information</h1>
          <div className="bottom_profile_details">
            <div className="leftsection">
              <h3>First name</h3>
              <div>
                <p>
                  {doctors_first_name
                    ? doctors_first_name
                    : doctors_name.split(" ")[0]}
                </p>
              </div>
              <h3>Phone Number</h3>
              <div>
                <p>{doctors_number ? doctors_number : "-"}</p>
              </div>
              <h3>Date of birth</h3>
              <div>
                <p>{doctors_dob ? doctors_dob : "-"}</p>
              </div>
            </div>
            <div className="rightsection">
              <h3>Last name</h3>
              <div>
                <p>
                  {doctors_last_name
                    ? doctors_last_name
                    : doctors_name.split(" ")[1]}
                </p>
              </div>
              <h3>Gender</h3>
              <div>
                <p>{doctors_gender ? doctors_gender : "-"}</p>
              </div>
              <h3>Doctor’s ID</h3>
              <div>
                <p>{doctors_license ? doctors_license : "-"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rightside">
        <h1 className="header">Contact Information</h1>
        <div className="bottom_profile_details">
          <div className="leftsection">
            <h3>Address</h3>
            <div>
              <p>{doctors_address ? doctors_address : "-"}</p>
            </div>
            <h3>State of origin</h3>
            <div>
              <p>{doctors_origin ? doctors_origin : "-"}</p>
            </div>
          </div>
          <div className="rightsection">
            <h3>Country</h3>
            <div>
              <p>{doctors_country ? doctors_country : "-"}</p>
            </div>
            <h3>State of residence</h3>
            <div>
              <p>{doctors_residence ? doctors_residence : "-"}</p>
            </div>
          </div>
        </div>
        <div className="down_part">
          <h3>Wallet address</h3>
          <div>
            <p>{doctors_wallet ? doctors_wallet : "-"}</p>
          </div>
          <h3>Email address</h3>
          <div>
            <p>{doctors_email ? doctors_email : "-"}</p>
          </div>
          <h3>Hospital Name</h3>
          <div>
            <p>{doctors_hospital ? doctors_hospital : "-"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorsProfile;
