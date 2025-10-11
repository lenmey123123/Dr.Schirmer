// Accessibility utilities and configuration for WCAG 2.1 AA compliance

export const accessibilityConfig = {
  // Color contrast ratios (WCAG 2.1 AA requirements)
  contrast: {
    normal: 4.5, // Minimum contrast ratio for normal text
    large: 3.0,  // Minimum contrast ratio for large text (18pt+ or 14pt+ bold)
    enhanced: 7.0, // Enhanced contrast ratio for AAA compliance
  },
  
  // Focus management
  focus: {
    visible: true,
    trap: true,
    restore: true,
    outline: '2px solid #1e40af', // Primary color for focus outline
    outlineOffset: '2px',
  },
  
  // Keyboard navigation
  keyboard: {
    tabOrder: 'logical',
    skipLinks: true,
    arrowKeys: true,
    escape: true,
  },
  
  // Screen reader support
  screenReader: {
    announcements: true,
    liveRegions: true,
    landmarks: true,
    headings: true,
  },
  
  // Motion and animation preferences
  motion: {
    respectPrefersReducedMotion: true,
    reducedMotion: {
      duration: 0,
      delay: 0,
    },
  },
};

// ARIA labels and descriptions
export const ariaLabels = {
  // Navigation
  navigation: {
    main: 'Hauptnavigation',
    breadcrumb: 'Breadcrumb-Navigation',
    skip: 'Zum Hauptinhalt springen',
    menu: 'Hauptmenü',
    close: 'Menü schließen',
  },
  
  // Forms
  forms: {
    required: 'Pflichtfeld',
    optional: 'Optional',
    error: 'Fehler',
    success: 'Erfolgreich',
    loading: 'Wird geladen',
  },
  
  // Buttons
  buttons: {
    submit: 'Absenden',
    cancel: 'Abbrechen',
    close: 'Schließen',
    open: 'Öffnen',
    expand: 'Erweitern',
    collapse: 'Einklappen',
    next: 'Weiter',
    previous: 'Zurück',
    menu: 'Menü öffnen',
    search: 'Suchen',
    filter: 'Filtern',
    sort: 'Sortieren',
  },
  
  // Medical specific
  medical: {
    emergency: 'Notfall',
    appointment: 'Termin vereinbaren',
    contact: 'Kontakt',
    location: 'Standort',
    hours: 'Öffnungszeiten',
    phone: 'Telefonnummer',
    email: 'E-Mail-Adresse',
    address: 'Adresse',
  },
};

// Focus management utilities
export const focusManagement = {
  // Focus trap for modals and dropdowns
  trapFocus: (element: HTMLElement) => {
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    element.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      element.removeEventListener('keydown', handleTabKey);
    };
  },
  
  // Restore focus to previous element
  restoreFocus: (previousElement: HTMLElement | null) => {
    if (previousElement) {
      previousElement.focus();
    }
  },
  
  // Skip to main content
  skipToMain: () => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView();
    }
  },
};

// Keyboard navigation utilities
export const keyboardNavigation = {
  // Handle arrow key navigation for lists
  handleArrowKeys: (e: KeyboardEvent, items: HTMLElement[], currentIndex: number) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % items.length;
        items[nextIndex]?.focus();
        return nextIndex;
      case 'ArrowUp':
        e.preventDefault();
        const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
        items[prevIndex]?.focus();
        return prevIndex;
      case 'Home':
        e.preventDefault();
        items[0]?.focus();
        return 0;
      case 'End':
        e.preventDefault();
        items[items.length - 1]?.focus();
        return items.length - 1;
      default:
        return currentIndex;
    }
  },
  
  // Handle escape key
  handleEscape: (e: KeyboardEvent, callback: () => void) => {
    if (e.key === 'Escape') {
      callback();
    }
  },
  
  // Handle enter and space keys for custom elements
  handleActivation: (e: KeyboardEvent, callback: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      callback();
    }
  },
};

// Screen reader utilities
export const screenReader = {
  // Announce text to screen readers
  announce: (text: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = text;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  },
  
  // Create live region for dynamic content
  createLiveRegion: (id: string, priority: 'polite' | 'assertive' = 'polite') => {
    const liveRegion = document.createElement('div');
    liveRegion.id = id;
    liveRegion.setAttribute('aria-live', priority);
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    
    document.body.appendChild(liveRegion);
    return liveRegion;
  },
  
  // Update live region content
  updateLiveRegion: (id: string, content: string) => {
    const liveRegion = document.getElementById(id);
    if (liveRegion) {
      liveRegion.textContent = content;
    }
  },
};

// Color contrast utilities
export const colorContrast = {
  // Calculate relative luminance
  getLuminance: (r: number, g: number, b: number) => {
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * (rs || 0) + 0.7152 * (gs || 0) + 0.0722 * (bs || 0);
  },
  
  // Calculate contrast ratio
  getContrastRatio: (color1: string, color2: string) => {
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1] || '0', 16),
        g: parseInt(result[2] || '0', 16),
        b: parseInt(result[3] || '0', 16)
      } : null;
    };
    
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);
    
    if (!rgb1 || !rgb2) return 0;
    
    const lum1 = colorContrast.getLuminance(rgb1.r, rgb1.g, rgb1.b);
    const lum2 = colorContrast.getLuminance(rgb2.r, rgb2.g, rgb2.b);
    
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    
    return (brightest + 0.05) / (darkest + 0.05);
  },
  
  // Check if contrast meets WCAG requirements
  meetsWCAG: (color1: string, color2: string, level: 'AA' | 'AAA' = 'AA', size: 'normal' | 'large' = 'normal') => {
    const ratio = colorContrast.getContrastRatio(color1, color2);
    const required = level === 'AA' 
      ? (size === 'large' ? 3.0 : 4.5)
      : (size === 'large' ? 4.5 : 7.0);
    
    return ratio >= required;
  },
};

// Motion and animation utilities
export const motionAccessibility = {
  // Check if user prefers reduced motion
  prefersReducedMotion: () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  },
  
  // Get motion settings based on user preference
  getMotionSettings: () => {
    const prefersReduced = motionAccessibility.prefersReducedMotion();
    return {
      duration: prefersReduced ? 0 : 0.3,
      delay: prefersReduced ? 0 : 0.1,
      ease: prefersReduced ? 'linear' : 'ease-in-out',
    };
  },
  
  // Apply reduced motion styles
  applyReducedMotion: (element: HTMLElement) => {
    if (motionAccessibility.prefersReducedMotion()) {
      element.style.transition = 'none';
      element.style.animation = 'none';
    }
  },
};

// Form accessibility utilities
export const formAccessibility = {
  // Add error message to form field
  addErrorMessage: (field: HTMLElement, message: string) => {
    const errorId = `${field.id}-error`;
    let errorElement = document.getElementById(errorId);
    
    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.id = errorId;
      errorElement.className = 'text-red-600 text-sm mt-1';
      errorElement.setAttribute('role', 'alert');
      field.parentNode?.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    field.setAttribute('aria-invalid', 'true');
    field.setAttribute('aria-describedby', errorId);
  },
  
  // Remove error message from form field
  removeErrorMessage: (field: HTMLElement) => {
    const errorId = `${field.id}-error`;
    const errorElement = document.getElementById(errorId);
    
    if (errorElement) {
      errorElement.remove();
    }
    
    field.removeAttribute('aria-invalid');
    field.removeAttribute('aria-describedby');
  },
  
  // Validate form field
  validateField: (field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) => {
    const value = field.value.trim();
    const isRequired = field.hasAttribute('required');
    const type = field.type;
    
    if (isRequired && !value) {
      formAccessibility.addErrorMessage(field, 'Dieses Feld ist erforderlich.');
      return false;
    }
    
    if (value && type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        formAccessibility.addErrorMessage(field, 'Bitte geben Sie eine gültige E-Mail-Adresse ein.');
        return false;
      }
    }
    
    if (value && type === 'tel') {
      const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
      if (!phoneRegex.test(value)) {
        formAccessibility.addErrorMessage(field, 'Bitte geben Sie eine gültige Telefonnummer ein.');
        return false;
      }
    }
    
    formAccessibility.removeErrorMessage(field);
    return true;
  },
};

export default {
  accessibilityConfig,
  ariaLabels,
  focusManagement,
  keyboardNavigation,
  screenReader,
  colorContrast,
  motionAccessibility,
  formAccessibility,
};