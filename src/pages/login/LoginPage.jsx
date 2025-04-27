import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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

  const handleLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Logging in with", { email, password });
    }
  };

  const handleGoogleLoginSuccess = (credentialResponse) => {
    console.log("Google login success:", credentialResponse);
    // You can send the credential to your backend here
  };

  const handleGoogleLoginError = () => {
    console.log("Google login failed");
  };

  return (
    <GoogleOAuthProvider clientId="426813651843-nu84urui0qalhl0q07dfhk3t1tnv7g9u.apps.googleusercontent.com">
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm p-6 bg-white rounded-xl shadow-md space-y-6"
        >
          <h2 className="text-2xl font-bold text-center">Login</h2>

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
            <a href="#" className="text-orange-600 hover:underline">
              Create New Account
            </a>
          </div>
          <div className="text-center text-sm text-gray-700">
            Forget Password?{" "}
            <button
              type="button"
              onClick={() => navigate("/resetp")}
              className="text-orange-600 hover:underline"
            >
              Reset Password
            </button>
          </div>

          <div className="flex items-center justify-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-3 text-gray-400 text-sm">OR</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <div className="flex items-center justify-center my-4" >
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginError}
            width="100%"
            text="continue_with"
            theme="outline"
            shape="pill"
          />
          </div>
        </form>
      </div>
    </GoogleOAuthProvider>
  );
}
