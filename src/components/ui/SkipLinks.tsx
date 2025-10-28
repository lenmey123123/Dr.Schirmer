'use client';

import React from 'react';

const SkipLinks: React.FC = () => {
  return (
    <div className="skip-links">
      <a 
        href="#main-content" 
        className="skip-link"
        tabIndex={1}
      >
        Zum Hauptinhalt springen
      </a>
      <a 
        href="#navigation" 
        className="skip-link"
        tabIndex={2}
      >
        Zur Navigation springen
      </a>
      <a 
        href="#contact" 
        className="skip-link"
        tabIndex={3}
      >
        Zu den Kontaktdaten springen
      </a>
    </div>
  );
};

export default SkipLinks;