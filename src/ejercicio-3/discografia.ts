
import { Disco } from "./disco";
import { Single } from "./single";

/**
 * La clase `Discografia` representa la discografía de un artista.
 * Tiene como atributos `discografia`. La clase extiende las clases
 * `Disco` y `Single`.
 */
export class Discografia<T extends Disco | Single> {

  /**
   * El constructor de la clase `Discografia` recibe como parámetro
   * `discografia` de tipo `T`, ya que puede ser de tipo `Disco` o
   * de tipo `Single`.
   * @param discografia Almacena la discografía del artista.
   */
  constructor(private discografia: T[]) {
  }

  /**
   * 
   * @returns Devuelve la discografía del artista.
   */
  getDiscografia() {
    return this.discografia;
  }
}