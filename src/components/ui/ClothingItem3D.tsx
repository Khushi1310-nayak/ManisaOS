"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshWobbleMaterial } from "@react-three/drei";
import { useMemo } from "react";

function BlazerModel() {
  return (
    <group scale={0.8} position={[0, -0.1, 0]}>
      {/* Torso */}
      <mesh>
        <boxGeometry args={[0.7, 1.1, 0.4]} />
        <meshStandardMaterial color="#decba4" roughness={0.3} metalness={0.1} />
      </mesh>
      {/* Lapels */}
      <mesh position={[0, 0.2, 0.22]} rotation={[0.5, 0, 0]}>
        <boxGeometry args={[0.3, 0.6, 0.05]} />
        <meshStandardMaterial color="#c5b08a" />
      </mesh>
      {/* Sleeves */}
      <mesh position={[0.45, 0.1, 0]} rotation={[0, 0, -0.2]}>
        <cylinderGeometry args={[0.12, 0.1, 0.8, 16]} />
        <meshStandardMaterial color="#decba4" />
      </mesh>
      <mesh position={[-0.45, 0.1, 0]} rotation={[0, 0, 0.2]}>
        <cylinderGeometry args={[0.12, 0.1, 0.8, 16]} />
        <meshStandardMaterial color="#decba4" />
      </mesh>
    </group>
  );
}

function TrousersModel() {
  return (
    <group scale={0.8} position={[0, -0.2, 0]}>
      {/* Waist */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[0.6, 0.2, 0.3]} />
        <meshStandardMaterial color="#c5b08a" />
      </mesh>
      {/* Legs */}
      <mesh position={[0.18, -0.2, 0]}>
        <boxGeometry args={[0.25, 1.2, 0.25]} />
        <meshStandardMaterial color="#c5b08a" />
      </mesh>
      <mesh position={[-0.18, -0.2, 0]}>
        <boxGeometry args={[0.25, 1.2, 0.25]} />
        <meshStandardMaterial color="#c5b08a" />
      </mesh>
    </group>
  );
}

function SweaterModel() {
  return (
    <group scale={0.9} position={[0, -0.1, 0]}>
      <mesh>
        <capsuleGeometry args={[0.4, 0.7, 4, 16]} />
        <MeshWobbleMaterial factor={0.1} speed={1} color="#f5f5f5" />
      </mesh>
      <mesh position={[0.5, 0.2, 0]} rotation={[0, 0, -0.5]}>
        <capsuleGeometry args={[0.12, 0.4, 4, 12]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>
      <mesh position={[-0.5, 0.2, 0]} rotation={[0, 0, 0.5]}>
        <capsuleGeometry args={[0.12, 0.4, 4, 12]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>
    </group>
  );
}

function BagModel() {
  return (
    <group scale={1} position={[0, -0.2, 0]}>
      <mesh>
        <boxGeometry args={[0.8, 0.6, 0.3]} />
        <meshStandardMaterial color="#8b4513" roughness={0.1} metalness={0.2} />
      </mesh>
      <mesh position={[0, 0.4, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.25, 0.04, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

function ShoeModel() {
  return (
    <group scale={1} position={[0, -0.2, 0]} rotation={[0, -Math.PI / 4, 0]}>
      {/* Sole */}
      <mesh>
        <boxGeometry args={[0.8, 0.1, 0.3]} />
        <meshStandardMaterial color="#decba4" />
      </mesh>
      {/* Heel */}
      <mesh position={[-0.3, -0.2, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.5, 8]} />
        <meshStandardMaterial color="#decba4" />
      </mesh>
      {/* Front */}
      <mesh position={[0.2, 0.1, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <sphereGeometry args={[0.25, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#decba4" />
      </mesh>
    </group>
  );
}

export function ClothingItem3D({ type }: { type: "blazer" | "trousers" | "sweater" | "bag" | "shoe" }) {
  const Model = useMemo(() => {
    switch (type) {
      case "blazer": return <BlazerModel />;
      case "trousers": return <TrousersModel />;
      case "sweater": return <SweaterModel />;
      case "bag": return <BagModel />;
      case "shoe": return <ShoeModel />;
      default: return <BlazerModel />;
    }
  }, [type]);

  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 3], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#decba4" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3e5151" />
        
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          {Model}
        </Float>
        
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
