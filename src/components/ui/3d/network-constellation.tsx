"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type * as THREE from "three";

export function NetworkConstellation() {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  // Create connection lines between nodes
  const createConnections = (): Float32Array => {
    const points: number[] = [];
    const nodeCount = 12;

    for (let i = 0; i < nodeCount; i++) {
      const angle1 = (i / nodeCount) * Math.PI * 2;
      const radius = 6;
      const x1 = Math.cos(angle1) * radius;
      const z1 = Math.sin(angle1) * radius;
      const y1 = Math.sin(i * 0.5) * 2;

      // Connect to next 2 nodes
      for (let j = 1; j <= 2; j++) {
        const nextIndex = (i + j) % nodeCount;
        const angle2 = (nextIndex / nodeCount) * Math.PI * 2;
        const x2 = Math.cos(angle2) * radius;
        const z2 = Math.sin(angle2) * radius;
        const y2 = Math.sin(nextIndex * 0.5) * 2;

        points.push(x1, y1, z1, x2, y2, z2);
      }
    }

    return new Float32Array(points);
  };

  // Generate nodes
  const nodes = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * Math.PI * 2;
    const radius = 6;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = Math.sin(i * 0.5) * 2;

    return (
      <mesh key={i} position={[x, y, z]}>
        <sphereGeometry args={[0.15, 12, 12]} />
        <meshStandardMaterial
          color="#06d6a0"
          emissive="#06d6a0"
          emissiveIntensity={0.4}
          transparent
          opacity={0.8}
        />
      </mesh>
    );
  });

  const connectionArray = createConnections();

  return (
    <group ref={groupRef}>
      {nodes}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[connectionArray, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#14b8a6" transparent opacity={0.3} />
      </lineSegments>
    </group>
  );
}
