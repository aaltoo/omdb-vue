import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://www.omdbapi.com",
  params: {
    apikey: import.meta.env.VITE_API_KEY,
  },
  headers: {
    "Content-Type": "application/json",
  },
});
