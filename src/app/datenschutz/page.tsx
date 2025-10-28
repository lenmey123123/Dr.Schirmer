'use client';

import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, Database } from 'lucide-react';
import Link from 'next/link';

const DatenschutzPage: React.FC = () => {
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
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Datenschutzerklärung
              </h1>
              <p className="text-lg text-gray-600">
                Schutz Ihrer persönlichen Daten ist uns wichtig
              </p>
            </div>

            <div className="space-y-8">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Einleitung
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. 
                    Diese Datenschutzerklärung informiert Sie über die Art, den Umfang 
                    und Zweck der Verarbeitung von personenbezogenen Daten durch unsere Praxis.
                  </p>
                  <p>
                    Wir verarbeiten Ihre Daten ausschließlich im Rahmen der geltenden 
                    Datenschutzgesetze, insbesondere der Datenschutz-Grundverordnung (DSGVO) 
                    und des Bundesdatenschutzgesetzes (BDSG).
                  </p>
                </div>
              </section>

              {/* Data Controller */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Verantwortlicher
                </h2>
                <div className="bg-blue-50 rounded-2xl p-6">
                  <div className="space-y-3">
                    <p><strong>Praxisinhaber:</strong> Dr. med. Lars Schirmer</p>
                    <p><strong>Adresse:</strong> Schneeberger Straße 3, 08321 Zschorlau</p>
                    <p><strong>Telefon:</strong> 03771 / 56 53 950</p>
                    <p><strong>E-Mail:</strong> hausarztpraxis-dr-schirmer@web.de</p>
                  </div>
                </div>
              </section>

              {/* Data Processing Purposes */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Zwecke der Datenverarbeitung
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-yellow-50 rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <Lock className="w-6 h-6 text-yellow-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">Medizinische Behandlung</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Patientendaten für Diagnose und Therapie</li>
                      <li>• Medizinische Dokumentation</li>
                      <li>• Terminverwaltung</li>
                      <li>• Rezeptausstellung</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 rounded-2xl p-6">
                    <div className="flex items-center mb-4">
                      <Database className="w-6 h-6 text-red-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">Praxisverwaltung</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Abrechnung mit Krankenkassen</li>
                      <li>• Kommunikation mit Patienten</li>
                      <li>• Qualitätssicherung</li>
                      <li>• Statistische Auswertungen</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Legal Basis */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Rechtsgrundlage
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage von:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung für medizinische Behandlung)</li>
                    <li>Art. 9 Abs. 2 lit. h DSGVO (Gesundheitsvorsorge und medizinische Behandlung)</li>
                    <li>§ 22 BDSG (Gesundheitsdaten)</li>
                    <li>Bundesärzteordnung (BÄO)</li>
                    <li>Musterberufsordnung der Bundesärztekammer</li>
                  </ul>
                </div>
              </section>

              {/* Data Categories */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Kategorien verarbeiteter Daten
                </h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Personenbezogene Daten</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Name, Vorname, Geburtsdatum</li>
                      <li>• Anschrift, Telefonnummer, E-Mail-Adresse</li>
                      <li>• Versicherungsnummer, Krankenkasse</li>
                      <li>• Notfallkontakt</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Gesundheitsdaten</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Krankengeschichte und Diagnosen</li>
                      <li>• Untersuchungsergebnisse</li>
                      <li>• Medikamentenverordnungen</li>
                      <li>• Therapiepläne und Behandlungsverläufe</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Speicherdauer
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Wir speichern Ihre Daten nur so lange, wie es für die jeweiligen Zwecke 
                    erforderlich ist oder gesetzlich vorgeschrieben:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Patientenakten:</strong> 10 Jahre nach letzter Behandlung</li>
                    <li><strong>Röntgenaufnahmen:</strong> 30 Jahre</li>
                    <li><strong>Arzneimittelverordnungen:</strong> 10 Jahre</li>
                    <li><strong>Kontaktdaten:</strong> Bis zur Löschung durch den Patienten</li>
                  </ul>
                </div>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Ihre Rechte
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Eye className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Auskunftsrecht</h3>
                        <p className="text-gray-700 text-sm">Information über verarbeitete Daten</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Database className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Berichtigungsrecht</h3>
                        <p className="text-gray-700 text-sm">Korrektur falscher Daten</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Lock className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Löschungsrecht</h3>
                        <p className="text-gray-700 text-sm">Löschung unter bestimmten Voraussetzungen</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Widerspruchsrecht</h3>
                        <p className="text-gray-700 text-sm">Widerspruch gegen Datenverarbeitung</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Kontakt bei Fragen
                </h2>
                <div className="bg-blue-50 rounded-2xl p-6">
                  <p className="text-gray-700 mb-4">
                    Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte wenden Sie sich bitte an:
                  </p>
                  <div className="space-y-2">
                    <p><strong>E-Mail:</strong> hausarztpraxis-dr-schirmer@web.de</p>
                    <p><strong>Telefon:</strong> 03771 / 56 53 950</p>
                    <p><strong>Post:</strong> Dr. med. Lars Schirmer, Schneeberger Straße 3, 08321 Zschorlau</p>
                  </div>
                </div>
              </section>

              {/* Notice */}
              <div className="bg-yellow-100 border border-yellow-300 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                  Hinweis
                </h3>
                <p className="text-yellow-700">
                  Diese Datenschutzerklärung befindet sich noch in Bearbeitung und wird 
                  entsprechend den aktuellen rechtlichen Anforderungen ergänzt. Die 
                  vollständige Version wird in Kürze verfügbar sein.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatenschutzPage;
