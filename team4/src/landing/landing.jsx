import React from "react";
import femaleDoc from '../landing/images/femaleDoc.png';
import logo from '../landing/images/logo.png';
import male from '../landing/images/maleDoc.png';
import heart from '../landing/images/heart.png';
import pill from '../landing/images/pill.png';
import '../landing/landing.css'
import { Link } from 'react-router-dom';


export default function Landing() {
  return (
    <div className="">

      {/* nav section */}
      <div className="nav-section">

        <div className="nav1">
          <img src={logo} alt="medbloc-logo" id="logo"/>
        </div>

      <div className="nav2">
        <Link className='link'  to=""><li>Home</li></Link>
        <Link className='link'  to=""><li>Features</li></Link>
        <Link className='link'  to=""><li>Pricing</li></Link>
        <Link className='link'  to=""><li>Support</li></Link>
        <Link className='link'  to=""><button className="btn">Get Started</button></Link>
      </div>

      </div>

      

       {/* hero section */}
      <div className="hero-section">

        <div className="hero-1">
          <h1>Simplify Medical Record Keeping with <span>Medbloc</span></h1>
          <p className='hero-text'>Keep all your patient data organized & secure in one easy-to-use desktop application.</p>
          <Link className='link'  to=""><button className="hero-btn">Join now</button></Link>
        </div>

        <div className="hero-2">
          <img src={femaleDoc} alt="female-doctor" id="female-img"/>
        </div>

      </div>

      {/* section-one */}
      <div className="section-one">
        <div>
          <img src={pill} alt="pill" id="pill-img"/>
        </div>
        <div className="section-one-b">
          <h2>Enhanced Collaboration</h2>
          <p className="section-one-text">
            Our system makes it easy for healthcare professionals to share information and collaborate on patient care.
          </p>
        </div>
        <div className="section-one-c">
        <Link className='link'  to=""><button className="section-one-btn">Try now</button></Link>
        </div>
      </div>

       {/* section-two*/}
      <div className="section-two">

      </div>

       {/* section-three */}
      <div className="section-three">

      </div>
       {/* section-four */}
      <div className="section-four">

      </div>

       {/* section-five */}
      <div className="section-five">

      </div>
    </div>
  )
}
