import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Globe className="h-4 w-4 text-gray-600" />
      <div className="flex bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
            language === 'en'
              ? 'bg-white text-blue-700 shadow-sm'
              : 'text-gray-600 hover:text-blue-700'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('es')}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
            language === 'es'
              ? 'bg-white text-blue-700 shadow-sm'
              : 'text-gray-600 hover:text-blue-700'
          }`}
        >
          ES
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;