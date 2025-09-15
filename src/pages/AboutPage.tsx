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
      position: 'Senior ERP Arquitect',
      description: 'Certified Openbravo and Odoo expert with extensive experience in complex ERP implementations across various industries.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#'
    },
    {
      name: 'Mark Molina',
      position: 'Lead AI Architect',
      description: 'Expert in software architectures and emerging technologies. Leads our technical vision and oversees all development projects.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#'
    },
    {
      name: 'Rafael Queralta',
      position: 'Senior Retail Arquitect',
      description: 'Specialist in artificial intelligence and machine learning with 10+ years developing intelligent solutions for enterprise clients.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#'
    },
    {
      name: 'Maarten Tromp',
      position: 'Supply Chain Consultant',
      description: 'Certified Openbravo and Odoo expert with extensive experience in complex ERP implementations across various industries.',
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
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
                <p>
                  Since 2018, Doce Leguas has been committed to excellence in software development. Our mission is to 
                  empower companies through cutting-edge technology, transforming innovative ideas into digital solutions 
                  that drive growth and efficiency.
                </p>
                <p>
                  We started as a small team of passionate developers and have grown into a comprehensive software 
                  consultancy, serving clients across various industries with customized solutions that make a real difference.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-700 p-6">
                  <h3 className="font-semibold text-blue-900 mb-2">{t('about.vision.title')}</h3>
                  <p className="text-blue-800">
                    {t('about.vision.desc')}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl lg:text-5xl font-bold">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
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
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-blue-700">{value.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
                      className="bg-white p-2 rounded-full shadow-lg hover:bg-blue-50 transition-colors duration-200"
                    >
                      <Linkedin className="h-5 w-5 text-blue-700" />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-blue-700 font-medium mb-4">{member.position}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Company culture"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t('about.culture.title')}
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At Doce Leguas, we foster a culture of continuous learning, innovation, and collaboration. 
                  Our team is passionate about technology and committed to staying at the forefront of industry trends.
                </p>
                <p>
                  We believe in work-life balance, professional development, and creating an environment where 
                  creativity and technical excellence thrive. This culture directly translates into better solutions 
                  for our clients.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {[
                  'Continuous Learning',
                  'Innovation Focus',
                  'Team Collaboration',
                  'Client Partnership'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
                    <span className="font-medium text-gray-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {t('about.cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
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