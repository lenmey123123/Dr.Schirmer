// Services configuration for Hausarztpraxis Dr. Schirmer

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'diagnostik' | 'vorsorge' | 'igel' | 'notfall' | 'spezial';
  availableAt: ('zschorlau' | 'aue')[];
}

export const SERVICES: Service[] = [
  // Moderne Diagnostik
  {
    id: 'diagnostik',
    title: 'Moderne Diagnostik',
    description: 'Mit Sonographie, EKG, Ergometrie und Lungenfunktionstests blicken wir genau hin, um Ihnen die beste Behandlung zu ermöglichen.',
    icon: 'stethoscope',
    category: 'diagnostik',
    availableAt: ['zschorlau', 'aue']
  },
  
  // Ganzheitliche Vorsorge
  {
    id: 'vorsorge',
    title: 'Ganzheitliche Vorsorge',
    description: 'Von Check-ups über Hautkrebsscreenings bis zu U-Untersuchungen – wir begleiten Sie auf dem Weg zu einem langen, gesunden Leben.',
    icon: 'shield',
    category: 'vorsorge',
    availableAt: ['zschorlau', 'aue']
  },
  
  // Individuelle Gesundheitsleistungen (IGeL)
  {
    id: 'igel',
    title: 'Individuelle Gesundheitsleistungen (IGeL)',
    description: 'Erweiterte Gesundheitsleistungen für Ihre optimale Versorgung: Check-ups, Krebsvorsorge, Sportmedizin und mehr.',
    icon: 'heart',
    category: 'igel',
    availableAt: ['zschorlau', 'aue']
  },
  
  // Hausbesuche & Notfallversorgung
  {
    id: 'notfall',
    title: 'Hausbesuche & Notfallversorgung',
    description: 'Für immobile Patienten bieten wir Hausbesuche an. Bei akuten Notfällen sind wir für Sie da und koordinieren mit dem Rettungsdienst.',
    icon: 'ambulance',
    category: 'notfall',
    availableAt: ['zschorlau', 'aue']
  }
];

export const IGeL_SERVICES = [
  'Erweiterter Check-up 35+',
  'Erweiterte Krebsvorsorge',
  'Sportmedizinische Untersuchung',
  'Atteste und Gutachten',
  'Vitaminbestimmung',
  'Erweiterte Laboruntersuchungen'
];

export const LAB_SERVICES = [
  {
    title: 'Blutuntersuchungen',
    description: 'Blutbild, Blutzucker, Blutfette, Schilddrüsenwerte',
    icon: 'droplet'
  },
  {
    title: 'Urinanalysen',
    description: 'Vollständige Urinuntersuchungen und Schnelltests',
    icon: 'flask'
  },
  {
    title: 'Stuhluntersuchungen',
    description: 'Mikrobiologische und parasitologische Analysen, Test auf Blut (FOB)',
    icon: 'microscope'
  },
  {
    title: 'Schnelltests',
    description: 'Troponin, D-Dimer, COVID-19',
    icon: 'zap'
  },
  {
    title: 'Mikrobiologie',
    description: 'Bakterienkulturen und Resistenzbestimmungen',
    icon: 'bacteria'
  },
  {
    title: 'Vitaminbestimmung',
    description: 'Vitamin D, B12, Folsäure und weitere Vitamine',
    icon: 'sun'
  },
];

export const getServicesByCategory = (category: Service['category']): Service[] => {
  return SERVICES.filter(service => service.category === category);
};

export const getServicesByLocation = (location: 'zschorlau' | 'aue'): Service[] => {
  return SERVICES.filter(service => service.availableAt.includes(location));
};
