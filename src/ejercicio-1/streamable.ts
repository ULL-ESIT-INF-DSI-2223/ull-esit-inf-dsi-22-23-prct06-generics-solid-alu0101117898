/**
 * Interfaz que define los métodos `buscarPorNombre` y `buscarPorAnio`,
 * para buscar películas, series o documentales por nombre y año.
 */
export interface Streamable<T> {
  buscarPorNombre(nombre: string): T[];
  buscarPorAño(año: number): T[];
  print(): string;
}
