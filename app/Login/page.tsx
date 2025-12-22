"use client";
import React from "react";
import { ChangeEvent, FormEvent } from "react";

import Link from "next/link";
import { LoginRequest } from "../types/authType";
import { useRouter } from "next/navigation";
import { useUserStore } from "../store/user-store";
import { getUserByLogin } from "../lib/api/auth-api";
export default function Login() {
  const [form, setForm] = React.useState<LoginRequest>({
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
      const response = await getUserByLogin(form);
      setMessage(response.message);

      if (response.status === "success" && response.data?.user) {
        setUser({ user: response.data.user });
        router.push("/Dashboard");
      }
    } catch (error: any) {
      setMessage(error.response?.data?.message || "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div
        className="bg-[#070B1F] p-8 rounded-2xl shadow-2xl w-full max-w-md "
        style={{ fontFamily: "Lissen" }}
      >
        <h2 className="text-3xl font-semibold text-white mb-6 text-center">
          Login
        </h2>

        <form 
        onSubmit={handleSubmit}
        className="flex flex-col gap-4">
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
            Login
          </button>
        </form>

        <p className="text-gray-400 text-sm mt-4 text-center">
          Don’t have an account?{" "}
          <span className="text-[15px] cursor-pointer text-orange-500 hover:underline">
            <Link href="/Register">Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
