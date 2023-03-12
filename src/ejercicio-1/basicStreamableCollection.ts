import { Streamable } from "./streamable";
import { Pelicula } from "./peliculas";
import { Series } from "./series";
import { Documental } from "./documentales";
/**
 * La clase abstracta `BasicStreamableCollection` implementa la interfaz Streamable
 * y contiene un atributo `items`, que es un array de objetos de tipo `T`. `T` pueden
 * ser tanto objetos de tipo `pelicula`, `serie` o `documental`.
 */
export abstract class BasicStreamableCollection<T extends Pelicula | Series | Documental > implements Streamable<T> {

  /**
   * Constructor de la clase genérica `BasicStreamableCollection`.
   * @param items Se declara el array de objetos de tipo `T`.
   */
  constructor(protected items: T[]) {
  }

  buscarPorNombre(nombre: string): T[] {
    return this.items.filter((item) => item.getNombre() == nombre);
  }

  buscarPorAño(año: number): T[] { 
    return this.items.filter((item) => item.getAño() == año);
  }
  abstract print(): string;
}
