"use client"

import { useState, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import {
  Send,
  Paperclip,
  Search,
  Settings,
  Plus,
  Smile,
  Mic,
  MessageCircle,
  Zap,
  Brain,
  Sparkles,
  FileText,
  ImageIcon,
  Video,
  Headphones,
  Globe,
  Crown,
  User,
  Filter,
  Clock,
  Star,
  Bookmark,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { GradientButton } from "@/components/ui/gradient-button"
import { Navigation } from "@/components/ui/navigation"
import { EnhancedScene } from "@/components/ui/3d/enhanced-scene"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

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

// Settings Dialog Component
function SettingsDialog() {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(true)
  const [soundEnabled, setSoundEnabled] = useState(true)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left hover:border-teal-500/30 transition-all">
          <Settings className="w-5 h-5 text-gray-400" />
          <span className="text-sm text-gray-300">Settings</span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-gray-900/95 border-teal-500/30 backdrop-blur-glass text-white">
        <DialogHeader>
          <DialogTitle className="text-gradient-teal text-xl">Pro Settings</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-gray-800/50">
            <TabsTrigger value="account" className="text-xs">
              Account
            </TabsTrigger>
            <TabsTrigger value="notifications" className="text-xs">
              Notifications
            </TabsTrigger>
            <TabsTrigger value="privacy" className="text-xs">
              Privacy
            </TabsTrigger>
            <TabsTrigger value="appearance" className="text-xs">
              Appearance
            </TabsTrigger>
            <TabsTrigger value="advanced" className="text-xs">
              Advanced
            </TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Pro User</h3>
                  <p className="text-sm text-gray-400">pro@chatflow.com</p>
                  <Badge className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white mt-1">
                    <Crown className="w-3 h-3 mr-1" />
                    Pro Plan
                  </Badge>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-300">Display Name</label>
                  <Input className="mt-1 bg-gray-800/50 border-gray-700/50 text-white" defaultValue="Pro User" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <Input
                    className="mt-1 bg-gray-800/50 border-gray-700/50 text-white"
                    defaultValue="pro@chatflow.com"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-white">Push Notifications</h4>
                  <p className="text-sm text-gray-400">Receive notifications for new messages</p>
                </div>
                <Switch checked={notifications} onCheckedChange={setNotifications} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-white">AI Suggestions</h4>
                  <p className="text-sm text-gray-400">Get AI-powered conversation suggestions</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-white">Email Digest</h4>
                  <p className="text-sm text-gray-400">Daily summary of your conversations</p>
                </div>
                <Switch />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-white">Data Encryption</h4>
                  <p className="text-sm text-gray-400">End-to-end encryption for all messages</p>
                </div>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Enabled</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-white">Message History</h4>
                  <p className="text-sm text-gray-400">Store conversation history</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-white">Analytics</h4>
                  <p className="text-sm text-gray-400">Help improve AI responses</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="appearance" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-white">Dark Mode</h4>
                  <p className="text-sm text-gray-400">Use dark theme</p>
                </div>
                <Switch checked={darkMode} onCheckedChange={setDarkMode} />
              </div>
              <div>
                <h4 className="font-medium text-white mb-3">Theme Color</h4>
                <div className="grid grid-cols-4 gap-3">
                  <button className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl border-2 border-teal-500"></button>
                  <button className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl border-2 border-transparent hover:border-blue-500"></button>
                  <button className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl border-2 border-transparent hover:border-pink-500"></button>
                  <button className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl border-2 border-transparent hover:border-green-500"></button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-white">Sound Effects</h4>
                  <p className="text-sm text-gray-400">Play sounds for notifications</p>
                </div>
                <Switch checked={soundEnabled} onCheckedChange={setSoundEnabled} />
              </div>
              <div>
                <h4 className="font-medium text-white mb-3">AI Model</h4>
                <select className="w-full p-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white">
                  <option>GPT-4 (Recommended)</option>
                  <option>GPT-3.5 Turbo</option>
                  <option>Claude 3</option>
                </select>
              </div>
              <div>
                <h4 className="font-medium text-white mb-3">Language</h4>
                <select className="w-full p-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white">
                  <option>English</option>
                  <option>Tiếng Việt</option>
                  <option>中文</option>
                  <option>日本語</option>
                </select>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

// Search Dialog Component
function SearchDialog() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults] = useState([
    {
      id: 1,
      title: "3D Animation Tutorial",
      content: "How to create complex keyframe animations...",
      time: "2 hours ago",
      type: "conversation",
    },
    {
      id: 2,
      title: "React Components",
      content: "Building reusable UI components...",
      time: "1 day ago",
      type: "code",
    },
    {
      id: 3,
      title: "AI Model Training",
      content: "Fine-tuning language models...",
      time: "3 days ago",
      type: "ai",
    },
  ])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left hover:border-teal-500/30 transition-all">
          <Search className="w-5 h-5 text-teal-400" />
          <span className="text-sm text-white">AI Search</span>
          <Badge className="ml-auto bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs">NEW</Badge>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-gray-900/95 border-teal-500/30 backdrop-blur-glass text-white">
        <DialogHeader>
          <DialogTitle className="text-gradient-teal text-xl">AI-Powered Search</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search conversations, files, or ask AI..."
              className="pl-12 py-3 bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-teal-500"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-2">
              <button className="p-1 hover:bg-gray-700/50 rounded">
                <Filter className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>

          <div className="flex space-x-2">
            <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/30 cursor-pointer">All</Badge>
            <Badge className="bg-gray-700/50 text-gray-400 border-gray-600/50 cursor-pointer hover:bg-teal-500/20 hover:text-teal-400">
              Conversations
            </Badge>
            <Badge className="bg-gray-700/50 text-gray-400 border-gray-600/50 cursor-pointer hover:bg-teal-500/20 hover:text-teal-400">
              Files
            </Badge>
            <Badge className="bg-gray-700/50 text-gray-400 border-gray-600/50 cursor-pointer hover:bg-teal-500/20 hover:text-teal-400">
              Code
            </Badge>
          </div>

          <div className="space-y-3 max-h-96 overflow-y-auto">
            {searchResults.map((result) => (
              <div
                key={result.id}
                className="p-4 card-glass rounded-xl hover:border-teal-500/30 transition-all cursor-pointer"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    {result.type === "conversation" && <MessageCircle className="w-5 h-5 text-white" />}
                    {result.type === "code" && <FileText className="w-5 h-5 text-white" />}
                    {result.type === "ai" && <Brain className="w-5 h-5 text-white" />}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-white mb-1">{result.title}</h4>
                    <p className="text-sm text-gray-400 mb-2">{result.content}</p>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-3 h-3 text-gray-500" />
                      <span className="text-xs text-gray-500">{result.time}</span>
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">{result.type}</Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// New Chat Dialog Component
function NewChatDialog() {
  const chatTemplates = [
    {
      id: 1,
      title: "3D Modeling Assistant",
      description: "Get help with 3D modeling, animation, and rendering",
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Code Review",
      description: "Review and improve your code with AI assistance",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "Creative Writing",
      description: "Brainstorm ideas and write creative content",
      icon: "✍️",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      title: "Data Analysis",
      description: "Analyze data and create visualizations",
      icon: "📊",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-teal-400 hover:text-teal-300 transition-colors">
          <Plus className="w-4 h-4" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-gray-900/95 border-teal-500/30 backdrop-blur-glass text-white">
        <DialogHeader>
          <DialogTitle className="text-gradient-teal text-xl">Start New Pro Chat</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {chatTemplates.map((template) => (
              <button
                key={template.id}
                className="p-6 card-glass rounded-2xl hover:border-teal-500/30 transition-all text-left group"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${template.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <span className="text-2xl">{template.icon}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{template.title}</h3>
                <p className="text-sm text-gray-400">{template.description}</p>
              </button>
            ))}
          </div>

          <div className="border-t border-gray-700/50 pt-4">
            <h3 className="font-medium text-white mb-3">Quick Actions</h3>
            <div className="flex space-x-3">
              <Button className="bg-teal-500/20 text-teal-400 border-teal-500/30 hover:bg-teal-500/30">
                <Sparkles className="w-4 h-4 mr-2" />
                AI Brainstorm
              </Button>
              <Button className="bg-blue-500/20 text-blue-400 border-blue-500/30 hover:bg-blue-500/30">
                <FileText className="w-4 h-4 mr-2" />
                Document Review
              </Button>
              <Button className="bg-purple-500/20 text-purple-400 border-purple-500/30 hover:bg-purple-500/30">
                <Brain className="w-4 h-4 mr-2" />
                Custom AI
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function ProChatPage() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "AI Assistant",
      content:
        "Welcome to ChatFlow Pro! I have access to advanced AI models and can help with complex 3D modeling, coding, and creative tasks. What would you like to work on?",
      time: "10:30 AM",
      isOwn: false,
      shape: "torus",
      suggestions: ["3D Animation", "Code Review", "Creative Writing", "Data Analysis"],
    },
    {
      id: 2,
      sender: "You",
      content: "I need help creating a complex 3D animation sequence",
      time: "10:32 AM",
      isOwn: true,
      shape: "sphere",
    },
    {
      id: 3,
      sender: "AI Assistant",
      content:
        "Perfect! I can help you create professional 3D animations. Let me break this down into steps: keyframe planning, motion curves, lighting setup, and rendering optimization. Which aspect would you like to start with?",
      time: "10:33 AM",
      isOwn: false,
      shape: "box",
      attachments: ["animation_guide.pdf", "keyframe_template.blend"],
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

  const chatHistory = [
    {
      id: 1,
      title: "Advanced 3D Animation",
      preview: "Complex keyframe sequences...",
      time: "2h ago",
      shape: "torus",
      type: "3D",
    },
    {
      id: 2,
      title: "React Component Design",
      preview: "Building reusable components...",
      time: "1d ago",
      shape: "sphere",
      type: "Code",
    },
    {
      id: 3,
      title: "Creative Story Writing",
      preview: "Sci-fi narrative development...",
      time: "2d ago",
      shape: "box",
      type: "Creative",
    },
    {
      id: 4,
      title: "Data Visualization",
      preview: "Interactive charts and graphs...",
      time: "3d ago",
      shape: "torus",
      type: "Data",
    },
  ]

  const aiSuggestions = [
    "Create a 3D product showcase",
    "Build a React dashboard",
    "Write a technical blog post",
    "Analyze market trends",
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
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gradient-teal">ChatFlow Pro</h1>
                  <Badge className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-0">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Pro Plan
                  </Badge>
                </div>
              </div>

              {/* Pro Features Status */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 backdrop-blur-glass rounded-xl border border-teal-500/20 text-center">
                  <Zap className="w-5 h-5 text-teal-400 mx-auto mb-1" />
                  <span className="text-xs text-teal-400 font-medium">Unlimited</span>
                </div>
                <div className="p-3 backdrop-blur-glass rounded-xl border border-teal-500/20 text-center">
                  <Brain className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                  <span className="text-xs text-cyan-400 font-medium">GPT-4</span>
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
                  <span className="text-sm text-gradient-teal font-medium">Chats</span>
                  <Badge className="ml-auto bg-teal-500/20 text-teal-400 border-teal-500/30">∞</Badge>
                </button>

                <SearchDialog />

                <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left hover:border-teal-500/30 transition-all">
                  <Brain className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm text-white">AI Assistant</span>
                  <Sparkles className="w-4 h-4 text-cyan-400 ml-auto" />
                </button>

                <SettingsDialog />
              </nav>

              {/* AI Suggestions */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-400">AI Suggestions</h3>
                  <Sparkles className="w-4 h-4 text-teal-400" />
                </div>

                <div className="space-y-2">
                  {aiSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      className="w-full p-3 text-left text-sm text-gray-300 hover:text-white bg-gray-800/30 hover:bg-teal-500/10 rounded-xl transition-all border border-transparent hover:border-teal-500/30"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat List */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-400">Recent Chats</h3>
                  <NewChatDialog />
                </div>

                <div className="space-y-3">
                  <div className="p-4 card-glass rounded-2xl border border-teal-500/30">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-white">Current Chat</span>
                      <Badge className="ml-auto bg-teal-500/20 text-teal-400 border-teal-500/30">Active</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pro Features */}
            <div className="p-6 border-t border-teal-500/20">
              <div className="backdrop-blur-glass rounded-2xl p-6 text-center border border-teal-500/20">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-teal-500/25">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">Pro Features Active</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/30">Unlimited</Badge>
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">GPT-4</Badge>
                  <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">3D Tools</Badge>
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
                  <h1 className="text-4xl font-bold text-gradient-white-teal">Pro AI Assistant</h1>
                  <Badge className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
                    <Sparkles className="w-4 h-4 mr-1" />
                    Enhanced
                  </Badge>
                </div>
                <p className="text-xl text-gray-300">
                  Advanced AI with unlimited access to GPT-4, 3D tools, and premium features
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
                            <p className="text-sm leading-relaxed mb-3">{msg.content}</p>

                            {/* AI Suggestions */}
                            {msg.suggestions && (
                              <div className="flex flex-wrap gap-2 mt-4">
                                {msg.suggestions.map((suggestion, index) => (
                                  <button
                                    key={index}
                                    className="px-3 py-1 text-xs bg-teal-500/20 text-teal-400 rounded-full border border-teal-500/30 hover:bg-teal-500/30 transition-all"
                                  >
                                    {suggestion}
                                  </button>
                                ))}
                              </div>
                            )}

                            {/* Attachments */}
                            {msg.attachments && (
                              <div className="flex flex-wrap gap-2 mt-4">
                                {msg.attachments.map((attachment, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center space-x-2 px-3 py-2 bg-gray-800/50 rounded-xl border border-gray-700/50"
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
                  {/* Enhanced Tools */}
                  <div className="flex space-x-2">
                    <button className="p-3 card-glass rounded-2xl hover:border-teal-500/30 transition-all border border-gray-700/50">
                      <Paperclip className="h-5 w-5 text-teal-400" />
                    </button>
                    <button className="p-3 card-glass rounded-2xl hover:border-teal-500/30 transition-all border border-gray-700/50">
                      <ImageIcon className="h-5 w-5 text-cyan-400" />
                    </button>
                    <button className="p-3 card-glass rounded-2xl hover:border-teal-500/30 transition-all border border-gray-700/50">
                      <Video className="h-5 w-5 text-purple-400" />
                    </button>
                  </div>

                  <div className="flex-1 relative">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ask anything... I have access to advanced AI models and tools"
                      className="pr-24 py-4 bg-gray-800/50 border-gray-700/50 rounded-2xl text-white placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500/20 backdrop-blur-sm"
                      onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-2">
                      <button className="p-2 hover:bg-gray-700/50 rounded-xl transition-colors">
                        <Smile className="h-4 w-4 text-gray-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-700/50 rounded-xl transition-colors">
                        <Headphones className="h-4 w-4 text-teal-400" />
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

          {/* Right Sidebar - Enhanced Features */}
          <div className="w-80 backdrop-blur-glass border-l border-teal-500/20 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-white text-lg">Pro Features</h3>
              <Badge className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
                <Crown className="w-3 h-3 mr-1" />
                Pro
              </Badge>
            </div>

            {/* Chat History */}
            <div className="space-y-4 mb-8">
              {chatHistory.map((chat) => (
                <div
                  key={chat.id}
                  className="card-glass p-4 rounded-2xl hover:border-teal-500/30 transition-all cursor-pointer"
                >
                  <div className="flex items-start space-x-3">
                    <Chat3DPreview shape={chat.shape} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium text-white text-sm truncate">{chat.title}</h4>
                        <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/30 text-xs">{chat.type}</Badge>
                      </div>
                      <p className="text-xs text-gray-400 mb-2 line-clamp-2">{chat.preview}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{chat.time}</span>
                        <div className="flex space-x-1">
                          <button className="p-1 hover:bg-gray-700/50 rounded">
                            <Star className="w-3 h-3 text-gray-400 hover:text-yellow-400" />
                          </button>
                          <button className="p-1 hover:bg-gray-700/50 rounded">
                            <Bookmark className="w-3 h-3 text-gray-400 hover:text-blue-400" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pro Tools */}
            <div className="space-y-4">
              <h4 className="font-medium text-gray-400 text-sm">Pro Tools</h4>
              <div className="grid grid-cols-2 gap-3">
                <button className="p-3 card-glass rounded-xl hover:border-teal-500/30 transition-all text-center">
                  <Brain className="w-6 h-6 text-teal-400 mx-auto mb-2" />
                  <span className="text-xs text-white">AI Analysis</span>
                </button>
                <button className="p-3 card-glass rounded-xl hover:border-teal-500/30 transition-all text-center">
                  <Zap className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                  <span className="text-xs text-white">Quick Actions</span>
                </button>
                <button className="p-3 card-glass rounded-xl hover:border-teal-500/30 transition-all text-center">
                  <Globe className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <span className="text-xs text-white">Web Search</span>
                </button>
                <button className="p-3 card-glass rounded-xl hover:border-teal-500/30 transition-all text-center">
                  <FileText className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <span className="text-xs text-white">Documents</span>
                </button>
              </div>
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
