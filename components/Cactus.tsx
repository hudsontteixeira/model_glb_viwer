import { MeshWobbleMaterial, useGLTF } from '@react-three/drei'

export function Cactus() {
  const { nodes, materials } = useGLTF('/level.glb') as any
  return (
    <mesh geometry={nodes.Cactus.geometry} position={[-0.42, 0.51, -0.62]} rotation={[Math.PI / 2, 0, 0]}>
      {/* @ts-ignore */}
      <MeshWobbleMaterial factor={0.4} map={materials.Cactus.map} />
    </mesh>
  )
}
