"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GradientButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
}

export function GradientButton({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
}: GradientButtonProps) {
  const baseClasses = "font-semibold transition-all duration-300 transform hover:scale-105"

  const variants = {
    primary:
      "bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-2xl shadow-teal-500/25",
    secondary: "bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white",
    outline:
      "border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black bg-transparent backdrop-blur-sm",
  }

  const sizes = {
    sm: "px-6 py-2 text-sm rounded-lg",
    md: "px-8 py-3 text-base rounded-xl",
    lg: "px-12 py-4 text-lg rounded-xl",
  }

  return (
    <Button className={cn(baseClasses, variants[variant], sizes[size], className)} onClick={onClick}>
      {children}
    </Button>
  )
}
