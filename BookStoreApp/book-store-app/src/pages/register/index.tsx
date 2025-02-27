import React, { useState } from "react";
import { useRouter } from "next/router";
import { register } from "@/services/authService";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await register(name, email, password);
      router.push("/home");
    } catch (err) {
      setError("Failed to register.");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="flex justify-center">
        <img
          className="hidden md:block w-full h-screen object-cover"
          src="/Picture.jpg"
          alt="Sample image"
        />
      </div>

      <div className="w-full h-full flex items-center justify-center ">
        <div className="max-w-md w-full px-16 ">
          <div className="flex flex-col items-center mb-8">
            <img
              className="w-[120px] h-[78px] mb-4"
              src="/Logo.jpg"
              alt="Logo"
            />
          </div>

          <h1 className="text-left text-gray-500 font-semibold text-md font-manrope mb-4">
            Welcome back!
          </h1>
          <p className="text-center text-2xl text-black font-bold mb-6">
            Login to your account
          </p>

          <form onSubmit={handleSubmit}>
            <div>
              <p className="text-sm text-gray-600 mb-2">Name:</p>
              <input
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-customOrange"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">E-mail:</p>
              <input
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-customOrange"
                type="email"
                placeholder="john@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Password:</p>
              <input
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-customOrange"
                type="password"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-red-500 mt-2">{error}</p>}

            <div className="mt-6">
              <button
                className="w-full bg-customOrange px-4 py-2 text-white rounded text-md tracking-wider hover:bg-orange-600 "
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <button
              className="w-full bg-white px-4 py-2 text-customBlue border border-customBlue rounded text-md "
              type="submit"
              onClick={() => router.push("/login")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
