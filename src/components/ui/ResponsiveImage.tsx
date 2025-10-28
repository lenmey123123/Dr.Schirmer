'use client';

import React from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 80,
  placeholder = 'empty',
  blurDataURL,
  onLoad,
  onError
}) => {
  // Verwende das Fallback-Bild direkt, da die optimierten Bilder noch nicht korrekt funktionieren
  const fallbackSrc = src.replace('/images/', '/images/optimized/').replace(/\.(jpg|jpeg|png)$/i, '-fallback.jpg');

  return (
    <img
      src={fallbackSrc}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
      onLoad={onLoad}
      onError={onError}
      style={{
        width: '100%',
        height: 'auto',
        ...(placeholder === 'blur' && blurDataURL && {
          backgroundImage: `url(${blurDataURL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        })
      }}
    />
  );
};

export default ResponsiveImage;
