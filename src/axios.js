import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://medbloc-api.onrender.com/api/v1/",
});

export default axiosClient;
