import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // ✅ CORRECT NAME
  withCredentials: true, // ✅ REQUIRED FOR COOKIES
  headers: {
    "Content-Type": "application/json",
  },
});

// ❌ REMOVE cookie-based token logic completely
// Cookies are sent automatically by browser

export default API;
