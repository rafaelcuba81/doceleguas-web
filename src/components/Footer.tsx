import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-shimmer"></div>
      </div>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-shimmer"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 animate-fadeInLeft">
            <div className="flex items-center space-x-2 mb-4 hover-scale transition-transform duration-300">
              <Code2 className="h-8 w-8 text-blue-400 animate-float" />
              <span className="font-bold text-xl">Doce Leguas</span>
            </div>
            <p className="text-gray-400 mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer hover-scale transition-all duration-300" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer hover-scale transition-all duration-300" />
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer hover-scale transition-all duration-300" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <h3 className="font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {[
                { name: t('nav.home'), path: '/' },
                { name: t('nav.services'), path: '/services' },
                { name: t('nav.solutions'), path: '/solutions' },
                { name: t('nav.projects'), path: '/projects' },
                { name: t('nav.about'), path: '/about' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">{t('home.services.openbravo')}</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">{t('home.services.odoo')}</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">{t('home.services.ai')}</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">{t('home.services.custom')}</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">{t('home.services.n8n')}</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">{t('home.services.automation')}</span></li>
              <li><span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Technical Consulting</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fadeInRight" style={{ animationDelay: '0.3s' }}>
            <h3 className="font-semibold mb-4">{t('footer.contactInfo')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 hover:translate-x-1 transition-transform duration-300">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">info@doceleguas.com</span>
              </div>
              <div className="flex items-center space-x-3 hover:translate-x-1 transition-transform duration-300">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">+34 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3 hover:translate-x-1 transition-transform duration-300">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-400">Spain</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Doce Leguas. {t('footer.rights')}
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