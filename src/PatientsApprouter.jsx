import React, { useContext, useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Landing from "./landing/landing";
import Login from "./login/login";
import SideBar from "./utilities/SideBar";
import Dashboard from "./dashboard/dashboard";
// import Billing from "./billings/Billing";
import "./App.css";
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
import PatientInvoiceConfirmation from "./billings/PatientInvoiceConfirmation";
import ApprovedPage from "./billings/ApprovedPage";
import DoctorInvoiceSent from "./billings/DoctorInvoiceSent";

import Vitals from "./draffts/Components/Vitals";
import Finish from "./draffts/Components/Finish";
import Report from "./draffts/Components/Report";
import Confirmation from "./login/confirmation";

import Forgotpassword from "./Password/forgotpassword";
import ChangedPassword from "./Password/changedPassword";
import Otp from "./Password/otp";
import NewPassword from "./Password/newPassword";
import StateContext from "./stateProvider/stateprovider";

import DoctorsRecords from "./doctorsPatientsRecord/doctorsRecords";
import DoctorsOverview from "./doctorsPatientsRecord/subrecords/DoctorsOverview";
import DoctorsLab from "./doctorsPatientsRecord/subrecords/DoctorsLab";
import DoctorsVaccine from "./doctorsPatientsRecord/subrecords/DoctorsVaccine";
import DoctorsPresciption from "./doctorsPatientsRecord/subrecords/DoctorsPresciption";
import Share from "./sharePage/share";

import abi from "./abi.json";
import { ethers } from 'ethers';
// note!!!
// i have only created the router part for the signup , login and Landing page.
// subsequent route path would follow suite.

function Approuter() {
  const { auth } = useContext(StateContext);
  console.log(auth.patientToken);
  const patientToken = localStorage.getItem("patientToken");
  const doctorToken = localStorage.getItem("doctorToken");

//   let contractAddress = "0xFFE09412B070bC1880D5FBD2BeD09639E367061A";
  
//   const [errorMessage, setErrorMessage] = useState(null);
// 	const [defaultAccount, setDefaultAccount] = useState(null);
	

// 	const [provider, setProvider] = useState(null);
// 	const [signer, setSigner] = useState(null);
// 	const [contract, setContract] = useState(null);
//   const [getForm , setGetForm] = useState('');



// const updateEthers = async () => {
//   try {
//     if (window.ethereum && window.ethereum.isMetaMask) {
//       let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
//   setProvider(tempProvider);
  

//   let tempSigner = tempProvider.getSigner();
//   setSigner(tempSigner);
//   console.log(tempSigner);
//   let tempContract = new ethers.Contract(contractAddress, abi, tempSigner);
//   setContract(tempContract);
//   console.log(tempContract);

      
//     } else {
//       console.error('Please install MetaMask or use a compatible Ethereum browser extension.');
//     }
//   } catch (error) {
//     console.error('Error updating Ethers:', error);
//   }
// };


// const accountChangedHandler = (newAccount) => {
// setDefaultAccount(newAccount);
// };


  return (
    <Router>
      <Routes>
        <Route path="ApprovedPage" element={<ApprovedPage />} />
        <Route path="/" element={<Landing />} />:
        {/* routes to the doctors signin and login in */}
        <Route path="signup" element={<Signingup />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<Forgotpassword />} />
        <Route path="/changedPassword" element={<ChangedPassword />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/newPassword" element={<NewPassword />} />
        {/* {Routes to patients app and the sub components} */}
        <>
          {" "}
          {patientToken ? (
            <Route
              path="Dashboard"
              element={
                <AuthUserLayout>
                  <Dashboard />
                </AuthUserLayout>
              }
            />
          ) : (
            <Route path="Dashboard" element={<Landing />} />
          )}
          {patientToken ? (
            <Route
              path="Profile"
              element={
                <AuthUserLayout>
                  {" "}
                  <PatientsProfile />{" "}
                </AuthUserLayout>
              }
            />
          ) : (
            <Route path="Profile" element={<Landing />} />
          )}
          {patientToken ? (
            <Route
              path="EditProfile"
              element={
                <AuthUserLayout>
                  {" "}
                  <PatientsEditProfile />{" "}
                </AuthUserLayout>
              }
            />
          ) : (
            <Route path="EditProfile" element={<Landing />} />
          )}
          {patientToken ? (
            <Route
              path="Billing"
              element={
                <AuthUserLayout>
                  <PatientsBilling />
                </AuthUserLayout>
              }
            />
          ) : (
            <Route path="Billing" element={<Landing />} />
          )}
          {patientToken ? (
            <Route
              path="PatientPaymentHistory"
              element={
                <AuthUserLayout>
                  <PatientPaymentHistory />
                </AuthUserLayout>
              }
            />
          ) : (
            <Route path="PatientPaymentHistory" element={<Landing />} />
          )}
          {patientToken ? (
            <Route
              path="PatientInvoice"
              element={
                <AuthUserLayout>
                  <PatientInvoice />
                </AuthUserLayout>
              }
            />
          ) : (
            <Route path="PatientInvoice" element={<Landing />} />
          )}
          {patientToken ? (
            <Route
              path="/lab/view-report/:id"
              element={
                <AuthUserLayout>
                  <LabReport />
                </AuthUserLayout>
              }
            />
          ) : (
            <Route path="/lab/view-report" element={<Landing />} />
          )}
          {patientToken ? (
            <Route
              path="/visit/visiterReport/:id"
              element={
                <AuthUserLayout>
                  <VisiterReport />
                </AuthUserLayout>
              }
            />
          ) : (
            <Route path="/visit/visiterReport" element={<Landing />} />
          )}
          {patientToken ? (
            <Route
              path="/share"
              element={
                <AuthUserLayout>
                  <Share />
                </AuthUserLayout>
              }
            />
          ) : (
            <Route path="/share" element={<Landing />} />
          )}
          {patientToken ? (
            <Route
              path="/PatientInvoiceConfirmation"
              element={<PatientInvoiceConfirmation />}
            />
          ) : (
            <Route path="/PatientInvoiceConfirmation" element={<Landing />} />
          )}
          {patientToken ? (
            <Route
              path="Records"
              element={
                <AuthUserLayout>
                  {" "}
                  <PatientsRecord />{" "}
                </AuthUserLayout>
              }
            >
              <Route index="overview" element={<Overview />} />
              <Route path="lab" element={<Lab />} />
              <Route path="vaccine" element={<Vaccine />} />
              <Route path="visit" element={<Visit />} />
              <Route path="prescription" element={<Prescription />} />
            </Route>
          ) : (
            <Route path="Records" element={<Landing />} />
          )}
        </>
        {/* {routes to doctors app and the sub components} */}
        {doctorToken ? (
          <Route
            path="/DoctorPaymentHistory"
            element={
              <AuthDocLayout>
                <DoctorPaymentHistory />
              </AuthDocLayout>
            }
          />
        ) : (
          <Route path="/DoctorPaymentHistory" element={<Landing />} />
        )}
        {doctorToken ? (
          <Route
            path="DoctorsBilling"
            element={
              <AuthDocLayout>
                <DoctorsBilling />
              </AuthDocLayout>
            }
          />
        ) : (
          <Route path="DoctorsBilling" element={<Landing />} />
        )}
        {doctorToken ? (
          <Route
            path="/ConsultationBilling"
            element={
              <AuthDocLayout>
                <ConsultationBilling />
              </AuthDocLayout>
            }
          />
        ) : (
          <Route path="/ConsultationBilling" element={<Landing />} />
        )}
        {doctorToken ? (
          <Route
            path="/DocDashboard"
            element={
              <AuthDocLayout>
                <DoctorsDashboard />
              </AuthDocLayout>
            }
          />
        ) : (
          <Route path="/DocDashboard" element={<Landing />} />
        )}
        {doctorToken ? (
          <Route
            path="/DocBillings"
            element={
              <AuthDocLayout>
                <DoctorsBilling />
              </AuthDocLayout>
            }
          />
        ) : (
          <Route path="/DocBillings" element={<Landing />} />
        )}
        {doctorToken ? (
          <Route
            path="/DocDraft"
            element={
              <AuthDocLayout>
                <DoctorsDrafts />
              </AuthDocLayout>
            }
          >
            <Route index element={<Vitals />} /> {/*A nested route!*/}
            <Route path="report" element={<Report />} /> {/*A nested route!*/}
            <Route path="finish" element={<Finish />} /> {/*A nested route!*/}
          </Route>
        ) : (
          <Route path="/DocDraft" element={<Landing />} />
        )}
        {doctorToken ? (
          <Route
            path="/DocSchedule"
            element={
              <AuthDocLayout>
                {" "}
                <SchedulePage />
              </AuthDocLayout>
            }
          />
        ) : (
          <Route path="/DocSchedule" element={<Landing />} />
        )}
        {doctorToken ? (
          <Route
            path="/DocProfile"
            element={
              <AuthDocLayout>
                {" "}
                <DoctorsProfile />{" "}
              </AuthDocLayout>
            }
          />
        ) : (
          <Route path="/DocProfile" element={<Landing />} />
        )}
        {doctorToken ? (
          <Route
            path="/DocEditProfile"
            element={
              <AuthDocLayout>
                {" "}
                <DoctorsEditProfile />
              </AuthDocLayout>
            }
          />
        ) : (
          <Route path="/DocEditProfile" element={<Landing />} />
        )}
        {doctorToken ? (
          <Route
            path="/DoctorInvoiceSent"
            element={
              <AuthDocLayout>
                {" "}
                <DoctorInvoiceSent />
              </AuthDocLayout>
            }
          />
        ) : (
          <Route path="/DoctorInvoiceSent" element={<Landing />} />
        )}
        {doctorToken ? (
          <Route
            path="DoctorsRecords"
            element={
              <AuthDocLayout>
                {" "}
                <DoctorsRecords />{" "}
              </AuthDocLayout>
            }
          >
            <Route path="doctorsoverview" element={<DoctorsOverview />} />
            <Route path="doctorslab" element={<DoctorsLab />} />
            <Route path="doctorsvaccine" element={<DoctorsVaccine />} />
            <Route
              path="doctorsprescription"
              element={<DoctorsPresciption />}
            />
          </Route>
        ) : (
          <Route path="DoctorsRecords" element={<Landing />} />
        )}
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
