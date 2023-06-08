import React, { useState } from 'react';
import {BiFilter} from "react-icons/bi";
import {CiSearch} from "react-icons/ci";
import {IoIosArrowForward} from "react-icons/io";
import{FcCheckmark} from "react-icons/fc";
import {MdOutlineCancel} from "react-icons/md";
import { useNavigate } from 'react-router-dom';

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
        // const checking =()=>{
        //   console.log("working fine")
        // }

      const navigate = useNavigate();
      const handleclick=()=>{
        navigate("/lab/view-report");
        console.log("its working!")
      }

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
          <ul>
            <li>Hospital/ Laboratory</li>
            <li>Test-type</li>
            <li>Complaint</li>
            <li>Status</li>
          </ul>
        </div>
          {/* this would layout component to return the data based on filter request */}
                { dummyData.map((items)=>{
                    return(
                        <>        
            <div className='table-3'>
            <ul>
              <li>{items.hosiptalName}<br/> {items.OwnerName}</li>
              <li>{items.testResult}</li>
              <li>{items.complaint}</li>
              <li>< FcCheckmark className='center'/><br/>{items.status}</li>
              <li><button onClick={handleclick}>{items.Report}</button></li>                      
            </ul>
        </div>
            </>
                    )
                })}
      </div>
    </div>
  )
}
