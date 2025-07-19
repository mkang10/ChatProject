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
  Building2,
  Shield,
  Globe,
  Server,
  Lock,
  HeadphonesIcon,
  AlertTriangle,
  MoreHorizontal,
  Hash,
  Eye,
  Plus,
  Database,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { GradientButton } from "@/components/ui/gradient-button"
import { Navigation } from "@/components/ui/navigation"
import { EnhancedScene } from "@/components/ui/3d/enhanced-scene"

// Enterprise-grade 3D Components with advanced security visualization
function EnterpriseGeometry({
  type = "torus",
  color = "#8b5cf6",
  classification = "internal",
}: { type?: string; color?: string; classification?: string }) {
  const getSecurityGlow = (level: string) => {
    switch (level) {
      case "top-secret":
        return "#ef4444"
      case "classified":
        return "#f97316"
      case "confidential":
        return "#eab308"
      default:
        return "#10b981"
    }
  }

  return (
    <group>
      {/* Main geometry */}
      <mesh rotation={[0.5, 0.5, 0]}>
        {type === "torus" && <torusGeometry args={[1, 0.4, 16, 100]} />}
        {type === "sphere" && <sphereGeometry args={[1.2, 32, 32]} />}
        {type === "octahedron" && <octahedronGeometry args={[1.5]} />}
        {type === "icosahedron" && <icosahedronGeometry args={[1.3]} />}
        {type === "tetrahedron" && <tetrahedronGeometry args={[1.5]} />}
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} envMapIntensity={2} />
      </mesh>

      {/* Security classification glow */}
      <mesh rotation={[0.5, 0.5, 0]} scale={1.1}>
        {type === "torus" && <torusGeometry args={[1, 0.4, 16, 100]} />}
        {type === "sphere" && <sphereGeometry args={[1.2, 32, 32]} />}
        {type === "octahedron" && <octahedronGeometry args={[1.5]} />}
        {type === "icosahedron" && <icosahedronGeometry args={[1.3]} />}
        {type === "tetrahedron" && <tetrahedronGeometry args={[1.5]} />}
        <meshBasicMaterial color={getSecurityGlow(classification)} wireframe opacity={0.2} transparent />
      </mesh>

      {/* Holographic data streams */}
      <mesh rotation={[0, 0, 0]} scale={0.5}>
        <ringGeometry args={[1.5, 2, 32]} />
        <meshBasicMaterial color={getSecurityGlow(classification)} opacity={0.1} transparent />
      </mesh>
    </group>
  )
}

function Enterprise3DPreview({
  shape = "torus",
  color = "#8b5cf6",
  classification = "internal",
}: { shape?: string; color?: string; classification?: string }) {
  return (
    <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-900/50 border border-purple-500/30 backdrop-blur-sm relative shadow-lg shadow-purple-500/10">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
          <spotLight position={[0, 10, 0]} intensity={0.8} color="#ec4899" />
          <EnterpriseGeometry type={shape} color={color} classification={classification} />
          <Environment preset="night" />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
        </Suspense>
      </Canvas>
      {/* Security badge overlay */}
      <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-gray-900 animate-pulse"></div>
    </div>
  )
}

export default function EnterpriseChatPage() {
  const [message, setMessage] = useState("")
  const [activeChat, setActiveChat] = useState("global-ops")
  const [securityLevel, setSecurityLevel] = useState("classified")
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Enterprise AI",
      content: "Secure connection established. Welcome to ChatFlow Enterprise Command Center.",
      time: "3:55 PM",
      isOwn: false,
      role: "AI System",
      classification: "classified",
      shape: "icosahedron",
      color: "#8b5cf6",
    },
    {
      id: 2,
      sender: "You",
      content: "Requesting global operations status report",
      time: "3:56 PM",
      isOwn: true,
      classification: "confidential",
      shape: "tetrahedron",
      color: "#ec4899",
    },
    {
      id: 3,
      sender: "Security Chief",
      content: "All global systems operational. Security protocols active across 47 regions.",
      time: "3:57 PM",
      isOwn: false,
      role: "Security",
      classification: "top-secret",
      shape: "octahedron",
      color: "#ef4444",
    },
  ])

  const enterpriseChannels = [
    {
      id: "global-ops",
      name: "Global Operations",
      lastMessage: "Security protocols active",
      time: "3:57 PM",
      members: 47,
      avatar: "GO",
      type: "operations",
      classification: "classified",
      region: "Global",
      unread: 2,
      shape: "icosahedron",
      color: "#8b5cf6",
    },
    {
      id: "exec-board",
      name: "Executive Board",
      lastMessage: "Strategic review approved",
      time: "2:30 PM",
      members: 12,
      avatar: "EB",
      type: "executive",
      classification: "top-secret",
      region: "HQ",
      unread: 0,
      shape: "tetrahedron",
      color: "#ef4444",
    },
    {
      id: "security-ops",
      name: "Security Operations",
      lastMessage: "Threat assessment complete",
      time: "1:15 PM",
      members: 23,
      avatar: "SO",
      type: "security",
      classification: "classified",
      region: "Global",
      unread: 1,
      shape: "octahedron",
      color: "#f97316",
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
          classification: securityLevel,
          shape: "torus",
          color: "#8b5cf6",
        },
      ])
      setMessage("")
    }
  }

  const enterpriseMetrics = [
    { icon: Globe, label: "Global Reach", value: "47 countries", status: "operational", color: "#3b82f6" },
    { icon: Server, label: "Uptime", value: "99.99%", status: "excellent", color: "#10b981" },
    { icon: Shield, label: "Security", value: "Level 5", status: "maximum", color: "#ef4444" },
    { icon: Users, label: "Active Users", value: "12.4K", status: "growing", color: "#8b5cf6" },
  ]

  const getClassificationColor = (classification: string) => {
    switch (classification) {
      case "top-secret":
        return "bg-red-500"
      case "classified":
        return "bg-orange-500"
      case "confidential":
        return "bg-yellow-500"
      default:
        return "bg-green-500"
    }
  }

  const getClassificationBorder = (classification: string) => {
    switch (classification) {
      case "top-secret":
        return "border-red-500/30"
      case "classified":
        return "border-orange-500/30"
      case "confidential":
        return "border-yellow-500/30"
      default:
        return "border-green-500/30"
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
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gradient-teal">Enterprise Command</h1>
                  <span className="text-xs text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full backdrop-blur-sm font-medium">
                    Enterprise
                  </span>
                </div>
              </div>

              {/* Security Status */}
              <div className="backdrop-blur-glass rounded-2xl p-4 border border-red-500/20 bg-gradient-to-r from-red-500/10 to-orange-500/10">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-red-400">CLASSIFIED ENVIRONMENT</span>
                    <p className="text-xs text-red-300">End-to-end encrypted • Level 5 Security</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 p-6">
              <nav className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left border border-purple-500/30">
                  <Hash className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-purple-400 font-medium">Secure Channels</span>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left hover:border-teal-500/30 transition-all">
                  <Search className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-300">Global Search</span>
                  <span className="ml-auto text-xs text-gray-500">⌘F</span>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left border border-red-500/30">
                  <Database className="w-5 h-5 text-red-400" />
                  <span className="text-sm text-red-400 font-medium">Intelligence</span>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left hover:border-teal-500/30 transition-all">
                  <Settings className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-300">Command Center</span>
                </button>
              </nav>

              {/* Secure Channels */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-400">Secure Channels</h3>
                  <button className="text-gray-400 hover:text-teal-400 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  {enterpriseChannels.map((channel) => (
                    <div
                      key={channel.id}
                      onClick={() => setActiveChat(channel.id)}
                      className={`p-4 card-glass rounded-2xl cursor-pointer transition-all border ${
                        activeChat === channel.id
                          ? `border-purple-500/30 ${getClassificationBorder(channel.classification)}`
                          : "hover:border-teal-500/20"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Enterprise3DPreview
                          shape={channel.shape}
                          color={channel.color}
                          classification={channel.classification}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium text-white truncate">{channel.name}</h4>
                            <div className="flex items-center space-x-1">
                              <div
                                className={`w-2 h-2 ${getClassificationColor(channel.classification)} rounded-full`}
                              ></div>
                              {channel.unread > 0 && (
                                <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                                  <span className="text-xs text-white font-medium">{channel.unread}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          <p className="text-xs text-gray-400 truncate">{channel.lastMessage}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Globe className="w-3 h-3 text-purple-400" />
                            <span className="text-xs text-purple-400">{channel.region}</span>
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${getClassificationColor(channel.classification)} text-white`}
                            >
                              {channel.classification.toUpperCase()}
                            </span>
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
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">E</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">Enterprise Admin</div>
                  <div className="text-xs text-purple-400">Global Access</div>
                </div>
                <Building2 className="w-4 h-4 text-purple-400" />
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <div className="p-8 border-b border-teal-500/20 backdrop-blur-glass">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-3 text-gradient-white-teal">Enterprise Command Center</h1>
                <p className="text-xl text-gray-300">
                  Maximum security • Global operations • Advanced intelligence platform
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
                      <div className={`max-w-lg ${msg.isOwn ? "order-2" : "order-1"}`}>
                        <div className="flex items-start space-x-4 mb-2">
                          {!msg.isOwn && (
                            <Enterprise3DPreview
                              shape={msg.shape}
                              color={msg.color}
                              classification={msg.classification}
                            />
                          )}
                          <div>
                            {!msg.isOwn && (
                              <div className="flex items-center space-x-2 mb-2">
                                <span className="text-sm font-medium text-purple-400">{msg.sender}</span>
                                {msg.role && (
                                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                                    {msg.role}
                                  </span>
                                )}
                                <span
                                  className={`text-xs px-2 py-1 rounded-full ${getClassificationColor(msg.classification)} text-white`}
                                >
                                  {msg.classification?.toUpperCase()}
                                </span>
                              </div>
                            )}
                            <div
                              className={`px-6 py-4 rounded-2xl backdrop-blur-glass border ${
                                msg.isOwn
                                  ? "bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 border-purple-500/30 text-white"
                                  : `border-gray-700/50 ${getClassificationBorder(msg.classification)} text-white`
                              }`}
                            >
                              <p className="text-sm leading-relaxed">{msg.content}</p>
                            </div>
                          </div>
                          {msg.isOwn && (
                            <Enterprise3DPreview
                              shape={msg.shape}
                              color={msg.color}
                              classification={msg.classification}
                            />
                          )}
                        </div>
                        <p className={`text-xs text-gray-500 ${msg.isOwn ? "text-right" : "text-left"}`}>{msg.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Security Classification Selector */}
            <div className="px-8 py-4 bg-gradient-to-r from-gray-800/50 to-red-900/20 border-t border-teal-500/20 backdrop-blur-glass">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Eye className="h-4 w-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-300">Classification Level:</span>
                    <select
                      value={securityLevel}
                      onChange={(e) => setSecurityLevel(e.target.value)}
                      className="bg-gray-800/50 border border-gray-600/50 rounded-lg px-3 py-2 text-sm text-white focus:border-purple-500 focus:ring-purple-500/20 backdrop-blur-sm"
                    >
                      <option value="internal">Internal</option>
                      <option value="confidential">Confidential</option>
                      <option value="classified">Classified</option>
                      <option value="top-secret">Top Secret</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Lock className="h-4 w-4 text-red-400" />
                    <span className="text-xs text-red-400 font-medium">SECURE CHANNEL ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="p-8 border-t border-teal-500/20 backdrop-blur-glass">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center space-x-4">
                  <button className="p-4 card-glass rounded-2xl hover:border-purple-500/30 transition-all">
                    <Paperclip className="h-5 w-5 text-purple-400" />
                  </button>
                  <div className="flex-1 relative">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Secure enterprise message... (End-to-end encrypted)"
                      className="pr-20 py-4 bg-gray-800/50 border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500/20 backdrop-blur-sm"
                      onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-2">
                      <button className="p-2 hover:bg-gray-700/50 rounded-xl transition-colors">
                        <Bot className="h-4 w-4 text-gray-400" />
                      </button>
                      <button className="p-2 hover:bg-red-600/20 rounded-xl transition-colors">
                        <Lock className="h-4 w-4 text-red-400" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={sendMessage}
                    disabled={!message.trim()}
                    className="p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-purple-500/25"
                  >
                    <Send className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Enterprise Intelligence */}
          <div className="w-80 backdrop-blur-glass border-l border-teal-500/20 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-white text-lg">Global Intelligence</h3>
              <button className="text-gray-400 hover:text-white transition-colors">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              {enterpriseMetrics.map((metric, index) => {
                const Icon = metric.icon
                return (
                  <div key={index} className="card-glass p-4 rounded-2xl hover:border-purple-500/30 transition-all">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white">{metric.label}</h3>
                        <p className="text-sm text-gray-400">{metric.value}</p>
                        <span className="text-xs text-green-400 bg-green-500/20 px-2 py-1 rounded-full">
                          {metric.status}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Emergency Actions */}
            <div className="mt-6 space-y-3">
              <GradientButton variant="primary" className="w-full bg-gradient-to-r from-red-500 to-pink-500">
                <AlertTriangle className="mr-2 h-4 w-4" />
                Emergency Protocol
              </GradientButton>
              <button className="w-full p-3 card-glass rounded-xl flex items-center justify-center space-x-2 transition-colors hover:border-purple-500/30">
                <HeadphonesIcon className="h-4 w-4 text-purple-400" />
                <span className="text-sm text-purple-300">Dedicated Support</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
