import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e0e5ec]">
      <div className="flex flex-col items-center justify-center bg-[#e0e5ec] rounded-[20px] shadow-[10px_10px_20px_#a3b1c6,_-10px_-10px_20px_#ffffff] p-10 w-80">
        <h1 className="text-2xl font-semibold text-gray-700 mb-6">Login</h1>

        {/* Login Form */}
        <form action="/home" className="w-full">
          <input
            type="text"
            placeholder="Username"
            className="w-full mb-4 p-3 rounded-[20px] bg-[#e0e5ec] shadow-inner 
            shadow-[inset_10px_10px_20px_#a3b1c6,_inset_-10px_-10px_20px_#ffffff] 
            placeholder-gray-500 focus:outline-none"
            required
          />

          <input
            type="email"
            placeholder="abc123@gmail.com"
            className="w-full mb-4 p-3 rounded-[20px] bg-[#e0e5ec] shadow-inner 
            shadow-[inset_10px_10px_20px_#a3b1c6,_inset_-10px_-10px_20px_#ffffff] 
            placeholder-gray-500 focus:outline-none"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-6 p-3 rounded-[20px] bg-[#e0e5ec] shadow-inner 
            shadow-[inset_10px_10px_20px_#a3b1c6,_inset_-10px_-10px_20px_#ffffff] 
            placeholder-gray-500 focus:outline-none"
            required
          />

          <div className="flex justify-between w-full">
            <button
              type="submit"
              className="w-full py-2 rounded-[20px] bg-[#e0e5ec] 
              shadow-[10px_10px_20px_#a3b1c6,_-10px_-10px_20px_#ffffff] 
              hover:scale-105 transition-all"
            >
              Sign In
            </button>
          </div>
        </form>

     
        <form action="/signUp" className="w-full mt-4">
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
