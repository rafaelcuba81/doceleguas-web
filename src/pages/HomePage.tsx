import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Settings, TrendingUp, Users, Code, Database, Brain, Wrench, MessageSquare, Code2, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Openbravo ERP',
      description: 'Complete implementation and customization of ERP for business optimization'
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: 'Odoo Solutions',
      description: 'Comprehensive business management with the most complete suite'
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'AI Solutions',
      description: 'Intelligent automation and predictive analysis for better decisions'
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Custom Development',
      description: 'Tailor-made software solutions designed for your unique processes'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'n8n Automation',
      description: 'Workflow automation to optimize your business processes'
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Process Automation',
      description: 'Intelligent automation to reduce manual work and errors'
    }
  ];

  const valueProps = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Innovation',
      description: 'We use cutting-edge technologies to create solutions that give you competitive advantage'
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: 'Customization',
      description: 'Each solution is specifically adapted to your business needs and processes'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Results',
      description: 'We focus on delivering measurable results that drive your company growth'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Expert Team',
      description: 'Our experienced professionals are committed to your project success'
    }
  ];

  const projects = [
    {
      title: 'Halsted Logistics Optimization',
      description: 'How Doce Leguas optimized inventory management by 30% with a custom Openbravo solution.',
      category: 'Openbravo',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'AI Predictive Analysis',
      description: 'Integration of AI for predictive analysis, resulting in 40% improvement in decision-making.',
      category: 'AI',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Custom ERP Solution',
      description: 'Complete custom ERP development that increased operational efficiency by 45%.',
      category: 'Custom',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const testimonials = [
    {
      quote: "Thanks to Doce Leguas, our operations have drastically improved. Their professionalism and knowledge are exceptional.",
      author: "Brian",
      company: "Halsted"
    },
    {
      quote: "The AI solution they implemented exceeded all our expectations. Highly recommended.",
      author: "Maria Rodriguez",
      company: "TechCorp Solutions"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft relative z-10">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-white drop-shadow-lg">
                  {t('home.hero.title').split(' ').slice(0, 4).join(' ')}{' '}
                  <span className="text-yellow-400">Innovative</span>{' '}
                  {t('home.hero.title').split(' ').slice(5).join(' ')}
                </span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed drop-shadow-md">
                {t('home.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/services"
                  className="text-white px-8 py-3 rounded-lg font-semibold hover-lift hover-glow transition-all duration-300 text-center transform"
                  style={{ backgroundColor: '#5c9c98' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4a8480'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5c9c98'}
                >
                  {t('home.hero.viewServices')}
                </Link>
                <Link
                  to="/contact"
                  className="border-2 px-8 py-3 rounded-lg font-semibold hover:text-white hover-lift transition-all duration-300 text-center transform"
                  style={{ borderColor: '#5c9c98', color: '#5c9c98' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#5c9c98';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#5c9c98';
                  }}
                >
                  {t('home.hero.startProject')}
                </Link>
              </div>
            </div>
            <div className="relative animate-fadeInRight z-10">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Software Development Team"
                className="rounded-2xl shadow-2xl hover-scale transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('home.valueProps.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('home.valueProps.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-white border border-gray-100 shadow-lg hover:shadow-xl hover-lift transition-all duration-300 animate-fadeInUp group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <div style={{ color: '#5c9c98' }}>{prop.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{prop.title}</h3>
                <p className="text-gray-600 leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('home.services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover-lift transition-all duration-300 group cursor-pointer animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg group-hover:scale-110 transition-all duration-300" style={{ backgroundColor: '#e8f4f3' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d1ebe9'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e8f4f3'}>
                    <div style={{ color: '#5c9c98' }}>{service.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <Link
                      to="/services"
                      className="font-medium flex items-center transition-all duration-200"
                      style={{ color: '#5c9c98' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#4a8480'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#5c9c98'}
                    >
                      {t('home.services.learnMore')}
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('home.projects.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.projects.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover-lift transition-all duration-300 group animate-fadeInUp"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse" style={{ backgroundColor: '#5c9c98' }}>
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <Link
                    to="/projects"
                    className="font-medium flex items-center transition-all duration-200"
                    style={{ color: '#5c9c98' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#4a8480'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#5c9c98'}
                  >
                    {t('home.projects.viewCase')}
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('home.testimonials.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover-lift hover:shadow-xl transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <MessageSquare className="h-8 w-8 flex-shrink-0 mt-1 animate-float" style={{ color: '#5c9c98' }} />
                  <div>
                    <p className="text-gray-700 mb-6 text-lg italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div style={{ color: '#5c9c98' }}>{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics & Retail Solutions */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {t('home.logistics.title')}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('home.logistics.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Logistics Solutions */}
            <div className="animate-fadeInLeft">
              <div className="rounded-xl p-8 h-full" style={{ background: 'linear-gradient(to bottom right, #5c9c98, #4a8480)' }}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Database className="h-8 w-8" style={{ color: '#5c9c98' }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t('home.logistics.supply.title')}</h3>
                  <p className="text-white mb-6">{t('home.logistics.supply.desc')}</p>
                  <ul className="text-left text-white space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      {t('home.logistics.supply.feature1')}
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      {t('home.logistics.supply.feature2')}
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      {t('home.logistics.supply.feature3')}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Retail Solutions */}
            <div className="animate-fadeInRight">
              <div className="rounded-xl p-8 h-full" style={{ background: 'linear-gradient(to bottom right, #16a34a, #15803d)' }}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Settings className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t('home.logistics.retail.title')}</h3>
                  <p className="text-green-100 mb-6">{t('home.logistics.retail.desc')}</p>
                  <ul className="text-left text-green-100 space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      {t('home.logistics.retail.feature1')}
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      {t('home.logistics.retail.feature2')}
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      {t('home.logistics.retail.feature3')}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Industry Expertise */}
            <div className="animate-fadeInUp">
              <div className="rounded-xl p-8 h-full" style={{ background: 'linear-gradient(to bottom right, #7c3aed, #6d28d9)' }}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-8 w-8" style={{ color: '#7c3aed' }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t('home.logistics.expertise.title')}</h3>
                  <p className="text-purple-100 mb-6">{t('home.logistics.expertise.desc')}</p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-2xl font-bold text-white">25+</div>
                      <div className="text-white text-sm opacity-80">{t('home.logistics.expertise.stat1')}</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-2xl font-bold text-white">99%</div>
                      <div className="text-white text-sm opacity-80">{t('home.logistics.expertise.stat2')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/solutions"
              className="inline-flex items-center bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              style={{ color: '#5c9c98' }}
            >
              {t('home.logistics.cta')}
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#5c9c98' }}>
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-shimmer"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 animate-fadeInUp">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-white opacity-80 mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            {t('home.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/contact"
              className="bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover-lift hover-glow transition-all duration-300 transform"
              style={{ color: '#5c9c98' }}
            >
              {t('home.cta.schedule')}
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover-lift transition-all duration-300 transform"
              onMouseEnter={(e) => e.currentTarget.style.color = '#5c9c98'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
            >
              {t('home.cta.contact')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;