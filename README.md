# Dr. Schirmer Website

Moderne, responsive Website für die Hausarztpraxis Dr. Schirmer mit zwei Standorten in Zschorlau und Aue-Bad Schlema.

## 🚀 Features

- **Responsive Design**: Mobile-First Ansatz mit Tailwind CSS
- **Animations**: Framer Motion für flüssige Übergänge und Micro-Interactions
- **CMS**: Admin-Interface für News-Management
- **Performance**: Optimierte Bilder, Lazy Loading, Code Splitting
- **Accessibility**: WCAG 2.1 konform
- **SEO**: Optimierte Meta-Tags und Structured Data

## 🛠 Technologie-Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animationen**: Framer Motion
- **Icons**: Lucide React
- **Font**: Quicksand (Google Fonts)
- **Deployment**: Static Export für Hostinger

## 📦 Installation

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build
npm run build

# Deployment vorbereiten
npm run deploy
```

## 🎨 Design-System

### Farben
- **Gelb (Zschorlau)**: `#EAB308` - Hauptstandort
- **Rot (Aue)**: `#DC2626` - Zweigstelle
- **Grau**: `#6B7280` - Neutrale Elemente

### Komponenten
- **AnimatedCard**: Animierte Karten mit Hover-Effekten
- **StaggeredList**: Gestaffelte Listen-Animationen
- **GradientButton**: Gradient-Buttons mit Hover-Animationen
- **FloatingElement**: Schwebende Elemente
- **OptimizedImage**: Performance-optimierte Bilder

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 CMS-Administration

### Admin-Zugang
- **URL**: `/admin`
- **Passwort**: `drschirmer2024` (in Production ändern!)

### Features
- News-Artikel erstellen/bearbeiten/löschen
- Veröffentlichungsstatus steuern
- Icon- und Farbauswahl
- Datum-Management

## 🚀 Deployment

### Hostinger Setup
1. Build erstellen: `npm run build`
2. `out/` Verzeichnis auf Hostinger hochladen
3. `.htaccess` für SPA-Routing konfigurieren
4. SSL-Zertifikat einrichten

### Build-Optimierungen
- Static Export für bessere Performance
- Bild-Optimierung (WebP Support)
- CSS/JS Minification
- Gzip-Kompression

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **Core Web Vitals**: Optimiert
- **Bundle Size**: < 500KB (gzipped)

## 🔒 Sicherheit

- Content Security Policy
- XSS-Schutz
- CSRF-Schutz
- Sichere Headers

## 📞 Support

Bei Fragen oder Problemen:
- **Email**: hausarztpraxis-dr-schirmer@web.de
- **Telefon**: 03771 56 53 950

## 📄 Lizenz

© 2024 Dr. Schirmer. Alle Rechte vorbehalten.
