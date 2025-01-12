# Art Explorer: Eine Next.js-Kunstgalerie

## 🎨 Projektübersicht

**Art Explorer** ist eine webbasierte Kunstgalerie, die mit **Next.js** entwickelt wurde. Dieses Projekt ermöglicht es Benutzern, Kunstwerke in einer modernen, responsiven Benutzeroberfläche zu durchsuchen, anzuzeigen und zu teilen. Zusätzliche Funktionen wie Filterung, Sortierung und eine Detailansicht machen die Anwendung zu einem umfassenden Tool zur Kunstentdeckung.

---

## 🔧 Technologien

### Frontend:
- **Next.js 13** (mit `use client` für interaktive Komponenten).
- **React** (komponentenbasierte Architektur).
- **CSS Module** (für modulare und scoped Stile).
- **TypeScript** (für starke Typisierung und verbesserte Entwicklererfahrung).

### API:
- **Art Institute of Chicago (AIC) API**: Datenquelle für Kunstwerke und deren Details.
- **Axios**: Für HTTP-Anfragen.

---

## 🔒 Funktionen

### **1. Grundlegende Kunstwerk-Galerie**
- **API-Integration:**
  - Implementierung eines API-Clients mit Axios.
  - Fehlerbehandlung und Typisierung der Antworten.
- **Responsives Grid-Layout:**
  - Automatische Anpassung der Galerie an verschiedene Bildschirmgrößen (1/3/4 Spalten).
- **Optimierte Bilder:**
  - Integration der **IIIF Image API** zur Optimierung der Bildladezeiten.
  - Lazy Loading für bessere Performance.

### **2. Such- und Filterfunktionen**
- **Suche:**
  - Debounce-Mechanismus zur Reduzierung von API-Anfragen.
  - Anzeige eines "Keine Ergebnisse"-Status.
- **Sortierung:**
  - Sortierung nach Titel, Künstler und Datum.
  - Synchronisierung der Sortierung mit der URL.
- **Ladezustände:**
  - Skeleton-Loader während des Datenladens.
  - Deaktivierte Schaltflächen und visuelles Feedback während der Ladezeiten.

### **3. Erweiterte Funktionen**
- **Paginierung:**
  - Serverseitige Paginierung mit Synchronisierung der aktuellen Seite in der URL.
- **Detailansicht:**
  - Anzeige großer Bilder, Metadaten und einer "Teilen"-Funktion (Web Share API oder Fallback für die Zwischenablage).

---

## 🔍 Projektstruktur

```
ArtExplorer/
|-- /components/              # Wiederverwendbare React-Komponenten
|   |-- ArtworkCard.tsx       # Darstellung einzelner Kunstkarten
|   |-- ShareButton.tsx       # Teilen-Schaltfläche
|   |-- Skeleton.tsx          # Skeleton-Loader für Ladezustände
|-- /pages/                   # Seiten der Anwendung
|   |-- /artwork/[id].tsx     # Detailansicht einer Kunstkarte
|   |-- index.tsx             # Startseite mit der Kunstgalerie
|-- /styles/                  # CSS-Module für komponentenspezifische Stile
|-- /utils/                   # Utility-Funktionen und API-Integrationen
|   |-- api.ts                # Axios-Client und API-Funktionen
|   |-- types.ts              # TypeScript-Interfaces
|   |-- useDebounce.ts        # Custom Hook für Debounce-Mechanismus
```

---

## 💡 Wichtige Entscheidungen

- **TypeScript:** Sorgt für sauberen Code und vermeidet Laufzeitfehler.
- **CSS Modules:** Verhindert Konflikte von Klassennamen und bietet modulare Stile.
- **Debounce-Hook:** Optimiert die Performance der Suchfunktion.
- **Web Share API:** Ermöglicht Benutzern, Inhalte einfach zu teilen, mit Fallback für nicht unterstützte Browser.

---

## 🚀 Einrichtung und Ausführung

### Voraussetzungen:
- Node.js (>= 16.x)
- Paketmanager wie npm oder yarn

### Installation:
```bash
# Repository klonen
$ git clone https://github.com/username/art-explorer.git

# Verzeichnis wechseln
$ cd art-explorer

# Abhängigkeiten installieren
$ npm install
```

### Entwicklung starten:
```bash
$ npm run dev
```
Die Anwendung wird auf `http://localhost:3000` gestartet.

### Produktion bauen:
```bash
$ npm run build
$ npm start
```

---

## 🔧 Testen der Anwendung

### **Funktionalitätsprüfung:**
1. **Kunstgalerie laden:**
   - Sicherstellen, dass Kunstwerke korrekt angezeigt werden.
2. **Suchfunktion:**
   - Eingabe eines Suchbegriffs und Bestätigung, dass Ergebnisse korrekt gefiltert werden.
3. **Sortierung:**
   - Testen der Sortierung nach Titel, Künstler und Datum.
4. **Paginierung:**
   - Wechseln zwischen Seiten und Überprüfen der Konsistenz.
5. **Detailansicht:**
   - Anklicken eines Kunstwerks zur Anzeige von Details.
6. **Teilen:**
   - Testen der Teilen-Schaltfläche in verschiedenen Browsern.

### **Browser- und Gerätekompatibilität:**
- **Chrome, Firefox, Safari**: Sicherstellen, dass die Anwendung korrekt funktioniert.
- **Mobile, Tablet, Desktop**: Responsives Design überprüfen.

---

## 🌍 Erweiterungsmöglichkeiten
- Hinzufügen einer Benutzeranmeldung zur Personalisierung der Galerie.
- Integration einer Favoritenfunktion, um bevorzugte Kunstwerke zu speichern.
- Erweiterung der Filteroptionen (z. B. nach Epoche oder Medium).

---

## 🙏 Danksagungen
Dieses Projekt nutzt die öffentliche [Art Institute of Chicago API](https://api.artic.edu/docs/). Ein großes Dankeschön an das AIC für die Bereitstellung dieser wertvollen Ressource.

---

## 🔧 Kontakt
Wenn Sie Fragen oder Vorschläge haben, können Sie mich gerne kontaktieren:
- **E-Mail:** alix.chava.95@gmail.com
- **GitHub:** [github.com/username]([https://github.com/username](https://github.com/alixchaparrov/Art-Explorer))

