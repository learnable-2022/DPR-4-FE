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
          <img src={logo} alt="perfume2" id="logo"/>
        </div>

      <div className="nav2">
        <Link className='link'  to=""><li>Home</li></Link>
        <Link className='link'  to=""><li>Features</li></Link>
        <Link className='link'  to=""><li>Pricing</li></Link>
        <Link className='link'  to=""><li>Support</li></Link>
        <Link className='link'  to=""><button>Get Started</button></Link>
      </div>

      </div>

      

       {/* hero section */}
      <div className="hero-section">

        <div className="hero-1">
          <h1>Simplify Medical Record Keeping with <span>Medbloc</span></h1>
          <p>Keep all your patient data organized & secure in one easy-to-use desktop application.</p>
          <Link className='link'  to=""><button>join Now</button></Link>
        </div>

        <div className="hero-2">
          <img src={femaleDoc} alt="perfume2" id="female-img"/>
        </div>

      </div>

      {/* section-one */}
      <div className="section-one">

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
