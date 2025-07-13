"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import type * as THREE from "three"

interface PlanetaryTorusProps {
  position: [number, number, number]
  scale?: number
  rotationSpeed?: number
  color?: string
  rings?: number
}

export function PlanetaryTorus({
  position,
  scale = 1,
  rotationSpeed = 0.5,
  color = "#14b8a6",
  rings = 3,
}: PlanetaryTorusProps) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * rotationSpeed * 0.3
      groupRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed * 0.5
      groupRef.current.rotation.z = state.clock.elapsedTime * rotationSpeed * 0.2
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef} position={position} scale={scale}>
        {/* Central core */}
        <mesh>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial
            color={color}
            wireframe
            transparent
            opacity={0.8}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Multiple torus rings */}
        {Array.from({ length: rings }).map((_, i) => (
          <mesh key={i} rotation={[(Math.PI / 4) * i, (Math.PI / 3) * i, 0]}>
            <torusGeometry args={[1.5 + i * 0.5, 0.1, 8, 32]} />
            <meshStandardMaterial
              color={color}
              wireframe
              transparent
              opacity={0.6 - i * 0.1}
              emissive={color}
              emissiveIntensity={0.1}
            />
          </mesh>
        ))}

        {/* Orbital particles */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2
          const radius = 2.5
          return (
            <mesh
              key={`particle-${i}`}
              position={[Math.cos(angle) * radius, Math.sin(angle * 0.5) * 0.5, Math.sin(angle) * radius]}
            >
              <sphereGeometry args={[0.05, 8, 8]} />
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
            </mesh>
          )
        })}
      </group>
    </Float>
  )
}
