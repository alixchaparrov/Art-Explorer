"use client";

// Importaciones necesarias para el componente Home
// Notwendige Importe für die Home-Komponente
import { useEffect, useState } from "react";
import { fetchArtWorks } from "../utils/api"; // Lógica para obtener datos de la API / Logik zum Abrufen von API-Daten
import { useDebounce } from "@/utils/useDebounce"; // Hook para optimizar la búsqueda / Hook zur Optimierung der Suche
import styles from "./gallery.module.css"; // Estilos CSS / CSS-Stile
import ArtworkCard from "../components/ArtworkCard"; // Componente para mostrar tarjetas de arte / Komponente zum Anzeigen von Kunstkarten
import SortOptions from "../components/SortOptions"; // Menú de opciones de ordenación / Sortieroptionen-Menü
import { Artwork } from "../utils/types"; // Tipos para datos de arte / Typen für Kunstdaten
import Link from "next/link"; // Navegación entre páginas / Navigation zwischen Seiten

const Home = () => {
  // Estado para almacenar las obras de arte / Zustand zum Speichern von Kunstwerken
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  // Estado para el término de búsqueda / Zustand für den Suchbegriff
  const [searchTerm, setSearchTerm] = useState("");
  // Estado para el criterio de ordenación / Zustand für Sortierkriterien
  const [sortBy, setSortBy] = useState("");
  // Estado para mostrar el estado de carga / Zustand für den Ladezustand
  const [isLoading, setIsLoading] = useState(false);
  // Estado para errores / Zustand für Fehler
  const [error, setError] = useState<string | null>(null);
  // Estado para la paginación actual / Zustand für die aktuelle Seitennummer
  const [currentPage, setCurrentPage] = useState<number>(1);
  // Total de páginas / Gesamtanzahl der Seiten
  const [totalPages, setTotalPages] = useState<number>(1);

  // Optimizar el término de búsqueda / Suchbegriff optimieren
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    const loadArtWorks = async () => {
      setIsLoading(true); // Mostrar estado de carga / Ladezustand anzeigen
      setError(null); // Reiniciar errores / Fehler zurücksetzen
  
      try {
        const data = await fetchArtWorks(currentPage, debouncedSearchTerm, sortBy);
  
        // Mapear y sanitizar los datos recibidos de la API
        // Daten aus der API bereinigen und abbilden
        let sanitizedArtworks = data.data.map((artwork: any) => ({
          id: artwork.id,
          title: artwork.title || "Unbenannt", // Título por defecto si falta / Standardtitel, wenn keiner vorhanden
          image_id: artwork.image_id ?? null,
          artist_title: artwork.artist_title ?? "Unbekannt", // Artista por defecto si falta / Standardkünstler, wenn keiner vorhanden
          date_display: artwork.date_display ?? "Unbekannt", // Fecha por defecto si falta / Standarddatum, wenn keines vorhanden
        }));
  
        // Ordenar manualmente según el criterio seleccionado
        // Manuelles Sortieren nach ausgewähltem Kriterium
        if (sortBy === "title") {
          sanitizedArtworks = sanitizedArtworks.sort((a: Artwork, b: Artwork) =>
            a.title && b.title
              ? a.title.toLowerCase().localeCompare(b.title.toLowerCase())
              : a.title
              ? -1
              : 1 // Coloca los valores `null` o `undefined` al final / Platziert `null` oder `undefined` am Ende
          );
        } else if (sortBy === "artist_title") {
          sanitizedArtworks = sanitizedArtworks.sort((a: Artwork, b: Artwork) =>
            a.artist_title && b.artist_title
              ? a.artist_title.toLowerCase().localeCompare(b.artist_title.toLowerCase())
              : a.artist_title
              ? -1
              : 1
          );
        } else if (sortBy === "date_start") {
          sanitizedArtworks = sanitizedArtworks.sort((a: Artwork, b: Artwork) => {
            const dateA = a.date_display ? new Date(a.date_display).getTime() : 0;
            const dateB = b.date_display ? new Date(b.date_display).getTime() : 0;
            return dateA - dateB; // Orden ascendente por fecha / Aufsteigende Sortierung nach Datum
          });
        }
  
        setArtworks(sanitizedArtworks); // Actualizar estado con los datos ordenados / Zustand mit sortierten Daten aktualisieren
        setTotalPages(data.pagination.total_pages); // Total de páginas / Gesamtanzahl der Seiten
      } catch (error: any) {
        console.error("Fehler beim Laden von Kunstwerken:", error);
        setError("Fehler beim Laden von Kunstwerken."); // Mostrar error / Fehler anzeigen
      } finally {
        setIsLoading(false); // Ocultar estado de carga / Ladezustand ausblenden
      }
    };
  
    loadArtWorks(); // Cargar datos al montar el componente / Daten laden, wenn die Komponente montiert wird
  }, [currentPage, debouncedSearchTerm, sortBy]); // Efectos dependientes de estas variables / Effekte, die von diesen Variablen abhängen

  return (
    <div>
      <header>
        <h1 className={styles["page-title"]}>Art Explorer</h1>
        <input
          type="text"
          placeholder="Suchen..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles["search-input"]}
        />
        <SortOptions
          sortBy={sortBy}
          onSortChange={(value) => {
            setSortBy(value); // Actualiza el criterio de orden / Aktualisiert das Sortierkriterium
            setCurrentPage(1); // Reinicia la paginación / Setzt die Seitennummer zurück
          }}
        />
      </header>

      {error ? (
        <div className={styles["error-message"]}>{error}</div>
      ) : isLoading ? (
        <div className={styles["gallery-grid"]}>
          {[...Array(8)].map((_, index) => (
            <div key={index} className={styles["skeleton-card"]}></div>
          ))}
        </div>
      ) : (
        <div className={styles["gallery-grid"]}>
          {artworks.map((artwork) => (
            <Link href={`/artwork/${artwork.id}`} key={artwork.id}>
              <ArtworkCard
                title={artwork.title}
                artist={artwork.artist_title}
                date={artwork.date_display}
                imageUrl={artwork.image_id || undefined}
              />
            </Link>
          ))}
        </div>
      )}
      <div className={styles["pagination-controls"]}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(1)}
          className={styles["pagination-button"]}
        >
          Erste
        </button>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className={styles["pagination-button"]}
        >
          Vorherige
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className={styles["pagination-button"]}
        >
          Nächste
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(totalPages)}
          className={styles["pagination-button"]}
        >
          Letzte
        </button>
      </div>
    </div>
  );
};

export default Home;
