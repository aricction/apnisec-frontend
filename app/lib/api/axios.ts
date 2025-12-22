import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:4000",
  headers: { "Content-Type": "application/json" },
  withCredentials: false, // only true if backend uses cookies
});

export default API;
