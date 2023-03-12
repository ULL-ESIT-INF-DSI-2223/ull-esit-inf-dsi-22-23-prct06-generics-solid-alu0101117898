import { Cancion } from "./cancion";

/**
 * La clase Disco representa un disco de música, que está
 * asociado a un artista. Tiene como atributos `nombre`, `año`
 * y `canciones`.
 */
export class Disco {

  /**
   * El constructor de la clase Disco recibe como parámetros
   * `nombre`, `año` y `canciones`.
   * @param nombre Almacena el nombre del disco.
   * @param año Almacena el año de publicación del disco.
   * @param canciones Almacena las canciones del disco.
   */
  constructor(public nombre: string, 
              public año: number, 
              public canciones: Cancion[]) {
    this.nombre = nombre;
    this.año = año;
    this.canciones = canciones;
  }

  /**
   * 
   * @returns Devuelve el nombre del disco.
   */
  getNombre() {
    return this.nombre;
  }

  /**
   * 
   * @returns Devuelve el año de publicación del disco.
   */
  getAño() {
    return this.año;
  }

  /**
   * 
   * @returns Devuelve las canciones del disco.
   */
  getCanciones() {
    return this.canciones;
  }
  
}