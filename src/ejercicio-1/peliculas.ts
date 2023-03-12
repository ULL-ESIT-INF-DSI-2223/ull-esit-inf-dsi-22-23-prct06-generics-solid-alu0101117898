/**
 * Clase `Pelicula` que representa una película.
 * @param año Año de estreno de la película.
 * @param nombre Nombre de la película.
 * @param duracion Duración de la película.
 */
export class Pelicula {
  constructor( protected año: number, 
               protected nombre: string,
               protected duracion: number){
    this.año = año;
    this.nombre = nombre;
    this.duracion = duracion;
  }
  /**
   * Método `getAño` que devuelve el año de estreno de la película.
   * @returns Año de estreno de la película.
   */
  getAño(): number {
    return this.año;
  }

  /**
   * Método `getNombre` que devuelve el nombre de la película.
   * @returns Nombre de la película.
   */
  getNombre(): string {
    return this.nombre;
  }

  /**
   * Método `getDuracion` que devuelve la duración de la película.
   * @returns Duración de la película.
   */
  getDuracion(): number {
    return this.duracion;
  }
}