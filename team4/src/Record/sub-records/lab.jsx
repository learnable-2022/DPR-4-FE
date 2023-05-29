import React from 'react';
import {BiFilter} from "react-icons/bi";
import {CiSearch} from "react-icons/ci";
import {IoIosArrowForward} from "react-icons/io";

export default function Lab() {
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
        <div className='table-4'>
          <h4>Hospital/ Laboratory</h4>
          <h4>Vaccines</h4>
          <h4>Date/Time </h4>
          <h4>Remark</h4>
        </div>
        <div className='table-3'>
        <div>
          <p>Alpha Diagnostics <br/>Laboratories<br/>
                Miss Kehinde
                </p>
        </div>
          <div>
            <p>Widal Test<br/>
               Malaria Paracite Test<br/>
             Full Blood count
              </p>
          </div>
          <div>
            <p>Malaria</p>
          </div>
          <div>
            <p>Completed</p>
          </div>
          <div>
            <button>
                view report
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
