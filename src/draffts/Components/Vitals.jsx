import React from "react";
import "./Vitals.css";
import { useOutletContext } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useServiceProviderValue } from "../../ServiceProvider";
function Vitals() {
  const handleSetTemperature = (e) => {
    dispatch({ type: "SET_TEMPERATURE", temperature: e.target.value });
  };
  const handleSetBloodCount = (e) => {
    dispatch({ type: "SET_BLOOD_COUNT", bloodCount: e.target.value });
  };
  const handleSetBloodPressure = (e) => {
    dispatch({ type: "SET_BLOOD_PRESSURE", bloodPressure: e.target.value });
  };
  const handleSetGlucoseLevel = (e) => {
    dispatch({ type: "SET_GLUCOSE_LEVEL", glucoseLevel: e.target.value });
  };
  const handleSetHeartRate = (e) => {
    dispatch({ type: "SET_HEART_RATE", heartRate: e.target.value });
  };
  const handleSetOxygen = (e) => {
    dispatch({ type: "SET_OXYGEN", oxygen: e.target.value });
  };
  const handleSetRespRate = (e) => {
    dispatch({ type: "SET_RESPRATE", respRate: e.target.value });
  };
  const [
    {
      temperature,
      bloodCount,
      bloodPressure,
      glucoseLevel,
      heartRate,
      oxygen,
      respRate,
    },
    dispatch,
  ] = useServiceProviderValue();
  return (
    <div className="vitals">
      <div className="vitals_input">
        <div className="input_div">
          <div className="left_vitals">
            <p className="holder_text">Temperature</p>
            <div className="vital_value_div">
              <input
                onChange={handleSetTemperature}
                className="vital_value"
                value={temperature}
                type="text"
                placeholder="-"
              />
            </div>
          </div>
          {/* <div className="delete_btn_div">
            <MdDeleteOutline className="delete_btn" />
          </div> */}
        </div>
        <div className="input_div">
          <div className="left_vitals">
            <p className="holder_text">Heart Rate</p>
            <div className="vital_value_div">
              <input
                onChange={handleSetHeartRate}
                className="vital_value"
                value={heartRate}
                type="text"
                placeholder="-"
              />
            </div>
          </div>
          {/* <div className="delete_btn_div">
            <MdDeleteOutline className="delete_btn" />
          </div> */}
        </div>
        <div className="input_div">
          <div className="left_vitals">
            <p className="holder_text">Respiratory Rate</p>
            <div className="vital_value_div">
              <input
                onChange={handleSetRespRate}
                className="vital_value"
                type="text"
                value={respRate}
                placeholder="-"
              />
            </div>
          </div>
          {/* <div className="delete_btn_div">
            <MdDeleteOutline className="delete_btn" />
          </div> */}
        </div>
        <div className="input_div">
          <div className="left_vitals">
            <p className="holder_text">Blood Oxygen</p>
            <div className="vital_value_div">
              <input
                onChange={handleSetOxygen}
                className="vital_value"
                type="text"
                value={oxygen}
                placeholder="-"
              />
            </div>
          </div>
          {/* <div className="delete_btn_div">
            <MdDeleteOutline className="delete_btn" />
          </div> */}
        </div>
        <div className="input_div">
          <div className="left_vitals">
            <p className="holder_text">Blood Pressure</p>
            <div className="vital_value_div">
              <input
                onChange={handleSetBloodPressure}
                className="vital_value"
                type="text"
                value={bloodPressure}
                placeholder="-"
              />
            </div>
          </div>
          {/* <div className="delete_btn_div">
            <MdDeleteOutline className="delete_btn" />
          </div> */}
        </div>
        <div className="input_div">
          <div className="left_vitals">
            <p className="holder_text">Blood count</p>
            <div className="vital_value_div">
              <input
                onChange={handleSetBloodCount}
                className="vital_value"
                type="text"
                value={bloodCount}
                placeholder="-"
              />
            </div>
          </div>
          {/* <div className="delete_btn_div">
            <MdDeleteOutline className="delete_btn" />
          </div> */}
        </div>
        <div className="input_div">
          <div className="left_vitals">
            <p className="holder_text">Glucose Level</p>
            <div className="vital_value_div">
              <input
                onChange={handleSetGlucoseLevel}
                className="vital_value"
                type="text"
                value={glucoseLevel}
                placeholder="-"
              />
            </div>
          </div>
          {/* <div className="delete_btn_div">
            <MdDeleteOutline className="delete_btn" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Vitals;
