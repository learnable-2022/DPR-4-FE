import React from 'react';
import {RxDashboard} from "react-icons/rx";
import {BsReverseLayoutTextSidebarReverse} from "react-icons/bs";
import {FcMoneyTransfer} from "react-icons/fc";
import {TfiWrite} from "react-icons/tfi";
import {AiOutlineSetting} from "react-icons/ai";
import {FiLogOut} from "react-icons/fi";
import logo1 from "../assets/logo-03.png";
import { Link } from 'react-router-dom';

export default function SideBarDoc() {

    const paths = [
        {name: "DocDashboard", route: "/DocDashboard", icon: <RxDashboard />},
        {name:"DocRecords", route: "/DocRecords", icon: <BsReverseLayoutTextSidebarReverse/>},
        {name: "DocBillings", route: "/DocBillings", icon:<FcMoneyTransfer/>},
        {name: "DocDraft", route:"/DocDraft", icon:<TfiWrite/>},
        {name: "Docsettings", route:"/Docsettings" , icon:<AiOutlineSetting/>},
        {name: "DocLogout", route:"/DocLogout", icon:<FiLogOut/>}
      ]
  return (
    <div className="sideBar">
        <div><img src={logo1} alt="pics"/></div>
      {paths.map((items)=>{
            return(
                    <div className='middle-section'>
                       <Link to={items.route} className='links'>{items.icon}<p>{items.name}</p></Link> 
                    </div>
            )
      })}
    </div>
  )
}
