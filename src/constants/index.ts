import type { CompanyInfo, DesignTokens, FeatureFlags, CookieCategory } from '@/types';

// Firmeninformationen - Einfach anpassbar
export const COMPANY_INFO: CompanyInfo = {
  name: 'Hausarztpraxis Dr. Schirmer',
  email: 'hausarztpraxis-dr-schirmer@web.de',
  phone: '03771 56 53 950',
  address: 'Aue, Zschorlau, Erzgebirge',
  website: 'https://www.hausarztpraxis-dr-schirmer.de',
  description: 'Hausarztpraxis Dr. med. Lars Schirmer, Facharzt für Allgemeinmedizin, Aue, Zschorlau, Erzgebirge - Akademische Lehrpraxis',
  logo: '/logo.png',
};

// Design-Tokens für einfache Anpassungen - Medizinische Farbpalette [PRD-ID:2.2.1]
export const DESIGN_TOKENS: DesignTokens = {
  primaryColor: '#1e40af', // Medizinisches Blau - Vertrauen, Kompetenz
  secondaryColor: '#059669', // Medizinisches Grün - Gesundheit, Natur
  accentColor: '#f59e0b', // Warmes Orange - Wärme, Menschlichkeit
  neutralLight: '#f8fafc', // Helles Grau - Sauberkeit, Klarheit
  neutralDark: '#1f2937', // Dunkles Grau - Lesbarkeit
  success: '#10b981', // Erfolg - Bestätigungen
  warning: '#f59e0b', // Warnung - Wichtige Hinweise
  error: '#ef4444', // Fehler - Fehlermeldungen
  fontFamily: 'Inter, Roboto, sans-serif', // [PRD-ID:2.3.1]
  borderRadius: '0.5rem',
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
};

// Feature-Flags für einfache Aktivierung/Deaktivierung
export const FEATURES: FeatureFlags = {
  enableGoogleReviews: true,
  enableAnalytics: true,
  enableWhatsApp: false,
  enableNewsletter: true,
  enableBlog: false,
  enableContactForm: true,
};

// Cookie-Kategorien für DSGVO-Konformität
export const COOKIE_CATEGORIES: CookieCategory[] = [
  {
    id: 'necessary',
    name: 'Notwendige Cookies',
    description: 'Diese Cookies sind für die Grundfunktionen der Website erforderlich.',
    required: true,
    cookies: ['session', 'csrf', 'consent'],
  },
  {
    id: 'analytics',
    name: 'Analytische Cookies',
    description: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.',
    required: false,
    cookies: ['_ga', '_gid', '_gat', '_gclid'],
  },
  {
    id: 'marketing',
    name: 'Marketing-Cookies',
    description: 'Diese Cookies werden verwendet, um personalisierte Werbung anzuzeigen.',
    required: false,
    cookies: ['_fbp', '_fbc', 'ads', 'marketing'],
  },
  {
    id: 'preferences',
    name: 'Präferenz-Cookies',
    description: 'Diese Cookies speichern Ihre Einstellungen und Präferenzen.',
    required: false,
    cookies: ['theme', 'language', 'preferences'],
  },
];

// Navigation-Konfiguration [PRD-ID:3.2.1]
export const NAVIGATION = [
  {
    label: 'Startseite',
    href: '/',
  },
  {
    label: 'Über uns',
    href: '/ueber-uns',
  },
  {
    label: 'Leistungen',
    href: '/leistungen',
    children: [
      {
        label: 'Allgemeinmedizin',
        href: '/leistungen/allgemeinmedizin',
      },
      {
        label: 'Vorsorgeuntersuchungen',
        href: '/leistungen/vorsorge',
      },
      {
        label: 'Chronische Erkrankungen',
        href: '/leistungen/chronische-erkrankungen',
      },
      {
        label: 'Hausbesuche',
        href: '/leistungen/hausbesuche',
      },
    ],
  },
  {
    label: 'Standorte',
    href: '/standorte',
  },
  {
    label: 'Kontakt',
    href: '/kontakt',
  },
];

// Footer-Konfiguration [PRD-ID:3.3.3]
export const FOOTER_CONFIG = {
  columns: [
    {
      title: 'Praxis',
      links: [
        { label: 'Über uns', href: '/ueber-uns' },
        { label: 'Team', href: '/ueber-uns/team' },
        { label: 'Philosophie', href: '/ueber-uns/philosophie' },
        { label: 'Geschichte', href: '/ueber-uns/geschichte' },
      ],
    },
    {
      title: 'Leistungen',
      links: [
        { label: 'Allgemeinmedizin', href: '/leistungen/allgemeinmedizin' },
        { label: 'Vorsorgeuntersuchungen', href: '/leistungen/vorsorge' },
        { label: 'Chronische Erkrankungen', href: '/leistungen/chronische-erkrankungen' },
        { label: 'Hausbesuche', href: '/leistungen/hausbesuche' },
      ],
    },
    {
      title: 'Standorte',
      links: [
        { label: 'Aue', href: '/standorte/aue' },
        { label: 'Zschorlau', href: '/standorte/zschorlau' },
        { label: 'Anfahrt', href: '/kontakt/anfahrt' },
        { label: 'Öffnungszeiten', href: '/standorte' },
      ],
    },
    {
      title: 'Patienten',
      links: [
        { label: 'Termin vereinbaren', href: '/kontakt/termin-vereinbaren' },
        { label: 'Notfall', href: '/kontakt/notfall' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Downloads', href: '/downloads' },
      ],
    },
  ],
  contact: {
    email: COMPANY_INFO.email,
    phone: COMPANY_INFO.phone,
    address: COMPANY_INFO.address,
  },
  social: [
    {
      platform: 'Facebook',
      href: 'https://facebook.com/ihrefirma',
      icon: 'facebook',
    },
    {
      platform: 'Twitter',
      href: 'https://twitter.com/ihrefirma',
      icon: 'twitter',
    },
    {
      platform: 'LinkedIn',
      href: 'https://linkedin.com/company/ihrefirma',
      icon: 'linkedin',
    },
    {
      platform: 'Instagram',
      href: 'https://instagram.com/ihrefirma',
      icon: 'instagram',
    },
  ],
  legal: [
    { label: 'Impressum', href: '/imprint' },
    { label: 'Datenschutz', href: '/privacy' },
    { label: 'AGB', href: '/terms' },
    { label: 'Cookie-Richtlinie', href: '/cookies' },
  ],
};

// SEO-Konfiguration [PRD-ID:4.7.1]
export const SEO_CONFIG = {
  defaultTitle: `${COMPANY_INFO.name} - Ihr vertrauensvoller Hausarzt im Erzgebirge`,
  defaultDescription: COMPANY_INFO.description || 'Facharzt für Allgemeinmedizin in Aue und Zschorlau - Akademische Lehrpraxis',
  defaultKeywords: [
    'Hausarzt Aue',
    'Hausarzt Zschorlau', 
    'Arzt Erzgebirge',
    'Allgemeinmedizin Aue',
    'Dr. Schirmer',
    'Hausarztpraxis Aue',
    'Hausarztpraxis Zschorlau',
    'Terminvereinbarung Arzt',
    'Notfallarzt Aue',
    'Hausbesuch Arzt'
  ],
  siteUrl: COMPANY_INFO.website || 'https://www.hausarztpraxis-dr-schirmer.de',
  ogImage: '/og-image.jpg',
  twitterHandle: '@hausarztpraxis-dr-schirmer',
};

// Performance-Konfiguration
export const PERFORMANCE_CONFIG = {
  lighthouse: {
    performance: 90,
    accessibility: 95,
    bestPractices: 90,
    seo: 95,
  },
  webVitals: {
    fcp: 1500, // First Contentful Paint (ms)
    lcp: 2500, // Largest Contentful Paint (ms)
    fid: 100,  // First Input Delay (ms)
    cls: 0.1,  // Cumulative Layout Shift
    ttfb: 600, // Time to First Byte (ms)
  },
  bundleSize: {
    maxTotal: 250000,    // 250KB
    maxGzipped: 100000,  // 100KB
  },
};

// Google Analytics Konfiguration
export const ANALYTICS_CONFIG = {
  measurementId: 'G-XXXXXXXXXX', // Ihre Google Analytics ID
  consentMode: true,
  anonymizeIp: true,
  respectDoNotTrack: true,
};

// Google Reviews Konfiguration
export const GOOGLE_REVIEWS_CONFIG = {
  placeId: 'ChIJ...', // Ihre Google Place ID
  apiKey: 'AIza...',  // Ihre Google API Key
  maxReviews: 5,
  updateInterval: 3600000, // 1 Stunde in ms
};

// WhatsApp Konfiguration
export const WHATSAPP_CONFIG = {
  enabled: FEATURES.enableWhatsApp,
  number: '+49123456789', // Ihre WhatsApp Nummer
  message: 'Hallo! Ich interessiere mich für Ihre Leistungen.',
};

// Newsletter Konfiguration
export const NEWSLETTER_CONFIG = {
  enabled: FEATURES.enableNewsletter,
  apiEndpoint: '/api/newsletter/subscribe',
  doubleOptIn: true,
  confirmationEmail: true,
};

// Kontaktformular Konfiguration
export const CONTACT_FORM_CONFIG = {
  enabled: FEATURES.enableContactForm,
  apiEndpoint: '/api/contact',
  requiredFields: ['name', 'email', 'message'],
  maxMessageLength: 1000,
  spamProtection: true,
};

// Responsive Breakpoints (Tailwind CSS Standard)
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Animation-Konfiguration
export const ANIMATION_CONFIG = {
  duration: {
    fast: 150,
    normal: 300,
    slow: 500,
  },
  easing: {
    ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

// Error Messages
export const ERROR_MESSAGES = {
  required: 'Dieses Feld ist erforderlich',
  email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
  phone: 'Bitte geben Sie eine gültige Telefonnummer ein',
  minLength: (min: number) => `Mindestens ${min} Zeichen erforderlich`,
  maxLength: (max: number) => `Maximal ${max} Zeichen erlaubt`,
  consent: 'Sie müssen der Datenschutzerklärung zustimmen',
  generic: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
  network: 'Netzwerkfehler. Bitte überprüfen Sie Ihre Internetverbindung.',
  server: 'Serverfehler. Bitte versuchen Sie es später erneut.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  contactForm: 'Ihre Nachricht wurde erfolgreich gesendet!',
  newsletter: 'Sie wurden erfolgreich für den Newsletter angemeldet!',
  cookieConsent: 'Ihre Cookie-Einstellungen wurden gespeichert!',
  general: 'Aktion erfolgreich abgeschlossen!',
};

// Accessibility Labels
export const A11Y_LABELS = {
  menuToggle: 'Hauptmenü öffnen/schließen',
  closeMenu: 'Hauptmenü schließen',
  skipToContent: 'Zum Hauptinhalt springen',
  cookieSettings: 'Cookie-Einstellungen öffnen',
  closeModal: 'Modal schließen',
  loading: 'Lädt...',
  error: 'Fehler',
  success: 'Erfolgreich',
};

// Meta Tags
export const META_TAGS = {
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8',
  robots: 'index, follow',
  author: COMPANY_INFO.name,
  generator: 'Next.js',
  themeColor: DESIGN_TOKENS.primaryColor,
};
