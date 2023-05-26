import React from "react";
import female from '../landing/Images/femaleDoc.png';
import logo from '../landing/Images/logo.png';


export default function Landing() {
  return (
    <div className="">

      {/* nav section */}
      <div className="nav-section">
      <div className="">
        <img src={logo} alt="perfume2" id="logo"/>
        <img src={female} alt="perfume2" id="female-img"/>
      </div>

      <div className="">
      <Link className='navi-link'  to="vaccine">Vaccines</Link>
      </div>
      </div>

       {/* hero section */}
      <div className="hero-section">
        
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
