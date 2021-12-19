import { Suspense } from "react";
import { Loader, Sky, PresentationControls } from '@react-three/drei'
import { Canvas } from "@react-three/fiber";
import { Level } from "../components/Level";
import { Cube } from "../components/Cube";
import { Pyramid } from "../components/Pyramid";

export default function Index() { 
  return (
    <>
      <Canvas camera={{ fov: 25, position: [0, 0, 8] }}>
        <Sky />
        <ambientLight />
        <PresentationControls global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
          <Suspense fallback={null}>
            <group position-y={-0.75} dispose={null}>
              <Level />
              <Cube />
              <Pyramid />
            </group>
          </Suspense>
        </PresentationControls>
      </Canvas>
      <Loader />
    </>
  )
}
