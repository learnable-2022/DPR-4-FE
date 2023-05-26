import React from 'react';
// import PatientPic from '../images/patient-pic.png';
import {CiSearch} from 'react-icons/ci';
// import {IoNotificationsOutline} from "react-icons/io";
import {IoMdNotificationsOutline} from "react-icons/io";
import {AiOutlineHome} from "react-icons/ai";


export default function Billings() {
  return (
    <div className='billingBoardDashboard'>
      <div className='billingBoardHeading'>
        <h2>Patients Billing Dashboard</h2>
      </div>

      <div className='billingNav'>
        <div className='patientName'>
          <p>Hello, Amaka Chibueze!</p>
        </div>

        <div className='searchParent'>
          <div className='searchBox'>
            <CiSearch/>
            <p>search</p>
          </div>

          <div className='searchIcons'>
            <AiOutlineHome/>
            <IoMdNotificationsOutline/>
            {/* <img src={PatientPic} alt=''/> */}
            
          <div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
