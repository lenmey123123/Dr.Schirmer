import React from 'react';
import { focusManagement } from '@/lib/accessibility';

interface SkipLink {
  href: string;
  label: string;
  target?: string;
}

interface SkipLinksProps {
  links?: SkipLink[];
  className?: string;
}

const SkipLinks: React.FC<SkipLinksProps> = ({
  links = [
    { href: '#main-content', label: 'Zum Hauptinhalt springen' },
    { href: '#navigation', label: 'Zur Navigation springen' },
    { href: '#footer', label: 'Zum Footer springen' },
  ],
  className = ''
}) => {
  const handleSkipLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const target = document.querySelector(href);
    if (target) {
      // Focus the target element
      if (target instanceof HTMLElement) {
        target.focus();
        target.scrollIntoView({ behavior: 'smooth' });
      }
      
      // Announce to screen readers
      const label = e.currentTarget.textContent || '';
      if (label) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = `Zu ${label.toLowerCase()} gesprungen`;
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
          document.body.removeChild(announcement);
        }, 1000);
      }
    }
  };

  return (
    <div className={`skip-links ${className}`}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="skip-link"
          onClick={(e) => handleSkipLinkClick(e, link.href)}
          onFocus={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.opacity = '1';
          }}
          onBlur={(e) => {
            e.currentTarget.style.transform = 'translateY(-100%)';
            e.currentTarget.style.opacity = '0';
          }}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default SkipLinks;