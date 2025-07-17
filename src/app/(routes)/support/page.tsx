"use client"

import type React from "react"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useState } from "react"
import {
  MessageCircle,
  Search,
  Book,
  Video,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  FileText,
  Users,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Send,
} from "lucide-react"
import { Navigation } from "@/components/ui/navigation"
import { GradientButton } from "@/components/ui/gradient-button"
import { Input } from "@/components/ui/input"
import { EnhancedScene } from "@/components/ui/3d/enhanced-scene"

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    priority: "medium",
  })

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7 Available",
      responseTime: "< 2 minutes",
      action: "Start Chat",
      popular: true,
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message about your issue",
      availability: "24/7 Available",
      responseTime: "< 4 hours",
      action: "Send Email",
      popular: false,
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our support specialists",
      availability: "Mon-Fri 9AM-6PM PST",
      responseTime: "Immediate",
      action: "Call Now",
      popular: false,
    },
    {
      icon: Video,
      title: "Video Call",
      description: "Screen sharing and face-to-face assistance",
      availability: "By Appointment",
      responseTime: "Same day",
      action: "Schedule Call",
      popular: false,
    },
  ]

  const categories = [
    { id: "all", name: "All Topics", icon: HelpCircle },
    { id: "account", name: "Account & Billing", icon: Users },
    { id: "technical", name: "Technical Issues", icon: AlertCircle },
    { id: "features", name: "Features & Usage", icon: Book },
    { id: "security", name: "Security & Privacy", icon: CheckCircle },
  ]

  const faqs = [
    {
      category: "account",
      question: "How do I reset my password?",
      answer:
        "You can reset your password by clicking 'Forgot Password' on the login page. Enter your email address and we'll send you a reset link. The link expires in 24 hours for security.",
    },
    {
      category: "account",
      question: "How do I upgrade my plan?",
      answer:
        "Go to Settings > Billing in your account. Select the plan you want to upgrade to and confirm the payment. The upgrade takes effect immediately and you'll be charged prorated.",
    },
    {
      category: "technical",
      question: "Why can't I connect to video calls?",
      answer:
        "Check your internet connection and ensure you've granted camera/microphone permissions. Try refreshing the page or restarting the app. If issues persist, check our status page for known issues.",
    },
    {
      category: "technical",
      question: "Messages not syncing across devices?",
      answer:
        "Ensure you're logged into the same account on all devices and have a stable internet connection. Try logging out and back in. If the issue continues, contact our support team.",
    },
    {
      category: "features",
      question: "How do I create a group chat?",
      answer:
        "Click the '+' button in your chat list, select 'New Group', add participants, set a group name and photo, then click 'Create Group'. You can add up to 1000 members depending on your plan.",
    },
    {
      category: "features",
      question: "Can I schedule messages?",
      answer:
        "Yes! Type your message, long-press the send button, select 'Schedule', choose your date and time, then confirm. Scheduled messages appear with a clock icon until sent.",
    },
    {
      category: "security",
      question: "How secure are my messages?",
      answer:
        "All messages use end-to-end encryption with AES-256. Only you and the recipient can read them. We use perfect forward secrecy, meaning even if keys are compromised, past messages remain secure.",
    },
    {
      category: "security",
      question: "Can ChatFlow see my messages?",
      answer:
        "No. With end-to-end encryption, your messages are encrypted on your device before sending. We cannot decrypt or read your messages, even if we wanted to.",
    },
  ]

  const resources = [
    {
      icon: Book,
      title: "User Guide",
      description: "Complete guide to using ChatFlow",
      link: "#",
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video instructions",
      link: "#",
    },
    {
      icon: FileText,
      title: "API Documentation",
      description: "For developers and integrations",
      link: "#",
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other users",
      link: "#",
    },
  ]

  const filteredFaqs = selectedCategory === "all" ? faqs : faqs.filter((faq) => faq.category === selectedCategory)

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Contact form submitted:", contactForm)
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
            autoRotateSpeed={0.1}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.2}
          />
        </Canvas>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 z-5"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navigation />

        {/* Hero Section */}
        <div className="px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-400 rounded-full text-sm font-medium backdrop-blur-sm border border-teal-500/30">
                🎧 24/7 Support
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-gradient-white-teal">We are Here</span>
              <br />
              <span className="text-gradient-teal">to Help You</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Get the support you need, when you need it. Our expert team is available 24/7 to help you make the most of
              ChatFlow.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-16">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for help articles, guides, or FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg bg-gray-800/50 border-gray-700 rounded-xl backdrop-blur-sm focus:border-teal-500 focus:ring-teal-500"
                />
                <GradientButton variant="primary" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <Search className="h-5 w-5" />
                </GradientButton>
              </div>
            </div>
          </div>
        </div>

        {/* Support Options */}
        <div className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-teal">Choose Your Support Channel</h2>
              <p className="text-xl text-gray-300">Multiple ways to get help, tailored to your needs</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportOptions.map((option, index) => {
                const Icon = option.icon
                return (
                  <div
                    key={index}
                    className={`relative card-glass p-8 text-center ${
                      option.popular
                        ? "border-teal-500 shadow-2xl shadow-teal-500/20 scale-105"
                        : "hover:border-teal-500/50"
                    } transition-all duration-300`}
                  >
                    {option.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-teal-500/25">
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-4">{option.title}</h3>
                    <p className="text-gray-300 mb-6">{option.description}</p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                        <Clock className="h-4 w-4" />
                        <span>{option.availability}</span>
                      </div>
                      <div className="text-sm text-teal-400 font-medium">Response: {option.responseTime}</div>
                    </div>

                    <GradientButton variant={option.popular ? "primary" : "outline"} className="w-full">
                      {option.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </GradientButton>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="px-6 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-teal">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">Find quick answers to common questions</p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => {
                const Icon = category.icon
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white"
                        : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{category.name}</span>
                  </button>
                )
              })}
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="card-glass">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="h-6 w-6 text-teal-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="px-6 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-teal">Help Resources</h2>
              <p className="text-xl text-gray-300">Explore our comprehensive help resources</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => {
                const Icon = resource.icon
                return (
                  <div
                    key={index}
                    className="card-glass p-8 text-center hover:border-teal-500/50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-teal-500/25">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{resource.title}</h3>
                    <p className="text-gray-300 mb-6">{resource.description}</p>
                    <div className="text-teal-400 font-medium flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-teal">Still Need Help?</h2>
              <p className="text-xl text-gray-300">Send us a message and we will get back to you quickly</p>
            </div>

            <div className="card-glass p-8">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <Input
                      type="text"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="bg-gray-800/50 border-gray-700 focus:border-teal-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <Input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="bg-gray-800/50 border-gray-700 focus:border-teal-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <Input
                    type="text"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="bg-gray-800/50 border-gray-700 focus:border-teal-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Priority</label>
                  <select
                    value={contactForm.priority}
                    onChange={(e) => setContactForm({ ...contactForm, priority: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-teal-500 focus:outline-none"
                  >
                    <option value="low">Low - General inquiry</option>
                    <option value="medium">Medium - Account issue</option>
                    <option value="high">High - Technical problem</option>
                    <option value="urgent">Urgent - Service disruption</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-teal-500 focus:outline-none resize-none"
                    placeholder="Please describe your issue in detail..."
                    required
                  />
                </div>

                <div className="text-center">
                  <GradientButton variant="primary" size="lg" type="submit">
                    <Send className="mr-3 h-6 w-6" />
                    Send Message
                  </GradientButton>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Status Section */}
        <div className="px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="card-glass p-8">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-bold">All Systems Operational</h3>
              </div>
              <p className="text-gray-300 mb-6">
                All ChatFlow services are running smoothly. Check our status page for real-time updates.
              </p>
              <GradientButton variant="outline">
                View Status Page
                <ArrowRight className="ml-2 h-4 w-4" />
              </GradientButton>
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
              <span className="text-2xl font-bold text-gradient-teal">ChatFlow</span>
            </div>
            <p className="text-gray-400 mb-4 text-lg">Connecting the world, sharing emotions</p>
            <p className="text-gray-500">&copy; 2024 ChatFlow. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
