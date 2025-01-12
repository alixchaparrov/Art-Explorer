"use client"; // Habilitar interactividad en el cliente / Aktiviert Interaktivität auf der Client-Seite

import React from "react"; // Importar React / React importieren

// Interfaz para las props del componente / Schnittstelle für die Props der Komponente
interface ShareButtonProps {
  title: string; // Título de la obra para compartir / Titel des Kunstwerks zum Teilen
  url: string; // URL del enlace para compartir / URL des Links zum Teilen
}

// Componente funcional para compartir una obra de arte
// Funktionale Komponente zum Teilen eines Kunstwerks
const ShareButton: React.FC<ShareButtonProps> = ({ title, url }) => {
  const handleShare = async () => {
    const shareData = {
      title: title || "Kunstwerk", // Título por defecto si falta / Standardtitel, wenn keiner vorhanden
      text: `Schauen Sie sich dieses Kunstwerk an: ${title}.`, // Mensaje de texto para compartir / Textnachricht zum Teilen
      url: url, // URL del enlace / URL des Links
    };

    // Verificar soporte para la API de compartir / Überprüft Unterstützung für die Share-API
    if (navigator.share) {
      try {
        await navigator.share(shareData); // Compartir usando la API / Teilen mit der API
        console.log("Erfolgreich geteilte Inhalte."); // Confirmación de éxito / Erfolgsbestätigung
      } catch (error) {
        console.error("Fehler beim Teilen:", error); // Manejo de errores / Fehlerbehandlung
      }
    } else {
      // Alternativa: copiar el enlace al portapapeles / Alternative: Link in die Zwischenablage kopieren
      navigator.clipboard.writeText(url);
      alert("Link in die Zwischenablage kopiert."); // Mostrar confirmación al usuario / Zeigt dem Benutzer eine Bestätigung
    }
  };

  return (
    // Botón para compartir / Schaltfläche zum Teilen
    <button onClick={handleShare} className="share-button">
      Dieses Kunstwerk teilen {/* Texto del botón / Beschriftung der Schaltfläche */}
    </button>
  );
};

export default ShareButton; // Exportar el componente / Komponente exportieren
