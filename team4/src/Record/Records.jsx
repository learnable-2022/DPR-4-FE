import React from "react";
import PatientsRecord from "./PatientsRecord";
import DoctorsRecord from "./DoctorsRecord";

export default function Records({ user }) {
  return (
    <div>{user === "doctor" ? <DoctorsRecord /> : <PatientsRecord />}</div>
  );
}
