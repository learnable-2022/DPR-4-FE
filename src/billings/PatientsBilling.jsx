import React from "react";
import SideBar from "../utilities/SideBar";
import "./billing.css";
import "./Responsiveness.css";
import "../App.css";
import { CiSearch } from "react-icons/ci";
import Notification from "../assets/images/Notification.png";
import PatientPics from "../assets/images/PatientPics.png";
import Show from "../assets/images/Show.png";
import Dollar from "../assets/images/CurrencyDollarOutline.png";
import ArrowDown2 from "../assets/images/ArrowDown2.png";
import BlockIcon from "../assets/images/BlockIcon.png";
import ArrowDown from "../assets/images/ArrowDown.png";
import ArrowUp from "../assets/images/ArrowUp.png";
import ArrowSlant from "../assets/images/ArrowSlant.png";
import Calendar from "../assets/images/Calendar.png";
import BlockIconResize from "../assets/images/BlockIconResize.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import url from "../api/BillingApi";
import { useState } from "react";
import {GiHamburgerMenu} from "react-icons/gi";




export default function PatientsBilling() {

  const [transactionArray, setTransactionArray] = useState([]);
  const [patientId, setPatientId] = useState([]);


useEffect(()=>{
    const fetchdata = async()=>{
      try{
        const response = await url.get('/transactions');
        console.log('response::  ',response);
        setTransactionArray(response.data.transactions);

        setPatientId(response.data.transactions._id);

        console.log('trans :: ',response.data.transactions);
      }catch(err){
        console.log('err:: ',err);
      }

    }
    fetchdata();
}, [])

console.log("patientId", patientId)

  const navigate = useNavigate();
  function handleClick(e) {
    navigate("/PatientPaymentHistory");
  }

  function handlePress(e) {
    navigate("/PatientInvoice");
  }

  return (
    <>
      <div className="Right">
        <div className="billingBoardDashboard">
          <div className="billingNav">
            <div className="patientName">
              <h2>
                Hello, Amaka <br /> Chibueze!
              </h2>
            </div>

            <div className="searchParent">
              <div className="searchBox">
                <CiSearch />
                <input type="text" placeholder="Search.." />
              </div>

              <div className="searchIcons">
                <img src={Notification} alt="pics" />
                <img src={PatientPics} alt="pics" />
              </div>
            </div>
          </div>
        </div>
        {/* =========================================== */}
        <div className="smallScreenNav">
        <div className="searchParent">
          <div>
            <GiHamburgerMenu/>
          </div>
              <div className="searchBox">
                <CiSearch />
                <input type="text" placeholder="Search.." />
              </div>

              <div className="searchIcons">
                <img src={Notification} alt="pics" />
                <img src={PatientPics} alt="pics" />
              </div>
            </div>

            <div className="smallScreenNavName">
              <p>Hello, Amaka Chibueze!</p>
            </div>
            </div>

        {/* ============================================= */}

        <div className="Dashboard">
          <div className="patientDashboardHeading">
            <p>Payment History</p>
          </div>
          <div className="patientDashboard">
            <div className="patientNav">
              <ul>
                <li>Name</li>
                <li>Status</li>
                <li>Amount </li>
              </ul>
            </div>

            <div className="PatientEntities">
              {transactionArray.length > 0 && transactionArray.map((transaction,index)=>{
                    // display: grid;
                    // grid-template-columns: 1fr 1fr 1fr;
                return(
               <div key={transaction._id}>
                  <ul>
                    <li>{transaction.healthcareProvider}</li>
                  <li className={`${transaction.status}`}>{transaction.status}</li>
                  <li>USD {transaction.amount} </li> 
                 
                </ul>
                <hr className="PatientUnderline" key={`${index}-${transaction._id}`}/>
                 </div>
                )
              })}
              {/* <ul >
                <li>Dr. Ada</li>
                <li className="Successful">Successful</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="PatientUnderline"></hr> */}
              {/* <ul>
                <li>Dr. Charl</li>
                <li className="Declined">Declined</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="PatientUnderline"></hr> */}
              {/* <ul>
                <li>Dr. Chris</li>
                <li className="Successful">Successful</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="PatientUnderline"></hr> */}
              {/* <ul>
                <li>Dr. Kemisola</li>
                <li className="Successful">Successful</li>
                <li>USD 22,000 </li>
              </ul> */}
            </div>
          </div>
          <div className="ViewAll">
              <p onClick={handleClick}>View all</p>
          </div> 


          {/* /////////////////////////down////////////////////////////// */}
          <div className="patientDashboardHeading">
            <p>Invoice Statement</p>
          </div>
          <div className="patientDashboard">
            <div className="patientNav">
              <ul>
                <li>Name</li>
                <li>Status</li>
                <li>Amount </li>
              </ul>
            </div>

            <div className="PatientEntities" onClick={handlePress}>
              <ul>
                <li>Dr. Ada</li>
                <li className="successful">Paid</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="PatientUnderline"></hr>
              <ul>
                <li>Dr. Charl</li>
                <li className="declined">Declined</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="PatientUnderline"></hr>
              <ul>
                <li>Dr. Chris</li>
                <li className="successful">Paid</li>
                <li>USD 22,000 </li>
              </ul>
              <hr className="PatientUnderline"></hr>
              <ul>
                <li>Dr. Kemisola</li>
                <li className="successful">Paid</li>
                <li>USD 22,000 </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
