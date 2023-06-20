import React from 'react';
import NavBar from '../../utilities/NavBar';
import { useParams } from 'react-router-dom';
import Labvisitreport from '../../utilities/lab-visitreport';
import "./sub-records.css";

export default function VisiterReport() {
  let getFormattedRecords = JSON.parse(localStorage.getItem("getFormattedRecords"));
  const { id } = useParams();
  const record = getFormattedRecords[id];
  console.log(id);


let vitalSigns = JSON.parse(localStorage.getItem("vitalSigns"));
let treatmentDetails = JSON.parse(localStorage.getItem('treatmentDetails'));
let vaccine = JSON.parse(localStorage.getItem('vaccine'));
let prescription = JSON.parse(localStorage.getItem('prescription'));

const lab = "visit-report"
  return (
    <div  className='container'>
        <NavBar lab={lab}/>
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
              <p>{record.billing[3]}</p>
              <p>{record.billing[2]}</p>
              <p>{record.treatmentDetails[0]}</p>
              <p>{record.treatmentDetails[1]}</p>
           
              <p>{record.treatmentDetails[2]}</p>
              </div>
              <div className='third-lab-report-third'>
              <p>Date: <span>{record.vaccine[1]}</span></p>
              {/* <p>Time:<span>11:59am</span></p> */}
              </div>
            </div>
          </div>

          
    </div>
  )
}
