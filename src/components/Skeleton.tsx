"use client"; // Habilitar renderizado e interactividad en el cliente / Aktiviert Client-seitiges Rendering und Interaktivität

import React from "react"; // Importar React / React importieren
import styles from "./Skeleton.module.css"; // Importar estilos CSS para el esqueleto / CSS-Stile für das Skelett importieren

// Componente funcional para mostrar un esqueleto de carga
// Funktionale Komponente zur Anzeige eines Lade-Skeletts
const Skeleton = () => {
  return (
    <div className={styles.skeleton}>
      {/* Esqueleto de imagen / Bild-Skelett */}
      <div className={styles.skeletonImage}></div>
      {/* Esqueleto de líneas de texto / Textzeilen-Skelett */}
      <div className={styles.skeletonText}></div>
      <div className={styles.skeletonText}></div>
    </div>
  );
};

export default Skeleton; // Exportar el componente / Komponente exportieren
