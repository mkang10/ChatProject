"use client"

import { useState, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import {
  Send,
  Paperclip,
  Settings,
  Plus,
  Smile,
  Mic,
  MessageCircle,
  Users,
  BarChart3,
  Shield,
  Building2,
  TrendingUp,
  FileText,
  Calendar,
  Target,
  Briefcase,
  Database,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { GradientButton } from "@/components/ui/gradient-button"
import { Navigation } from "@/components/ui/navigation"
import { EnhancedScene } from "@/components/ui/3d/enhanced-scene"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

// 3D Geometric Shape Component
function GeometricShape({ type = "torus" }: { type?: string }) {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      {type === "torus" && <torusGeometry args={[1, 0.4, 16, 100]} />}
      {type === "sphere" && <sphereGeometry args={[1.2, 32, 32]} />}
      {type === "box" && <boxGeometry args={[1.5, 1.5, 1.5]} />}
      <meshStandardMaterial color="#14b8a6" metalness={0.8} roughness={0.2} envMapIntensity={1} />
    </mesh>
  )
}

// 3D Preview Component
function Chat3DPreview({ shape = "torus" }: { shape?: string }) {
  return (
    <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-800/50 border border-teal-500/30 backdrop-blur-sm">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <GeometricShape type={shape} />
          <Environment preset="studio" />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default function BusinessChatPage() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Business AI",
      content:
        "Welcome to ChatFlow Business! I'm equipped with advanced analytics, team collaboration tools, and enterprise-grade security. How can I help optimize your business operations today?",
      time: "10:30 AM",
      isOwn: false,
      shape: "torus",
      priority: "high",
      department: "Operations",
    },
    {
      id: 2,
      sender: "You",
      content: "I need to analyze our Q4 performance metrics and create a presentation for the board meeting",
      time: "10:32 AM",
      isOwn: true,
      shape: "sphere",
    },
    {
      id: 3,
      sender: "Business AI",
      content:
        "I'll help you create a comprehensive Q4 analysis. I can generate charts, identify key trends, benchmark against industry standards, and create executive-ready presentations. Let me start by analyzing your data.",
      time: "10:33 AM",
      isOwn: false,
      shape: "box",
      attachments: ["Q4_Analysis_Template.pptx", "KPI_Dashboard.xlsx", "Industry_Benchmarks.pdf"],
      analytics: { engagement: 95, accuracy: 98, businessValue: "High" },
    },
  ])

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          id: Date.now(),
          sender: "You",
          content: message,
          time: "Now",
          isOwn: true,
          shape: "torus",
        },
      ])
      setMessage("")
    }
  }

  const teamChats = [
    {
      id: 1,
      title: "Marketing Strategy Q1",
      preview: "Campaign performance analysis...",
      time: "2h ago",
      shape: "torus",
      team: "Marketing",
      members: 8,
    },
    {
      id: 2,
      title: "Product Roadmap Review",
      preview: "Feature prioritization discussion...",
      time: "1d ago",
      shape: "sphere",
      team: "Product",
      members: 12,
    },
    {
      id: 3,
      title: "Sales Pipeline Analysis",
      preview: "Lead conversion optimization...",
      time: "2d ago",
      shape: "box",
      team: "Sales",
      members: 6,
    },
    {
      id: 4,
      title: "Financial Planning 2024",
      preview: "Budget allocation and forecasting...",
      time: "3d ago",
      shape: "torus",
      team: "Finance",
      members: 4,
    },
  ]

  const businessMetrics = {
    activeUsers: 156,
    teamProductivity: 87,
    costSavings: 23,
    automationRate: 64,
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
            autoRotateSpeed={0.15}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.2}
          />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navigation />

        <div className="flex-1 flex">
          {/* Left Sidebar */}
          <div className="w-80 backdrop-blur-glass border-r border-teal-500/20 flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-teal-500/20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/25">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gradient-teal">ChatFlow Business</h1>
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                    <Briefcase className="w-3 h-3 mr-1" />
                    Business Plan
                  </Badge>
                </div>
              </div>

              {/* Business Metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 backdrop-blur-glass rounded-xl border border-teal-500/20 text-center">
                  <Users className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                  <span className="text-xs text-blue-400 font-medium">{businessMetrics.activeUsers} Users</span>
                </div>
                <div className="p-3 backdrop-blur-glass rounded-xl border border-teal-500/20 text-center">
                  <TrendingUp className="w-5 h-5 text-green-400 mx-auto mb-1" />
                  <span className="text-xs text-green-400 font-medium">
                    {businessMetrics.teamProductivity}% Efficiency
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 p-6">
              <nav className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left border border-teal-500/30">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-gradient-teal font-medium">Team Chats</span>
                  <Badge className="ml-auto bg-teal-500/20 text-teal-400 border-teal-500/30">{teamChats.length}</Badge>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left hover:border-teal-500/30 transition-all">
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                  <span className="text-sm text-white">Analytics</span>
                  <Badge className="ml-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs">
                    LIVE
                  </Badge>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left hover:border-teal-500/30 transition-all">
                  <Users className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-white">Team Management</span>
                  <span className="ml-auto text-xs text-green-400">{businessMetrics.activeUsers}</span>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left hover:border-teal-500/30 transition-all">
                  <Shield className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-white">Security Center</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full ml-auto"></div>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left hover:border-teal-500/30 transition-all">
                  <Settings className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-300">Settings</span>
                </button>
              </nav>

              {/* Team Chats */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-400">Active Projects</h3>
                  <button className="text-teal-400 hover:text-teal-300 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="p-4 card-glass rounded-2xl border border-teal-500/30">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-white">Current Session</span>
                      <Badge className="ml-auto bg-teal-500/20 text-teal-400 border-teal-500/30">Active</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Intelligence */}
            <div className="p-6 border-t border-teal-500/20">
              <div className="backdrop-blur-glass rounded-2xl p-6 border border-teal-500/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Business Intelligence</h3>
                    <p className="text-xs text-gray-400">Real-time insights</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Cost Savings</span>
                    <span className="text-xs text-green-400 font-medium">+{businessMetrics.costSavings}%</span>
                  </div>
                  <Progress value={businessMetrics.costSavings} className="h-1" />
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Automation</span>
                    <span className="text-xs text-blue-400 font-medium">{businessMetrics.automationRate}%</span>
                  </div>
                  <Progress value={businessMetrics.automationRate} className="h-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <div className="p-8 border-b border-teal-500/20 backdrop-blur-glass">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center space-x-4 mb-4">
                  <h1 className="text-4xl font-bold text-gradient-white-teal">Business Intelligence Hub</h1>
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    <Building2 className="w-4 h-4 mr-1" />
                    Enterprise
                  </Badge>
                </div>
                <p className="text-xl text-gray-300">
                  Advanced analytics, team collaboration, and business optimization tools
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8">
              <div className="max-w-4xl mx-auto">
                {/* Messages */}
                <div className="space-y-8">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-2xl ${msg.isOwn ? "order-2" : "order-1"}`}>
                        <div className="flex items-start space-x-4 mb-2">
                          {!msg.isOwn && <Chat3DPreview shape={msg.shape} />}
                          <div
                            className={`px-6 py-4 rounded-2xl backdrop-blur-glass border ${
                              msg.isOwn
                                ? "bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border-teal-500/30 text-white ml-4"
                                : "border-gray-700/50 text-white mr-4"
                            }`}
                          >
                            {/* Message Header */}
                            {!msg.isOwn && msg.department && (
                              <div className="flex items-center space-x-2 mb-3">
                                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">
                                  {msg.department}
                                </Badge>
                                {msg.priority && (
                                  <Badge
                                    className={`text-xs ${
                                      msg.priority === "high"
                                        ? "bg-red-500/20 text-red-400 border-red-500/30"
                                        : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                    }`}
                                  >
                                    {msg.priority.toUpperCase()}
                                  </Badge>
                                )}
                              </div>
                            )}

                            <p className="text-sm leading-relaxed mb-3">{msg.content}</p>

                            {/* Analytics */}
                            {msg.analytics && (
                              <div className="grid grid-cols-3 gap-3 mt-4 p-3 bg-gray-800/30 rounded-xl">
                                <div className="text-center">
                                  <div className="text-xs text-gray-400">Engagement</div>
                                  <div className="text-sm font-bold text-green-400">{msg.analytics.engagement}%</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-xs text-gray-400">Accuracy</div>
                                  <div className="text-sm font-bold text-blue-400">{msg.analytics.accuracy}%</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-xs text-gray-400">Value</div>
                                  <div className="text-sm font-bold text-purple-400">{msg.analytics.businessValue}</div>
                                </div>
                              </div>
                            )}

                            {/* Attachments */}
                            {msg.attachments && (
                              <div className="flex flex-wrap gap-2 mt-4">
                                {msg.attachments.map((attachment, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center space-x-2 px-3 py-2 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-teal-500/30 transition-all cursor-pointer"
                                  >
                                    <FileText className="w-4 h-4 text-teal-400" />
                                    <span className="text-xs text-gray-300">{attachment}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                          {msg.isOwn && <Chat3DPreview shape={msg.shape} />}
                        </div>
                        <p className={`text-xs text-gray-500 ${msg.isOwn ? "text-right mr-4" : "text-left ml-4"}`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="p-8 border-t border-teal-500/20 backdrop-blur-glass">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center space-x-4">
                  {/* Business Tools */}
                  <div className="flex space-x-2">
                    <button className="p-3 card-glass rounded-2xl hover:border-teal-500/30 transition-all border border-gray-700/50">
                      <Paperclip className="h-5 w-5 text-teal-400" />
                    </button>
                    <button className="p-3 card-glass rounded-2xl hover:border-teal-500/30 transition-all border border-gray-700/50">
                      <BarChart3 className="h-5 w-5 text-blue-400" />
                    </button>
                    <button className="p-3 card-glass rounded-2xl hover:border-teal-500/30 transition-all border border-gray-700/50">
                      <Calendar className="h-5 w-5 text-purple-400" />
                    </button>
                    <button className="p-3 card-glass rounded-2xl hover:border-teal-500/30 transition-all border border-gray-700/50">
                      <Database className="h-5 w-5 text-green-400" />
                    </button>
                  </div>

                  <div className="flex-1 relative">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ask about business metrics, team performance, or request analysis..."
                      className="pr-24 py-4 bg-gray-800/50 border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500/20 backdrop-blur-sm"
                      onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-2">
                      <button className="p-2 hover:bg-gray-700/50 rounded-xl transition-colors">
                        <Smile className="h-4 w-4 text-gray-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-700/50 rounded-xl transition-colors">
                        <Target className="h-4 w-4 text-blue-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-700/50 rounded-xl transition-colors">
                        <Mic className="h-4 w-4 text-cyan-400" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={sendMessage}
                    disabled={!message.trim()}
                    className="p-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-teal-500/25"
                  >
                    <Send className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Team & Analytics */}
          <div className="w-80 backdrop-blur-glass border-l border-teal-500/20 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-white text-lg">Team Projects</h3>
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <Users className="w-3 h-3 mr-1" />
                {businessMetrics.activeUsers}
              </Badge>
            </div>

            {/* Team Chats */}
            <div className="space-y-4 mb-8">
              {teamChats.map((chat) => (
                <div
                  key={chat.id}
                  className="card-glass p-4 rounded-2xl hover:border-teal-500/30 transition-all cursor-pointer"
                >
                  <div className="flex items-start space-x-3">
                    <Chat3DPreview shape={chat.shape} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium text-white text-sm truncate">{chat.title}</h4>
                        <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">{chat.team}</Badge>
                      </div>
                      <p className="text-xs text-gray-400 mb-2 line-clamp-2">{chat.preview}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{chat.time}</span>
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-400">{chat.members}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="font-medium text-gray-400 text-sm">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-3">
                <button className="p-3 card-glass rounded-xl hover:border-teal-500/30 transition-all text-center">
                  <BarChart3 className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <span className="text-xs text-white">Analytics</span>
                </button>
                <button className="p-3 card-glass rounded-xl hover:border-teal-500/30 transition-all text-center">
                  <Users className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <span className="text-xs text-white">Team</span>
                </button>
                <button className="p-3 card-glass rounded-xl hover:border-teal-500/30 transition-all text-center">
                  <FileText className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <span className="text-xs text-white">Reports</span>
                </button>
                <button className="p-3 card-glass rounded-xl hover:border-teal-500/30 transition-all text-center">
                  <Calendar className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <span className="text-xs text-white">Schedule</span>
                </button>
              </div>
            </div>

            {/* New Project Button */}
            <GradientButton variant="primary" className="w-full mt-6">
              <Plus className="w-5 h-5 mr-2" />
              New Project
            </GradientButton>
          </div>
        </div>
      </div>
    </div>
  )
}
