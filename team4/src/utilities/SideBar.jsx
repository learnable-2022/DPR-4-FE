import React from 'react';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
// import {AiOutlineHome} from "react-icons/ai";
import * as AiIcons from "react-icons/ai";
import {RxDashboard} from "react-icons/rx";
import {BsReverseLayoutTextSidebarReverse} from "react-icons/bs";
import {FcMoneyTransfer} from "react-icons/fc";
import {TfiWrite} from "react-icons/tfi";
import {AiOutlineSetting} from "react-icons/ai";
import {FiLogOut} from "react-icons/fi";
import logo1 from "../images/logo-03.png";

import '../App.css';

export default function SideBar() {
  
        const [sidebar, setSideBar ]= useState(true);
        
        const action =()=>{
        
            setSideBar(!sidebar);
            console.log(sidebar)
        }


  return ( 
        <>
        <div className={sidebar ? "sideBar" :"sideBar action"} onClick={action}>
        <img src={logo1} alt="app-logo"/>
                <ul className='sidebar-list'>
                    <li onClick={action}><Link  to="Dashboard" className='link'><RxDashboard /><p>Dashboard</p></Link></li>
                    <li onClick={action}><Link to="Records"className='link'><BsReverseLayoutTextSidebarReverse/><p>Records</p></Link></li>
                    <li onClick={action}><Link to="Billing" className='link'><FcMoneyTransfer/><p>Billings</p></Link></li>
                    <li onClick={action}><Link to="Draft"className='link'><TfiWrite/><p>Draft</p></Link></li>
                    <li onClick={action}className='same'><Link to="*"className='link'><AiOutlineSetting/><p>settings</p></Link></li>
                <li onClick={action} className='same'><Link to ="*"className='link'><FiLogOut/><p>logout</p></Link></li>
                </ul>
             
        </div>
        <div>
        <Outlet/>
        </div>       
        </>
  )
}
