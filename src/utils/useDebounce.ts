/**
 * Hook personalizado para manejar el debounce de un valor.
 * Benutzerdefinierter Hook zur Handhabung der Verzögerung (Debounce) eines Wertes.
 *
 * Este hook devuelve un valor "debounced" que solo se actualiza después de un periodo de tiempo específico.
 * Der Hook gibt einen verzögerten (debounced) Wert zurück, der sich erst nach einer bestimmten Zeit aktualisiert.
 *
 * @param value El valor inicial que se manejará con debounce.
 *              Der ursprüngliche Wert, der mit Verzögerung verarbeitet wird.
 * @param delay El tiempo de espera en milisegundos antes de actualizar el valor.
 *              Die Wartezeit in Millisekunden, bevor der Wert aktualisiert wird.
 * @returns El valor actualizado tras la espera.
 *          Der aktualisierte Wert nach Ablauf der Wartezeit.
 */

import { useState, useEffect } from "react";

export function useDebounce(value: string, delay: number) {
  /**
   * Estado para almacenar el valor "debounced".
   * Zustand zur Speicherung des verzögerten (debounced) Wertes.
   */
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    /**
     * Configura un temporizador que actualiza el valor "debounced" después del retraso.
     * Richtet einen Timer ein, der den verzögerten Wert nach der festgelegten Zeit aktualisiert.
     */
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    /**
     * Limpia el temporizador cuando el componente se desmonta o el valor/delay cambia.
     * Löscht den Timer, wenn die Komponente entfernt wird oder sich der Wert/die Verzögerung ändert.
     */
    return () => {
      clearTimeout(handler); // Limpieza del temporizador / Löschen des Timers
    };
  }, [value, delay]); // Dependencias del efecto / Abhängigkeiten des Effekts

  /**
   * Devuelve el valor "debounced".
   * Gibt den verzögerten (debounced) Wert zurück.
   */
  return debouncedValue;
}
