import axios from 'axios';

const language = localStorage.getItem("language") === "ar" ? 'ar-SA' : 'en-US';
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    "Accept-Language": language,
  },
  timeout: 5000,
});

// Optional: Add interceptors for requests or responses
axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before the request is sent, e.g., add authorization headers
    return config;
  },
  (error) => {
    // Handle the request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Do something with the response data
    return response;
  },
  (error) => {
    // Handle response errors, e.g., show notification
    return Promise.reject(error);
  }
);

export default axiosInstance;
