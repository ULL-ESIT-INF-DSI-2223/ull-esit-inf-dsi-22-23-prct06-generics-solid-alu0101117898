import { BasicStreamableCollection } from "./basicStreamableCollection";
import { Pelicula } from "./peliculas";

/**
 * Se desarrolla la clase `PeliculasCollection` que extiende de la clase `BasicStreamableCollection`.
 * La clase extendida `BasicStreamableCollection` implementa la interfaz `Streamable`, pero cambiando 
 * el tipo genérico `T` por `Pelicula`.
 */
export class PeliculasCollection extends BasicStreamableCollection<Pelicula> {
  /**
   * Constructor de la clase `PeliculasCollection`.
   * @param items Se declara el array de objetos de tipo `Pelicula`.
   */
  constructor(items: Pelicula[]){
    super(items);
  }

  /**
   * El método `print` devuelve un string con el nombre, año y duración de cada película.	
   * @returns Devuelve un string con el nombre, año y duración de cada película.
   */
  print() {
    let str = '';
    for (let i = 0; i < this.items.length; i++) {
      str += `${this.items[i].getNombre()}, ${this.items[i].getAño()}, ${this.items[i].getDuracion()} minutos. `;
    }
    return str;
  }

  /**
   * EL método `buscarPorDuracion` devuelve un array de objetos de tipo `Pelicula`.
   * @param tiempo Almacena la duración de la película que se quiere buscar.
   * @returns Un array de objetos de tipo `Pelicula` que duren el tiempo indicado.
   * Se llama al método `getDuracion` de la clase `Pelicula` para obtener la duración de cada película.
   */
  buscarPorDuracion(tiempo: number): Pelicula[] {
    return this.items.filter((item) => item.getDuracion() == tiempo);
  }  
}

const coleccionPeliculas: PeliculasCollection = new PeliculasCollection([
  new Pelicula(1972, "El Padrino", 177 ),
  new Pelicula(2009, "Avatar", 162 ),
]);

console.log(coleccionPeliculas.print());