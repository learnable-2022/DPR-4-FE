import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Confirmation = () => {
    const navigate = useNavigate();
    const  [ value, setValue]= useState()
    const handleFunction=()=>{
        navigate("/signup",{ state: value})
    }
    console.log(value);
  return (
    <div>
      <select name="user" id="user-is" onChange={(e)=>setValue(e.target.value)}>
        <option value="doctor">doctor</option>
        <option value="patient">patient</option>
      </select>
      <button onClick={handleFunction}>To signup</button>
    </div>
  )
}

export default Confirmation
