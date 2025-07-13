"use client"

import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  isActive?: boolean
  onHover?: () => void
  className?: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  isActive = false,
  onHover,
  className,
}: FeatureCardProps) {
  return (
    <Card
      className={cn(
        "bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 backdrop-blur-md transition-all duration-300 cursor-pointer transform hover:scale-105",
        isActive ? "border-teal-500/50 shadow-lg shadow-teal-500/20" : "hover:border-teal-500/50",
        className,
      )}
      onMouseEnter={onHover}
    >
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-teal-500/25">
          <Icon className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}
