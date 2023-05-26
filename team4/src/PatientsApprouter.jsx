import React, { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Landing from "./landing/landing";
import Login from "./login/login";
import Signup from "./signup/signup";
import SideBar from "./utilities/SideBar";
import Dashboard from "./dashboard/dashboard";
import Billing from "./billings/Billing";
import './App.css';
import Drafts from "./draffts/Drafts";

import SideBarDoc from "./utilities/SideBarDoc";
import Overview from "./Record/sub-records/overview";
import Lab from "./Record/sub-records/lab";
import Vaccine from "./Record/sub-records/vaccine";
import Visit from "./Record/sub-records/visit";
import Prescription from "./Record/sub-records/prescription";
import Records from "./Record/Records";
import DoctorsBilling from "./billings/DoctorsBilling";
import DoctorsDashboard from "./dashboard/DoctorsDashboard";
import DoctorsRecord from "./Record/DoctorsRecord";
import DoctorsDrafts from "./draffts/DoctorsDrafts";

// note!!!
// i have only created the router part for the signup , login and Landing page.
// subsequent route path would follow suite.

function Approuter() {


  const paths = [
    // {name: "DocDashboard", route: "/Dashboard", icon: <RxDashboard />},
    // {name:"DocRecords", route: "/DocRecords", icon: <BsReverseLayoutTextSidebarReverse/>},
    // {name: "DocBillings", route: "/DocBillings", icon:<FcMoneyTransfer/>},
    // {name: "DocDraft", route:"/DocDraft", icon:<TfiWrite/>},
    // {name: "Docsettings", route:"/Docsettings" , icon:<AiOutlineSetting/>},
    // {name: "DocLogout", route:"/DocLogout", icon:<FiLogOut/>}
  ]
      
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup />} />

        <Route path="Dashboard" element={<AuthUserLayout><Dashboard  /></AuthUserLayout>} />
        <Route path="Billing" element={<AuthUserLayout><Billing /></AuthUserLayout>} />
        <Route path="Records" element={<AuthUserLayout><Records /></AuthUserLayout>}>
          <Route path="overview" element={<Overview />} />
          <Route path="lab" element={<Lab />} />
          <Route path="vaccine" element={<Vaccine />} />
          <Route path="visit" element={<Visit />} />
          <Route path="prescription" element={<Prescription />} />
        </Route>
        <Route path="Draft" element={<AuthUserLayout><Drafts /></AuthUserLayout>} />
  



      <Route path="/DocDashboard" element={<AuthDocLayout><DoctorsDashboard/></AuthDocLayout>}/>
      <Route path="/DocRecords"element={<AuthDocLayout><DoctorsRecord/></AuthDocLayout>}/>
      <Route path="/DocBillings" element={<AuthDocLayout><DoctorsBilling/></AuthDocLayout>}/>
      <Route path="/DocDraft" element={<AuthDocLayout><DoctorsDrafts/></AuthDocLayout>}/>
     


      </Routes>
    </Router> 
  );
}
const AuthUserLayout = ({children})=> {
  return(
    <div className="Layout">
      <SideBar/>
      {children}
    </div>
  )
}
const AuthDocLayout=({children})=>{

  return(
    <div className="Layout">
      <SideBarDoc/>
      {children}
    </div>
  )
}

export default Approuter;
