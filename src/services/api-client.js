import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://house-rent-pied-seven.vercel.app/api/v1",
});

export default apiClient;
