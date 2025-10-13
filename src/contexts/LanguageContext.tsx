import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Navigation
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      solutions: 'Soluciones',
      projects: 'Proyectos',
      about: 'Nosotros',
      contact: 'Contacto',
      getStarted: 'Comenzar'
    },
    
    // Home Page
    home: {
      hero: {
        title: 'Transformamos tu negocio con soluciones tecnológicas innovadoras',
        subtitle: 'Especializados en Openbravo, Odoo, IA y desarrollo personalizado para impulsar el crecimiento de tu empresa',
        viewServices: 'Ver Servicios',
        startProject: 'Iniciar Proyecto'
      },
      valueProps: {
        title: '¿Por qué elegir Doce Leguas?',
        subtitle: 'Combinamos experiencia técnica con visión estratégica para entregar soluciones que realmente transforman tu negocio',
        innovation: {
          title: 'Innovación',
          desc: 'Utilizamos tecnologías de vanguardia para crear soluciones que te den ventaja competitiva'
        },
        custom: {
          title: 'Personalización',
          desc: 'Cada solución se adapta específicamente a las necesidades y procesos de tu negocio'
        },
        results: {
          title: 'Resultados',
          desc: 'Nos enfocamos en entregar resultados medibles que impulsen el crecimiento de tu empresa'
        },
        team: {
          title: 'Equipo Experto',
          desc: 'Nuestros profesionales experimentados están comprometidos con el éxito de tu proyecto'
        }
      },
      services: {
        title: 'Nuestros Servicios',
        subtitle: 'Soluciones integrales para cada necesidad de tu negocio',
        openbravo: {
          title: 'Openbravo ERP',
          desc: 'Implementación y personalización completa de ERP para optimización empresarial'
        },
        odoo: {
          title: 'Odoo Solutions',
          desc: 'Gestión empresarial integral con la suite más completa'
        },
        ai: {
          title: 'Soluciones de IA',
          desc: 'Automatización inteligente y análisis predictivo para mejores decisiones'
        },
        custom: {
          title: 'Desarrollo Personalizado',
          desc: 'Soluciones de software a medida diseñadas para tus procesos únicos'
        },
        n8n: {
          title: 'Automatización n8n',
          desc: 'Automatización de flujos de trabajo para optimizar tus procesos empresariales'
        },
        automation: {
          title: 'Automatización de Procesos',
          desc: 'Automatización inteligente para reducir trabajo manual y errores'
        },
        learnMore: 'Saber más'
      },
      projects: {
        title: 'Casos de Éxito',
        subtitle: 'Descubre cómo hemos transformado negocios con nuestras soluciones',
        viewCase: 'Ver caso de estudio'
      },
      testimonials: {
        title: 'Lo que dicen nuestros clientes'
      },
      logistics: {
        title: 'Soluciones Especializadas para Logística y Retail',
        subtitle: 'Optimizamos tu cadena de suministro y operaciones comerciales con tecnología de vanguardia',
        supply: {
          title: 'Gestión de Cadena de Suministro',
          desc: 'Optimiza tu inventario y logística con soluciones inteligentes',
          feature1: 'Control de inventario en tiempo real',
          feature2: 'Optimización de rutas de entrega',
          feature3: 'Predicción de demanda con IA'
        },
        retail: {
          title: 'Soluciones para Retail',
          desc: 'Mejora la experiencia del cliente y aumenta las ventas',
          feature1: 'Punto de venta integrado',
          feature2: 'Gestión de múltiples tiendas',
          feature3: 'Análisis de comportamiento del cliente'
        },
        expertise: {
          title: 'Experiencia Comprobada',
          desc: 'Años de experiencia en el sector logístico y retail',
          stat1: 'Proyectos',
          stat2: 'Satisfacción'
        },
        cta: 'Explorar Soluciones'
      },
      cta: {
        title: '¿Listo para transformar tu negocio?',
        subtitle: 'Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos empresariales',
        schedule: 'Agendar Consulta',
        contact: 'Contactar Ahora'
      }
    },

    // Services Page
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones tecnológicas integrales diseñadas para impulsar el crecimiento de tu empresa',
      keyBenefits: 'Beneficios Clave',
      whatWeOffer: 'Lo que ofrecemos',
      openbravo: {
        title: 'Openbravo ERP',
        description: 'Implementación y personalización completa de Openbravo ERP para optimizar todos los procesos de tu negocio',
        benefits: 'Reduce costos operativos hasta un 30% y mejora la eficiencia con un ERP diseñado para el crecimiento',
        point1: 'Implementación completa de Openbravo ERP',
        point2: 'Personalización según necesidades específicas',
        point3: 'Migración de datos y sistemas legacy',
        point4: 'Capacitación y soporte continuo',
        cta: 'Solicitar Demo de Openbravo'
      },
      odoo: {
        title: 'Soluciones Odoo',
        description: 'Implementación integral de Odoo para gestionar ventas, inventario, contabilidad y más en una sola plataforma',
        benefits: 'Centraliza todas tus operaciones y mejora la productividad con la suite empresarial más completa',
        point1: 'Implementación de módulos Odoo',
        point2: 'Personalización de workflows',
        point3: 'Integración con sistemas existentes',
        point4: 'Desarrollo de módulos personalizados',
        point5: 'Soporte técnico especializado',
        cta: 'Explorar Odoo'
      },
      ai: {
        title: 'Soluciones de Inteligencia Artificial',
        description: 'Implementamos IA para automatizar procesos, mejorar la toma de decisiones y crear ventajas competitivas',
        benefits: 'Automatiza hasta el 60% de tareas repetitivas y mejora la precisión en la toma de decisiones',
        point1: 'Análisis predictivo y machine learning',
        point2: 'Automatización inteligente de procesos',
        point3: 'Chatbots y asistentes virtuales',
        point4: 'Análisis de datos y business intelligence',
        point5: 'Visión por computadora',
        point6: 'Procesamiento de lenguaje natural',
        point7: 'Integración con sistemas existentes',
        point8: 'Consultoría en estrategia de IA',
        cta: 'Descubrir IA'
      },
      custom: {
        title: 'Desarrollo Personalizado',
        description: 'Creamos soluciones de software a medida que se adaptan perfectamente a los procesos únicos de tu negocio',
        benefits: 'Obtén una ventaja competitiva con software diseñado específicamente para tus necesidades',
        point1: 'Aplicaciones web y móviles',
        point2: 'APIs y microservicios',
        point3: 'Integraciones entre sistemas',
        point4: 'Modernización de aplicaciones legacy',
        point5: 'Arquitectura cloud-native',
        cta: 'Iniciar Proyecto Personalizado'
      },
      consulting: {
        title: 'Consultoría Técnica',
        description: 'Asesoramiento experto para optimizar tu arquitectura tecnológica y estrategia digital',
        benefits: 'Toma decisiones tecnológicas informadas con el respaldo de nuestros expertos',
        point1: 'Auditoría de sistemas actuales',
        point2: 'Diseño de arquitectura tecnológica',
        point3: 'Estrategia de transformación digital',
        point4: 'Optimización de procesos',
        point5: 'Capacitación técnica',
        cta: 'Solicitar Consultoría'
      },
      finalCta: {
        title: '¿Necesitas una solución específica?',
        subtitle: 'Contáctanos para discutir cómo podemos ayudarte a alcanzar tus objetivos tecnológicos',
        button: 'Hablar con un Experto'
      }
    },

    // Solutions Page
    solutions: {
      title: 'Soluciones por Industria',
      subtitle: 'Soluciones especializadas diseñadas para los desafíos únicos de cada sector',
      keyFeatures: 'Características Principales',
      expectedBenefits: 'Beneficios Esperados',
      learnMore: 'Conocer Más',
      warehouse: {
        title: 'Gestión de Almacenes',
        subtitle: 'Optimización completa de operaciones de almacén',
        description: 'Solución integral para la gestión eficiente de almacenes con tecnología de vanguardia',
        feature1: 'Control de inventario en tiempo real',
        feature2: 'Gestión de ubicaciones y zonas',
        feature3: 'Optimización de picking y packing',
        feature4: 'Trazabilidad completa de productos',
        feature5: 'Integración con códigos de barras/RFID',
        feature6: 'Gestión de múltiples almacenes',
        feature7: 'Reportes y analytics avanzados',
        feature8: 'Gestión de devoluciones',
        feature9: 'Control de calidad integrado',
        feature10: 'Automatización de reabastecimiento',
        benefit1: 'Reducción de errores hasta 95%',
        benefit2: 'Mejora de productividad 40%',
        benefit3: 'Optimización de espacio 30%',
        benefit4: 'Reducción de costos operativos',
        benefit5: 'Mayor precisión en inventarios',
        benefit6: 'Tiempos de entrega más rápidos',
        benefit7: 'Mejor satisfacción del cliente',
        benefit8: 'Visibilidad completa de operaciones'
      },
      delivery: {
        title: 'Gestión de Entregas',
        subtitle: 'Optimización de rutas y logística de última milla',
        description: 'Sistema completo para gestionar entregas eficientemente desde el almacén hasta el cliente final',
        feature1: 'Planificación automática de rutas',
        feature2: 'Seguimiento en tiempo real',
        feature3: 'Gestión de flotas',
        feature4: 'Notificaciones automáticas',
        feature5: 'Prueba de entrega digital',
        feature6: 'Optimización de costos de transporte',
        feature7: 'Integración con GPS',
        feature8: 'Gestión de devoluciones',
        feature9: 'Análisis de rendimiento',
        feature10: 'App móvil para conductores',
        benefit1: 'Reducción de costos de transporte 25%',
        benefit2: 'Mejora en tiempos de entrega',
        benefit3: 'Mayor satisfacción del cliente',
        benefit4: 'Reducción de emisiones CO2',
        benefit5: 'Optimización de recursos',
        benefit6: 'Mejor control de flotas',
        benefit7: 'Reducción de errores de entrega',
        benefit8: 'Visibilidad completa del proceso'
      },
      services: {
        title: 'Gestión de Servicios',
        subtitle: 'Optimización de operaciones de servicio al cliente',
        description: 'Plataforma integral para gestionar servicios técnicos, mantenimiento y atención al cliente',
        feature1: 'Gestión de tickets y casos',
        feature2: 'Programación de citas',
        feature3: 'Gestión de técnicos móviles',
        feature4: 'Base de conocimientos',
        feature5: 'SLA y métricas de rendimiento',
        feature6: 'Facturación de servicios',
        benefit1: 'Mejora en tiempo de resolución',
        benefit2: 'Mayor satisfacción del cliente',
        benefit3: 'Optimización de recursos técnicos',
        benefit4: 'Mejor control de costos'
      },
      whyChoose: {
        title: '¿Por qué elegir nuestras soluciones?',
        expertise: {
          title: 'Experiencia Comprobada',
          desc: 'Años de experiencia implementando soluciones exitosas'
        },
        results: {
          title: 'Resultados Medibles',
          desc: 'ROI comprobado y mejoras cuantificables en eficiencia'
        },
        scalable: {
          title: 'Escalables',
          desc: 'Soluciones que crecen con tu negocio'
        },
        support: {
          title: 'Soporte Continuo',
          desc: 'Acompañamiento permanente para garantizar el éxito'
        }
      },
      cta: {
        title: '¿Listo para optimizar tus operaciones?',
        subtitle: 'Contáctanos para una evaluación gratuita de tus procesos actuales',
        button: 'Solicitar Evaluación'
      }
    },

    // Projects Page
    projects: {
      title: 'Casos de Éxito',
      subtitle: 'Descubre cómo hemos transformado negocios con nuestras soluciones tecnológicas',
      filters: {
        all: 'Todos',
        openbravo: 'Openbravo',
        odoo: 'Odoo',
        ai: 'IA',
        custom: 'Personalizado'
      },
      keyResults: 'Resultados Clave',
      viewCase: 'Ver caso completo',
      halsted: {
        title: 'Optimización Logística Halsted',
        desc: 'Implementación de Openbravo ERP que optimizó la gestión de inventario en un 30%',
        sector: 'Logística',
        result1: '30% mejora en gestión de inventario',
        result2: '25% reducción en costos operativos',
        result3: '40% mejora en tiempos de entrega',
        testimonial: 'Gracias a Doce Leguas, nuestras operaciones han mejorado drásticamente. Su profesionalismo y conocimiento son excepcionales.',
        client: 'Brian, Halsted'
      },
      ai: {
        title: 'Análisis Predictivo con IA',
        desc: 'Integración de IA para análisis predictivo que resultó en 40% de mejora en toma de decisiones',
        sector: 'Tecnología',
        result1: '40% mejora en toma de decisiones',
        result2: '60% reducción en errores de predicción',
        result3: '35% aumento en eficiencia operativa',
        testimonial: 'La solución de IA que implementaron superó todas nuestras expectativas. Altamente recomendados.',
        client: 'Maria Rodriguez, TechCorp Solutions'
      },
      custom: {
        title: 'Solución ERP Personalizada',
        desc: 'Desarrollo completo de ERP personalizado que aumentó la eficiencia operativa en un 45%',
        sector: 'Manufactura',
        result1: '45% aumento en eficiencia operativa',
        result2: '50% reducción en tiempo de procesos',
        result3: '30% mejora en satisfacción del cliente',
        testimonial: 'El ERP personalizado transformó completamente nuestros procesos. Excelente trabajo.',
        client: 'Carlos Mendez, ManufacturaPro'
      },
      odoo: {
        title: 'Implementación Odoo Completa',
        desc: 'Implementación integral de Odoo que centralizó todas las operaciones empresariales',
        sector: 'Comercio',
        result1: 'Centralización completa de operaciones',
        result2: '35% mejora en productividad',
        result3: '25% reducción en costos administrativos',
        testimonial: 'Odoo implementado por Doce Leguas revolucionó nuestra forma de trabajar.',
        client: 'Ana García, ComercialPlus'
      },
      warehouse: {
        title: 'Automatización de Almacén con IA',
        desc: 'Sistema inteligente de gestión de almacén que optimizó operaciones con IA',
        sector: 'Logística',
        result1: '50% reducción en errores de inventario',
        result2: '35% mejora en velocidad de picking',
        result3: '40% optimización de espacio',
        testimonial: 'La automatización con IA transformó nuestro almacén completamente.',
        client: 'Roberto Silva, LogisticaMax'
      },
      cloud: {
        title: 'Migración a la Nube',
        desc: 'Migración completa a la nube que mejoró la escalabilidad y redujo costos',
        sector: 'Tecnología',
        result1: '60% reducción en costos de infraestructura',
        result2: '99.9% disponibilidad del sistema',
        result3: '80% mejora en velocidad de acceso',
        testimonial: 'La migración a la nube fue perfecta. Ahora tenemos mayor flexibilidad.',
        client: 'Luis Herrera, CloudTech'
      },
      featured: {
        title: 'Caso Destacado: Transformación Digital Completa',
        challenge: 'El Desafío',
        challengeDesc: 'Una empresa de logística necesitaba modernizar completamente sus sistemas legacy para competir en el mercado digital.',
        solution: 'La Solución',
        solutionDesc: 'Implementamos una solución integral con Openbravo ERP, automatización con IA y migración a la nube.',
        results: 'Los Resultados',
        costReduction: 'Reducción de costos',
        fasterDelivery: 'Entregas más rápidas'
      },
      cta: {
        title: '¿Quieres ser nuestro próximo caso de éxito?',
        subtitle: 'Contáctanos para discutir cómo podemos transformar tu negocio',
        button: 'Iniciar mi Proyecto'
      }
    },

    // About Page
    about: {
      title: 'Sobre Nosotros',
      subtitle: 'Somos un equipo de expertos apasionados por transformar negocios a través de la tecnología',
      story: {
        title: 'Nuestra Historia',
        content1: 'Doce Leguas nació de la visión de crear soluciones tecnológicas que realmente transformen los negocios. Con años de experiencia en implementaciones empresariales, hemos ayudado a decenas de empresas a optimizar sus procesos y alcanzar sus objetivos.',
        content2: 'Nuestro enfoque se basa en entender profundamente las necesidades de cada cliente para entregar soluciones que no solo resuelvan problemas actuales, sino que también preparen a las empresas para el futuro.'
      },
      vision: {
        title: 'Nuestra Visión',
        desc: 'Ser el socio tecnológico de confianza que impulse la transformación digital de las empresas, creando valor sostenible a través de soluciones innovadoras.'
      },
      values: {
        title: 'Nuestros Valores',
        subtitle: 'Los principios que guían cada proyecto y decisión que tomamos',
        excellence: {
          title: 'Excelencia',
          desc: 'Nos esforzamos por la perfección en cada línea de código y cada estrategia, entregando soluciones que superan las expectativas.'
        },
        innovation: {
          title: 'Innovación',
          desc: 'Siempre explorando nuevas tecnologías y metodologías para ofrecer soluciones de vanguardia que impulsen la ventaja competitiva.'
        },
        integrity: {
          title: 'Integridad',
          desc: 'Actuamos con honestidad y transparencia en todas nuestras interacciones, construyendo confianza a través de un comportamiento ético consistente.'
        },
        customer: {
          title: 'Enfoque al Cliente',
          desc: 'Tu éxito es nuestra prioridad y fuerza motriz, asegurando que cada solución se alinee con tus objetivos empresariales.'
        },
        collaboration: {
          title: 'Colaboración',
          desc: 'Creemos en el poder del trabajo en equipo y la sinergia con nuestros clientes, trabajando juntos para lograr resultados excepcionales.'
        }
      },
      team: {
        title: 'Nuestro Equipo',
        subtitle: 'Conoce a los expertos que harán realidad tu visión tecnológica',
        nono: {
          position: 'CEO & Founder',
          description: 'Líder visionario con más de 15 años de experiencia en transformación digital empresarial.'
        },
        mark: {
          position: 'CTO & Co-Founder',
          description: 'Experto técnico especializado en arquitecturas empresariales y soluciones de alta escala.'
        },
        rafael: {
          position: 'Lead Developer',
          description: 'Especialista en desarrollo de software y gestión de proyectos tecnológicos complejos.'
        },
        maarten: {
          position: 'Senior ERP Consultant',
          description: 'Consultor experto en implementaciones ERP y optimización de procesos empresariales.'
        }
      },
      culture: {
        title: 'Nuestra Cultura',
        content1: 'En Doce Leguas creemos que la tecnología debe servir a las personas y los negocios. Por eso, nuestro enfoque siempre es humano, centrado en entender las necesidades reales de nuestros clientes.',
        content2: 'Fomentamos un ambiente de aprendizaje continuo, innovación y colaboración, donde cada miembro del equipo puede crecer profesionalmente mientras contribuye al éxito de nuestros clientes.',
        item1: 'Innovación constante',
        item2: 'Trabajo en equipo',
        item3: 'Aprendizaje continuo',
        item4: 'Compromiso con la calidad'
      },
      cta: {
        title: '¿Quieres conocer más sobre nosotros?',
        subtitle: 'Estamos aquí para responder todas tus preguntas y conocer tu proyecto',
        contact: 'Contactar al Equipo'
      },
      stats: {
        successfulProjects: 'Proyectos Exitosos',
        yearsExperience: 'Años de Experiencia Combinada',
        happyClients: 'Clientes Satisfechos',
        clientSatisfaction: 'Satisfacción del Cliente'
      }
    },

    // Contact Page
    contact: {
      title: 'Contacto',
      subtitle: 'Estamos aquí para ayudarte a transformar tu negocio. Contáctanos y comencemos a trabajar juntos.',
      form: {
        title: 'Envíanos un Mensaje',
        fullName: 'Nombre Completo',
        email: 'Correo Electrónico',
        phone: 'Teléfono',
        company: 'Empresa',
        subject: 'Asunto',
        message: 'Mensaje',
        send: 'Enviar Mensaje',
        success: '¡Mensaje Enviado!',
        successDesc: 'Gracias por contactarnos. Te responderemos pronto.',
        selectSubject: 'Selecciona un asunto',
        placeholders: {
          fullName: 'Tu nombre completo',
          email: 'tu@email.com',
          phone: '+1 234 567 8900',
          company: 'Nombre de tu empresa',
          message: 'Cuéntanos sobre tu proyecto...'
        },
        subjects: {
          generalinquiry: 'Consulta General',
          openbravoconsultation: 'Consulta Openbravo',
          odooimplementation: 'Implementación Odoo',
          aisolutions: 'Soluciones de IA',
          customdevelopment: 'Desarrollo Personalizado',
          technicalsupport: 'Soporte Técnico',
          partnershipopportunity: 'Oportunidad de Asociación',
          other: 'Otro'
        }
      },
      info: {
        title: 'Información de Contacto',
        email: 'Correo Electrónico',
        emailDesc: 'Respuesta en 24 horas',
        phone: 'Teléfono',
        phoneDesc: 'Lun - Vie, 9:00 - 18:00',
        office: 'Oficinas',
        officeDesc: 'Múltiples ubicaciones',
        hours: 'Horario',
        hoursDesc: '9:00 AM - 6:00 PM'
      },
      whyContact: {
        title: '¿Por qué contactarnos?',
        item1: 'Consulta inicial gratuita y evaluación del proyecto',
        item2: 'Soluciones personalizadas adaptadas a tus necesidades específicas',
        item3: 'Equipo experto con historial comprobado en soluciones empresariales',
        item4: 'Soporte continuo y mantenimiento para todas nuestras implementaciones'
      }
    },

    // Footer
    footer: {
      description: 'Transformamos negocios con soluciones tecnológicas innovadoras y personalizadas.',
      quickLinks: 'Enlaces Rápidos',
      services: 'Servicios',
      contactInfo: 'Información de Contacto',
      rights: 'Todos los derechos reservados.',
      privacy: 'Privacidad',
      legal: 'Legal',
      sitemap: 'Mapa del Sitio'
    },

    // ChatBot
    chatbot: {
      title: 'Asistente Virtual',
      subtitle: 'Estoy aquí para ayudarte',
      welcome: '¡Hola! Soy el asistente virtual de Doce Leguas. ¿En qué puedo ayudarte hoy?',
      placeholder: 'Escribe tu mensaje...',
      defaultResponse: 'Gracias por tu mensaje. Un especialista te contactará pronto.',
      errorMessage: 'Lo siento, hay un problema técnico. Por favor intenta más tarde.',
      open: 'Abrir chat',
      close: 'Cerrar chat'
    }
  },

  en: {
    // Navigation
    nav: {
      home: 'Home',
      services: 'Services',
      solutions: 'Solutions',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
      getStarted: 'Get Started'
    },
    
    // Home Page
    home: {
      hero: {
        title: 'Transform your business with innovative technology solutions',
        subtitle: 'Specialized in Openbravo, Odoo, AI and custom development to drive your company growth',
        viewServices: 'View Services',
        startProject: 'Start Project'
      },
      valueProps: {
        title: 'Why choose Doce Leguas?',
        subtitle: 'We combine technical expertise with strategic vision to deliver solutions that truly transform your business',
        innovation: {
          title: 'Innovation',
          desc: 'We use cutting-edge technologies to create solutions that give you competitive advantage'
        },
        custom: {
          title: 'Customization',
          desc: 'Each solution is specifically adapted to your business needs and processes'
        },
        results: {
          title: 'Results',
          desc: 'We focus on delivering measurable results that drive your company growth'
        },
        team: {
          title: 'Expert Team',
          desc: 'Our experienced professionals are committed to your project success'
        }
      },
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive solutions for every business need',
        openbravo: {
          title: 'Openbravo ERP',
          desc: 'Complete implementation and customization of ERP for business optimization'
        },
        odoo: {
          title: 'Odoo Solutions',
          desc: 'Comprehensive business management with the most complete suite'
        },
        ai: {
          title: 'AI Solutions',
          desc: 'Intelligent automation and predictive analysis for better decisions'
        },
        custom: {
          title: 'Custom Development',
          desc: 'Tailor-made software solutions designed for your unique processes'
        },
        n8n: {
          title: 'n8n Automation',
          desc: 'Workflow automation to optimize your business processes'
        },
        automation: {
          title: 'Process Automation',
          desc: 'Intelligent automation to reduce manual work and errors'
        },
        learnMore: 'Learn more'
      },
      projects: {
        title: 'Success Stories',
        subtitle: 'Discover how we have transformed businesses with our solutions',
        viewCase: 'View case study'
      },
      testimonials: {
        title: 'What our clients say'
      },
      logistics: {
        title: 'Specialized Solutions for Logistics and Retail',
        subtitle: 'We optimize your supply chain and commercial operations with cutting-edge technology',
        supply: {
          title: 'Supply Chain Management',
          desc: 'Optimize your inventory and logistics with intelligent solutions',
          feature1: 'Real-time inventory control',
          feature2: 'Delivery route optimization',
          feature3: 'AI-powered demand forecasting'
        },
        retail: {
          title: 'Retail Solutions',
          desc: 'Improve customer experience and increase sales',
          feature1: 'Integrated point of sale',
          feature2: 'Multi-store management',
          feature3: 'Customer behavior analysis'
        },
        expertise: {
          title: 'Proven Expertise',
          desc: 'Years of experience in logistics and retail sector',
          stat1: 'Projects',
          stat2: 'Satisfaction'
        },
        cta: 'Explore Solutions'
      },
      cta: {
        title: 'Ready to transform your business?',
        subtitle: 'Contact us today and discover how we can help you achieve your business goals',
        schedule: 'Schedule Consultation',
        contact: 'Contact Now'
      }
    },

    // Services Page
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive technology solutions designed to drive your company growth',
      keyBenefits: 'Key Benefits',
      whatWeOffer: 'What we offer',
      openbravo: {
        title: 'Openbravo ERP',
        description: 'Complete implementation and customization of Openbravo ERP to optimize all your business processes',
        benefits: 'Reduce operational costs up to 30% and improve efficiency with an ERP designed for growth',
        point1: 'Complete Openbravo ERP implementation',
        point2: 'Customization according to specific needs',
        point3: 'Data migration and legacy systems',
        point4: 'Training and continuous support',
        cta: 'Request Openbravo Demo'
      },
      odoo: {
        title: 'Odoo Solutions',
        description: 'Comprehensive Odoo implementation to manage sales, inventory, accounting and more in a single platform',
        benefits: 'Centralize all your operations and improve productivity with the most complete business suite',
        point1: 'Odoo modules implementation',
        point2: 'Workflow customization',
        point3: 'Integration with existing systems',
        point4: 'Custom module development',
        point5: 'Specialized technical support',
        cta: 'Explore Odoo'
      },
      ai: {
        title: 'Artificial Intelligence Solutions',
        description: 'We implement AI to automate processes, improve decision making and create competitive advantages',
        benefits: 'Automate up to 60% of repetitive tasks and improve decision-making accuracy',
        point1: 'Predictive analytics and machine learning',
        point2: 'Intelligent process automation',
        point3: 'Chatbots and virtual assistants',
        point4: 'Data analysis and business intelligence',
        point5: 'Computer vision',
        point6: 'Natural language processing',
        point7: 'Integration with existing systems',
        point8: 'AI strategy consulting',
        cta: 'Discover AI'
      },
      custom: {
        title: 'Custom Development',
        description: 'We create custom software solutions that perfectly adapt to your business unique processes',
        benefits: 'Get a competitive advantage with software designed specifically for your needs',
        point1: 'Web and mobile applications',
        point2: 'APIs and microservices',
        point3: 'System integrations',
        point4: 'Legacy application modernization',
        point5: 'Cloud-native architecture',
        cta: 'Start Custom Project'
      },
      consulting: {
        title: 'Technical Consulting',
        description: 'Expert advice to optimize your technology architecture and digital strategy',
        benefits: 'Make informed technology decisions with the support of our experts',
        point1: 'Current systems audit',
        point2: 'Technology architecture design',
        point3: 'Digital transformation strategy',
        point4: 'Process optimization',
        point5: 'Technical training',
        cta: 'Request Consulting'
      },
      finalCta: {
        title: 'Need a specific solution?',
        subtitle: 'Contact us to discuss how we can help you achieve your technology goals',
        button: 'Talk to an Expert'
      }
    },

    // Solutions Page
    solutions: {
      title: 'Industry Solutions',
      subtitle: 'Specialized solutions designed for the unique challenges of each sector',
      keyFeatures: 'Key Features',
      expectedBenefits: 'Expected Benefits',
      learnMore: 'Learn More',
      warehouse: {
        title: 'Warehouse Management',
        subtitle: 'Complete optimization of warehouse operations',
        description: 'Comprehensive solution for efficient warehouse management with cutting-edge technology',
        feature1: 'Real-time inventory control',
        feature2: 'Location and zone management',
        feature3: 'Picking and packing optimization',
        feature4: 'Complete product traceability',
        feature5: 'Barcode/RFID integration',
        feature6: 'Multi-warehouse management',
        feature7: 'Advanced reports and analytics',
        feature8: 'Returns management',
        feature9: 'Integrated quality control',
        feature10: 'Automated replenishment',
        benefit1: 'Error reduction up to 95%',
        benefit2: 'Productivity improvement 40%',
        benefit3: 'Space optimization 30%',
        benefit4: 'Operational cost reduction',
        benefit5: 'Greater inventory accuracy',
        benefit6: 'Faster delivery times',
        benefit7: 'Better customer satisfaction',
        benefit8: 'Complete operations visibility'
      },
      delivery: {
        title: 'Delivery Management',
        subtitle: 'Route optimization and last-mile logistics',
        description: 'Complete system to efficiently manage deliveries from warehouse to end customer',
        feature1: 'Automatic route planning',
        feature2: 'Real-time tracking',
        feature3: 'Fleet management',
        feature4: 'Automatic notifications',
        feature5: 'Digital proof of delivery',
        feature6: 'Transportation cost optimization',
        feature7: 'GPS integration',
        feature8: 'Returns management',
        feature9: 'Performance analysis',
        feature10: 'Mobile app for drivers',
        benefit1: 'Transportation cost reduction 25%',
        benefit2: 'Delivery time improvement',
        benefit3: 'Higher customer satisfaction',
        benefit4: 'CO2 emissions reduction',
        benefit5: 'Resource optimization',
        benefit6: 'Better fleet control',
        benefit7: 'Delivery error reduction',
        benefit8: 'Complete process visibility'
      },
      services: {
        title: 'Service Management',
        subtitle: 'Customer service operations optimization',
        description: 'Comprehensive platform to manage technical services, maintenance and customer support',
        feature1: 'Ticket and case management',
        feature2: 'Appointment scheduling',
        feature3: 'Mobile technician management',
        feature4: 'Knowledge base',
        feature5: 'SLA and performance metrics',
        feature6: 'Service billing',
        benefit1: 'Resolution time improvement',
        benefit2: 'Higher customer satisfaction',
        benefit3: 'Technical resource optimization',
        benefit4: 'Better cost control'
      },
      whyChoose: {
        title: 'Why choose our solutions?',
        expertise: {
          title: 'Proven Experience',
          desc: 'Years of experience implementing successful solutions'
        },
        results: {
          title: 'Measurable Results',
          desc: 'Proven ROI and quantifiable efficiency improvements'
        },
        scalable: {
          title: 'Scalable',
          desc: 'Solutions that grow with your business'
        },
        support: {
          title: 'Continuous Support',
          desc: 'Permanent support to guarantee success'
        }
      },
      cta: {
        title: 'Ready to optimize your operations?',
        subtitle: 'Contact us for a free evaluation of your current processes',
        button: 'Request Evaluation'
      }
    },

    // Projects Page
    projects: {
      title: 'Success Stories',
      subtitle: 'Discover how we have transformed businesses with our technology solutions',
      filters: {
        all: 'All',
        openbravo: 'Openbravo',
        odoo: 'Odoo',
        ai: 'AI',
        custom: 'Custom'
      },
      keyResults: 'Key Results',
      viewCase: 'View full case',
      halsted: {
        title: 'Halsted Logistics Optimization',
        desc: 'Openbravo ERP implementation that optimized inventory management by 30%',
        sector: 'Logistics',
        result1: '30% inventory management improvement',
        result2: '25% operational cost reduction',
        result3: '40% delivery time improvement',
        testimonial: 'Thanks to Doce Leguas, our operations have drastically improved. Their professionalism and knowledge are exceptional.',
        client: 'Brian, Halsted'
      },
      ai: {
        title: 'Predictive Analysis with AI',
        desc: 'AI integration for predictive analysis that resulted in 40% improvement in decision making',
        sector: 'Technology',
        result1: '40% decision making improvement',
        result2: '60% prediction error reduction',
        result3: '35% operational efficiency increase',
        testimonial: 'The AI solution they implemented exceeded all our expectations. Highly recommended.',
        client: 'Maria Rodriguez, TechCorp Solutions'
      },
      custom: {
        title: 'Custom ERP Solution',
        desc: 'Complete custom ERP development that increased operational efficiency by 45%',
        sector: 'Manufacturing',
        result1: '45% operational efficiency increase',
        result2: '50% process time reduction',
        result3: '30% customer satisfaction improvement',
        testimonial: 'The custom ERP completely transformed our processes. Excellent work.',
        client: 'Carlos Mendez, ManufacturaPro'
      },
      odoo: {
        title: 'Complete Odoo Implementation',
        desc: 'Comprehensive Odoo implementation that centralized all business operations',
        sector: 'Commerce',
        result1: 'Complete operations centralization',
        result2: '35% productivity improvement',
        result3: '25% administrative cost reduction',
        testimonial: 'Odoo implemented by Doce Leguas revolutionized our way of working.',
        client: 'Ana García, ComercialPlus'
      },
      warehouse: {
        title: 'AI Warehouse Automation',
        desc: 'Intelligent warehouse management system that optimized operations with AI',
        sector: 'Logistics',
        result1: '50% inventory error reduction',
        result2: '35% picking speed improvement',
        result3: '40% space optimization',
        testimonial: 'AI automation completely transformed our warehouse.',
        client: 'Roberto Silva, LogisticaMax'
      },
      cloud: {
        title: 'Cloud Migration',
        desc: 'Complete cloud migration that improved scalability and reduced costs',
        sector: 'Technology',
        result1: '60% infrastructure cost reduction',
        result2: '99.9% system availability',
        result3: '80% access speed improvement',
        testimonial: 'The cloud migration was perfect. Now we have greater flexibility.',
        client: 'Luis Herrera, CloudTech'
      },
      featured: {
        title: 'Featured Case: Complete Digital Transformation',
        challenge: 'The Challenge',
        challengeDesc: 'A logistics company needed to completely modernize their legacy systems to compete in the digital market.',
        solution: 'The Solution',
        solutionDesc: 'We implemented a comprehensive solution with Openbravo ERP, AI automation and cloud migration.',
        results: 'The Results',
        costReduction: 'Cost reduction',
        fasterDelivery: 'Faster deliveries'
      },
      cta: {
        title: 'Want to be our next success story?',
        subtitle: 'Contact us to discuss how we can transform your business',
        button: 'Start my Project'
      }
    },

    // About Page
    about: {
      title: 'About Us',
      subtitle: 'We are a team of experts passionate about transforming businesses through technology',
      story: {
        title: 'Our Story',
        content1: 'Doce Leguas was born from the vision of creating technology solutions that truly transform businesses. With years of experience in enterprise implementations, we have helped dozens of companies optimize their processes and achieve their goals.',
        content2: 'Our approach is based on deeply understanding each client\'s needs to deliver solutions that not only solve current problems, but also prepare companies for the future.'
      },
      vision: {
        title: 'Our Vision',
        desc: 'To be the trusted technology partner that drives digital transformation of companies, creating sustainable value through innovative solutions.'
      },
      values: {
        title: 'Our Values',
        subtitle: 'The principles that guide every project and decision we make',
        excellence: {
          title: 'Excellence',
          desc: 'We strive for perfection in every line of code and every strategy, delivering solutions that exceed expectations.'
        },
        innovation: {
          title: 'Innovation',
          desc: 'Always exploring new technologies and methodologies to offer cutting-edge solutions that drive competitive advantage.'
        },
        integrity: {
          title: 'Integrity',
          desc: 'We act with honesty and transparency in all our interactions, building trust through consistent ethical behavior.'
        },
        customer: {
          title: 'Customer Focus',
          desc: 'Your success is our priority and driving force, ensuring every solution aligns with your business goals.'
        },
        collaboration: {
          title: 'Collaboration',
          desc: 'We believe in the power of teamwork and synergy with our clients, working together to achieve exceptional results.'
        }
      },
      team: {
        title: 'Our Team',
        subtitle: 'Meet the experts who will make your technology vision a reality',
        nono: {
          position: 'CEO & Founder',
          description: 'Visionary leader with over 15 years of experience in enterprise digital transformation.'
        },
        mark: {
          position: 'CTO & Co-Founder',
          description: 'Technical expert specialized in enterprise architectures and high-scale solutions.'
        },
        rafael: {
          position: 'Lead Developer',
          description: 'Software development specialist and complex technology project management.'
        },
        maarten: {
          position: 'Senior ERP Consultant',
          description: 'Expert consultant in ERP implementations and business process optimization.'
        }
      },
      culture: {
        title: 'Our Culture',
        content1: 'At Doce Leguas we believe that technology should serve people and businesses. That\'s why our approach is always human, focused on understanding the real needs of our clients.',
        content2: 'We foster an environment of continuous learning, innovation and collaboration, where each team member can grow professionally while contributing to our clients\' success.',
        item1: 'Constant innovation',
        item2: 'Teamwork',
        item3: 'Continuous learning',
        item4: 'Commitment to quality'
      },
      cta: {
        title: 'Want to know more about us?',
        subtitle: 'We are here to answer all your questions and learn about your project',
        contact: 'Contact the Team'
      },
      stats: {
        successfulProjects: 'Successful Projects',
        yearsExperience: 'Years Combined Experience',
        happyClients: 'Happy Clients',
        clientSatisfaction: 'Client Satisfaction'
      }
    },

    // Contact Page
    contact: {
      title: 'Contact',
      subtitle: 'We are here to help you transform your business. Contact us and let\'s start working together.',
      form: {
        title: 'Send us a Message',
        fullName: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        company: 'Company',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        success: 'Message Sent!',
        successDesc: 'Thank you for contacting us. We will respond soon.',
        selectSubject: 'Select a subject',
        placeholders: {
          fullName: 'Your full name',
          email: 'your@email.com',
          phone: '+1 234 567 8900',
          company: 'Your company name',
          message: 'Tell us about your project...'
        },
        subjects: {
          generalinquiry: 'General Inquiry',
          openbravoconsultation: 'Openbravo Consultation',
          odooimplementation: 'Odoo Implementation',
          aisolutions: 'AI Solutions',
          customdevelopment: 'Custom Development',
          technicalsupport: 'Technical Support',
          partnershipopportunity: 'Partnership Opportunity',
          other: 'Other'
        }
      },
      info: {
        title: 'Contact Information',
        email: 'Email',
        emailDesc: '24-hour response',
        phone: 'Phone',
        phoneDesc: 'Mon - Fri, 9:00 - 18:00',
        office: 'Offices',
        officeDesc: 'Multiple locations',
        hours: 'Hours',
        hoursDesc: '9:00 AM - 6:00 PM'
      },
      whyContact: {
        title: 'Why contact us?',
        item1: 'Free initial consultation and project assessment',
        item2: 'Customized solutions tailored to your specific needs',
        item3: 'Expert team with proven track record in enterprise solutions',
        item4: 'Ongoing support and maintenance for all our implementations'
      }
    },

    // Footer
    footer: {
      description: 'We transform businesses with innovative and personalized technology solutions.',
      quickLinks: 'Quick Links',
      services: 'Services',
      contactInfo: 'Contact Information',
      rights: 'All rights reserved.',
      privacy: 'Privacy',
      legal: 'Legal',
      sitemap: 'Sitemap'
    },

    // ChatBot
    chatbot: {
      title: 'Virtual Assistant',
      subtitle: 'I\'m here to help you',
      welcome: 'Hello! I\'m Doce Leguas virtual assistant. How can I help you today?',
      placeholder: 'Type your message...',
      defaultResponse: 'Thank you for your message. A specialist will contact you soon.',
      errorMessage: 'Sorry, there\'s a technical issue. Please try again later.',
      open: 'Open chat',
      close: 'Close chat'
    }
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language as keyof typeof translations];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
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