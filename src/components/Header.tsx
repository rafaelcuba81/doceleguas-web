import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.solutions'), href: '/solutions' },
    { name: t('nav.projects'), href: '/projects' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover-scale transition-transform duration-300">
            <img 
              src="/recurso-12ldpi-85x127.png" 
              alt="Doce Leguas Logo" 
              className="h-8 w-auto animate-float"
            />
            <span className="font-bold text-xl text-gray-900">Doce Leguas</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <LanguageSwitcher />
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-all duration-300 hover-lift relative ${
                  isActive(item.href)
                    ? 'text-blue-700'
                    : 'text-gray-700 hover:text-blue-700 hover:scale-105'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-700 animate-fadeInUp"></div>
                )}
                {isActive(item.href) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-700 animate-fadeInUp"></div>
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-white px-6 py-2 rounded-lg font-medium hover-lift hover-glow transition-all duration-300 transform"
              style={{ backgroundColor: '#5c9c98' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4a8480'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5c9c98'}
            >
              {t('nav.getStarted')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-700 hover-scale transition-all duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fadeInUp">
            <div className="flex flex-col space-y-4">
              <div className="px-4">
                <LanguageSwitcher />
              </div>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-all duration-300 hover:translate-x-2 ${
                    isActive(item.href) ? 'text-blue-700' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-white px-6 py-2 rounded-lg font-medium text-center hover-lift transition-all duration-300 transform"
                style={{ backgroundColor: '#5c9c98' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4a8480'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5c9c98'}
              >
                {t('nav.getStarted')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;