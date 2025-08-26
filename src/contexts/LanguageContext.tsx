import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.solutions': 'Solutions',
    'nav.projects': 'Projects',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    
    // Home Page
    'home.hero.title': 'Boost Your Business with Innovative Software Solutions',
    'home.hero.subtitle': 'We transform your challenges into digital opportunities. Experts in Openbravo, Odoo, Artificial Intelligence, and custom development for unprecedented efficiency.',
    'home.hero.viewServices': 'View Our Services',
    'home.hero.startProject': 'Start a Project',
    
    'home.valueProps.title': 'Your Strategic Partner in the Digital Era',
    'home.valueProps.subtitle': 'At Doce Leguas, we understand that each business is unique. We offer more than software development: we provide customized solutions that optimize processes, reduce costs, and open new growth avenues.',
    'home.valueProps.innovation': 'Constant Innovation',
    'home.valueProps.innovation.desc': 'Always at the forefront of the latest technologies.',
    'home.valueProps.custom': 'Custom Solutions',
    'home.valueProps.custom.desc': 'Developments that perfectly fit your needs.',
    'home.valueProps.results': 'Proven Results',
    'home.valueProps.results.desc': 'Real impact on your company\'s efficiency and profitability.',
    'home.valueProps.team': 'Expert Team',
    'home.valueProps.team.desc': 'Highly qualified and dedicated professionals.',
    
    'home.services.title': 'What Can We Do For You?',
    'home.services.subtitle': 'Explore our comprehensive range of services designed to transform your business operations.',
    'home.services.openbravo': 'Openbravo Development',
    'home.services.openbravo.desc': 'Maximize your ERP efficiency with our specialists.',
    'home.services.odoo': 'Odoo Implementation',
    'home.services.odoo.desc': 'Automate and centralize your business management.',
    'home.services.ai': 'AI Applications',
    'home.services.ai.desc': 'Transform data into strategic decisions and intelligent operations.',
    'home.services.custom': 'Custom Development',
    'home.services.custom.desc': 'Create the perfect tool for your unique challenges.',
    'home.services.n8n': 'N8n Workflows',
    'home.services.n8n.desc': 'Automate complex business processes with powerful workflow automation.',
    'home.services.automation': 'Business Automation',
    'home.services.automation.desc': 'Streamline operations and eliminate manual tasks with intelligent automation.',
    'home.services.learnMore': 'Learn More',
    
    'home.projects.title': 'Results That Speak for Themselves',
    'home.projects.subtitle': 'Discover how we\'ve helped companies achieve their digital transformation goals.',
    'home.projects.viewCase': 'View Case Study',
    
    'home.testimonials.title': 'What Our Clients Say',
    
    'home.cta.title': 'Ready to Take Your Business to the Next Level?',
    'home.cta.subtitle': 'Let us understand your challenges and offer you a solution that makes a difference. Contact us today for a no-obligation consultation.',
    'home.cta.schedule': 'Schedule a Meeting',
    'home.cta.contact': 'Contact Us Now',
    
    // Logistics & Retail Section
    'home.logistics.title': 'Specialized Solutions for Logistics & Retail',
    'home.logistics.subtitle': 'Transform your supply chain and retail operations with our industry-specific expertise and cutting-edge technology solutions.',
    'home.logistics.supply.title': 'Supply Chain Optimization',
    'home.logistics.supply.desc': 'Streamline your logistics operations with intelligent inventory management and automated workflows.',
    'home.logistics.supply.feature1': 'Real-time inventory tracking',
    'home.logistics.supply.feature2': 'Automated reordering systems',
    'home.logistics.supply.feature3': 'Predictive demand planning',
    'home.logistics.retail.title': 'Retail Management Systems',
    'home.logistics.retail.desc': 'Enhance customer experience and boost sales with integrated retail solutions.',
    'home.logistics.retail.feature1': 'Multi-channel POS systems',
    'home.logistics.retail.feature2': 'Customer loyalty programs',
    'home.logistics.retail.feature3': 'Sales analytics & reporting',
    'home.logistics.expertise.title': 'Industry Expertise',
    'home.logistics.expertise.desc': 'Years of experience delivering successful projects in logistics and retail sectors.',
    'home.logistics.expertise.stat1': 'Projects Delivered',
    'home.logistics.expertise.stat2': 'Client Satisfaction',
    'home.logistics.cta': 'Explore Our Solutions',
    
    // Footer
    'footer.description': 'Your strategic partner in the digital era. Transforming challenges into digital opportunities with innovative software solutions.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Our Services',
    'footer.contactInfo': 'Contact Info',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.legal': 'Legal Notice',
    'footer.sitemap': 'Sitemap',
    
    // Contact Page
    'contact.title': 'Contact Us: Let\'s Talk About Your Next Big Project',
    'contact.subtitle': 'We are ready to listen to your challenges and turn them into tangible solutions. Fill out the form, call us, or email us. We will respond as soon as possible!',
    'contact.form.title': 'Send Us a Message',
    'contact.form.fullName': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.company': 'Company',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.success': 'Message Sent Successfully!',
    'contact.form.successDesc': 'Thank you for contacting us. We\'ll get back to you within 24 hours.',
    
    'contact.info.title': 'Get in Touch',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.office': 'Office',
    'contact.info.hours': 'Working Hours',
    'contact.info.emailDesc': 'Send us an email anytime',
    'contact.info.phoneDesc': 'Mon-Fri from 9am to 6pm',
    'contact.info.officeDesc': 'Come visit our office',
    'contact.info.hoursDesc': '9:00 AM - 6:00 PM (CEST)',
    
    // About Page
    'about.title': 'About Us: Experience, Passion, and Innovation at the Service of Your Business',
    'about.subtitle': 'Building the digital future together, one innovative solution at a time.',
    'about.story.title': 'Building the Digital Future with You',
    'about.vision.title': 'Our Vision:',
    'about.vision.desc': 'To be the benchmark in customized software solutions, recognized for our ability to innovate, the quality of our work, and the sustained success of our clients.',
    
    'about.values.title': 'Our Values Guide Everything We Do',
    'about.values.subtitle': 'These core principles shape how we work, interact with clients, and deliver solutions.',
    'about.values.excellence': 'Excellence',
    'about.values.innovation': 'Innovation',
    'about.values.integrity': 'Integrity',
    'about.values.customer': 'Customer Orientation',
    'about.values.collaboration': 'Collaboration',
    
    'about.team.title': 'Meet Our Experts',
    'about.team.subtitle': 'Our talented team combines deep technical expertise with business acumen to deliver exceptional results.',
    
    'about.culture.title': 'Our Culture of Innovation',
    'about.cta.title': 'Join the Family of Companies That Already Trust Us',
    'about.cta.subtitle': 'Experience the real impact of working with experts who are passionate about your success.',
    'about.cta.contact': 'Contact Us Today',
  },
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.solutions': 'Soluciones',
    'nav.projects': 'Proyectos',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.getStarted': 'Comenzar',
    
    // Home Page
    'home.hero.title': 'Impulsa Tu Negocio con Soluciones de Software Innovadoras',
    'home.hero.subtitle': 'Transformamos tus desafíos en oportunidades digitales. Expertos en Openbravo, Odoo, Inteligencia Artificial y desarrollo personalizado para una eficiencia sin precedentes.',
    'home.hero.viewServices': 'Ver Nuestros Servicios',
    'home.hero.startProject': 'Iniciar un Proyecto',
    
    'home.valueProps.title': 'Tu Socio Estratégico en la Era Digital',
    'home.valueProps.subtitle': 'En Doce Leguas, entendemos que cada negocio es único. Ofrecemos más que desarrollo de software: proporcionamos soluciones personalizadas que optimizan procesos, reducen costos y abren nuevas vías de crecimiento.',
    'home.valueProps.innovation': 'Innovación Constante',
    'home.valueProps.innovation.desc': 'Siempre a la vanguardia de las últimas tecnologías.',
    'home.valueProps.custom': 'Soluciones Personalizadas',
    'home.valueProps.custom.desc': 'Desarrollos que se adaptan perfectamente a tus necesidades.',
    'home.valueProps.results': 'Resultados Comprobados',
    'home.valueProps.results.desc': 'Impacto real en la eficiencia y rentabilidad de tu empresa.',
    'home.valueProps.team': 'Equipo Experto',
    'home.valueProps.team.desc': 'Profesionales altamente calificados y dedicados.',
    
    'home.services.title': '¿Qué Podemos Hacer Por Ti?',
    'home.services.subtitle': 'Explora nuestra amplia gama de servicios diseñados para transformar las operaciones de tu negocio.',
    'home.services.openbravo': 'Desarrollo Openbravo',
    'home.services.openbravo.desc': 'Maximiza la eficiencia de tu ERP con nuestros especialistas.',
    'home.services.odoo': 'Implementación Odoo',
    'home.services.odoo.desc': 'Automatiza y centraliza la gestión de tu negocio.',
    'home.services.ai': 'Aplicaciones de IA',
    'home.services.ai.desc': 'Transforma datos en decisiones estratégicas y operaciones inteligentes.',
    'home.services.custom': 'Desarrollo Personalizado',
    'home.services.custom.desc': 'Crea la herramienta perfecta para tus desafíos únicos.',
    'home.services.n8n': 'Flujos de Trabajo N8n',
    'home.services.n8n.desc': 'Automatiza procesos empresariales complejos con potente automatización de flujos de trabajo.',
    'home.services.automation': 'Automatización Empresarial',
    'home.services.automation.desc': 'Optimiza operaciones y elimina tareas manuales con automatización inteligente.',
    'home.services.learnMore': 'Saber Más',
    
    'home.projects.title': 'Resultados Que Hablan Por Sí Mismos',
    'home.projects.subtitle': 'Descubre cómo hemos ayudado a las empresas a lograr sus objetivos de transformación digital.',
    'home.projects.viewCase': 'Ver Caso de Estudio',
    
    'home.testimonials.title': 'Lo Que Dicen Nuestros Clientes',
    
    'home.cta.title': '¿Listo Para Llevar Tu Negocio al Siguiente Nivel?',
    'home.cta.subtitle': 'Permítenos entender tus desafíos y ofrecerte una solución que marque la diferencia. ¡Contáctanos hoy para una consulta sin compromiso!',
    'home.cta.schedule': 'Programar una Reunión',
    'home.cta.contact': 'Contáctanos Ahora',
    
    // Logistics & Retail Section
    'home.logistics.title': 'Soluciones Especializadas para Logística y Retail',
    'home.logistics.subtitle': 'Transforma tu cadena de suministro y operaciones retail con nuestra experiencia específica del sector y soluciones tecnológicas de vanguardia.',
    'home.logistics.supply.title': 'Optimización de Cadena de Suministro',
    'home.logistics.supply.desc': 'Optimiza tus operaciones logísticas con gestión inteligente de inventario y flujos de trabajo automatizados.',
    'home.logistics.supply.feature1': 'Seguimiento de inventario en tiempo real',
    'home.logistics.supply.feature2': 'Sistemas de reorden automatizado',
    'home.logistics.supply.feature3': 'Planificación predictiva de demanda',
    'home.logistics.retail.title': 'Sistemas de Gestión Retail',
    'home.logistics.retail.desc': 'Mejora la experiencia del cliente y aumenta las ventas con soluciones retail integradas.',
    'home.logistics.retail.feature1': 'Sistemas POS multicanal',
    'home.logistics.retail.feature2': 'Programas de fidelización',
    'home.logistics.retail.feature3': 'Análisis y reportes de ventas',
    'home.logistics.expertise.title': 'Experiencia en la Industria',
    'home.logistics.expertise.desc': 'Años de experiencia entregando proyectos exitosos en los sectores de logística y retail.',
    'home.logistics.expertise.stat1': 'Proyectos Entregados',
    'home.logistics.expertise.stat2': 'Satisfacción del Cliente',
    'home.logistics.cta': 'Explorar Nuestras Soluciones',
    
    // Footer
    'footer.description': 'Tu socio estratégico en la era digital. Transformando desafíos en oportunidades digitales con soluciones de software innovadoras.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.services': 'Nuestros Servicios',
    'footer.contactInfo': 'Información de Contacto',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.legal': 'Aviso Legal',
    'footer.sitemap': 'Mapa del Sitio',
    
    // Contact Page
    'contact.title': 'Contáctanos: Hablemos de Tu Próximo Gran Proyecto',
    'contact.subtitle': 'Estamos listos para escuchar tus desafíos y convertirlos en soluciones tangibles. ¡Completa el formulario, llámanos o envíanos un email. Te responderemos lo antes posible!',
    'contact.form.title': 'Envíanos un Mensaje',
    'contact.form.fullName': 'Nombre Completo',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Teléfono',
    'contact.form.company': 'Empresa',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar Mensaje',
    'contact.form.success': '¡Mensaje Enviado Exitosamente!',
    'contact.form.successDesc': 'Gracias por contactarnos. Te responderemos dentro de 24 horas.',
    
    'contact.info.title': 'Ponte en Contacto',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Teléfono',
    'contact.info.office': 'Oficina',
    'contact.info.hours': 'Horario de Trabajo',
    'contact.info.emailDesc': 'Envíanos un email en cualquier momento',
    'contact.info.phoneDesc': 'Lun-Vie de 9am a 6pm',
    'contact.info.officeDesc': 'Ven a visitar nuestra oficina',
    'contact.info.hoursDesc': '9:00 AM - 6:00 PM (CEST)',
    
    // About Page
    'about.title': 'Nosotros: Experiencia, Pasión e Innovación al Servicio de Tu Negocio',
    'about.subtitle': 'Construyendo el futuro digital juntos, una solución innovadora a la vez.',
    'about.story.title': 'Construyendo el Futuro Digital Contigo',
    'about.vision.title': 'Nuestra Visión:',
    'about.vision.desc': 'Ser el referente en soluciones de software personalizadas, reconocidos por nuestra capacidad de innovar, la calidad de nuestro trabajo y el éxito sostenido de nuestros clientes.',
    
    'about.values.title': 'Nuestros Valores Guían Todo Lo Que Hacemos',
    'about.values.subtitle': 'Estos principios fundamentales dan forma a cómo trabajamos, interactuamos con los clientes y entregamos soluciones.',
    'about.values.excellence': 'Excelencia',
    'about.values.innovation': 'Innovación',
    'about.values.integrity': 'Integridad',
    'about.values.customer': 'Orientación al Cliente',
    'about.values.collaboration': 'Colaboración',
    
    'about.team.title': 'Conoce a Nuestros Expertos',
    'about.team.subtitle': 'Nuestro talentoso equipo combina profunda experiencia técnica con conocimiento empresarial para entregar resultados excepcionales.',
    
    'about.culture.title': 'Nuestra Cultura de Innovación',
    'about.cta.title': 'Únete a la Familia de Empresas Que Ya Confían en Nosotros',
    'about.cta.subtitle': 'Experimenta el impacto real de trabajar con expertos apasionados por tu éxito.',
    'about.cta.contact': 'Contáctanos Hoy',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};