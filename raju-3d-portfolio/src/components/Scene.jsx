import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Stars, Sparkles, Text } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Core() {
  const group = useRef();

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.28;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.45) * 0.12;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.55, 2]} />
        <meshStandardMaterial
          color="#172b55"
          emissive="#1559ff"
          emissiveIntensity={1.2}
          metalness={0.85}
          roughness={0.22}
          wireframe
        />
      </mesh>

      <mesh scale={0.76}>
        <icosahedronGeometry args={[1.55, 2]} />
        <meshStandardMaterial
          color="#0a1020"
          emissive="#8b5cf6"
          emissiveIntensity={0.65}
          metalness={0.7}
          roughness={0.3}
          transparent
          opacity={0.8}
        />
      </mesh>

      <Text
        position={[0, 0, 1.25]}
        fontSize={0.42}
        color="#eaf3ff"
        anchorX="center"
        anchorY="middle"
      >
        {"</>"}
      </Text>
    </group>
  );
}

function Orbit({ radius = 2.25, speed = 0.5, offset = 0 }) {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + offset;
    if (!ref.current) return;
    ref.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t * 1.35) * 0.42,
      Math.sin(t) * radius
    );
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.085, 20, 20]} />
      <meshStandardMaterial
        color="#73a7ff"
        emissive="#4f8cff"
        emissiveIntensity={4}
      />
    </mesh>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <pointLight position={[3, 3, 4]} intensity={18} color="#4d8dff" />
      <pointLight position={[-4, -2, 2]} intensity={10} color="#8b5cf6" />
      <Environment preset="night" />

      <Stars radius={30} depth={20} count={900} factor={1.2} saturation={0} fade speed={0.35} />
      <Sparkles count={90} scale={[8, 5, 8]} size={1.8} speed={0.25} color="#75a8ff" />

      <Float speed={1.1} rotationIntensity={0.22} floatIntensity={0.42}>
        <Core />
      </Float>

      <Orbit radius={2.45} speed={0.55} />
      <Orbit radius={2.45} speed={0.55} offset={2.1} />
      <Orbit radius={2.45} speed={0.55} offset={4.2} />
    </>
  );
}

export default function Scene() {
  return (
    <div className="scene-wrap" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 7.2], fov: 42 }} dpr={[1, 1.7]}>
        <SceneContent />
      </Canvas>
    </div>
  );
}