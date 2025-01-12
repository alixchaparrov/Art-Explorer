import axios from "axios"; // Importar Axios para realizar solicitudes HTTP / Axios importieren, um HTTP-Anfragen zu stellen
import { Artwork, APIResponse } from "./types"; // Importar tipos para datos de arte / Typen für Kunstdaten importieren

// URL base para la API de AIC / Basis-URL für die AIC-API
const BASE_URL = "https://api.artic.edu/api/v1";

// Crear cliente Axios con configuración predeterminada
// Axios-Client mit Standardkonfiguration erstellen
export const apiClient = axios.create({
  baseURL: BASE_URL, // URL base para solicitudes / Basis-URL für Anfragen
  timeout: 5000, // Tiempo límite de 5 segundos / 5 Sekunden Timeout
  headers: {
    "Content-Type": "application/json", // Encabezado para solicitudes JSON / Header für JSON-Anfragen
  },
});

// Función para obtener obras de arte con parámetros de búsqueda y ordenación
// Funktion zum Abrufen von Kunstwerken mit Such- und Sortierparametern
export const fetchArtWorks = async (
  page: number = 1, // Página actual / Aktuelle Seite
  searchTerm: string = "", // Término de búsqueda / Suchbegriff
  sortBy: string = "" // Criterio de ordenación / Sortierkriterium
): Promise<any> => {
  // Parámetros para la solicitud / Parameter für die Anfrage
  const params: any = {
    page,
    ...(searchTerm.trim() ? { q: searchTerm.trim() } : {}), // Incluir término de búsqueda si no está vacío / Suchbegriff hinzufügen, wenn nicht leer
    fields: "id,title,image_id,artist_title,date_display", // Campos requeridos / Angeforderte Felder
    ...(sortBy ? { sort: sortBy } : {}), // Incluir orden si está especificado / Sortierung hinzufügen, wenn angegeben
  };

  // Elimina el parámetro 'sort' si no es compatible / Entfernt den Parameter 'sort', wenn er nicht unterstützt wird
  delete params.sort;

  console.log("Parameter, die an die API gesendet werden:", params); // Imprime los parámetros enviados a la API / Gibt die an die API gesendeten Parameter aus

  try {
    const response = await apiClient.get("/artworks/search", { params }); // Realiza la solicitud / Führt die Anfrage aus
    return response.data; // Devuelve los datos de la respuesta / Gibt die Antwortdaten zurück
  } catch (error: any) {
    console.error("Fehler beim Erwerb von Kunstwerken:", {
      message: error.message, // Mensaje del error / Fehlermeldung
      status: error.response?.status, // Código de estado HTTP / HTTP-Statuscode
      data: error.response?.data, // Datos del error / Fehlermeldedaten
      headers: error.response?.headers, // Encabezados de la respuesta / Antwortheader
    });
    throw error; // Lanza el error / Fehler werfen
  }
};

// Función para obtener detalles de una obra de arte por ID
// Funktion zum Abrufen von Kunstwerkdetails anhand der ID
export const fetchArtworkDetails = async (id: string): Promise<Artwork | null> => {
  try {
    const response = await apiClient.get(`/artworks/${id}`); // Solicita los detalles / Ruft die Details ab
    const data = response.data.data; // Extrae los datos relevantes / Extrahiert die relevanten Daten
    return {
      id: data.id,
      title: data.title || "Unbekannter Titel", // Título por defecto si falta / Standardtitel, wenn keiner vorhanden
      artist_title: data.artist_display || "Unbekannter Künstler", // Artista por defecto si falta / Standardkünstler, wenn keiner vorhanden
      date_display: data.date_display || "Datum unbekannt", // Fecha por defecto si falta / Standarddatum, wenn keines vorhanden
      image_id: data.image_id || null, // Imagen nula si falta / Null-Bild, wenn keines vorhanden
    };
  } catch (error: any) {
    console.error("Error fetching artwork details:", error.message); // Manejo de errores / Fehlerbehandlung
    return null; // Devuelve `null` si hay un error / Gibt `null` zurück, wenn ein Fehler auftritt
  }
};
