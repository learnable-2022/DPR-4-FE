import React from "react";
import PatientDashboard from './PatientDashboard';
import DoctorsDashboard from './DoctorsDashboard';
export default function Dashboard({user}) {


  return (
    <div>
     {user === 'doctor' ?  <DoctorsDashboard/>  : <PatientDashboard/>}
    </div>
  )
}
