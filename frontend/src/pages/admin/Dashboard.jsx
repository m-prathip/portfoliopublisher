import { useState } from 'react';
import { NavLink, Outlet, useNavigate, useParams, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import ThemeSwitcher from '../../components/common/ThemeSwitcher';
import BackgroundCustomizer from '../../components/common/BackgroundCustomizer';
import { profileAPI } from '../../services/api';
import { FiHome, FiUser, FiBookOpen, FiBriefcase, FiCode, FiAward, FiActivity, FiLogOut, FiSun, FiMoon, FiMenu, FiShare2, FiFileText, FiGlobe } from 'react-icons/fi';
import toast from 'react-hot-toast';

const NAV_ITEMS = [
  { to: 'profile', icon: <FiUser size={18} />, label: 'Profile' },
  { to: 'share', icon: <FiShare2 size={18} />, label: 'Share' },
  { to: 'education', icon: <FiBookOpen size={18} />, label: 'Education' },
  { to: 'experience', icon: <FiBriefcase size={18} />, label: 'Experience' },
  { to: 'projects', icon: <FiCode size={18} />, label: 'Projects' },
  { to: 'skills', icon: <FiActivity size={18} />, label: 'Skills' },
  { to: 'whyhire', icon: <FiAward size={18} />, label: 'Why Hire Me' },
  { to: 'achievements', icon: <FiAward size={18} />, label: 'Achievements' },
  { to: 'activities', icon: <FiGlobe size={18} />, label: 'Activities' },
  { to: 'certificates', icon: <FiFileText size={18} />, label: 'Certificates' },
];

const AdminLayout = () => {
  const { logout, user } = useAuth();
  const { dark, toggle } = useTheme();
  const { dashboardId } = useParams();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [customizerOpen, setCustomizerOpen] = useState(false);

  const handleLogout = () => {
    logout();
    toast.success('Logged out');
    navigate('/auth/login');
  };

  const handleThemeChange = async (t) => {
    try {
      const fd = new FormData();
      fd.append('theme', t);
      await profileAPI.updateMine(fd);
    } catch (err) {
      console.error('Failed to save theme', err);
    }
  };

  const handleModeChange = async (m) => {
    try {
      const fd = new FormData();
      fd.append('mode', m);
      await profileAPI.updateMine(fd);
    } catch (err) {
      console.error('Failed to save mode', err);
    }
  };

  const linkCls = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
      ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400'
      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
    }`;

  const Sidebar = ({ mobile = false }) => (
    <div className={`${mobile ? 'w-64' : 'w-64 hidden lg:flex'} flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-full`}>
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <Link to="/" className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-bold text-lg">
          <FiHome size={20} /> Portfolio Admin
        </Link>
        <p className="text-xs text-gray-500 mt-1 truncate">{user?.email}</p>
        {user?.username && <p className="text-xs text-primary-600 dark:text-primary-400 truncate">@{user.username}</p>}
      </div>
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {NAV_ITEMS.map(item => (
          <NavLink key={item.to} to={`/${dashboardId}/${item.to}`} className={linkCls} onClick={() => setSidebarOpen(false)}>
            {item.icon} {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="p-3 border-t border-gray-200 dark:border-gray-700 space-y-1">
        <a href={user?.username ? `/u/${user.username}` : '/'} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <FiGlobe size={18} /> View Portfolio
        </a>
        <button onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
          <FiLogOut size={18} /> Logout
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 relative">
      <Sidebar />

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="relative w-64 h-full"><Sidebar mobile /></div>
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between z-10 relative">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
            <FiMenu size={20} />
          </button>
          <h1 className="font-semibold text-gray-900 dark:text-white hidden sm:block">Dashboard</h1>
          <div className="flex items-center gap-2 ml-auto">
            <ThemeSwitcher onThemeSelect={handleThemeChange} onModeSelect={handleModeChange} onOpenCustomizer={() => setCustomizerOpen(true)} />
            <button 
              onClick={() => {
                toggle();
                handleModeChange(dark ? 'light' : 'dark');
              }} 
              className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 z-0">
          <Outlet />
        </main>
      </div>
      
      {/* 3D Background Customizer Modal */}
      <BackgroundCustomizer isOpen={customizerOpen} onClose={() => setCustomizerOpen(false)} />
    </div>
  );
};

export default AdminLayout;
