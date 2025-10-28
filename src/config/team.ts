// Team configuration for Hausarztpraxis Dr. Schirmer
export interface Doctor {
  id: string;
  name: string;
  title: string;
  description: string;
  location: 'zschorlau' | 'aue' | 'both';
  category: 'facharzt' | 'weiterbildungsarzt';
  image?: string;
  specialties?: string[];
}

export const DOCTORS: Doctor[] = [
  // Fachärzte
  {
    id: 'schirmer',
    name: 'Dr. med. Lars Schirmer',
    title: 'Facharzt für Allgemeinmedizin',
    description: 'Praxisinhaber mit langjähriger Erfahrung in der Hausarztmedizin und Landarztpraxis',
    location: 'zschorlau',
    category: 'facharzt',
    image: '/images/picture07.jpg',
    specialties: ['Allgemeinmedizin', 'Landarztmedizin', 'Prävention']
  },
  {
    id: 'unger',
    name: 'Dr. med. Lars Unger',
    title: 'Facharzt für Allgemeinmedizin',
    description: 'Spezialistin für Familienmedizin und Prävention',
    location: 'aue',
    category: 'facharzt',
    specialties: ['Familienmedizin', 'Prävention', 'Chronische Erkrankungen']
  },
  
  // Weiterbildungsärzte
  {
    id: 'rau',
    name: 'Isabell Rau',
    title: 'Weiterbildungsärztin',
    description: 'Engagierte Ärztin in der Weiterbildung mit Schwerpunkt auf Patientenbetreuung',
    location: 'both',
    category: 'weiterbildungsarzt',
    specialties: ['Allgemeinmedizin', 'Patientenbetreuung']
  },
  {
    id: 'schuster-meinel',
    name: 'Dr. J. Schuster-Meinel',
    title: 'Weiterbildungsärztin',
    description: 'Neu im Team - Weiterbildungsärztin mit Schwerpunkt auf chronische Erkrankungen',
    location: 'both',
    category: 'weiterbildungsarzt',
    specialties: ['Chronische Erkrankungen', 'Allgemeinmedizin']
  },
  {
    id: 'gehring',
    name: 'Dr. med. Richard Gehring',
    title: 'Weiterbildungsarzt',
    description: 'Erfahrener Weiterbildungsarzt mit Fokus auf moderne Diagnostik und Behandlung',
    location: 'both',
    category: 'weiterbildungsarzt',
    specialties: ['Diagnostik', 'Moderne Behandlungsmethoden']
  }
];

export const getDoctorsByCategory = (category: 'facharzt' | 'weiterbildungsarzt'): Doctor[] => {
  return DOCTORS.filter(doctor => doctor.category === category);
};

export const getDoctorsByLocation = (location: 'zschorlau' | 'aue'): Doctor[] => {
  return DOCTORS.filter(doctor => doctor.location === location || doctor.location === 'both');
};
