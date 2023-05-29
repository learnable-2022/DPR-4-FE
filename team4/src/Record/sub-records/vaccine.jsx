import React from 'react'
import {BiFilter} from "react-icons/bi";
import {CiSearch} from "react-icons/ci";
import {IoIosArrowForward} from "react-icons/io";

export default function Vaccine() {
  return (
    <div className='overview-container'>
      <div className='visit-navigation'>
        <div>
          <h2>Medical Record <IoIosArrowForward/>  Vaccines</h2>
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
          <h4>Hospital/ Laboratory</h4>
          <h4>Vaccines</h4>
          <h4>Date/Time </h4>
          <h4>Remark</h4>
        </div>
        <div className='table-2'>
        <div>
          <p>Gen. Hospital, Enugu Town<br/>
            Dr. Ada (Gen. Medicine)</p>
        </div>
          <div>
            <p>Covid Vaccine<br/> Shots 1,2,3
              </p>
          </div>
          <div>
            <p>Malaria &<br/>
               Typhoid</p>
          </div>
          <div>
            <p>Completed</p>
          </div>
        </div>
      </div>
    </div>
  )
}
