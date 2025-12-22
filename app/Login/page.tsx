import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-[#070B1F] p-8 rounded-2xl shadow-2xl w-full max-w-md " style={{ fontFamily: "Lissen" }}>
        <h2 className="text-3xl font-semibold text-white mb-6 text-center">
          Login
        </h2>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <input
            type="password"
            placeholder="Password"
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
