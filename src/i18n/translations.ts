// Translation system for bilingual website
export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      services: 'Services',
      technology: 'Technology',
      maintenance: 'Maintenance',
      whoWeServe: 'Who We Serve',
      gallery: 'Gallery',
      caseStudies: 'Case Studies',
      locations: 'Locations',
      faq: 'FAQ',
      contact: 'Contact',
      getQuote: 'Get a Quote'
    },
    // Hero Section
    hero: {
      badge: 'Patent Pending Technology',
      title: 'Cart Path Cleaning',
      subtitle: 'Revolutionized',
      description: 'Professional cart path and sidewalk pressure washing for golf courses and communities. Power washing that uses 90% less water.',
      subtext: 'Minimal disruption to operations.',
      getQuote: 'Get a Quote',
      learnMore: 'Learn More'
    },
    // Common
    common: {
      readMore: 'Read More',
      learnMore: 'Learn More',
      contactUs: 'Contact Us',
      getStarted: 'Get Started',
      submit: 'Submit',
      close: 'Close',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success'
    },
    // Chat Widget
    chat: {
      title: 'Cart Path Cleaning',
      online: 'Online',
      connecting: 'Connecting...',
      typeMessage: 'Type a message...',
      send: 'Send',
      muteAudio: 'Mute audio responses',
      enableAudio: 'Enable audio responses'
    }
  },
  es: {
    // Navigation
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      technology: 'Tecnología',
      maintenance: 'Mantenimiento',
      whoWeServe: 'A Quién Servimos',
      gallery: 'Galería',
      caseStudies: 'Casos de Estudio',
      locations: 'Ubicaciones',
      faq: 'Preguntas Frecuentes',
      contact: 'Contacto',
      getQuote: 'Obtener Cotización'
    },
    // Hero Section
    hero: {
      badge: 'Tecnología Patente Pendiente',
      title: 'Limpieza de Senderos',
      subtitle: 'Revolucionada',
      description: 'Lavado a presión profesional de senderos y aceras para campos de golf y comunidades. Lavado a presión que usa 90% menos agua.',
      subtext: 'Mínima interrupción de operaciones.',
      getQuote: 'Obtener Cotización',
      learnMore: 'Más Información'
    },
    // Common
    common: {
      readMore: 'Leer Más',
      learnMore: 'Más Información',
      contactUs: 'Contáctenos',
      getStarted: 'Comenzar',
      submit: 'Enviar',
      close: 'Cerrar',
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito'
    },
    // Chat Widget
    chat: {
      title: 'Limpieza de Senderos',
      online: 'En Línea',
      connecting: 'Conectando...',
      typeMessage: 'Escribe un mensaje...',
      send: 'Enviar',
      muteAudio: 'Silenciar respuestas de audio',
      enableAudio: 'Habilitar respuestas de audio'
    }
  }
};

export type Language = 'en' | 'es';
export type TranslationKey = keyof typeof translations.en;

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}
