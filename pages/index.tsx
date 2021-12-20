import { Suspense, useRef, useState } from "react";
import { Loader, Sky, PresentationControls } from '@react-three/drei'
import { Canvas } from "@react-three/fiber";
import { Level } from "../components/Level";
import { Cube } from "../components/Cube";
import { Pyramid } from "../components/Pyramid";
import { Camera } from "../components/Camera";
import { Cactus } from "../components/Cactus";
import { Dog } from "../components/Dog";
import { Sphere } from "../components/Sphere";

export default function Index() { 
  const soundRef = useRef(null)

  function playSound() {
    soundRef.current?.play()
    soundRef.current.volume = 0.2
  }

  return (
    <>
      <audio
        ref={soundRef}
        src="/dog.mp3"
      />

      <Canvas camera={{ fov: 25, position: [0, 0, 8] }}>
        <Sky />
        <ambientLight />
        <PresentationControls global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
          <Suspense fallback={null}>
            <group position-y={-0.75} dispose={null}>
              <Level />
              <Cube />
              <Pyramid />
              <Camera />
              <Cactus />
              <Dog playSound={playSound} />
              <Sphere />
            </group>
          </Suspense>
        </PresentationControls>
      </Canvas>
      <Loader />
    </>
  )
}
