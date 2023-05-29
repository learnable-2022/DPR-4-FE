import React from 'react';
import {BiFilter} from "react-icons/bi";
import {CiSearch} from "react-icons/ci";
import {IoIosArrowForward} from "react-icons/io";

export default function Lab() {
    const dummyData= [
        {hosiptalName:"general",OwnerName:"chuks", testResult:" Malaria Paracite Test",Time:"14:00" ,Remark:"complete",Report:"view-report"},
        {hosiptalName:"general",OwnerName:"miss -ada", testResult:"hiv/aid",Time:"13:00" ,Remark:"complete",Report:"view-report"},
        {hosiptalName:"times-square",OwnerName:"miss -ada", testResult:" Malaria Paracite Test",Time:"13:00" ,Remark:"complete",Report:"view-report"},
        {hosiptalName:"general",OwnerName:"miss -ada", testResult:" Malaria Paracite Test",Time:"13:00" ,Remark:"complete",Report:"view-report"},
      ]

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
                { dummyData.map((items)=>{
                    return(
                        <>        
            <div className='table-3'>
            <div>
            <p>{items.hosiptalName}
                 {items.OwnerName}
                    </p>
            </div>
            <div>
                <p>{items.testResult}
                </p>
            </div>
            <div>
                <p>{items.Time}</p>
            </div>
            <div>
                <p>{items.Remark}</p>
            </div>
            <div>
                <button>
                   {items.Report}
                </button>
            </div>
        </div>
            </>
                    )
                })}
      </div>
    </div>
  )
}
