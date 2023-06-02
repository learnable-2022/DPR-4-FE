import React, { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo02 from '../assets/logo-02.png';
import signupimage from '../assets/signup-image.png';
import './signup.css';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
/*const SIGNUP_URL = '/signup';*/

const Checkbox = ({ isChecked, handleCheckboxChange }) => {
  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        id="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="checkbox-input"
      />
      <span className="checkbox-label">
        I agree to the terms of service and privacy policy
      </span>
    </label>
  );
};

const Signup = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [pwdVisible, setPwdVisible] = useState(false);
  const togglePwdVisibility = () => {
    setPwdVisible(!pwdVisible);
  };

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
  
    setUser('');
    setPwd('');
    setMatchPwd('');
  
    try {
      // Code that may throw an error
  
      // Simulate successful registration
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 409) {
        setErrMsg('Username Taken');
      } else {
        setErrMsg('Registration Failed');
      }
      errRef.current.focus();
      console.error(err);
    }
  };
  
  return (
    <>
      {success ? (
        <section>
          <h1>Success! proceed to Log In </h1>
          <p>
            <a href="#">Log in</a> // add router link here 
          </p>
        </section>
      ) : (
        <div className="section">
          <div className="frame1">
            <section>
              <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                {errMsg}
              </p>
              <div className="signup__logo">
                <img src={logo02} alt="logo-02" />
              </div>
              <div className="signup__image">
                <img src={signupimage} alt="signup-image" />
              </div>
              <h1 className="signup">Sign up</h1>
              <p className="signup2">Create your account</p>
              <form onSubmit={handleSubmit}>
                <label className="usernameinput" htmlFor="username">
                  Username or Email:
                  <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                  <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="username or email address"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  className="username-input"
                />
                <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  Username or Email address:<br />
                  4 to 24 characters.<br />
                  Must begin with a letter.<br />
                  Letters, numbers, underscores, hyphens, and special characters are allowed.<br />
                  Allowed special character: <span aria-label="at symbol">@</span>
                </p>
                <label className="passwordinput" htmlFor="password">
                  Password:
                  <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                  <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                  <FontAwesomeIcon
                    icon={pwdVisible ? faEyeSlash : faEye}
                    className="password-toggle"
                    onClick={togglePwdVisibility}
                  />
                </label>
                <input
                  type={pwdVisible ? "text" : "password"}
                  id="password"
                  placeholder={
                    pwdVisible
                      ? "8+ characters, 1 capital letter, number and special character"
                      : "8+ characters, 1 capital letter, number and special character   \u00A0\u00A0\u00A0\u00A0\u00A0"
                  }
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  className="password-input"
                />
                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  8 to 24 characters.<br />
                  Must include uppercase and lowercase letters, a number and a special character.<br />
                  Allowed special characters: <span aria-label="exclamation mark">!</span>{" "}
                  <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span>{" "}
                  <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                </p>
                <label className="confirmpasswordinput" htmlFor="confirm_pwd">
                  Confirm Password:
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={validMatch && matchPwd ? "valid" : "hide"}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={validMatch || !matchPwd ? "hide" : "invalid"}
                  />
                </label>
                <input
                  type="password"
                  id="confirm_pwd"
                  placeholder="password"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  className="confirmpassword-input"
                />
                <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  Must match the first password input field.
                </p>
                <Checkbox isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} />
                
                <button disabled={!validName || !validPwd || !validMatch} type="submit">
                  Create an account
                </button>
              </form>
              <p className="line1">
                Already have an account?
                <span className="line">
                  {/*put router link here*/}
                  <a href="#">Log in</a>
                </span>
              </p>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
