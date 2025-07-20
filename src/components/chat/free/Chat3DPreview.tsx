import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber"
import { GeometricShape } from "./GeometricShape";

// 3D Preview Component
export function Chat3DPreview({ shape = "torus" }: { shape?: string }) {
  return (
    <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <GeometricShape type={shape} />
          <Environment preset="studio" />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
        </Suspense>
      </Canvas>
    </div>
  )
}