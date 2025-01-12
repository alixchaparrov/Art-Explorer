// Interfaz para los datos de una obra de arte
// Schnittstelle für die Daten eines Kunstwerks
export interface Artwork {
  id: string; // ID única de la obra / Eindeutige ID des Kunstwerks
  title: string | null; // Título de la obra / Titel des Kunstwerks
  artist_title: string | null; // Nombre del artista / Name des Künstlers
  date_display: string | null; // Fecha de la obra / Datum des Kunstwerks
  image_id: string | null; // ID de la imagen / Bild-ID
}

// Interfaz para la configuración de la API
// Schnittstelle für die API-Konfiguration
export interface APIConfig {
  iiif_url: string; // URL base para obtener imágenes a través de la API IIIF / Basis-URL für Bilder über die IIIF-API
}

// Interfaz para los datos de paginación
// Schnittstelle für die Paginierungsdaten
export interface Pagination {
  total: number; // Total de resultados disponibles / Gesamtanzahl der verfügbaren Ergebnisse
  limit: number; // Número de resultados por página / Anzahl der Ergebnisse pro Seite
  offset: number; // Desplazamiento para paginación / Versatz für die Paginierung
  total_pages: number; // Número total de páginas / Gesamtanzahl der Seiten
  current_page: number; // Página actual / Aktuelle Seite
}

// Interfaz para la respuesta completa de la API
// Schnittstelle für die vollständige API-Antwort
export interface APIResponse {
  data: Artwork[]; // Array de obras de arte / Array von Kunstwerken
  pagination: {
    total_pages: number; // Número total de páginas / Gesamtanzahl der Seiten
    current_page: number; // Página actual / Aktuelle Seite
  };
}
