import { MeshWobbleMaterial, useGLTF, useTexture } from '@react-three/drei'
import { useEffect, useState } from 'react'

export function Cactus() {
  const { nodes, materials } = useGLTF('/level.glb') as any
  const [materialColor, setMaterialColor] = useState('cyan')
  let matcap = useTexture(`/${materialColor}.jpg`)

  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  function changeMaterialColor() {
    switch (materialColor) {
      case 'pink':
        setMaterialColor('cyan')
        break;

      case 'cyan':
        setMaterialColor('wood')
        break;
  
      case 'wood':
        setMaterialColor('pink')
        break;

      default: 'pink'
        break;
    }
  }

  return (
    <mesh 
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)} 
      onClick={changeMaterialColor}
      geometry={nodes.Cactus.geometry} 
      position={[-0.42, 0.51, -0.62]} 
      rotation={[Math.PI / 2, 0, 0]}>
      {/* @ts-ignore */}
      <MeshWobbleMaterial factor={0.4} map={matcap} />
    </mesh>
  )
}
