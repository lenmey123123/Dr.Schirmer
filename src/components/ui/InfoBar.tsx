'use client';

import React from 'react';
import { Bell, X } from 'lucide-react';

const InfoBar: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div className="info-bar">
      <div className="container mx-auto px-6 py-2">
        <div className="info-bar-content flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bell className="w-4 h-4 flex-shrink-0" />
            <p className="text-sm font-semibold text-center flex-1">
              Aktuell: Dr. Schuster-Meinel ist nun Fachärztin in Zschorlau | Neue Kindersprechstunde | Neuaufnahmen möglich
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="ml-4 p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Benachrichtigung schließen"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
