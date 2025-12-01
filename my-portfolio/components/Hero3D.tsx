"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />

        <Sphere args={[1.2, 64, 64]}>
          <MeshDistortMaterial
            distort={0.3}
            speed={2}
            color="#10f3a0"
            roughness={0}
          />
        </Sphere>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
