import React, { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Landing from "./landing/landing";
import Login from "./login/login";
import Signup from "./signup/signup";
import SideBar from "./utilities/SideBar";
import Dashboard from "./dashboard/dashboard";
import Billing from "./billings/Billing";

import Drafts from "./draffts/Drafts";


import Overview from "./Record/sub-records/overview";
import Lab from "./Record/sub-records/lab";
import Vaccine from "./Record/sub-records/vaccine";
import Visit from "./Record/sub-records/visit";
import Prescription from "./Record/sub-records/prescription";
import Records from "./Record/Records";

// note!!!
// i have only created the router part for the signup , login and Landing page.
// subsequent route path would follow suite.

function Approuter() {
      const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
      const [user, setUser]= useState('');


      const doctorHandler =()=>{
        setUser('doctor');
      }

      const patientHandler=()=>{
        setUser('patient');
      }
      const LoginUser = () => {
            setIsUserLoggedIn(true)
      }
  return (
    <Router>
      {
            isUserLoggedIn &&  <SideBar/>
      }
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login LoginUser={LoginUser} doctor={doctorHandler} patient={patientHandler}/>} />
        <Route path="signup" element={<Signup />} />

        <Route path="Dashboard" element={<Dashboard user={user} />} />

        <Route path="Billing" element={<Billing user={user}/>} />

        <Route path="Records" element={<Records user={user}/>}>
          <Route path="overview" element={<Overview />} />
          <Route path="lab" element={<Lab />} />
          <Route path="vaccine" element={<Vaccine />} />
          <Route path="visit" element={<Visit />} />
          <Route path="prescription" element={<Prescription />} />
        </Route>

        <Route path="Draft" element={<Drafts user={user}/>} />
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default Approuter;
