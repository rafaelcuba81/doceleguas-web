import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Large Logo Column */}
          <div className="lg:col-span-1 animate-fadeInLeft flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <img 
                src="/recurso-12ldpi-85x127.png" 
                alt="Doce Leguas Logo" 
                className="h-32 w-auto"
              />
            </div>
          </div>

          {/* Company Info */}
          <div className="lg:col-span-1 animate-fadeInLeft" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center space-x-2 mb-4 hover-scale transition-transform duration-300">
              <img 
                src="/recurso-12ldpi-85x127.png" 
                alt="Doce Leguas Logo" 
                className="h-6 w-auto animate-float"
              />
              <span className="font-bold text-lg">Doce Leguas</span>
            </div>
            <p className="text-gray-400 mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <Linkedin className="h-5 w-5 text-gray-400 cursor-pointer hover-scale transition-all duration-300" onMouseEnter={(e) => e.currentTarget.style.color = '#5c9c98'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'} />
              <Twitter className="h-5 w-5 text-gray-400 cursor-pointer hover-scale transition-all duration-300" onMouseEnter={(e) => e.currentTarget.style.color = '#5c9c98'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'} />
              <Facebook className="h-5 w-5 text-gray-400 cursor-pointer hover-scale transition-all duration-300" onMouseEnter={(e) => e.currentTarget.style.color = '#5c9c98'} onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  {t('nav.solutions')}
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  {t('nav.projects')}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  {t('nav.about')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <h3 className="font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  Openbravo ERP
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  Odoo Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  Custom Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  Process Automation
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  Technical Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fadeInRight" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-semibold mb-4">{t('footer.contactInfo')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 hover:translate-x-1 transition-transform duration-300">
                <Mail className="h-4 w-4" style={{ color: '#5c9c98' }} />
                <span className="text-gray-400">info@doceleguas.com</span>
              </div>
              <div className="flex items-center space-x-3 hover:translate-x-1 transition-transform duration-300">
                <Phone className="h-4 w-4" style={{ color: '#5c9c98' }} />
                <div className="text-gray-400">
                  <div>+34 666 49 37 11</div>
                  <div>+598 95 751 736</div>
                  <div>+1 829 486-2763</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 hover:translate-x-1 transition-transform duration-300">
                <MapPin className="h-4 w-4" style={{ color: '#5c9c98' }} />
                <div className="text-gray-400 space-y-1">
                  <div>Spain</div>
                  <div>Uruguay</div>
                  <div>Dominican Republic</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Doce Leguas. {t('footer.rights')} <Link to="/analytics" className="text-gray-700 hover:text-gray-500 transition-colors duration-300 text-xs ml-1">·</Link>
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm hover:translate-y-1 transition-all duration-300">
              {t('footer.privacy')}
            </Link>
            <Link to="/legal" className="text-gray-400 hover:text-white text-sm hover:translate-y-1 transition-all duration-300">
              {t('footer.legal')}
            </Link>
            <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm hover:translate-y-1 transition-all duration-300">
              {t('footer.sitemap')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;