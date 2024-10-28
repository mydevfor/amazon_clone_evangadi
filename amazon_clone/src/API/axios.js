import axios from "axios";


const axiosInstance = axios.create({


  baseURL: "https://amazon-clone-evangadi.onrender.com"
});

export { axiosInstance };