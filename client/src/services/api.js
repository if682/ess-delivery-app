import axios from "axios";

const port = 4001;

const api = axios.create({
  baseURL: `http://localhost:${port}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;