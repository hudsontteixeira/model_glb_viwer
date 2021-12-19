import { useState, useEffect } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'

export function Cube() {
  const { nodes } = useGLTF('/level.glb') as any
  const [materialColor, setMaterialColor] = useState('pink')
  const matcap = useTexture(`/${materialColor}.jpg`)

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
    <group 
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)} 
      onClick={changeMaterialColor}
    >
      <mesh geometry={nodes.Cube.geometry} position={[-0.8, 1.24, 0.61]}>
        <meshMatcapMaterial matcap={matcap} />
      </mesh>
    </group>
  )
}
