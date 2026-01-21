"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, MeshDistortMaterial, Float, Stars, Sparkles } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

// Planet 1: Emerald-tinted Gas Giant (Growth)
function EmeraldPlanet({ position, scale }: { position: [number, number, number], scale: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.002;
        }
    });

    return (
        <Float floatIntensity={1} rotationIntensity={0.5} speed={1}>
            <mesh ref={meshRef} position={position} scale={scale}>
                <sphereGeometry args={[1, 64, 64]} />
                <MeshDistortMaterial
                    color="#10B981"
                    emissive="#064E3B"
                    emissiveIntensity={0.2}
                    roughness={0.4}
                    metalness={0.8}
                    distort={0.4}
                    speed={2}
                />
                {/* Atmosphere Glow */}
                <mesh scale={1.2}>
                    <sphereGeometry args={[1, 32, 32]} />
                    <meshBasicMaterial color="#34D399" transparent opacity={0.05} side={THREE.BackSide} />
                </mesh>
            </mesh>
        </Float>
    );
}

// Planet 2: Gold-veined Rocky Planet (Value)
function GoldPlanet({ position, scale }: { position: [number, number, number], scale: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y -= 0.001;
            meshRef.current.rotation.z += 0.0005;
        }
    });

    return (
        <Float floatIntensity={2} rotationIntensity={1} speed={0.8}>
            <group position={position} scale={scale}>
                {/* Dark Rock Base */}
                <mesh ref={meshRef}>
                    <icosahedronGeometry args={[1, 5]} />
                    <meshStandardMaterial
                        color="#1F2937" // Charcoal Rock
                        roughness={0.9}
                        metalness={0.4}
                        flatShading={true}
                    />
                </mesh>
                {/* Golden Veins (Wireframe Overlay) */}
                <mesh scale={1.001}>
                    <icosahedronGeometry args={[1, 3]} />{/* Lower poly for jagged veins */}
                    <meshStandardMaterial
                        color="#F59E0B"
                        emissive="#F59E0B"
                        emissiveIntensity={2}
                        wireframe={true}
                        transparent
                        opacity={0.8}
                    />
                </mesh>
            </group>
        </Float>
    );
}


function SceneContent() {
    const { width } = useThree((state) => state.viewport);
    const isMobile = width < 10; // Approximate threshold for mobile in 3D units with FOV 35

    // Mouse Parallax Logic
    const groupRef = useRef<THREE.Group>(null);
    useFrame((state) => {
        if (groupRef.current && !isMobile) {
            const { x, y } = state.mouse;
            // Smooth lerp for parallax
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, y * 0.05, 0.1);
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.05, 0.1);
        }
    });

    return (
        <group ref={groupRef}>
            {/* Planet 1: Emerald (Growth) */}
            <EmeraldPlanet
                position={isMobile ? [-1.5, -4, 0] : [-7, 3, -5]}
                scale={isMobile ? 1.5 : 2.5}
            />

            {/* Planet 2: Gold (Value) */}
            <GoldPlanet
                position={isMobile ? [1.5, -6, -2] : [7, -4, -4]}
                scale={isMobile ? 1.8 : 3}
            />


            {/* Background Ambience - optimized counts */}
            <Stars radius={200} depth={100} count={3000} factor={6} saturation={0} fade speed={0.3} />
            <Sparkles count={300} scale={20} size={2} speed={0.3} opacity={0.4} noise={0.1} color="#FFF" />
        </group>
    );
}

export default function Scene() {
    return (
        <div className="w-full h-full absolute inset-0 z-0">
            <Canvas
                camera={{ position: [0, 0, 20], fov: 35 }}
                gl={{
                    antialias: true,
                    alpha: true,
                    toneMapping: THREE.ReinhardToneMapping,
                    toneMappingExposure: 1.5,
                    powerPreference: "high-performance",
                    stencil: false,
                    depth: true
                }}
                dpr={[1, 1.5]} // Reduced max DPR for better performance
                performance={{ min: 0.5 }} // Allow frame rate adaptation
            >
                <Suspense fallback={null}>
                    {/* Cinematic Lighting System */}
                    <ambientLight intensity={0.05} /> {/* Very dark base */}

                    {/* Rim Light (Cool Blue) */}
                    <spotLight
                        position={[-20, 10, 10]}
                        angle={0.3}
                        penumbra={1}
                        intensity={4}
                        color="#60A5FA"
                        castShadow
                    />

                    {/* Main Key Light (Neutral) */}
                    <pointLight position={[10, 10, 10]} intensity={1.5} color="#FFFFFF" />

                    {/* Accent Light (Emerald) */}
                    <pointLight position={[-10, -10, -10]} intensity={2} color="#10B981" distance={50} />

                    <Environment preset="city" blur={0.8} />

                    <SceneContent />
                </Suspense>
            </Canvas>
            {/* Fog/Vignette Overlay for depth perception */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937] via-transparent to-transparent opacity-80 pointer-events-none" />
        </div>
    );
}
