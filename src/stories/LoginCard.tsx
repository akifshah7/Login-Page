import React from "react";

type Props = {
  variant: "primary" | "secondary" | "tertiory";
  size: "sm" | "md" | "lg";
};

const LoginCard = ({ variant = "secondary", size = "md" }: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        style={{
          backgroundColor: variant === "primary" ? "white" : "pink",
          width: size === "sm" ? "50%" : "70%",
        }}
        className="bg-white shadow-md rounded px-10 py-8 w-full sm:w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-8 text-center">
            <br />
            <button
              style={{
                backgroundColor: variant === "tertiory" ? "red" : "black",
              }}
              type="submit"
              className="w-full bg-black text-white font-bold py-2 px-4 rounded  focus:outline-none"
            >
              Sign Up
            </button>
          </div>
        </div>
        <p className="text-sm text-center text-gray-500">
          Already have an account?{" "}
          <a href="#" className="text-gray-950 underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginCard;
