import axios from "axios";

const API = axios.create({ 
  baseURL: "REACT_APP_API_URL",
  headers:{"Content-Type":"application/json"}
 });

 API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;