import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";
import { AuthContext } from "../../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await API.post("/auth/login", { email, password });
        const { token, user, role } = response.data;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("role", role); // Save the role to localStorage
        login(user);

        // Redirect based on role
        if (role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/");
        }
      } catch (err) {
        setErrors({
          server:
            err.response?.data?.message || "Login failed. Please try again.",
        });
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm p-6 bg-white rounded-xl shadow-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

        {errors.server && (
          <p className="text-center text-red-600">{errors.server}</p>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-4 py-2 border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          />
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded-md font-semibold shadow hover:bg-gray-700 transition"
        >
          LOGIN
        </button>

        <div className="text-center text-sm text-gray-700">
          New to Car Parts?{" "}
          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="text-orange-600 hover:underline"
          >
            Create New Account
          </button>
        </div>
      </form>
    </div>
  );
}
