import * as React from "react";
import { Stars, Environment } from "@react-three/drei";
import { PlanetaryTorus } from "./planetary-torus";
import { NetworkConstellation } from "./network-constellation";

function ParticleField() {
  const particleCount = 200;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
  }

  return (
    <points>
      <bufferGeometry>
        {/*
          bufferAttribute requires "args" prop to initialize the attribute.
          Here args={[array, itemSize]} replaces count, array, and itemSize props.
        */}
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#14b8a6"
        size={0.03}
        transparent
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
}

export function EnhancedScene() {
  return (
    <>
      <Environment preset="night" />
      <Stars radius={150} depth={80} count={8000} factor={6} saturation={0} fade speed={1} />

      <ParticleField />
      <NetworkConstellation />

      {/* Multiple Planetary Torus Systems */}
      <PlanetaryTorus position={[-8, 3, -6]} scale={0.8} rotationSpeed={0.3} color="#14b8a6" rings={4} />
      <PlanetaryTorus position={[8, -2, -4]} scale={1.2} rotationSpeed={0.4} color="#06d6a0" rings={3} />
      <PlanetaryTorus position={[-6, -4, -8]} scale={0.6} rotationSpeed={0.6} color="#0891b2" rings={5} />
      <PlanetaryTorus position={[6, 4, -10]} scale={1.0} rotationSpeed={0.2} color="#0e7490" rings={3} />
      <PlanetaryTorus position={[0, 0, -12]} scale={1.5} rotationSpeed={0.1} color="#155e75" rings={6} />
      <PlanetaryTorus position={[-10, 1, -3]} scale={0.7} rotationSpeed={0.5} color="#22d3ee" rings={4} />

      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#14b8a6" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#06d6a0" />
      <spotLight position={[0, 20, 0]} angle={0.3} penumbra={1} intensity={1} color="#0891b2" castShadow />
    </>
  );
}
