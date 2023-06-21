import { useParams } from 'react-router-dom';
import Labvisitreport from '../../utilities/lab-visitreport';
import React, { useRef } from "react";
import NavBar from "../../utilities/NavBar";
import Labvisitreport from "../../utilities/lab-visitreport";
import "./sub-records.css";
import html2canvas from "html2canvas";
import { useServiceProviderValue } from "../../ServiceProvider";
import { useNavigate } from "react-router-dom";

export default function VisiterReport() {
  let getFormattedRecords = JSON.parse(localStorage.getItem("getFormattedRecords"));
  const { id } = useParams();
  const record = getFormattedRecords[id];
  console.log(id);

  let vitalSigns = JSON.parse(localStorage.getItem("vitalSigns"));
  let treatmentDetails = JSON.parse(localStorage.getItem("treatmentDetails"));
  let vaccine = JSON.parse(localStorage.getItem("vaccine"));
  let prescription = JSON.parse(localStorage.getItem("prescription"));
  const [{}, dispatch] = useServiceProviderValue();
  const navigate = useNavigate();
  const screenshotRef = useRef(null);
  const shareReport = () => {
    if (screenshotRef.current) {
      const body = document.body;
      const html = document.documentElement;
      const documentHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      const windowWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      const windowHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

      window.scrollTo(0, 0); // Scroll to the top of the page

      html2canvas(document.documentElement, {
        width: windowWidth,
        height: documentHeight,
        scrollX: window.scrollX,
        scrollY: window.scrollY,
        windowWidth,
        windowHeight,
      })
        .then((canvas) => {
          const imageDataURL = canvas.toDataURL();

          // const link = document.createElement("a");
          // link.href = canvas.toDataURL();
          // link.download = "screenshot.png";
          // link.click();

          dispatch({ type: "SET_SCREENSHOT", screenshot: imageDataURL });

          navigate("/share");
        })
        .catch((error) => {
          console.error("Error capturing screenshot:", error);
        });
    }
  };
  const lab = "visit-report";
  return (
    <div className="container" ref={screenshotRef}>
        <NavBar lab={lab} onClick={shareReport} />
        <Labvisitreport/>
          <div className='third-container'>
                  <div className='third-lab-report'>
              <div className='third-lab-report-first'>
                <p className='bold'>Hospital name:</p>
                <p className='bold'>Doctors Name:</p>
                <p className='bold'>Patients Complaint:</p>
                <p className='bold'>Doctors comment:</p>
                <p  className=' bolder'>Remarks/Treatments</p>
              </div>
              <div className='third-lab-report-second'>
              <p>{record.billing[3]}</p>
              <p>{record.billing[2]}</p>
              <p>{record.treatmentDetails[0]}</p>
              <p>{record.treatmentDetails[1]}</p>
           
              <p>{record.treatmentDetails[2]}</p>
              </div>
              <div className='third-lab-report-third'>
              <p>Date: <span>{record.vaccine[1]}</span></p>
              {/* <p>Time:<span>11:59am</span></p> */}
              </div>
            </div>
            
      </div>
    </div>
  );
}
