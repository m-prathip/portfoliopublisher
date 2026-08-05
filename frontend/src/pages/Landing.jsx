import { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import LandingNavbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import CTASection from '../components/landing/CTASection';
import FooterSection from '../components/landing/FooterSection';

const Landing = () => {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme('apple');
    // Ensure clean light mode for the landing page
    document.documentElement.classList.remove('dark');
    return () => {};
  }, [setTheme]);

  return (
    <div className="landing-root min-h-screen bg-[#FAFAFA] text-slate-900 overflow-x-hidden antialiased">
      <LandingNavbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Landing;