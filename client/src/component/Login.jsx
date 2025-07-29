import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login attempt:", formData);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Login successful");
        console.log(data);
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      alert("Server error, please try again later");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("Signup attempt:", formData);

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Signup successful");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      alert("Server error, please try again later");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e0e5ec]">
      <div className="flex flex-col items-center justify-center bg-[#e0e5ec] rounded-[20px] shadow-[10px_10px_20px_#a3b1c6,_-10px_-10px_20px_#ffffff] p-10 w-80">
        <h1 className="text-2xl font-semibold text-gray-700 mb-6">Login</h1>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="w-full">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-[20px] bg-[#e0e5ec] 
              shadow-[inset_10px_10px_20px_#a3b1c6,_inset_-10px_-10px_20px_#ffffff] 
              placeholder-gray-500 focus:outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="abc123@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 p-3 rounded-[20px] bg-[#e0e5ec] 
              shadow-[inset_10px_10px_20px_#a3b1c6,_inset_-10px_-10px_20px_#ffffff] 
              placeholder-gray-500 focus:outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mb-6 p-3 rounded-[20px] bg-[#e0e5ec] 
              shadow-[inset_10px_10px_20px_#a3b1c6,_inset_-10px_-10px_20px_#ffffff] 
              placeholder-gray-500 focus:outline-none"
            required
          />

          <button
            type="submit"
            className="w-full py-2 rounded-[20px] bg-[#e0e5ec] 
              shadow-[10px_10px_20px_#a3b1c6,_-10px_-10px_20px_#ffffff] 
              hover:scale-105 transition-all"
          >
            Sign In
          </button>
        </form>

        {/* Signup Button */}
        <form onSubmit={handleSignUp} className="w-full mt-4">
          <button
            type="submit"
            className="w-full py-2 rounded-[20px] bg-[#e0e5ec] 
              shadow-[10px_10px_20px_#a3b1c6,_-10px_-10px_20px_#ffffff] 
              hover:scale-105 transition-all"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
