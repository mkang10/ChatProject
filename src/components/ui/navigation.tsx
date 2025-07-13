import { MessageCircle } from "lucide-react"
import { GradientButton } from "./gradient-button"

export function Navigation() {
  return (
    <nav className="p-6 flex justify-between items-center backdrop-blur-md bg-black/10 border-b border-teal-500/20">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-xl flex items-center justify-center">
          <MessageCircle className="h-6 w-6 text-white" />
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
          ChatKang
        </span>
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#" className="hover:text-teal-400 transition-colors">
          Home
        </a>
        <a href="#" className="hover:text-teal-400 transition-colors">
          Features
        </a>
        <a href="#" className="hover:text-teal-400 transition-colors">
          Pricing
        </a>
        <a href="#" className="hover:text-teal-400 transition-colors">
          Support
        </a>
      </div>
      <div className="flex space-x-3">
        <GradientButton variant="outline" size="sm">
          Sign In
        </GradientButton>
        <GradientButton variant="primary" size="sm">
          Try Free
        </GradientButton>
      </div>
    </nav>
  )
}
