"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { useState } from "react"
import { MessageCircle, Check, X, Star, Crown, Users, Phone, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/ui/navigation"
import { GradientButton } from "@/components/ui/gradient-button"
import { EnhancedScene } from "@/components/ui/3d/enhanced-scene"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const plans = [
    {
      name: "Free",
      description: "Perfect for personal use",
      icon: MessageCircle,
      price: { monthly: 0, yearly: 0 },
      features: [
        "Up to 100 messages/day",
        "1-on-1 video calls",
        "Basic file sharing (10MB)",
        "Standard encryption",
        "Mobile & web access",
        "Community support",
      ],
      limitations: ["No group chats", "No AI features", "Limited storage", "No priority support"],
      popular: false,
      cta: "Get Started Free",
    },
    {
      name: "Pro",
      description: "For power users and small teams",
      icon: Star,
      price: { monthly: 9.99, yearly: 99.99 },
      features: [
        "Unlimited messages",
        "HD video calls up to 25 people",
        "File sharing up to 1GB",
        "End-to-end encryption",
        "All platforms access",
        "AI assistant",
        "Smart search",
        "Priority support",
        "Custom themes",
        "Message scheduling",
      ],
      limitations: [],
      popular: true,
      cta: "Start Pro Trial",
    },
    {
      name: "Business",
      description: "For growing businesses",
      icon: Users,
      price: { monthly: 19.99, yearly: 199.99 },
      features: [
        "Everything in Pro",
        "Video calls up to 100 people",
        "File sharing up to 5GB",
        "Advanced admin controls",
        "Team analytics",
        "Custom integrations",
        "SSO authentication",
        "Compliance tools",
        "24/7 phone support",
        "Custom branding",
      ],
      limitations: [],
      popular: false,
      cta: "Start Business Trial",
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      icon: Crown,
      price: { monthly: "Custom", yearly: "Custom" },
      features: [
        "Everything in Business",
        "Unlimited participants",
        "Unlimited file sharing",
        "Dedicated infrastructure",
        "Custom development",
        "On-premise deployment",
        "Advanced security",
        "Dedicated support team",
        "SLA guarantee",
        "Custom contracts",
      ],
      limitations: [],
      popular: false,
      cta: "Contact Sales",
    },
  ]

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.",
    },
    {
      question: "Is there a free trial for paid plans?",
      answer: "Yes, all paid plans come with a 14-day free trial. No credit card required to start your trial.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.",
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use military-grade encryption and never store your messages on our servers.",
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer: "Yes, we offer 50% discounts for verified non-profit organizations and educational institutions.",
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
            autoRotateSpeed={0.15}
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
                💎 Simple Pricing
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-gradient-white-teal">Choose Your</span>
              <br />
              <span className="text-gradient-teal">Perfect Plan</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Start free and scale as you grow. All plans include our core features with no hidden fees or surprise
              charges.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-16">
              <span className={`text-lg ${billingCycle === "monthly" ? "text-white" : "text-gray-400"}`}>Monthly</span>
              <button
                onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                  billingCycle === "yearly" ? "bg-teal-600" : "bg-gray-600"
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                    billingCycle === "yearly" ? "translate-x-9" : "translate-x-1"
                  }`}
                />
              </button>
              <span className={`text-lg ${billingCycle === "yearly" ? "text-white" : "text-gray-400"}`}>Yearly</span>
              {billingCycle === "yearly" && (
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Save 20%
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {plans.map((plan, index) => {
                const Icon = plan.icon
                return (
                  <div
                    key={index}
                    className={`relative card-glass p-8 ${
                      plan.popular
                        ? "border-teal-500 shadow-2xl shadow-teal-500/20 scale-105"
                        : "hover:border-teal-500/50"
                    } transition-all duration-300`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-teal-500/25">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-gray-400 mb-4">{plan.description}</p>
                      <div className="mb-6">
                        {typeof plan.price[billingCycle] === "number" ? (
                          <>
                            <span className="text-4xl font-bold text-gradient-teal">${plan.price[billingCycle]}</span>
                            <span className="text-gray-400">/{billingCycle === "monthly" ? "month" : "year"}</span>
                          </>
                        ) : (
                          <span className="text-4xl font-bold text-gradient-teal">{plan.price[billingCycle]}</span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <Check className="h-5 w-5 text-teal-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <div key={limitationIndex} className="flex items-center space-x-3">
                          <X className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          <span className="text-gray-500">{limitation}</span>
                        </div>
                      ))}
                    </div>

                    <GradientButton variant={plan.popular ? "primary" : "outline"} className="w-full">
                      {plan.cta}
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-teal">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">Got questions? We are got answers.</p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="card-glass p-6">
                  <h3 className="text-xl font-bold mb-4 text-white">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-6 py-24 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-glass rounded-3xl p-16 border border-teal-500/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-teal">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Join millions of users who trust ChatKang for their communication needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <GradientButton variant="primary" size="lg">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Start Free Trial
                </GradientButton>
                <GradientButton variant="outline" size="lg">
                  <Phone className="mr-3 h-6 w-6" />
                  Contact Sales
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
