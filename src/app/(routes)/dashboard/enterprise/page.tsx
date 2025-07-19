"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Building2, BarChart3, Shield, Settings, Users, Globe, Server, Lock, HeadphonesIcon } from "lucide-react"
import { Navigation } from "@/components/ui/navigation"
import { GradientButton } from "@/components/ui/gradient-button"
import { EnhancedScene } from "@/components/ui/3d/enhanced-scene"
import { Progress } from "@/components/ui/progress"

export default function EnterpriseDashboard() {
  const enterpriseStats = [
    { icon: Users, label: "Total Users", value: "2,847", capacity: "10,000", color: "emerald" },
    { icon: Globe, label: "Global Regions", value: "12", active: "12", color: "blue" },
    { icon: Server, label: "Uptime", value: "99.99%", sla: "99.95%", color: "green" },
    { icon: Shield, label: "Security Score", value: "A+", compliance: "SOC2", color: "purple" },
  ]

  const enterpriseFeatures = [
    {
      icon: Server,
      title: "Dedicated Infrastructure",
      description: "Private cloud deployment with guaranteed resources",
      status: "Active",
    },
    {
      icon: Shield,
      title: "Advanced Compliance",
      description: "SOC2, HIPAA, GDPR compliance with audit trails",
      status: "Certified",
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Support",
      description: "24/7 dedicated support team with SLA guarantee",
      status: "Available",
    },
    {
      icon: Settings,
      title: "Custom Integration",
      description: "API access and custom development services",
      status: "Configured",
    },
  ]

  const systemHealth = [
    { service: "Authentication Service", status: "Operational", uptime: "99.99%" },
    { service: "Message Delivery", status: "Operational", uptime: "99.98%" },
    { service: "Video Conferencing", status: "Operational", uptime: "99.97%" },
    { service: "File Storage", status: "Operational", uptime: "99.99%" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Ultra Premium 3D Background for Enterprise */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <EnhancedScene />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.2}
          />
        </Canvas>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <Navigation />

        {/* Enterprise Header */}
        <div className="px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 backdrop-blur-md rounded-3xl p-8 border border-purple-500/30 shadow-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <Building2 className="h-8 w-8 text-purple-400 mr-3" />
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                      Enterprise Command Center
                    </h1>
                  </div>
                  <p className="text-gray-300">Global Fortune 500 Corporation - Mission Critical Operations</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">SLA Status</div>
                  <div className="text-lg font-semibold text-green-400 flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    All Systems Operational
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Metrics */}
        <div className="px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Enterprise Metrics
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {enterpriseStats.map((stat, index) => {
                const Icon = stat.icon
                const usage = stat.capacity
                  ? (Number.parseInt(stat.value.replace(",", "").replace("%", "")) /
                      Number.parseInt(stat.capacity.replace(",", ""))) *
                    100
                  : 0

                return (
                  <div key={index} className="card-glass p-6 border-purple-500/20">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-green-400 text-sm font-medium">
                        {stat.sla || stat.active || stat.compliance}
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400 mb-3">{stat.label}</div>
                    {stat.capacity && (
                      <>
                        <Progress value={usage} className="h-2 mb-2" />
                        <div className="text-xs text-gray-500">of {stat.capacity} capacity</div>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Enterprise Features */}
        <div className="px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Enterprise Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {enterpriseFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="card-glass p-6 border-purple-500/20">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 text-center">{feature.title}</h3>
                    <p className="text-sm text-gray-400 text-center mb-4">{feature.description}</p>
                    <div className="text-center">
                      <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                        {feature.status}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* System Health & Controls */}
        <div className="px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  System Health Monitor
                </h2>
                <div className="card-glass p-6 border-purple-500/20">
                  <div className="space-y-4">
                    {systemHealth.map((system, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          <div>
                            <h3 className="font-semibold text-white">{system.service}</h3>
                            <p className="text-sm text-gray-400">{system.status}</p>
                          </div>
                        </div>
                        <div className="text-green-400 font-mono text-sm">{system.uptime}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Enterprise Controls
                </h2>
                <div className="card-glass p-6 border-purple-500/20">
                  <div className="space-y-6">
                    <GradientButton variant="primary" className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
                      <BarChart3 className="mr-2 h-5 w-5" />
                      Advanced Analytics Dashboard
                    </GradientButton>

                    <GradientButton
                      variant="outline"
                      className="w-full border-purple-400 text-purple-400 hover:bg-purple-400"
                    >
                      <Shield className="mr-2 h-5 w-5" />
                      Security & Compliance Center
                    </GradientButton>

                    <GradientButton
                      variant="outline"
                      className="w-full border-purple-400 text-purple-400 hover:bg-purple-400"
                    >
                      <Settings className="mr-2 h-5 w-5" />
                      Global Configuration
                    </GradientButton>

                    <GradientButton
                      variant="outline"
                      className="w-full border-purple-400 text-purple-400 hover:bg-purple-400"
                    >
                      <HeadphonesIcon className="mr-2 h-5 w-5" />
                      Contact Dedicated Support
                    </GradientButton>

                    <div className="pt-4 border-t border-gray-700">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Lock className="h-4 w-4" />
                        <span>Enterprise-grade security active</span>
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
