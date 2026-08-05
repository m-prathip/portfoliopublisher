import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FiDroplet, FiSun, FiMoon, FiCheck, FiSliders } from 'react-icons/fi';

const ThemeSwitcher = ({ align = 'right', onThemeSelect, onOpenCustomizer }) => {
  const { mode, setMode, theme, setTheme, themes } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen((o) => !o)} aria-label="Change theme"
        className="p-2 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <FiDroplet size={18} />
      </button>

      {open && (
        <div className={`absolute z-50 mt-2 w-72 ${align === 'right' ? 'right-0' : 'left-0'}
          bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 p-4 animate-fade-in max-h-[80vh] overflow-y-auto`}>
          {/* Mode toggle */}
          <div className="flex items-center gap-1 p-1 mb-4 rounded-xl bg-gray-100 dark:bg-gray-900">
            {[['light', FiSun, 'Light'], ['dark', FiMoon, 'Dark']].map(([m, Icon, label]) => (
              <button key={m} onClick={() => setMode(m)}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-sm font-medium transition-colors
                  ${mode === m ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow-sm'
                               : 'text-gray-500 dark:text-gray-400'}`}>
                <Icon size={14} /> {label}
              </button>
            ))}
          </div>

          {/* Palette preview cards */}
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Theme</p>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {themes.map((t) => {
              const active = t.id === theme;
              return (
                <button key={t.id} onClick={() => {
                  setTheme(t.id);
                  if (onThemeSelect) onThemeSelect(t.id);
                }}
                  className={`group relative flex items-center gap-2 p-2 rounded-xl border transition-all
                    ${active ? 'border-primary-500 ring-2 ring-primary-500/30'
                             : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'}`}>
                  <span className="h-7 w-7 rounded-lg shrink-0 shadow-inner"
                    style={{ background: `linear-gradient(135deg, ${t.swatch[0]}, ${t.swatch[1]})` }} />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-200 truncate">{t.name}</span>
                  {active && <FiCheck className="absolute top-1.5 right-1.5 text-primary-500" size={13} />}
                </button>
              );
            })}
          </div>

          {/* 3D background selector trigger */}
          <button 
            onClick={() => {
              setOpen(false);
              if (onOpenCustomizer) onOpenCustomizer();
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors"
          >
            <FiSliders size={14} /> Customize 3D Background
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
