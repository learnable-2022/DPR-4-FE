import React, { useEffect, useState, useMemo } from "react";
import "./Report.css";
import { useServiceProviderValue } from "../../ServiceProvider";
import { useLocation } from "react-router-dom";
import Prescription from "./prescription";
import Delete from "../../assets/images/Delete.svg";
import AddButton from "../../assets/add-circle1.svg";

function Report() {
  // const [dosage, setDosage] = useState("");
  // const [medication, setMedication] = useState("");
  // const [duration, setDuration] = useState("");
  const [val, setVal] = useState([{ med: "", dur: "", dos: "" }]);
  // const location = useLocation();

  // const [reportValues, setState] = useState({});
  // let reportValues = location.state?.reportValues;

  function addComponent() {
    setVal([...val, { med: "", dur: "", dos: "" }]);
  }
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
      prescriptions,
      billings,
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
  console.log(vaccineStatus);
  const handleSetComment = (e) => {
    // setComment(e.target.value);
    dispatch({ type: "SET_COMMENT", comment: e.target.value });
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onChangeVal = [...val];
    onChangeVal[i][name] = value;
    setVal(onChangeVal);

    console.log(val);
    dispatch({
      type: "SET_PRESCRIPTION",
      prescriptions: [...val],
    });
  };
  const handleDelete = (i) => {
    const deleteVal = [...val];
    deleteVal.splice(i, 1);
    setVal(deleteVal);
  };
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
          <div className="report_vaccine_header_div">
            <p className="vaccine_name vaccine_common">Name of Vaccine</p>
            <p className="vaccine_time vaccine_common">Time/Date</p>
            <p className="vaccine_status vaccine_common">Status</p>
          </div>
          <div className="report_vaccine_input">
            <p className="hidden">Name of Vaccine</p>
            <input
              className="vaccine_input1 vi_common"
              onChange={handleSetVaccineName}
              value={vaccineName}
              type="text"
              placeholder="Enter Vaccine Name"
            />
            <p className="hidden">Time/Date</p>
            <input
              className="vaccine_input2 vi_common"
              onChange={handleSetVaccineDate}
              value={vaccineDate}
              type="date"
              placeholder="Enter Vaccine Name"
            />
            <p className="hidden">Status</p>
            <select
              className="vaccine_input3 vi_common"
              onChange={handleSetVaccineStatus}
              value={vaccineStatus}
            >
              <option disabled selected value="">
                Select Vaccine Status
              </option>
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
            <p></p>
          </div>

          {val.map((data, i) => {
            return (
              <div className="prescription_input_div">
                <p className="hidden">Medication</p>
                <input
                  className="prescription_input_"
                  type="text"
                  name="med"
                  onChange={(e) => handleChange(e, i)}
                  value={data.med}
                  placeholder="Enter Medication"
                />
                <p className="hidden">Duration</p>
                <input
                  className="prescription_input_"
                  name="dur"
                  type="text"
                  onChange={(e) => handleChange(e, i)}
                  value={data.dur}
                  placeholder="Enter Duration"
                />
                <p className="hidden">Dosage</p>
                <input
                  className="prescription_input_"
                  type="text"
                  name="dos"
                  value={data.dos}
                  onChange={(e) => handleChange(e, i)}
                  placeholder="Enter Dosage"
                />
                {
                  <img
                    className="presc_delete_btn"
                    src={Delete}
                    onClick={() => handleDelete(i)}
                  />
                }
              </div>
            );
          })}
        </div>

        {}
      </div>
      <div className="bottom_action_wrapper">
        <div className="bottom_action_div">
          <div className="add_more">
            <p>Add Another Medication</p>
            <img
              src={AddButton}
              className="add_icon"
              onClick={addComponent}
              name="add-circle-outline"
            />
          </div>
          {/* <div className="report_action_btn">
            <button className="report_save ">Save </button>
            <button className="report_next">Next</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Report;
