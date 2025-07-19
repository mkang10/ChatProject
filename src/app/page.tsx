"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useState } from "react"
import { MessageCircle, Users, Shield, Video, Phone, ArrowRight, Zap, Globe, Lock } from "lucide-react"
import { Navigation } from "@/components/ui/navigation"
import { GradientButton } from "@/components/ui/gradient-button"
import { FeatureCard } from "@/components/ui/feature-card"
import { StatsGrid } from "@/components/ui/stats-grid"
import { EnhancedScene } from "@/components/ui/3d/enhanced-scene"

export default function ChatAppHomepage() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: MessageCircle,
      title: "Instant Messaging",
      description: "Send and receive messages in real-time with ultra-low latency and perfect synchronization",
    },
    {
      icon: Video,
      title: "HD Video Calls",
      description: "Crystal-clear video calls with advanced compression technology and adaptive quality",
    },
    {
      icon: Shield,
      title: "End-to-End Security",
      description: "Military-grade encryption ensures your conversations remain private and secure",
    },
    {
      icon: Users,
      title: "Group Chats",
      description: "Create group chats with up to 1000 members with flexible management controls",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with anyone, anywhere in the world with our global infrastructure",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with sub-second message delivery across all platforms",
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "Your data belongs to you. We never store or analyze your personal conversations",
    },
    {
      icon: Phone,
      title: "Voice Calls",
      description: "High-quality voice calls with noise cancellation and echo reduction",
    },
  ]

  const stats = [
    { value: "50M+", label: "Active Users" },
    { value: "99.99%", label: "Uptime" },
    { value: "180+", label: "Countries" },
    { value: "24/7", label: "Support" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Enhanced 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <EnhancedScene />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.2}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.2}
          />
        </Canvas>
      </div>

      {/* Gradient Overlays */}
     

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navigation />

        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-400 rounded-full text-sm font-medium backdrop-blur-sm border border-teal-500/30 shadow-lg shadow-teal-500/10">
                🚀 Introducing ChatKang
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-teal-200 to-cyan-400 bg-clip-text text-transparent">
                Connect Everyone
              </span>
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                in the Digital Universe
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Experience the next generation of communication with AI-powered features, absolute security, and
              breakthrough 3D interfaces. Connect without limits, chat without boundaries.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <GradientButton variant="primary" size="lg">
                <MessageCircle className="mr-3 h-6 w-6" />
                Start Chatting Now
                <ArrowRight className="ml-3 h-6 w-6" />
              </GradientButton>
              <GradientButton variant="outline" size="lg">
                <Video className="mr-3 h-6 w-6" />
                Watch Demo
              </GradientButton>
            </div>

            <StatsGrid stats={stats} className="mt-16" />
          </div>
        </div>

        {/* Features Section */}
        <div className="px-6 py-24 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Discover the cutting-edge capabilities that make ChatKang the ultimate choice for modern communication
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  isActive={activeFeature === index}
                  onHover={() => setActiveFeature(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-6 py-24 text-center backdrop-blur-sm">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-blue-500/10 rounded-3xl p-16 border border-teal-500/20 backdrop-blur-md shadow-2xl shadow-teal-500/10">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-teal-400 bg-clip-text text-transparent">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join millions of users who trust ChatKang to connect, share, and communicate in ways never before
                possible
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <GradientButton variant="primary" size="lg">
                  Create Free Account
                  <ArrowRight className="ml-3 h-6 w-6" />
                </GradientButton>
                <GradientButton variant="outline" size="lg">
                  <Phone className="mr-3 h-6 w-6" />
                  Contact Sales
                </GradientButton>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="p-8 text-center backdrop-blur-md bg-black/20 border-t border-teal-500/20">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-xl flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                ChatKang
              </span>
            </div>
            <p className="text-gray-400 mb-4 text-lg">Connecting the world, sharing emotions</p>
            <p className="text-gray-500">&copy; 2025 ChatK. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
