# 📝 Admin-CMS Anleitung für Dr. Schirmer Website

## 🔐 Admin-Zugang

**URL:** `https://ihre-domain.com/admin`  
**Passwort:** `drschirmer2024`

> ⚠️ **Wichtig:** Ändern Sie das Passwort nach dem ersten Login in der Datei `src/lib/cms.ts` (Zeile 199)

## 📋 Aktuelle Meldungen verwalten

### 1. **Neuen Beitrag erstellen**
1. Gehen Sie zu `/admin`
2. Melden Sie sich mit dem Passwort an
3. Klicken Sie auf **"Neuer Beitrag"**
4. Füllen Sie die Felder aus:
   - **Titel:** z.B. "Praxis-Urlaub"
   - **Beschreibung:** Der Text der Meldung
   - **Datum:** Wann wurde die Meldung erstellt
   - **Icon:** Kalender, Herz oder Schild
   - **Farbe:** Gelb (Zschorlau) oder Rot (Aue)
   - **Veröffentlicht:** ✅ Haken setzen für sofortige Veröffentlichung
5. Klicken Sie auf **"Speichern"**

### 2. **Beitrag bearbeiten**
1. Im Dashboard finden Sie alle Beiträge
2. Klicken Sie auf das **Bleistift-Symbol** (Bearbeiten)
3. Ändern Sie die gewünschten Felder
4. Klicken Sie auf **"Speichern"**

### 3. **Beitrag veröffentlichen/verstecken**
- Klicken Sie auf das **Auge-Symbol** um den Status zu ändern
- **👁️ Veröffentlicht** = Sichtbar auf der Website
- **👁️‍🗨️ Entwurf** = Nicht sichtbar

### 4. **Beitrag löschen**
1. Klicken Sie auf das **Papierkorb-Symbol**
2. Bestätigen Sie die Löschung

## 🎨 Design-Optionen

### **Icons:**
- 📅 **Kalender** - Für Termine, Urlaub, Schließzeiten
- ❤️ **Herz** - Für Gesundheitsinfos, Impfungen
- 🛡️ **Schild** - Für Sicherheit, Software-Updates

### **Farben:**
- 🟡 **Gelb** - Für Zschorlau (Hauptstandort)
- 🔴 **Rot** - Für Aue-Bad Schlema (Zweigstelle)

## 📱 Wo erscheinen die Meldungen?

Die "Aktuellen Meldungen" erscheinen auf der Hauptseite nach der "Standorte"-Sektion. Sie werden automatisch in einem schönen Grid-Layout angezeigt.

## 🔧 Technische Details

- **Speicherung:** Lokal im Browser (LocalStorage)
- **Backup:** Regelmäßige Backups empfohlen
- **Passwort ändern:** In `src/lib/cms.ts` Zeile 199

## 🆘 Hilfe

Bei Problemen:
1. **Browser-Cache leeren** (Strg+F5)
2. **Anderen Browser versuchen**
3. **Passwort prüfen** (Groß-/Kleinschreibung beachten)

## 📞 Support

**Telefon:** 03771 56 53 950  
**Email:** hausarztpraxis-dr-schirmer@web.de

