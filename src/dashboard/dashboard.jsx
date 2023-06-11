import React from "react";
import PatientDashboard from "./PatientDashboard";
import DoctorsDashboard from "./DoctorsDashboard";
import "./dashboard.css";
export default function Dashboard({ user }) {
  return (
    <div className="dashboard">
      {user === "doctor" ? <DoctorsDashboard /> : <PatientDashboard />}
    </div>
  );
}
