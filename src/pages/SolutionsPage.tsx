import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Truck, Briefcase, ArrowRight } from 'lucide-react';

const SolutionsPage = () => {
  const solutions = [
    {
      id: 'retail',
      icon: <Package className="h-12 w-12" />,
      title: 'Warehouse Management System',
      subtitle: 'Optimize Your Warehouse Operations and Inventory Control',
      description: 'A Warehouse Management System (WMS) is a comprehensive software solution designed to optimize and automate warehouse operations from receiving to shipping. It provides real-time visibility into inventory levels, locations, and movements while streamlining picking, packing, and shipping processes. Our WMS integrates seamlessly with your existing ERP systems and uses advanced algorithms to optimize warehouse layout, reduce travel time, and maximize storage efficiency.',
      features: [
        'Real-time inventory tracking and location management',
        'Automated picking route optimization',
        'Receiving and put-away management',
        'Order fulfillment and wave planning',
        'Barcode, RFID, and mobile device integration',
        'Warehouse layout optimization and slotting',
        'Labor management and productivity tracking',
        'Shipping and dock management',
        'Cycle counting and inventory accuracy',
        'Integration with ERP, TMS, and e-commerce platforms'
      ],
      benefits: [
        'Increase picking productivity by 25-40%',
        'Improve inventory accuracy to 99.5%+',
        'Reduce order fulfillment time by 30-50%',
        'Optimize warehouse space utilization by 20-30%',
        'Decrease labor costs through automation',
        'Enhance customer satisfaction with faster deliveries',
        'Reduce inventory carrying costs',
        'Minimize picking errors and returns'
      ],
      image: 'https://images.pexels.com/photos/4481532/pexels-photo-4481532.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'manufacturing',
      icon: <Truck className="h-12 w-12" />,
      title: 'Delivery Management System',
      subtitle: 'Optimize Your Last-Mile Delivery Operations',
      description: 'A comprehensive Delivery Management System (DMS) designed to streamline and optimize your entire delivery process from dispatch to customer doorstep. Our solution provides real-time tracking, route optimization, driver management, and customer communication tools to ensure efficient, cost-effective, and reliable delivery operations.',
      features: [
        'Real-time delivery tracking and monitoring',
        'Intelligent route optimization and planning',
        'Driver mobile app with GPS navigation',
        'Automated customer notifications and updates',
        'Proof of delivery with digital signatures',
        'Fleet management and vehicle tracking',
        'Delivery scheduling and time slot management',
        'Performance analytics and reporting',
        'Integration with e-commerce and ERP systems',
        'Customer portal for delivery preferences'
      ],
      benefits: [
        'Reduce delivery costs by 20-35%',
        'Improve delivery success rate to 95%+',
        'Decrease delivery time by 25-40%',
        'Enhance customer satisfaction scores',
        'Optimize fleet utilization and fuel efficiency',
        'Reduce failed delivery attempts',
        'Increase driver productivity',
        'Provide complete delivery visibility'
      ],
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=600'
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
            Comprehensive Solutions for Your Sector
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed relative z-10">
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
                    <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
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
      <section className="py-20" style={{ backgroundColor: '#5c9c98' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white opacity-80 mb-8 max-w-3xl mx-auto">
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