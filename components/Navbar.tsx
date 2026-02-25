import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  const isDarkText = isHome || scrolled;
  
  const textColorClass = isDarkText ? 'text-neutral-900' : 'text-white';
  
  const containerClass = scrolled 
    ? 'bg-white/80 backdrop-blur-md py-4 border-b border-neutral-200 shadow-sm' 
    : 'bg-transparent py-6 border-b border-transparent';

  const navLinkClass = isDarkText 
    ? 'text-neutral-500 hover:text-purple-600 font-medium' 
    : 'text-white/80 hover:text-white font-medium';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${containerClass}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          
          <div className="flex items-center">
            {isHome ? (
              <div 
                className={`text-base font-bold tracking-widest cursor-pointer ${textColorClass} hover:opacity-80 transition-opacity`} 
                onClick={() => handleNavClick('hero')}
              >
                {language === 'zh' ? '韩 瑜' : 'Han Yu'}
              </div>
            ) : (
              <button 
                onClick={() => navigate('/')}
                className={`flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80 ${textColorClass}`}
              >
                <ArrowLeft size={18} />
                <span>{t.labels.backToHome}</span>
              </button>
            )}
          </div>

          <div className="flex items-center space-x-10 text-sm">
            <button onClick={() => handleNavClick('about')} className={`transition-colors hidden md:block ${navLinkClass}`}>{t.labels.about}</button>
            <button onClick={() => handleNavClick('projects')} className={`transition-colors hidden md:block ${navLinkClass}`}>{t.labels.projects}</button>
            <button onClick={() => handleNavClick('ai-works')} className={`transition-colors hidden md:block ${navLinkClass}`}>{t.labels.aiWorks}</button>
            <button onClick={() => handleNavClick('methods')} className={`transition-colors hidden md:block ${navLinkClass}`}>{t.labels.methods}</button>
            <button onClick={() => handleNavClick('contact')} className={`transition-colors hidden md:block ${navLinkClass}`}>{t.labels.contact}</button>
            
            <button 
              onClick={toggleLanguage} 
              className={`flex items-center gap-1 transition-all border rounded-full px-4 py-1.5 text-xs tracking-wide ${navLinkClass} ${isDarkText ? 'border-neutral-300 bg-white/50 hover:bg-pink-50 hover:text-purple-600 hover:border-purple-200' : 'border-white/30 bg-black/10'}`}
            >
              <span className={language === 'zh' ? 'font-bold' : 'opacity-70'}>中</span>
              <span className="opacity-50">/</span>
              <span className={language === 'en' ? 'font-bold' : 'opacity-70'}>En</span>
            </button>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;