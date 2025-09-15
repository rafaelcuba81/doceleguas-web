import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ArrowRight, Database, Brain, Code, Settings } from 'lucide-react';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'openbravo', name: 'Openbravo' },
    { id: 'odoo', name: 'Odoo' },
    { id: 'ai', name: 'AI Solutions' },
    { id: 'custom', name: 'Custom Development' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Halsted Logistics Optimization',
      description: 'Complete Openbravo ERP implementation with custom modules for inventory management, resulting in 30% reduction in operational costs and 25% improvement in delivery times.',
      category: 'openbravo',
      sector: 'Retail & Logistics',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Database className="h-6 w-6" />,
      results: ['30% cost reduction', '25% faster delivery', '95% inventory accuracy'],
      testimonial: 'Thanks to Doce Leguas, our operations have drastically improved. Their professionalism and knowledge are exceptional.',
      client: 'Brian, Operations Manager at Halsted'
    },
    {
      id: 2,
      title: 'AI-Powered Predictive Analytics',
      description: 'Development of machine learning models for demand forecasting and predictive maintenance, enabling data-driven decision making and 40% improvement in operational efficiency.',
      category: 'ai',
      sector: 'Manufacturing',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Brain className="h-6 w-6" />,
      results: ['40% efficiency gain', '60% better forecasting', '$2M cost savings'],
      testimonial: 'The AI solution they implemented exceeded all our expectations. The predictive capabilities have transformed our planning process.',
      client: 'Maria Rodriguez, CTO at TechCorp Solutions'
    },
    {
      id: 3,
      title: 'Custom ERP Development',
      description: 'Built from scratch a comprehensive ERP system tailored specifically for a growing services company, integrating project management, billing, and resource planning.',
      category: 'custom',
      sector: 'Professional Services',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Code className="h-6 w-6" />,
      results: ['45% productivity increase', '99.9% uptime', '100% custom fit'],
      testimonial: 'Finally, a system that works exactly how we do business. The custom ERP has streamlined all our processes.',
      client: 'James Wilson, CEO at ProServ Consulting'
    },
    {
      id: 4,
      title: 'Odoo Multi-Company Implementation',
      description: 'Comprehensive Odoo deployment across multiple subsidiaries with custom modules for consolidated reporting, inter-company transactions, and unified workflow management.',
      category: 'odoo',
      sector: 'Finance & Holding',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Settings className="h-6 w-6" />,
      results: ['5 companies unified', '50% faster reporting', '80% process automation'],
      testimonial: 'The Odoo implementation has given us complete visibility across all our companies. Outstanding work.',
      client: 'Sarah Chen, CFO at GlobalTech Holdings'
    },
    {
      id: 5,
      title: 'Smart Warehouse Management',
      description: 'AI-enhanced warehouse management system with computer vision for inventory tracking, automated reordering, and predictive maintenance of equipment.',
      category: 'ai',
      sector: 'Logistics & Distribution',
      image: 'https://images.pexels.com/photos/4481532/pexels-photo-4481532.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Brain className="h-6 w-6" />,
      results: ['35% faster processing', '99% inventory accuracy', '20% cost reduction'],
      testimonial: 'The computer vision system has revolutionized our warehouse operations. Incredible accuracy and efficiency.',
      client: 'Mike Torres, Warehouse Director at LogiFlow'
    },
    {
      id: 6,
      title: 'Cloud Migration & Modernization',
      description: 'Complete legacy system modernization with cloud migration, API development, and mobile application creation for a traditional manufacturing company.',
      category: 'custom',
      sector: 'Manufacturing',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: <Code className="h-6 w-6" />,
      results: ['70% performance boost', '24/7 availability', 'Modern mobile access'],
      testimonial: 'They brought our 20-year-old system into the modern age. The transformation is remarkable.',
      client: 'Robert Kim, IT Director at SteelWorks Inc'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        {/* Abstract Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Successful projects and transformations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white bg-opacity-85"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Projects: Stories of Success and Transformation
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed relative z-10">
            Each project is an opportunity to demonstrate our commitment to excellence. Here we present some of our most 
            relevant works, showing how we have helped companies achieve their digital goals.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Filter className="h-5 w-5 text-gray-500" />
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  activeFilter === filter.id
                    ? 'text-white'
                    : 'bg-white text-gray-700 hover:text-white'
                }`}
                style={activeFilter === filter.id ? { backgroundColor: '#5c9c98' } : {}}
                onMouseEnter={(e) => {
                  if (activeFilter !== filter.id) {
                    e.currentTarget.style.backgroundColor = '#5c9c98';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== filter.id) {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.color = '#374151';
                  }
                }}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <div style={{ color: '#5c9c98' }}>{project.icon}</div>
                    </div>
                    <span className="text-white px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#5c9c98' }}>
                      {project.sector}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, index) => (
                        <li key={index} className="text-sm text-green-700 flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <Link
                      to={`/projects/${project.id}`}
                      className="font-medium flex items-center transition-colors duration-200"
                      style={{ color: '#5c9c98' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#4a8480'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#5c9c98'}
                    >
                      View Case Study
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Featured Success Story: Halsted Logistics Transformation
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">The Challenge:</h3>
                  <p className="text-gray-600">
                    Halsted was struggling with manual inventory processes, leading to stockouts, overstock situations, 
                    and delayed deliveries that were affecting customer satisfaction.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Our Solution:</h3>
                  <p className="text-gray-600">
                    We implemented a comprehensive Openbravo ERP system with custom modules for real-time inventory 
                    tracking, automated reordering, and integrated logistics management.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Results Achieved:</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold" style={{ color: '#5c9c98' }}>30%</div>
                      <div className="text-sm" style={{ color: '#4a8480' }}>Cost Reduction</div>
                    </div>
                    <div className="p-4 rounded-lg" style={{ backgroundColor: '#f0f9f8' }}>
                      <div className="text-2xl font-bold" style={{ color: '#5c9c98' }}>25%</div>
                      <div className="text-sm" style={{ color: '#4a8480' }}>Faster Delivery</div>
                    </div>
                  </div>
                </div>
                <div className="border-l-4 p-4" style={{ backgroundColor: '#f0f9f8', borderColor: '#5c9c98' }}>
                  <p className="italic" style={{ color: '#2d5a57' }}>
                    "{projects[0].testimonial}"
                  </p>
                  <p className="font-medium mt-2" style={{ color: '#5c9c98' }}>- {projects[0].client}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={projects[0].image}
                alt="Halsted Success Story"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#5c9c98' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Let's Talk About Your Challenge
          </h2>
          <p className="text-xl text-white opacity-80 mb-8 max-w-3xl mx-auto">
            We can help you achieve similar results. Every great project starts with a conversation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            style={{ color: '#5c9c98' }}
          >
            Contact Us Today
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;