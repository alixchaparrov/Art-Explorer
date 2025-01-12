"use client"; // Habilitar interactividad en el cliente / Aktiviert Interaktivität auf der Client-Seite

import React from "react"; // Importar React / React importieren

// Interfaz para las props del componente SortOptions
// Schnittstelle für die Props der Komponente SortOptions
interface SortOptionsProps {
  sortBy: string; // Criterio de orden actual / Aktuelles Sortierkriterium
  onSortChange: (value: string) => void; // Función para manejar el cambio de orden / Funktion zur Handhabung der Sortieränderung
}

// Componente funcional para seleccionar opciones de ordenamiento
// Funktionale Komponente zur Auswahl von Sortieroptionen
const SortOptions: React.FC<SortOptionsProps> = ({ sortBy, onSortChange }) => {
  return (
    <select
      value={sortBy} // Vincula el valor seleccionado al estado actual / Verknüpft den ausgewählten Wert mit dem aktuellen Zustand
      onChange={(e) => onSortChange(e.target.value)} // Maneja el cambio de selección / Handhabt die Auswahländerung
      className="sort-select" // Clase para estilos CSS / Klasse für CSS-Stile
    >
      {/* Opción sin orden / Keine Sortierung */}
      <option value="">Keine Reihenfolge</option>
      {/* Ordenar por título / Nach Titel sortieren */}
      <option value="title">Titel</option>
      {/* Ordenar por fecha de inicio / Nach Anfangsdatum sortieren */}
      <option value="date_start">Datum (Anfang)</option>
      {/* Ordenar por nombre del artista / Nach Künstler sortieren */}
      <option value="artist_title">Künstler</option>
    </select>
  );
};

export default SortOptions; // Exportar el componente / Komponente exportieren
