import { BasicStreamableCollection } from "./basicStreamableCollection";
import { Series } from "./series";

/**
 * Se desarrolla la clase `SeriesCollection` que extiende de la clase `BasicStreamableCollection`.
 * La clase extendida `BasicStreamableCollection` implementa la interfaz `Streamable`, pero cambiando
 * el tipo genérico `T` por `Series`.
 */
export class SeriesCollection extends BasicStreamableCollection<Series> {
  constructor(items: Series[]){
    super(items);
  }

  /**
   * El método `print` devuelve un string con el nombre, año y número de temporadas de cada serie.
   * @returns Devuelve un string con el nombre, año y número de temporadas de cada serie.
   */
  print() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += `${this.items[i].getNombre()}, ${this.items[i].getAño()}, ${this.items[i].getTemporadas()} temporadas. `;
    }
    return str;
  }

  /**
   * S define el método `buscarPorTemporada` que devuelve un array de objetos de tipo `Series`.
   * @param temporada Almacena el número de temporadas de la serie que se quiere buscar.
   * @returns Un array de objetos de tipo `Series` que tengan el número de temporadas indicado.
   */
  buscarPorTemporada(temporada: number): Series[] {
    return this.items.filter((item) => item.getTemporadas() == temporada);
  }  
}