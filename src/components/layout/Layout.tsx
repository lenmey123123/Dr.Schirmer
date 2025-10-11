import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  noIndex?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'Dr. med. Lars Schirmer - Facharzt für Allgemeinmedizin',
  description = 'Ihre Praxis für Allgemeinmedizin in Aue und Zschorlau. Dr. med. Lars Schirmer bietet umfassende medizinische Versorgung, Vorsorgeuntersuchungen und Notfallbehandlung.',
  keywords = 'Arzt, Allgemeinmedizin, Aue, Zschorlau, Erzgebirge, Hausarzt, Vorsorge, Notfall, Dr. Schirmer',
  ogImage = '/images/og-image.jpg',
  noIndex = false,
}) => {
  const fullTitle = title.includes('Dr. med. Lars Schirmer') 
    ? title 
    : `${title} | Dr. med. Lars Schirmer`;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
        
        {/* Open Graph */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Dr. med. Lars Schirmer",
              "description": "Facharzt für Allgemeinmedizin in Aue und Zschorlau",
              "url": "https://dr-schirmer.de",
              "telephone": "037715653950",
              "email": "hausarztpraxis-dr-schirmer@web.de",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Hauptstraße 123",
                "addressLocality": "Aue",
                "postalCode": "08309",
                "addressRegion": "Sachsen",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "50.5903",
                "longitude": "12.7069"
              },
              "openingHours": [
                "Mo-Fr 08:00-18:00",
                "Sa 09:00-12:00"
              ],
              "medicalSpecialty": "Allgemeinmedizin",
              "priceRange": "$$",
              "paymentAccepted": "Cash, Credit Card, Insurance",
              "currenciesAccepted": "EUR",
              "sameAs": [
                "https://www.google.com/maps/place/Dr.+med.+Lars+Schirmer"
              ]
            })
          }}
        />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        {/* Skip Links für Accessibility */}
        <a href="#main-content" className="skip-link">
          Zum Hauptinhalt springen
        </a>
        
        <main id="main-content" className="flex-1 pt-32">
          {children}
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Layout;