import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Truck, Briefcase, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SolutionsPage = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      id: 'retail',
      icon: <Package className="h-12 w-12" />,
      title: t('solutions.warehouse.title'),
      subtitle: t('solutions.warehouse.subtitle'),
      description: t('solutions.warehouse.description'),
      features: [
        t('solutions.warehouse.feature1'),
        t('solutions.warehouse.feature2'),
        t('solutions.warehouse.feature3'),
        t('solutions.warehouse.feature4'),
        t('solutions.warehouse.feature5'),
        t('solutions.warehouse.feature6'),
        t('solutions.warehouse.feature7'),
        t('solutions.warehouse.feature8'),
        t('solutions.warehouse.feature9'),
        t('solutions.warehouse.feature10')
      ],
      benefits: [
        t('solutions.warehouse.benefit1'),
        t('solutions.warehouse.benefit2'),
        t('solutions.warehouse.benefit3'),
        t('solutions.warehouse.benefit4'),
        t('solutions.warehouse.benefit5'),
        t('solutions.warehouse.benefit6'),
        t('solutions.warehouse.benefit7'),
        t('solutions.warehouse.benefit8')
      ],
      image: 'https://images.pexels.com/photos/4481532/pexels-photo-4481532.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'manufacturing',
      icon: <Truck className="h-12 w-12" />,
      title: t('solutions.delivery.title'),
      subtitle: t('solutions.delivery.subtitle'),
      description: t('solutions.delivery.description'),
      features: [
        t('solutions.delivery.feature1'),
        t('solutions.delivery.feature2'),
        t('solutions.delivery.feature3'),
        t('solutions.delivery.feature4'),
        t('solutions.delivery.feature5'),
        t('solutions.delivery.feature6'),
        t('solutions.delivery.feature7'),
        t('solutions.delivery.feature8'),
        t('solutions.delivery.feature9'),
        t('solutions.delivery.feature10')
      ],
      benefits: [
        t('solutions.delivery.benefit1'),
        t('solutions.delivery.benefit2'),
        t('solutions.delivery.benefit3'),
        t('solutions.delivery.benefit4'),
        t('solutions.delivery.benefit5'),
        t('solutions.delivery.benefit6'),
        t('solutions.delivery.benefit7'),
        t('solutions.delivery.benefit8')
      ],
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'services',
      icon: <Briefcase className="h-12 w-12" />,
      title: t('solutions.services.title'),
      subtitle: t('solutions.services.subtitle'),
      description: t('solutions.services.description'),
      features: [
        t('solutions.services.feature1'),
        t('solutions.services.feature2'),
        t('solutions.services.feature3'),
        t('solutions.services.feature4'),
        t('solutions.services.feature5'),
        t('solutions.services.feature6')
      ],
      benefits: [
        t('solutions.services.benefit1'),
        t('solutions.services.benefit2'),
        t('solutions.services.benefit3'),
        t('solutions.services.benefit4')
      ],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        {/* Abstract Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Comprehensive business solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white bg-opacity-85"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('solutions.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed relative z-10">
            {t('solutions.subtitle')}
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-20 h-20 rounded-xl flex items-center justify-center mb-8" style={{ backgroundColor: '#e8f4f3' }}>
                    <div style={{ color: '#5c9c98' }}>{solution.icon}</div>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h2>
                  <h3 className="text-xl font-semibold mb-6" style={{ color: '#5c9c98' }}>
                    {solution.subtitle}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">{t('solutions.keyFeatures')}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#5c9c98' }}></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                    <h4 className="font-semibold text-green-800 mb-4">{t('solutions.expectedBenefits')}</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-green-700">
                          • {benefit}
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
                    {t('solutions.learnMore')}
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={solution.image}
                      alt={solution.title}
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

      {/* Why Choose Our Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('solutions.whyChoose.title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: t('solutions.whyChoose.expertise.title'),
                description: t('solutions.whyChoose.expertise.desc')
              },
              {
                title: t('solutions.whyChoose.results.title'),
                description: t('solutions.whyChoose.results.desc')
              },
              {
                title: t('solutions.whyChoose.scalable.title'),
                description: t('solutions.whyChoose.scalable.desc')
              },
              {
                title: t('solutions.whyChoose.support.title'),
                description: t('solutions.whyChoose.support.desc')
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#5c9c98' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {t('solutions.cta.title')}
          </h2>
          <p className="text-xl text-white opacity-80 mb-8 max-w-3xl mx-auto">
            {t('solutions.cta.subtitle')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            style={{ color: '#5c9c98' }}
          >
            {t('solutions.cta.button')}
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;