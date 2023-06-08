import React from "react";
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

function DoctorsEditProfile() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [data, setData] = useState();

  // handler to set the state of value of selected country
  const changeHandler = (value) => {
    setValue(value);
  };

  // handler to set the data of the selected image to "data" state
  const handleChange = (e) => {
    const data = new FileReader();
    data.addEventListener("load", () => {
      setData(data.result);
      console.log("data result:" + " " + data.result);
    });
    data.readAsDataURL(e.target.files[0]);
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
              {data ? (
                <img src={data} alt="profileImage" />
              ) : (
                <img src={emptyProfile} alt="profileImage" />
              )}
            </label>
          </div>

          <div className="profile_details">
            <h2 className="name">Dr. chukwuemeka James Eze</h2>
            <p className="email">Chukwuemekaeeze@gmail.com</p>
            <button className="profile_btn">Save Changes</button>
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
                    type="text "
                    placeholder="Enter First Name"
                  />
                </p>
              </div>
              <h3 className="label">Middle name</h3>
              <div className="input_div">
                <p className="input_para">
                  <input
                    className="d_input"
                    type="text "
                    placeholder="Enter Middle Name"
                  />
                </p>
              </div>
              <h3 className="label">Date of birth</h3>
              <div className="input_div">
                <p className="input_label">
                  <input
                    className="d_input"
                    type="date"
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
                    id="gender" /*onChange={""}*/
                  >
                    <option value={""}>Male</option>
                    <option value={""}>Female</option>
                  </select>
                </p>
              </div>
              <h3 className="label">Doctor’s ID</h3>
              <div className="input_div last_div">
                <p className="input_para">
                  <input
                    className="d_input"
                    type="number "
                    placeholder="Enter ID"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
        <p
          style={{ marginTop: "1rem", marginLeft: "1rem", marginRight: "1rem" }}
        >
          Notice: If you have more than one account with the same email address
          on file, you will not be able to use that email address as a username
          to sign in.
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
                id="gender" /*onChange={""}*/
              >
                {States.map((state) => (
                  <option className="state_option" value={""}>
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
                  value={value}
                  onChange={changeHandler}
                />
              </p>
            </div>

            <h3 className="label">State of residence</h3>
            <div className="input_div">
              <select
                className="state"
                name="gender"
                id="gender" /*onChange={""}*/
              >
                {States.map((state) => (
                  <option className="state_option" value={""}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="_down_part_">
          <h3 className="label">Phone number</h3>
          <div className="input_div">
            <p className="input_para">
              <input
                className="d_input"
                type="number "
                placeholder="Enter Phone Number"
              />
            </p>
          </div>
          <h3 className="label">Email address</h3>
          <div className="input_div last_div">
            <p className="input_para">
              <input
                className="d_input"
                type="email"
                placeholder="Enter Email Address"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorsEditProfile;
