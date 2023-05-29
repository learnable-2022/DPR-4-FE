import React from 'react';
import {BiFilter} from "react-icons/bi";
import {CiSearch} from "react-icons/ci";

export default function Visit() {
  return (
    <div className='overview-container'>
      <div className='visit-navigation'>
        <div>
          <h2>Medical Record  Hospital Visits</h2>
          <p>This Month</p>
        </div>
        <div className='search'>
          <CiSearch/>
          <input  type="text" placeholder='search'/>
          <BiFilter className='icon'/>
        </div>
      </div>
      <div className='table'>
        <div className='table-1'>
          <h4>Hospital/ Attending</h4>
          <h4>Date/Time</h4>
          <h4>Complaint </h4>
        </div>
        <div className='table-2'>
        <div>
          <p>Gen. Hospital, Enugu Town<br/>
            Dr. Ada (Gen. Medicine)</p>
        </div>
          <div>
            <p>02/05/2023<br/>
            11:59am
              </p>
          </div>
          <div>
            <p>Malaria &<br/>
               Typhoid</p>
          </div>
          <div>
            <button>
                view report
            </button>
          </div>
        </div>
      </div>
      {/* <table class="table">
  <thead className="">
    <tr className='thead'>
      <th>Hospital/ Attending</th>
      <th>Date/Time</th>
      <th>Complaint </th>
    </tr>
  </thead>
  <tbody>
    <tr  className='thead'>
      <td>Gen. Hospital, Enugu Town<br/>
            Dr. Ada (Gen. Medicine)</td>

      <td>02/05/2023<br/>
            11:59am</td>

      <td>Malaria &<br/>
               Typhoid</td>
    <td>
    <button>
                view report
            </button>
    </td>
    </tr>
  </tbody>
</table> */}
    </div>
  )
}
