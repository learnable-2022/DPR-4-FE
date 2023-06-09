import axios from "axios";

export default axios.create({
  baseURL: "https://medbloc-api.onrender.com/api/v1/",
});