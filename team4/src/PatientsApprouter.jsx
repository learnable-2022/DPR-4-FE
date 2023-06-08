import React, { useContext } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Landing from "./landing/landing";
import Login from "./login/login";
import SideBar from "./utilities/SideBar";
import Dashboard from "./dashboard/dashboard";
// import Billing from "./billings/Billing";
import './App.css';
import Drafts from "./draffts/Drafts";
import PatientsBilling from "../src/billings/PatientsBilling";
import "./App.css";
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
import PatientPaymentHistory from "../src/billings/PatientPaymentHistory";
import PatientInvoice from "../src/billings/PatientInvoice";
import ConsultationBilling from "../src/billings/ConsultationBilling";
import DoctorPaymentHistory from "../src/billings/DoctorPaymentHistory";
import SchedulePage from "./dashboard/schedulepages/SchedulePage";
import DoctorsProfile from "./dashboard/profilepages/DoctorsProfile";
import PatientsProfile from "./dashboard/profilepages/PatientsProfile";
import PatientsEditProfile from "./dashboard/profilepages/PatientsEditProfile";
import DoctorsEditProfile from "./dashboard/profilepages/DoctorsEditProfile";
import LabReport from "./Record/sub-records/LabReport";
import VisiterReport from "./Record/sub-records/visiterReport";
import Signingup from "./login/signingup";
import Confirmation from "./login/confirmation";

import Forgotpassword from "./Password/forgotpassword";
import ChangedPassword from "./Password/changedPassword";
import Otp from "./Password/otp";
import NewPassword from "./Password/newPassword";
import StateContext from "./stateProvider/stateprovider";

// note!!!
// i have only created the router part for the signup , login and Landing page.
// subsequent route path would follow suite.

function Approuter() {
  
const {auth} = useContext(StateContext);
console.log(auth.patientToken)




      
  return (
    <Router>
      <Routes>
        {/* public routes  */}
        <Route path="/" element={<Landing />} />
       
 {/* routes to the doctors signin and login in */}
        <Route path="signup" element={<Signingup/>} /> 
        <Route path="/confirmation" element={<Confirmation/>}/> 
        <Route path="/login" element={<Login/>} />

        <Route path="/forgotPassword" element={<Forgotpassword/>} />
        <Route path="/changedPassword" element={<ChangedPassword />} />
        <Route path="/otp" element={<Otp/>} />
        <Route path="/newPassword" element={<NewPassword/>} />

        
        
         {/* {Routes to patients app and the sub components} */}

       
        {auth.patientToken ? (<> <Route path="Dashboard" element={<AuthUserLayout><Dashboard  /></AuthUserLayout>} />
        <Route path="Profile" element={ <AuthUserLayout> <PatientsProfile /> </AuthUserLayout>} />
        <Route path="EditProfile"element={<AuthUserLayout> <PatientsEditProfile /> </AuthUserLayout>  } />


        <Route path="Billing" element={<AuthUserLayout><PatientsBilling/></AuthUserLayout>} />
        <Route path="PatientPaymentHistory" element={<AuthUserLayout><PatientPaymentHistory/></AuthUserLayout>} />
         <Route path="PatientInvoice" element={<AuthUserLayout><PatientInvoice/></AuthUserLayout>} />

        <Route path="Records" element={<AuthUserLayout><PatientsRecord/></AuthUserLayout>}>
          <Route index ="overview" element={<Overview />} />
          <Route path="lab" element={<Lab />} />
          <Route path="vaccine" element={<Vaccine />} />
          <Route path="visit" element={<Visit />} />
          <Route path="prescription" element={<Prescription />} />
        </Route>
        <Route path="/lab/view-report" element={<AuthUserLayout><LabReport/></AuthUserLayout>}/>
        <Route path="/visit/visiterReport" element={<AuthUserLayout><VisiterReport/></AuthUserLayout>}/>

        <Route path="Draft" element={<AuthUserLayout><Drafts /></AuthUserLayout>} /></> ) :   <Route path="/" element={<Landing />} /> }
        
      {/* {routes to doctors app and the sub components} */}

    
   
      {/* <Route path="/DocPatientPaymentHistory" element={<AuthDocLayout><DoctorsBilling/></AuthDocLayout>}/> */}
      { auth.doctorToken ?(<>
        <Route path="/DoctorPaymentHistory" element={<AuthDocLayout><DoctorPaymentHistory/></AuthDocLayout>}/>
      <Route path="DoctorsBilling" element={<AuthDocLayout><DoctorsBilling/></AuthDocLayout>}/>
      <Route path="/ConsultationBilling" element={<AuthDocLayout><ConsultationBilling/></AuthDocLayout>}/>
      <Route path="/DocDashboard" element={<AuthDocLayout><DoctorsDashboard/></AuthDocLayout>}/>
      <Route path="/DocBillings" element={<AuthDocLayout><DoctorsBilling/></AuthDocLayout>}/>


      <Route path="/DocDraft" element={<AuthDocLayout><DoctorsDrafts/></AuthDocLayout>}/>


        
        <Route path="/DocSchedule" element={ <AuthDocLayout> <SchedulePage /></AuthDocLayout> }/>
        <Route path="/DocProfile" element={  <AuthDocLayout> <DoctorsProfile /> </AuthDocLayout>}/>
        <Route path="/DocEditProfile" element={ <AuthDocLayout> <DoctorsEditProfile /></AuthDocLayout>}/>

      
      </>):  <Route path="/" element={<Landing />} /> }
      
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
