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
  Bell,
  Shield,
  Palette,
  Volume2,
  Languages,
  MoreHorizontal,
  Copy,
  Edit,
  Trash2,
  Pin,
  Archive,
  Download,
  Share,
  Upload,
  Camera,
  Folder,
  X,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { GradientButton } from "@/components/ui/gradient-button"
import { Navigation } from "@/components/ui/navigation"
import { EnhancedScene } from "@/components/ui/3d/enhanced-scene"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

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

// File Upload Dialog
function FileUploadDialog() {
  const { toast } = useToast()
  const [dragActive, setDragActive] = useState(false)

  const handleFileUpload = () => {
    toast({
      title: "File uploaded successfully",
      description: "Your file has been attached to the conversation",
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-3 card-glass rounded-2xl hover:border-teal-500/30 transition-all border border-gray-700/50">
          <Paperclip className="h-5 w-5 text-teal-400" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-gray-900/95 border-teal-500/30 backdrop-blur-glass text-white">
        <DialogHeader>
          <DialogTitle className="text-gradient-teal text-xl flex items-center">
            <Paperclip className="w-5 h-5 mr-2" />
            Upload Files
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div
            className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all ${
              dragActive ? "border-teal-500 bg-teal-500/10" : "border-gray-600 hover:border-teal-500/50"
            }`}
            onDragEnter={() => setDragActive(true)}
            onDragLeave={() => setDragActive(false)}
            onDrop={() => setDragActive(false)}
          >
            <Upload className="w-12 h-12 text-teal-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">Drop files here or click to browse</h3>
            <p className="text-gray-400 mb-4">Support for documents, images, videos, and 3D models</p>
            <Button className="bg-teal-500/20 text-teal-400 border-teal-500/30 hover:bg-teal-500/30">
              <Folder className="w-4 h-4 mr-2" />
              Browse Files
            </Button>
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div className="p-4 bg-gray-800/50 rounded-xl text-center">
              <FileText className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <span className="text-xs text-white">Documents</span>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-xl text-center">
              <ImageIcon className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <span className="text-xs text-white">Images</span>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-xl text-center">
              <Video className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <span className="text-xs text-white">Videos</span>
            </div>
            <div className="p-4 bg-gray-800/50 rounded-xl text-center">
              <Sparkles className="w-8 h-8 text-teal-400 mx-auto mb-2" />
              <span className="text-xs text-white">3D Models</span>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleFileUpload} className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
            <Upload className="w-4 h-4 mr-2" />
            Upload Files
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// Image Upload Dialog
function ImageUploadDialog() {
  const { toast } = useToast()

  const handleImageUpload = () => {
    toast({
      title: "Image uploaded successfully",
      description: "Your image has been added to the conversation",
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-3 card-glass rounded-2xl hover:border-teal-500/30 transition-all border border-gray-700/50">
          <ImageIcon className="h-5 w-5 text-cyan-400" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-gray-900/95 border-teal-500/30 backdrop-blur-glass text-white">
        <DialogHeader>
          <DialogTitle className="text-gradient-teal text-xl flex items-center">
            <ImageIcon className="w-5 h-5 mr-2" />
            Upload Images
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="border-2 border-dashed border-gray-600 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-all">
            <Camera className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">Upload Images</h3>
            <p className="text-gray-400 mb-4">JPG, PNG, GIF, WebP up to 10MB</p>
            <div className="flex justify-center space-x-3">
              <Button className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/30">
                <Camera className="w-4 h-4 mr-2" />
                Take Photo
              </Button>
              <Button className="bg-blue-500/20 text-blue-400 border-blue-500/30 hover:bg-blue-500/30">
                <Folder className="w-4 h-4 mr-2" />
                Choose File
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="aspect-square bg-gray-800/50 rounded-xl flex items-center justify-center">
              <ImageIcon className="w-8 h-8 text-gray-400" />
            </div>
            <div className="aspect-square bg-gray-800/50 rounded-xl flex items-center justify-center">
              <ImageIcon className="w-8 h-8 text-gray-400" />
            </div>
            <div className="aspect-square bg-gray-800/50 rounded-xl flex items-center justify-center">
              <ImageIcon className="w-8 h-8 text-gray-400" />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleImageUpload} className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
            <ImageIcon className="w-4 h-4 mr-2" />
            Upload Images
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// Video Upload Dialog
function VideoUploadDialog() {
  const { toast } = useToast()

  const handleVideoUpload = () => {
    toast({
      title: "Video uploaded successfully",
      description: "Your video has been added to the conversation",
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-3 card-glass rounded-2xl hover:border-teal-500/30 transition-all border border-gray-700/50">
          <Video className="h-5 w-5 text-purple-400" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-gray-900/95 border-teal-500/30 backdrop-blur-glass text-white">
        <DialogHeader>
          <DialogTitle className="text-gradient-teal text-xl flex items-center">
            <Video className="w-5 h-5 mr-2" />
            Upload Videos
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="border-2 border-dashed border-gray-600 rounded-2xl p-8 text-center hover:border-purple-500/50 transition-all">
            <Video className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">Upload Videos</h3>
            <p className="text-gray-400 mb-4">MP4, WebM, MOV up to 100MB</p>
            <Button className="bg-purple-500/20 text-purple-400 border-purple-500/30 hover:bg-purple-500/30">
              <Video className="w-4 h-4 mr-2" />
              Choose Video
            </Button>
          </div>

          <div className="p-4 bg-gray-800/50 rounded-xl">
            <h4 className="font-medium text-white mb-3">Video Settings</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Auto-generate subtitles</span>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Extract audio</span>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Compress video</span>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleVideoUpload} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <Video className="w-4 h-4 mr-2" />
            Upload Video
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// Emoji Picker Dialog
function EmojiPickerDialog() {
  const { toast } = useToast()
  const emojis = ["😀", "😂", "🥰", "😎", "🤔", "👍", "❤️", "🔥", "✨", "🎉", "🚀", "💡", "🎨", "🎵", "⚡", "🌟"]

  const handleEmojiSelect = (emoji: string) => {
    toast({
      title: "Emoji added",
      description: `${emoji} has been added to your message`,
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-2 hover:bg-gray-700/50 rounded-xl transition-colors">
          <Smile className="h-4 w-4 text-gray-400" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md bg-gray-900/95 border-teal-500/30 backdrop-blur-glass text-white">
        <DialogHeader>
          <DialogTitle className="text-gradient-teal text-lg flex items-center">
            <Smile className="w-5 h-5 mr-2" />
            Emoji Picker
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid grid-cols-8 gap-2">
            {emojis.map((emoji, index) => (
              <button
                key={index}
                onClick={() => handleEmojiSelect(emoji)}
                className="p-2 text-2xl hover:bg-gray-800/50 rounded-xl transition-all"
              >
                {emoji}
              </button>
            ))}
          </div>
          <div className="border-t border-gray-700/50 pt-4">
            <Input
              placeholder="Search emojis..."
              className="bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Audio Settings Dialog
function AudioSettingsDialog() {
  const { toast } = useToast()
  const [audioEnabled, setAudioEnabled] = useState(true)

  const handleAudioSettings = () => {
    toast({
      title: "Audio settings updated",
      description: "Your audio preferences have been saved",
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-2 hover:bg-gray-700/50 rounded-xl transition-colors">
          <Headphones className="h-4 w-4 text-teal-400" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md bg-gray-900/95 border-teal-500/30 backdrop-blur-glass text-white">
        <DialogHeader>
          <DialogTitle className="text-gradient-teal text-lg flex items-center">
            <Headphones className="w-5 h-5 mr-2" />
            Audio Settings
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl">
            <div>
              <h4 className="font-medium text-white">Audio Output</h4>
              <p className="text-sm text-gray-400">Enable audio responses</p>
            </div>
            <Switch checked={audioEnabled} onCheckedChange={setAudioEnabled} />
          </div>

          <div className="space-y-3">
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Voice</label>
              <select className="w-full p-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white">
                <option>Neural Voice (Default)</option>
                <option>Classic Voice</option>
                <option>Professional Voice</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Speed</label>
              <input type="range" className="w-full" min="0.5" max="2" step="0.1" defaultValue="1" />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Volume</label>
              <input type="range" className="w-full" min="0" max="100" step="5" defaultValue="80" />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleAudioSettings} className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
            <Headphones className="w-4 h-4 mr-2" />
            Save Settings
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// Voice Input Dialog
function VoiceInputDialog() {
  const { toast } = useToast()
  const [isRecording, setIsRecording] = useState(false)

  const handleVoiceInput = () => {
    setIsRecording(!isRecording)
    toast({
      title: isRecording ? "Recording stopped" : "Recording started",
      description: isRecording ? "Voice message saved" : "Speak now...",
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-2 hover:bg-gray-700/50 rounded-xl transition-colors">
          <Mic className="h-4 w-4 text-cyan-400" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md bg-gray-900/95 border-teal-500/30 backdrop-blur-glass text-white">
        <DialogHeader>
          <DialogTitle className="text-gradient-teal text-lg flex items-center">
            <Mic className="w-5 h-5 mr-2" />
            Voice Input
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6 text-center">
          <div className="relative">
            <div
              className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center transition-all ${
                isRecording
                  ? "bg-red-500/20 border-2 border-red-500 animate-pulse"
                  : "bg-cyan-500/20 border-2 border-cyan-500"
              }`}
            >
              <Mic className={`w-12 h-12 ${isRecording ? "text-red-400" : "text-cyan-400"}`} />
            </div>
            {isRecording && (
              <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full border-2 border-red-500 animate-ping"></div>
            )}
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-2">{isRecording ? "Recording..." : "Ready to record"}</h3>
            <p className="text-gray-400">
              {isRecording ? "Speak clearly into your microphone" : "Click the button below to start recording"}
            </p>
          </div>

          <div className="space-y-3">
            <Button
              onClick={handleVoiceInput}
              className={`w-full ${
                isRecording
                  ? "bg-red-500/20 text-red-400 border-red-500/30 hover:bg-red-500/30"
                  : "bg-cyan-500/20 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/30"
              }`}
            >
              {isRecording ? (
                <>
                  <X className="w-4 h-4 mr-2" />
                  Stop Recording
                </>
              ) : (
                <>
                  <Mic className="w-4 h-4 mr-2" />
                  Start Recording
                </>
              )}
            </Button>

            <div className="text-xs text-gray-500">
              <p>Supported languages: English, Vietnamese, Chinese, Japanese</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// AI Assistant Confirmation Dialog
function AIAssistantDialog() {
  const { toast } = useToast()

  const handleConfirm = () => {
    toast({
      title: "AI Assistant activated",
      description: "Advanced AI features are now available",
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left hover:border-teal-500/30 transition-all">
          <Brain className="w-5 h-5 text-cyan-400" />
          <span className="text-sm text-white">AI Assistant</span>
          <Sparkles className="w-4 h-4 text-cyan-400 ml-auto" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md bg-gray-900/95 border-teal-500/30 backdrop-blur-glass text-white">
        <DialogHeader>
          <DialogTitle className="text-gradient-teal text-xl flex items-center">
            <Brain className="w-6 h-6 mr-2" />
            Activate AI Assistant
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
            <h4 className="font-medium text-cyan-400 mb-2">Enhanced Features</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Advanced conversation analysis</li>
              <li>• Smart suggestions and completions</li>
              <li>• Context-aware responses</li>
              <li>• Multi-language support</li>
            </ul>
          </div>
          <p className="text-gray-400 text-sm">
            The AI Assistant will analyze your conversations to provide better suggestions and responses.
          </p>
        </div>
        <DialogFooter>
          <Button variant="outline" className="border-gray-600 text-gray-400 hover:bg-gray-800 bg-transparent">
            Cancel
          </Button>
          <Button onClick={handleConfirm} className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
            <Brain className="w-4 h-4 mr-2" />
            Activate
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// Pro Tools Confirmation Dialog
function ProToolsDialog({ tool, icon: Icon, color }: { tool: string; icon: any; color: string }) {
  const { toast } = useToast()

  const handleConfirm = () => {
    toast({
      title: `${tool} activated`,
      description: `Opening ${tool.toLowerCase()} interface...`,
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-3 card-glass rounded-xl hover:border-teal-500/30 transition-all text-center">
          <Icon className={`w-6 h-6 ${color} mx-auto mb-2`} />
          <span className="text-xs text-white">{tool}</span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md bg-gray-900/95 border-teal-500/30 backdrop-blur-glass text-white">
        <DialogHeader>
          <DialogTitle className="text-gradient-teal text-xl flex items-center">
            <Icon className={`w-6 h-6 mr-2 ${color}`} />
            Launch {tool}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="p-4 bg-gray-800/50 rounded-xl">
            <h4 className="font-medium text-white mb-2">What you can do:</h4>
            {tool === "AI Analysis" && (
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Analyze conversation patterns</li>
                <li>• Generate insights and summaries</li>
                <li>• Identify key topics and themes</li>
                <li>• Performance metrics</li>
              </ul>
            )}
            {tool === "Quick Actions" && (
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Automated responses</li>
                <li>• Template generation</li>
                <li>• Bulk operations</li>
                <li>• Workflow shortcuts</li>
              </ul>
            )}
            {tool === "Web Search" && (
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Real-time web search</li>
                <li>• Source verification</li>
                <li>• Content summarization</li>
                <li>• Research assistance</li>
              </ul>
            )}
            {tool === "Documents" && (
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Document analysis</li>
                <li>• Content extraction</li>
                <li>• Format conversion</li>
                <li>• Collaborative editing</li>
              </ul>
            )}
          </div>
          <p className="text-gray-400 text-sm">This will open the {tool.toLowerCase()} interface in a new window.</p>
        </div>
        <DialogFooter>
          <Button variant="outline" className="border-gray-600 text-gray-400 hover:bg-gray-800 bg-transparent">
            Cancel
          </Button>
          <Button onClick={handleConfirm} className={`bg-gradient-to-r from-teal-500 to-cyan-500 text-white`}>
            <Icon className="w-4 h-4 mr-2" />
            Launch
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// New Pro Chat Confirmation Dialog
function NewProChatDialog() {
  const { toast } = useToast()
  const chatTemplates = [
    {
      id: 1,
      title: "3D Modeling Assistant",
      description: "Get help with 3D modeling, animation, and rendering",
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
      features: ["Blender", "Maya", "3ds Max", "Cinema 4D"],
    },
    {
      id: 2,
      title: "Code Review & Development",
      description: "Review and improve your code with AI assistance",
      icon: "💻",
      color: "from-blue-500 to-cyan-500",
      features: ["React", "TypeScript", "Python", "Node.js"],
    },
    {
      id: 3,
      title: "Creative Writing",
      description: "Brainstorm ideas and write creative content",
      icon: "✍️",
      color: "from-green-500 to-emerald-500",
      features: ["Stories", "Scripts", "Articles", "Poetry"],
    },
    {
      id: 4,
      title: "Data Analysis",
      description: "Analyze data and create visualizations",
      icon: "📊",
      color: "from-orange-500 to-red-500",
      features: ["Python", "R", "SQL", "Tableau"],
    },
    {
      id: 5,
      title: "AI Research",
      description: "Explore AI concepts and implementations",
      icon: "🤖",
      color: "from-indigo-500 to-purple-500",
      features: ["ML", "Deep Learning", "NLP", "Computer Vision"],
    },
    {
      id: 6,
      title: "Business Strategy",
      description: "Strategic planning and business analysis",
      icon: "📈",
      color: "from-teal-500 to-blue-500",
      features: ["Planning", "Analysis", "Marketing", "Finance"],
    },
  ]

  const handleCreateChat = (template: any) => {
    toast({
      title: "New Pro Chat created",
      description: `Starting ${template.title} conversation with advanced AI`,
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <GradientButton variant="primary" className="w-full mt-6">
          <Plus className="w-5 h-5 mr-2" />
          New Pro Chat
        </GradientButton>
      </DialogTrigger>
      <DialogContent className="max-w-4xl bg-gray-900/95 border-teal-500/30 backdrop-blur-glass text-white">
        <DialogHeader>
          <DialogTitle className="text-gradient-teal text-2xl flex items-center">
            <Plus className="w-6 h-6 mr-2" />
            Start New Pro Chat
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            {chatTemplates.map((template) => (
              <button
                key={template.id}
                onClick={() => handleCreateChat(template)}
                className="p-6 card-glass rounded-2xl hover:border-teal-500/30 transition-all text-left group"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${template.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <span className="text-3xl">{template.icon}</span>
                </div>
                <h3 className="font-bold text-white mb-2 text-lg">{template.title}</h3>
                <p className="text-sm text-gray-400 mb-3 leading-relaxed">{template.description}</p>
                <div className="flex flex-wrap gap-1">
                  {template.features.map((feature, index) => (
                    <Badge key={index} className="bg-gray-700/50 text-gray-400 border-gray-600/50 text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </button>
            ))}
          </div>

          <div className="border-t border-gray-700/50 pt-6">
            <h3 className="font-bold text-white mb-4 text-lg">Quick Actions</h3>
            <div className="grid grid-cols-4 gap-3">
              <Button
                onClick={() =>
                  handleCreateChat({ title: "AI Brainstorm", description: "Creative brainstorming session" })
                }
                className="bg-teal-500/20 text-teal-400 border-teal-500/30 hover:bg-teal-500/30 p-4 h-auto flex-col"
              >
                <Sparkles className="w-6 h-6 mb-2" />
                <span className="text-sm">AI Brainstorm</span>
              </Button>
              <Button
                onClick={() =>
                  handleCreateChat({ title: "Document Review", description: "Document analysis and review" })
                }
                className="bg-blue-500/20 text-blue-400 border-blue-500/30 hover:bg-blue-500/30 p-4 h-auto flex-col"
              >
                <FileText className="w-6 h-6 mb-2" />
                <span className="text-sm">Document Review</span>
              </Button>
              <Button
                onClick={() => handleCreateChat({ title: "Custom AI", description: "Custom AI assistant" })}
                className="bg-purple-500/20 text-purple-400 border-purple-500/30 hover:bg-purple-500/30 p-4 h-auto flex-col"
              >
                <Brain className="w-6 h-6 mb-2" />
                <span className="text-sm">Custom AI</span>
              </Button>
              <Button
                onClick={() => handleCreateChat({ title: "Web Research", description: "Web research assistant" })}
                className="bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/30 p-4 h-auto flex-col"
              >
                <Globe className="w-6 h-6 mb-2" />
                <span className="text-sm">Web Research</span>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Settings Dialog Component
function SettingsDialog() {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(true)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [aiSuggestions, setAiSuggestions] = useState(true)
  const [dataEncryption, setDataEncryption] = useState(true)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left hover:border-teal-500/30 transition-all">
          <Settings className="w-5 h-5 text-gray-400" />
          <span className="text-sm text-gray-300">Settings</span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl bg-gray-900/95 border-teal-500/30 backdrop-blur-glass text-white">
        <DialogHeader>
          <DialogTitle className="text-gradient-teal text-2xl flex items-center">
            <Crown className="w-6 h-6 mr-2" />
            Pro Settings
          </DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-6 bg-gray-800/50">
            <TabsTrigger value="account" className="text-xs">
              <User className="w-4 h-4 mr-1" />
              Account
            </TabsTrigger>
            <TabsTrigger value="notifications" className="text-xs">
              <Bell className="w-4 h-4 mr-1" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="privacy" className="text-xs">
              <Shield className="w-4 h-4 mr-1" />
              Privacy
            </TabsTrigger>
            <TabsTrigger value="appearance" className="text-xs">
              <Palette className="w-4 h-4 mr-1" />
              Appearance
            </TabsTrigger>
            <TabsTrigger value="audio" className="text-xs">
              <Volume2 className="w-4 h-4 mr-1" />
              Audio
            </TabsTrigger>
            <TabsTrigger value="language" className="text-xs">
              <Languages className="w-4 h-4 mr-1" />
              Language
            </TabsTrigger>
          </TabsList>

          <TabsContent value="account" className="space-y-6 mt-6">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/25">
                <User className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">Pro User</h3>
                <p className="text-gray-400">pro@chatflow.com</p>
                <div className="flex items-center space-x-2 mt-2">
                  <Badge className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
                    <Crown className="w-3 h-3 mr-1" />
                    Pro Plan
                  </Badge>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Active</Badge>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Display Name</label>
                <Input className="bg-gray-800/50 border-gray-700/50 text-white" defaultValue="Pro User" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">Email</label>
                <Input className="bg-gray-800/50 border-gray-700/50 text-white" defaultValue="pro@chatflow.com" />
              </div>
            </div>

            <div className="p-4 bg-teal-500/10 border border-teal-500/30 rounded-xl">
              <h4 className="font-medium text-teal-400 mb-2">Pro Features</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Zap className="w-6 h-6 text-teal-400 mx-auto mb-1" />
                  <span className="text-xs text-white">Unlimited Messages</span>
                </div>
                <div className="text-center">
                  <Brain className="w-6 h-6 text-cyan-400 mx-auto mb-1" />
                  <span className="text-xs text-white">GPT-4 Access</span>
                </div>
                <div className="text-center">
                  <Sparkles className="w-6 h-6 text-purple-400 mx-auto mb-1" />
                  <span className="text-xs text-white">3D Tools</span>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6 mt-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl">
                <div>
                  <h4 className="font-medium text-white">Push Notifications</h4>
                  <p className="text-sm text-gray-400">Receive notifications for new messages</p>
                </div>
                <Switch checked={notifications} onCheckedChange={setNotifications} />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl">
                <div>
                  <h4 className="font-medium text-white">AI Suggestions</h4>
                  <p className="text-sm text-gray-400">Get AI-powered conversation suggestions</p>
                </div>
                <Switch checked={aiSuggestions} onCheckedChange={setAiSuggestions} />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl">
                <div>
                  <h4 className="font-medium text-white">Email Digest</h4>
                  <p className="text-sm text-gray-400">Daily summary of your conversations</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl">
                <div>
                  <h4 className="font-medium text-white">Desktop Notifications</h4>
                  <p className="text-sm text-gray-400">Show notifications on desktop</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="privacy" className="space-y-6 mt-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl">
                <div>
                  <h4 className="font-medium text-white">Data Encryption</h4>
                  <p className="text-sm text-gray-400">End-to-end encryption for all messages</p>
                </div>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Always On</Badge>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl">
                <div>
                  <h4 className="font-medium text-white">Message History</h4>
                  <p className="text-sm text-gray-400">Store conversation history</p>
                </div>
                <Switch checked={dataEncryption} onCheckedChange={setDataEncryption} />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl">
                <div>
                  <h4 className="font-medium text-white">Analytics</h4>
                  <p className="text-sm text-gray-400">Help improve AI responses</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl">
                <div>
                  <h4 className="font-medium text-white">Data Export</h4>
                  <p className="text-sm text-gray-400">Download your conversation data</p>
                </div>
                <Button className="bg-teal-500/20 text-teal-400 border-teal-500/30 hover:bg-teal-500/30">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="appearance" className="space-y-6 mt-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl">
                <div>
                  <h4 className="font-medium text-white">Dark Mode</h4>
                  <p className="text-sm text-gray-400">Use dark theme</p>
                </div>
                <Switch checked={darkMode} onCheckedChange={setDarkMode} />
              </div>

              <div className="p-4 bg-gray-800/30 rounded-xl">
                <h4 className="font-medium text-white mb-4">Theme Color</h4>
                <div className="grid grid-cols-5 gap-3">
                  <button className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl border-2 border-teal-500 shadow-lg shadow-teal-500/25"></button>
                  <button className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl border-2 border-transparent hover:border-blue-500 transition-all"></button>
                  <button className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl border-2 border-transparent hover:border-pink-500 transition-all"></button>
                  <button className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl border-2 border-transparent hover:border-green-500 transition-all"></button>
                  <button className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl border-2 border-transparent hover:border-orange-500 transition-all"></button>
                </div>
              </div>

              <div className="p-4 bg-gray-800/30 rounded-xl">
                <h4 className="font-medium text-white mb-4">3D Background</h4>
                <div className="grid grid-cols-3 gap-3">
                  <button className="p-3 bg-gray-700/50 rounded-xl hover:bg-teal-500/20 transition-all text-center border border-teal-500/30">
                    <span className="text-sm text-white">Geometric</span>
                  </button>
                  <button className="p-3 bg-gray-700/50 rounded-xl hover:bg-teal-500/20 transition-all text-center">
                    <span className="text-sm text-white">Particles</span>
                  </button>
                  <button className="p-3 bg-gray-700/50 rounded-xl hover:bg-teal-500/20 transition-all text-center">
                    <span className="text-sm text-white">Waves</span>
                  </button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="audio" className="space-y-6 mt-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl">
                <div>
                  <h4 className="font-medium text-white">Sound Effects</h4>
                  <p className="text-sm text-gray-400">Play sounds for notifications</p>
                </div>
                <Switch checked={soundEnabled} onCheckedChange={setSoundEnabled} />
              </div>

              <div className="p-4 bg-gray-800/30 rounded-xl">
                <h4 className="font-medium text-white mb-4">Voice Settings</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Voice Input Language</label>
                    <select className="w-full p-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white">
                      <option>English (US)</option>
                      <option>Tiếng Việt</option>
                      <option>中文</option>
                      <option>日本語</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Voice Speed</label>
                    <input type="range" className="w-full" min="0.5" max="2" step="0.1" defaultValue="1" />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="language" className="space-y-6 mt-6">
            <div className="p-4 bg-gray-800/30 rounded-xl">
              <h4 className="font-medium text-white mb-4">Interface Language</h4>
              <div className="grid grid-cols-2 gap-3">
                <button className="p-4 bg-teal-500/20 border border-teal-500/30 rounded-xl text-left">
                  <div className="font-medium text-white">English</div>
                  <div className="text-sm text-gray-400">Default</div>
                </button>
                <button className="p-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-left hover:bg-teal-500/10 transition-all">
                  <div className="font-medium text-white">Tiếng Việt</div>
                  <div className="text-sm text-gray-400">Vietnamese</div>
                </button>
                <button className="p-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-left hover:bg-teal-500/10 transition-all">
                  <div className="font-medium text-white">中文</div>
                  <div className="text-sm text-gray-400">Chinese</div>
                </button>
                <button className="p-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-left hover:bg-teal-500/10 transition-all">
                  <div className="font-medium text-white">日本語</div>
                  <div className="text-sm text-gray-400">Japanese</div>
                </button>
              </div>
            </div>

            <div className="p-4 bg-gray-800/30 rounded-xl">
              <h4 className="font-medium text-white mb-4">AI Model Language</h4>
              <select className="w-full p-3 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white">
                <option>GPT-4 (Multilingual)</option>
                <option>GPT-4 (English Optimized)</option>
                <option>Claude 3 (Multilingual)</option>
              </select>
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
      content: "How to create complex keyframe animations with advanced timing curves...",
      time: "2 hours ago",
      type: "conversation",
      tags: ["3D", "Animation", "Tutorial"],
    },
    {
      id: 2,
      title: "React Components",
      content: "Building reusable UI components with TypeScript and modern patterns...",
      time: "1 day ago",
      type: "code",
      tags: ["React", "TypeScript", "Components"],
    },
    {
      id: 3,
      title: "AI Model Training",
      content: "Fine-tuning language models for specific use cases and domains...",
      time: "3 days ago",
      type: "ai",
      tags: ["AI", "Machine Learning", "Training"],
    },
    {
      id: 4,
      title: "Data Visualization",
      content: "Creating interactive charts and graphs with D3.js and React...",
      time: "1 week ago",
      type: "data",
      tags: ["Data", "Visualization", "D3.js"],
    },
  ])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full flex items-center space-x-3 p-4 card-glass rounded-2xl text-left hover:border-teal-500/30 transition-all">
          <Search className="w-5 h-5 text-teal-400" />
          <span className="text-sm text-white">AI Search</span>
          <Badge className="ml-auto bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs">PRO</Badge>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl bg-gray-900/95 border-teal-500/30 backdrop-blur-glass text-white">
        <DialogHeader>
          <DialogTitle className="text-gradient-teal text-2xl flex items-center">
            <Search className="w-6 h-6 mr-2" />
            AI-Powered Search
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search conversations, files, or ask AI anything..."
              className="pl-12 pr-16 py-4 bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-teal-500 text-lg"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-2">
              <button className="p-2 hover:bg-gray-700/50 rounded-xl transition-colors">
                <Filter className="w-4 h-4 text-gray-400" />
              </button>
              <button className="p-2 hover:bg-gray-700/50 rounded-xl transition-colors">
                <Sparkles className="w-4 h-4 text-teal-400" />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/30 cursor-pointer px-3 py-1">All</Badge>
            <Badge className="bg-gray-700/50 text-gray-400 border-gray-600/50 cursor-pointer hover:bg-teal-500/20 hover:text-teal-400 px-3 py-1">
              Conversations
            </Badge>
            <Badge className="bg-gray-700/50 text-gray-400 border-gray-600/50 cursor-pointer hover:bg-teal-500/20 hover:text-teal-400 px-3 py-1">
              Files
            </Badge>
            <Badge className="bg-gray-700/50 text-gray-400 border-gray-600/50 cursor-pointer hover:bg-teal-500/20 hover:text-teal-400 px-3 py-1">
              Code
            </Badge>
            <Badge className="bg-gray-700/50 text-gray-400 border-gray-600/50 cursor-pointer hover:bg-teal-500/20 hover:text-teal-400 px-3 py-1">
              3D Models
            </Badge>
          </div>

          <div className="space-y-4 max-h-96 overflow-y-auto">
            {searchResults.map((result) => (
              <div
                key={result.id}
                className="p-6 card-glass rounded-2xl hover:border-teal-500/30 transition-all cursor-pointer group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/25">
                    {result.type === "conversation" && <MessageCircle className="w-6 h-6 text-white" />}
                    {result.type === "code" && <FileText className="w-6 h-6 text-white" />}
                    {result.type === "ai" && <Brain className="w-6 h-6 text-white" />}
                    {result.type === "data" && <Globe className="w-6 h-6 text-white" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-white text-lg group-hover:text-teal-400 transition-colors">
                        {result.title}
                      </h4>
                      <div className="flex space-x-2">
                        <button className="p-2 hover:bg-gray-700/50 rounded-xl transition-colors opacity-0 group-hover:opacity-100">
                          <Star className="w-4 h-4 text-gray-400 hover:text-yellow-400" />
                        </button>
                        <button className="p-2 hover:bg-gray-700/50 rounded-xl transition-colors opacity-0 group-hover:opacity-100">
                          <Share className="w-4 h-4 text-gray-400 hover:text-blue-400" />
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-3 leading-relaxed">{result.content}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-500">{result.time}</span>
                        </div>
                        <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">{result.type}</Badge>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {result.tags.map((tag, index) => (
                          <Badge key={index} className="bg-gray-700/50 text-gray-400 border-gray-600/50 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-700/50 pt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Found {searchResults.length} results</span>
              <div className="flex space-x-2">
                <Button className="bg-teal-500/20 text-teal-400 border-teal-500/30 hover:bg-teal-500/30">
                  <Brain className="w-4 h-4 mr-2" />
                  Ask AI
                </Button>
                <Button className="bg-gray-700/50 text-gray-400 border-gray-600/50 hover:bg-gray-600/50">
                  Advanced Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Chat Options Dialog Component
function ChatOptionsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-2 hover:bg-gray-700/50 rounded-xl transition-colors">
          <MoreHorizontal className="w-4 h-4 text-gray-400" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md bg-gray-900/95 border-teal-500/30 backdrop-blur-glass text-white">
        <DialogHeader>
          <DialogTitle className="text-gradient-teal">Chat Options</DialogTitle>
        </DialogHeader>
        <div className="space-y-2">
          <button className="w-full flex items-center space-x-3 p-3 hover:bg-gray-800/50 rounded-xl transition-all text-left">
            <Copy className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-white">Copy Conversation</span>
          </button>
          <button className="w-full flex items-center space-x-3 p-3 hover:bg-gray-800/50 rounded-xl transition-all text-left">
            <Edit className="w-4 h-4 text-green-400" />
            <span className="text-sm text-white">Edit Title</span>
          </button>
          <button className="w-full flex items-center space-x-3 p-3 hover:bg-gray-800/50 rounded-xl transition-all text-left">
            <Pin className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white">Pin Chat</span>
          </button>
          <button className="w-full flex items-center space-x-3 p-3 hover:bg-gray-800/50 rounded-xl transition-all text-left">
            <Archive className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-white">Archive</span>
          </button>
          <button className="w-full flex items-center space-x-3 p-3 hover:bg-gray-800/50 rounded-xl transition-all text-left">
            <Download className="w-4 h-4 text-teal-400" />
            <span className="text-sm text-white">Export Chat</span>
          </button>
          <button className="w-full flex items-center space-x-3 p-3 hover:bg-gray-800/50 rounded-xl transition-all text-left">
            <Share className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-white">Share</span>
          </button>
          <div className="border-t border-gray-700/50 pt-2">
            <button className="w-full flex items-center space-x-3 p-3 hover:bg-red-500/20 rounded-xl transition-all text-left">
              <Trash2 className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-400">Delete Chat</span>
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function ProChatPage() {
  const { toast } = useToast()
  const [message, setMessage] = useState("")
  const [starredChats, setStarredChats] = useState<number[]>([])
  const [bookmarkedChats, setBookmarkedChats] = useState<number[]>([])

  // Handle star/bookmark actions
  const handleStarChat = (chatId: number) => {
    setStarredChats((prev) => (prev.includes(chatId) ? prev.filter((id) => id !== chatId) : [...prev, chatId]))
    toast({
      title: starredChats.includes(chatId) ? "Removed from favorites" : "Added to favorites",
      description: starredChats.includes(chatId)
        ? "Chat removed from your starred list"
        : "Chat saved to your starred list",
    })
  }

  const handleBookmarkChat = (chatId: number) => {
    setBookmarkedChats((prev) => (prev.includes(chatId) ? prev.filter((id) => id !== chatId) : [...prev, chatId]))
    toast({
      title: bookmarkedChats.includes(chatId) ? "Bookmark removed" : "Chat bookmarked",
      description: bookmarkedChats.includes(chatId) ? "Chat removed from bookmarks" : "Chat added to bookmarks",
    })
  }

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

                <AIAssistantDialog />

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
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-teal-400 hover:text-teal-300 transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl bg-gray-900/95 border-teal-500/30 backdrop-blur-glass text-white">
                      <DialogHeader>
                        <DialogTitle className="text-gradient-teal text-2xl flex items-center">
                          <Plus className="w-6 h-6 mr-2" />
                          Start New Pro Chat
                        </DialogTitle>
                      </DialogHeader>
                      <NewProChatDialog />
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="space-y-3">
                  <div className="p-4 card-glass rounded-2xl border border-teal-500/30">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-white">Current Chat</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/30">Active</Badge>
                        <ChatOptionsDialog />
                      </div>
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
                    <FileUploadDialog />
                    <ImageUploadDialog />
                    <VideoUploadDialog />
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
                      <EmojiPickerDialog />
                      <AudioSettingsDialog />
                      <VoiceInputDialog />
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
                          <button className="p-1 hover:bg-gray-700/50 rounded" onClick={() => handleStarChat(chat.id)}>
                            <Star
                              className={`w-3 h-3 ${starredChats.includes(chat.id) ? "text-yellow-400 fill-yellow-400" : "text-gray-400 hover:text-yellow-400"}`}
                            />
                          </button>
                          <button
                            className="p-1 hover:bg-gray-700/50 rounded"
                            onClick={() => handleBookmarkChat(chat.id)}
                          >
                            <Bookmark
                              className={`w-3 h-3 ${bookmarkedChats.includes(chat.id) ? "text-blue-400 fill-blue-400" : "text-gray-400 hover:text-blue-400"}`}
                            />
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
                <ProToolsDialog tool="AI Analysis" icon={Brain} color="text-teal-400" />
                <ProToolsDialog tool="Quick Actions" icon={Zap} color="text-cyan-400" />
                <ProToolsDialog tool="Web Search" icon={Globe} color="text-purple-400" />
                <ProToolsDialog tool="Documents" icon={FileText} color="text-orange-400" />
              </div>
            </div>

            {/* New Chat Button */}
            <NewProChatDialog />
          </div>
        </div>
      </div>
    </div>
  )
}
