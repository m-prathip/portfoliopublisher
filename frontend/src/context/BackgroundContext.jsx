import { createContext, useContext, useState, useEffect } from 'react';

const BackgroundContext = createContext();

export const BACKGROUNDS = [
  // Engine: ParticleEngine
  { id: 'quantum_flux', name: 'Quantum Flux', engine: 'particles', defaultCfg: { speed: 1.5, density: 2.0, glow: 1.0, shape: 'dust' } },
  { id: 'matrix_rain', name: 'Matrix Rain', engine: 'particles', defaultCfg: { speed: 2.0, density: 1.5, glow: 1.5, shape: 'matrix' } },
  { id: 'star_matrix', name: 'Star Matrix', engine: 'particles', defaultCfg: { speed: 0.5, density: 1.0, glow: 0.8, shape: 'stars' } },
  { id: 'hyperspace', name: 'Hyperspace', engine: 'particles', defaultCfg: { speed: 3.0, density: 1.5, glow: 1.2, shape: 'lines' } },
  { id: 'nano_swarm', name: 'Nano Swarm', engine: 'particles', defaultCfg: { speed: 1.2, density: 2.5, glow: 0.5, shape: 'dust' } },
  { id: 'celestial', name: 'Celestial Dust', engine: 'particles', defaultCfg: { speed: 0.2, density: 1.5, glow: 1.0, shape: 'stars' } },

  // Engine: LineEngine
  { id: 'cyber_nexus', name: 'Cyber Nexus', engine: 'lines', defaultCfg: { speed: 1.0, density: 1.2, glow: 1.5, form: 'neural' } },
  { id: 'neon_grid', name: 'Neon Grid', engine: 'lines', defaultCfg: { speed: 1.5, density: 1.0, glow: 2.0, form: 'grid' } },
  { id: 'constellation', name: 'Constellation', engine: 'lines', defaultCfg: { speed: 0.3, density: 0.8, glow: 1.0, form: 'neural' } },
  { id: 'synthwave', name: 'Synthwave Net', engine: 'lines', defaultCfg: { speed: 2.0, density: 1.5, glow: 1.8, form: 'grid' } },
  { id: 'neural_core', name: 'Neural Core', engine: 'lines', defaultCfg: { speed: 0.5, density: 1.5, glow: 1.2, form: 'neural' } },
  { id: 'data_stream', name: 'Data Stream', engine: 'lines', defaultCfg: { speed: 2.5, density: 1.0, glow: 1.0, form: 'grid' } },

  // Engine: GeometryEngine
  { id: 'holo_monolith', name: 'Holo Monolith', engine: 'geometry', defaultCfg: { speed: 0.5, density: 1.0, glow: 1.0, shape: 'icosahedron' } },
  { id: 'crystal_shards', name: 'Crystal Shards', engine: 'geometry', defaultCfg: { speed: 0.8, density: 1.5, glow: 1.5, shape: 'octahedron' } },
  { id: 'floating_cubes', name: 'Tesseract Cubes', engine: 'geometry', defaultCfg: { speed: 1.2, density: 1.0, glow: 0.8, shape: 'cube' } },
  { id: 'obsidian_fractal', name: 'Obsidian Fractal', engine: 'geometry', defaultCfg: { speed: 0.3, density: 2.0, glow: 0.5, shape: 'icosahedron' } },
  { id: 'wireframe_orbs', name: 'Wireframe Orbs', engine: 'geometry', defaultCfg: { speed: 1.5, density: 1.2, glow: 1.2, shape: 'sphere' } },
  { id: 'platonic_solids', name: 'Platonic Solids', engine: 'geometry', defaultCfg: { speed: 1.0, density: 0.8, glow: 1.0, shape: 'mixed' } },

  // Engine: FluidEngine
  { id: 'aurora_borealis', name: 'Aurora Borealis', engine: 'fluid', defaultCfg: { speed: 1.0, density: 1.0, glow: 1.5, flow: 'smooth' } },
  { id: 'liquid_metal', name: 'Liquid Metal', engine: 'fluid', defaultCfg: { speed: 0.5, density: 1.5, glow: 0.8, flow: 'turbulent' } },
  { id: 'quantum_waves', name: 'Quantum Waves', engine: 'fluid', defaultCfg: { speed: 2.0, density: 1.2, glow: 1.2, flow: 'smooth' } },
  { id: 'plasma_field', name: 'Plasma Field', engine: 'fluid', defaultCfg: { speed: 1.5, density: 0.8, glow: 2.0, flow: 'turbulent' } },
  { id: 'ethereal_mist', name: 'Ethereal Mist', engine: 'fluid', defaultCfg: { speed: 0.2, density: 2.0, glow: 0.5, flow: 'smooth' } },
  { id: 'solar_flare', name: 'Solar Flare', engine: 'fluid', defaultCfg: { speed: 2.5, density: 1.0, glow: 1.8, flow: 'turbulent' } },

  // Clean Fallback
  { id: 'off', name: 'Clean (Off)', engine: 'none', defaultCfg: {} }
];

const VALID = BACKGROUNDS.map((b) => b.id);

export const BackgroundProvider = ({ children }) => {
  const [bg, setBgState] = useState('quantum_flux');
  const [bgConfig, setBgConfigState] = useState({}); // user overrides

  const setBg = (id) => { 
    if (VALID.includes(id)) {
      setBgState(id); 
      setBgConfigState({}); // reset config when switching themes
    }
  };

  const updateConfig = (newConfig) => {
    setBgConfigState((prev) => ({ ...prev, ...newConfig }));
  };

  return (
    <BackgroundContext.Provider value={{ bg, setBg, bgConfig, updateConfig, setBgConfigState, backgrounds: BACKGROUNDS }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => useContext(BackgroundContext);
