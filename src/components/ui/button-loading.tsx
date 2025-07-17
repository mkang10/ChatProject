"use client"

import { ClientOnly } from "@/hooks/ClientOnly"
import { Loading3D } from "./3d/loading-3d"
import { cn } from "@/lib/utils"

interface ButtonLoadingProps {
  className?: string
}

export function ButtonLoading({ className }: ButtonLoadingProps) {
  return (
    <div className={cn("inline-flex items-center space-x-2", className)}>
      <div className="w-4 h-4">
        <ClientOnly>
                  <Loading3D size="sm" showText={false} />
        </ClientOnly>
      </div>
      <span>Loading...</span>
    </div>
  )
}
