import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Settings, Brain, Code, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ServicesPage = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'openbravo',
      icon: <Database className="h-12 w-12" />,
      title: t('services.openbravo.title'),
      description: t('services.openbravo.description'),
      benefits: t('services.openbravo.benefits'),
      keyPoints: [
        t('services.openbravo.point1'),
        t('services.openbravo.point2'),
        t('services.openbravo.point3'),
        t('services.openbravo.point4')
      ],
      cta: t('services.openbravo.cta'),
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'odoo',
      icon: <Settings className="h-12 w-12" />,
      title: t('services.odoo.title'),
      description: t('services.odoo.description'),
      benefits: t('services.odoo.benefits'),
      keyPoints: [
        t('services.odoo.point1'),
        t('services.odoo.point2'),
        t('services.odoo.point3'),
        t('services.odoo.point4'),
        t('services.odoo.point5')
      ],
      cta: t('services.odoo.cta'),
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'ai',
      icon: <Brain className="h-12 w-12" />,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      benefits: t('services.ai.benefits'),
      keyPoints: [
        t('services.ai.point1'),
        t('services.ai.point2'),
        t('services.ai.point3'),
        t('services.ai.point4'),
        t('services.ai.point5'),
        t('services.ai.point6'),
        t('services.ai.point7'),
        t('services.ai.point8')
      ],
      cta: t('services.ai.cta'),
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'custom',
      icon: <Code className="h-12 w-12" />,
      title: t('services.custom.title'),
      description: t('services.custom.description'),
      benefits: t('services.custom.benefits'),
      keyPoints: [
        t('services.custom.point1'),
        t('services.custom.point2'),
        t('services.custom.point3'),
        t('services.custom.point4'),
        t('services.custom.point5')
      ],
      cta: t('services.custom.cta'),
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'consulting',
      icon: <MessageSquare className="h-12 w-12" />,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      benefits: t('services.consulting.benefits'),
      keyPoints: [
        t('services.consulting.point1'),
        t('services.consulting.point2'),
        t('services.consulting.point3'),
        t('services.consulting.point4'),
        t('services.consulting.point5')
      ],
      cta: t('services.consulting.cta'),
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        {/* Abstract Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Software development and services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white bg-opacity-85"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed relative z-10">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-20 h-20 rounded-xl flex items-center justify-center mb-8" style={{ backgroundColor: '#e8f4f3' }}>
                    <div style={{ color: '#5c9c98' }}>{service.icon}</div>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                    <h4 className="font-semibold text-green-800 mb-2">{t('services.keyBenefits')}</h4>
                    <p className="text-green-700">{service.benefits}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">{t('services.whatWeOffer')}</h4>
                    <ul className="space-y-3">
                      {service.keyPoints.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#5c9c98' }} />
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                    style={{ backgroundColor: '#5c9c98' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4a8480'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5c9c98'}
                  >
                    {service.cta}
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ backgroundColor: '#5c9c98' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {t('services.finalCta.title')}
          </h2>
          <p className="text-xl text-white opacity-80 mb-8 max-w-3xl mx-auto">
            {t('services.finalCta.subtitle')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            style={{ color: '#5c9c98' }}
          >
            {t('services.finalCta.button')}
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;