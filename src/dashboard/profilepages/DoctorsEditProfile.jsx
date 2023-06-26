import React, { useEffect } from "react";
import "./DoctorsEditProfile.css";
import emptyProfile from "../../assets/empty_profile.png";
import States from "../data/states";
import { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { BsCameraFill } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import axios from "axios";

function DoctorsEditProfile() {
  const [NoImage, setNoImageMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState();
  const [selectedAddress, setAddress] = useState("");
  const [selectedWallet, setWallet] = useState("");
  const [selectedState, setState] = useState("");
  const [selectedResidence, setResidence] = useState("");
  const [selectedNumber, setNumber] = useState("");
  const [selectedEmail, setEmail] = useState("");
  const [selectedGender, setGender] = useState("");
  const [selectedLicense, setLicense] = useState("");
  const [selectedLastName, setLastName] = useState("");
  const [selectedDate, setDate] = useState("");
  const [selectedHospital, setHospitalName] = useState("");
  const [selectedFirstName, setFirstName] = useState("");
  const [value, setValue] = useState("");

  const options = useMemo(() => countryList().getData(), []);

  let doctors_DOB = localStorage.getItem("doctor_DOB");

  let doctors_Gender = localStorage.getItem("doctor_gender");

  let doctors_License = localStorage.getItem("doctor_license");

  let doctors_Email = localStorage.getItem("doctor_email");

  let doctors_Image = localStorage.getItem("doctor_image");

  let doctors_Name = localStorage.getItem("doctor_name");
  let doctors_ID = localStorage.getItem("doctor_ID");
  let token = localStorage.getItem("doctorToken");
  let doctors_address = localStorage.getItem("doctor_address");
  let doctors_country = localStorage.getItem("doctor_country");
  let doctors_number = localStorage.getItem("doctor_number");
  let doctors_origin = localStorage.getItem("doctor_origin");
  let doctors_residence = localStorage.getItem("doctor_residence");
  let doctors_wallet = localStorage.getItem("doctor_wallet");
  let doctors_hospital = localStorage.getItem("doctor_hospital");

  let doctors_first_name = localStorage.getItem("doctor_firstname");
  let doctors_last_name = localStorage.getItem("doctor_lastname");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };
  const handleResidence = (e) => {
    setResidence(e.target.value);
  };
  const handleStateChange = (e) => {
    setState(e.target.value);
  };
  const handleWalletChange = (e) => {
    setWallet(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleLicenseChange = (e) => {
    setLicense(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleHospitalChange = (e) => {
    setHospitalName(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const setName = (FirstName, LastName, NameFromDb) => {};

  const checkForValues = () => {
    if (
      data ||
      selectedAddress ||
      selectedResidence ||
      selectedEmail ||
      selectedNumber ||
      selectedDate ||
      selectedGender ||
      selectedHospital ||
      selectedFirstName ||
      selectedLastName ||
      selectedState ||
      selectedLicense ||
      selectedNumber ||
      selectedDate ||
      selectedFirstName ||
      selectedLastName ||
      value
    ) {
      return true;
    } else {
      return false;
    }
  };
  const saveProfile = () => {
    if (checkForValues()) {
      UpdateDoctorsDetails();
    } else {
      setNoImageMsg("Please Enter details you wish to edit before saving");
      setTimeout(() => {
        setNoImageMsg("");
      }, 3000);
    }
  };
  let formattedName = `${selectedFirstName || doctors_first_name} ${
    selectedLastName || doctors_last_name
  }`;
  const UpdateDoctorsDetails = async () => {
    setIsLoading(true);

    const response = await axios

      .put(
        `https://medbloc-api.onrender.com/api/v1/doctor/${doctors_ID}`,
        {
          name: formattedName || doctors_Name,
          firstName: selectedFirstName || doctors_first_name,
          lastName: selectedLastName || doctors_last_name,
          email: selectedEmail || doctors_Email,
          address: selectedAddress || doctors_address,
          image: data || doctors_Image,
          hospital: selectedHospital || doctors_hospital,
          license: selectedLicense || doctors_License,
          phoneNumber: selectedNumber || doctors_number,
          stateOfResidence: selectedResidence || doctors_residence,
          country: value || doctors_country,
          stateOfOrigin: selectedState || doctors_origin,
          gender: selectedGender || doctors_Gender,
          walletId: selectedWallet || doctors_wallet,
          dateOfBirth: selectedDate || doctors_DOB,
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
        localStorage.setItem("doctor_image", response?.data?.image);
        localStorage.setItem("doctor_name", response?.data?.name);
        localStorage.setItem("doctor_email", response?.data?.email);
        localStorage.setItem("doctor_gender", response?.data?.gender);
        localStorage.setItem("doctor_DOB", response?.data?.dateOfBirth);
        localStorage.setItem("doctor_ID", response?.data?._id);
        localStorage.setItem("doctor_address", response?.data?.address);
        localStorage.setItem("doctor_license", response?.data?.license);
        localStorage.setItem("doctor_country", response?.data?.country);
        localStorage.setItem("doctor_number", response?.data?.phoneNumber);
        localStorage.setItem("doctor_origin", response?.data?.stateOfOrigin);
        localStorage.setItem(
          "doctor_residence",
          response?.data?.stateOfResidence
        );
        localStorage.setItem("doctor_wallet", response?.data?.walletId);
        localStorage.setItem("doctor_hospital", response?.data?.hospital);
        localStorage.setItem("doctor_firstname", response?.data?.firstName);
        localStorage.setItem("doctor_lastname", response?.data?.lastName);

        console.log(response);
        setSuccessMsg("Details Saved Successfully");
        setTimeout(() => {
          setSuccessMsg("");
        }, 3000);

        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  // handler to set the state of value of selected country
  const changeHandler = (value) => {
    setValue(value.label);
  };

  // handler to set the data of the selected image to "data" state
  const handleChange = (e) => {
    const data = new FileReader();

    data.addEventListener("load", () => {
      const fileSize = data.size; // Size in bytes
      const fileSizeInKB = Math.round(fileSize / 1024);
      if (fileSizeInKB >= 120) {
        setNoImageMsg("Please choose an image less than 120kb");
        setTimeout(() => {
          setNoImageMsg("");
        }, 3000);
      } else {
        setData(data?.result);
      }
    });
    if (e.target.files[0]) {
      const fileSize = e.target.files[0].size; // Size in bytes
      const fileSizeInKB = Math.round(fileSize / 1024);
      if (fileSizeInKB >= 120) {
        e.target.value = null;
        setNoImageMsg("Please choose an image less than 120kb");
        setTimeout(() => {
          setNoImageMsg("");
        }, 3000);
      } else {
        data.readAsDataURL(e.target.files[0]);
      }
    }
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
    let doctors_first_name = localStorage.getItem("doctor_firstname");
    let doctors_DOB = localStorage.getItem("doctor_DOB");
    let doctors_Gender = localStorage.getItem("doctor_gender");
    let doctors_License = localStorage.getItem("doctor_license");
    let doctors_Email = localStorage.getItem("doctor_email");
    let doctors_Name = localStorage.getItem("doctor_name");
    let doctors_ID = localStorage.getItem("doctor_ID");
    let doctors_address = localStorage.getItem("doctor_address");
    let doctors_country = localStorage.getItem("doctor_country");
    let doctors_number = localStorage.getItem("doctor_number");
    let doctors_origin = localStorage.getItem("doctor_origin");
    let doctors_residence = localStorage.getItem("doctor_residence");
    let doctors_wallet = localStorage.getItem("doctor_wallet");
    let doctors_hospital = localStorage.getItem("doctor_hospital");
    let doctors_last_name = localStorage.getItem("doctor_lastname");
    setFirstName(doctors_first_name);
    setLastName(doctors_last_name);
    setHospitalName(doctors_hospital);
    setWallet(doctors_wallet);
    setResidence(doctors_residence);
    setState(doctors_origin);
    setNumber(doctors_number);
    setValue(doctors_country);
    setAddress(doctors_address);
    setName(doctors_Name);
    setEmail(doctors_Email);
    setGender(doctors_Gender);
    setDate(doctors_DOB);
    setLicense(doctors_License);
  }, []);
  return (
    <div className="doctorseditprofile">
      <div className="_left_side">
        {/*  */}
        <div className="topleft">
          <Link to="/DocProfile" className="link">
            <BiArrowBack className="back_arrow" />
          </Link>
          <div className="select_image_div">
            <label for="inputTag">
              <BsCameraFill className="camera_icon" />
              <input
                className="d_input"
                id="inputTag"
                onChange={handleChange}
                type="file"
              />
              <br />
              {data || doctors_Image ? (
                <img src={data ? data : doctors_Image} alt="profileImage" />
              ) : (
                <img src={emptyProfile} alt="profileImage" />
              )}
            </label>
          </div>

          <div className="profile_details">
            <h2 className="name">Dr. {doctors_Name}</h2>
            <p className="email">{doctors_Email}</p>
            <button
              className="profile_btn"
              onClick={saveProfile}
              disabled={isLoading}
            >
              {isLoading ? <FaSpinner className="spin" /> : "Save Changes"}
            </button>
            {
              <p style={{ color: "black", fontSize: "12px", marginTop: "3px" }}>
                {NoImage}
              </p>
            }
            {
              <p style={{ color: "green", fontSize: "12px", marginTop: "3px" }}>
                {successMsg}
              </p>
            }
          </div>
        </div>
        {/*  */}
        <div className="_bottom_left">
          <h1 className="header">General Information</h1>
          <div className="_bottom_profile_details_">
            <div className="_left_section">
              <h3 className="label">First name</h3>
              <div className="input_div">
                <p className="input_para">
                  <input
                    className="d_input"
                    onChange={handleFirstNameChange}
                    value={selectedFirstName}
                    type="text "
                    placeholder="Enter First Name"
                  />
                </p>
              </div>
              <h3 className="label">Phone Number</h3>
              <div className="input_div">
                <p className="input_para">
                  <input
                    className="d_input"
                    type="number"
                    onChange={handleNumberChange}
                    value={selectedNumber}
                    placeholder="Enter Phone Number"
                  />
                </p>
              </div>
              <h3 className="label">Date of birth</h3>
              <div className="input_div">
                <p className="input_label">
                  <input
                    className="d_input"
                    type="date"
                    onChange={handleDateChange}
                    value={selectedDate}
                    placeholder="Select Date of Birth"
                  />
                </p>
              </div>
            </div>
            <div className="_right_section">
              <h3 className="label">Last name</h3>
              <div className="input_div">
                <p className="input_para">
                  <input
                    className="d_input"
                    onChange={handleLastNameChange}
                    value={selectedLastName}
                    type="text "
                    placeholder="Enter Last Name"
                  />
                </p>
              </div>
              <h3 className="label">Gender</h3>
              <div className="input_div">
                <p className="input_para">
                  <select
                    className="d_select"
                    name="gender"
                    value={selectedGender}
                    onChange={handleGenderChange}
                    id="gender" /*onChange={""}*/
                  >
                    <option disabled selected value="">
                      Select Gender
                    </option>
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                  </select>
                </p>
              </div>
              <h3 className="label">Doctor’s ID</h3>
              <div className="input_div last_div">
                <p className="input_para">
                  <input
                    className="d_input"
                    onChange={handleLicenseChange}
                    value={selectedLicense}
                    type="number "
                    placeholder="Enter ID"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="warning_msg">
          <span style={{ color: "red" }}>Notice:</span> If you have more than
          one account with the same email address on file, you will not be able
          to use that email address as a username to sign in.
        </p>
      </div>
      <div className="_right_side">
        <h1 className="header">Contact Information</h1>
        <div className="_bottom_profile_details_">
          <div className="_left_section">
            <h3 className="label">Address</h3>
            <div className="input_div">
              <p className="input_para">
                <input
                  className="d_input"
                  onChange={handleAddressChange}
                  value={selectedAddress}
                  type="text "
                  placeholder="Enter Address"
                />
              </p>
            </div>
            <h3 className="label">State of origin</h3>
            <div className="input_div">
              <select
                className="state"
                name="gender"
                value={selectedState}
                onChange={handleStateChange}
                id="gender" /*onChange={""}*/
              >
                {States.map((state) => (
                  <option className="state_option" value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="_right_section">
            <h3 className="label">Country</h3>
            <div className="input_div country_div">
              <p className="input_para">
                <Select
                  styles={style}
                  className="react_select"
                  options={options}
                  value={value.label}
                  onChange={changeHandler}
                />
              </p>
            </div>

            <h3 className="label">State of residence</h3>
            <div className="input_div">
              <select
                className="state"
                onChange={handleResidence}
                value={selectedResidence}
                name="state"
                id="state" /*onChange={""}*/
              >
                {States.map((state) => (
                  <option className="state_option" value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="_down_part_">
          <h3 className="label">Wallet Address</h3>
          <div className="input_div">
            <p className="input_para">
              <input
                className="d_input"
                onChange={handleWalletChange}
                value={selectedWallet}
                type="text "
                placeholder="Enter Wallet Address"
              />
            </p>
          </div>
          <h3 className="label">Email address</h3>
          <div className="input_div last_div">
            <p className="input_para">
              <input
                className="d_input"
                onChange={handleEmailChange}
                value={selectedEmail}
                type="email"
                placeholder="Enter Email Address"
              />
            </p>
          </div>
          <h3 className="label">Hospital Name</h3>
          <div className="input_div last_div">
            <p className="input_para">
              <input
                className="d_input"
                onChange={handleHospitalChange}
                value={selectedHospital}
                type="text"
                placeholder="Enter Hospital Name"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorsEditProfile;
