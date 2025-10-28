'use client';

import React from 'react';
import { Baby, Clock, MapPin, Heart, Shield } from 'lucide-react';

const ChildConsultation: React.FC = () => {
  return (
    <section className="section-padding bg-section-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-yellow-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Baby className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kindersprechstunde
              </h2>
              <p className="text-lg text-gray-600">
                Spezielle Betreuung für unsere kleinen Patienten
              </p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-3 gap-1 md:gap-8 mb-8">
              {/* Standort */}
              <div className="text-center">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-yellow-100 rounded-full mx-auto mb-1 md:mb-4 flex items-center justify-center">
                  <MapPin className="w-5 h-5 md:w-8 md:h-8 text-yellow-600" />
                </div>
                <h3 className="text-xs md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Standort</h3>
                <p className="text-xs md:text-base text-gray-600">Zschorlau</p>
                <p className="text-xs text-gray-500 hidden md:block">Schneeberger Straße 3</p>
              </div>

              {/* Zeiten */}
              <div className="text-center">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-yellow-100 rounded-full mx-auto mb-1 md:mb-4 flex items-center justify-center">
                  <Clock className="w-5 h-5 md:w-8 md:h-8 text-yellow-600" />
                </div>
                <h3 className="text-xs md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Zeiten</h3>
                <p className="text-xs md:text-base text-gray-600 font-semibold">Do</p>
                <p className="text-xs md:text-base text-gray-600">14-18h</p>
              </div>

              {/* Besonderheiten */}
              <div className="text-center">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-yellow-100 rounded-full mx-auto mb-1 md:mb-4 flex items-center justify-center">
                  <Heart className="w-5 h-5 md:w-8 md:h-8 text-yellow-600" />
                </div>
                <h3 className="text-xs md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Besondere</h3>
                <p className="text-xs md:text-base text-gray-600 break-words">Vorsorge</p>
                <p className="text-xs text-gray-500 hidden md:block">ab U7 für AOK PLUS</p>
              </div>
            </div>

            {/* Highlight Box */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 md:p-6 rounded-r-2xl">
              <div className="flex items-start space-x-2 md:space-x-4">
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm md:text-lg font-bold text-gray-900 mb-1 md:mb-2">
                    <span className="hidden sm:inline">AOK PLUS Vorsorgeuntersuchungen</span>
                    <span className="sm:hidden">AOK PLUS Vorsorge</span>
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-xs md:text-base">
                    <span className="hidden sm:inline">Für AOK PLUS-Versicherte bieten wir erweiterte Vorsorgeuntersuchungen ab der U7 an. Diese umfassen zusätzliche Untersuchungen und Beratungen, die über die Standard-Untersuchungen hinausgehen.</span>
                    <span className="sm:hidden">Erweiterte Vorsorgeuntersuchungen ab U7 für AOK PLUS-Versicherte.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button 
                onClick={() => window.open('tel:037715653950')}
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-full px-8 py-4 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center hover:from-amber-500 hover:to-yellow-500 min-h-[48px]"
              >
                <Clock className="mr-2 h-5 w-5" />
                Termin vereinbaren
              </button>
              <button 
                onClick={() => document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-yellow-100 text-yellow-600 rounded-full px-8 py-4 font-bold hover:bg-yellow-200 transition-all duration-300 transform hover:scale-105 flex items-center justify-center min-h-[48px]"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Route anzeigen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildConsultation;
