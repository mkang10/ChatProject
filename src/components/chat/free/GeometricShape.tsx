export function GeometricShape({ type = "torus" }: { type?: string }) {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      {type === "torus" && <torusGeometry args={[1, 0.4, 16, 100]} />}
      {type === "sphere" && <sphereGeometry args={[1.2, 32, 32]} />}
      {type === "box" && <boxGeometry args={[1.5, 1.5, 1.5]} />}
      <meshStandardMaterial color="#14b8a6" metalness={0.8} roughness={0.2} envMapIntensity={1} />
    </mesh>
  )
}
