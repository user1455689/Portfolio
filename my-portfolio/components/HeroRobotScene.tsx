"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

function Robot() {
  const robotRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (robotRef.current) {
      robotRef.current.rotation.y = t * 0.25;
      robotRef.current.position.y = Math.sin(t * 1.2) * 0.3;
    }
  });

  return (
    <group ref={robotRef} scale={1.2}>
      {/* Head */}
      <mesh position={[0, 1.1, 0]}>
        <boxGeometry args={[0.7, 0.5, 0.5]} />
        <meshStandardMaterial color="#0ff7c8" metalness={0.7} roughness={0.2} />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.2, 1.15, 0.30]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial emissive="#00ffff" />
      </mesh>
      <mesh position={[0.2, 1.15, 0.30]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial emissive="#00ffff" />
      </mesh>

      {/* Body */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[1, 0.9, 0.6]} />
        <meshStandardMaterial color="#111827" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.8, 0.6, 0]}>
        <boxGeometry args={[0.3, 0.7, 0.3]} />
        <meshStandardMaterial color="#161b24" />
      </mesh>
      <mesh position={[0.8, 0.6, 0]}>
        <boxGeometry args={[0.3, 0.7, 0.3]} />
        <meshStandardMaterial color="#161b24" />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.3, -0.2, 0]}>
        <boxGeometry args={[0.3, 0.6, 0.3]} />
        <meshStandardMaterial color="#141820" />
      </mesh>
      <mesh position={[0.3, -0.2, 0]}>
        <boxGeometry args={[0.3, 0.6, 0.3]} />
        <meshStandardMaterial color="#141820" />
      </mesh>
    </group>
  );
}

export default function HeroRobotScene() {
  return (
    <div className="absolute inset-0 z-0 min-h-[700px]">
      <Canvas camera={{ position: [0, 1.2, 6], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 5, 2]} intensity={1.3} />
        <Robot />
      </Canvas>
    </div>
  );
}
