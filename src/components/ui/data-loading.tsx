"use client"

import { ClientOnly } from "@/hooks/ClientOnly"
import { Loading3D } from "./3d/loading-3d"
import { cn } from "@/lib/utils"

interface DataLoadingProps {
  text?: string
  className?: string
  rows?: number
}

export function DataLoading({ text = "Loading data...", className, rows = 3 }: DataLoadingProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="text-center mb-6">
        <ClientOnly>        <Loading3D size="md" text={text} />
</ClientOnly>
      </div>

      {/* Skeleton loading rows */}
      <div className="space-y-3">
        {Array.from({ length: rows }).map((_, index) => (
          <div key={index} className="card-glass p-4">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-teal-600/20 h-12 w-12"></div>
              <div className="flex-1 space-y-2 py-1">
                <div className="h-4 bg-teal-600/20 rounded w-3/4"></div>
                <div className="h-4 bg-teal-600/20 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
