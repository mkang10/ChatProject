"use client"

import { useEffect, useState } from "react"
import { Loading3D } from "./3d/loading-3d"

interface PageLoadingProps {
  text?: string
}

export function PageLoading({ text = "Loading page..." }: PageLoadingProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 1000) // Tự ẩn sau 1 giây
    return () => clearTimeout(timeout)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
      <div className="relative z-10 text-center">
        <Loading3D size="xl" text={text} />
        <div className="mt-8 flex justify-center space-x-2">
          <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  )
}
