"use client";
import Link from "next/link";
import React, { ChangeEvent, FormEvent } from "react";
import { RegisterRequest } from "../types/authType";
import { useUserStore } from "../store/user-store";
import { useRouter } from "next/navigation";
import { createUserByRegister } from "../lib/api/auth-api";

export default function Register() {
  const [form, setForm] = React.useState<RegisterRequest>({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = React.useState("");
  const setUser = useUserStore((state) => state.setUser);
    const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await createUserByRegister(form);
      setMessage(response.message);
       
      if(response.status === "success" && response.data){
        
        setUser(response.data);
         document.cookie = `token=${response.data.user}; path=/; max-age=604800`; // 7 days
       
        router.push("/Dashboard");
   
      }
    } catch (error: any) {
      setMessage(error.response?.data?.message || "error");
      
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div
        className="bg-[#070B1F] p-8 rounded-2xl shadow-2xl w-full max-w-md"
        style={{ fontFamily: "Lissen" }}
      >
        <h2 className="text-3xl font-semibold text-white mb-6 text-center">
          Create Account
        </h2>

        <form  onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button
            type="submit"
            className="mt-4 p-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-gray-400 text-sm mt-4 text-center">
          Already have an account?{" "}
          <span className="text-[15px] cursor-pointer text-orange-500 hover:underline">
            <Link href="/Login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
