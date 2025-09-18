import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

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
    'home.hero.title': 'Transform Your Business with Innovative Software Solutions',
    'home.hero.subtitle': 'We specialize in Openbravo, Odoo, AI solutions, and custom development to drive your digital transformation.',
    'home.hero.viewServices': 'View Our Services',
    'home.hero.startProject': 'Start Your Project',

    'home.valueProps.title': 'Why Choose Doce Leguas?',
    'home.valueProps.subtitle': 'We combine technical expertise with strategic vision to deliver solutions that truly make a difference.',
    'home.valueProps.innovation': 'Innovation',
    'home.valueProps.innovation.desc': 'We stay at the forefront of technology to offer cutting-edge solutions.',
    'home.valueProps.custom': 'Customization',
    'home.valueProps.custom.desc': 'Every solution is tailored to your specific needs and business processes.',
    'home.valueProps.results': 'Proven Results',
    'home.valueProps.results.desc': 'Our track record speaks for itself with successful implementations.',
    'home.valueProps.team': 'Expert Team',
    'home.valueProps.team.desc': 'Certified professionals with years of experience in enterprise solutions.',

    'home.services.title': 'Our Core Services',
    'home.services.subtitle': 'Comprehensive solutions to transform your business operations.',
    'home.services.openbravo': 'Openbravo ERP',
    'home.services.openbravo.desc': 'Complete ERP implementation and customization for enterprise management.',
    'home.services.odoo': 'Odoo Solutions',
    'home.services.odoo.desc': 'Comprehensive business management with Odoo\'s integrated suite.',
    'home.services.ai': 'AI Solutions',
    'home.services.ai.desc': 'Intelligent automation, virtual agents, and AI-powered workflows for data-driven decision making.',
    'home.services.custom': 'Custom Development',
    'home.services.custom.desc': 'Tailored software solutions built specifically for your needs.',
    'home.services.n8n': 'n8n Automation',
    'home.services.n8n.desc': 'Workflow automation and system integration with n8n.',
    'home.services.automation': 'Process Automation',
    'home.services.automation.desc': 'Streamline operations with intelligent automation solutions.',
    'home.services.learnMore': 'Learn More',

    'home.projects.title': 'Success Stories',
    'home.projects.subtitle': 'See how we\'ve helped businesses achieve their digital transformation goals.',
    'home.projects.viewCase': 'View Case Study',

    'home.testimonials.title': 'What Our Clients Say',

    'home.logistics.title': 'Specialized Solutions for Logistics & Retail',
    'home.logistics.subtitle': 'Industry-specific expertise to optimize your operations and drive growth.',
    'home.logistics.supply.title': 'Supply Chain Optimization',
    'home.logistics.supply.desc': 'Streamline your logistics operations with intelligent supply chain management.',
    'home.logistics.supply.feature1': 'Real-time inventory tracking',
    'home.logistics.supply.feature2': 'Automated reordering systems',
    'home.logistics.supply.feature3': 'Predictive demand planning',
    'home.logistics.retail.title': 'Retail Management',
    'home.logistics.retail.desc': 'Complete retail solutions from POS to customer management.',
    'home.logistics.retail.feature1': 'Integrated POS systems',
    'home.logistics.retail.feature2': 'Customer loyalty programs',
    'home.logistics.retail.feature3': 'Multi-channel integration',
    'home.logistics.expertise.title': 'Industry Expertise',
    'home.logistics.expertise.desc': 'Deep understanding of logistics and retail challenges.',
    'home.logistics.expertise.stat1': 'Projects',
    'home.logistics.expertise.stat2': 'Success Rate',
    'home.logistics.cta': 'Explore Our Solutions',

    'home.cta.title': 'Ready to Transform Your Business?',
    'home.cta.subtitle': 'Let\'s discuss how we can help you achieve your digital transformation goals.',
    'home.cta.schedule': 'Schedule a Consultation',
    'home.cta.contact': 'Contact Us',

    // About Page
    'about.title': 'About Doce Leguas: Innovation, Excellence, and Results',
    'about.subtitle': 'We are a team of passionate professionals dedicated to transforming businesses through innovative technology solutions.',
    'about.story.title': 'Our Story',
    'about.vision.title': 'Our Vision',
    'about.vision.desc': 'To be the benchmark in customized software solutions, recognized for our ability to innovate, the quality of our work, and the sustained success of our clients.',
    'about.values.title': 'Our Values',
    'about.values.subtitle': 'The principles that guide everything we do.',
    'about.values.excellence': 'Excellence',
    'about.values.innovation': 'Innovation',
    'about.values.integrity': 'Integrity',
    'about.values.customer': 'Customer Focus',
    'about.values.collaboration': 'Collaboration',
    'about.team.title': 'Meet Our Team',
    'about.team.subtitle': 'Experienced professionals committed to your success.',
    'about.culture.title': 'Our Company Culture',
    'about.cta.title': 'Ready to Work Together?',
    'about.cta.subtitle': 'Let\'s discuss how our team can help you achieve your business goals.',
    'about.cta.contact': 'Contact Our Team',

    // Contact Page
    'contact.title': 'Contact Us: Let\'s Start Your Digital Transformation',
    'contact.subtitle': 'We\'re here to help you achieve your business goals. Get in touch with our team of experts.',
    'contact.form.title': 'Send Us a Message',
    'contact.form.fullName': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.company': 'Company',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.success': 'Message Sent Successfully!',
    'contact.form.successDesc': 'Thank you for contacting us. We\'ll get back to you within 24 hours.',
    'contact.info.title': 'Contact Information',
    'contact.info.email': 'Email',
    'contact.info.emailDesc': 'Send us an email anytime',
    'contact.info.phone': 'Phone',
    'contact.info.phoneDesc': 'Call us during business hours',
    'contact.info.office': 'Office',
    'contact.info.officeDesc': 'Visit our office',
    'contact.info.hours': 'Business Hours',
    'contact.info.hoursDesc': '9:00 AM - 6:00 PM',

    // Footer
    'footer.description': 'Transforming businesses through innovative software solutions and expert consulting.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contactInfo': 'Contact Info',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.legal': 'Legal Notice',
    'footer.sitemap': 'Sitemap',

    // ChatBot
    'chatbot.title': 'Doce Leguas Assistant',
    'chatbot.subtitle': 'How can we help you?',
    'chatbot.welcome': 'Hello! I\'m here to help you with any questions about our services. How can I assist you today?',
    'chatbot.placeholder': 'Type your message...',
    'chatbot.open': 'Open chat',
    'chatbot.close': 'Close chat',
    'chatbot.defaultResponse': 'Thank you for your message. Our team will get back to you soon.',
    'chatbot.errorMessage': 'Sorry, I\'m having trouble connecting right now. Please try again later or contact us directly.'

    // Services Page
    'services.title': 'Our Services: Your Path to Digital Excellence',
    'services.subtitle': 'At Doce Leguas, we combine deep technical expertise with strategic business vision to offer you software solutions that truly work. Explore our range of services designed to drive your growth.',

    // Solutions Page
    'solutions.title': 'Comprehensive Solutions for Your Sector',
    'solutions.subtitle': 'We have developed packaged solutions that address the most common challenges in various industries, combining our experience in Openbravo, Odoo, AI, and custom development to offer you unprecedented value.',

    // Projects Page
    'projects.title': 'Our Projects: Stories of Success and Transformation',
    'projects.subtitle': 'Each project is an opportunity to demonstrate our commitment to excellence. Here we present some of our most relevant works, showing how we have helped companies achieve their digital goals.'
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
    'home.hero.title': 'Transforma Tu Negocio con Soluciones de Software Innovadoras',
    'home.hero.subtitle': 'Nos especializamos en Openbravo, Odoo, soluciones de IA y desarrollo personalizado para impulsar tu transformación digital.',
    'home.hero.viewServices': 'Ver Nuestros Servicios',
    'home.hero.startProject': 'Iniciar Tu Proyecto',

    'home.valueProps.title': '¿Por Qué Elegir Doce Leguas?',
    'home.valueProps.subtitle': 'Combinamos experiencia técnica con visión estratégica para entregar soluciones que realmente marcan la diferencia.',
    'home.valueProps.innovation': 'Innovación',
    'home.valueProps.innovation.desc': 'Nos mantenemos a la vanguardia de la tecnología para ofrecer soluciones de última generación.',
    'home.valueProps.custom': 'Personalización',
    'home.valueProps.custom.desc': 'Cada solución se adapta a tus necesidades específicas y procesos de negocio.',
    'home.valueProps.results': 'Resultados Comprobados',
    'home.valueProps.results.desc': 'Nuestro historial habla por sí mismo con implementaciones exitosas.',
    'home.valueProps.team': 'Equipo Experto',
    'home.valueProps.team.desc': 'Profesionales certificados con años de experiencia en soluciones empresariales.',

    'home.services.title': 'Nuestros Servicios Principales',
    'home.services.subtitle': 'Soluciones integrales para transformar las operaciones de tu negocio.',
    'home.services.openbravo': 'Openbravo ERP',
    'home.services.openbravo.desc': 'Implementación y personalización completa de ERP para gestión empresarial.',
    'home.services.odoo': 'Soluciones Odoo',
    'home.services.odoo.desc': 'Gestión empresarial integral con la suite integrada de Odoo.',
    'home.services.ai': 'Soluciones de IA',
    'home.services.ai.desc': 'Automatización inteligente, agentes virtuales y flujos de trabajo potenciados por IA para toma de decisiones basada en datos.',
    'home.services.custom': 'Desarrollo Personalizado',
    'home.services.custom.desc': 'Soluciones de software a medida construidas específicamente para tus necesidades.',
    'home.services.n8n': 'Automatización n8n',
    'home.services.n8n.desc': 'Automatización de flujos de trabajo e integración de sistemas con n8n.',
    'home.services.automation': 'Automatización de Procesos',
    'home.services.automation.desc': 'Optimiza operaciones con soluciones de automatización inteligente.',
    'home.services.learnMore': 'Saber Más',

    'home.projects.title': 'Historias de Éxito',
    'home.projects.subtitle': 'Descubre cómo hemos ayudado a empresas a lograr sus objetivos de transformación digital.',
    'home.projects.viewCase': 'Ver Caso de Estudio',

    'home.testimonials.title': 'Lo Que Dicen Nuestros Clientes',

    'home.logistics.title': 'Soluciones Especializadas para Logística y Retail',
    'home.logistics.subtitle': 'Experiencia específica de la industria para optimizar tus operaciones e impulsar el crecimiento.',
    'home.logistics.supply.title': 'Optimización de Cadena de Suministro',
    'home.logistics.supply.desc': 'Optimiza tus operaciones logísticas con gestión inteligente de cadena de suministro.',
    'home.logistics.supply.feature1': 'Seguimiento de inventario en tiempo real',
    'home.logistics.supply.feature2': 'Sistemas de reorden automatizado',
    'home.logistics.supply.feature3': 'Planificación predictiva de demanda',
    'home.logistics.retail.title': 'Gestión de Retail',
    'home.logistics.retail.desc': 'Soluciones completas de retail desde POS hasta gestión de clientes.',
    'home.logistics.retail.feature1': 'Sistemas POS integrados',
    'home.logistics.retail.feature2': 'Programas de fidelización',
    'home.logistics.retail.feature3': 'Integración multicanal',
    'home.logistics.expertise.title': 'Experiencia en la Industria',
    'home.logistics.expertise.desc': 'Comprensión profunda de los desafíos de logística y retail.',
    'home.logistics.expertise.stat1': 'Proyectos',
    'home.logistics.expertise.stat2': 'Tasa de Éxito',
    'home.logistics.cta': 'Explorar Nuestras Soluciones',

    'home.cta.title': '¿Listo para Transformar Tu Negocio?',
    'home.cta.subtitle': 'Hablemos sobre cómo podemos ayudarte a lograr tus objetivos de transformación digital.',
    'home.cta.schedule': 'Programar una Consulta',
    'home.cta.contact': 'Contáctanos',

    // About Page
    'about.title': 'Acerca de Doce Leguas: Innovación, Excelencia y Resultados',
    'about.subtitle': 'Somos un equipo de profesionales apasionados dedicados a transformar empresas a través de soluciones tecnológicas innovadoras.',
    'about.story.title': 'Nuestra Historia',
    'about.vision.title': 'Nuestra Visión',
    'about.vision.desc': 'Ser el referente en soluciones de software personalizadas, reconocidos por nuestra capacidad de innovar, la calidad de nuestro trabajo y el éxito sostenido de nuestros clientes.',
    'about.values.title': 'Nuestros Valores',
    'about.values.subtitle': 'Los principios que guían todo lo que hacemos.',
    'about.values.excellence': 'Excelencia',
    'about.values.innovation': 'Innovación',
    'about.values.integrity': 'Integridad',
    'about.values.customer': 'Enfoque al Cliente',
    'about.values.collaboration': 'Colaboración',
    'about.team.title': 'Conoce Nuestro Equipo',
    'about.team.subtitle': 'Profesionales experimentados comprometidos con tu éxito.',
    'about.culture.title': 'Nuestra Cultura Empresarial',
    'about.cta.title': '¿Listo para Trabajar Juntos?',
    'about.cta.subtitle': 'Hablemos sobre cómo nuestro equipo puede ayudarte a lograr tus objetivos empresariales.',
    'about.cta.contact': 'Contactar Nuestro Equipo',

    // Contact Page
    'contact.title': 'Contáctanos: Comencemos Tu Transformación Digital',
    'contact.subtitle': 'Estamos aquí para ayudarte a lograr tus objetivos empresariales. Ponte en contacto con nuestro equipo de expertos.',
    'contact.form.title': 'Envíanos un Mensaje',
    'contact.form.fullName': 'Nombre Completo',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.phone': 'Número de Teléfono',
    'contact.form.company': 'Empresa',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar Mensaje',
    'contact.form.success': '¡Mensaje Enviado Exitosamente!',
    'contact.form.successDesc': 'Gracias por contactarnos. Te responderemos dentro de 24 horas.',
    'contact.info.title': 'Información de Contacto',
    'contact.info.email': 'Correo',
    'contact.info.emailDesc': 'Envíanos un correo en cualquier momento',
    'contact.info.phone': 'Teléfono',
    'contact.info.phoneDesc': 'Llámanos durante horario comercial',
    'contact.info.office': 'Oficina',
    'contact.info.officeDesc': 'Visita nuestra oficina',
    'contact.info.hours': 'Horario Comercial',
    'contact.info.hoursDesc': '9:00 AM - 6:00 PM',

    // Footer
    'footer.description': 'Transformando empresas a través de soluciones de software innovadoras y consultoría experta.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.services': 'Servicios',
    'footer.contactInfo': 'Información de Contacto',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.legal': 'Aviso Legal',
    'footer.sitemap': 'Mapa del Sitio',

    // ChatBot
    'chatbot.title': 'Asistente Doce Leguas',
    'chatbot.subtitle': '¿Cómo podemos ayudarte?',
    'chatbot.welcome': '¡Hola! Estoy aquí para ayudarte con cualquier pregunta sobre nuestros servicios. ¿Cómo puedo asistirte hoy?',
    'chatbot.placeholder': 'Escribe tu mensaje...',
    'chatbot.open': 'Abrir chat',
    'chatbot.close': 'Cerrar chat',
    'chatbot.defaultResponse': 'Gracias por tu mensaje. Nuestro equipo te responderá pronto.',
    'chatbot.errorMessage': 'Lo siento, tengo problemas de conexión ahora. Por favor intenta más tarde o contáctanos directamente.'

    // Services Page
    'services.title': 'Nuestros Servicios: Tu Camino hacia la Excelencia Digital',
    'services.subtitle': 'En Doce Leguas, combinamos profunda experiencia técnica con visión estratégica empresarial para ofrecerte soluciones de software que realmente funcionan. Explora nuestra gama de servicios diseñados para impulsar tu crecimiento.',

    // Solutions Page
    'solutions.title': 'Soluciones Integrales para Tu Sector',
    'solutions.subtitle': 'Hemos desarrollado soluciones empaquetadas que abordan los desafíos más comunes en diversas industrias, combinando nuestra experiencia en Openbravo, Odoo, IA y desarrollo personalizado para ofrecerte un valor sin precedentes.',

    // Projects Page
    'projects.title': 'Nuestros Proyectos: Historias de Éxito y Transformación',
    'projects.subtitle': 'Cada proyecto es una oportunidad para demostrar nuestro compromiso con la excelencia. Aquí presentamos algunos de nuestros trabajos más relevantes, mostrando cómo hemos ayudado a empresas a lograr sus objetivos digitales.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
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