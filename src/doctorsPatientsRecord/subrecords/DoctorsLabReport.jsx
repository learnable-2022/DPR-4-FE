import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../utilities/NavBar';
import Labvisitreport from '../../utilities/lab-visitreport';

function DoctorsLabReport() {

  let getFormattedRecords = JSON.parse(localStorage.getItem("getFormattedRecords"));
  const { id } = useParams();
  const record = getFormattedRecords[id];
  console.log(id);

  const   label= "doctor-lab";

  return (
    <div  className='container'>
      <NavBar lab = {label}/>
      <Labvisitreport/>
      <div className='first-visit-container'>
         <div className='intro'>
            <div>
              <p> Name of Hospital :</p>
              <p> Doctor’s Name:</p>
                </div>
                <div className='all'>
                <p>{record.billing[3]}</p>
                <p>{record.billing[2]}</p>
              </div>
         </div>
            <div className='none'>
            <p >Date:<span> {record.billing[0]}
              </span></p>
            {/* <p >Time:<span> 11:59am</span></p> */}
            </div>
        </div>

         <div className='visit-table'>
            <ul>
              <li>S/N</li>
              <li>Test Name</li>
              <li>Resullt</li>
              <li>Remark</li>
            </ul>
        </div>
        <div className='visit-table-2'>
          <ul>
            <li>#1</li>
            <li>{record.treatmentDetails.join(', ')}</li>
            <li>Trophozoite stage of p. falciparium(+) seen</li>
            <li className='disappear'>{record.treatmentDetails.join(', ')}</li>
            <li style={{color:"#1A4D80"}}>Significant titer of salm spp gignificant titer80</li>
          </ul>
        </div>
    </div>
  )
}

export default DoctorsLabReport
