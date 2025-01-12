import React from "react"; // Importar React / React importieren
import styles from "./ArtworkCard.module.css"; // Importar estilos CSS / CSS-Stile importieren

// Interfaz para las props del componente / Schnittstelle für die Props der Komponente
interface ArtworkCardProps {
    title: string | null; // Título de la obra / Titel des Kunstwerks
    artist: string | null; // Nombre del artista / Name des Künstlers
    date: string | null; // Fecha de la obra / Datum des Kunstwerks
    imageUrl?: string | null; // URL de la imagen (opcional) / Bild-URL (optional)
}

// Componente funcional para mostrar una tarjeta de arte
// Funktionale Komponente zur Anzeige einer Kunstkarte
const ArtworkCard: React.FC<ArtworkCardProps> = ({ title, artist, date, imageUrl }) => {
    // Crear URL para la imagen utilizando IIIF API
    // Erstellen Sie eine URL für das Bild mit der IIIF API
    const iiifImage = imageUrl
        ? `https://www.artic.edu/iiif/2/${imageUrl}/full/843,/0/default.jpg`
        : "/fallback.png"; // Imagen de respaldo si no hay imagen / Fallback-Bild, wenn kein Bild vorhanden ist

    return (
        <div className={styles.card}>
            {/* Contenedor para la imagen de la obra / Container für das Kunstwerkbild */}
            <div className={styles.imageContainer}>
                <img
                    src={iiifImage}
                    alt={title || "Bild nicht verfügbar"} // Texto alternativo si falta el título / Alternativtext, wenn der Titel fehlt
                    className={styles.image}
                    loading="lazy" // Lazy loading para optimización / Lazy Loading zur Optimierung
                />
            </div>
            {/* Título de la obra / Titel des Kunstwerks */}
            <h2 className={styles.title}>{title || "Unbenannt"}</h2>
            {/* Nombre del artista / Name des Künstlers */}
            <p className={styles.artist}>{artist || "Unbekannter Künstler"}</p>
            {/* Fecha de la obra / Datum des Kunstwerks */}
            <p className={styles.date}>{date || "Datum unbekannt"}</p>
        </div>
    );
};

export default ArtworkCard; // Exportar el componente / Komponente exportieren
