import React, { useState } from "react";
import "./login.css";
import medblog from "../assets/logo-02.png";
import bigImage from "../assets/signup-second.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import StateContext from "../stateProvider/stateprovider";
import { useContext } from "react";
import axioscall from "../api/secondApi";
import { useServiceProviderValue } from "../ServiceProvider";

const validEmailRex = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
const PWD_REGEX = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
const DOCTOR_LOGIN = "/doctor/login";
const PATIENT_LOGIN = "/patient/login";

export default function Login() {
  const navigate = useNavigate();
  const { setAuth } = useContext(StateContext);

  const [{ user, login }, dispatch] = useServiceProviderValue();

  const { state } = useLocation();
  // console.log(state.state.value);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errmsg, setErrMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let valid1 = validEmailRex.test(userEmail);
    let valid2 = PWD_REGEX.test(userPassword);
    if (!valid1 || !valid2) {
      setErrorMessage("invalid input,put in your correct email and password");

      return;
    }
    const DoctorData = {
      email: userEmail,
      password: userPassword,
    };
    const PatientData = {
      email: userEmail,
      password: userPassword,
    };
    if (user === "doctor") {
      let response = null;
      try {
        response = await axioscall.post(
          DOCTOR_LOGIN,
          JSON.stringify(DoctorData),
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            // withCredentials: true,
          }
        );
        // console.log(response.data.token);
        const userdetails = {
          token: response?.data.token,
          email: response?.data.doctor,
        };

        // const userStringify = JSON.stringify(userdetails);
        localStorage.setItem("doctorToken", response?.data.token);
        localStorage.setItem("doctorEmail", response?.data.email);

        setIsLoading(false);
        setAuth({
          userEmail: response?.data.email,
          doctorToken: response?.data.token,
        });
        setUserEmail("");
        setUserPassword("");
        const item = localStorage.getItem("doctorToken");
        console.log(response?.data);
        if (item) {
          navigate("/DocDashboard");
        } else if (!item) {
          navigate("./landing");
          console.log("to landing");
        }
      } catch (err) {
        if (!err?.response) {
          setErrMsg("No Server Response");
          setIsLoading(false);
          setAuth({
            userEmail,
            userPassword,
            patientToken: response?.data.token,
          });
          setUserEmail("");
          setUserPassword("");
          const item = localStorage.getItem("userdetails");
          // const toParse = JSON.parse(item.token);

          if (response?.data.token) {
            setTimeout(() => {
              // navigate("/");
            }, 2000);
          } else if (err.response?.status === 409) {
            setErrMsg("Username Taken");
            setTimeout(() => {
              navigate("/");
            }, 2000);
            setIsLoading(false);
          } else if (err?.response?.status === 400) {
            setErrMsg("this user is not found");
            setIsLoading(false);
            setTimeout(() => {
              navigate("/");
            }, 2000);
          } else {
            setErrMsg("Registration Failed");
            setIsLoading(false);
            setTimeout(() => {
              navigate("/");
            }, 2000);
          }
        }
      }
    } else if (user === "patient") {
      try {
        const response = await axioscall.post(
          PATIENT_LOGIN,
          JSON.stringify(PatientData),
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            // withCredentials: true,
          }
        );

        const userdetails = {
          token: response?.data.token,
          email: response?.data.email,
        };
        console.log(response?.data);
        const userStringify = JSON.stringify(userdetails);
        localStorage.setItem("patientToken", response?.data.token);
        localStorage.setItem("patientEmail", response?.data.email);
        setIsLoading(false);
        setAuth({
          userEmail,
          userPassword,
          patientToken: response?.data.token,
        });
        setUserEmail("");
        setUserPassword("");
        const item = localStorage.getItem("patientToken");
        // const toParse = JSON.parse(item.token);
        console.log(response);
        if (item) {
          navigate("/Dashboard");
        } else if (!item) {
          navigate("./landing");
          console.log("to landing");
        }
      } catch (err) {
        if (!err?.response) {
          setErrMsg("No Server Response");
          setIsLoading(false);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else if (err.response?.status === 409) {
          setErrMsg("Username Taken");
          setIsLoading(false);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          setErrMsg("Registration Failed");
          setIsLoading(false);
          console.log(errmsg);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      }
    }
  };
  return (
    <div className="first-container confirmation">
      <div className="sign-up-container">
        <div className="signup-form length">
          <div>
            <img src={medblog} alt="medblog" />
          </div>
          <h2>Login</h2>
          <p>Please enter your login details to sign in.</p>
          <form className="form" onSubmit={handleLogin}>
            {errorMessage ? <p>{errorMessage}</p> : ""}
            {errmsg && <p>{errmsg}</p>}
            <div class="input">
              <label>Email Address</label>
              <input
                type="text"
                placeholder="chimuanyaruth20@gmail.com"
                onChange={(e) => setUserEmail(e.target.value)}
                value={userEmail}
                required
              />
            </div>
            <div class="input">
              <label>Password</label>
              <input
                type="password"
                placeholder="password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                required
              />
            </div>
            <div className="diverge">
              <div>
                <input type="checkbox" />
                <span>Keep me logged in</span>
              </div>
              <div>
                <Link to="/forgotPassword" className="linky">
                  <span>Forgot password?</span>
                </Link>
              </div>
            </div>
            {isLoading ? (
              <button>loading...</button>
            ) : (
              <button
                className="btn"
                type="submit"
                disabled={!userEmail || !userPassword}
              >
                Log in
              </button>
            )}
          </form>
          <p className="create-account">
            Don’t have an account?
            <Link to="/signup" className="wallet-link2">
              <span>sign up</span>
            </Link>
          </p>
        </div>
        <div className="image-placeholder">
          <img src={bigImage} alt="big" />
        </div>
      </div>
    </div>
  );
}
