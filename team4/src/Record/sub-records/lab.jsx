import React, { useState } from 'react';
import {BiFilter} from "react-icons/bi";
import {CiSearch} from "react-icons/ci";
import {IoIosArrowForward} from "react-icons/io";
import{FcCheckmark} from "react-icons/fc";
import {MdOutlineCancel} from "react-icons/md";

export default function Lab() {
    const dummyData= [
        {hosiptalName:"general",OwnerName:"chuks", testResult:" Malaria Paracite Test",Time:"14:00" ,Remark:"complete",Report:"view-report" , status:"Approve",complaint:"malariaX2"},
        {hosiptalName:"general",OwnerName:"chuks", testResult:" Malaria Paracite Test",Time:"14:00" ,Remark:"complete",Report:"view-report",status:"Approve",complaint:"malariaX2"},
        {hosiptalName:"general",OwnerName:"chuks", testResult:" Malaria Paracite Test",Time:"14:00" ,Remark:"complete",Report:"view-report",status:"Approve",complaint:"malariaX2"},
        {hosiptalName:"general",OwnerName:"chuks", testResult:" Malaria Paracite Test",Time:"14:00" ,Remark:"complete",Report:"view-report",status:"Approve",complaint:"malariaX2"},
        {hosiptalName:"general",OwnerName:"chuks", testResult:" Malaria Paracite Test",Time:"14:00" ,Remark:"complete",Report:"view-report",status:"Approve",complaint:"malariaX2"},
        {hosiptalName:"general",OwnerName:"chuks", testResult:" Malaria Paracite Test",Time:"14:00" ,Remark:"complete",Report:"view-report",status:"Approve",complaint:"malariaX2"},
        {hosiptalName:"general",OwnerName:"chuks", testResult:" Malaria Paracite Test",Time:"14:00" ,Remark:"complete",Report:"view-report",status:"Approve",complaint:"malariaX2"},
        {hosiptalName:"general",OwnerName:"chuks", testResult:" Malaria Paracite Test",Time:"14:00" ,Remark:"complete",Report:"view-report",status:"Approve",complaint:"malariaX2"},
        {hosiptalName:"general",OwnerName:"chuks", testResult:" Malaria Paracite Test",Time:"14:00" ,Remark:"complete",Report:"view-report",status:"Approve",complaint:"malariaX2"},
        {hosiptalName:"general",OwnerName:"chuks", testResult:" Malaria Paracite Test",Time:"14:00" ,Remark:"complete",Report:"view-report",status:"Approve",complaint:"malariaX2"},
      ]


      const [ serchResult, setSearchResult] = useState([]);

  return (
    <div className='overview-container'>
      <div className='visit-navigation'>
        <div className= "visit-header">
          <h2>Medical Record <IoIosArrowForward/> Lab</h2>
          <p>This Month <MdOutlineCancel/></p>
        </div>
        {/* /search component would be here  */}
        <div className='search'>
          <CiSearch/>
          <input  type="text" placeholder='search'/>
          <BiFilter className='icon'/>
        </div>
      </div>
      <div className='table'>
        <div className='table-4'>
          <h4>Hospital/ Laboratory</h4>
          <h4>Test-type</h4>
          <h4>Complaint</h4>
          <h4>Status</h4>
        </div>
          {/* this would layout component to return the data based on filter request */}
                { dummyData.map((items)=>{
                    return(
                        <>        
            <div className='table-3'>
            <div>
            <p>{items.hosiptalName}<br/>
                 {items.OwnerName}
                    </p>
            </div>
            <div>
                <p>{items.testResult}
                </p>
            </div>
            <div>
                <p>{items.complaint}</p>
            </div>
            <div className='center'>
                <p><FcCheckmark/></p>
                <p>{items.status}</p>
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
