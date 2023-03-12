import { Disco } from "./disco";
import { Discografia } from "./discografia";
import { Single } from "./single";

/**
 * La clase Artista representa a un artista musical.
 * @param nombre Nombre del artista.
 * @param oyentes Número de oyentes del artista.
 * @param discografia Discografía del artista.
 */
export class Artista {
  constructor(public nombre: string, 
              public oyentes: number, 
              public discografia:  Discografia<Disco | Single>) {
    this.nombre = nombre;
    this.oyentes = oyentes;
    this.discografia = discografia;
  }

  getNombre() {
    return this.nombre;
  }
  getOyentes() {
    return this.oyentes;
  }
  getDiscografia() {
    return this.discografia;
  } 
}