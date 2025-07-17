"use client"

import { Canvas } from "@react-three/fiber"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import { cn } from "@/lib/utils"

interface LoadingTorusProps {
  position?: [number, number, number]
  scale?: number
  color?: string
}

function LoadingTorus({ position = [0, 0, 0], scale = 1, color = "#14b8a6" }: LoadingTorusProps) {
  const torusRef = useRef<THREE.Mesh>(null)
  const particlesRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.5
      torusRef.current.rotation.y = state.clock.elapsedTime * 0.3
      torusRef.current.rotation.z = state.clock.elapsedTime * 0.2
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  // Create particles around the torus
  const particleCount = 50
  const positions = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount; i++) {
    const angle = (i / particleCount) * Math.PI * 2
    const radius = 2 + Math.random() * 0.5
    positions[i * 3] = Math.cos(angle) * radius
    positions[i * 3 + 1] = (Math.random() - 0.5) * 0.5
    positions[i * 3 + 2] = Math.sin(angle) * radius
  }

  return (
    <group position={position} scale={scale}>
      {/* Main torus */}
      <mesh ref={torusRef}>
        <torusGeometry args={[1.5, 0.3, 8, 32]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.8}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Inner torus */}
      <mesh ref={torusRef}>
        <torusGeometry args={[1, 0.2, 6, 24]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.6}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]} 
          />

        </bufferGeometry>
        <pointsMaterial color={color} size={0.05} transparent opacity={0.8} sizeAttenuation={true} />
      </points>

      {/* Ambient light */}
      <ambientLight intensity={0.4} />
      <pointLight position={[2, 2, 2]} intensity={1} color={color} />
    </group>
  )
}

interface Loading3DProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  showText?: boolean
  text?: string
}

export function Loading3D({ size = "md", className, showText = true, text = "Loading..." }: Loading3DProps) {
  const sizeConfig = {
    sm: { width: "w-16", height: "h-16", textSize: "text-sm" },
    md: { width: "w-24", height: "h-24", textSize: "text-base" },
    lg: { width: "w-32", height: "h-32", textSize: "text-lg" },
    xl: { width: "w-48", height: "h-48", textSize: "text-xl" },
  }

  const config = sizeConfig[size]

  return (
    <div className={cn("flex flex-col items-center justify-center space-y-4", className)}>
      <div className={cn(config.width, config.height, "relative")}>
        <Canvas
  camera={{ position: [0, 0, 5], fov: 50 }}
  gl={{ alpha: true }}
  style={{ backgroundColor: "transparent" }}
  onCreated={({ gl }) => {
    gl.setClearColor("transparent")
  }}
>
  <LoadingTorus />
</Canvas>

      </div>
      {showText && <div className={cn("text-gradient-teal font-medium animate-pulse", config.textSize)}>{text}</div>}
    </div>
  )
}
