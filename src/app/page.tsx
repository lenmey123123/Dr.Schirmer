'use client';

import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Car, 
  Accessibility, 
  Navigation,
  Route,
  Calendar,
  CheckCircle, 
  Stethoscope,
  Heart,
  Shield,
  Users,
  GraduationCap,
  Award,
  Star,
  ArrowRight,
  Mail,
  Globe
} from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-yellow-50 to-red-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              Hausarztpraxis Dr. Schirmer
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ihre vertrauensvolle Hausarztpraxis in Zschorlau und Aue. 
              Mit modernster Ausstattung und persönlicher Betreuung für die ganze Familie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-yellow-600 text-white rounded-full px-8 py-4 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Zu unseren Praxen
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-red-600 text-white rounded-full px-8 py-4 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Termin vereinbaren
              </button>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <img 
                src="/images/logo01.jpg" 
                alt="Praxis Dr. Schirmer" 
                className="w-80 h-80 rounded-full object-cover shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-yellow-600 flex items-center justify-center shadow-lg">
                <Stethoscope className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Unsere Standorte
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Wir sind für Sie da an zwei Standorten im Erzgebirge für optimale Erreichbarkeit
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Zschorlau - Gelb */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 border-l-8 border-yellow-500">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                  <img src="/images/logo01.jpg" alt="Logo Zschorlau" className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2 text-yellow-600">Praxis Zschorlau</h3>
                  <p className="text-gray-600">Hauptstandort</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mt-1 mr-3 flex-shrink-0 text-yellow-600" />
                  <p className="text-gray-700">Schneeberger Straße 3<br />08321 Zschorlau</p>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">03771 / 56 53 950</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-yellow-600" />
                  Sprechzeiten
                </h4>
                <ul className="text-gray-600 space-y-1">
                  <li>Montag: 07:30 - 12:00 & 14:00 - 16:00</li>
                  <li>Donnerstag: 07:30 - 12:00 & 14:00 - 18:00</li>
                  <li className="text-sm text-gray-500">(Kindersprechstunde 15:00 - 18:00)</li>
                  <li className="text-sm text-gray-500">...und weitere nach Plan</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => window.open('tel:037715653950')}
                  className="flex-1 bg-yellow-600 text-white rounded-full px-6 py-3 font-bold hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Anrufen
                </button>
                <button 
                  onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=Schneeberger+Straße+3,+08321+Zschorlau')}
                  className="flex-1 bg-yellow-100 text-yellow-600 rounded-full px-6 py-3 font-bold hover:bg-yellow-200 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Route
                </button>
              </div>
            </div>

            {/* Aue - Rot */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 border-l-8 border-red-500">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                  <img src="/images/logo02.jpg" alt="Logo Aue" className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2 text-red-600">Praxis Aue</h3>
                  <p className="text-gray-600">Zweigstelle</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mt-1 mr-3 flex-shrink-0 text-red-600" />
                  <p className="text-gray-700">Schwarzenberger Straße 7<br />08280 Aue</p>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">03771 / 20 208</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-red-600" />
                  Sprechzeiten
                </h4>
                <ul className="text-gray-600 space-y-1">
                  <li>Montag: 07:30 - 12:00 & 14:00 - 17:00</li>
                  <li>Dienstag: 07:30 - 12:00 & 14:00 - 17:00</li>
                  <li className="text-sm text-gray-500">...und weitere nach Plan</li>
                </ul>
    </div>
    
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => window.open('tel:0377120208')}
                  className="flex-1 bg-red-600 text-white rounded-full px-6 py-3 font-bold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Anrufen
                </button>
                <button 
                  onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=Schwarzenberger+Straße+7,+08280+Aue')}
                  className="flex-1 bg-red-100 text-red-600 rounded-full px-6 py-3 font-bold hover:bg-red-200 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Route
                </button>
              </div>
            </div>
          </div>
      </div>
  </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-gradient-to-br from-yellow-50 to-red-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Unsere Leistungen
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Umfassende medizinische Versorgung für die ganze Familie
            </p>
          </div>

          {/* Accordion für detaillierte Leistungen - Variante 5 Logic */}
          <div className="max-w-3xl mx-auto space-y-5">
            <div className="accordion-item bg-white rounded-2xl shadow-lg overflow-hidden">
              <button 
                className="accordion-header w-full flex justify-between items-center text-left p-6"
                onClick={(e) => {
                  const item = e.currentTarget.parentElement;
                  item.classList.toggle('open');
                }}
              >
                <span className="text-2xl font-bold">Moderne Diagnostik</span>
                <div className="accordion-icon w-8 h-8 flex-shrink-0 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center transition-transform duration-500">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </div>
              </button>
              <div className="accordion-content px-6">
                <p className="text-gray-600">Mit Sonographie, EKG, Ergometrie und Lungenfunktionstests blicken wir genau hin, um Ihnen die beste Behandlung zu ermöglichen.</p>
              </div>
            </div>

            <div className="accordion-item bg-white rounded-2xl shadow-lg overflow-hidden">
              <button 
                className="accordion-header w-full flex justify-between items-center text-left p-6"
                onClick={(e) => {
                  const item = e.currentTarget.parentElement;
                  item.classList.toggle('open');
                }}
              >
                <span className="text-2xl font-bold">Ganzheitliche Vorsorge</span>
                <div className="accordion-icon w-8 h-8 flex-shrink-0 bg-red-100 text-red-600 rounded-full flex items-center justify-center transition-transform duration-500">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </div>
              </button>
              <div className="accordion-content px-6">
                <p className="text-gray-600">Von Check-ups über Hautkrebsscreenings bis zu U-Untersuchungen – wir begleiten Sie auf dem Weg zu einem langen, gesunden Leben.</p>
              </div>
            </div>

            <div className="accordion-item bg-white rounded-2xl shadow-lg overflow-hidden">
              <button 
                className="accordion-header w-full flex justify-between items-center text-left p-6"
                onClick={(e) => {
                  const item = e.currentTarget.parentElement;
                  item.classList.toggle('open');
                }}
              >
                <span className="text-2xl font-bold">Impfungen & Reiseberatung</span>
                <div className="accordion-icon w-8 h-8 flex-shrink-0 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center transition-transform duration-500">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </div>
              </button>
              <div className="accordion-content px-6">
                <p className="text-gray-600">Alle Standard- und Reiseimpfungen nach aktuellen Empfehlungen. Wir beraten Sie gerne zu Ihrem individuellen Impfschutz.</p>
              </div>
            </div>

            <div className="accordion-item bg-white rounded-2xl shadow-lg overflow-hidden">
              <button 
                className="accordion-header w-full flex justify-between items-center text-left p-6"
                onClick={(e) => {
                  const item = e.currentTarget.parentElement;
                  item.classList.toggle('open');
                }}
              >
                <span className="text-2xl font-bold">Hausbesuche & Notfallversorgung</span>
                <div className="accordion-icon w-8 h-8 flex-shrink-0 bg-red-100 text-red-600 rounded-full flex items-center justify-center transition-transform duration-500">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </div>
              </button>
              <div className="accordion-content px-6">
                <p className="text-gray-600">Für immobile Patienten bieten wir Hausbesuche an. Bei akuten Notfällen sind wir für Sie da und koordinieren mit dem Rettungsdienst.</p>
              </div>
            </div>
          </div>
      </div>
    </section>

      {/* Team Section */}
      <section id="team" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Unser Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Erfahrene Ärzte und ein engagiertes Praxisteam für Ihre Gesundheit
            </p>
          </div>

          {/* Ärzte */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">Unsere Ärzte</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. L. Schirmer",
                  title: "Allgemeinarzt",
                  description: "Praxisinhaber mit langjähriger Erfahrung in der Hausarztmedizin",
                  color: "yellow",
                  image: "/images/picture07.jpg"
                },
                {
                  name: "Dr. L. Unger",
                  title: "Allgemeinärztin",
                  description: "Spezialistin für Familienmedizin und Prävention",
                  color: "red"
                },
                {
                  name: "Dr. J. Schuster-Meinel",
                  title: "Allgemeinärztin",
                  description: "Neu im Team - Allgemeinärztin mit Schwerpunkt auf chronische Erkrankungen",
                  color: "yellow"
                }
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                >
                  <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center text-white text-2xl font-bold ${
                        member.color === 'yellow' ? 'bg-yellow-600' : 'bg-red-600'
                      }`}>
                        {member.name.split(' ')[1]?.charAt(0) || member.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${
                    member.color === 'yellow' ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {member.name}
                  </h3>
                  <p className="text-gray-600 font-medium mb-4">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Praxisteam */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">Unser Praxisteam</h3>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="relative mb-6">
                  <img 
                    src="/images/Schwesternteam 2025.jpg" 
                    alt="Schwesternteam 2025" 
                    className="w-64 h-64 mx-auto rounded-full object-cover group-hover:scale-105 transition-transform duration-300 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl bg-yellow-600 shadow-lg">
                    <Users className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Schwesternteam</h3>
                <p className="text-lg text-gray-600 mb-4">Medizinische Fachangestellte</p>
                <p className="text-gray-500 leading-relaxed">
                  Unser erfahrenes Schwesternteam sorgt für eine professionelle und herzliche Betreuung während Ihres Praxisbesuchs.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="relative mb-6">
                  <img 
                    src="/images/picture01.jpg" 
                    alt="Medizinische Fachangestellte" 
                    className="w-64 h-64 mx-auto rounded-full object-cover group-hover:scale-105 transition-transform duration-300 shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl bg-red-600 shadow-lg">
                    <Heart className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Medizinische Fachangestellte</h3>
                <p className="text-lg text-gray-600 mb-4">Praxisorganisation & Patientenbetreuung</p>
                <p className="text-gray-500 leading-relaxed">
                  Unsere MFA-Teams in beiden Praxen organisieren Termine, führen Voruntersuchungen durch und stehen Ihnen mit Rat und Tat zur Seite.
                </p>
              </div>
            </div>
          </div>

          {/* Praxisräume */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">Unsere Praxisräume</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center group">
                <img 
                  src="/images/Sprechzimmer 1.jpg" 
                  alt="Sprechzimmer 1" 
                  className="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300 shadow-lg"
                />
                <h4 className="text-lg font-semibold text-gray-900 mt-4">Sprechzimmer 1</h4>
                <p className="text-gray-600">Moderne Ausstattung für optimale Behandlung</p>
              </div>
              
              <div className="text-center group">
                <img 
                  src="/images/Sprechzimmer 2.jpg" 
                  alt="Sprechzimmer 2" 
                  className="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300 shadow-lg"
                />
                <h4 className="text-lg font-semibold text-gray-900 mt-4">Sprechzimmer 2</h4>
                <p className="text-gray-600">Behagliche Atmosphäre für entspannte Gespräche</p>
              </div>
              
              <div className="text-center group">
                <img 
                  src="/images/Labor Zschorlau.jpg" 
                  alt="Labor Zschorlau" 
                  className="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300 shadow-lg"
                />
                <h4 className="text-lg font-semibold text-gray-900 mt-4">Labor Zschorlau</h4>
                <p className="text-gray-600">Eigenes Labor für schnelle Diagnostik</p>
              </div>
              
              <div className="text-center group">
                <img 
                  src="/images/wz-1.jpg" 
                  alt="Praxisräume" 
                  className="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300 shadow-lg"
                />
                <h4 className="text-lg font-semibold text-gray-900 mt-4">Wartebereich</h4>
                <p className="text-gray-600">Gemütlicher Wartebereich für Ihre Entspannung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bildergalerie Section */}
      <section id="galerie" className="py-20 md:py-28 bg-gradient-to-br from-yellow-50 to-red-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ein Blick in unsere Praxen
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Moderne Ausstattung und eine einladende Atmosphäre für Ihre Gesundheit
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="group">
              <img 
                src="/images/picture02.jpg" 
                alt="Praxisräume" 
                className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300 shadow-lg"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">Moderne Praxisausstattung</h3>
                <p className="text-gray-600">Hochwertige medizinische Geräte für präzise Diagnostik</p>
              </div>
            </div>
            
            <div className="group">
              <img 
                src="/images/picture03.jpg" 
                alt="Praxisräume" 
                className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300 shadow-lg"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">Behagliche Atmosphäre</h3>
                <p className="text-gray-600">Wohlfühlambiente für entspannte Arztbesuche</p>
              </div>
            </div>
            
            <div className="group">
              <img 
                src="/images/picture04.jpg" 
                alt="Praxisräume" 
                className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300 shadow-lg"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">Freundliche Räumlichkeiten</h3>
                <p className="text-gray-600">Helle und einladende Praxisräume</p>
              </div>
            </div>
            
            <div className="group">
              <img 
                src="/images/wz-1.jpg" 
                alt="Wartebereich" 
                className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300 shadow-lg"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">Gemütlicher Wartebereich</h3>
                <p className="text-gray-600">Moderne und einladende Wartebereiche mit hellgrünen Akzenten</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Aktuelle Meldungen
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Wichtige Informationen und Neuigkeiten aus unserer Praxis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-8 border-yellow-500">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-yellow-600 mb-4">
                Praxis-Urlaub
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Vom 15. bis 30. Dezember bleibt unsere Praxis geschlossen. 
                In dringenden Fällen wenden Sie sich an den ärztlichen Bereitschaftsdienst.
              </p>
              <div className="text-sm text-gray-500">
                Veröffentlicht: 01.12.2024
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-8 border-red-500">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-4">
                Grippe-Impfung
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Die Grippe-Impfung ist jetzt verfügbar. Vereinbaren Sie Ihren Termin 
                für eine rechtzeitige Impfung vor der Grippesaison.
              </p>
              <div className="text-sm text-gray-500">
                Veröffentlicht: 15.11.2024
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-8 border-yellow-500">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-yellow-600 mb-4">
                Neue Praxissoftware
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Wir haben unsere Praxissoftware modernisiert. 
                Online-Terminbuchung und E-Rezepte sind jetzt verfügbar.
              </p>
              <div className="text-sm text-gray-500">
                Veröffentlicht: 01.11.2024
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Karriere Section */}
      <section id="karriere" className="py-20 md:py-28 bg-gradient-to-br from-yellow-50 to-red-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Karriere & Ausbildung
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Werden Sie Teil unseres Teams oder starten Sie Ihre medizinische Ausbildung bei uns
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-yellow-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-600 mb-4 text-center">
                Medizinstudenten
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-center">
                Als anerkannte Lehrpraxis bieten wir Medizinstudenten der Universitäten 
                Dresden, Leipzig und Chemnitz ein kostenfreies WG-Zimmer und 
                umfassende praktische Erfahrung.
              </p>
              <div className="text-center">
                <button className="bg-yellow-600 text-white rounded-full px-6 py-3 font-bold hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Bewerbung einreichen
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-red-600 mb-4 text-center">
                Praxisteam
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-center">
                Wir suchen regelmäßig qualifizierte MFA (Medizinische Fachangestellte) 
                und Ärzte, die unser Team verstärken möchten. 
                Moderne Ausstattung und familiäre Atmosphäre erwarten Sie.
              </p>
              <div className="text-center">
                <button className="bg-red-600 text-white rounded-full px-6 py-3 font-bold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Stellenangebote ansehen
                </button>
              </div>
            </div>
          </div>
      </div>
    </section>

      {/* Downloads Section */}
      <section id="downloads" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Downloads
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Wichtige Formulare und Dokumente für Ihren Praxisbesuch
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-8 border-yellow-500">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-yellow-600 mb-4">
                Patientenaufnahmebogen
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Füllen Sie diesen Bogen vor Ihrem ersten Besuch aus, 
                um Wartezeiten zu verkürzen.
              </p>
              <button className="bg-yellow-600 text-white rounded-full px-6 py-3 font-bold hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                PDF herunterladen
              </button>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-8 border-red-500">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-red-600 mb-4">
                Einverständniserklärung
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Einverständniserklärung für Behandlungen und 
                Datenverarbeitung nach DSGVO.
              </p>
              <button className="bg-red-600 text-white rounded-full px-6 py-3 font-bold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                PDF herunterladen
              </button>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-8 border-yellow-500">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-yellow-600 mb-4">
                Reiseimpfungen
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Checkliste für Reiseimpfungen und 
                gesundheitliche Vorsorge vor Reisen.
              </p>
              <button className="bg-yellow-600 text-white rounded-full px-6 py-3 font-bold hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                PDF herunterladen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lehrpraxis Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-yellow-50 to-red-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-10 text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-yellow-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Lehrpraxis der Universitäten
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Als anerkannte Lehrpraxis der Universitäten Dresden, Leipzig und Chemnitz 
              geben wir unser Wissen mit Freude an die nächste Generation weiter. 
              Medizinstudenten finden bei uns ein Zuhause auf Zeit mit einem kostenfreien WG-Zimmer.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Dresden", "Leipzig", "Chemnitz"].map((uni, index) => (
                <span
                  key={index}
                  className="bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full font-medium"
                >
                  Universität {uni}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-red-600 to-yellow-600">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Kontakt & Terminvereinbarung
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Rufen Sie uns an oder schreiben Sie uns eine E-Mail. Wir sind für Sie da!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Kontaktinformationen */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Kontaktinformationen</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-yellow-300" />
                  <div>
                    <p className="font-semibold">Telefon</p>
                    <p>03771 / 56 53 950</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-yellow-300" />
                  <div>
                    <p className="font-semibold">E-Mail</p>
                    <p>hausarztpraxis-dr-schirmer@web.de</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="w-6 h-6 mr-4 text-yellow-300" />
                  <div>
                    <p className="font-semibold">Website</p>
                    <p>www.hausarztpraxis-dr-schirmer.de</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Schnellkontakt */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Schnellkontakt</h3>
              <div className="space-y-4">
                <button
                  onClick={() => window.open('tel:037715653950', '_self')}
                  className="w-full bg-white text-red-600 rounded-full px-6 py-3 font-bold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Jetzt anrufen
                </button>
                <button
                  onClick={() => window.open('mailto:hausarztpraxis-dr-schirmer@web.de', '_self')}
                  className="w-full bg-yellow-600 text-white rounded-full px-6 py-3 font-bold hover:bg-yellow-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  E-Mail senden
                </button>
                <button
                  onClick={() => window.open('https://wa.me/4937715653950?text=Hallo%2C%20ich%20möchte%20einen%20Termin%20vereinbaren.', '_blank')}
                  className="w-full bg-green-600 text-white rounded-full px-6 py-3 font-bold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </button>
              </div>
            </div>
            
            {/* Karte */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Standorte</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-yellow-300 mb-2">Praxis Zschorlau</h4>
                  <p className="text-sm">Schneeberger Straße 3<br />08321 Zschorlau</p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-300 mb-2">Praxis Aue</h4>
                  <p className="text-sm">Schwarzenberger Straße 7<br />08280 Aue</p>
                </div>
                <div className="mt-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.123456789!2d12.3456789!3d50.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDA3JzI0LjQiTiAxMsKwMjAnNDQuNCJF!5e0!3m2!1sde!2sde!4v1234567890123!5m2!1sde!2sde"
                    width="100%"
                    height="200"
                    style={{ border: 0, borderRadius: '1rem' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Praxis Dr. Schirmer Standorte"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
    </div>
  </section>

      {/* Floating WhatsApp CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.open('https://wa.me/4937715653950?text=Hallo%2C%20ich%20möchte%20einen%20Termin%20vereinbaren.', '_blank')}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          aria-label="WhatsApp Nachricht senden"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HomePage;