/**
 * Se define la clase `Documental` que contiene los atributos `año`, `nombre` y `tipo`.
 */
export class Documental {
  
  /**
   * El constructor de la clase `Documental` define los atributos `año`, `nombre` y `tipo`.
   * @param año Año de estreno del documental.
   * @param nombre Nombre del documental.
   * @param tipo Temática del documental.
   */
  constructor(protected año: number,
              protected nombre: string, 
              protected tipo: string){
    this.año = año;
    this.nombre = nombre;
    this.tipo = tipo;
  }

  /**
   * Metodo `getNombre` que devuelve el nombre del documental.
   * @returns Devuelve el nombre del documental.
   */
  getNombre(): string {
    return this.nombre;
  }

  /**
   * Método `getAño` que devuelve el año de estreno del documental.
   * @returns Devuelve el año de estreno del documental.
   */
  getAño(): number {
    return this.año;
  }

  /**
   * Método `getTipo` que devuelve el tipo de documental.
   * @returns Devuelve el tipo de documental.
   */
  getTipo(): string {
    return this.tipo;
  }
}