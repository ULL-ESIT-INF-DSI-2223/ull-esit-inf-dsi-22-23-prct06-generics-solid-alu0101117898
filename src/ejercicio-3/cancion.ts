/**
 * Se declara la clase Cancion, que tiene como atributos
 * `nombre`, `duracion`, `generos`, `single` y `reproducciones`.
 */
export class Cancion{

  /**
   * El constructor de la clase Cancion recibe como parámetros
   * `nombre`, `duracion`, `generos`, `single` y `reproducciones`.
   * @param nombre Almacena el nombre de la canción.
   * @param duracion Almacena la duración de la canción.
   * @param generos Almacena los géneros de la canción.
   * @param single Almacena si la canción es single o no.
   * @param reproducciones Almacena el número de reproducciones de la canción.
   */

  constructor(public nombre: string, public duracion: number, 
              public generos: string[], public single: boolean, 
              public reproducciones: number) {
    this.nombre = nombre;
    this.duracion = duracion;
    this.generos = generos;
    this.single = single;
    this.reproducciones = reproducciones;
  }

  /**
   * 
   * @returns Devuelve el nombre de la canción.
   */
  getNombre() {
    return this.nombre;
  }

  /**
   * 
   * @returns Devuelve la duración de la canción.
   */
  getDuracion() {
    return this.duracion;
  }

  /**
   * 
   * @returns Devuelve los géneros de la canción.
   */
  getGeneros() {
    return this.generos;
  }

  /**
   * 
   * @returns Devuelve si la canción es single o no.
   */
  getSingle() {
    return this.single;
  }

  /**
   * 
   * @returns Devuelve el número de reproducciones de la canción.
   */
  getReproducciones() {
    return this.reproducciones;
  }

}