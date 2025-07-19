"use client"

import { useState, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import {
  Send,
  Paperclip,
  Bot,
  Users,
  Search,
  Settings,
  Crown,
  BarChart3,
  UserPlus,
  MoreHorizontal,
  Hash,
  Bell,
  Plus,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { GradientButton } from "@/components/ui/gradient-button"
import { Navigation } from "@/components/ui/navigation"
import { EnhancedScene } from "@/components/ui/3d/enhanced-scene"

// Business-grade 3D Components
function BusinessGeometry({ type = "torus", color = "#3b82f6" }: { type?: string; color?: string }) {
  return (
    <group>
      <mesh rotation={[0.5, 0.5, 0]}>
        {type === "torus" && <torusGeometry args={[1, 0.4, 16, 100]} />}
        {type === "sphere" && <sphereGeometry args={[1.2, 32, 32]} />}
        {type === "octahedron" && <octahedronGeometry args={[1.5]} />}
        {type === "cylinder" && <cylinderGeometry args={[1, 1, 2, 32]} />}
        {type === "cone" && <coneGeometry args={[1, 2, 32]} />}
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} envMapIntensity={1.2} />
      </mesh>
      {/* Add wireframe overlay for business look */}
      <mesh rotation={[0.5, 0.5, 0]}>
        {type === "torus" && <torusGeometry args={[1, 0.4, 16, 100]} />}
        {type === "sphere" && <sphereGeometry args={[1.2, 32, 32]} />}
        {type === "octahedron" && <octahedronGeometry args={[1.5]} />}
        {type === "cylinder" && <cylinderGeometry args={[1, 1, 2, 32]} />}
        {type === "cone" && <coneGeometry args={[1, 2, 32]} />}
        <meshBasicMaterial color={color} wireframe opacity={0.3} transparent />
      </mesh>
    </group>
  )
}

function Business3DPreview({ shape = "torus", color = "#3b82f6" }: { shape?: string; color?: string }) {
  return (
    <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-800/50 border border-blue-500/30 backdrop-blur-sm shadow-lg shadow-blue-500/10">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} />
          <pointLight position={[-10, -10, -5]} intensity={0.3} color="#8b5cf6" />
          <BusinessGeometry type={shape} color={color} />
          <Environment preset="city" />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default function BusinessChatPage() {
  const [message, setMessage] = useState("")
  const [activeChat, setActiveChat] = useState("team-alpha")
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Business AI",
      content:
        "Welcome to ChatFlow Business! I can help with team collaboration, project management, and business analytics.",
      time: "2:50 PM",
      isOwn: false,
      role: "AI Assistant",
      shape: "cylinder",
      color: "#3b82f6",
    },
    {
      id: 2,
      sender: "You",
      content: "Can you help analyze our team's 3D project progress?",
      time: "2:52 PM",
      isOwn: true,
      shape: "octahedron",
      color: "#8b5cf6",
    },
    {
      id: 3,
      sender: "Business AI",
      content:
        "I can provide detailed analytics on project timelines, resource allocation, and team performance metrics.",
      time: "2:53 PM",
      isOwn: false,
      role: "AI Assistant",
      shape: "cone",
      color: "#10b981",
    },
  ])

  const businessChats = [
    {
      id: "team-alpha",
      name: "Team Alpha",
      lastMessage: "Project analytics ready",
      time: "2:53 PM",
      members: 12,
      avatar: "TA",
      type: "team",
      priority: "high",
      unread: 3,
      shape: "cylinder",
      color: "#3b82f6",
    },
    {
      id: "project-beta",
      name: "Project Beta",
      lastMessage: "Deadline moved to Friday",
      time: "1:30 PM",
      members: 8,
      avatar: "PB",
      type: "project",
      priority: "medium",
      unread: 0,
      shape: "octahedron",
      color: "#8b5cf6",
    },
    {
      id: "executives",
      name: "Executive Board",
      lastMessage: "Q4 results discussion",
      time: "11:45 AM",
      members: 5,
      avatar: "EB",
      type: "executive",
      priority: "urgent",
      unread: 1,
      shape: "cone",
      color: "#ef4444",
    },
  ]

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
          color: "#3b82f6",
        },
      ])
      setMessage("")
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-500"
      case "high":
        return "bg-orange-500"
      case "medium":
        return "bg-yellow-500"
      default:
        return "bg-green-500"
    }
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
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gradient-teal">Business Hub</h1>
                  <span className="text-xs text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full backdrop-blur-sm font-medium">
                    Business
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 p-6">
              <nav className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left border border-blue-500/30">
                  <Hash className="w-5 h-5 text-blue-400" />
                  <span className="text-sm text-blue-400 font-medium">Channels</span>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left hover:border-teal-500/30 transition-all">
                  <Search className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-300">Search</span>
                  <span className="ml-auto text-xs text-gray-500">⌘F</span>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left border border-purple-500/30">
                  <BarChart3 className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-purple-400 font-medium">Analytics</span>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left hover:border-teal-500/30 transition-all">
                  <Settings className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-300">Settings</span>
                </button>
              </nav>

              {/* Team List */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-400">Active Teams</h3>
                  <button className="text-gray-400 hover:text-teal-400 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  {businessChats.map((chat) => (
                    <div
                      key={chat.id}
                      onClick={() => setActiveChat(chat.id)}
                      className={`p-4 card-glass rounded-2xl cursor-pointer transition-all ${
                        activeChat === chat.id ? "border-blue-500/30" : "hover:border-teal-500/20"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Business3DPreview shape={chat.shape} color={chat.color} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium text-white truncate">{chat.name}</h4>
                            <div className="flex items-center space-x-1">
                              <div className={`w-2 h-2 ${getPriorityColor(chat.priority)} rounded-full`}></div>
                              {chat.unread > 0 && (
                                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                                  <span className="text-xs text-white font-medium">{chat.unread}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <p className="text-xs text-gray-400 truncate">{chat.lastMessage}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Users className="w-3 h-3 text-blue-400" />
                            <span className="text-xs text-blue-400">{chat.members}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* User Profile */}
            <div className="p-6 border-t border-teal-500/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">B</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">Business User</div>
                  <div className="text-xs text-blue-400">Team Manager</div>
                </div>
                <Crown className="w-4 h-4 text-yellow-400" />
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <div className="p-8 border-b border-teal-500/20 backdrop-blur-glass">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-3 text-gradient-white-teal">Business Command Center</h1>
                <p className="text-xl text-gray-300">Advanced team collaboration and business intelligence platform</p>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8">
              <div className="max-w-4xl mx-auto">
                {/* Messages */}
                <div className="space-y-8">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-lg ${msg.isOwn ? "order-2" : "order-1"}`}>
                        <div className="flex items-start space-x-4 mb-2">
                          {!msg.isOwn && <Business3DPreview shape={msg.shape} color={msg.color} />}
                          <div>
                            {!msg.isOwn && (
                              <div className="flex items-center space-x-2 mb-2">
                                <span className="text-sm font-medium text-blue-400">{msg.sender}</span>
                                {msg.role && (
                                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
                                    {msg.role}
                                  </span>
                                )}
                              </div>
                            )}
                            <div
                              className={`px-6 py-4 rounded-2xl backdrop-blur-glass border ${
                                msg.isOwn
                                  ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30 text-white"
                                  : "border-gray-700/50 text-white"
                              }`}
                            >
                              <p className="text-sm leading-relaxed">{msg.content}</p>
                            </div>
                          </div>
                          {msg.isOwn && <Business3DPreview shape={msg.shape} color={msg.color} />}
                        </div>
                        <p className={`text-xs text-gray-500 ${msg.isOwn ? "text-right" : "text-left"}`}>{msg.time}</p>
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
                  <button className="p-4 card-glass rounded-2xl hover:border-teal-500/30 transition-all">
                    <Paperclip className="h-5 w-5 text-gray-400" />
                  </button>
                  <div className="flex-1 relative">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Message your team... (Business features enabled)"
                      className="pr-12 py-4 bg-gray-800/50 border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 backdrop-blur-sm"
                      onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-700/50 rounded-xl transition-colors">
                      <Bot className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                  <button
                    onClick={sendMessage}
                    disabled={!message.trim()}
                    className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-500/25"
                  >
                    <Send className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Business Analytics */}
          <div className="w-80 backdrop-blur-glass border-l border-teal-500/20 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-white text-lg">Business Insights</h3>
              <button className="text-gray-400 hover:text-white transition-colors">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              {[
                {
                  id: 1,
                  title: "Team Performance",
                  preview: "Analytics showing 15% productivity increase...",
                  time: "2h ago",
                  shape: "cylinder",
                  color: "#3b82f6",
                  metric: "+15%",
                },
                {
                  id: 2,
                  title: "Project Timeline",
                  preview: "Beta project ahead of schedule by 3 days...",
                  time: "1d ago",
                  shape: "octahedron",
                  color: "#8b5cf6",
                  metric: "+3 days",
                },
                {
                  id: 3,
                  title: "Resource Allocation",
                  preview: "Optimal resource distribution across teams...",
                  time: "2d ago",
                  shape: "cone",
                  color: "#10b981",
                  metric: "98%",
                },
              ].map((insight) => (
                <div
                  key={insight.id}
                  className="card-glass p-4 rounded-2xl hover:border-blue-500/30 transition-all cursor-pointer"
                >
                  <div className="flex items-start space-x-3">
                    <Business3DPreview shape={insight.shape} color={insight.color} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-white text-sm truncate">{insight.title}</h4>
                        <span className="text-xs text-green-400 bg-green-500/20 px-2 py-1 rounded-full">
                          {insight.metric}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mb-2 line-clamp-2">{insight.preview}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{insight.time}</span>
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <BarChart3 className="w-3 h-3 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-6 space-y-3">
              <GradientButton variant="primary" className="w-full bg-gradient-to-r from-blue-500 to-purple-500">
                <UserPlus className="mr-2 h-4 w-4" />
                Add Team Member
              </GradientButton>
              <button className="w-full p-3 card-glass rounded-xl flex items-center justify-center space-x-2 transition-colors hover:border-teal-500/30">
                <Bell className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-300">Notifications</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
