import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import { Canvas } from '@react-three/fiber'

function App() {

  return (
    <div id="canvas-container" style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        {/* <Sky distance={450000} sunPosition={[0,1,0]} inclination={0} azimuth={0.25} {...props} /> */}

        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App
