"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import {
  MessageCircle,
  Users,
  Target,
  Globe,
  Heart,
  Lightbulb,
  Shield,
  Zap,
  Star,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"
import { Navigation } from "@/components/ui/navigation"
import { GradientButton } from "@/components/ui/gradient-button"
import { EnhancedScene } from "@/components/ui/3d/enhanced-scene"

export default function AboutPage() {
  const stats = [
    { value: "50M+", label: "Active Users", icon: Users },
    { value: "180+", label: "Countries", icon: Globe },
    { value: "99.99%", label: "Uptime", icon: Zap },
    { value: "4.9/5", label: "User Rating", icon: Star },
  ]

  const values = [
    {
      icon: Heart,
      title: "User-Centric",
      description: "Every decision we make is driven by what's best for our users and their communication needs.",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "We believe privacy is a fundamental right, not a luxury. Your data belongs to you, always.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in digital communication technology.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Connecting people across cultures and continents to build a more connected world.",
    },
  ]

  const team = [
    {
      name: "Mason Kang",
      role: "CEO & Co-Founder",
      bio: "Former VP of Engineering at Meta, passionate about connecting people through technology.",
      image: "https://res.cloudinary.com/dvbbfcxdz/image/upload/v1748496558/Kang_oc9fyj.png",
    },
    {
      name: "Mason Kang",
      role: "CTO & Co-Founder",
      bio: "Ex-Google senior engineer with 15+ years in distributed systems and security.",
      image: "https://res.cloudinary.com/dvbbfcxdz/image/upload/v1748496558/Kang_oc9fyj.png",
    },
    {
      name: "Mason Kang",
      role: "Head of Design",
      bio: "Award-winning designer who previously led design teams at Apple and Airbnb.",
      image: "https://res.cloudinary.com/dvbbfcxdz/image/upload/v1748496558/Kang_oc9fyj.png",
    },
    {
      name: "Mason Kang",
      role: "Head of Security",
      bio: "Cybersecurity expert with background in cryptography and privacy-preserving technologies.",
      image: "https://res.cloudinary.com/dvbbfcxdz/image/upload/v1748496558/Kang_oc9fyj.png",
    },
  ]

  const timeline = [
    {
      year: "2020",
      title: "The Beginning",
      description: "ChatKang was founded with a vision to revolutionize digital communication.",
    },
    {
      year: "2021",
      title: "First Million Users",
      description: "Reached our first million users within 12 months of launch.",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded to 50+ countries and launched enterprise solutions.",
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Introduced AI-powered features and advanced security protocols.",
    },
    {
      year: "2024",
      title: "50M+ Users",
      description: "Celebrating 50 million active users and launching 3D interfaces.",
    },
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
                🚀 Our Story
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-gradient-white-teal">Building the Future</span>
              <br />
              <span className="text-gradient-teal">of Communication</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              We are on a mission to connect every person on Earth through secure, intelligent, and beautiful
              communication experiences.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-teal-500/25">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gradient-teal mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="px-6 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-teal">Our Mission</h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  We believe that meaningful connections are the foundation of human progress. Our mission is to break
                  down barriers and bring people together through technology that respects privacy, celebrates
                  diversity, and empowers authentic communication.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Every feature we build, every decision we make, and every line of code we write is guided by this
                  simple principle: technology should bring out the best in humanity.
                </p>
              </div>
              <div className="card-glass p-8">
                <Target className="h-16 w-16 text-teal-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  A world where distance does not matter, language is not a barrier, and every person can connect
                  authentically with others, regardless of where they are or what device they use.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-teal">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape the culture of our company.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={index}
                    className="card-glass p-8 text-center hover:border-teal-500/50 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-teal-500/25">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-teal">Our Journey</h2>
              <p className="text-xl text-gray-300">From a small startup to a global platform serving millions.</p>
            </div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/25">
                    <span className="text-white font-bold">{item.year}</span>
                  </div>
                  <div className="card-glass p-6 flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-teal">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The passionate individuals behind ChatKang success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="card-glass p-6 text-center hover:border-teal-500/50 transition-all duration-300"
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 shadow-lg shadow-teal-500/25">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-teal-400 mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Contact Section */}
        <div className="px-6 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-teal">Get in Touch</h2>
              <p className="text-xl text-gray-300">We would love to hear from you. Reach out to us anytime.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-glass p-8 text-center">
                <Mail className="h-12 w-12 text-teal-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-gray-300">ChatKang@gmail.com</p>
              </div>
              <div className="card-glass p-8 text-center">
                <Phone className="h-12 w-12 text-teal-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-gray-300">+84 (012) 123-4567</p>
              </div>
              <div className="card-glass p-8 text-center">
                <MapPin className="h-12 w-12 text-teal-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                <p className="text-gray-300">HCM , VIET NAM</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-6 py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-glass rounded-3xl p-16 border border-teal-500/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-teal">Join Our Mission</h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Be part of the future of communication. Start your journey with ChatKang today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <GradientButton variant="primary" size="lg">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Get Started Free
                </GradientButton>
                <GradientButton variant="outline" size="lg">
                  Learn More
                  <ArrowRight className="ml-3 h-6 w-6" />
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
