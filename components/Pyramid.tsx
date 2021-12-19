import { useEffect, useState } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { useSpring, a } from '@react-spring/three'

export function Pyramid() {
  const { nodes } = useGLTF('/level.glb') as any
  const [materialColor, setMaterialColor] = useState('cyan')

  const matcap = useTexture(`/${materialColor}.jpg`)
  const [spring, api] = useSpring(() => ({ rotation: [0, 0, 0], config: { friction: 80 } }), [])
  useEffect(() => {
    let timeout
    const rotate = () => {
      api.start({ rotation: [(Math.random() - 0.5) * Math.PI * 3, 0, (Math.random() - 0.5) * Math.PI * 3] })
      timeout = setTimeout(rotate, (0.5 + Math.random() * 2) * 1000)
    }
    rotate()
    return () => void clearTimeout(timeout)
  }, [])

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
  
      default: 'cyan'
        break;
    }
  }

  return (
    // @ts-ignore
    <a.mesh 
      geometry={nodes.Pyramid.geometry} 
      position={[-0.8, 1.33, 0.25]} 
      onClick={changeMaterialColor}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)} 
      {...spring}>
      <meshMatcapMaterial matcap={matcap} />
    </a.mesh>
  )
}
