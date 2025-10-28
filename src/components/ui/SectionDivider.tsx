'use client';

import React from 'react';

interface SectionDividerProps {
  className?: string;
  variant?: 'default' | 'subtle' | 'minimal';
  color?: 'gray' | 'light' | 'dark';
}

const SectionDivider: React.FC<SectionDividerProps> = ({ 
  className = '', 
  variant = 'default',
  color = 'gray'
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'subtle':
        return 'h-px bg-gray-200';
      case 'minimal':
        return 'h-0.5 bg-gray-100';
      default:
        return 'h-px bg-gray-300';
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'light':
        return 'bg-gray-200';
      case 'dark':
        return 'bg-gray-400';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div 
      className={`
        w-full max-w-4xl mx-auto my-8
        ${getVariantClasses()}
        ${getColorClasses()}
        ${className}
      `.trim()}
      role="separator"
      aria-hidden="true"
    />
  );
};

export default SectionDivider;
