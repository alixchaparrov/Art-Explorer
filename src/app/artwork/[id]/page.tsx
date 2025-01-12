import React from "react";
import { fetchArtworkDetails } from "@/utils/api";
import styles from "./ArtworkPage.module.css";
import ShareButton from "@/components/ShareButton"; // Botón para compartir / Schaltfläche zum Teilen

// Página de detalle del arte / Detailseite des Kunstwerks
const ArtworkPage = async ({ params }: { params: { id: string } }) => {
  // Obtener detalles del arte por ID / Abrufen von Kunstwerkdetails nach ID
  const artwork = await fetchArtworkDetails(params.id);
 // Mostrar error si no se encuentra la obra / Fehler anzeigen, wenn das Kunstwerk nicht gefunden wird
  if (!artwork) {
    return (
      <div className={styles.error}>
        <h1>Kunstwek wurde nicht gefunden.</h1> {/* Título del error / Fehlertitel */}
        <p>ID überprüfen oder später erneut versuchen</p> {/* Mensaje del error / Fehlermeldung */}
      </div>
    );
  }
 // Construir URL de la imagen IIIF / IIIF-Bild-URL erstellen
  const iiifImage = artwork.image_id
    ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
    : "/fallback.png"; // Imagen de respaldo / Fallback-Bild
 // Generar URL para compartir / URL für Teilen erstellen
  const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/artwork/${artwork.id}`;
 // Renderizar detalles del arte / Kunstwerkdetails rendern
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{artwork.title || "Unbenannt"}</h1> {/* Título / Titel */}
      <p className={styles.artist}> {/* Artista / Künstler */}
        Artista: {artwork.artist_title || "Unbekannt"}
      </p>
      <p className={styles.date}>
        Fecha: {artwork.date_display || "Datum unbekannt"} {/* Fecha / Datum */}
      </p>
      <img
        src={iiifImage}
        alt={artwork.title || "Bild des Kunstwerks"} 
        className={styles.image}
        loading="lazy"
      />
      <ShareButton title={artwork.title || "Kunstwerk"} url={currentUrl} /> {/* Botón para compartir / Teilen-Schaltfläche */}
    </div>
  );
};

export default ArtworkPage; // Exportar la página / Seite exportieren
