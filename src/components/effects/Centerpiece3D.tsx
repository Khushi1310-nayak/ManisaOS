"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Preload } from "@react-three/drei";
import * as THREE from "three";

function OrbitingRing({ radius, speed, rotationX, rotationY }: { radius: number; speed: number; rotationX: number; rotationY: number }) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Create a circle for the orbit path
  const points = [];
  const segments = 64;
  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(theta) * radius, 0, Math.sin(theta) * radius));
  }

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += speed;
    }
  });

  return (
    <group rotation={[rotationX, rotationY, 0]}>
      <Line points={points} color="#decba4" opacity={0.2} transparent lineWidth={1} />
      <group ref={groupRef}>
        <mesh position={[radius, 0, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#ffffff" />
          <pointLight color="#decba4" intensity={2} distance={2} />
        </mesh>
      </group>
    </group>
  );
}

function GlowingSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial 
        color="#0a1212" 
        emissive="#1a2525"
        emissiveIntensity={0.2}
        roughness={0.2}
        metalness={0.8}
        wireframe={true}
        wireframeLinewidth={0.5}
        transparent
        opacity={0.3}
      />
      {/* Inner glowing core */}
      <mesh scale={[0.95, 0.95, 0.95]}>
         <sphereGeometry args={[2, 32, 32]} />
         <meshBasicMaterial color="#3e5151" transparent opacity={0.4} />
      </mesh>
    </mesh>
  );
}

export function Centerpiece3D() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] z-0 opacity-80 pointer-events-none md:pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#decba4" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3e5151" />
        
        <GlowingSphere />
        
        {/* Orbital Rings */}
        <OrbitingRing radius={3} speed={0.005} rotationX={0.2} rotationY={0} />
        <OrbitingRing radius={4} speed={-0.003} rotationX={-0.3} rotationY={0.5} />
        <OrbitingRing radius={3.5} speed={0.004} rotationX={0.8} rotationY={-0.2} />

        <Preload all />
      </Canvas>
    </div>
  );
}
