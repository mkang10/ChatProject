"use client"

import type React from "react"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useState } from "react"
import { MessageCircle, Eye, EyeOff, Mail, Lock, ArrowRight, Chrome, Facebook } from "lucide-react"
import { GradientButton } from "@/components/ui/gradient-button"
import { Input } from "@/components/ui/input"
import { EnhancedScene } from "@/components/ui/3d/enhanced-scene"
import { useLoading } from "@/hooks/use-loading"
import Link from "next/link"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const { loading, withLoading } = useLoading()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await withLoading(async () => {
      // Simulate login API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log("Login submitted:", formData)
    })
  }

  const handleSocialLogin = async (provider: string) => {
    await withLoading(async () => {
      // Simulate social login
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log(`${provider} login`)
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <EnhancedScene />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.1}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.2}
          />
        </Canvas>
      </div>

      {/* Remove these gradient overlays */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50 z-5"></div> */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 z-5"></div> */}

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Login Card */}
          <div className="backdrop-blur-glass rounded-3xl p-8 border border-teal-500/20 shadow-2xl shadow-teal-500/10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-teal-500/25">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gradient-teal mb-2">Welcome Back</h1>
              <p className="text-gray-400">Sign in to continue to ChatKang</p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10 bg-gray-800/50 border-gray-700 focus:border-teal-500 focus:ring-teal-500 rounded-xl"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="pl-10 pr-10 bg-gray-800/50 border-gray-700 focus:border-teal-500 focus:ring-teal-500 rounded-xl"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                    className="w-4 h-4 text-teal-600 bg-gray-800 border-gray-600 rounded focus:ring-teal-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-300">Remember Me</span>
                </label>
                <Link href="/forgot-password" className="text-sm text-teal-400 hover:text-teal-300 transition-colors">
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <GradientButton variant="primary" className="w-full" loading={loading} type="submit">
                {!loading && <ArrowRight className="mr-2 h-5 w-5" />}
                Log In
              </GradientButton>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center">
              <div className="flex-1 border-t border-gray-700"></div>
              <span className="px-4 text-sm text-gray-400">or continue with</span>
              <div className="flex-1 border-t border-gray-700"></div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <button
                onClick={() => handleSocialLogin("Google")}
                disabled={loading}
                className="w-full flex items-center justify-center space-x-3 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl hover:bg-gray-700/50 hover:border-teal-500/50 transition-all duration-300 disabled:opacity-50"
              >
                <Chrome className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Login with Google</span>
              </button>
              <button
                onClick={() => handleSocialLogin("Facebook")}
                disabled={loading}
                className="w-full flex items-center justify-center space-x-3 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl hover:bg-gray-700/50 hover:border-teal-500/50 transition-all duration-300 disabled:opacity-50"
              >
                <Facebook className="h-5 w-5 text-blue-500" />
                <span className="text-white font-medium">Login with Facebook</span>
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Do not have an account?{" "}
                <Link href="/auth/register" className="text-teal-400 hover:text-teal-300 font-medium transition-colors">
                  Sign up
                </Link>
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">&copy; 2025 ChatKang. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
