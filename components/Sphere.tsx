import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export function Sphere(props) {
  const texture = useTexture('/sun.jpg')
  const ref = useRef(null)
  useFrame((state, delta) => (ref.current.rotation.y += delta))

  return (
    <mesh {...props} ref={ref} position={[0, 2.4, 0]} scale={[0.5, 0.5, 0.5]}>
      <sphereBufferGeometry args={[1, 64, 64]} />
      <meshPhysicalMaterial envMapIntensity={0.4} map={texture} clearcoat={0.8} clearcoatRoughness={0} roughness={1} metalness={0} />
    </mesh>
  )
}
