import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Model from './Car'
import Bike from './Bike'
import Cyber from './cBike'
import Car2 from './Car2'
import CatWalk from './CatWalk'

export default function App() {
  return (
    <Canvas>
       {/* camera={{ fov: 50, position: [1, 1.5, 2.5]}} */}
      <ambientLight intensity={0.9} />
      <spotLight position={[10, 10, 10]} angle={0.45} penumbra={1} />
      <pointLight position={[10, 10, -10]} />
      <Suspense fallback={null}>
        {/* <Model /> */}
        {/* <Bike /> */}
        {/* <Car2 /> */}
        {/* <Cyber /> */}
        <CatWalk />
        <OrbitControls />
      </Suspense>
    </Canvas>
  )
}
