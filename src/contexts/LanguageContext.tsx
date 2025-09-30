import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'es';
  setLanguage: (lang: 'en' | 'es') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.solutions': 'Solutions',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',

    // Home Page
    'home.hero.title': 'Transform Your Business with Innovative Technology Solutions',
    'home.hero.subtitle': 'We specialize in Openbravo ERP, Odoo, AI solutions, and custom development to optimize your business processes and drive growth.',
    'home.hero.viewServices': 'View Our Services',
    'home.hero.startProject': 'Start Your Project',

    // Value Props
    'home.valueProps.title': 'Why Choose Doce Leguas?',
    'home.valueProps.subtitle': 'We combine technical expertise with business understanding to deliver solutions that truly transform your operations.',
    'home.valueProps.innovation': 'Innovation',
    'home.valueProps.innovation.desc': 'Cutting-edge technology solutions that keep you ahead of the competition.',
    'home.valueProps.custom': 'Customization',
    'home.valueProps.custom.desc': 'Tailored solutions designed specifically for your unique business needs.',
    'home.valueProps.results': 'Results',
    'home.valueProps.results.desc': 'Proven track record of delivering measurable business improvements.',
    'home.valueProps.team': 'Expert Team',
    'home.valueProps.team.desc': 'Experienced professionals dedicated to your success.',

    // Services
    'home.services.title': 'Our Core Services',
    'home.services.subtitle': 'Comprehensive technology solutions to power your business transformation.',
    'home.services.openbravo': 'Openbravo ERP',
    'home.services.openbravo.desc': 'Complete ERP implementation and customization for enterprise resource planning.',
    'home.services.odoo': 'Odoo Solutions',
    'home.services.odoo.desc': 'Comprehensive business management with Odoo\'s integrated suite of applications.',
    'home.services.ai': 'AI Solutions',
    'home.services.ai.desc': 'Artificial intelligence integration to automate processes and enhance decision-making.',
    'home.services.custom': 'Custom Development',
    'home.services.custom.desc': 'Bespoke software solutions tailored to your specific business requirements.',
    'home.services.n8n': 'N8N Automation',
    'home.services.n8n.desc': 'Workflow automation and integration solutions to streamline your operations.',
    'home.services.automation': 'Process Automation',
    'home.services.automation.desc': 'Intelligent automation solutions to optimize efficiency and reduce manual work.',
    'home.services.learnMore': 'Learn More',

    // Projects
    'home.projects.title': 'Success Stories',
    'home.projects.subtitle': 'Real results from real clients who trusted us with their digital transformation.',
    'home.projects.viewCase': 'View Case Study',

    // Testimonials
    'home.testimonials.title': 'What Our Clients Say',

    // Logistics
    'home.logistics.title': 'Specialized Solutions for Logistics & Retail',
    'home.logistics.subtitle': 'Industry-specific expertise that drives operational excellence and competitive advantage.',
    'home.logistics.supply.title': 'Supply Chain Optimization',
    'home.logistics.supply.desc': 'Advanced logistics management solutions that streamline your entire supply chain.',
    'home.logistics.supply.feature1': 'Real-time inventory tracking',
    'home.logistics.supply.feature2': 'Automated procurement processes',
    'home.logistics.supply.feature3': 'Predictive demand planning',
    'home.logistics.retail.title': 'Retail Management',
    'home.logistics.retail.desc': 'Comprehensive retail solutions that enhance customer experience and operational efficiency.',
    'home.logistics.retail.feature1': 'Point-of-sale integration',
    'home.logistics.retail.feature2': 'Customer relationship management',
    'home.logistics.retail.feature3': 'Multi-channel sales management',
    'home.logistics.expertise.title': 'Industry Expertise',
    'home.logistics.expertise.desc': 'Deep understanding of logistics and retail challenges with proven solutions.',
    'home.logistics.expertise.stat1': 'Projects',
    'home.logistics.expertise.stat2': 'Success Rate',
    'home.logistics.cta': 'Explore Our Solutions',

    // CTA
    'home.cta.title': 'Ready to Transform Your Business?',
    'home.cta.subtitle': 'Let\'s discuss how our technology solutions can drive your business forward. Get started with a free consultation today.',
    'home.cta.schedule': 'Schedule Consultation',
    'home.cta.contact': 'Contact Us',

    // Services Page
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive technology solutions designed to transform your business operations and drive sustainable growth.',
    'services.keyBenefits': 'Key Benefits',
    'services.whatWeOffer': 'What We Offer',
    'services.finalCta.title': 'Ready to Get Started?',
    'services.finalCta.subtitle': 'Let\'s discuss how our services can transform your business. Contact us for a free consultation.',
    'services.finalCta.button': 'Get Free Consultation',

    // Openbravo
    'services.openbravo.title': 'Openbravo ERP Solutions',
    'services.openbravo.description': 'Transform your business operations with Openbravo\'s powerful, flexible ERP platform. We provide end-to-end implementation, customization, and support services.',
    'services.openbravo.benefits': 'Streamline operations, improve visibility, and enhance decision-making with a fully integrated business management system.',
    'services.openbravo.point1': 'Complete ERP implementation and configuration',
    'services.openbravo.point2': 'Custom module development and integration',
    'services.openbravo.point3': 'Data migration and system integration',
    'services.openbravo.point4': 'Training and ongoing technical support',
    'services.openbravo.cta': 'Start Your ERP Journey',

    // Odoo
    'services.odoo.title': 'Odoo Business Solutions',
    'services.odoo.description': 'Leverage Odoo\'s comprehensive suite of business applications to manage all aspects of your company from a single, integrated platform.',
    'services.odoo.benefits': 'Unify your business processes, reduce costs, and improve efficiency with Odoo\'s modular approach to business management.',
    'services.odoo.point1': 'Full Odoo implementation and customization',
    'services.odoo.point2': 'Module selection and configuration',
    'services.odoo.point3': 'Third-party integrations and API development',
    'services.odoo.point4': 'User training and change management',
    'services.odoo.point5': 'Ongoing maintenance and support',
    'services.odoo.cta': 'Explore Odoo Solutions',

    // AI Solutions
    'services.ai.title': 'AI & Machine Learning Solutions',
    'services.ai.description': 'Harness the power of artificial intelligence to automate processes, gain insights, and make data-driven decisions that propel your business forward.',
    'services.ai.benefits': 'Increase efficiency, reduce costs, and unlock new opportunities with intelligent automation and predictive analytics.',
    'services.ai.point1': 'Predictive analytics and forecasting',
    'services.ai.point2': 'Process automation and optimization',
    'services.ai.point3': 'Natural language processing solutions',
    'services.ai.point4': 'Computer vision and image recognition',
    'services.ai.point5': 'Machine learning model development',
    'services.ai.point6': 'AI strategy consulting and implementation',
    'services.ai.point7': 'Data preparation and model training',
    'services.ai.point8': 'AI system integration and deployment',
    'services.ai.cta': 'Discover AI Possibilities',

    // Custom Development
    'services.custom.title': 'Custom Software Development',
    'services.custom.description': 'Get exactly what your business needs with our custom software development services. We build scalable, secure, and user-friendly applications tailored to your requirements.',
    'services.custom.benefits': 'Achieve competitive advantage with software that perfectly fits your business processes and scales with your growth.',
    'services.custom.point1': 'Web and mobile application development',
    'services.custom.point2': 'API development and system integration',
    'services.custom.point3': 'Database design and optimization',
    'services.custom.point4': 'Cloud-native application architecture',
    'services.custom.point5': 'Legacy system modernization',
    'services.custom.cta': 'Build Your Solution',

    // Consulting
    'services.consulting.title': 'Technical Consulting',
    'services.consulting.description': 'Get expert guidance on technology strategy, system architecture, and digital transformation initiatives from our experienced consultants.',
    'services.consulting.benefits': 'Make informed technology decisions, avoid costly mistakes, and accelerate your digital transformation journey.',
    'services.consulting.point1': 'Technology strategy and roadmap development',
    'services.consulting.point2': 'System architecture and design review',
    'services.consulting.point3': 'Digital transformation planning',
    'services.consulting.point4': 'Performance optimization and troubleshooting',
    'services.consulting.point5': 'Best practices and methodology guidance',
    'services.consulting.cta': 'Get Expert Advice',

    // Solutions Page
    'solutions.title': 'Industry Solutions',
    'solutions.subtitle': 'Specialized solutions designed for specific industries, combining deep domain expertise with cutting-edge technology.',
    'solutions.keyFeatures': 'Key Features',
    'solutions.expectedBenefits': 'Expected Benefits',
    'solutions.learnMore': 'Learn More',

    // Warehouse Solutions
    'solutions.warehouse.title': 'Warehouse Management Solutions',
    'solutions.warehouse.subtitle': 'Optimize your warehouse operations with intelligent automation',
    'solutions.warehouse.description': 'Comprehensive warehouse management system that streamlines inventory control, order fulfillment, and logistics operations through advanced automation and real-time visibility.',
    'solutions.warehouse.feature1': 'Real-time inventory tracking and management',
    'solutions.warehouse.feature2': 'Automated picking and packing processes',
    'solutions.warehouse.feature3': 'Barcode and RFID integration',
    'solutions.warehouse.feature4': 'Advanced reporting and analytics',
    'solutions.warehouse.feature5': 'Multi-location inventory management',
    'solutions.warehouse.feature6': 'Integration with ERP and e-commerce platforms',
    'solutions.warehouse.feature7': 'Mobile workforce management',
    'solutions.warehouse.feature8': 'Automated reorder point calculations',
    'solutions.warehouse.feature9': 'Quality control and inspection workflows',
    'solutions.warehouse.feature10': 'Returns and reverse logistics management',
    'solutions.warehouse.benefit1': '40% reduction in order processing time',
    'solutions.warehouse.benefit2': '25% improvement in inventory accuracy',
    'solutions.warehouse.benefit3': '30% increase in warehouse productivity',
    'solutions.warehouse.benefit4': 'Real-time visibility across all operations',
    'solutions.warehouse.benefit5': 'Reduced labor costs through automation',
    'solutions.warehouse.benefit6': 'Improved customer satisfaction with faster fulfillment',
    'solutions.warehouse.benefit7': 'Better space utilization and organization',
    'solutions.warehouse.benefit8': 'Comprehensive audit trails and compliance',

    // Delivery Solutions
    'solutions.delivery.title': 'Delivery & Logistics Solutions',
    'solutions.delivery.subtitle': 'Streamline your delivery operations with smart logistics',
    'solutions.delivery.description': 'End-to-end delivery management platform that optimizes routes, tracks shipments, and enhances customer experience through intelligent logistics automation.',
    'solutions.delivery.feature1': 'Route optimization and planning',
    'solutions.delivery.feature2': 'Real-time shipment tracking',
    'solutions.delivery.feature3': 'Driver mobile applications',
    'solutions.delivery.feature4': 'Customer notification system',
    'solutions.delivery.feature5': 'Proof of delivery capture',
    'solutions.delivery.feature6': 'Fleet management integration',
    'solutions.delivery.feature7': 'Delivery performance analytics',
    'solutions.delivery.feature8': 'Multi-carrier shipping integration',
    'solutions.delivery.feature9': 'Automated dispatch scheduling',
    'solutions.delivery.feature10': 'Exception handling and alerts',
    'solutions.delivery.benefit1': '35% reduction in delivery costs',
    'solutions.delivery.benefit2': '50% improvement in on-time deliveries',
    'solutions.delivery.benefit3': '20% increase in delivery capacity',
    'solutions.delivery.benefit4': 'Enhanced customer satisfaction scores',
    'solutions.delivery.benefit5': 'Reduced fuel consumption and emissions',
    'solutions.delivery.benefit6': 'Improved driver productivity and satisfaction',
    'solutions.delivery.benefit7': 'Better visibility for customers and management',
    'solutions.delivery.benefit8': 'Streamlined operations and reduced errors',

    // Services Solutions
    'solutions.services.title': 'Professional Services Solutions',
    'solutions.services.subtitle': 'Manage your service business with integrated tools',
    'solutions.services.description': 'Complete service management platform that handles project management, resource allocation, time tracking, and client relationships for professional service organizations.',
    'solutions.services.feature1': 'Project and task management',
    'solutions.services.feature2': 'Resource planning and allocation',
    'solutions.services.feature3': 'Time tracking and billing',
    'solutions.services.feature4': 'Client portal and communication',
    'solutions.services.feature5': 'Financial management and reporting',
    'solutions.services.feature6': 'Document management and collaboration',
    'solutions.services.benefit1': '45% improvement in project delivery times',
    'solutions.services.benefit2': '30% increase in billable hour utilization',
    'solutions.services.benefit3': '25% reduction in administrative overhead',
    'solutions.services.benefit4': 'Enhanced client satisfaction and retention',

    // Why Choose
    'solutions.whyChoose.title': 'Why Choose Our Solutions?',
    'solutions.whyChoose.expertise.title': 'Industry Expertise',
    'solutions.whyChoose.expertise.desc': 'Deep understanding of industry challenges and proven solutions.',
    'solutions.whyChoose.results.title': 'Proven Results',
    'solutions.whyChoose.results.desc': 'Track record of successful implementations and measurable improvements.',
    'solutions.whyChoose.scalable.title': 'Scalable Solutions',
    'solutions.whyChoose.scalable.desc': 'Solutions that grow with your business and adapt to changing needs.',
    'solutions.whyChoose.support.title': '24/7 Support',
    'solutions.whyChoose.support.desc': 'Comprehensive support and maintenance to ensure optimal performance.',

    // Solutions CTA
    'solutions.cta.title': 'Ready to Optimize Your Operations?',
    'solutions.cta.subtitle': 'Let\'s discuss how our industry solutions can transform your business processes and drive growth.',
    'solutions.cta.button': 'Schedule Consultation',

    // Projects Page
    'projects.title': 'Our Success Stories',
    'projects.subtitle': 'Discover how we\'ve helped businesses across industries achieve their digital transformation goals with measurable results.',
    'projects.filters.all': 'All Projects',
    'projects.filters.openbravo': 'Openbravo',
    'projects.filters.odoo': 'Odoo',
    'projects.filters.ai': 'AI Solutions',
    'projects.filters.custom': 'Custom Development',
    'projects.keyResults': 'Key Results',
    'projects.viewCase': 'View Case Study',

    // Project Details
    'projects.halsted.title': 'Halsted Logistics Optimization',
    'projects.halsted.desc': 'Complete Openbravo ERP implementation that transformed inventory management and reduced operational costs by 30%.',
    'projects.halsted.sector': 'Logistics',
    'projects.halsted.result1': '30% reduction in inventory costs',
    'projects.halsted.result2': '25% faster order processing',
    'projects.halsted.result3': '40% improvement in accuracy',
    'projects.halsted.testimonial': 'Thanks to Doce Leguas, our operations have drastically improved. Their professionalism and knowledge are exceptional.',
    'projects.halsted.client': 'Brian, Operations Manager at Halsted',

    'projects.ai.title': 'AI Predictive Analytics Platform',
    'projects.ai.desc': 'Machine learning solution that provides predictive insights, resulting in 40% improvement in decision-making accuracy.',
    'projects.ai.sector': 'Manufacturing',
    'projects.ai.result1': '40% better decision accuracy',
    'projects.ai.result2': '60% reduction in forecast errors',
    'projects.ai.result3': '35% cost savings in planning',
    'projects.ai.testimonial': 'The AI solution exceeded all our expectations. The predictive capabilities have transformed our planning process.',
    'projects.ai.client': 'Maria Rodriguez, CEO at TechCorp Solutions',

    'projects.custom.title': 'Custom ERP Development',
    'projects.custom.desc': 'Bespoke enterprise resource planning system that increased operational efficiency by 45% and streamlined all business processes.',
    'projects.custom.sector': 'Manufacturing',
    'projects.custom.result1': '45% efficiency improvement',
    'projects.custom.result2': '50% reduction in manual tasks',
    'projects.custom.result3': '30% faster reporting',
    'projects.custom.testimonial': 'The custom solution perfectly fits our unique requirements. Outstanding development and support.',
    'projects.custom.client': 'James Wilson, CTO at InnovateCorp',

    'projects.odoo.title': 'Odoo Complete Implementation',
    'projects.odoo.desc': 'Full Odoo suite implementation covering CRM, inventory, accounting, and HR, resulting in unified business operations.',
    'projects.odoo.sector': 'Retail',
    'projects.odoo.result1': 'Unified business operations',
    'projects.odoo.result2': '35% reduction in admin time',
    'projects.odoo.result3': 'Real-time business insights',
    'projects.odoo.testimonial': 'Odoo implementation was seamless. Now we have complete visibility across all departments.',
    'projects.odoo.client': 'Sarah Chen, Operations Director at RetailPlus',

    'projects.warehouse.title': 'Smart Warehouse Automation',
    'projects.warehouse.desc': 'AI-powered warehouse management system that optimized inventory flow and reduced operational costs by 35%.',
    'projects.warehouse.sector': 'Logistics',
    'projects.warehouse.result1': '35% cost reduction',
    'projects.warehouse.result2': '50% faster picking processes',
    'projects.warehouse.result3': '99% inventory accuracy',
    'projects.warehouse.testimonial': 'The warehouse automation solution revolutionized our operations. Incredible results in just 6 months.',
    'projects.warehouse.client': 'Michael Torres, Warehouse Manager at LogiFlow',

    'projects.cloud.title': 'Cloud Migration & Modernization',
    'projects.cloud.desc': 'Complete cloud infrastructure migration with modern DevOps practices, resulting in 60% cost savings and improved scalability.',
    'projects.cloud.sector': 'Technology',
    'projects.cloud.result1': '60% infrastructure cost savings',
    'projects.cloud.result2': '99.9% system uptime',
    'projects.cloud.result3': '10x faster deployment cycles',
    'projects.cloud.testimonial': 'The cloud migration was flawless. Our systems are now more reliable and cost-effective than ever.',
    'projects.cloud.client': 'Robert Kim, IT Director at SteelWorks Inc',

    // Featured Case Study
    'projects.featured.title': 'Featured Case Study: Halsted Logistics',
    'projects.featured.challenge': 'The Challenge',
    'projects.featured.challengeDesc': 'Halsted faced significant inventory management issues with manual processes, lack of real-time visibility, and high operational costs affecting their competitive position.',
    'projects.featured.solution': 'Our Solution',
    'projects.featured.solutionDesc': 'We implemented a comprehensive Openbravo ERP system with custom modules for inventory optimization, automated workflows, and real-time reporting dashboards.',
    'projects.featured.results': 'The Results',
    'projects.featured.costReduction': 'Cost Reduction',
    'projects.featured.fasterDelivery': 'Faster Delivery',

    // Projects CTA
    'projects.cta.title': 'Ready to Create Your Success Story?',
    'projects.cta.subtitle': 'Let\'s discuss how we can help you achieve similar results with our proven methodologies and expert team.',
    'projects.cta.button': 'Start Your Project',

    // About Page
    'about.title': 'About Doce Leguas',
    'about.subtitle': 'We are a team of passionate technology experts dedicated to transforming businesses through innovative software solutions and strategic consulting.',

    // Our Story
    'about.story.title': 'Our Story',
    'about.story.content1': 'Founded with a vision to bridge the gap between complex technology and business success, Doce Leguas has grown into a trusted partner for companies seeking digital transformation.',
    'about.story.content2': 'Our journey began with a simple belief: that the right technology, implemented correctly, can unlock tremendous value for businesses of all sizes. Today, we continue to live by this principle, delivering solutions that drive real, measurable results.',

    // Vision
    'about.vision.title': 'Our Vision',
    'about.vision.desc': 'To be the leading technology partner that empowers businesses to achieve their full potential through innovative, scalable, and sustainable digital solutions.',

    // Values
    'about.values.title': 'Our Values',
    'about.values.subtitle': 'The principles that guide everything we do and define who we are as a company.',
    'about.values.excellence': 'Excellence',
    'about.values.innovation': 'Innovation',
    'about.values.integrity': 'Integrity',
    'about.values.customer': 'Customer Focus',
    'about.values.collaboration': 'Collaboration',

    // Team
    'about.team.title': 'Meet Our Team',
    'about.team.subtitle': 'Experienced professionals passionate about technology and committed to your success.',
    'about.team.nono.position': 'Founder & CEO',
    'about.team.nono.description': 'Visionary leader with over 15 years of experience in enterprise software solutions and business transformation.',
    'about.team.mark.position': 'CTO & Co-founder',
    'about.team.mark.description': 'Technical architect specializing in ERP systems, AI solutions, and scalable software development.',
    'about.team.rafael.position': 'Lead Developer',
    'about.team.rafael.description': 'Full-stack developer expert in modern web technologies, cloud platforms, and system integration.',
    'about.team.maarten.position': 'Senior Consultant',
    'about.team.maarten.description': 'Business analyst and project manager with deep expertise in process optimization and change management.',

    // Culture
    'about.culture.title': 'Our Culture',
    'about.culture.content1': 'We foster a collaborative environment where innovation thrives, continuous learning is encouraged, and every team member contributes to our collective success.',
    'about.culture.content2': 'Our culture is built on trust, transparency, and a shared commitment to delivering exceptional value to our clients while maintaining work-life balance for our team.',
    'about.culture.item1': 'Continuous Learning',
    'about.culture.item2': 'Innovation Focus',
    'about.culture.item3': 'Work-Life Balance',
    'about.culture.item4': 'Client Success',

    // About CTA
    'about.cta.title': 'Ready to Work Together?',
    'about.cta.subtitle': 'Let\'s discuss how our team can help you achieve your technology goals and drive business growth.',
    'about.cta.contact': 'Get in Touch',

    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to transform your business? Get in touch with our team of experts to discuss your project and discover how we can help you achieve your goals.',

    // Contact Form
    'contact.form.title': 'Send us a Message',
    'contact.form.fullName': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.company': 'Company',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.success': 'Message Sent Successfully!',
    'contact.form.successDesc': 'Thank you for contacting us. We\'ll get back to you within 24 hours.',
    'contact.form.selectSubject': 'Select a subject...',

    // Form Placeholders
    'contact.form.placeholders.fullName': 'Enter your full name',
    'contact.form.placeholders.email': 'Enter your email address',
    'contact.form.placeholders.phone': 'Enter your phone number',
    'contact.form.placeholders.company': 'Enter your company name',
    'contact.form.placeholders.message': 'Tell us about your project or requirements...',

    // Form Subjects
    'contact.form.subjects.generalinquiry': 'General Inquiry',
    'contact.form.subjects.openbravoconsultation': 'Openbravo Consultation',
    'contact.form.subjects.odooimplementation': 'Odoo Implementation',
    'contact.form.subjects.aisolutions': 'AI Solutions',
    'contact.form.subjects.customdevelopment': 'Custom Development',
    'contact.form.subjects.technicalsupport': 'Technical Support',
    'contact.form.subjects.partnershipopportunity': 'Partnership Opportunity',
    'contact.form.subjects.other': 'Other',

    // Contact Info
    'contact.info.title': 'Get in Touch',
    'contact.info.email': 'Email',
    'contact.info.emailDesc': 'Send us an email anytime',
    'contact.info.phone': 'Phone',
    'contact.info.phoneDesc': 'Call us during business hours',
    'contact.info.office': 'Office Locations',
    'contact.info.officeDesc': 'Visit us at our offices',
    'contact.info.hours': 'Business Hours',
    'contact.info.hoursDesc': '9:00 AM - 6:00 PM (GMT)',

    // Why Contact
    'contact.whyContact.title': 'Why Contact Us?',
    'contact.whyContact.item1': 'Free initial consultation and project assessment',
    'contact.whyContact.item2': 'Customized solutions tailored to your specific needs',
    'contact.whyContact.item3': 'Expert team with proven track record in enterprise solutions',
    'contact.whyContact.item4': 'Ongoing support and maintenance for all our implementations',

    // Footer
    'footer.description': 'Transforming businesses through innovative technology solutions. Your trusted partner for digital transformation.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contactInfo': 'Contact Info',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.legal': 'Legal Notice',
    'footer.sitemap': 'Sitemap',

    // ChatBot
    'chatbot.title': 'Doce Leguas Assistant',
    'chatbot.subtitle': 'How can we help you today?',
    'chatbot.welcome': 'Hello! I\'m here to help you learn more about our services and solutions. How can I assist you today?',
    'chatbot.placeholder': 'Type your message...',
    'chatbot.open': 'Open chat',
    'chatbot.close': 'Close chat',
    'chatbot.defaultResponse': 'Thank you for your message. Our team will get back to you soon with more information.',
    'chatbot.errorMessage': 'I\'m sorry, I\'m having trouble connecting right now. Please try again later or contact us directly.'
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.solutions': 'Soluciones',
    'nav.projects': 'Proyectos',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.getStarted': 'Comenzar',

    // Home Page
    'home.hero.title': 'Transforma Tu Negocio con Soluciones Tecnológicas Innovadoras',
    'home.hero.subtitle': 'Nos especializamos en Openbravo ERP, Odoo, soluciones de IA y desarrollo personalizado para optimizar tus procesos empresariales e impulsar el crecimiento.',
    'home.hero.viewServices': 'Ver Nuestros Servicios',
    'home.hero.startProject': 'Iniciar Tu Proyecto',

    // Value Props
    'home.valueProps.title': '¿Por Qué Elegir Doce Leguas?',
    'home.valueProps.subtitle': 'Combinamos experiencia técnica con comprensión empresarial para entregar soluciones que realmente transforman tus operaciones.',
    'home.valueProps.innovation': 'Innovación',
    'home.valueProps.innovation.desc': 'Soluciones tecnológicas de vanguardia que te mantienen por delante de la competencia.',
    'home.valueProps.custom': 'Personalización',
    'home.valueProps.custom.desc': 'Soluciones a medida diseñadas específicamente para tus necesidades empresariales únicas.',
    'home.valueProps.results': 'Resultados',
    'home.valueProps.results.desc': 'Historial comprobado de entregar mejoras empresariales medibles.',
    'home.valueProps.team': 'Equipo Experto',
    'home.valueProps.team.desc': 'Profesionales experimentados dedicados a tu éxito.',

    // Services
    'home.services.title': 'Nuestros Servicios Principales',
    'home.services.subtitle': 'Soluciones tecnológicas integrales para impulsar la transformación de tu negocio.',
    'home.services.openbravo': 'Openbravo ERP',
    'home.services.openbravo.desc': 'Implementación y personalización completa de ERP para planificación de recursos empresariales.',
    'home.services.odoo': 'Soluciones Odoo',
    'home.services.odoo.desc': 'Gestión empresarial integral con la suite integrada de aplicaciones de Odoo.',
    'home.services.ai': 'Soluciones de IA',
    'home.services.ai.desc': 'Integración de inteligencia artificial para automatizar procesos y mejorar la toma de decisiones.',
    'home.services.custom': 'Desarrollo Personalizado',
    'home.services.custom.desc': 'Soluciones de software a medida adaptadas a tus requisitos empresariales específicos.',
    'home.services.n8n': 'Automatización N8N',
    'home.services.n8n.desc': 'Soluciones de automatización de flujos de trabajo e integración para optimizar tus operaciones.',
    'home.services.automation': 'Automatización de Procesos',
    'home.services.automation.desc': 'Soluciones de automatización inteligente para optimizar la eficiencia y reducir el trabajo manual.',
    'home.services.learnMore': 'Saber Más',

    // Projects
    'home.projects.title': 'Historias de Éxito',
    'home.projects.subtitle': 'Resultados reales de clientes reales que confiaron en nosotros para su transformación digital.',
    'home.projects.viewCase': 'Ver Caso de Estudio',

    // Testimonials
    'home.testimonials.title': 'Lo Que Dicen Nuestros Clientes',

    // Logistics
    'home.logistics.title': 'Soluciones Especializadas para Logística y Retail',
    'home.logistics.subtitle': 'Experiencia específica de la industria que impulsa la excelencia operacional y la ventaja competitiva.',
    'home.logistics.supply.title': 'Optimización de Cadena de Suministro',
    'home.logistics.supply.desc': 'Soluciones avanzadas de gestión logística que optimizan toda tu cadena de suministro.',
    'home.logistics.supply.feature1': 'Seguimiento de inventario en tiempo real',
    'home.logistics.supply.feature2': 'Procesos de adquisición automatizados',
    'home.logistics.supply.feature3': 'Planificación predictiva de demanda',
    'home.logistics.retail.title': 'Gestión de Retail',
    'home.logistics.retail.desc': 'Soluciones integrales de retail que mejoran la experiencia del cliente y la eficiencia operacional.',
    'home.logistics.retail.feature1': 'Integración de punto de venta',
    'home.logistics.retail.feature2': 'Gestión de relaciones con clientes',
    'home.logistics.retail.feature3': 'Gestión de ventas multicanal',
    'home.logistics.expertise.title': 'Experiencia en la Industria',
    'home.logistics.expertise.desc': 'Comprensión profunda de los desafíos logísticos y de retail con soluciones probadas.',
    'home.logistics.expertise.stat1': 'Proyectos',
    'home.logistics.expertise.stat2': 'Tasa de Éxito',
    'home.logistics.cta': 'Explorar Nuestras Soluciones',

    // CTA
    'home.cta.title': '¿Listo para Transformar Tu Negocio?',
    'home.cta.subtitle': 'Hablemos sobre cómo nuestras soluciones tecnológicas pueden impulsar tu negocio. Comienza con una consulta gratuita hoy.',
    'home.cta.schedule': 'Programar Consulta',
    'home.cta.contact': 'Contáctanos',

    // Services Page
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones tecnológicas integrales diseñadas para transformar las operaciones de tu negocio e impulsar un crecimiento sostenible.',
    'services.keyBenefits': 'Beneficios Clave',
    'services.whatWeOffer': 'Lo Que Ofrecemos',
    'services.finalCta.title': '¿Listo para Comenzar?',
    'services.finalCta.subtitle': 'Hablemos sobre cómo nuestros servicios pueden transformar tu negocio. Contáctanos para una consulta gratuita.',
    'services.finalCta.button': 'Obtener Consulta Gratuita',

    // Openbravo
    'services.openbravo.title': 'Soluciones Openbravo ERP',
    'services.openbravo.description': 'Transforma las operaciones de tu negocio con la plataforma ERP potente y flexible de Openbravo. Proporcionamos servicios completos de implementación, personalización y soporte.',
    'services.openbravo.benefits': 'Optimiza operaciones, mejora la visibilidad y potencia la toma de decisiones con un sistema de gestión empresarial completamente integrado.',
    'services.openbravo.point1': 'Implementación y configuración completa de ERP',
    'services.openbravo.point2': 'Desarrollo e integración de módulos personalizados',
    'services.openbravo.point3': 'Migración de datos e integración de sistemas',
    'services.openbravo.point4': 'Capacitación y soporte técnico continuo',
    'services.openbravo.cta': 'Iniciar Tu Viaje ERP',

    // Odoo
    'services.odoo.title': 'Soluciones Empresariales Odoo',
    'services.odoo.description': 'Aprovecha la suite integral de aplicaciones empresariales de Odoo para gestionar todos los aspectos de tu empresa desde una sola plataforma integrada.',
    'services.odoo.benefits': 'Unifica tus procesos empresariales, reduce costos y mejora la eficiencia con el enfoque modular de Odoo para la gestión empresarial.',
    'services.odoo.point1': 'Implementación y personalización completa de Odoo',
    'services.odoo.point2': 'Selección y configuración de módulos',
    'services.odoo.point3': 'Integraciones de terceros y desarrollo de API',
    'services.odoo.point4': 'Capacitación de usuarios y gestión del cambio',
    'services.odoo.point5': 'Mantenimiento y soporte continuo',
    'services.odoo.cta': 'Explorar Soluciones Odoo',

    // AI Solutions
    'services.ai.title': 'Soluciones de IA y Machine Learning',
    'services.ai.description': 'Aprovecha el poder de la inteligencia artificial para automatizar procesos, obtener insights y tomar decisiones basadas en datos que impulsen tu negocio.',
    'services.ai.benefits': 'Aumenta la eficiencia, reduce costos y desbloquea nuevas oportunidades con automatización inteligente y análisis predictivo.',
    'services.ai.point1': 'Análisis predictivo y pronósticos',
    'services.ai.point2': 'Automatización y optimización de procesos',
    'services.ai.point3': 'Soluciones de procesamiento de lenguaje natural',
    'services.ai.point4': 'Visión por computadora y reconocimiento de imágenes',
    'services.ai.point5': 'Desarrollo de modelos de machine learning',
    'services.ai.point6': 'Consultoría e implementación de estrategia de IA',
    'services.ai.point7': 'Preparación de datos y entrenamiento de modelos',
    'services.ai.point8': 'Integración y despliegue de sistemas de IA',
    'services.ai.cta': 'Descubrir Posibilidades de IA',

    // Custom Development
    'services.custom.title': 'Desarrollo de Software Personalizado',
    'services.custom.description': 'Obtén exactamente lo que tu negocio necesita con nuestros servicios de desarrollo de software personalizado. Construimos aplicaciones escalables, seguras y fáciles de usar adaptadas a tus requisitos.',
    'services.custom.benefits': 'Logra ventaja competitiva con software que se ajusta perfectamente a tus procesos empresariales y escala con tu crecimiento.',
    'services.custom.point1': 'Desarrollo de aplicaciones web y móviles',
    'services.custom.point2': 'Desarrollo de API e integración de sistemas',
    'services.custom.point3': 'Diseño y optimización de bases de datos',
    'services.custom.point4': 'Arquitectura de aplicaciones nativas en la nube',
    'services.custom.point5': 'Modernización de sistemas legacy',
    'services.custom.cta': 'Construir Tu Solución',

    // Consulting
    'services.consulting.title': 'Consultoría Técnica',
    'services.consulting.description': 'Obtén orientación experta sobre estrategia tecnológica, arquitectura de sistemas e iniciativas de transformación digital de nuestros consultores experimentados.',
    'services.consulting.benefits': 'Toma decisiones tecnológicas informadas, evita errores costosos y acelera tu viaje de transformación digital.',
    'services.consulting.point1': 'Desarrollo de estrategia tecnológica y hoja de ruta',
    'services.consulting.point2': 'Revisión de arquitectura y diseño de sistemas',
    'services.consulting.point3': 'Planificación de transformación digital',
    'services.consulting.point4': 'Optimización de rendimiento y resolución de problemas',
    'services.consulting.point5': 'Orientación sobre mejores prácticas y metodologías',
    'services.consulting.cta': 'Obtener Asesoramiento Experto',

    // Solutions Page
    'solutions.title': 'Soluciones por Industria',
    'solutions.subtitle': 'Soluciones especializadas diseñadas para industrias específicas, combinando experiencia profunda del dominio con tecnología de vanguardia.',
    'solutions.keyFeatures': 'Características Clave',
    'solutions.expectedBenefits': 'Beneficios Esperados',
    'solutions.learnMore': 'Saber Más',

    // Warehouse Solutions
    'solutions.warehouse.title': 'Soluciones de Gestión de Almacén',
    'solutions.warehouse.subtitle': 'Optimiza las operaciones de tu almacén con automatización inteligente',
    'solutions.warehouse.description': 'Sistema integral de gestión de almacén que optimiza el control de inventario, el cumplimiento de pedidos y las operaciones logísticas a través de automatización avanzada y visibilidad en tiempo real.',
    'solutions.warehouse.feature1': 'Seguimiento y gestión de inventario en tiempo real',
    'solutions.warehouse.feature2': 'Procesos automatizados de picking y packing',
    'solutions.warehouse.feature3': 'Integración de códigos de barras y RFID',
    'solutions.warehouse.feature4': 'Reportes y análisis avanzados',
    'solutions.warehouse.feature5': 'Gestión de inventario multi-ubicación',
    'solutions.warehouse.feature6': 'Integración con plataformas ERP y e-commerce',
    'solutions.warehouse.feature7': 'Gestión de fuerza laboral móvil',
    'solutions.warehouse.feature8': 'Cálculos automatizados de punto de reorden',
    'solutions.warehouse.feature9': 'Flujos de trabajo de control de calidad e inspección',
    'solutions.warehouse.feature10': 'Gestión de devoluciones y logística inversa',
    'solutions.warehouse.benefit1': '40% de reducción en tiempo de procesamiento de pedidos',
    'solutions.warehouse.benefit2': '25% de mejora en precisión de inventario',
    'solutions.warehouse.benefit3': '30% de aumento en productividad del almacén',
    'solutions.warehouse.benefit4': 'Visibilidad en tiempo real en todas las operaciones',
    'solutions.warehouse.benefit5': 'Reducción de costos laborales a través de automatización',
    'solutions.warehouse.benefit6': 'Mejora en satisfacción del cliente con cumplimiento más rápido',
    'solutions.warehouse.benefit7': 'Mejor utilización del espacio y organización',
    'solutions.warehouse.benefit8': 'Pistas de auditoría integrales y cumplimiento',

    // Delivery Solutions
    'solutions.delivery.title': 'Soluciones de Entrega y Logística',
    'solutions.delivery.subtitle': 'Optimiza tus operaciones de entrega con logística inteligente',
    'solutions.delivery.description': 'Plataforma integral de gestión de entregas que optimiza rutas, rastrea envíos y mejora la experiencia del cliente a través de automatización logística inteligente.',
    'solutions.delivery.feature1': 'Optimización y planificación de rutas',
    'solutions.delivery.feature2': 'Seguimiento de envíos en tiempo real',
    'solutions.delivery.feature3': 'Aplicaciones móviles para conductores',
    'solutions.delivery.feature4': 'Sistema de notificaciones al cliente',
    'solutions.delivery.feature5': 'Captura de prueba de entrega',
    'solutions.delivery.feature6': 'Integración de gestión de flota',
    'solutions.delivery.feature7': 'Análisis de rendimiento de entregas',
    'solutions.delivery.feature8': 'Integración de envío multi-transportista',
    'solutions.delivery.feature9': 'Programación automatizada de despacho',
    'solutions.delivery.feature10': 'Manejo de excepciones y alertas',
    'solutions.delivery.benefit1': '35% de reducción en costos de entrega',
    'solutions.delivery.benefit2': '50% de mejora en entregas a tiempo',
    'solutions.delivery.benefit3': '20% de aumento en capacidad de entrega',
    'solutions.delivery.benefit4': 'Mejores puntuaciones de satisfacción del cliente',
    'solutions.delivery.benefit5': 'Reducción del consumo de combustible y emisiones',
    'solutions.delivery.benefit6': 'Mejora en productividad y satisfacción del conductor',
    'solutions.delivery.benefit7': 'Mejor visibilidad para clientes y gestión',
    'solutions.delivery.benefit8': 'Operaciones optimizadas y errores reducidos',

    // Services Solutions
    'solutions.services.title': 'Soluciones de Servicios Profesionales',
    'solutions.services.subtitle': 'Gestiona tu negocio de servicios con herramientas integradas',
    'solutions.services.description': 'Plataforma completa de gestión de servicios que maneja gestión de proyectos, asignación de recursos, seguimiento de tiempo y relaciones con clientes para organizaciones de servicios profesionales.',
    'solutions.services.feature1': 'Gestión de proyectos y tareas',
    'solutions.services.feature2': 'Planificación y asignación de recursos',
    'solutions.services.feature3': 'Seguimiento de tiempo y facturación',
    'solutions.services.feature4': 'Portal del cliente y comunicación',
    'solutions.services.feature5': 'Gestión financiera y reportes',
    'solutions.services.feature6': 'Gestión de documentos y colaboración',
    'solutions.services.benefit1': '45% de mejora en tiempos de entrega de proyectos',
    'solutions.services.benefit2': '30% de aumento en utilización de horas facturables',
    'solutions.services.benefit3': '25% de reducción en gastos administrativos',
    'solutions.services.benefit4': 'Mejora en satisfacción y retención de clientes',

    // Why Choose
    'solutions.whyChoose.title': '¿Por Qué Elegir Nuestras Soluciones?',
    'solutions.whyChoose.expertise.title': 'Experiencia en la Industria',
    'solutions.whyChoose.expertise.desc': 'Comprensión profunda de los desafíos de la industria y soluciones probadas.',
    'solutions.whyChoose.results.title': 'Resultados Comprobados',
    'solutions.whyChoose.results.desc': 'Historial de implementaciones exitosas y mejoras medibles.',
    'solutions.whyChoose.scalable.title': 'Soluciones Escalables',
    'solutions.whyChoose.scalable.desc': 'Soluciones que crecen con tu negocio y se adaptan a necesidades cambiantes.',
    'solutions.whyChoose.support.title': 'Soporte 24/7',
    'solutions.whyChoose.support.desc': 'Soporte integral y mantenimiento para asegurar rendimiento óptimo.',

    // Solutions CTA
    'solutions.cta.title': '¿Listo para Optimizar Tus Operaciones?',
    'solutions.cta.subtitle': 'Hablemos sobre cómo nuestras soluciones industriales pueden transformar tus procesos empresariales e impulsar el crecimiento.',
    'solutions.cta.button': 'Programar Consulta',

    // Projects Page
    'projects.title': 'Nuestras Historias de Éxito',
    'projects.subtitle': 'Descubre cómo hemos ayudado a empresas de diversas industrias a lograr sus objetivos de transformación digital con resultados medibles.',
    'projects.filters.all': 'Todos los Proyectos',
    'projects.filters.openbravo': 'Openbravo',
    'projects.filters.odoo': 'Odoo',
    'projects.filters.ai': 'Soluciones de IA',
    'projects.filters.custom': 'Desarrollo Personalizado',
    'projects.keyResults': 'Resultados Clave',
    'projects.viewCase': 'Ver Caso de Estudio',

    // Project Details
    'projects.halsted.title': 'Optimización Logística Halsted',
    'projects.halsted.desc': 'Implementación completa de Openbravo ERP que transformó la gestión de inventario y redujo los costos operacionales en un 30%.',
    'projects.halsted.sector': 'Logística',
    'projects.halsted.result1': '30% de reducción en costos de inventario',
    'projects.halsted.result2': '25% más rápido procesamiento de pedidos',
    'projects.halsted.result3': '40% de mejora en precisión',
    'projects.halsted.testimonial': 'Gracias a Doce Leguas, nuestras operaciones han mejorado drásticamente. Su profesionalismo y conocimiento son excepcionales.',
    'projects.halsted.client': 'Brian, Gerente de Operaciones en Halsted',

    'projects.ai.title': 'Plataforma de Análisis Predictivo con IA',
    'projects.ai.desc': 'Solución de machine learning que proporciona insights predictivos, resultando en 40% de mejora en la precisión de toma de decisiones.',
    'projects.ai.sector': 'Manufactura',
    'projects.ai.result1': '40% mejor precisión en decisiones',
    'projects.ai.result2': '60% reducción en errores de pronóstico',
    'projects.ai.result3': '35% ahorro de costos en planificación',
    'projects.ai.testimonial': 'La solución de IA superó todas nuestras expectativas. Las capacidades predictivas han transformado nuestro proceso de planificación.',
    'projects.ai.client': 'María Rodríguez, CEO en TechCorp Solutions',

    'projects.custom.title': 'Desarrollo de ERP Personalizado',
    'projects.custom.desc': 'Sistema de planificación de recursos empresariales a medida que aumentó la eficiencia operacional en 45% y optimizó todos los procesos empresariales.',
    'projects.custom.sector': 'Manufactura',
    'projects.custom.result1': '45% mejora en eficiencia',
    'projects.custom.result2': '50% reducción en tareas manuales',
    'projects.custom.result3': '30% reportes más rápidos',
    'projects.custom.testimonial': 'La solución personalizada se ajusta perfectamente a nuestros requisitos únicos. Desarrollo y soporte excepcionales.',
    'projects.custom.client': 'James Wilson, CTO en InnovateCorp',

    'projects.odoo.title': 'Implementación Completa de Odoo',
    'projects.odoo.desc': 'Implementación completa de la suite Odoo cubriendo CRM, inventario, contabilidad y RRHH, resultando en operaciones empresariales unificadas.',
    'projects.odoo.sector': 'Retail',
    'projects.odoo.result1': 'Operaciones empresariales unificadas',
    'projects.odoo.result2': '35% reducción en tiempo administrativo',
    'projects.odoo.result3': 'Insights empresariales en tiempo real',
    'projects.odoo.testimonial': 'La implementación de Odoo fue perfecta. Ahora tenemos visibilidad completa en todos los departamentos.',
    'projects.odoo.client': 'Sarah Chen, Directora de Operaciones en RetailPlus',

    'projects.warehouse.title': 'Automatización Inteligente de Almacén',
    'projects.warehouse.desc': 'Sistema de gestión de almacén potenciado por IA que optimizó el flujo de inventario y redujo los costos operacionales en 35%.',
    'projects.warehouse.sector': 'Logística',
    'projects.warehouse.result1': '35% reducción de costos',
    'projects.warehouse.result2': '50% procesos de picking más rápidos',
    'projects.warehouse.result3': '99% precisión de inventario',
    'projects.warehouse.testimonial': 'La solución de automatización de almacén revolucionó nuestras operaciones. Resultados increíbles en solo 6 meses.',
    'projects.warehouse.client': 'Michael Torres, Gerente de Almacén en LogiFlow',

    'projects.cloud.title': 'Migración y Modernización en la Nube',
    'projects.cloud.desc': 'Migración completa de infraestructura en la nube con prácticas modernas de DevOps, resultando en 60% de ahorro de costos y mejor escalabilidad.',
    'projects.cloud.sector': 'Tecnología',
    'projects.cloud.result1': '60% ahorro en costos de infraestructura',
    'projects.cloud.result2': '99.9% tiempo de actividad del sistema',
    'projects.cloud.result3': '10x ciclos de despliegue más rápidos',
    'projects.cloud.testimonial': 'La migración a la nube fue impecable. Nuestros sistemas ahora son más confiables y rentables que nunca.',
    'projects.cloud.client': 'Robert Kim, Director de TI en SteelWorks Inc',

    // Featured Case Study
    'projects.featured.title': 'Caso de Estudio Destacado: Halsted Logistics',
    'projects.featured.challenge': 'El Desafío',
    'projects.featured.challengeDesc': 'Halsted enfrentaba problemas significativos de gestión de inventario con procesos manuales, falta de visibilidad en tiempo real y altos costos operacionales que afectaban su posición competitiva.',
    'projects.featured.solution': 'Nuestra Solución',
    'projects.featured.solutionDesc': 'Implementamos un sistema integral Openbravo ERP con módulos personalizados para optimización de inventario, flujos de trabajo automatizados y dashboards de reportes en tiempo real.',
    'projects.featured.results': 'Los Resultados',
    'projects.featured.costReduction': 'Reducción de Costos',
    'projects.featured.fasterDelivery': 'Entrega Más Rápida',

    // Projects CTA
    'projects.cta.title': '¿Listo para Crear Tu Historia de Éxito?',
    'projects.cta.subtitle': 'Hablemos sobre cómo podemos ayudarte a lograr resultados similares con nuestras metodologías probadas y equipo experto.',
    'projects.cta.button': 'Iniciar Tu Proyecto',

    // About Page
    'about.title': 'Acerca de Doce Leguas',
    'about.subtitle': 'Somos un equipo de expertos tecnológicos apasionados dedicados a transformar empresas a través de soluciones de software innovadoras y consultoría estratégica.',

    // Our Story
    'about.story.title': 'Nuestra Historia',
    'about.story.content1': 'Fundada con la visión de cerrar la brecha entre la tecnología compleja y el éxito empresarial, Doce Leguas ha crecido hasta convertirse en un socio confiable para empresas que buscan transformación digital.',
    'about.story.content2': 'Nuestro viaje comenzó con una creencia simple: que la tecnología correcta, implementada correctamente, puede desbloquear un valor tremendo para empresas de todos los tamaños. Hoy, continuamos viviendo por este principio, entregando soluciones que impulsan resultados reales y medibles.',

    // Vision
    'about.vision.title': 'Nuestra Visión',
    'about.vision.desc': 'Ser el socio tecnológico líder que empodera a las empresas para alcanzar su máximo potencial a través de soluciones digitales innovadoras, escalables y sostenibles.',

    // Values
    'about.values.title': 'Nuestros Valores',
    'about.values.subtitle': 'Los principios que guían todo lo que hacemos y definen quiénes somos como empresa.',
    'about.values.excellence': 'Excelencia',
    'about.values.innovation': 'Innovación',
    'about.values.integrity': 'Integridad',
    'about.values.customer': 'Enfoque en el Cliente',
    'about.values.collaboration': 'Colaboración',

    // Team
    'about.team.title': 'Conoce Nuestro Equipo',
    'about.team.subtitle': 'Profesionales experimentados apasionados por la tecnología y comprometidos con tu éxito.',
    'about.team.nono.position': 'Fundador y CEO',
    'about.team.nono.description': 'Líder visionario con más de 15 años de experiencia en soluciones de software empresarial y transformación empresarial.',
    'about.team.mark.position': 'CTO y Co-fundador',
    'about.team.mark.description': 'Arquitecto técnico especializado en sistemas ERP, soluciones de IA y desarrollo de software escalable.',
    'about.team.rafael.position': 'Desarrollador Principal',
    'about.team.rafael.description': 'Desarrollador full-stack experto en tecnologías web modernas, plataformas en la nube e integración de sistemas.',
    'about.team.maarten.position': 'Consultor Senior',
    'about.team.maarten.description': 'Analista de negocios y gerente de proyectos con experiencia profunda en optimización de procesos y gestión del cambio.',

    // Culture
    'about.culture.title': 'Nuestra Cultura',
    'about.culture.content1': 'Fomentamos un ambiente colaborativo donde la innovación prospera, se fomenta el aprendizaje continuo y cada miembro del equipo contribuye a nuestro éxito colectivo.',
    'about.culture.content2': 'Nuestra cultura está construida sobre confianza, transparencia y un compromiso compartido de entregar valor excepcional a nuestros clientes mientras mantenemos el equilibrio trabajo-vida para nuestro equipo.',
    'about.culture.item1': 'Aprendizaje Continuo',
    'about.culture.item2': 'Enfoque en Innovación',
    'about.culture.item3': 'Equilibrio Trabajo-Vida',
    'about.culture.item4': 'Éxito del Cliente',

    // About CTA
    'about.cta.title': '¿Listo para Trabajar Juntos?',
    'about.cta.subtitle': 'Hablemos sobre cómo nuestro equipo puede ayudarte a lograr tus objetivos tecnológicos e impulsar el crecimiento empresarial.',
    'about.cta.contact': 'Ponerse en Contacto',

    // Contact Page
    'contact.title': 'Contáctanos',
    'contact.subtitle': '¿Listo para transformar tu negocio? Ponte en contacto con nuestro equipo de expertos para discutir tu proyecto y descubrir cómo podemos ayudarte a lograr tus objetivos.',

    // Contact Form
    'contact.form.title': 'Envíanos un Mensaje',
    'contact.form.fullName': 'Nombre Completo',
    'contact.form.email': 'Dirección de Email',
    'contact.form.phone': 'Número de Teléfono',
    'contact.form.company': 'Empresa',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar Mensaje',
    'contact.form.success': '¡Mensaje Enviado Exitosamente!',
    'contact.form.successDesc': 'Gracias por contactarnos. Te responderemos dentro de 24 horas.',
    'contact.form.selectSubject': 'Selecciona un asunto...',

    // Form Placeholders
    'contact.form.placeholders.fullName': 'Ingresa tu nombre completo',
    'contact.form.placeholders.email': 'Ingresa tu dirección de email',
    'contact.form.placeholders.phone': 'Ingresa tu número de teléfono',
    'contact.form.placeholders.company': 'Ingresa el nombre de tu empresa',
    'contact.form.placeholders.message': 'Cuéntanos sobre tu proyecto o requisitos...',

    // Form Subjects
    'contact.form.subjects.generalinquiry': 'Consulta General',
    'contact.form.subjects.openbravoconsultation': 'Consulta Openbravo',
    'contact.form.subjects.odooimplementation': 'Implementación Odoo',
    'contact.form.subjects.aisolutions': 'Soluciones de IA',
    'contact.form.subjects.customdevelopment': 'Desarrollo Personalizado',
    'contact.form.subjects.technicalsupport': 'Soporte Técnico',
    'contact.form.subjects.partnershipopportunity': 'Oportunidad de Asociación',
    'contact.form.subjects.other': 'Otro',

    // Contact Info
    'contact.info.title': 'Ponte en Contacto',
    'contact.info.email': 'Email',
    'contact.info.emailDesc': 'Envíanos un email en cualquier momento',
    'contact.info.phone': 'Teléfono',
    'contact.info.phoneDesc': 'Llámanos durante horario comercial',
    'contact.info.office': 'Ubicaciones de Oficina',
    'contact.info.officeDesc': 'Visítanos en nuestras oficinas',
    'contact.info.hours': 'Horario Comercial',
    'contact.info.hoursDesc': '9:00 AM - 6:00 PM (GMT)',

    // Why Contact
    'contact.whyContact.title': '¿Por qué contactarnos?',
    'contact.whyContact.item1': 'Consulta inicial gratuita y evaluación del proyecto',
    'contact.whyContact.item2': 'Soluciones personalizadas adaptadas a tus necesidades específicas',
    'contact.whyContact.item3': 'Equipo experto con historial comprobado en soluciones empresariales',
    'contact.whyContact.item4': 'Soporte continuo y mantenimiento para todas nuestras implementaciones',

    // Footer
    'footer.description': 'Transformando empresas a través de soluciones tecnológicas innovadoras. Tu socio confiable para la transformación digital.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.services': 'Servicios',
    'footer.contactInfo': 'Información de Contacto',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.legal': 'Aviso Legal',
    'footer.sitemap': 'Mapa del Sitio',

    // ChatBot
    'chatbot.title': 'Asistente Doce Leguas',
    'chatbot.subtitle': '¿Cómo podemos ayudarte hoy?',
    'chatbot.welcome': '¡Hola! Estoy aquí para ayudarte a conocer más sobre nuestros servicios y soluciones. ¿Cómo puedo asistirte hoy?',
    'chatbot.placeholder': 'Escribe tu mensaje...',
    'chatbot.open': 'Abrir chat',
    'chatbot.close': 'Cerrar chat',
    'chatbot.defaultResponse': 'Gracias por tu mensaje. Nuestro equipo te responderá pronto con más información.',
    'chatbot.errorMessage': 'Lo siento, tengo problemas de conexión ahora. Por favor intenta más tarde o contáctanos directamente.'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};