"use client"

import { ClientOnly } from "@/hooks/ClientOnly"
import { Loading3D } from "./3d/loading-3d"
import { cn } from "@/lib/utils"

interface SectionLoadingProps {
  text?: string
  className?: string
  size?: "sm" | "md" | "lg"
}

export function SectionLoading({ text = "Loading...", className, size = "md" }: SectionLoadingProps) {
  return (
    <div className={cn("flex items-center justify-center py-12", className)}>
      <div className="card-glass p-8 text-center">
        <ClientOnly>        <Loading3D size={size} text={text} />
</ClientOnly>
      </div>
    </div>
  )
}
