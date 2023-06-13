import React, { useEffect, useRef } from "react";
import "./PatientsEditProfile.css";
import emptyProfile from "../../assets/ava3.png";
import States from "../data/states";
import Months from "../data/months";
import Cities from "../data/cities";
import { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { BsCameraFill } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";

function PatientsEditProfile() {
  const inputRef = useRef(null);
  let patient_Image = localStorage.getItem("patient_image");
  let patientID = localStorage.getItem("patient_ID");
  let token = localStorage.getItem("patientToken");
  const [value, setValue] = useState("");
  const [NoImage, setNoImageMsg] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [data, setData] = useState();
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [year, setYear] = useState("");
  let thisYear = new Date().getFullYear();
  const [isLoading, setIsLoading] = useState(false);

  let allYears = [];
  // handler to set the state of value of selected country
  const changeHandler = (value) => {
    setValue(value);
  };
  //Handler function to set selected states
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };
  // handler function to set selected state
  const handleSelectedCity = (e) => {
    setSelectedCity(e.target.value);
  };
  const saveProfile = () => {
    if (data) {
      UpdatePatientDetails();
    } else {
      setNoImageMsg("Please Select an Image before Saving");
      setTimeout(() => {
        setNoImageMsg("");
      }, 3000);
    }
  };

  let email = localStorage.getItem("patient_email");
  let password = localStorage.getItem("patient_password");
  let name = localStorage.getItem("patient_name");
  let walletId = localStorage.getItem("patient_walletId");
  let gpassword = localStorage.getItem("patient_password");
  const UpdatePatientDetails = async () => {
    setIsLoading(true);

    const response = await axios
      .put(
        `https://medbloc-api.onrender.com/api/v1/patient/${patientID}`,
        {
          name: name,
          email: email,
          password: password,
          walletId: walletId,
          image: data,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",

            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((response) => {
        console.log(response);
        localStorage.setItem("patient_image", response?.data.image);
        localStorage.setItem("patient_name", response?.data.name);
        console.log(localStorage.getItem("patient_image"));
        console.log(localStorage.getItem("patient_name"));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };
  const availableCities = Cities?.find((s) => s.name === selectedState);
  // handler to set the data of the selected image to "data" state
  const handleChange = (e) => {
    const data = new FileReader();

    data.addEventListener("load", () => {
      setData(data?.result);
    });
    if (e.target.files[0]) {
      data.readAsDataURL(e.target.files[0]);
    }
  };
  //function to handle year change selection
  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  // function to set style on react Select element
  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      // This line disable the blue border
      boxShadow: "none",
    }),
  };
  useEffect(() => {
    inputRef.current.focus();
  });

  // function to set states for state and lga selection

  return (
    <div className="patientseditprofile">
      <div className="left_side-">
        <div className="topleft-">
          <Link to="/Profile" className="link">
            <BiArrowBack className="back_arrow" />
          </Link>
          <div className="select_image_div-">
            <label for="inputTag">
              <BsCameraFill className="camera_icon-" />
              <input
                className="p_input"
                id="inputTag"
                onChange={handleChange}
                type="file"
              />
              <br />
              {data ? (
                <img
                  style={{ objectFit: "fill" }}
                  src={data}
                  alt="profileImage"
                />
              ) : (
                <img
                  src={patient_Image ? patient_Image : emptyProfile}
                  alt="profileImage"
                />
              )}
            </label>
          </div>

          <div className="profile_details-">
            <h2 className="name-">Dr. chukwuemeka James Eze</h2>
            <p className="email-">Chukwuemekaeeze@gmail.com</p>
            <button
              className="profile_btn-"
              onClick={saveProfile}
              disabled={isLoading}
            >
              {isLoading ? <FaSpinner className="spin" /> : "Save Changes"}
            </button>
            {<p style={{ color: "red", fontSize: "12px" }}>{NoImage}</p>}
          </div>
        </div>

        {/* LEFT SIDE BOTTOM LEFT */}

        <div className="_bottom_left-">
          <h1 className="header-">General Information</h1>
          <div className="_bottom_profile_details-">
            {/* BOTTOM LEFT LEFT SECTION  */}
            <div className="_left_section-">
              <h3 className="label-">First name</h3>
              <div className="input_div-">
                <p className="input_para-">
                  <input
                    ref={inputRef}
                    className="p_input"
                    type="text "
                    placeholder="Enter First Name"
                  />
                </p>
              </div>
              <h3 className="label-">Middle name</h3>
              <div className="input_div-">
                <p className="input_para-">
                  <input
                    className="p_input"
                    type="text "
                    placeholder="Enter Middle Name"
                  />
                </p>
              </div>
              <h3 className="label-">Date of birth</h3>
              <div className="input_div-">
                <p className="input_label-">
                  <input
                    className="p_input"
                    type="date"
                    placeholder="Select Date of Birth"
                  />
                </p>
              </div>
            </div>
            {/* END OF BOTTOM LEFT LEFT SECTION */}

            {/* BOTTOM LEFT RIGHT SECTION */}
            <div className="_right_section-">
              <h3 className="label-">Last name</h3>
              <div className="input_div-">
                <p className="input_para-">
                  <input
                    className="p_input"
                    type="text "
                    placeholder="Enter Last Name"
                  />
                </p>
              </div>
              <h3 className="label-">Gender</h3>
              <div className="input_div-">
                <p className="input_para-">
                  <select
                    className="select-"
                    name="gender"
                    id="gender" /*onChange={""}*/
                  >
                    <option value={""}>Male</option>
                    <option value={""}>Female</option>
                  </select>
                </p>
              </div>
            </div>
            {/* END OF BOTTOM LEFT RIGHT SECTION */}
          </div>
        </div>
        <p
          style={{ marginTop: "1rem", marginLeft: "1rem", marginRight: "1rem" }}
        >
          Notice: If you have more than one account with the same email address
          on file, you will not be able to use that email address as a username
          to sign in.
        </p>
        {/* END OF  LEFT SIDE BOTTOM LEFT */}
      </div>
      {/* END OF LEFT SIDE */}

      {/* RIGHT SIDE*/}
      <div className="_right_side-">
        {/* TOP RIGHT SIDE */}
        <div className="right_top_side-">
          <h1 className="header-">Contact Information</h1>
          <div className="_bottom_profile_details-">
            <div className="_left_section-">
              <h3 className="label-">Address</h3>
              <div className="input_div-">
                <p className="input_para-">
                  <input
                    className="p_input"
                    type="text "
                    placeholder="Enter Address"
                  />
                </p>
              </div>
              <h3 className="label-">City</h3>
              <div className="input_div-">
                <select className="state-" onChange={handleSelectedCity}>
                  {availableCities ? (
                    availableCities?.cities.map((city, key) => (
                      <option
                        className="state_option-"
                        // onChange={handleStateChange}
                        value={city}
                        key={key}
                      >
                        {city}
                      </option>
                    ))
                  ) : (
                    <option>Select State First</option>
                  )}
                </select>
              </div>
            </div>
            <div className="_right_section-">
              <h3 className="label-">Country</h3>
              <div className="input_div- country_div-">
                <p className="input_para-">
                  <Select
                    styles={style}
                    className="react_select-"
                    options={options}
                    value={value}
                    onChange={changeHandler}
                  />
                </p>
              </div>

              <h3 className="label-">State</h3>
              <div className="input_div-">
                <select
                  className="state-"
                  name="gender"
                  onChange={handleStateChange}
                  id="gender" /*onChange={""}*/
                >
                  {Cities.map((state, key) => (
                    <option
                      className="state_option-"
                      selected={key === 0}
                      value={state.name}
                      key={key}
                    >
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="_down_part-">
            <h3 className="label-">Phone number</h3>
            <div className="input_div-">
              <p className="input_para-">
                <input
                  className="p_input"
                  type="number "
                  placeholder="Enter Phone Number"
                />
              </p>
            </div>
            <h3 className="label-">Email address</h3>
            <div className="input_div-">
              <p className="input_para-">
                <input
                  className="p_input"
                  type="email"
                  placeholder="Enter Email Address"
                />
              </p>
            </div>
          </div>
        </div>
        {/* END OF TOP RIGHT SIDE */}

        {/* BOTTOM RIGHT SIDE */}
        <div className="right_bottom_side-">
          <h1 className="header-">Biometric and Genetic Information</h1>
          <div className="top_section-">
            <div className="first_name_div">
              <h3 className="label-">Blood Group</h3>
              <div className="input_div-">
                <p className="input_para-">
                  <input
                    className="p_input"
                    type="text "
                    placeholder="Enter Blood Group"
                  />
                </p>
              </div>
            </div>
            <div className="last_name_div">
              <h3 className="label-">Genotype</h3>
              <div className="input_div-">
                <p className="input_para-">
                  <input
                    className="p_input"
                    type="text "
                    placeholder="Enter Genotype"
                  />
                </p>
              </div>
            </div>
          </div>
          <h3 className="label-">Height(metres)</h3>
          <div className="input_div-">
            <p className="input_para-">
              <input
                className="p_input"
                type="number"
                placeholder="Enter Height"
              />
            </p>
          </div>

          <div className="bottom_section-">
            <div className="expiry_month">
              <h3 className="label-">Weight(kilogram)</h3>
              <div className="input_div-">
                <p className="input_para-">
                  <input
                    className="p_input"
                    type="number"
                    placeholder="Enter Weight"
                  />
                </p>
              </div>
            </div>
            <div className="expiry_year">
              <h3 className="label-">Allergies</h3>
              <div className="input_div-">
                <p className="input_para-">
                  <input
                    className="p_input"
                    type="text "
                    placeholder="Enter Allergies"
                  />
                </p>
              </div>
            </div>
          </div>
          {/* <h3 className="label-"></h3>
          <div className="input_div-">
            <p className="input_para-">
              <input
                className="p_input"
                type="number "
                placeholder="Enter Wallet Address"
              />
            </p>
          </div> */}
        </div>
      </div>
      {/* END OF RIGHT SIDE TOP SECTION */}
    </div>
  );
}

export default PatientsEditProfile;
