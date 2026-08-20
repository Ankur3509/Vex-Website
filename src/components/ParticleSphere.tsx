"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const SPHERE_COUNT = 620;
const HAZE_COUNT = 900;

// Deterministic PRNG — same sphere every render (no Math.random in React)
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type PointCloudProps = {
  count: number;
  radius: number;
  size: number;
  opacity: number;
  palette: string[];
  ring?: boolean;
};

function PointCloud({
  count,
  radius,
  size,
  opacity,
  palette,
  ring = false,
}: PointCloudProps) {
  const ref = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorParsed = palette.map((hex) => new THREE.Color(hex));
    const rand = mulberry32(1337 + count + radius * 100);

    // Golden-ratio (Fibonacci) spiral sphere distribution
    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const jitter = 0.015;

      pos[i * 3] = (r * Math.cos(theta) + (rand() - 0.5) * jitter) * radius;
      pos[i * 3 + 1] = y * radius + (rand() - 0.5) * jitter;
      pos[i * 3 + 2] = (r * Math.sin(theta) + (rand() - 0.5) * jitter) * radius;

      const c = colorParsed[Math.floor(rand() * colorParsed.length)];
      const dim = 0.35 + rand() * 0.65;
      col[i * 3] = c.r * dim;
      col[i * 3 + 1] = c.g * dim;
      col[i * 3 + 2] = c.b * dim;
    }
    return { positions: pos, colors: col };
  }, [count, radius, palette]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.07;
    ref.current.rotation.x = Math.sin(t * 0.12) * 0.08;
    const pulse = 1 + Math.sin(t * 0.55) * 0.025;
    ref.current.scale.setScalar(pulse);
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        sizeAttenuation
        transparent
        opacity={opacity}
        vertexColors
        depthWrite={false}
        blending={ring ? THREE.AdditiveBlending : THREE.NormalBlending}
      />
    </points>
  );
}

function OrbitRings() {
  const group = useRef<THREE.Group>(null);
  const geo = useMemo(() => {
    const segments = 128;
    const verts: number[] = [];
    for (let i = 0; i <= segments; i++) {
      const a = (i / segments) * Math.PI * 2;
      verts.push(Math.cos(a) * 1.55, Math.sin(a) * 1.55, 0);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
    return g;
  }, []);

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.rotation.x = 1.35 + Math.sin(t * 0.2) * 0.05;
    group.current.rotation.z = t * 0.04;
  });

  return (
    <group ref={group} rotation={[1.35, 0, 0]}>
      <line>
        <primitive object={geo} attach="geometry" />
        <lineBasicMaterial
          color="#00e8ff"
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
        />
      </line>
    </group>
  );
}

function PointerTilt() {
  const { pointer } = useThree();
  const group = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y += (pointer.x * 0.22 - group.current.rotation.y) * 0.05;
    group.current.rotation.x += (-pointer.y * 0.14 - group.current.rotation.x) * 0.05;
  });

  return (
    <group ref={group}>
      <PointCloud
        count={SPHERE_COUNT}
        radius={1.5}
        size={0.045}
        opacity={0.9}
        palette={["#00e8ff", "#12d6c4", "#57f6ff", "#7a5cff"]}
      />
      <OrbitRings />
    </group>
  );
}

function Haze() {
  return (
    <PointCloud
      count={HAZE_COUNT}
      radius={3.4}
      size={0.028}
      opacity={0.32}
      palette={["#00e8ff", "#12d6c4"]}
      ring
    />
  );
}

export default function ParticleSphere() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.4} />
      <PointerTilt />
      <Haze />
    </Canvas>
  );
}