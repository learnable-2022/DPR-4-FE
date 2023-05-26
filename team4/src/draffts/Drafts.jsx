import React from 'react';
import DoctorsDrafts from './DoctorsDrafts';
import PatientDrafts from './PatientDrafts';

export default function Drafts({user}) {
  return (
    <div>
      {user ==='doctor' ? <DoctorsDrafts/> : <PatientDrafts/>}
    </div>
  )
}
