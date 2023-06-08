import React from 'react'
import {BiFilter} from "react-icons/bi";
import {CiSearch} from "react-icons/ci";
import {IoIosArrowForward} from "react-icons/io";
import{MdOutlineCancel} from "react-icons/md";

export default function Vaccine() {
  const dummyData= [
    {hosiptalName:"Gen. Hospital, Enugu Town",name:"Dr. Ada (Gen. Medicine)",Date:"02/05/2023",Time:"14:00" ,Remark:"complete",vaccine:"Covid Vaccine Shots 1,2,3"},
    {hosiptalName:"Gen. Hospital, Enugu Town",name:"Dr. Ada (Gen. Medicine)", Time:"14:00" ,Remark:"complete",vaccine:"Covid Vaccine Shots 1,2,3",Date:"02/05/2023"},
    {hosiptalName:"Gen. Hospital, Enugu Town",name:"Dr. Ada (Gen. Medicine)", Time:"14:00" ,Remark:"complete",vaccine:"Covid Vaccine Shots 1,2,3",Date:"02/05/2023"},
    {hosiptalName:"Gen. Hospital, Enugu Town",name:"Dr. Ada (Gen. Medicine)", Time:"14:00" ,Remark:"complete",vaccine:"Covid Vaccine Shots 1,2,3",Date:"02/05/2023"},
    {hosiptalName:"Gen. Hospital, Enugu Town",name:"Dr. Ada (Gen. Medicine)", Time:"14:00" ,Remark:"complete",vaccine:"Covid Vaccine Shots 1,2,3" ,Date:"02/05/2023"},
    {hosiptalName:"Gen. Hospital, Enugu Town",name:"Dr. Ada (Gen. Medicine)", Time:"14:00" ,Remark:"complete",vaccine:"Covid Vaccine Shots 1,2,3",Date:"02/05/2023"},
    
  ]

  return (
    <div className='overview-container'>
      <div className='visit-navigation'>
        <div className= "visit-header">
          <h2>Medical Record <IoIosArrowForward/>  Vaccines</h2>
          <p>This Month<MdOutlineCancel/></p>
        </div>
         {/* /search component would be here  */}
        <div className='search'>
          <CiSearch/>
          <input  type="text" placeholder='search'/>
          <BiFilter className='icon'/>
        </div>
      </div>
      <div className='table'>
        <div className='table-1-vaccine'>
          <h4>Hospital/ Laboratory</h4>
          <h4>Vaccines</h4>
          <h4>Date/Time </h4>
          <h4>Remark</h4>
        </div>
          {/* this would layout component to return the data based on filter request */}
        {dummyData.map((items)=>{
            return(
        <div className='table-2-vaccine'>
              <ul>
                <li>{items.hosiptalName} <br/>{items.name}</li>
                <li>{items.vaccine}</li>
                <li>{items.Date}<br/>{items.Time}</li>
                <li>{items.Remark}</li>
              </ul>
        </div>


            )
        })}
      </div>
    </div>
  )
}
