import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001", 
  withCredentials: true, 
});

API.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error); 
  }
);

export default API;
