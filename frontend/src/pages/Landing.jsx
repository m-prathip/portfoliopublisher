import { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import LandingNavbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import PortfolioPreviewSection from '../components/landing/PortfolioPreviewSection';
import QRGeneratorSection from '../components/landing/QRGeneratorSection';
import AIPortfolioSection from '../components/landing/AIPortfolioSection';
import TemplatesSection from '../components/landing/TemplatesSection';
import RecruiterViewSection from '../components/landing/RecruiterViewSection';
import FAQSection from '../components/landing/FAQSection';
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
        <PortfolioPreviewSection />
        <QRGeneratorSection />
        <AIPortfolioSection />
        <TemplatesSection />
        <RecruiterViewSection />
        <FAQSection />
        <CTASection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Landing;