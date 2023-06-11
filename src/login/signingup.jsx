import React, { useEffect, useState } from "react";
import "./login.css";
import medblog from "../assets/logo-02.png";
import bigImage from "../assets/signup-second.png";
import {
  faCheck,
  faTimes,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axioscall from "../api/secondApi";
import { useServiceProviderValue } from "../ServiceProvider";
// import { useRequestProcessor } from '../api/requestProcessor';

const USER_REGEX = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
const PWD_REGEX = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
const validEmailRex = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
const REGISTER_DOCTOR = "/doctor/signup";
const REGISTER_PATIENT = "/patient/signup";

export default function Signingup() {
  const [{ user }, dispatch] = useServiceProviderValue();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const { state } = useLocation();
  // console.log(state);
  const [validUserName, setValidUserName] = useState(false);

  const [Email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [password, setPassWord] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [matchingPassoword, setMatchingPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [errmsg, setErrMsg] = useState("");

  const [medicalId, setMedicalId] = useState("");

  const [hospital, setHospital] = useState("");

  const [walletId, setWalletId] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  // const { makeRequest } = useRequestProcessor();

  const toggle = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleSumbit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const Docdata = {
      name: userName,
      email: Email,
      password: password,
      license: medicalId,
      hospital: hospital,
      walletId: walletId,
    };
    const patientdata = {
      name: userName,
      email: Email,
      password: password,
      walletId: walletId,
    };
    if (user === "doctor") {
      try {
        const response = await axioscall.post(
          REGISTER_DOCTOR,
          JSON.stringify(Docdata),
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            // withCredentials: true,
          }
        );
        setIsLoading(false);
        setUserName("");
        setEmail("");
        setPassWord("");
        setMedicalId("");
        setHospital("");
        setWalletId("");
        navigate("/login", { replace: true, state: { state } });

        dispatch({ type: "SET_USER_DETAILS", user_details: response.data._id });
        localStorage.setItem("doctor_id", response.data._id);
        console.log(response);
      } catch (err) {
        if (!err?.response) {
          setErrMsg("No Server Response");
        } else if (err.response?.status === 409) {
          setErrMsg("Username Taken");
        } else {
          setErrMsg("Registration Failed");
          setIsLoading(false);
        }
        console.log(errmsg);
      }
    } else if (user === "patient") {
      try {
        const response = await axioscall.post(
          REGISTER_PATIENT,
          JSON.stringify(patientdata),
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        setIsLoading(false);
        setUserName("");
        setEmail("");
        setPassWord("");
        setWalletId("");
        console.log(response);
        localStorage.setItem("patient_id", response.data._id);

        navigate("/login", { replace: true, state: { state } });
      } catch (err) {
        if (!err?.response) {
          setErrMsg("No Server Response");
        } else if (err.response?.status === 409) {
          setErrMsg("Username Taken");
        } else {
          setErrMsg("Registration Failed");
          setIsLoading(false);
        }
      }
    }
  };

  useEffect(() => {
    setValidUserName(USER_REGEX.test(userName));
  }, [userName]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
    setMatchingPassword(password === confirmPassword);
  }, [password, confirmPassword]);
  useEffect(() => {
    setValidEmail(validEmailRex.test(Email));
  }, [Email]);

  return (
    <div className="first-container confirmation">
      <div className="sign-up-container">
        <div className="signup-form ">
          <div>
            <img src={medblog} alt="medblog" />
          </div>
          <h2>Sign up</h2>
          <p>Create your account</p>
          <form className="form" onSubmit={handleSumbit}>
            <div class="input">
              <label>
                Enter full name
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validUserName ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validUserName || !userName ? "hide" : "invalid"}
                />
              </label>
              <input
                type="text"
                placeholder="Surname first"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
              />
            </div>
            <div class="input">
              <label>
                Email Address
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validEmail ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validEmail || !Email ? "hide" : "invalid"}
                />
              </label>
              <input
                type="text"
                placeholder="eg. janedoe@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
                autocomplete="off"
              />
            </div>
            <div class="input">
              <label>
                Password
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validPassword ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validPassword || !password ? "hide" : "invalid"}
                />
                <FontAwesomeIcon
                  icon={passwordVisible ? faEyeSlash : faEye}
                  className="password-toggle"
                  onClick={toggle}
                />
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="6+ characters, 1 capital letter"
                onChange={(e) => setPassWord(e.target.value)}
                value={password}
                autocomplete="off"
              />
            </div>
            <div class="input">
              <label>
                Confirm Password
                <FontAwesomeIcon
                  icon={faCheck}
                  className={matchingPassoword ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={
                    validPassword || !matchingPassoword ? "hide" : "invalid"
                  }
                />
              </label>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </div>
            {user !== "patient" ? (
              <>
                <div class="input">
                  <label>Medical Licence I.d</label>
                  <input
                    type="text"
                    placeholder="Medical ID"
                    onChange={(e) => setMedicalId(e.target.value)}
                    value={medicalId}
                    required
                  />
                </div>
                <div class="input">
                  <label>Hospital name</label>
                  <input
                    type="text"
                    className="placeholder"
                    placeholder="the name of your hospital"
                    onChange={(e) => setHospital(e.target.value)}
                    value={hospital}
                    required
                  />
                </div>{" "}
              </>
            ) : (
              ""
            )}

            <div class="input">
              <label>Wallet I.d</label>
              <input
                type="text"
                placeholder="enter your metamask wallet"
                onChange={(e) => setWalletId(e.target.value)}
                value={walletId}
                required
              />
            </div>
            {isLoading ? (
              <button>loading...</button>
            ) : (
              <button
                disabled={
                  !validUserName || !validPassword || !matchingPassoword
                }
                type="submit"
              >
                Continue
              </button>
            )}
          </form>
          <div className="lowest-section">
            <p className="create-account">
              Already have an account?
              <Link to="/login" className="wallet-link2">
                <span>Log in</span>
              </Link>
            </p>
            <p>
              Don’t have a wallet I.D?{" "}
              <Link to="https://metamask.io/" className="wallet-link2">
                <span>Get wallet I.D</span>
              </Link>
            </p>
          </div>
        </div>
        <div className="image-placeholder">
          <img src={bigImage} alt="big" />
        </div>
      </div>
    </div>
  );
}
