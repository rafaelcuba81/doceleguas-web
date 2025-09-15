import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Settings, Brain, Code, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: 'openbravo',
      icon: <Database className="h-12 w-12" />,
      title: 'Transform Your Management with Openbravo: Efficiency and Total Control',
      description: 'As Openbravo experts, we offer everything from initial implementation to advanced customization and continuous support. We maximize your ERP\'s potential to optimize your operations, from finances and sales to logistics and production.',
      benefits: 'Reduced operational costs, improved decision-making, guaranteed scalability, seamless integration.',
      keyPoints: [
        'Implementation and Migration',
        'Customization and Module Development',
        'Support and Maintenance',
        'User Training'
      ],
      cta: 'Learn More about Openbravo',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'odoo',
      icon: <Settings className="h-12 w-12" />,
      title: 'Odoo: Centralize and Automate Your Business with Our Expertise',
      description: 'Odoo is the ultimate suite of business applications. We help you exploit its full potential, adapting modules like CRM, accounting, project management, e-commerce, and more to your specific workflows.',
      benefits: 'Increased productivity, 360° business view, reduced manual errors, scalability, and flexibility.',
      keyPoints: [
        'Consultancy and Requirements Analysis',
        'Implementation and Configuration',
        'Custom Module Development',
        'Integration with Other Systems',
        'Post-Implementation Support'
      ],
      cta: 'Explore Our Odoo Solutions',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'ai',
      icon: <Brain className="h-12 w-12" />,
      title: 'Artificial Intelligence: From Data to Strategic Decisions',
      description: 'Unlock the power of your data with our AI solutions. From process automation (RPA) and predictive analysis to intelligent chatbots and computer vision, we create systems that learn, optimize, and generate value.',
      benefits: 'Operational optimization, improved customer experience, new revenue sources, competitive advantage.',
      keyPoints: [
        'Machine Learning and Deep Learning',
        'Natural Language Processing (NLP)',
        'Computer Vision',
        'Robotic Process Automation (RPA)',
        'Chatbots and Virtual Assistants'
      ],
      cta: 'Discover Our AI Projects',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'custom',
      icon: <Code className="h-12 w-12" />,
      title: 'Custom Software: The Perfect Solution for Unique Challenges',
      description: 'When standard solutions are not enough, we create applications that fit your processes and goals like a glove. From web and mobile applications to complex management systems, we design and develop robust, scalable, and user-centered software.',
      benefits: 'Unmatched efficiency, competitive advantage, total control over your technology, guaranteed security.',
      keyPoints: [
        'Custom Analysis and Design',
        'Front-end and Back-end Development',
        'Mobile Applications (iOS/Android)',
        'Enterprise Management Systems (CRM, ERP, etc.)',
        'Legacy System Modernization'
      ],
      cta: 'Tell Us Your Idea',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'consulting',
      icon: <MessageSquare className="h-12 w-12" />,
      title: 'Technological Consultancy: Strategy and Vision for Your Digital Future',
      description: 'Our team of expert consultants will guide you in defining your technological roadmap. From infrastructure evaluation to selecting the most suitable solutions and project management, we offer a clear and strategic vision.',
      benefits: 'Risk reduction, investment optimization, planned innovation, technological alignment with business goals.',
      keyPoints: [
        'Technological Audit',
        'Strategic IT Planning',
        'Technology and Vendor Selection',
        'Software Project Management',
        'Security and Cybersecurity'
      ],
      cta: 'Consult Our Experts',
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
            Our Services: Your Path to Digital Excellence
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed relative z-10">
            At Doce Leguas, we combine deep technical expertise with strategic business vision to offer you 
            software solutions that truly work. Explore our range of services designed to drive your growth.
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
                  <div className="bg-blue-100 w-20 h-20 rounded-xl flex items-center justify-center mb-8">
                    <div className="text-blue-700">{service.icon}</div>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                    <h4 className="font-semibold text-green-800 mb-2">Key Benefits:</h4>
                    <p className="text-green-700">{service.benefits}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">What We Offer:</h4>
                    <ul className="space-y-3">
                      {service.keyPoints.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
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
            No matter how complex your challenge is, we have the expertise to turn it into success.
          </h2>
          <p className="text-xl text-white opacity-80 mb-8 max-w-3xl mx-auto">
            Let's talk about your next project and discover how we can help you achieve your goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            style={{ color: '#5c9c98' }}
          >
            Contact Us
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;