// Button Types
export type ButtonVariant = 
  | 'primary'    // Hauptaktionen (Kontakt, CTA)
  | 'secondary'  // Sekundäre Aktionen
  | 'outline'    // Umrandete Buttons
  | 'ghost'      // Transparente Buttons
  | 'danger'     // Gefährliche Aktionen
  | 'success';   // Erfolgreiche Aktionen

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

// Cookie Consent Types
export interface CookieConsent {
  necessary: boolean;      // Immer true (essenzielle Cookies)
  analytics: boolean;      // Google Analytics
  marketing: boolean;      // Marketing-Cookies
  preferences: boolean;    // Präferenz-Cookies
  timestamp: number;       // Zeitstempel der Einwilligung
  version: string;         // Version für Updates
}

export interface CookieCategory {
  id: keyof Omit<CookieConsent, 'timestamp' | 'version'>;
  name: string;
  description: string;
  required: boolean;
  cookies: string[];
}

// Google Reviews Types
export interface GoogleReview {
  id: string;
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export interface GoogleReviewsResponse {
  result: {
    reviews: GoogleReview[];
    rating: number;
    user_ratings_total: number;
  };
  status: string;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  external?: boolean;
}

export interface HeaderProps {
  logo?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  navigation: NavItem[];
  ctaButton?: {
    text: string;
    href: string;
    variant?: ButtonVariant;
  };
}

// Footer Types
export interface FooterColumn {
  title: string;
  links: {
    label: string;
    href: string;
    external?: boolean;
  }[];
}

export interface FooterProps {
  columns: FooterColumn[];
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  social: {
    platform: string;
    href: string;
    icon: string;
  }[];
  legal: {
    label: string;
    href: string;
  }[];
}

// Company Information Types
export interface CompanyInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  website?: string;
  description?: string;
  logo?: string;
}

// Design Tokens Types [PRD-ID:2.2.1]
export interface DesignTokens {
  primaryColor: string; // Medizinisches Blau - Vertrauen, Kompetenz
  secondaryColor: string; // Medizinisches Grün - Gesundheit, Natur
  accentColor: string; // Warmes Orange - Wärme, Menschlichkeit
  neutralLight: string; // Helles Grau - Sauberkeit, Klarheit
  neutralDark: string; // Dunkles Grau - Lesbarkeit
  success: string; // Erfolg - Bestätigungen
  warning: string; // Warnung - Wichtige Hinweise
  error: string; // Fehler - Fehlermeldungen
  fontFamily: string; // [PRD-ID:2.3.1]
  borderRadius: string;
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

// Feature Flags Types
export interface FeatureFlags {
  enableGoogleReviews: boolean;
  enableAnalytics: boolean;
  enableWhatsApp: boolean;
  enableNewsletter: boolean;
  enableBlog: boolean;
  enableContactForm: boolean;
}

// Performance Types
export interface PerformanceMetrics {
  lighthouse: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  webVitals: {
    fcp: number; // First Contentful Paint
    lcp: number; // Largest Contentful Paint
    fid: number; // First Input Delay
    cls: number; // Cumulative Layout Shift
    ttfb: number; // Time to First Byte
  };
  bundleSize: {
    total: number;
    gzipped: number;
    chunks: Record<string, number>;
  };
}

// SEO Types
export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonical?: string;
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  consent: boolean;
}

export interface NewsletterFormData {
  email: string;
  consent: boolean;
}

// Animation Types
export interface AnimationConfig {
  duration: number;
  easing: string;
  delay?: number;
  direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
  fillMode?: 'none' | 'forwards' | 'backwards' | 'both';
  iterationCount?: number | 'infinite';
}

// Theme Types
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    danger: string;
    warning: string;
    info: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
  };
  typography: {
    fontFamily: string;
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    };
    fontWeight: {
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Error Types
export interface AppError {
  code: string;
  message: string;
  details?: any;
  timestamp: number;
}

// Loading States
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

// Utility Types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
