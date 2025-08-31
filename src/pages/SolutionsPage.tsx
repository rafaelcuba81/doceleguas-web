import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Factory, Briefcase, ArrowRight } from 'lucide-react';

const SolutionsPage = () => {
  const solutions = [
    {
      id: 'retail',
      icon: <ShoppingCart className="h-12 w-12" />,
      title: 'Retail Solution',
      subtitle: 'Optimize Your Supply Chain and Customer Experience',
      description: 'Comprehensive solution that integrates inventory management, point-of-sale systems, customer relationship management, and business intelligence to transform your retail operations.',
      features: [
        'Real-time inventory management',
        'Integrated POS system',
        'Customer loyalty programs',
        'Sales analytics and reporting',
        'Multi-channel integration',
        'Supply chain optimization'
      ],
      benefits: [
        'Reduce inventory costs by up to 25%',
        'Improve customer satisfaction',
        'Increase sales efficiency',
        'Better demand forecasting'
      ],
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'manufacturing',
      icon: <Factory className="h-12 w-12" />,
      title: 'Manufacturing Solution',
      subtitle: 'Total Control of Production and Resource Management',
      description: 'End-to-end manufacturing solution that optimizes production planning, resource allocation, quality control, and maintenance scheduling for maximum operational efficiency.',
      features: [
        'Production planning and scheduling',
        'Material resource planning (MRP)',
        'Quality management system',
        'Maintenance management',
        'Shop floor control',
        'Cost tracking and analysis'
      ],
      benefits: [
        'Increase production efficiency by 30%',
        'Reduce waste and operational costs',
        'Improve product quality',
        'Optimize resource utilization'
      ],
      image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'services',
      icon: <Briefcase className="h-12 w-12" />,
      title: 'Services Solution',
      subtitle: 'Automate Your Processes and Improve Your Team\'s Productivity',
      description: 'Tailored solution for service-based businesses that streamlines project management, resource allocation, client management, and billing processes.',
      features: [
        'Project and task management',
        'Time tracking and billing',
        'Client relationship management',
        'Resource scheduling',
        'Document management',
        'Financial reporting'
      ],
      benefits: [
        'Increase team productivity by 40%',
        'Improve client satisfaction',
        'Streamline billing processes',
        'Better project visibility'
      ],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Solutions for Your Sector
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We have developed packaged solutions that address the most common challenges in various industries, 
            combining our experience in Openbravo, Odoo, AI, and custom development to offer you unprecedented value.
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
                  <div className="bg-blue-100 w-20 h-20 rounded-xl flex items-center justify-center mb-8">
                    <div className="text-blue-700">{solution.icon}</div>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {solution.title}
                  </h2>
                  <h3 className="text-xl text-blue-700 font-semibold mb-6">
                    {solution.subtitle}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                    <h4 className="font-semibold text-green-800 mb-4">Expected Benefits:</h4>
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
                    Learn More
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
              Why Choose Our Industry Solutions?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Industry Expertise',
                description: 'Deep understanding of sector-specific challenges and requirements.'
              },
              {
                title: 'Proven Results',
                description: 'Track record of successful implementations across various industries.'
              },
              {
                title: 'Scalable Solutions',
                description: 'Solutions that grow with your business and adapt to changing needs.'
              },
              {
                title: 'Comprehensive Support',
                description: 'Full lifecycle support from implementation to ongoing maintenance.'
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
      <section className="py-20 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover how our industry-specific solutions can drive efficiency, reduce costs, and accelerate your growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            style={{ color: '#5c9c98' }}
          >
            Get Started Today
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;