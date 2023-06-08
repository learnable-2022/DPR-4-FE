import React from 'react';
import NavBar from '../../utilities/NavBar';
import Labvisitreport from '../../utilities/lab-visitreport';
import "./sub-records.css";

export default function VisiterReport() {
  return (
    <div  className='container'>
        <NavBar/>
        <Labvisitreport/>
          <div className='third-container'>
                  <div className='third-lab-report'>
              <div className='third-lab-report-first'>
                <p className='bold'>Hospital name:</p>
                <p className='bold'>Doctors Name:</p>
                <p className='bold'>Patients Complaint:</p>
                <p className='bold'>Doctors comment:</p>
                <p  className=' bolder'>Remarks/Treatments</p>
              </div>
              <div className='third-lab-report-second'>
              <p>General Hospital, Enugu Town, Enugu</p>
              <p>Dr. Ada General medicine</p>
              <p>Fever, Body pain, Sore Taste</p>
              <p>Ref: Widal Test, Malaria parasite Test, Full blood count Test</p>
              <p>Salm spp80
                  p. falciparum  
                  Blood count within normal range
                </p>
              <p>Artemether Lumefantrine 80/480mg
                    Ciprofloxacin
                    Ceftriaxone injection 5 days</p>
              </div>
              <div className='third-lab-report-third'>
              <p>Date:<span>02/05/2023</span></p>
              <p>Time:<span>11:59am</span></p>
              </div>
            </div>
          </div>

          
    </div>
  )
}
