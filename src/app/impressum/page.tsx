'use client';

import React from 'react';
import { ArrowLeft, MapPin, Phone, Mail, Globe } from 'lucide-react';
import Link from 'next/link';

const ImpressumPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-red-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Zurück zur Startseite
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Impressum
            </h1>

            <div className="space-y-8">
              {/* Practice Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Praxisinformationen
                </h2>
                <div className="bg-yellow-50 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Praxis Zschorlau (Hauptstandort)
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Adresse:</p>
                        <p className="text-gray-700">Schneeberger Straße 3<br />08321 Zschorlau</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Telefon:</p>
                        <p className="text-gray-700">03771 / 56 53 950</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Fax:</p>
                        <p className="text-gray-700">03771 / 56 53 959</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">E-Mail:</p>
                        <p className="text-gray-700">hausarztpraxis-dr-schirmer@web.de</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Praxis Aue (Zweigstelle)
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Adresse:</p>
                        <p className="text-gray-700">Schwarzenberger Straße 7<br />08280 Aue</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Telefon:</p>
                        <p className="text-gray-700">03771 / 20 208</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Fax:</p>
                        <p className="text-gray-700">03771 / 25 90 944</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">E-Mail:</p>
                        <p className="text-gray-700">hausarztpraxis-dr-schirmer@web.de</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Legal Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Rechtliche Angaben
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Praxisinhaber:</strong> Dr. med. Lars Schirmer<br />
                    <strong>Facharzt für:</strong> Allgemeinmedizin<br />
                    <strong>Berufsbezeichnung:</strong> Arzt (verliehen in Deutschland)
                  </p>
                  <p>
                    <strong>Zuständige Ärztekammer:</strong> Sächsische Landesärztekammer<br />
                    <strong>Berufshaftpflichtversicherung:</strong> [Versicherungsdetails folgen]
                  </p>
                  <p>
                    <strong>Umsatzsteuer-ID:</strong> [Umsatzsteuer-ID folgt]<br />
                    <strong>Steuernummer:</strong> [Steuernummer folgt]
                  </p>
                </div>
              </section>

              {/* Website Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Website-Informationen
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Website:</strong> www.hausarztpraxis-dr-schirmer.de<br />
                    <strong>Entwicklung:</strong> [Entwicklerdetails folgen]<br />
                    <strong>Hosting:</strong> [Hosting-Details folgen]
                  </p>
                </div>
              </section>

              {/* Disclaimer */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Haftungsausschluss
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. 
                    Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können 
                    wir jedoch keine Gewähr übernehmen.
                  </p>
                  <p>
                    Diese Website dient ausschließlich der Information über unsere Praxis 
                    und deren Leistungen. Sie ersetzt nicht die persönliche Beratung, 
                    Untersuchung, Diagnose oder Behandlung durch einen approbierten Arzt.
                  </p>
                  <p>
                    Bei gesundheitlichen Beschwerden sollten Sie immer einen Arzt aufsuchen. 
                    Die hier bereitgestellten Informationen dürfen nicht zur Selbstdiagnose 
                    oder -behandlung verwendet werden.
                  </p>
                </div>
              </section>

              {/* Notice */}
              <div className="bg-yellow-100 border border-yellow-300 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                  Hinweis
                </h3>
                <p className="text-yellow-700">
                  Dieses Impressum befindet sich noch in Bearbeitung. Die vollständigen 
                  rechtlichen Angaben werden in Kürze ergänzt. Bei Fragen wenden Sie sich 
                  bitte direkt an unsere Praxis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpressumPage;
