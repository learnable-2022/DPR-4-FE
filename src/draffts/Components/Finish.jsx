import React, { useEffect, useState } from "react";
import "./Finish.css";
import { useServiceProviderValue } from "../../ServiceProvider";
import addButton from "../../assets/add-circle.svg";
import { useLocation } from "react-router-dom";

function Finish({contract}) {
  const [
    {
      temperature,
      bloodCount,
      bloodPressure,
      glucoseLevel,
      heartRate,
      oxygen,
      respRate,
      medication,
      dosage,
      duration,
      complaints,
      comments,
      treatments,
      vaccineName,
      vaccineDate,
      vaccineStatus,
      prescriptions,
      billingDate,
      billingPatientName,
      billingProvider,
      billingLocation,
      billings,
    },
    dispatch,
  ] = useServiceProviderValue();
  const location = useLocation();
  const shouldApplyStyle = location.pathname.includes("/finish");

  const [val, setVal] = useState([
    { serviceType: "", serviceCharge: "", tax: "", subTotal: "" },
  ]);
  function addComponent() {
    setVal([
      ...val,

      { serviceType: "", serviceCharge: "", tax: "", subTotal: "" },
    ]);
  }
  const handleSetDate = (e) => {
    dispatch({ type: "SET_BILLING_DATE", billingDate: e.target.value });
  };
  const handleSetName = (e) => {
    dispatch({ type: "SET_BILLING_NAME", billingPatientName: e.target.value });
  };
  const handleSetProvider = (e) => {
    dispatch({ type: "SET_BILLING_PROVIDER", billingProvider: e.target.value });
  };
  const handleSetLocation = (e) => {
    dispatch({ type: "SET_BILLING_LOCATION", billingLocation: e.target.value });
  };
  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onChangeVal = [...val];
    onChangeVal[i][name] = value;
    setVal(onChangeVal);
    console.log(val);
    dispatch({
      type: "SET_BILLINGS",
      billings: [...val],
    });
    console.log(billings);
  };

  return (
    <div className="finish">
      <div className="billing_name_wrapper">
        {" "}
        <p className="billing_name_header">Billing</p>
      </div>

      <div className="billing_info_wrapper">
        <div className="billing_info_div">
          <div className="date_billing_info">
            <p className="billing_date_header draft_billing_header">
              Bill Date
            </p>
            <input
              type="date"
              onChange={handleSetDate}
              value={billingDate}
              className="billing_input_date draft_billing_input"
            />
          </div>
          <div className="name_billing_info">
            <p className="billing_name_header draft_billing_header ">
              Patient Name
            </p>
            <input
              type="text"
              onChange={handleSetName}
              className="billing_input_name draft_billing_input"
              value={billingPatientName}
              placeholder="-"
            />
          </div>
          <div className="provider_billing_info">
            <p className="billing_provider_header draft_billing_header">
              Healthcare Provider
            </p>
            <input
              type="text"
              onChange={handleSetProvider}
              value={billingProvider}
              className="billing_input_provider draft_billing_input"
              placeholder="-"
            />
          </div>
          <div className="location_billing_info">
            <p className="billing_location_header draft_billing_header">
              Location
            </p>
            <input
              type="text"
              onChange={handleSetLocation}
              className="billing_input_location draft_billing_input"
              value={billingLocation}
              placeholder="-"
            />
          </div>
        </div>
      </div>
      {/* <button className="vitals_next">Save</button> */}
      <div className="service_charge_header_wrapper">
        <div className="service_charge_header">
          <p className="service_type draft_service_header">Service Type</p>
          <p className="service_charge draft_service_header">Service Charge</p>
          <p className="service_tax draft_service_header">Tax (NGN)</p>
          <p className="service_total draft_service_header">Subtotal (NGN)</p>
        </div>
      </div>

      {val.map((data, i) => {
        return (
          <div className="service_charge_values_wrapper">
            <div className="all_service_charge_values_container">
              <div className="service_charge_values">
                <input
                  type="text"
                  onChange={(e) => handleChange(e, i)}
                  name="serviceType"
                  value={data.serviceType}
                  className="service_type_input service_charge_inputs"
                  placeholder="-"
                />
                <input
                  type="number"
                  onChange={(e) => handleChange(e, i)}
                  name="serviceCharge"
                  value={data.serviceCharge}
                  className="service_charge_input service_charge_inputs"
                  placeholder="-"
                />
                <input
                  type="number"
                  className="service_tax_input service_charge_inputs"
                  name="tax"
                  value={data.tax}
                  placeholder="-"
                  onChange={(e) => handleChange(e, i)}
                />
                <input
                  type="number"
                  className="service_total_input service_charge_inputs"
                  onChange={(e) => handleChange(e, i)}
                  name="subTotal"
                  value={data.subTotal}
                  placeholder="-"
                />
              </div>
            </div>
          </div>
        );
      })}

      <div className="add_total_div_wrapper">
        <div className="add_total_div">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <img
              src={addButton}
              alt="add button"
              onClick={addComponent}
              className="total_add_btn"
            />
            <p style={{ color: "#66CC66" }}>Add Another Service</p>
          </div>

          <p className="total_display">
            Total Amount : NGN{" "}
            <input type="number" className="total_val_input" />
          </p>
        </div>
      </div>
      {/* <div className="finish_action_wrapper">
        <div className="finish_action_btn">
          <button className="finish_save ">Save</button>
          <button className="finish_next">Next</button>
        </div>
      </div> */}
    </div>
  );
}

export default Finish;
