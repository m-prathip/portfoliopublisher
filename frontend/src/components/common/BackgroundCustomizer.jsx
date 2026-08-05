import { useState, useEffect } from 'react';
import { useBackground } from '../../context/BackgroundContext';
import { FiX, FiSliders, FiCheck } from 'react-icons/fi';
import { profileAPI } from '../../services/api';
import toast from 'react-hot-toast';

const BackgroundCustomizer = ({ isOpen, onClose }) => {
  const { bg, setBg, bgConfig, updateConfig, backgrounds } = useBackground();
  
  // Local state for sliders so it doesn't lag if we throttle
  const [speed, setSpeed] = useState(bgConfig.speed ?? 1.0);
  const [density, setDensity] = useState(bgConfig.density ?? 1.0);
  const [glow, setGlow] = useState(bgConfig.glow ?? 1.0);

  // Sync when context changes (e.g. preset changed)
  useEffect(() => {
    const preset = backgrounds.find(b => b.id === bg) || backgrounds[0];
    setSpeed(bgConfig.speed ?? preset.defaultCfg?.speed ?? 1.0);
    setDensity(bgConfig.density ?? preset.defaultCfg?.density ?? 1.0);
    setGlow(bgConfig.glow ?? preset.defaultCfg?.glow ?? 1.0);
  }, [bg, bgConfig, backgrounds]);

  const handleApply = (newValues) => {
    updateConfig(newValues);
  };

  const saveToBackend = async () => {
    try {
      const fd = new FormData();
      fd.append('background', bg);
      fd.append('backgroundConfig', JSON.stringify({ speed, density, glow }));
      await profileAPI.updateMine(fd);
      toast.success('Background saved successfully');
      onClose();
    } catch (err) {
      toast.error('Failed to save background settings');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-gray-700">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <FiSliders /> Customize 3D Background
          </h2>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
            <FiX size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8 flex flex-col md:flex-row gap-8">
          {/* Preset Selector */}
          <div className="flex-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">1. Select Theme Preset</h3>
            <div className="grid grid-cols-2 gap-2 max-h-[40vh] md:max-h-none overflow-y-auto pr-2 custom-scrollbar">
              {backgrounds.map(b => (
                <button 
                  key={b.id} 
                  onClick={() => setBg(b.id)}
                  className={`px-3 py-2 text-xs font-medium text-left rounded-lg border transition-all ${
                    bg === b.id 
                      ? 'border-primary-500 bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 ring-1 ring-primary-500' 
                      : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-gray-300'
                  }`}
                >
                  {b.name}
                </button>
              ))}
            </div>
          </div>

          {/* Customization Sliders */}
          <div className="flex-1 border-t md:border-t-0 md:border-l border-gray-100 dark:border-gray-700 pt-6 md:pt-0 md:pl-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">2. Fine-tune Settings</h3>
            {bg === 'off' ? (
              <p className="text-sm text-gray-500">Settings are disabled when background is off.</p>
            ) : (
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Animation Speed</label>
                    <span className="text-xs text-gray-500">{speed.toFixed(1)}x</span>
                  </div>
                  <input type="range" min="0.1" max="3.0" step="0.1" value={speed} 
                    onChange={(e) => {
                      const v = parseFloat(e.target.value);
                      setSpeed(v);
                      handleApply({ speed: v });
                    }}
                    className="w-full accent-primary-500" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Particle/Element Density</label>
                    <span className="text-xs text-gray-500">{density.toFixed(1)}x</span>
                  </div>
                  <input type="range" min="0.1" max="3.0" step="0.1" value={density} 
                    onChange={(e) => {
                      const v = parseFloat(e.target.value);
                      setDensity(v);
                      handleApply({ density: v });
                    }}
                    className="w-full accent-primary-500" />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Glow Intensity</label>
                    <span className="text-xs text-gray-500">{glow.toFixed(1)}x</span>
                  </div>
                  <input type="range" min="0.0" max="3.0" step="0.1" value={glow} 
                    onChange={(e) => {
                      const v = parseFloat(e.target.value);
                      setGlow(v);
                      handleApply({ glow: v });
                    }}
                    className="w-full accent-primary-500" />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="p-5 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex justify-end gap-3">
          <button onClick={onClose} className="px-5 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-colors">
            Cancel
          </button>
          <button onClick={saveToBackend} className="px-5 py-2.5 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-xl shadow-sm flex items-center gap-2 transition-colors">
            <FiCheck /> Save & Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundCustomizer;
