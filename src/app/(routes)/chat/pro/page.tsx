"use client"

import { useState, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import {
  Send,
  Paperclip,
  Bot,
  Star,
  Search,
  Settings,
  Smile,
  ImageIcon,
  Mic,
  MoreHorizontal,
  Plus,
  Zap,
  MessageCircle,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/ui/navigation"
import { GradientButton } from "@/components/ui/gradient-button"
import { EnhancedScene } from "@/components/ui/3d/enhanced-scene"

// Advanced 3D Components for Pro
function AdvancedGeometry({ type = "torus", color = "#14b8a6" }: { type?: string; color?: string }) {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      {type === "torus" && <torusGeometry args={[1, 0.4, 16, 100]} />}
      {type === "sphere" && <sphereGeometry args={[1.2, 32, 32]} />}
      {type === "octahedron" && <octahedronGeometry args={[1.5]} />}
      {type === "dodecahedron" && <dodecahedronGeometry args={[1.2]} />}
      <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} envMapIntensity={1.5} />
    </mesh>
  )
}

function Pro3DPreview({ shape = "torus", color = "#14b8a6" }: { shape?: string; color?: string }) {
  return (
    <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-800/50 border border-teal-500/30 backdrop-blur-sm shadow-lg shadow-teal-500/10">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#06b6d4" />
          <AdvancedGeometry type={shape} color={color} />
          <Environment preset="studio" />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={3} />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default function ProChatPage() {
  const [message, setMessage] = useState("")
  const [activeChat, setActiveChat] = useState("ai-assistant")
  const [showAI, setShowAI] = useState(true)
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "AI Pro",
      content: "Welcome to ChatFlow Pro! I can help you with advanced 3D modeling, animations, and more.",
      time: "10:30 AM",
      isOwn: false,
      shape: "octahedron",
      color: "#8b5cf6",
    },
    {
      id: 2,
      sender: "You",
      content: "Can you help me create a complex 3D scene?",
      time: "10:32 AM",
      isOwn: true,
      shape: "dodecahedron",
      color: "#14b8a6",
    },
    {
      id: 3,
      sender: "AI Pro",
      content:
        "I can generate advanced 3D models, lighting setups, and even animations. What type of scene are you envisioning?",
      time: "10:33 AM",
      isOwn: false,
      shape: "sphere",
      color: "#f59e0b",
    },
  ])

  const chats = [
    {
      id: "ai-assistant",
      name: "AI Pro Assistant",
      lastMessage: "Advanced 3D modeling help",
      time: "10:33",
      online: true,
      avatar: "AI",
      unread: 0,
      shape: "octahedron",
      color: "#8b5cf6",
    },
    {
      id: "team",
      name: "3D Design Team",
      lastMessage: "New project discussion",
      time: "09:45",
      online: true,
      avatar: "3D",
      isGroup: true,
      unread: 2,
      shape: "dodecahedron",
      color: "#06b6d4",
    },
    {
      id: "mentor",
      name: "Pro Mentor",
      lastMessage: "Advanced techniques",
      time: "Yesterday",
      online: false,
      avatar: "PM",
      unread: 0,
      shape: "sphere",
      color: "#f59e0b",
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
          color: "#14b8a6",
        },
      ])
      setMessage("")
    }
  }

  const aiSuggestions = [
    { text: "Generate 3D model", icon: "🎯", color: "purple" },
    { text: "Create animation", icon: "🎬", color: "blue" },
    { text: "Optimize scene", icon: "⚡", color: "yellow" },
    { text: "Export formats", icon: "📦", color: "green" },
  ]

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
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gradient-teal">ChatFlow Pro</h1>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-teal-400 bg-teal-500/20 px-3 py-1 rounded-full backdrop-blur-sm font-medium">
                      Pro
                    </span>
                    <Star className="w-3 h-3 text-yellow-400" />
                  </div>
                </div>
              </div>

              {/* Pro Features Banner */}
              <div className="backdrop-blur-glass rounded-2xl p-4 border border-teal-500/20 mb-4">
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-teal-400" />
                  <span className="text-sm font-medium text-gradient-teal">AI Features Active</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Unlimited messages • Advanced 3D tools</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 p-6">
              <nav className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left border border-teal-500/30">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-gradient-teal font-medium">Chats</span>
                  <span className="ml-auto text-xs text-teal-400">∞</span>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left hover:border-teal-500/30 transition-all">
                  <Search className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-300">Search</span>
                  <span className="ml-auto text-xs text-gray-500">⌘F</span>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left border border-purple-500/30">
                  <Zap className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-purple-400 font-medium">AI Features</span>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left hover:border-teal-500/30 transition-all">
                  <Settings className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-300">Settings</span>
                </button>
              </nav>

              {/* Chat List */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-400">Recent Chats</h3>
                  <button className="text-gray-400 hover:text-teal-400 transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  {chats.map((chat) => (
                    <div
                      key={chat.id}
                      onClick={() => setActiveChat(chat.id)}
                      className={`p-4 card-glass rounded-2xl cursor-pointer transition-all ${
                        activeChat === chat.id ? "border-teal-500/30" : "hover:border-teal-500/20"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Pro3DPreview shape={chat.shape} color={chat.color} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-medium text-white truncate flex items-center">
                              {chat.name}
                              {chat.isGroup && <Star className="ml-1 w-3 h-3 text-yellow-400" />}
                            </h4>
                            {chat.unread > 0 && (
                              <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                                <span className="text-xs text-white font-medium">{chat.unread}</span>
                              </div>
                            )}
                          </div>
                          <p className="text-xs text-gray-400 truncate">{chat.lastMessage}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Assistant Toggle */}
            <div className="p-6 border-t border-teal-500/20">
              <button
                onClick={() => setShowAI(!showAI)}
                className={`w-full p-4 rounded-2xl flex items-center space-x-3 transition-all backdrop-blur-glass ${
                  showAI
                    ? "border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-pink-500/10"
                    : "border border-gray-700/50 hover:border-teal-500/30"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    showAI ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-gray-700"
                  }`}
                >
                  <Bot className={`h-5 w-5 ${showAI ? "text-white" : "text-gray-400"}`} />
                </div>
                <div className="text-left">
                  <span className={`font-medium ${showAI ? "text-purple-400" : "text-gray-300"}`}>AI Assistant</span>
                  <p className="text-xs text-gray-400">Smart replies & 3D generation</p>
                </div>
              </button>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <div className="p-8 border-b border-teal-500/20 backdrop-blur-glass">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-3 text-gradient-white-teal">Unlock the power of AI Pro</h1>
                <p className="text-xl text-gray-300">
                  Advanced AI capabilities for professional 3D creation and development
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
                          {!msg.isOwn && <Pro3DPreview shape={msg.shape} color={msg.color} />}
                          <div>
                            {!msg.isOwn && (
                              <p className="text-xs text-gray-400 mb-2 ml-3 flex items-center">
                                {msg.sender}
                                {msg.sender === "AI Pro" && <Bot className="ml-1 w-3 h-3 text-purple-400" />}
                              </p>
                            )}
                            <div
                              className={`px-6 py-4 rounded-2xl backdrop-blur-glass border ${
                                msg.isOwn
                                  ? "bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border-teal-500/30 text-white"
                                  : msg.sender === "AI Pro"
                                    ? "bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/30 text-white"
                                    : "border-gray-700/50 text-white"
                              }`}
                            >
                              <p className="text-sm leading-relaxed">{msg.content}</p>
                            </div>
                          </div>
                          {msg.isOwn && <Pro3DPreview shape={msg.shape} color={msg.color} />}
                        </div>
                        <p className={`text-xs text-gray-500 ${msg.isOwn ? "text-right" : "text-left"}`}>{msg.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Suggestions */}
            {showAI && (
              <div className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-t border-purple-500/20 backdrop-blur-glass">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-sm font-semibold text-purple-400 mb-4 flex items-center">
                    <Bot className="mr-2 w-4 h-4" />
                    AI Pro Suggestions
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {aiSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        className="flex items-center space-x-2 px-4 py-3 backdrop-blur-glass border border-purple-500/30 text-purple-400 rounded-xl text-sm hover:bg-purple-500/10 transition-colors"
                      >
                        <span>{suggestion.icon}</span>
                        <span>{suggestion.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Message Input */}
            <div className="p-8 border-t border-teal-500/20 backdrop-blur-glass">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center space-x-4">
                  <button className="p-4 card-glass rounded-2xl hover:border-teal-500/30 transition-all">
                    <Paperclip className="h-5 w-5 text-gray-400" />
                  </button>
                  <button className="p-4 card-glass rounded-2xl hover:border-teal-500/30 transition-all">
                    <ImageIcon className="h-5 w-5 text-gray-400" />
                  </button>
                  <div className="flex-1 relative">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ask AI Pro to create advanced 3D models, animations, or help with complex projects..."
                      className="pr-20 py-4 bg-gray-800/50 border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500/20 backdrop-blur-sm"
                      onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-2">
                      <button className="p-2 hover:bg-gray-700/50 rounded-xl transition-colors">
                        <Smile className="h-4 w-4 text-gray-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-700/50 rounded-xl transition-colors">
                        <Mic className="h-4 w-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                  <button className="p-4 bg-purple-500/20 hover:bg-purple-500/30 rounded-2xl transition-colors backdrop-blur-glass border border-purple-500/30">
                    <Bot className="h-5 w-5 text-purple-400" />
                  </button>
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

          {/* Right Sidebar - Enhanced for Pro */}
          <div className="w-80 backdrop-blur-glass border-l border-teal-500/20 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-white text-lg">Pro Chat History</h3>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-teal-400 bg-teal-500/20 px-2 py-1 rounded-full">Unlimited</span>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  id: 1,
                  title: "Advanced 3D Modeling",
                  preview: "Creating complex geometries with AI assistance...",
                  time: "2h ago",
                  shape: "octahedron",
                  color: "#8b5cf6",
                },
                {
                  id: 2,
                  title: "Animation Masterclass",
                  preview: "Professional animation techniques and workflows...",
                  time: "1d ago",
                  shape: "dodecahedron",
                  color: "#06b6d4",
                },
                {
                  id: 3,
                  title: "Performance Optimization",
                  preview: "Optimizing 3D scenes for better performance...",
                  time: "2d ago",
                  shape: "sphere",
                  color: "#f59e0b",
                },
              ].map((chat) => (
                <div
                  key={chat.id}
                  className="card-glass p-4 rounded-2xl hover:border-teal-500/30 transition-all cursor-pointer"
                >
                  <div className="flex items-start space-x-3">
                    <Pro3DPreview shape={chat.shape} color={chat.color} />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-white text-sm mb-1 truncate">{chat.title}</h4>
                      <p className="text-xs text-gray-400 mb-2 line-clamp-2">{chat.preview}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{chat.time}</span>
                        <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <Star className="w-3 h-3 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* New Chat Button */}
            <GradientButton variant="primary" className="w-full mt-6">
              <Plus className="w-5 h-5 mr-2" />
              New Pro Chat
            </GradientButton>
          </div>
        </div>
      </div>
    </div>
  )
}
