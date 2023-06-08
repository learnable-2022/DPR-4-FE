import React, {useState} from "react";
import femaleDoc from "../landing/Images/femaleDoc.png";
import logo from "../landing/Images/logo.png";
import male from "../landing/Images/maleDoc.png";
import heart from "../landing/Images/heart.png";
import pill from "../landing/Images/pill.png";
import "../landing/landing.css";
import { Link } from "react-router-dom";

export default function Landing() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  function navOpen(){
    setIsNavOpen(true)
  }

  console.log(isNavOpen)

  return (
    <div className="">
      {/* nav section */}
      <div className="nav-section">
        <div className="nav1">
          <img src={logo} alt="medbloc-logo" id="logo" />
        </div>
        <i class="ri-menu-line" onClick={navOpen}></i>
        {/* {isNavOpen ? <div className="nav2bg"></div> : ""} */}
        {isNavOpen && <div className="nav2bg"></div>}
        {/* <div className={isNavOpen ? `nav2BgOpen`:`nav2Bg`} > */}
          <div className={isNavOpen ? `nav2Open`:`nav2`}>
            <i class="ri-close-circle-fill" onClick={()=> setIsNavOpen(!isNavOpen)}></i>
            <Link className="link" id="nav-link" to="">
              <li>Home</li>
            </Link>
            <Link className="link" id="nav-link" to="">
              <li>Features</li>
            </Link>
            <Link className="link" id="nav-link" to="">
              <li>Pricing</li>
            </Link>
            <Link className="link" id="nav-link" to="">
              <li>Support</li>
            </Link>
            <Link className="link" id="get-link" to="/confirmation">
              {/* <button className="btn">sign in</button> */}
              <span>sign in</span>
            </Link>
          </div>
        </div>
      {/* </div> */}

      {/* hero section */}
      <div className="hero-section">
        <div className="hero-1">
          <h1 className="hero-bg-text">
            Simplify Medical Record Keeping with <span>Medbloc</span>
          </h1>
          <p className="hero-text">
            Keep all your patient data organized & secure in one easy-to-use
            desktop application.
          </p>
          <Link className="link" to="/confirmation">
            <button className="hero-btn">Join now</button>
          </Link>
        </div>

        <div className="hero-2">
          <img src={femaleDoc} alt="female-doctor" id="female-img" />
        </div>
      </div>

      {/* section-one */}
      <div className="section-one">
        <div>
          <img src={pill} alt="pill" id="pill-img" />
        </div>
        <div className="section-one-b">
          <h2 className="sec-one-text">Enhanced Collaboration</h2>
          <p className="section-one-text">
            Our system makes it easy for healthcare professionals to share
            information and collaborate on patient care.
          </p>
        </div>

        <div className="hr"></div>

        <div className="section-one-c">
          <Link className="link" to="">
            <button className="section-one-btn" id="section-one-btn">Try now</button>
          </Link>
        </div>
      </div>

{/* section-1-part-b */}
      <div className="section-one-part-b">
        <div>
          <img src={pill} alt="pill" id="pill-part-img" />
        </div>
        <div className="section-one-part-c">
          <div className="section-one-part-B">
            <h2 className="sec-one-part-text">Enhanced Collaboration</h2>
            <p className="section-one-part-text">
            Our system makes it easy for healthcare professionals to share
            information and collaborate on patient care.
            </p>
          </div>

        <div className="section-one-part-c">
          <Link className="link" to="/confirmation">
            <button className="section-one-part-btn" id="section-one-part-btn">Try now</button>
          </Link>
        </div>
      </div>
      </div>

      {/* section-two*/}
      <div className="section-two">
        <div className="section-two-a">
          <img src={male} alt="male-doctor" id="male-img" />
        </div>
        <div className="section-two-b">
          <h2 className="section-two-text">
            We Constantly Provide the Greatest Medical Care Record for your
            Health.
          </h2>
          <ul className="list">
            <li className="section-2-list">
              <i className="ri-checkbox-line"></i>
              <p>State of the Art Doctor Services</p>
            </li>
            <li className="section-2-list">
              <i className="ri-checkbox-line"></i>
              <p>Enrollment is Quick and Easy</p>
            </li>
            <li className="section-2-list">
              <i className="ri-checkbox-line"></i>
              <p>Access to Top Specialist Doctors</p>
            </li>
            <li className="section-2-list">
              <i className="ri-checkbox-line"></i>
              <p>Low Gas Fee</p>
            </li>
            <Link className="link" to="/confirmation">
              <button className="hero-btn">Join now</button>
            </Link>
          </ul>
        </div>
      </div>

      {/* section-three */}
      <div className="section-three">
        <div className="section-three-a">
          <h2 className="section-three-text">
            Various Health Departments You Can Access for Comprehensive Care
          </h2>
          <p className="section-three-text-b">
            Our mission is to provide high-quality healthcare that addresses all
            aspects of our patients' health. We believe in treating the whole
            person, not just their symptoms or conditions, and empowering our
            patients to take an active role in their own health. With a focus on
            prevention and ongoing support, we aim to help our patients achieve
            optimal health and wellbeing
          </p>
          <Link className="link" to="/confirmation">
            <button className="hero-btn">Join now</button>
          </Link>
        </div>
        <div className="section-three-b">
          <img src={heart} alt="heart" id="heart-img" />
        </div>
      </div>
      {/* section-four */}
      <div className="section-four">
        <div className="section-four-a">
          <h4>
            Access Health Services and Tips for a Healthier Lifestyle Right Here
          </h4>
          <p>
            Take charge of your health with our comprehensive health services
            and expert tips for healthy living. Explore now and start your
            journey towards a healthier you.
          </p>
        </div>
        <div className="section-four-b">
          <Link className="link" to="/confirmation">
            <button className="section-four-btn back">Stay connected</button>
          </Link>
        </div>
      </div>

      {/* footer-section */}
      <div className="footer-section">
        <div className="footer-section-a">
          <img src={logo} alt="medbloc-logo" id="logo" />
          <p>
            Have a safe and decentralized medical record with us and access
            expert medical opinion from one of our world renowned specialist so
            you can have the answer and confidence to make informed decisions
            about your health
          </p>
        </div>

        <div className="footer-section-2">
          <div className="footer-section-b">
            <h5>Information</h5>
            <Link className="footer-link" to="">
              <p>Sign Up</p>
            </Link>
            <Link className="footer-link" to="">
            <p>Join Community</p>
            </Link>
            <Link className="footer-link" to="">
            <p>Learning</p>
            </Link>
            <Link className="footer-link" to="">
            <p>Newsletter</p>
            </Link>
          </div>
          <div className="footer-section-c">
            <h5>Platform</h5>
            <Link className="footer-link" to="">
            <p>Terms of Use</p>
            </Link>
            <Link className="footer-link" to="">
            <p>About</p>
            </Link>
            <Link className="footer-link" to="">
            <p>Contact</p>
            </Link>
            <Link className="footer-link" to="">
            <p>Partnership</p>
            </Link>
          </div>
          <div className="footer-section-d">
            <h5>Support</h5>
            <Link className="footer-link" to="">
            <p>Help Centre</p>
            </Link>
            <Link className="footer-link" to="">
            <p>Video Tutorial</p>
            </Link>
            <Link className="footer-link" to="">
            <p>Cookie Settings</p>
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}
