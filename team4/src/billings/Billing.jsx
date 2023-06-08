import React from 'react';
import PatientsBilling from './PatientsBilling';
import DoctorsBilling from './DoctorsBilling';

export default function Billing({user}) {
  return (
    <div>
      {user ==='doctor' ? <DoctorsBilling/> :<PatientsBilling/>}
    </div>
  )
}
