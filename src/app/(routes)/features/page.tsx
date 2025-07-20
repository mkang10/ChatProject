"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useState } from "react"
import {
  MessageCircle,
  Users,
  Shield,
  Video,
  Phone,
  Zap,
  Globe,
  Lock,
  Bot,
  FileText,
  Search,
  Smartphone,
  Cloud,
  Headphones,
  Star,
  CheckCircle,
} from "lucide-react"
import { Navigation } from "@/components/ui/navigation"
import { GradientButton } from "@/components/ui/gradient-button"
import { EnhancedScene } from "@/components/ui/3d/enhanced-scene"

export default function FeaturesPage() {
  const [activeCategory, setActiveCategory] = useState("communication")

  const categories = [
    { id: "communication", name: "Communication", icon: MessageCircle },
    { id: "security", name: "Security", icon: Shield },
    { id: "ai", name: "AI Features", icon: Bot },
    { id: "platform", name: "Platform", icon: Smartphone },
  ]

  const features = {
    communication: [
      {
        icon: MessageCircle,
        title: "Instant Messaging",
        description:
          "Send and receive messages in real-time with ultra-low latency and perfect synchronization across all devices.",
        benefits: ["Real-time delivery", "Message encryption", "Read receipts", "Typing indicators"],
      },
      {
        icon: Video,
        title: "HD Video Calls",
        description:
          "Crystal-clear video calls with advanced compression technology and adaptive quality based on connection.",
        benefits: ["4K video quality", "Screen sharing", "Virtual backgrounds", "Recording capability"],
      },
      {
        icon: Phone,
        title: "Voice Calls",
        description: "High-quality voice calls with noise cancellation and echo reduction for perfect clarity.",
        benefits: ["HD voice quality", "Noise cancellation", "Conference calls", "Call recording"],
      },
      {
        icon: Users,
        title: "Group Chats",
        description: "Create group chats with up to 1000 members with flexible management controls and permissions.",
        benefits: ["1000+ members", "Admin controls", "Custom permissions", "Group analytics"],
      },
    ],
    security: [
      {
        icon: Shield,
        title: "End-to-End Encryption",
        description:
          "Military-grade encryption ensures your conversations remain private and secure from any third party.",
        benefits: [
          "AES-256 encryption",
          "Perfect forward secrecy",
          "Zero-knowledge architecture",
          "Secure key exchange",
        ],
      },
      {
        icon: Lock,
        title: "Privacy First",
        description: "Your data belongs to you. We never store or analyze your personal conversations or metadata.",
        benefits: ["No data mining", "Local storage", "Anonymous usage", "GDPR compliant"],
      },
      {
        icon: FileText,
        title: "Secure File Sharing",
        description: "Share files up to 2GB with end-to-end encryption and automatic virus scanning.",
        benefits: ["2GB file limit", "Virus scanning", "Encrypted transfer", "Access controls"],
      },
      {
        icon: Search,
        title: "Disappearing Messages",
        description: "Set messages to automatically delete after a specified time for enhanced privacy.",
        benefits: ["Custom timers", "Bulk deletion", "Screenshot protection", "Forensic resistance"],
      },
    ],
    ai: [
      {
        icon: Bot,
        title: "AI Assistant",
        description: "Built-in AI assistant to help with translations, summaries, and smart replies.",
        benefits: ["Real-time translation", "Message summaries", "Smart replies", "Context awareness"],
      },
      {
        icon: Search,
        title: "Smart Search",
        description: "AI-powered search that understands context and finds exactly what you're looking for.",
        benefits: ["Semantic search", "Image recognition", "Voice search", "Smart filters"],
      },
      {
        icon: Star,
        title: "Content Moderation",
        description: "AI-powered content moderation to keep your chats safe and family-friendly.",
        benefits: ["Spam detection", "Inappropriate content filtering", "Threat detection", "Custom rules"],
      },
      {
        icon: FileText,
        title: "Auto Transcription",
        description: "Automatically transcribe voice messages and video calls with high accuracy.",
        benefits: ["99% accuracy", "Multiple languages", "Real-time transcription", "Searchable transcripts"],
      },
    ],
    platform: [
      {
        icon: Globe,
        title: "Cross-Platform",
        description: "Available on all major platforms with seamless synchronization across devices.",
        benefits: ["iOS & Android", "Web & Desktop", "Real-time sync", "Cloud backup"],
      },
      {
        icon: Cloud,
        title: "Cloud Storage",
        description: "Secure cloud storage for your messages, files, and media with automatic backup.",
        benefits: ["Unlimited storage", "Auto backup", "Version history", "Easy restore"],
      },
      {
        icon: Zap,
        title: "Lightning Fast",
        description: "Optimized performance with sub-second message delivery and instant app loading.",
        benefits: ["<100ms latency", "Instant loading", "Offline support", "Smart caching"],
      },
      {
        icon: Headphones,
        title: "24/7 Support",
        description: "Round-the-clock customer support with live chat, email, and phone assistance.",
        benefits: ["Live chat support", "Email support", "Phone support", "Community forums"],
      },
    ],
  }

  return (
    
   <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
  {/* 3D Background */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }}
      style={{
        background: 'linear-gradient(to bottom right, #111827, #000000)', // fallback nền đen nếu có lỗi
      }}
    >
      <EnhancedScene />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.1}
        maxPolarAngle={Math.PI / 1.8}
        minPolarAngle={Math.PI / 2.2}
      />
    </Canvas>
  </div>


      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navigation />

        {/* Hero Section */}
        <div className="px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-400 rounded-full text-sm font-medium backdrop-blur-sm border border-teal-500/30">
                ✨ Powerful Features
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-gradient-white-teal">Everything You Need</span>
              <br />
              <span className="text-gradient-teal">for Perfect Communication</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover the comprehensive suite of features that make ChatKang the most advanced communication platform
              in the digital universe.
            </p>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="px-6 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg shadow-teal-500/25"
                        : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 backdrop-blur-sm"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{category.name}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {features[activeCategory as keyof typeof features].map((feature, index) => (
                <div key={index} className="card-glass p-8 hover:border-teal-500/50 transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/25">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                      <div className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-teal-400 flex-shrink-0" />
                            <span className="text-gray-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-6 py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-glass rounded-3xl p-16 border border-teal-500/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-teal">
                Ready to Experience These Features?
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Join millions of users who trust ChatKang for their daily communication needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <GradientButton variant="primary" size="lg">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Start Free Trial
                </GradientButton>
                <GradientButton variant="outline" size="lg">
                  View Pricing
                </GradientButton>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="p-8 text-center backdrop-blur-md bg-black/20 border-t border-teal-500/20">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-xl flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient-teal">ChatKang</span>
            </div>
            <p className="text-gray-400 mb-4 text-lg">Connecting the world, sharing emotions</p>
            <p className="text-gray-500">&copy; 2025 ChatKang. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
