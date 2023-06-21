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
  walletAddress:null,
  oxygen: null,
  respRate: null,
  totalAmount:null,
  billingDate: null,
  billingPatientName: null,
  billingProvider: null,
  billingLocation: null,
  prescriptions: [],
  billings: [],
  user_details: null,
  screenshot: null,
  allpatients: null,
  index: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
      case "SET_TOTAL_AMOUNT":
        return{
          ...state,
          totalAmount:action.totalAmount
        }
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
    case "SET_SCREENSHOT":
      return {
        ...state,
        screenshot: action.screenshot,
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
    case "SET_PRESCRIPTION":
      return {
        ...state,
        prescriptions: action.prescriptions,
      };
    case "SET_ALL_PATIENTS":
      return {
        ...state,
        allpatients: action.allpatients,
      };
    //end of store for report details
    case "SET_CLICKED_INDEX":
      return {
        ...state,
        index: action.index,
      };
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

    //Billings store
    case "SET_BILLINGS":
      return {
        ...state,
        billings: action.billings,
      };
    case "SET_BILLING_DATE":
      return {
        ...state,
        billingDate: action.billingDate,
      };
    case "SET_BILLING_NAME":
      return {
        ...state,
        billingPatientName: action.billingPatientName,
      };
    case "SET_BILLING_PROVIDER":
      return {
        ...state,
        billingProvider: action.billingProvider,
      };
    case "SET_BILLING_LOCATION":
      return {
        ...state,
        billingLocation: action.billingLocation,
      };
      
      case "SET_PATIENT_ADDRESS":
        return {
          ...state,
          walletAddress : action.walletAddress
        }
    default:
      return state;
  }
};
export default reducer;
