import React, { useEffect, useState } from "react";
import "./Report.css";
import { useServiceProviderValue } from "../../ServiceProvider";
import { useLocation } from "react-router-dom";
import Prescription from "./prescription";

function Report() {
  // const [dosage, setDosage] = useState("");
  // const [medication, setMedication] = useState("");
  // const [duration, setDuration] = useState("");
  // const [val, setVal] = useState([{ med: "", dur: "", dos: "" }]);
  // const location = useLocation();

  // const [reportValues, setState] = useState({});
  // let reportValues = location.state?.reportValues;

  // function addComponent() {
  //   setVal([...val, { med: "", dur: "", dos: "" }]);
  // }
  // console.log(reportValues);
  const [
    {
      complaints,
      comments,
      treatments,
      vaccineName,
      vaccineDate,
      vaccineStatus,
      dosage,
      duration,
      medication,
    },
    dispatch,
  ] = useServiceProviderValue();
  // const [complaint, setComplaint] = useState("");
  // const [comment, setComment] = useState("");
  // const [treatment, setTreatment] = useState("");
  // const [vaccineName, setVaccineName] = useState("");
  // const [vaccineDate, setVaccineDate] = useState("");
  // const [vaccineStatus, setVaccineStatus] = useState("");
  // const reportValue = {
  //   complaint,
  //   comment,
  //   treatment,
  //   vaccineName,
  //   vaccineDate,
  //   vaccineStatus,
  // };
  const handleSetComplaint = (e) => {
    // setComplaint(e.target.value);
    dispatch({ type: "SET_COMPLAINT", complaint: e.target.value });
  };
  const handleSetTreatMent = (e) => {
    // setTreatment(e.target.value);
    dispatch({ type: "SET_TREATMENT", treatment: e.target.value });
  };
  const handleSetVaccineName = (e) => {
    // setVaccineName(e.target.value);
    dispatch({ type: "SET_NAME", vaccineName: e.target.value });
  };
  const handleSetVaccineDate = (e) => {
    // setVaccineDate(e.target.value);
    dispatch({ type: "SET_DATE", vaccineDate: e.target.value });
  };
  const handleSetVaccineStatus = (e) => {
    // setVaccineStatus(e.target.value);
    dispatch({ type: "SET_STATUS", vaccineStatus: e.target.value });
  };
  const handleSetComment = (e) => {
    // setComment(e.target.value);
    dispatch({ type: "SET_COMMENT", comment: e.target.value });
  };
  const handleSetDuration = (e) => {
    dispatch({ type: "SET_DURATION", duration: e.target.value });
  };
  const handleSetDosage = (e) => {
    dispatch({ type: "SET_DOSAGE", dosage: e.target.value });
  };
  const handleSetMedication = (e) => {
    dispatch({ type: "SET_MEDICATION", medication: e.target.value });
  };
  // const handleChange = (e, i) => {
  //   const { name, value } = e.target;
  //   const onChangeVal = [...val];
  //   onChangeVal[i][name] = value;
  //   setVal(onChangeVal);

  //   dispatch({ type: "SET_DURATION", duration: onChangeVal[0].dur });
  //   dispatch({ type: "SET_DOSAGE", dosage: onChangeVal[0].dos});
  //   dispatch({ type: "SET_MEDICATION", medication:onChangeVal[0].med});
  //   setDosage(onChangeVal[0].dos)
  //   setDuration(onChangeVal[0].dur)
  //   setMedication(onChangeVal[0].med)
  //   console.log(val);
  // };
  // const handleDelete = (i) => {
  //   const deleteVal = [...val];
  //   deleteVal.splice(i, 1);
  //   setVal(deleteVal);
  // };
  // const handleMedication = (e, i) => {
  //   setMedication(val[0].med);
  // };
  // const handleDuration = (e, i) => {
  //   const inputdata = [...val];
  //   inputdata[i] = e.target.value;
  //   setVal(inputdata);
  //   setDuration(inputdata);
  // };
  // useEffect(() => {
  //   // setState(reportValues);
  // }, []);

  return (
    <div className="report">
      <div className="consultation_div">
        <p className="consultation_div_header">Consultation Report</p>
        <div className="consultation_input_div">
          <p className="report_holder_text">Patient’s Complaint:</p>
          <div className="report_value_div">
            <input
              className="report_value"
              onChange={handleSetComplaint}
              value={complaints}
              type="text"
              placeholder="-"
            />
          </div>
        </div>
        <div className="consultation_input_div">
          <p className="report_holder_text">Doctor’s Comment:</p>
          <div className="report_value_div big_text">
            <textarea
              onChange={handleSetComment}
              value={comments}
              className="report_value "
              type="text"
              placeholder="-"
            />
          </div>
        </div>
        <div className="consultation_input_div">
          <p className="report_holder_text">Remark/ Treatment:</p>
          <div className="report_value_div big_text">
            <textarea
              className="report_value "
              onChange={handleSetTreatMent}
              value={treatments}
              type="text"
              placeholder="-"
            />
          </div>
        </div>
      </div>
      <div className="vaccine_report_div">
        <p className="consultation_div_header">Vaccine Report</p>

        <div className="vaccine_input_div">
          <div>
            <p className="vaccine_name vaccine_common">Name of Vaccine</p>
            <input
              className="vaccine_input1 vi_common"
              onChange={handleSetVaccineName}
              value={vaccineName}
              type="text"
              placeholder="Enter Vaccine Name"
            />
          </div>
          <div>
            <p className="vaccine_time vaccine_common">Time/Date</p>
            <input
              className="vaccine_input2 vi_common"
              onChange={handleSetVaccineDate}
              value={vaccineDate}
              type="date"
              placeholder="Enter Vaccine Name"
            />
          </div>
          <div>
            <p className="vaccine_status vaccine_common">Status</p>
            <select
              className="vaccine_input3 vi_common"
              onChange={handleSetVaccineStatus}
              value={vaccineStatus}
            >
              <option>Completed</option>
              <option>Not Completed</option>
            </select>
          </div>
        </div>
        <p className="prescription_div_header">Prescription</p>
        <div className="prescription_div">
          <div className="prescription_header">
            <p className="light">Medication</p>
            <p className="light">Duration</p>
            <p className="light">Dosage</p>
          </div>
          <div className="prescription_input_div">
            <input
              className="prescription_input"
              type="text"
              name="med"
              onChange={handleSetMedication} //(e) => handleChange(e, i)}
              value={medication}
              placeholder="Enter Medication"
            />
            <input
              className="prescription_input"
              name="dur"
              type="text"
              onChange={handleSetDuration} //(e) => handleChange(e, i)}
              value={duration}
              placeholder="Enter Duration"
            />
            <input
              className="prescription_input"
              type="text"
              name="dos"
              value={dosage}
              onChange={handleSetDosage} //(e) => handleChange(e, i)}
              placeholder="Enter Dosage"
            />
            {/* <button
                  className="presc_delete_btn"
                  onClick={() => handleDelete(i)}
                >
                  x
                </button> */}
          </div>
          {/*val.map((data, i) => {
            return (
              <div className="prescription_input_div">
                <input
                  className="prescription_input"
                  type="text"
                  name="med"
                  onChange={(e) => handleChange(e, i)}
                  value={data.med}
                  placeholder="Enter Medication"
                />
                <input
                  className="prescription_input"
                  name="dur"
                  type="text"
                  onChange={(e) => handleChange(e, i)}
                  value={data.dur}
                  placeholder="Enter Duration"
                />
                <input
                  className="prescription_input"
                  type="text"
                  name="dos"
                  value={data.dos}
                  onChange={(e) => handleChange(e, i)}
                  placeholder="Enter Dosage"
                />
                {/* <button
                  className="presc_delete_btn"
                  onClick={() => handleDelete(i)}
                >
                  x
                </button> }
              </div>
            );
          })*/}
        </div>
        {/* <div className="add_more" onClick={addComponent}>
          <ion-icon className="add_icon" name="add-circle-outline"></ion-icon>
        </div> */}
      </div>
    </div>
  );
}

export default Report;
