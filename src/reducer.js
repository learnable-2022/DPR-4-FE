export const initialState = {
  user: null,
  token: null,
  complaints: null,
  treatments: null,
  vaccineName: null,
  vaccineDate: null,
  vaccineStatus: null,
  comments: null,
  temperature: null,
  bloodCount: null,
  bloodPressure: null,
  glucoseLevel: null,
  heartRate: null,
  oxygen: null,
  respRate: null,
  dosage: [],
  duration: [],
  medication: [],
  user_details: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_USER_DETAILS":
      return {
        ...state,
        user_details: action.user_details,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TREATMENT":
      return {
        ...state,
        treatments: action.treatment,
      };
    case "SET_COMPLAINT":
      return {
        ...state,
        complaints: action.complaint,
      };
    case "SET_NAME":
      return {
        ...state,
        vaccineName: action.vaccineName,
      };
    case "SET_DATE":
      return {
        ...state,
        vaccineDate: action.vaccineDate,
      };
    case "SET_STATUS":
      return {
        ...state,
        vaccineStatus: action.vaccineStatus,
      };
    case "SET_COMMENT":
      return {
        ...state,
        comments: action.comment,
      };

    //end of store for report details

    case "SET_TEMPERATURE":
      return {
        ...state,
        temperature: action.temperature,
      };
    case "SET_BLOOD_COUNT":
      return {
        ...state,
        bloodCount: action.bloodCount,
      };
    case "SET_BLOOD_PRESSURE":
      return {
        ...state,
        bloodPressure: action.bloodPressure,
      };
    case "SET_GLUCOSE_LEVEL":
      return {
        ...state,
        glucoseLevel: action.glucoseLevel,
      };
    case "SET_HEART_RATE":
      return {
        ...state,
        heartRate: action.heartRate,
      };
    case "SET_OXYGEN":
      return {
        ...state,
        oxygen: action.oxygen,
      };
    case "SET_RESPRATE":
      return {
        ...state,
        respRate: action.respRate,
      };
    //end of store for vital details

    case "SET_DOSAGE":
      return {
        ...state,
        dosage: action.dosage,
      };
    case "SET_DURATION":
      return {
        ...state,
        duration: action.duration,
      };
    case "SET_MEDICATION":
      return {
        ...state,
        medication: action.medication,
      };

    default:
      return state;
  }
};
export default reducer;
