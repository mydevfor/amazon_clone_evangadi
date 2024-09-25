import axios from "axios";

const axiosInstance = axios.create({
//   baseURL: "https://amazon-backend-updated.onrender.com",
  baseURL: "http://127.0.0.1:5001/finto-56024/us-central1/api",

});

export { axiosInstance };