"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import {
  Users,
  BarChart3,
  Shield,
  Settings,
  Crown,
  TrendingUp,
  UserCheck,
  MessageSquare,
  Video,
  FileText,
} from "lucide-react"
import { Navigation } from "@/components/ui/navigation"
import { GradientButton } from "@/components/ui/gradient-button"
import { EnhancedScene } from "@/components/ui/3d/enhanced-scene"
import { Progress } from "@/components/ui/progress"

export default function BusinessDashboard() {
  const teamStats = [
    { icon: Users, label: "Team Members", value: "47", limit: "100", color: "blue" },
    { icon: MessageSquare, label: "Messages Today", value: "12.4K", trend: "+18%", color: "teal" },
    { icon: Video, label: "Meeting Hours", value: "89", trend: "+12%", color: "purple" },
    { icon: FileText, label: "Files Shared", value: "234", trend: "+5%", color: "green" },
  ]

  const adminTools = [
    { icon: Users, label: "User Management", description: "Manage team members and permissions" },
    { icon: BarChart3, label: "Analytics", description: "Detailed usage and performance metrics" },
    { icon: Shield, label: "Security Center", description: "Advanced security settings and compliance" },
    { icon: Settings, label: "Organization Settings", description: "Configure company-wide preferences" },
  ]

  const recentActions = [
    { user: "John Doe", action: "joined the team", time: "5 min ago" },
    { user: "Sarah Wilson", action: "created Project Alpha group", time: "1 hour ago" },
    { user: "Mike Johnson", action: "shared quarterly report", time: "2 hours ago" },
    { user: "Lisa Chen", action: "scheduled team meeting", time: "3 hours ago" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Premium 3D Background for Business users */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <EnhancedScene />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.4}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.2}
          />
        </Canvas>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <Navigation />

        {/* Business Header */}
        <div className="px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-3xl p-8 border border-blue-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <Crown className="h-8 w-8 text-yellow-400 mr-3" />
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Business Dashboard
                    </h1>
                  </div>
                  <p className="text-gray-300">Acme Corporation - Advanced team collaboration</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Plan Usage</div>
                  <div className="text-lg font-semibold text-blue-400">47/100 seats</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Overview */}
        <div className="px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Team Overview
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {teamStats.map((stat, index) => {
                const Icon = stat.icon
                const usage = stat.limit
                  ? (Number.parseInt(stat.value.replace("K", "000").replace(".", "")) / Number.parseInt(stat.limit)) *
                    100
                  : 0

                return (
                  <div key={index} className="card-glass p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r from-${stat.color}-600 to-${stat.color}-700 rounded-xl flex items-center justify-center`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      {stat.trend && (
                        <div className="flex items-center text-green-400 text-sm">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          {stat.trend}
                        </div>
                      )}
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
                    {stat.limit && <Progress value={usage} className="h-2" />}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Admin Tools */}
        <div className="px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Admin Tools
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {adminTools.map((tool, index) => {
                const Icon = tool.icon
                return (
                  <div key={index} className="card-glass p-6 cursor-pointer hover:scale-105 transition-transform">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 text-center">{tool.label}</h3>
                    <p className="text-sm text-gray-400 text-center">{tool.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Recent Activity & Team Management */}
        <div className="px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Recent Team Activity
                </h2>
                <div className="card-glass p-6">
                  <div className="space-y-4">
                    {recentActions.map((action, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 bg-gray-800/50 rounded-lg">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                          <UserCheck className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-white">
                            <span className="font-semibold">{action.user}</span> {action.action}
                          </p>
                          <p className="text-sm text-gray-400">{action.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Business Features
                </h2>
                <div className="card-glass p-6">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-6 w-6 text-green-400" />
                      <div>
                        <h3 className="font-semibold text-white">Advanced Security</h3>
                        <p className="text-sm text-gray-400">SSO, 2FA, and compliance tools</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="h-6 w-6 text-blue-400" />
                      <div>
                        <h3 className="font-semibold text-white">Team Analytics</h3>
                        <p className="text-sm text-gray-400">Detailed usage and productivity metrics</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-6 w-6 text-purple-400" />
                      <div>
                        <h3 className="font-semibold text-white">User Management</h3>
                        <p className="text-sm text-gray-400">Role-based access control</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-700">
                      <GradientButton variant="primary" className="w-full">
                        <Settings className="mr-2 h-5 w-5" />
                        Manage Organization
                      </GradientButton>
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
