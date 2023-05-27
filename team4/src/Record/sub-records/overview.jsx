import React from 'react';
import './sub-records.css';
import picture1 from "../../assets/Vector (1).png";
import picture2 from "../../assets/Vector (2).png";
import picture3 from "../../assets/Mask Group.png";
import picture4 from "../../assets/Frame 185 (2).png";
import picture5 from "../../assets/Frame 185 (4).png";
import picture6 from "../../assets/Frame 185 (5).png";
import picture7 from "../../assets/Group 91 (1).png";


export default function Overview() {
  return (
    <div className='overview-container'>
     <p>Recent Report </p>
     <div className='overview-sub-container'>
        <div className='over-1'>
        My Heart Condition
          </div>
          <div className='over-2'>
          <h2>  Recent Diagnosis</h2>
          <div className='one'>
          <div>     <div className='two'> <div><h2>Malaria & Typoid</h2><p>Active</p></div>  <div><img  src={picture1}/></div></div>        </div>
            <div>  <div  className='two'> <div><h2>Chest Pain</h2><p>Last Month</p></div>  <div><img src={picture2}/></div></div>  </div>
            <div>    <div  className='two'> <div><h2>Cold & Flu</h2><p>2 Month Ago</p></div>  <div><img src={picture3}/></div></div>  </div>
            <div>  <div  className='two'> <div><h2>Cold & Flu</h2><p>Last Month</p></div>  <div><img src={picture3}/></div></div></div>
            <div>   <div  className='two'> <div><h2>Chest Pain</h2><p>Last Month</p></div>  <div><img src={picture2}/></div></div></div>
          </div>
      </div>
        <div className='over-3'>
        <h4>Active Medication</h4>
        <div className='three'>
          <div className='four'>    <div><img src={picture7}/></div><div><h4>Ciprofloxacin</h4><p>1 Tab twice daily</p></div> </div>
          <div className='four'> <div><img src={picture6}/></div><div><h4>Amatem Forte soft gel</h4><p>1 Tab twice daily</p></div></div>
          <div className='four'> <div><img src={picture5}/></div><div><h4>Vitamin C</h4><p>1 Tab twice daily</p></div></div>
          <div className='four'> <div><img src={picture4}/></div><div><h4>Omega 3</h4><p>1 Tab twice daily</p></div></div>
        </div>
      </div>
     </div>
    </div>
  )
}
