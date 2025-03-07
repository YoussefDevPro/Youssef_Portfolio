"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"

interface ModelViewerProps {
  modelPath: string
  scale?: number
  position?: [number, number, number]
  rotation?: [number, number, number]
}

function Model({ modelPath, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }: ModelViewerProps) {
  const { scene } = useGLTF(modelPath)
  
  return (
    <primitive 
      object={scene} 
      scale={scale} 
      position={position} 
      rotation={rotation} 
    />
  )
}

export default function ModelViewer({ modelPath, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }: ModelViewerProps) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model 
            modelPath={modelPath} 
            scale={scale} 
            position={position} 
            rotation={rotation} 
          />
        </Suspense>
        <OrbitControls enableZoom={true} autoRotate />
      </Canvas>
    </div>
  )
}