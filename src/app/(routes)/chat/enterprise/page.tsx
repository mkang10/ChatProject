"use client"

import { useState, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import {
  Send,
  Paperclip,
  Settings,
  Plus,
  Mic,
  MessageCircle,
  Shield,
  Globe,
  Lock,
  Server,
  Database,
  Activity,
  CheckCircle,
  Users,
  Crown,
  Eye,
  Key,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { GradientButton } from "@/components/ui/gradient-button"
import { Navigation } from "@/components/ui/navigation"
import { EnhancedScene } from "@/components/ui/3d/enhanced-scene"
import { Badge } from "@/components/ui/badge"

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
    <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-800/50 border border-red-500/30 backdrop-blur-sm">
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

export default function EnterpriseChatPage() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Enterprise AI",
      content:
        "Welcome to ChatFlow Enterprise. I'm equipped with maximum security protocols, global compliance standards, and enterprise-grade infrastructure. All communications are encrypted and monitored for security compliance.",
      time: "10:30 AM",
      isOwn: false,
      shape: "torus",
      classification: "CONFIDENTIAL",
      region: "US-EAST",
      compliance: ["SOC2", "GDPR", "HIPAA"],
    },
    {
      id: 2,
      sender: "You",
      content:
        "I need to analyze sensitive financial data for our global operations while ensuring compliance with international regulations",
      time: "10:32 AM",
      isOwn: true,
      shape: "sphere",
      classification: "RESTRICTED",
    },
    {
      id: 3,
      sender: "Enterprise AI",
      content:
        "I'll process your financial analysis with enterprise-grade security. All data will be encrypted, access logged, and processed in compliance with SOC2, GDPR, and regional financial regulations. Initiating secure analysis environment...",
      time: "10:33 AM",
      isOwn: false,
      shape: "box",
      classification: "CONFIDENTIAL",
      attachments: ["Secure_Analysis_Environment.enc", "Compliance_Report.pdf", "Audit_Trail.log"],
      securityMetrics: { encryption: "AES-256", compliance: 100, auditTrail: "Complete" },
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
          classification: "RESTRICTED",
        },
      ])
      setMessage("")
    }
  }

  const enterpriseChats = [
    {
      id: 1,
      title: "Global Security Analysis",
      preview: "Multi-region threat assessment...",
      time: "2h ago",
      shape: "torus",
      classification: "TOP SECRET",
      region: "GLOBAL",
      participants: 24,
    },
    {
      id: 2,
      title: "Compliance Audit Q4",
      preview: "SOC2 and GDPR compliance review...",
      time: "1d ago",
      shape: "sphere",
      classification: "CONFIDENTIAL",
      region: "EU-WEST",
      participants: 12,
    },
    {
      id: 3,
      title: "Infrastructure Monitoring",
      preview: "Real-time system health analysis...",
      time: "2d ago",
      shape: "box",
      classification: "RESTRICTED",
      region: "US-EAST",
      participants: 8,
    },
  ]

  const enterpriseMetrics = {
    globalUsers: 2847,
    securityScore: 99.8,
    uptime: 99.99,
    complianceRate: 100,
    threatsPrevented: 1247,
    dataProcessed: "847TB",
  }

  const getClassificationColor = (classification: string) => {
    switch (classification) {
      case "TOP SECRET":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      case "CONFIDENTIAL":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30"
      case "RESTRICTED":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
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
          <div className="w-80 backdrop-blur-glass border-r border-red-500/20 flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-red-500/20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/25">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    ChatFlow Enterprise
                  </h1>
                  <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0">
                    <Crown className="w-3 h-3 mr-1" />
                    Enterprise
                  </Badge>
                </div>
              </div>

              {/* Security Status */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 backdrop-blur-glass rounded-xl border border-red-500/20 text-center">
                  <Shield className="w-5 h-5 text-green-400 mx-auto mb-1" />
                  <span className="text-xs text-green-400 font-medium">{enterpriseMetrics.securityScore}% Secure</span>
                </div>
                <div className="p-3 backdrop-blur-glass rounded-xl border border-red-500/20 text-center">
                  <Activity className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                  <span className="text-xs text-blue-400 font-medium">{enterpriseMetrics.uptime}% Uptime</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 p-6">
              <nav className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left border border-red-500/30">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent font-medium">
                    Secure Chats
                  </span>
                  <Badge className="ml-auto bg-red-500/20 text-red-400 border-red-500/30">
                    {enterpriseChats.length}
                  </Badge>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left hover:border-red-500/30 transition-all">
                  <Eye className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-white">Threat Intelligence</span>
                  <Badge className="ml-auto bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs">LIVE</Badge>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left hover:border-red-500/30 transition-all">
                  <Server className="w-5 h-5 text-blue-400" />
                  <span className="text-sm text-white">Infrastructure</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full ml-auto animate-pulse"></div>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left hover:border-red-500/30 transition-all">
                  <Database className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-white">Data Centers</span>
                  <span className="ml-auto text-xs text-green-400">47 Active</span>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left hover:border-red-500/30 transition-all">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm text-white">Global Operations</span>
                  <span className="ml-auto text-xs text-cyan-400">{enterpriseMetrics.globalUsers}</span>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left hover:border-red-500/30 transition-all">
                  <Settings className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-300">Admin Console</span>
                </button>
              </nav>

              {/* Security Alerts */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-400">Security Status</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-400">All Systems Secure</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-4 card-glass rounded-2xl border border-green-500/30">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-white">Compliance: 100%</span>
                    </div>
                  </div>
                  <div className="p-4 card-glass rounded-2xl border border-blue-500/30">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-white">Threats Blocked: {enterpriseMetrics.threatsPrevented}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enterprise Status */}
            <div className="p-6 border-t border-red-500/20">
              <div className="backdrop-blur-glass rounded-2xl p-6 border border-red-500/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/25">
                    <Crown className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Enterprise Control</h3>
                    <p className="text-xs text-gray-400">Maximum security active</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Data Processed</span>
                    <span className="text-xs text-blue-400 font-medium">{enterpriseMetrics.dataProcessed}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Global Users</span>
                    <span className="text-xs text-green-400 font-medium">
                      {enterpriseMetrics.globalUsers.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <div className="p-8 border-b border-red-500/20 backdrop-blur-glass">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center space-x-4 mb-4">
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    Enterprise Command Center
                  </h1>
                  <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white">
                    <Shield className="w-4 h-4 mr-1" />
                    Maximum Security
                  </Badge>
                </div>
                <p className="text-xl text-gray-300">
                  Global operations, enterprise security, and compliance management
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
                                ? "bg-gradient-to-r from-red-500/20 to-orange-500/20 border-red-500/30 text-white ml-4"
                                : "border-gray-700/50 text-white mr-4"
                            }`}
                          >
                            {/* Message Header */}
                            {msg.classification && (
                              <div className="flex items-center space-x-2 mb-3">
                                <Badge className={`text-xs ${getClassificationColor(msg.classification)}`}>
                                  <Lock className="w-3 h-3 mr-1" />
                                  {msg.classification}
                                </Badge>
                                {msg.region && (
                                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">
                                    <Globe className="w-3 h-3 mr-1" />
                                    {msg.region}
                                  </Badge>
                                )}
                                {msg.compliance && (
                                  <div className="flex space-x-1">
                                    {msg.compliance.map((comp, index) => (
                                      <Badge
                                        key={index}
                                        className="bg-green-500/20 text-green-400 border-green-500/30 text-xs"
                                      >
                                        {comp}
                                      </Badge>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}

                            <p className="text-sm leading-relaxed mb-3">{msg.content}</p>

                            {/* Security Metrics */}
                            {msg.securityMetrics && (
                              <div className="grid grid-cols-3 gap-3 mt-4 p-3 bg-gray-800/30 rounded-xl border border-red-500/20">
                                <div className="text-center">
                                  <div className="text-xs text-gray-400">Encryption</div>
                                  <div className="text-sm font-bold text-red-400">{msg.securityMetrics.encryption}</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-xs text-gray-400">Compliance</div>
                                  <div className="text-sm font-bold text-green-400">
                                    {msg.securityMetrics.compliance}%
                                  </div>
                                </div>
                                <div className="text-center">
                                  <div className="text-xs text-gray-400">Audit Trail</div>
                                  <div className="text-sm font-bold text-blue-400">
                                    {msg.securityMetrics.auditTrail}
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Attachments */}
                            {msg.attachments && (
                              <div className="flex flex-wrap gap-2 mt-4">
                                {msg.attachments.map((attachment, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center space-x-2 px-3 py-2 bg-gray-800/50 rounded-xl border border-red-500/30 hover:border-red-500/50 transition-all cursor-pointer"
                                  >
                                    <Lock className="w-4 h-4 text-red-400" />
                                    <span className="text-xs text-gray-300">{attachment}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                          {msg.isOwn && <Chat3DPreview shape={msg.shape} />}
                        </div>
                        <p className={`text-xs text-gray-500 ${msg.isOwn ? "text-right mr-4" : "text-left ml-4"}`}>
                          {msg.time} • Encrypted • Logged
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="p-8 border-t border-red-500/20 backdrop-blur-glass">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center space-x-4">
                  {/* Enterprise Tools */}
                  <div className="flex space-x-2">
                    <button className="p-3 card-glass rounded-2xl hover:border-red-500/30 transition-all border border-gray-700/50">
                      <Paperclip className="h-5 w-5 text-red-400" />
                    </button>
                    <button className="p-3 card-glass rounded-2xl hover:border-red-500/30 transition-all border border-gray-700/50">
                      <Shield className="h-5 w-5 text-green-400" />
                    </button>
                    <button className="p-3 card-glass rounded-2xl hover:border-red-500/30 transition-all border border-gray-700/50">
                      <Database className="h-5 w-5 text-blue-400" />
                    </button>
                    <button className="p-3 card-glass rounded-2xl hover:border-red-500/30 transition-all border border-gray-700/50">
                      <Globe className="h-5 w-5 text-purple-400" />
                    </button>
                    <button className="p-3 card-glass rounded-2xl hover:border-red-500/30 transition-all border border-gray-700/50">
                      <Eye className="h-5 w-5 text-cyan-400" />
                    </button>
                  </div>

                  <div className="flex-1 relative">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Enter secure command or query... All communications are encrypted and logged"
                      className="pr-24 py-4 bg-gray-800/50 border-red-500/30 rounded-2xl text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500/20 backdrop-blur-sm"
                      onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-2">
                      <button className="p-2 hover:bg-gray-700/50 rounded-xl transition-colors">
                        <Key className="h-4 w-4 text-red-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-700/50 rounded-xl transition-colors">
                        <Shield className="h-4 w-4 text-green-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-700/50 rounded-xl transition-colors">
                        <Mic className="h-4 w-4 text-cyan-400" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={sendMessage}
                    disabled={!message.trim()}
                    className="p-4 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-red-500/25"
                  >
                    <Send className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Global Operations */}
          <div className="w-80 backdrop-blur-glass border-l border-red-500/20 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-white text-lg">Global Operations</h3>
              <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white">
                <Globe className="w-3 h-3 mr-1" />
                {enterpriseMetrics.globalUsers.toLocaleString()}
              </Badge>
            </div>

            {/* Enterprise Chats */}
            <div className="space-y-4 mb-8">
              {enterpriseChats.map((chat) => (
                <div
                  key={chat.id}
                  className="card-glass p-4 rounded-2xl hover:border-red-500/30 transition-all cursor-pointer"
                >
                  <div className="flex items-start space-x-3">
                    <Chat3DPreview shape={chat.shape} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium text-white text-sm truncate">{chat.title}</h4>
                        <Badge className={`text-xs ${getClassificationColor(chat.classification)}`}>
                          {chat.classification}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-400 mb-2 line-clamp-2">{chat.preview}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">
                            {chat.region}
                          </Badge>
                          <span className="text-xs text-gray-500">{chat.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-400">{chat.participants}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* System Status */}
            <div className="space-y-4">
              <h4 className="font-medium text-gray-400 text-sm">System Status</h4>
              <div className="grid grid-cols-2 gap-3">
                <button className="p-3 card-glass rounded-xl hover:border-red-500/30 transition-all text-center">
                  <Server className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <span className="text-xs text-white">Infrastructure</span>
                  <div className="text-xs text-green-400 mt-1">99.99%</div>
                </button>
                <button className="p-3 card-glass rounded-xl hover:border-red-500/30 transition-all text-center">
                  <Shield className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <span className="text-xs text-white">Security</span>
                  <div className="text-xs text-blue-400 mt-1">Maximum</div>
                </button>
                <button className="p-3 card-glass rounded-xl hover:border-red-500/30 transition-all text-center">
                  <Database className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <span className="text-xs text-white">Data Centers</span>
                  <div className="text-xs text-purple-400 mt-1">47 Active</div>
                </button>
                <button className="p-3 card-glass rounded-xl hover:border-red-500/30 transition-all text-center">
                  <Globe className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <span className="text-xs text-white">Global</span>
                  <div className="text-xs text-cyan-400 mt-1">24/7</div>
                </button>
              </div>
            </div>

            {/* New Secure Session Button */}
            <GradientButton
              variant="primary"
              className="w-full mt-6 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
            >
              <Plus className="w-5 h-5 mr-2" />
              New Secure Session
            </GradientButton>
          </div>
        </div>
      </div>
    </div>
  )
}
