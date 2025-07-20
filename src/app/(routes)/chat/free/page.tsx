"use client"

import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls  } from "@react-three/drei"
import {
  Send,
  Paperclip,
  Lock,
  Star,
  ArrowUp,
  Search,
  Settings,
  Plus,
  MoreHorizontal,
  Smile,
  Mic,
  MessageCircle,


} from "lucide-react"
import { Input } from "@/components/ui/input"
import { GradientButton } from "@/components/ui/gradient-button"
import { Progress } from "@/components/ui/progress"
import { Navigation } from "@/components/ui/navigation"
import { EnhancedScene } from "@/components/ui/3d/enhanced-scene"
import { Chat3DPreview } from "@/components/chat/free/Chat3DPreview"
import { SettingsDialog } from "@/components/chat/free/SettingsDialog"
import { SearchDialog } from "@/components/chat/free/SearchDialog"
import { NewChatDialog } from "@/components/chat/free/NewChatDialog"
import { ChatOptionsDialog } from "@/components/chat/free/ChatOption"


export default function FreeChatPage() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "AI Assistant",
      content: "Welcome to ChatFlow! How can I help you today?",
      time: "10:30 AM",
      isOwn: false,
      shape: "torus",
    },
    {
      id: 2,
      sender: "You",
      content: "I need help with 3D modeling",
      time: "10:32 AM",
      isOwn: true,
      shape: "sphere",
    },
    {
      id: 3,
      sender: "AI Assistant",
      content: "I'd be happy to help with 3D modeling! What specific aspect would you like to explore?",
      time: "10:33 AM",
      isOwn: false,
      shape: "box",
    },
  ])
  const [dailyMessages, setDailyMessages] = useState(87)
  const dailyLimit = 100

  // Dialog states
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [newChatOpen, setNewChatOpen] = useState(false)
  const [chatOptionsOpen, setChatOptionsOpen] = useState(false)
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null)

  const sendMessage = () => {
    if (message.trim() && dailyMessages < dailyLimit) {
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
      setDailyMessages(dailyMessages + 1)
    }
  }

  const chatHistory = [
    { id: 1, title: "3D Model Tutorial", preview: "Learn basic 3D modeling...", time: "2h ago", shape: "torus" },
    { id: 2, title: "Animation Basics", preview: "Understanding keyframes...", time: "1d ago", shape: "sphere" },
    { id: 3, title: "Lighting Setup", preview: "Professional lighting...", time: "2d ago", shape: "box" },
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
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gradient-teal">ChatFlow</h1>
                  <span className="text-xs text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full backdrop-blur-sm">
                    Free Plan
                  </span>
                </div>
              </div>

              {/* Daily Limit Progress */}
              {dailyMessages > 80 && (
                <div className="p-4 backdrop-blur-glass rounded-2xl border border-orange-500/20 mb-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-orange-400">Daily Messages</span>
                    <span className="text-sm font-bold text-orange-400">
                      {dailyMessages}/{dailyLimit}
                    </span>
                  </div>
                  <Progress value={(dailyMessages / dailyLimit) * 100} className="h-2 mb-2" />
                  <p className="text-xs text-orange-400">⚠️ Approaching daily limit</p>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex-1 p-6">
              <nav className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left border border-teal-500/30">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-gradient-teal font-medium">Chats</span>
                  <span className="ml-auto text-xs text-teal-400">{dailyMessages}</span>
                </button>

                <button
                  onClick={() => setSearchOpen(true)}
                  className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left hover:border-teal-500/30 transition-all"
                >
                  <Search className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-300">Search</span>
                  <span className="ml-auto text-xs text-gray-500">⌘F</span>
                </button>

                <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left opacity-50 cursor-not-allowed">
                  <Lock className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-400">Premium Features</span>
                </button>

                <button
                  onClick={() => setSettingsOpen(true)}
                  className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left hover:border-teal-500/30 transition-all"
                >
                  <Settings className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-300">Settings</span>
                </button>
              </nav>

              {/* Chat List */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-400">Recent Chats</h3>
                  <button
                    onClick={() => setNewChatOpen(true)}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="p-4 card-glass rounded-2xl border border-teal-500/30">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-white">Current Chat</span>
                      <span className="ml-auto text-xs text-teal-400">{dailyMessages}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upgrade Section */}
            <div className="p-6 border-t border-teal-500/20">
              <div className="backdrop-blur-glass rounded-2xl p-6 text-center border border-teal-500/20">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-teal-500/25">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Upgrade to Pro</h3>
                <p className="text-sm text-gray-400 mb-4">Unlock unlimited messages and 3D features</p>
                <GradientButton variant="primary" className="w-full">
                  <ArrowUp className="mr-2 h-4 w-4" />
                  Upgrade Now
                </GradientButton>
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <div className="p-8 border-b border-teal-500/20 backdrop-blur-glass">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-3 text-gradient-white-teal">Unlock the power of AI</h1>
                <p className="text-xl text-gray-300">Chat with the smartest AI - Experience the power of AI with us</p>
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
                          {!msg.isOwn && <Chat3DPreview shape={msg.shape} />}
                          <div
                            className={`px-6 py-4 rounded-2xl backdrop-blur-glass border ${
                              msg.isOwn
                                ? "bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border-teal-500/30 text-white ml-4"
                                : "border-gray-700/50 text-white mr-4"
                            }`}
                          >
                            <p className="text-sm leading-relaxed">{msg.content}</p>
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
                {dailyMessages >= dailyLimit ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-glass border border-orange-500/30">
                      <Lock className="w-10 h-10 text-orange-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Daily message limit reached!</h3>
                    <p className="text-gray-400 text-lg mb-8">Upgrade to Pro for unlimited messaging and 3D features</p>
                    <GradientButton variant="primary" size="lg">
                      <Star className="mr-2 h-5 w-5" />
                      Upgrade to Pro
                    </GradientButton>
                  </div>
                ) : (
                  <div className="flex items-center space-x-4">
                    <button className="p-4 card-glass rounded-2xl opacity-50 cursor-not-allowed border border-gray-700/50">
                      <Paperclip className="h-5 w-5 text-gray-400" />
                    </button>
                    <div className="flex-1 relative">
                      <Input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Write a message..."
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
                    <button
                      onClick={sendMessage}
                      disabled={!message.trim()}
                      className="p-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-teal-500/25"
                    >
                      <Send className="h-5 w-5 text-white" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Chat History */}
          <div className="w-80 backdrop-blur-glass border-l border-teal-500/20 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-white text-lg">Chat History</h3>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-teal-400 bg-teal-500/20 px-2 py-1 rounded-full">24/100</span>
                <button
                  onClick={() => {
                    setSelectedChatId(1)
                    setChatOptionsOpen(true)
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {chatHistory.map((chat) => (
                <div
                  key={chat.id}
                  className="card-glass p-4 rounded-2xl hover:border-teal-500/30 transition-all cursor-pointer"
                  onClick={() => {
                    setSelectedChatId(chat.id)
                    setChatOptionsOpen(true)
                  }}
                >
                  <div className="flex items-start space-x-3">
                    <Chat3DPreview shape={chat.shape} />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-white text-sm mb-1 truncate">{chat.title}</h4>
                      <p className="text-xs text-gray-400 mb-2 line-clamp-2">{chat.preview}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{chat.time}</span>
                        <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <span className="text-xs text-white font-medium">AI</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* New Chat Button */}
            <GradientButton variant="primary" className="w-full mt-6" onClick={() => setNewChatOpen(true)}>
              <Plus className="w-5 h-5 mr-2" />
              New Chat
            </GradientButton>
          </div>
        </div>
      </div>

      {/* Dialogs */}
      <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      <NewChatDialog open={newChatOpen} onOpenChange={setNewChatOpen} />
      <ChatOptionsDialog open={chatOptionsOpen} onOpenChange={setChatOptionsOpen} chatId={selectedChatId || 0} />
    </div>
  )
}
