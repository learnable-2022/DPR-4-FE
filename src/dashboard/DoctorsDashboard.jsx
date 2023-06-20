import React, { useCallback, useEffect, useRef, useState } from "react";

import { CiCircleMore } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import "./dashboard.css";
import Calendar from "react-calendar";
import NavComponent from "./components/navComponent";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { useServiceProviderValue } from "../ServiceProvider";

//rescue kenneth
export default function DoctorsDashboard() {
  // const {auth} = useContext(StateContext);
  // const navigator = useNavigate();

  // console.log(auth.token);

  // if (auth.doctorToken) {
  //   return  navigator("./docdashboard");

  // }else if(!auth.doctorToken){

  //   return navigator("./landing");
  // }

  const navigator = useNavigate();

  const [{ allpatients }, dispatch] = useServiceProviderValue();
  let token = localStorage.getItem("doctorToken");
  let doctorID = localStorage.getItem("doctor_id");
  const [date, setDate] = useState(new Date());
  const [patients, setPatients] = useState([]);
  const [open, setOpen] = useState(
    Array.from({ length: patients.length }, () => false)
  );
  const [open2, setOpen2] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState(true);
  const options = { month: "short", year: "numeric" };
  const options2 = { day: "numeric", weekday: "long" };
  const mobileMenuRef = useRef();
  const [doctor_Name, setDoctorName] = useState("");
  const [doctor_Image, setDoctorImage] = useState("");
  const [doctor_Email, setDoctorEmail] = useState("");
  const [doctor_gender, setDoctorGender] = useState("");
  const [doctor_Age, setDoctorAge] = useState("");
  const [doctor_ID, setDoctorID] = useState("");
  const [doctor_License, setDoctorrLicense] = useState("");
  const [doctor_First_Name, setDoctorFirstName] = useState("");
  const [doctor_Last_Name, setDoctorLastName] = useState("");
  const [getPatientsList, setPatientList] = useState([]);

  // const [doctor_Height, setDoctorHeight] = useState("");
  // const [doctor_Weight, setDoctorWeight] = useState("");
  // const [doctor_Alle, setDoctorAlle] = useState("");

  let checkEffectDOB = localStorage.getItem("doctor_DOB");

  let checkEffectGender = localStorage.getItem("doctor_gender");

  let checkEffectLicense = localStorage.getItem("doctor_license");

  let checkEffectEmail = localStorage.getItem("doctor_email");

  let checkEffectImage = localStorage.getItem("doctor_image");

  let checkEffectName = localStorage.getItem("doctor_name");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredNames, setFilteredNames] = useState([]);

  // let checkEffectwallet = localStorage.getItem("doctor_walletId");
  // const closeOpenMenus = useCallback(
  //   (e) => {
  //     if (
  //       mobileMenuRef.current &&
  //       open &&
  //       !mobileMenuRef.current.contains(e.target)
  //     ) {
  //       setOpen(false);
  //     }
  //   },
  //   [open]
  // );
  const handleAction = (index) => {
    navigator("/DoctorsRecords");
    dispatch({ type: "SET_CLICKED_INDEX", index: index });
  };

  const getAllPatients = async () => {
    const response = await axios
      .get(`https://medbloc-api.onrender.com/api/v1/patient/`, {
        headers: {
          "x-auth-token": token,
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        const patientsData = res.data;
        localStorage.setItem("patient_list", JSON.stringify(patientsData));
        //setPatientList(patientsData);

        setPatients(res.data);
        // dispatch({ type: "SET_ALL_PATIENTS", allpatients: res.data });
        // console.log(allpatients);
      })
      .catch((error) => {});
  };
  // useEffect(() => {
  //   // setPatientList(filtered);
  //   if (searchTerm === "") {
  //     const storedPatientList = localStorage.getItem("patient_list");
  //     const parsedPatientList = JSON.parse(storedPatientList);
  //     setPatientList(parsedPatientList);
  //   } else {
  //     const filtered = getPatientsList.filter((name) =>
  //       name?.name.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //     setPatientList(filtered);
  //   }
  //   //
  // }, [searchTerm, getPatientsList]);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    getAllPatients();
    const storedPatientList = localStorage.getItem("patient_list");
    const parsedPatientList = JSON.parse(storedPatientList);
    setPatientList(parsedPatientList);

    const getDoctorsDetails = async () => {
      let DoctorEmail = localStorage.getItem("doctorEmail");
      const response = await axios
        .get(`https://medbloc-api.onrender.com/api/v1/doctor/`, {
          headers: {
            "x-auth-token": token,
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => {
          console.log(res);
          const res1 = res?.data.find((item) => item.email === DoctorEmail);
          console.log(res1);
          localStorage.setItem("doctor_image", res1?.image);
          localStorage.setItem("doctor_name", res1?.name);
          localStorage.setItem("doctor_email", res1?.email);
          localStorage.setItem("doctor_gender", res1?.gender);
          localStorage.setItem("doctor_DOB", res1?.dateOfBirth);
          localStorage.setItem("doctor_ID", res1?._id);
          localStorage.setItem("doctor_address", res1?.address);
          localStorage.setItem("doctor_license", res1?.license);
          localStorage.setItem("doctor_country", res1?.country);
          localStorage.setItem("doctor_number", res1?.phoneNumber);
          localStorage.setItem("doctor_origin", res1?.stateOfOrigin);
          localStorage.setItem("doctor_residence", res1?.stateOfResidence);
          localStorage.setItem("doctor_wallet", res1?.walletId);
          localStorage.setItem("doctor_hospital", res1?.hospital);
          localStorage.setItem("doctor_firstname", res1?.firstName);
          localStorage.setItem("doctor_lastname", res1?.lastName);

          let doctor_Last_Name = localStorage.getItem("doctor_lastname");
          let doctor_FirstName = localStorage.getItem("doctor_firstname");
          let doctor_Image = localStorage.getItem("doctor_image");
          let doctor_Name = localStorage.getItem("doctor_name");
          let doctor_Email = localStorage.getItem("doctor_email");
          let doctor_gender = localStorage.getItem("doctor_gender");
          let doctor_DOB = localStorage.getItem("doctor_DOB");
          let doctor_ID = localStorage.getItem("doctor_ID");

          setDoctorLastName(doctor_Last_Name);
          setDoctorFirstName(doctor_FirstName);
          setDoctorID(doctor_ID);
          setDoctorAge(doctor_DOB);
          setDoctorImage(doctor_Image);
          setDoctorGender(doctor_gender);
          setDoctorName(doctor_Name);
          setDoctorEmail(doctor_Email);

          let doctor_license = localStorage.getItem("doctor_license");
          let doctor_number = localStorage.getItem("doctor_number");

          setDoctorrLicense(doctor_license);
        })
        .catch((error) => {
          console.error(error.message);
        });

      // const res = response?.data.find((item) => item._ === doctorEmail);
      // console.log(res);
    };
    getDoctorsDetails();

    // document.addEventListener("mousedown", closeOpenMenus);
  }, [
    //closeOpenMenus,

    checkEffectDOB,
    checkEffectEmail,
    checkEffectGender,
    checkEffectImage,
    checkEffectLicense,
    checkEffectName,
  ]);
  {
    console.log(getPatientsList);
  }
  const handleButtonClick = (index) => {
    const updatedOpenStates = [...open];
    updatedOpenStates[index] = !updatedOpenStates[index];
    setOpen(updatedOpenStates);
  };
  const handleButtonClick2 = () => {
    setOpen2(!open2);
  };

  const handleAddCargo = (e) => {};
  console.log(patients);
  return (
    <div className="doctorsdashboard">
      <NavComponent
        name={
          doctor_First_Name ? doctor_First_Name : doctor_Name?.split(" ")[0]
        }
        image={doctor_Image}
      />

      {connectedWallet ? (
        <main>
          <div className="left_side_wrapper">
            <div className="left-side">
              <div className="header_div">
                <h2 className="title">Patient List</h2>
                <div className="search_div">
                  <input
                    className="doc_search"
                    type="text"
                    onChange={handleSearch}
                    value={searchTerm}
                    placeholder="Search"
                  />
                  <CiSearch className="search_icon" />
                </div>
              </div>
              <div className="title_div">
                <p>File no.</p>
                <p>Patient Name</p>
                <p></p>
              </div>

              <div className="patients_div">
                {getPatientsList?.map((patient, index) => {
                  return (
                    <div className="patients_info" key={index}>
                      <p>#{index}</p>
                      <p>{patient?.name}</p>
                      <CiCircleMore
                        className="circle_more"
                        onClick={() => handleButtonClick(index)}
                      />
                      {open[index] && (
                        <div class="dropdown" ref={mobileMenuRef}>
                          <ul>
                            <li onClick={() => handleAction(index)}>
                              Patients medical record
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="calendar-container">
              <Calendar
                onClickDay={handleAddCargo}
                onChange={setDate}
                value={date}
              />
            </div>
            <div className="schedule_div">
              <div className="schedule_wrapper">
                <div className="top">
                  <Link to="/DocSchedule" className="link">
                    <button>Schedule</button>
                  </Link>

                  <p>{date.toLocaleDateString("en-us", options)}</p>
                </div>
                <div className="middle">
                  <p>{date.toLocaleDateString("en-us", options2)}</p>
                </div>
                <div className="appointment_brief">
                  <p>Appointment with #2589 </p>
                  <p>12pm - 2pm</p>
                </div>
                {/* <div className="appointment_brief">
                <p>Appointment with #2589 </p>
                <p>12pm - 2pm</p>
              </div>
              <div className="appointment_brief">
                <p>Appointment with #2589 </p>
                <p>12pm - 2pm</p>
              </div>
              <div className="appointment_brief">
                <p>Appointment with #2589 </p>
                <p>12pm - 2pm</p>
              </div>
              <div className="appointment_brief">
                <p>Appointment with #2589 </p>
                <p>12pm - 2pm</p>
              </div> */}
              </div>
            </div>
          </div>
        </main>
      ) : (
        <div className="doc_connect_div">
          <p>You are not yet connected, Please click to the button connect</p>
          <button className="doc_connect_btn">Connect to Metamask</button>
        </div>
      )}
    </div>
  );
}
// rescue kenneth
