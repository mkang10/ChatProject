"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { MessageCircle, Users, Video, Bot, Star, TrendingUp, Zap, Shield } from "lucide-react"
import { Navigation } from "@/components/ui/navigation"
import { EnhancedScene } from "@/components/ui/3d/enhanced-scene"

export default function ProDashboard() {
  const stats = [
    { icon: MessageCircle, label: "Messages Today", value: "2,847", trend: "+12%" },
    { icon: Video, label: "Call Minutes", value: "156", trend: "+8%" },
    { icon: Users, label: "Active Groups", value: "12", trend: "+3%" },
    { icon: Bot, label: "AI Queries", value: "89", trend: "+25%" },
  ]

  const quickActions = [
    { icon: MessageCircle, label: "New Chat", color: "from-teal-600 to-cyan-600" },
    { icon: Video, label: "Start Call", color: "from-blue-600 to-purple-600" },
    { icon: Users, label: "Create Group", color: "from-green-600 to-teal-600" },
    { icon: Bot, label: "AI Assistant", color: "from-purple-600 to-pink-600" },
  ]

  const recentActivity = [
    { type: "message", content: "New message from Sarah", time: "2 min ago" },
    { type: "call", content: "Video call with Team Alpha", time: "15 min ago" },
    { type: "group", content: "Added to Project Beta group", time: "1 hour ago" },
    { type: "ai", content: "AI translated 5 messages", time: "2 hours ago" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Enhanced 3D Background for Pro users */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <EnhancedScene />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.2}
          />
        </Canvas>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <Navigation />

        {/* Pro Header */}
        <div className="px-6 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-md rounded-3xl p-8 border border-teal-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <Star className="h-8 w-8 text-yellow-400 mr-3" />
                    <h1 className="text-3xl font-bold text-gradient-teal">Pro Dashboard</h1>
                  </div>
                  <p className="text-gray-300">Welcome back! All features unlocked</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Next billing</div>
                  <div className="text-lg font-semibold text-teal-400">Dec 15, 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="px-6 py-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gradient-teal">Today is Activity</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="card-glass p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex items-center text-green-400 text-sm">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        {stat.trend}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-6 py-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gradient-teal">Quick Actions</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {quickActions.map((action, index) => {
                const Icon = action.icon
                return (
                  <div
                    key={index}
                    className="card-glass p-6 text-center cursor-pointer hover:scale-105 transition-transform"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{action.label}</h3>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="px-6 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gradient-teal">Recent Activity</h2>
                <div className="card-glass p-6">
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 bg-gray-800/50 rounded-lg">
                        <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-white">{activity.content}</p>
                          <p className="text-sm text-gray-400">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-gradient-teal">Pro Features</h2>
                <div className="card-glass p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Zap className="h-6 w-6 text-yellow-400" />
                      <div>
                        <h3 className="font-semibold text-white">Unlimited Everything</h3>
                        <p className="text-sm text-gray-400">No daily limits on any features</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Bot className="h-6 w-6 text-purple-400" />
                      <div>
                        <h3 className="font-semibold text-white">AI Assistant</h3>
                        <p className="text-sm text-gray-400">Smart replies and translations</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="h-6 w-6 text-green-400" />
                      <div>
                        <h3 className="font-semibold text-white">Priority Support</h3>
                        <p className="text-sm text-gray-400">24/7 premium support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
