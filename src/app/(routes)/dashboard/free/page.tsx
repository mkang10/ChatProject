"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { MessageCircle, Users, Video, Lock, Star, ArrowUp } from "lucide-react"
import { Navigation } from "@/components/ui/navigation"
import { GradientButton } from "@/components/ui/gradient-button"
import { EnhancedScene } from "@/components/ui/3d/enhanced-scene"
import { Progress } from "@/components/ui/progress"

export default function FreeDashboard() {
  const dailyLimits = [
    {
      icon: MessageCircle,
      title: "Daily Messages",
      used: 87,
      limit: 100,
      color: "teal",
    },
    {
      icon: Video,
      title: "Video Call Minutes",
      used: 25,
      limit: 30,
      color: "cyan",
    },
    {
      icon: Users,
      title: "Group Members",
      used: 0,
      limit: 0,
      locked: true,
    },
  ]

  const lockedFeatures = ["Group Chats", "File Sharing (>10MB)", "AI Assistant", "Custom Themes", "Priority Support"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* 3D Background - Simpler for free users */}
      <div className="absolute inset-0 z-0 opacity-50">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <EnhancedScene />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.05}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.2}
          />
        </Canvas>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <Navigation />

        {/* Free Plan Header */}
        <div className="px-6 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-md rounded-3xl p-8 border border-gray-600/50">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">Free Plan</h1>
                  <p className="text-gray-300">Basic features with daily limits</p>
                </div>
                <GradientButton variant="primary">
                  <ArrowUp className="mr-2 h-5 w-5" />
                  Upgrade Now
                </GradientButton>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Usage */}
        <div className="px-6 py-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-white">Today is Usage</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {dailyLimits.map((item, index) => {
                const Icon = item.icon
                const percentage = item.locked ? 0 : (item.used / item.limit) * 100

                return (
                  <div
                    key={index}
                    className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50"
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 ${item.locked ? "bg-gray-600" : "bg-gradient-to-r from-teal-600 to-cyan-600"} rounded-xl flex items-center justify-center mr-4`}
                      >
                        {item.locked ? (
                          <Lock className="h-6 w-6 text-gray-400" />
                        ) : (
                          <Icon className="h-6 w-6 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        {item.locked && <span className="text-xs text-red-400">Upgrade Required</span>}
                      </div>
                    </div>

                    {!item.locked ? (
                      <>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-2xl font-bold text-teal-400">{item.used}</span>
                          <span className="text-gray-400">/ {item.limit}</span>
                        </div>
                        <Progress value={percentage} className="h-2" />
                        {percentage > 80 && <p className="text-sm text-yellow-400 mt-2">⚠️ Approaching daily limit</p>}
                      </>
                    ) : (
                      <div className="text-center py-4">
                        <Lock className="h-8 w-8 text-gray-500 mx-auto mb-2" />
                        <p className="text-gray-500">Feature locked</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Locked Features */}
        <div className="px-6 py-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-white">Unlock More Features</h2>
            <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gradient-teal">Premium Features</h3>
                  <ul className="space-y-3">
                    {lockedFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <Lock className="h-4 w-4 text-gray-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <Star className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4 text-white">Upgrade to Pro</h3>
                  <p className="text-gray-300 mb-6">Unlock all features and remove daily limits</p>
                  <GradientButton variant="primary" size="lg">
                    Start Free Trial
                  </GradientButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
