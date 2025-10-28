'use client';

import React from 'react';
import { MapPin, Stethoscope, GraduationCap } from 'lucide-react';
import { DOCTORS, getDoctorsByCategory } from '@/config/team';
import ResponsiveImage from '../ui/ResponsiveImage';

const DoctorsTeam: React.FC = () => {
  const fachaerzte = getDoctorsByCategory('facharzt');
  const weiterbildungsaerzte = getDoctorsByCategory('weiterbildungsarzt');

  const getLocationColor = (location: string) => {
    switch (location) {
      case 'zschorlau':
        return 'yellow';
      case 'aue':
        return 'red';
      default:
        return 'gray';
    }
  };

  const getLocationBadge = (location: string) => {
    const color = getLocationColor(location);
    const colorClasses = {
      yellow: 'bg-yellow-100 text-yellow-600 border-yellow-200',
      red: 'bg-red-100 text-red-600 border-red-200',
      gray: 'bg-gray-100 text-gray-600 border-gray-200'
    };

    return (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${colorClasses[color as keyof typeof colorClasses]}`}>
        <MapPin className="w-3 h-3 mr-1" />
        {location === 'zschorlau' ? 'Zschorlau' : location === 'aue' ? 'Aue' : 'Beide Standorte'}
      </span>
    );
  };

  const DoctorCard: React.FC<{ doctor: any; isFacharzt?: boolean }> = ({ doctor, isFacharzt = false }) => {
    const color = getLocationColor(doctor.location);
    const colorClasses = {
      yellow: {
        bg: 'bg-yellow-600',
        text: 'text-yellow-600',
        light: 'bg-yellow-100'
      },
      red: {
        bg: 'bg-[#FF0000]',
        text: 'text-red-600',
        light: 'bg-red-100'
      },
      gray: {
        bg: 'bg-gray-600',
        text: 'text-gray-600',
        light: 'bg-gray-100'
      }
    };

    const colors = colorClasses[color as keyof typeof colorClasses];

    return (
      <div className="bg-white rounded-3xl card-spacing-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
        <div className="w-32 h-32 rounded-full mx-auto element-spacing overflow-hidden">
          {doctor.image ? (
            <img 
              src={doctor.image} 
              alt={doctor.name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className={`w-full h-full flex items-center justify-center text-white text-2xl font-bold ${colors.bg}`}>
              {doctor.name.split(' ').map((n: string) => n.charAt(0)).join('')}
            </div>
          )}
        </div>
        
        <div className="element-spacing-sm">
          {getLocationBadge(doctor.location)}
        </div>
        
        <h3 className={`text-2xl font-bold text-spacing-sm ${colors.text}`}>
          {doctor.name}
        </h3>
        
        <p className="text-gray-600 font-medium text-spacing">
          {doctor.title}
        </p>
        
        <p className="text-gray-600 text-sm leading-relaxed text-spacing">
          {doctor.description}
        </p>

        {doctor.specialties && (
          <div className="flex flex-wrap justify-center grid-spacing-sm">
            {doctor.specialties.map((specialty: string, index: number) => (
              <span key={index} className={`px-2 py-1 rounded-full text-xs font-medium ${colors.light} ${colors.text}`}>
                {specialty}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="team" className="section-padding bg-section-primary">
      <div className="container mx-auto px-6">
        <div className="text-center element-spacing-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 element-spacing">
            Unsere MFA und Schwestern
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Unser engagiertes Team besteht aus erfahrenen MFA und Schwestern, die von unseren Fachärzten Dr. med. Lars Schirmer und Dr. med. Lars Unger sowie unseren Weiterbildungsärztinnen Isabell Rau und Dr. J. Schuster-Meinel unterstützt werden.
          </p>
        </div>

        {/* Unsere MFA und Schwestern */}
        <div className="element-spacing-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-spacing-xl max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="relative element-spacing">
                <ResponsiveImage 
                  src="/images/Schwesternteam 2025.jpg" 
                  alt="Schwesternteam 2025" 
                  className="w-64 md:w-80 h-64 md:h-80 mx-auto rounded-full object-cover group-hover:scale-105 transition-transform duration-300 shadow-lg"
                  sizes="(max-width: 768px) 256px, 320px"
                />
                <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl bg-yellow-600 shadow-lg">
                  <Stethoscope className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 text-spacing-sm">Schwesternteam</h3>
              <p className="text-xl text-gray-600 text-spacing font-semibold">MFA bei der Patientenbetreuung</p>
              <p className="text-gray-500 leading-relaxed text-lg">
                Unser erfahrenes Schwesternteam sorgt für eine professionelle und herzliche Betreuung während Ihres Praxisbesuchs.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative element-spacing">
                <ResponsiveImage 
                  src="/images/picture01.jpg" 
                  alt="Medizinische Fachangestellte" 
                  className="w-64 md:w-80 h-64 md:h-80 mx-auto rounded-full object-cover group-hover:scale-105 transition-transform duration-300 shadow-lg"
                  sizes="(max-width: 768px) 256px, 320px"
                />
                <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl bg-[#FF0000] shadow-lg">
                  <GraduationCap className="w-10 h-10" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 text-spacing-sm">Medizinische Fachangestellte</h3>
              <p className="text-xl text-gray-600 text-spacing font-semibold">Schwester im Behandlungsraum</p>
              <p className="text-gray-500 leading-relaxed text-lg">
                Unsere MFA-Teams in beiden Praxen organisieren Termine, führen Voruntersuchungen durch und stehen Ihnen mit Rat und Tat zur Seite.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DoctorsTeam;
