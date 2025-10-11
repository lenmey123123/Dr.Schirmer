import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Heart,
  Stethoscope,
  Shield,
  FileText,
  ExternalLink
} from 'lucide-react';
import MedicalIcon from '../ui/MedicalIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    phone: '03771 56 53 950',
    email: 'hausarztpraxis-dr-schirmer@web.de',
    address: {
      street: 'Hauptstraße 123',
      city: '08309 Aue',
      region: 'Erzgebirge'
    }
  };

  const openingHours = [
    { day: 'Montag - Freitag', time: '08:00 - 18:00' },
    { day: 'Samstag', time: '09:00 - 12:00' },
    { day: 'Sonntag', time: 'Notfallbereitschaft' },
  ];

  const services = [
    { name: 'Allgemeinmedizin', href: '/services#allgemeinmedizin' },
    { name: 'Vorsorgeuntersuchungen', href: '/services#vorsorge' },
    { name: 'Akutbehandlungen', href: '/services#akut' },
    { name: 'Chronische Erkrankungen', href: '/services#chronisch' },
    { name: 'Impfungen', href: '/services#impfungen' },
    { name: 'Hausbesuche', href: '/services#hausbesuche' },
  ];

  const quickLinks = [
    { name: 'Über Dr. Schirmer', href: '/about' },
    { name: 'Praxis-Team', href: '/about#team' },
    { name: 'Standorte', href: '/locations' },
    { name: 'Terminbuchung', href: '/contact#termin' },
    { name: 'Notfall-Informationen', href: '/contact#notfall' },
    { name: 'Downloads', href: '/downloads' },
  ];

  const legalLinks = [
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
    { name: 'AGB', href: '/agb' },
    { name: 'Widerruf', href: '/widerruf' },
  ];

  return (
    <footer className="mt-20 md:mt-28 pt-10 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-6 py-8 text-center text-gray-600">
          <p className="font-bold text-gray-900 text-xl mb-4">Hausarztpraxis Dr. Schirmer</p>
        <div className="space-x-6 mb-6">
          <Link href="/impressum" className="hover:text-red-600 transition-colors">
            Impressum
                  </Link>
          <Link href="/datenschutz" className="hover:text-red-600 transition-colors">
            Datenschutz
                    </Link>
        </div>
        <p className="text-sm">
          &copy; 2025 | Mit Sorgfalt für Sie gestaltet.
        </p>
      </div>
    </footer>
  );
};

export default Footer;