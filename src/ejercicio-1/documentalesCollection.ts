import { BasicStreamableCollection } from "./basicStreamableCollection";
import { Documental } from "./documentales";

/**
 * Se desarrolla la clase `DocumentalCollection` que extiende de la clase `BasicStreamableCollection`.
 * La clase extendida `BasicStreamableCollection` implementa la interfaz `Streamable`, pero cambiando
 * el tipo genérico `T` por `Documental`.
 */
export class DocumentalCollection extends BasicStreamableCollection<Documental> {
  
  /**
   * Constructor de la clase `DocumentalCollection`.
   * @param items Se declara el array de objetos de tipo `Documental`.
   */
  constructor(items: Documental[]){
    super(items);
  }

  /**
   * Metodo `print` que devuelve un string con los atributos de los objetos de tipo `Documental`.
   * @returns Devuelve un string con los atributos de los objetos de tipo `Documental`.
   */
  print() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += `${this.items[i].getNombre()}, ${this.items[i].getAño()}, ${this.items[i].getTipo()}. `
    }
    return str;
  }

  /**
   * Metodo `buscarPorTipo` que devuelve un array de objetos de tipo 
   * `Documental` que coincidan con el tipo.
   * de documental pasado por parámetro.
   * @param tipo Almacena el tipo de documental que se quiere buscar.
   * @returns El array de objetos de tipo `Documental` que coincidan con 
   * el tipo de documental pasado por parámetro.
   */
  buscarPorTipo(tipo: string): Documental[] {
    return this.items.filter((item) => item.getTipo() == tipo);
  }  
}