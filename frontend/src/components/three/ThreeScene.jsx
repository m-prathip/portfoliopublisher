import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { BACKGROUNDS } from '../../context/BackgroundContext';

// ── ParticleEngine: Handles dust, matrix rain, starfields ──
function ParticleEngine({ color, config }) {
  const { speed = 1, density = 1, glow = 1, shape = 'dust' } = config;
  const count = useMemo(() => Math.floor(1000 * density), [density]);
  const ref = useRef();
  
  const positions = useMemo(() => {
    const a = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      if (shape === 'matrix') {
        a[i] = (Math.random() - 0.5) * 20;
      } else {
        a[i] = (Math.random() - 0.5) * 12;
      }
    }
    return a;
  }, [count, shape]);

  useFrame((s, dt) => {
    if (!ref.current) return;
    const timeSpeed = dt * speed;
    if (shape === 'matrix') {
      const pos = ref.current.geometry.attributes.position;
      for (let i = 1; i < pos.count * 3; i += 3) {
        pos.array[i] -= timeSpeed * 5;
        if (pos.array[i] < -10) pos.array[i] = 10;
      }
      pos.needsUpdate = true;
    } else if (shape === 'lines') {
      ref.current.position.z += timeSpeed * 10;
      if (ref.current.position.z > 5) ref.current.position.z = -5;
    } else {
      ref.current.rotation.y += timeSpeed * 0.05;
      ref.current.rotation.x += timeSpeed * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial 
        size={shape === 'stars' ? 0.05 : 0.035} 
        color={color} 
        transparent 
        opacity={0.8 * glow} 
        sizeAttenuation 
        depthWrite={false} 
      />
    </points>
  );
}

// ── LineEngine: Handles neural nets, cyber grids, constellations ──
function LineEngine({ color, config }) {
  const { speed = 1, density = 1, glow = 1, form = 'neural' } = config;
  const count = useMemo(() => Math.floor(120 * density), [density]);
  const group = useRef();

  const { nodes, lines } = useMemo(() => {
    if (form === 'grid') return { nodes: new Float32Array(0), lines: new Float32Array(0) };
    const n = new Float32Array(count * 3);
    const pts = [];
    for (let i = 0; i < count; i++) {
      const v = [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6];
      pts.push(v); n.set(v, i * 3);
    }
    const seg = [];
    for (let i = 0; i < count; i++)
      for (let j = i + 1; j < count; j++) {
        const a = pts[i], b = pts[j];
        const d = Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
        if (d < 1.2) { seg.push(...a, ...b); }
      }
    return { nodes: n, lines: new Float32Array(seg) };
  }, [count, form]);

  useFrame((s, dt) => { 
    if (group.current) {
      if (form === 'grid') {
        group.current.position.z = (group.current.position.z + dt * speed * 2) % 2;
      } else {
        group.current.rotation.y += dt * 0.05 * speed; 
      }
    }
  });

  if (form === 'grid') {
    return (
      <group rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -2, 0]} ref={group}>
        <gridHelper args={[60, Math.floor(80 * density), color, color]} material-opacity={0.3 * glow} material-transparent />
      </group>
    );
  }

  return (
    <group ref={group}>
      <points>
        <bufferGeometry><bufferAttribute attach="attributes-position" count={count} array={nodes} itemSize={3} /></bufferGeometry>
        <pointsMaterial size={0.07} color={color} transparent opacity={0.9 * glow} depthWrite={false} />
      </points>
      <lineSegments>
        <bufferGeometry><bufferAttribute attach="attributes-position" count={lines.length / 3} array={lines} itemSize={3} /></bufferGeometry>
        <lineBasicMaterial color={color} transparent opacity={0.2 * glow} />
      </lineSegments>
    </group>
  );
}

// ── GeometryEngine: Handles floating crystals, cubes, monoliths ──
function GeometryEngine({ color, config }) {
  const { speed = 1, density = 1, glow = 1, shape = 'icosahedron' } = config;
  const count = useMemo(() => Math.floor(10 * density), [density]);
  
  const items = useMemo(() => Array.from({ length: count }, () => ({
    p: [(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8],
    s: 0.5 + Math.random() * 1.5,
    rs: [(Math.random() - 0.5) * 0.05, (Math.random() - 0.5) * 0.05, 0],
    type: shape === 'mixed' ? (Math.random() > 0.5 ? 'cube' : 'sphere') : shape
  })), [count, shape]);
  
  const group = useRef();
  useFrame((s) => {
    if (!group.current) return;
    group.current.children.forEach((m, i) => {
      m.rotation.x += items[i].rs[0] * speed;
      m.rotation.y += items[i].rs[1] * speed;
    });
    group.current.rotation.y = s.clock.elapsedTime * 0.05 * speed;
  });

  return (
    <group>
      <group ref={group}>
        {items.map((it, i) => (
          <mesh key={i} position={it.p}>
            {it.type === 'cube' && <boxGeometry args={[it.s, it.s, it.s]} />}
            {it.type === 'sphere' && <sphereGeometry args={[it.s, 24, 24]} />}
            {it.type === 'icosahedron' && <icosahedronGeometry args={[it.s, 0]} />}
            {it.type === 'octahedron' && <octahedronGeometry args={[it.s, 0]} />}
            <meshStandardMaterial color={color} transparent opacity={0.4 * glow} wireframe={shape === 'cube'} roughness={0.1} metalness={0.6} />
          </mesh>
        ))}
      </group>
      <ambientLight intensity={0.5 * glow} />
      <directionalLight position={[10, 10, 5]} intensity={1.5 * glow} color={color} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5 * glow} color="#ffffff" />
    </group>
  );
}

// ── FluidEngine: Handles auroras, waves, liquid gradients ──
function FluidEngine({ color, config }) {
  const { speed = 1, density = 1, glow = 1, flow = 'smooth' } = config;
  const geo = useRef();
  const seg = Math.floor(64 * density);
  
  useFrame((s) => {
    const g = geo.current; if (!g) return;
    const t = s.clock.elapsedTime * speed;
    const pos = g.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), y = pos.getY(i);
      let z = 0;
      if (flow === 'turbulent') {
        z = Math.sin(x * 1.5 + t) * Math.cos(y * 1.5 + t) * 0.5;
      } else {
        z = Math.sin(x * 0.6 + t) * 0.4 + Math.cos(y * 0.6 + t) * 0.4;
      }
      pos.setZ(i, z);
    }
    pos.needsUpdate = true;
  });

  return (
    <mesh rotation={[-Math.PI / 2.3, 0, 0]} position={[0, -1.5, 0]}>
      <planeGeometry ref={geo} args={[20, 20, seg, seg]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.3 * glow} />
    </mesh>
  );
}

const ENGINES = {
  particles: ParticleEngine,
  lines: LineEngine,
  geometry: GeometryEngine,
  fluid: FluidEngine,
  none: () => null
};

export default function ThreeScene({ variant = 'off', color = '#10a37f', config = {} }) {
  // Find the requested background preset
  const preset = BACKGROUNDS.find(b => b.id === variant) || BACKGROUNDS[0];
  const Engine = ENGINES[preset.engine] || ENGINES.none;
  
  // Merge preset defaults with user config overrides
  const finalConfig = { ...preset.defaultCfg, ...config };

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, preset.engine === 'fluid' || preset.engine === 'lines' ? 2 : 0, 7], fov: 60 }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <Engine color={color} config={finalConfig} />
    </Canvas>
  );
}
