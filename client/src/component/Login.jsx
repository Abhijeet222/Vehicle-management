"use client"

import { useState } from "react"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login attempt:", formData)
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    console.log("Navigate to sign up")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0e5ec] via-[#e8edf4] to-[#dce1e8] p-4">
      <div className="w-full max-w-md">
        {/* Main Card */}
        <div className="bg-[#e0e5ec] rounded-3xl shadow-[20px_20px_40px_#a3b1c6,_-20px_-20px_40px_#ffffff] p-8 backdrop-blur-sm">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-4 bg-[#e0e5ec] rounded-full shadow-[inset_8px_8px_16px_#a3b1c6,_inset_-8px_-8px_16px_#ffffff] flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-700 mb-2">Welcome Back</h1>
            <p className="text-gray-500 text-sm">Please sign in to your account</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#e0e5ec] 
                         shadow-[inset_8px_8px_16px_#a3b1c6,_inset_-8px_-8px_16px_#ffffff]
                         placeholder-gray-400 text-gray-700 focus:outline-none 
                         transition-all duration-300 focus:shadow-[inset_12px_12px_20px_#a3b1c6,_inset_-12px_-12px_20px_#ffffff]"
                required
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#e0e5ec] 
                         shadow-[inset_8px_8px_16px_#a3b1c6,_inset_-8px_-8px_16px_#ffffff]
                         placeholder-gray-400 text-gray-700 focus:outline-none 
                         transition-all duration-300 focus:shadow-[inset_12px_12px_20px_#a3b1c6,_inset_-12px_-12px_20px_#ffffff]"
                required
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-12 pr-12 py-4 rounded-2xl bg-[#e0e5ec] 
                         shadow-[inset_8px_8px_16px_#a3b1c6,_inset_-8px_-8px_16px_#ffffff]
                         placeholder-gray-400 text-gray-700 focus:outline-none 
                         transition-all duration-300 focus:shadow-[inset_12px_12px_20px_#a3b1c6,_inset_-12px_-12px_20px_#ffffff]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                    />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <button type="button" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                Forgot password?
              </button>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-[#e0e5ec] text-gray-700 font-semibold
                       shadow-[8px_8px_16px_#a3b1c6,_-8px_-8px_16px_#ffffff]
                       hover:shadow-[12px_12px_20px_#a3b1c6,_-12px_-12px_20px_#ffffff]
                       active:shadow-[inset_8px_8px_16px_#a3b1c6,_inset_-8px_-8px_16px_#ffffff]
                       transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <span className="px-4 text-sm text-gray-400">or</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>

          {/* Sign Up Button */}
          <button
            onClick={handleSignUp}
            className="w-full py-4 rounded-2xl bg-[#e0e5ec] text-gray-600 font-medium
                     shadow-[inset_4px_4px_8px_#a3b1c6,_inset_-4px_-4px_8px_#ffffff]
                     hover:shadow-[inset_8px_8px_12px_#a3b1c6,_inset_-8px_-8px_12px_#ffffff]
                     transition-all duration-200 border border-gray-200"
          >
            Create New Account
          </button>

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-xs text-gray-400">
              By signing in, you agree to our{" "}
              <button className="text-gray-500 hover:text-gray-700 underline">Terms of Service</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
