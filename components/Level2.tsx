import { useLoader, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useSpring } from '@react-spring/three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { Suspense, useMemo } from 'react'
import { Mesh } from 'three'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export function Level2() {

  const gltf =  useGLTF('/level.glb') as any
  const scene = gltf.scene
  const textureMap = useLoader(TextureLoader, '/wood.jpg')
  
  const cactusMesh = scene.getObjectByName("Cactus");  

  var cactusMaterial = new THREE.MeshPhongMaterial({
    map: textureMap, 
    transparent: true, 
    opacity:1, 
    shininess: 90, 
    specular: 0xFFFFFF
});

cactusMesh.material = cactusMaterial;
cactusMesh.material.needsUpdate = true;
  return (
  <primitive object={gltf.scene} />)
}
