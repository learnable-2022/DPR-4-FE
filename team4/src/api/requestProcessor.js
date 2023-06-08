import axios from "axios";
import { baseUrl } from "./config";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = baseUrl;
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    config.headers = {
      "x-auth-token": token ?? null,
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    return config;
  },
  
  (error) => {
    Promise.reject(error);
  }
);

export const useRequestProcessor = () => {

  const makeRequest = async ({ url, method, data }) => {
    try {
      const result = await axiosInstance({ url, method, data });
      console.log(result);
      return {
        response: { status: result.status, ...result.data },
        error: null,
      };
    } catch (error) {
      if (error?.response) {
        return {
          response: null,
          error: { status: error.response.status, ...error.response.data },
        };
      } else {
        return { response: null, error: null };
      }
    }
  };

  return { makeRequest };
};
