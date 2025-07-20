"use client"

import type React from "react"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useState } from "react"
import { MessageCircle, Eye, EyeOff, Mail, Lock, User, ArrowRight, Chrome, Facebook, Check } from "lucide-react"
import { GradientButton } from "@/components/ui/gradient-button"
import { Input } from "@/components/ui/input"
import { EnhancedScene } from "@/components/ui/3d/enhanced-scene"
import { useLoading } from "@/hooks/use-loading"
import Link from "next/link"

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    subscribeNewsletter: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(0)
  const { loading, withLoading } = useLoading()

  const calculatePasswordStrength = (password: string) => {
    let strength = 0
    if (password.length >= 8) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[a-z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++
    return strength
  }

  const handlePasswordChange = (password: string) => {
    setFormData({ ...formData, password })
    setPasswordStrength(calculatePasswordStrength(password))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!")
      return
    }
    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions!")
      return
    }

    await withLoading(async () => {
      // Simulate signup API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log("Signup submitted:", formData)
    })
  }

  const handleSocialSignup = async (provider: string) => {
    await withLoading(async () => {
      // Simulate social signup
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log(`${provider} signup`)
    })
  }

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 1) return "bg-red-500"
    if (passwordStrength <= 3) return "bg-yellow-500"
    return "bg-green-500"
  }

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 1) return "Weak"
    if (passwordStrength <= 3) return "Medium"
    return "Strong"
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
          {/* Signup Card */}
          <div className="backdrop-blur-glass rounded-3xl p-8 border border-teal-500/20 shadow-2xl shadow-teal-500/10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-teal-500/25">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gradient-teal mb-2">Join ChatKang</h1>
              <p className="text-gray-400">Create your account to get started</p>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="pl-10 bg-gray-800/50 border-gray-700 focus:border-teal-500 focus:ring-teal-500 rounded-xl"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                  <Input
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="bg-gray-800/50 border-gray-700 focus:border-teal-500 focus:ring-teal-500 rounded-xl"
                    required
                  />
                </div>
              </div>

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
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={(e) => handlePasswordChange(e.target.value)}
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
                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                          style={{ width: `${(passwordStrength / 5) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-400">{getPasswordStrengthText()}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="pl-10 pr-10 bg-gray-800/50 border-gray-700 focus:border-teal-500 focus:ring-teal-500 rounded-xl"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {/* Password Match Indicator */}
                {formData.confirmPassword && (
                  <div className="mt-2">
                    {formData.password === formData.confirmPassword ? (
                      <div className="flex items-center space-x-2 text-green-400">
                        <Check className="h-4 w-4" />
                        <span className="text-xs">Passwords match</span>
                      </div>
                    ) : (
                      <div className="text-xs text-red-400">Passwords do not match</div>
                    )}
                  </div>
                )}
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                    className="w-4 h-4 text-teal-600 bg-gray-800 border-gray-600 rounded focus:ring-teal-500 focus:ring-2 mt-0.5"
                    required
                  />
                  <span className="text-sm text-gray-300">
                    I agree to the{" "}
                    <Link href="/terms" className="text-teal-400 hover:text-teal-300">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-teal-400 hover:text-teal-300">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.subscribeNewsletter}
                    onChange={(e) => setFormData({ ...formData, subscribeNewsletter: e.target.checked })}
                    className="w-4 h-4 text-teal-600 bg-gray-800 border-gray-600 rounded focus:ring-teal-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-300">Subscribe to our newsletter for updates</span>
                </label>
              </div>

              {/* Signup Button */}
              <GradientButton variant="primary" className="w-full" loading={loading} type="submit">
                {!loading && <ArrowRight className="mr-2 h-5 w-5" />}
                Create Account
              </GradientButton>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center">
              <div className="flex-1 border-t border-gray-700"></div>
              <span className="px-4 text-sm text-gray-400">or sign up with</span>
              <div className="flex-1 border-t border-gray-700"></div>
            </div>

            {/* Social Signup */}
            <div className="space-y-3">
              <button
                onClick={() => handleSocialSignup("Google")}
                disabled={loading}
                className="w-full flex items-center justify-center space-x-3 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl hover:bg-gray-700/50 hover:border-teal-500/50 transition-all duration-300 disabled:opacity-50"
              >
                <Chrome className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Sign up with Google</span>
              </button>
              <button
                onClick={() => handleSocialSignup("Facebook")}
                disabled={loading}
                className="w-full flex items-center justify-center space-x-3 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl hover:bg-gray-700/50 hover:border-teal-500/50 transition-all duration-300 disabled:opacity-50"
              >
                <Facebook className="h-5 w-5 text-blue-500" />
                <span className="text-white font-medium">Sign up with Facebook</span>
              </button>
            </div>

            {/* Login Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-400">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-teal-400 hover:text-teal-300 font-medium transition-colors">
                  Sign in
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
