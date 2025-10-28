'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  duration?: number;
}

const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  className = '',
  intensity = 'medium',
  duration = 3
}) => {
  const getIntensity = () => {
    switch (intensity) {
      case 'low':
        return { y: [-5, 5, -5] };
      case 'medium':
        return { y: [-10, 10, -10] };
      case 'high':
        return { y: [-15, 15, -15] };
      default:
        return { y: [-10, 10, -10] };
    }
  };

  return (
    <motion.div
      animate={getIntensity()}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
