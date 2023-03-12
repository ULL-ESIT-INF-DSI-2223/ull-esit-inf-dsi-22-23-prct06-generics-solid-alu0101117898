import { Cancion } from "./cancion";

/**
 * La clase Single representa un single de música, que está
 * asociado a un artista. Tiene como atributos `nombre`, `año`
 * y `versiones`.
 */
export class Single {

  /**
   * El constructor de la clase Single recibe como parámetros
   * `nombre`, `año` y `versiones`.
   * @param nombre Almacena el nombre del single.
   * @param año Almacena el año de publicación del single.
   * @param versiones Almacena las versiones del single.
   */
  constructor(public nombre: string, 
              public  año: number, 
              public versiones: Cancion[]) {
    this.nombre = nombre;
    this.año = año;
    this.versiones = versiones;
  }

  /**
   * 
   * @returns Devuelve el nombre del single.
   */
  getNombre() {
    return this.nombre;
  }

  /**
   * 
   * @returns Devuelve el año de publicación del single.
   */
  getAño() {
    return this.año;
  }

  /**
   * 
   * @returns Devuelve las versiones del single.
   */
  getCanciones() {
    return this.versiones;
  }
}
