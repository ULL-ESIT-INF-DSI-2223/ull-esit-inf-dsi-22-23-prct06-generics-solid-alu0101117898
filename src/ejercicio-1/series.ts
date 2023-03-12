
/**
 * Se define la clase `Series` que contiene los atributos `año`, `nombre` y `temporadas`.
 */
export class Series {

  /**
   * El constructor de la clase `Series` define los atributos `año`, `nombre` y `temporadas`.
   */
  constructor(protected año: number, 
              protected nombre: string, 
              protected temporadas: number){    
    this.año = año;
    this.nombre = nombre;
    this.temporadas = temporadas;
  }

  /**
   * Método `getNombre` que devuelve el nombre de la serie.
   * @returns Devuelve el nombre de la serie.
   */
  getNombre(): string {
    return this.nombre;
  } 

  /**
   * Método `getAño` que devuelve el año de estreno de la serie.
   * @returns Devuelve el año de estreno de la serie.
   */
  getAño(): number {
    return this.año;
  } 

  /**
   * Metodo `getTemporadas` que devuelve el número de temporadas de la serie.
   * @returns Devuelve el número de temporadas de la serie.
   */
  getTemporadas(): number {
    return this.temporadas;
  }  
}