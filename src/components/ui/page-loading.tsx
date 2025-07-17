"use client"

import { ClientOnly } from "@/hooks/ClientOnly"
import { Loading3D } from "./3d/loading-3d"

interface PageLoadingProps {
  text?: string
}

export function PageLoading({ text = "Loading page..." }: PageLoadingProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradiom-tent-to-b frransparent via-black/20 to-black/40"></div>

      {/* Loading content */}
      <div className="relative z-10 text-center">
        <ClientOnly>        <Loading3D size="xl" text={text} />
</ClientOnly>

        {/* Additional loading indicators */}
        <div className="mt-8 flex justify-center space-x-2">
          <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>
      </div>
    </div>
  )
}
