import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Landing from "./landing/landing";
import Login from "./login/login";
import SideBar from "./utilities/SideBar";
import Dashboard from "./dashboard/dashboard";
import Billing from "./billings/Billing";
import "./App.css";
import Drafts from "./draffts/Drafts";
import SideBarDoc from "./utilities/SideBarDoc";
import Overview from "./Record/sub-records/overview";
import Lab from "./Record/sub-records/lab";
import Vaccine from "./Record/sub-records/vaccine";
import Visit from "./Record/sub-records/visit";
import Prescription from "./Record/sub-records/prescription";
import PatientsRecord from "./Record/PatientsRecord";
import DoctorsBilling from "./billings/DoctorsBilling";
import DoctorsDashboard from "./dashboard/DoctorsDashboard";
import DoctorsDrafts from "./draffts/DoctorsDrafts";
import SchedulePage from "./dashboard/schedulepages/SchedulePage";
import DoctorsProfile from "./dashboard/profilepages/DoctorsProfile";
import PatientsProfile from "./dashboard/profilepages/PatientsProfile";
import PatientsEditProfile from "./dashboard/profilepages/PatientsEditProfile";
import DoctorsEditProfile from "./dashboard/profilepages/DoctorsEditProfile";
import LabReport from "./Record/sub-records/LabReport";
import VisiterReport from "./Record/sub-records/visiterReport";
import Authpage from "./login/authpage";
import Signingup from "./login/signingup";
import Patientauthpage from "./login/patientauthpage";
import Patientsignup from "./login/patientsignup";
import Patientlogin from "./login/patientlogin";


// note!!!
// i have only created the router part for the signup , login and Landing page.
// subsequent route path would follow suite.

function Approuter() {
  const paths = [


  // const paths = [
    // {name: "DocDashboard", route: "/Dashboard", icon: <RxDashboard />},
    // {name:"DocRecords", route: "/DocRecords", icon: <BsReverseLayoutTextSidebarReverse/>},
    // {name: "DocBillings", route: "/DocBillings", icon:<FcMoneyTransfer/>},
    // {name: "DocDraft", route:"/DocDraft", icon:<TfiWrite/>},
    // {name: "Docsettings", route:"/Docsettings" , icon:<AiOutlineSetting/>},
    // {name: "DocLogout", route:"/DocLogout", icon:<FiLogOut/>}
  ];

  // ]
      
  return (
    <Router>
      <Routes>
        {/* public routes  */}
        <Route path="/" element={<Landing />} />
       
 {/* routes to the doctors signin and login in */}
 <Route path="signup" element={<Signingup/>} /> 
        <Route path="auth-page" element={<Authpage/>}/> 
        <Route path="login" element={<Login/>} />
         {/* routes to the patients signin and login in */}
         <Route path="patient-auth-page" element={<Patientauthpage/>}/>
        <Route path = "patient-sign-up" element={<Patientsignup/>}/>
        <Route path="patient-login"   element={<Patientlogin/>}/>
         {/* {Routes to patients app and the sub components} */}
         <Route path="Dashboard" element={<AuthUserLayout><Dashboard  /></AuthUserLayout>} />
        <Route path="Billing" element={<AuthUserLayout><Billing /></AuthUserLayout>} />
        <Route path="Records" element={<AuthUserLayout><PatientsRecord/></AuthUserLayout>}>
          <Route index ="overview" element={<Overview />} />
          <Route path="lab" element={<Lab />} />
          <Route path="vaccine" element={<Vaccine />} />
          <Route path="visit" element={<Visit />} />
          <Route path="prescription" element={<Prescription />} />
        </Route>
        <Route path="Lab-report" element={<AuthUserLayout><LabReport/></AuthUserLayout>}/>
        <Route path="visiterReport" element={<AuthUserLayout><VisiterReport/></AuthUserLayout>}/>
        <Route path="Draft" element={<AuthUserLayout><Drafts /></AuthUserLayout>} />
{/* {routes to doctors app and the sub components} */}

<Route path="/DocDashboard" element={<AuthDocLayout><DoctorsDashboard/></AuthDocLayout>}/>
      <Route path="/DocBillings" element={<AuthDocLayout><DoctorsBilling/></AuthDocLayout>}/>
      <Route path="/DocDraft" element={<AuthDocLayout><DoctorsDrafts/></AuthDocLayout>}/>
     




       
       
         
        
       




       
       
        <Route
          path="Profile"
          element={
            <AuthUserLayout>
              <PatientsProfile />
            </AuthUserLayout>
          }
        />
        <Route
          path="EditProfile"
          element={
            <AuthUserLayout>
              <PatientsEditProfile />
            </AuthUserLayout>
          }
        />

        <Route
          path="/DocSchedule"
          element={
            <AuthDocLayout>
              <SchedulePage />
            </AuthDocLayout>
          }
        />
        <Route
          path="/DocProfile"
          element={
            <AuthDocLayout>
              <DoctorsProfile />
            </AuthDocLayout>
          }
        />
        <Route
          path="/DocEditProfile"
          element={
            <AuthDocLayout>
              <DoctorsEditProfile />
            </AuthDocLayout>
          }
        />
      </Routes>
    </Router>
  );
}
const AuthUserLayout = ({ children }) => {
  return (
    <div className="Layout">
      <SideBar />
      {children}
    </div>
  );
};
const AuthDocLayout = ({ children }) => {
  return (
    <div className="Layout">
      <SideBarDoc />
      {children}
    </div>
  );
};

export default Approuter;
