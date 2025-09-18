import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Target, Heart, Handshake, Lightbulb, ArrowRight, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: t('about.values.excellence'),
      description: 'We strive for perfection in every line of code and every strategy, delivering solutions that exceed expectations.'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: t('about.values.innovation'),
      description: 'Always exploring new technologies and methodologies to offer cutting-edge solutions that drive competitive advantage.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: t('about.values.integrity'),
      description: 'We act with honesty and transparency in all our interactions, building trust through consistent ethical behavior.'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: t('about.values.customer'),
      description: 'Your success is our priority and driving force, ensuring every solution aligns with your business goals.'
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: t('about.values.collaboration'),
      description: 'We believe in the power of teamwork and synergy with our clients, working together to achieve exceptional results.'
    }
  ];

  const team = [
    {
      name: 'Nono Carballo',
      position: 'Lead ERP Arquitect',
      description: 'Certified Openbravo and Odoo expert with extensive experience in complex ERP implementations across various industries.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#'
    },
    {
      name: 'Mark Molina',
      position: 'Lead AI Architect',
      description: 'Specialist in artificial intelligence and machine learning with 10+ years developing intelligent solutions for enterprise clients.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#'
    },
    {
      name: 'Rafael Queralta',
      position: 'Lead Retail Arquitect',
      description: 'Expert in retail solutions and digital transformation with extensive experience optimizing inventory management, and customer experience across retail organizations.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#'
    },
    {
      name: 'Maarten Tromp',
      position: 'Supply Chain Consultant',
      description: 'Expert in supply chain optimization and logistics management with deep knowledge of warehouse operations, distribution networks, and inventory control systems.',
      image: 'https://images.pexels.com/photos/3756523/pexels-photo-3756523.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#'
    }
  ];

  const stats = [
    { number: '50+', label: 'Successful Projects' },
    { number: '15+', label: 'Years Combined Experience' },
    { number: '25+', label: 'Happy Clients' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        {/* Abstract Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Business innovation and technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white bg-opacity-70"></div>
          <div className="absolute inset-0 bg-white bg-opacity-85"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 relative z-10">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed relative z-10">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t('about.story.title')}
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>{t('about.story.content1')}</p>
                <p>{t('about.story.content2')}</p>
                <div className="border-l-4 p-6" style={{ backgroundColor: '#f0f9f8', borderColor: '#5c9c98' }}>
                  <h3 className="font-semibold mb-2" style={{ color: '#2d5a57' }}>{t('about.vision.title')}</h3>
                  <p style={{ color: '#2d5a57' }}>
                    {t('about.vision.desc')}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20" style={{ backgroundColor: '#5c9c98' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold">{stat.number}</div>
                <div className="text-white opacity-80">{t(stat.labelKey)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('about.values.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#e8f4f3' }}>
                  <div style={{ color: '#5c9c98' }}>{value.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{t(value.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {t('about.team.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.team.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute bottom-4 right-4">
                    <a
                      href={member.linkedin}
                      className="bg-white p-2 rounded-full shadow-lg transition-colors duration-200"
                      style={{ hover: { backgroundColor: '#e8f4f3' } }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e8f4f3'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                    >
                      <Linkedin className="h-5 w-5" style={{ color: '#5c9c98' }} />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <div className="font-medium mb-4" style={{ color: '#5c9c98' }}>{t(member.positionKey)}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{t(member.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Company culture"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t('about.culture.title')}
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>{t('about.culture.content1')}</p>
                <p>{t('about.culture.content2')}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {[
                  t('about.culture.item1'),
                  t('about.culture.item2'),
                  t('about.culture.item3'),
                  t('about.culture.item4')
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#5c9c98' }}></div>
                    <span className="font-medium text-gray-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#5c9c98' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {t('about.cta.title')}
          </h2>
          <p className="text-xl text-white opacity-80 mb-8 max-w-3xl mx-auto">
            {t('about.cta.subtitle')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            style={{ color: '#5c9c98' }}
          >
            {t('about.cta.contact')}
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;