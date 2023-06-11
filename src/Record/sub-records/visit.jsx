import React from 'react';
import {BiFilter} from "react-icons/bi";
import {CiSearch} from "react-icons/ci";
import {IoIosArrowForward} from "react-icons/io";
import {  useNavigate } from 'react-router-dom';
import{MdOutlineCancel} from "react-icons/md";


export default function Visit() {

const navigate =useNavigate();

const takeme =()=>{
  return navigate("/visit/visiterReport")
}

  const dummyData= [
    {hosiptalName:"Gen. Hospital, Enugu Town", name:"Dr. Ada Gen. Medicine",date:"02/05/2023",Time:"13:00 PM" ,Remark:"complete",Report:"view-report"},
    {hosiptalName:"Gen. Hospital, Enugu Town", name:"Dr. Ada Gen. Medicine", date:"02/05/2023",Time:"13:00 PM" ,Remark:"complete",Report:"view-report"},
    {hosiptalName:"Gen. Hospital, Enugu Town", name:"Dr. Ada Gen. Medicine", date:"02/05/2023",Time:"13:00 PM" ,Remark:"complete",Report:"view-report"},
    {hosiptalName:"Gen. Hospital, Enugu Town", name:"Dr. Ada Gen. Medicine", date:"02/05/2023",Time:"13:00 PM" ,Remark:"complete",Report:"view-report"},
    {hosiptalName:"Gen. Hospital, Enugu Town", name:"Dr. Ada Gen. Medicine", date:"02/05/2023",Time:"13:00 PM" ,Remark:"complete",Report:"view-report"},
    {hosiptalName:"Gen. Hospital, Enugu Town", name:"Dr. Ada Gen. Medicine", date:"02/05/2023",Time:"13:00 PM" ,Remark:"complete",Report:"view-report"},
    {hosiptalName:"Gen. Hospital, Enugu Town", name:"Dr. Ada Gen. Medicine", date:"02/05/2023",Time:"13:00 PM" ,Remark:"complete",Report:"view-report"},
    {hosiptalName:"Gen. Hospital, Enugu Town", name:"Dr. Ada Gen. Medicine", date:"02/05/2023",Time:"13:00 PM" ,Remark:"complete",Report:"view-report"},
  ]
  return (
    <div className='overview-container'>
      <div className='visit-navigation'>
        <div className='visit-header'>
          <h2>Medical Record  <IoIosArrowForward/> Hospital Visits</h2>
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
        <div className='table-1'>
          <h4>Hospital/ Attending</h4>
          <h4>Date/Time</h4>
          <h4>Complaint </h4>
        </div>

        {/* this would layout component to return the data based on filter request */}
        {dummyData.map((items)=>{
          return(
        <div className='table-2'>
          <ul>
            <li>{items.hosiptalName}<br/>{items.date}</li>
            <li>{items.Time}</li>
            <li>{items.Remark}</li>
            <li><button onClick={takeme}>{items.Report}</button></li>
          </ul>
        </div>
        )
      })}
      
      </div>
    </div>
  )
}
