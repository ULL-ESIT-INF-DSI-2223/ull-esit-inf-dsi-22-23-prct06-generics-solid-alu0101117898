import { DeclaracionLista } from "./objetoLista";
/**
 * La clase `Lista` implementa la interfaz `DeclaracionLista`.
 * @param lista Almacena un array de objetos de tipo `T`, por lo
 * que se puede utilizar con cualquier tipo de dato.
 */
export class Lista<T> implements DeclaracionLista<T> {
  /**
   * El constructor de la clase `Lista` recibe un array de objetos de tipo `T`.
   * @param lista Almacena un array de objetos de tipo `T`, por lo
   * que se puede utilizar con cualquier tipo de dato.
   */
  constructor(private lista: T[]) {}

  /**
   * El metodo `append` añade al final de la lista los elementos
   * de la lista que se pasa como parámetro.
   * @param lista Almacena la lista que se quiere añadir.
   * @returns La combinación de las dos listas.
   */
  append(lista: Lista<T>) {
    for (let i = 0; i < lista.length(); i++) {
      this.lista[this.length()] = lista.lista[i];
    }
    return this;
  }

  /**
   * El método `concatenate` combina una lista con otra o más listas.
   * @param lista Almacena las listas que se quieren combinar.
   * @returns Una lista con los elementos de las listas pasadas como parámetro.
   */
  concatenate(...lista: Lista<T>[]) {
    for (let i = 0; i < lista.length; i++) {
      this.append(lista[i]);
    }
    return this;
  }

  /**
   * El método `filter` devuelve una lista con los elementos que cumplen
   * el predicado que se pasa como parámetro.
   * @param lista Almacena el predicado que se quiere comprobar.
   * @returns Una lista con los elementos que cumplen el predicado.
   */
  filter(lista) {
    const filteredList = new Lista([]);
    let j = 0;
    for (let i = 0; i < this.length(); i++) {
      if (lista(this.lista[i])) {
        filteredList.lista[j] = this.lista[i];
        j++;
      }
    }
    return filteredList;
  }

  /**
   * El metodo `length` devuelve la longitud de la lista.
   * @returns La longitud de la lista.
   */
  length() {
    let i = 0;
    let result = 1;
    while (this.lista[i + 1] != undefined) {
      result++;
      i++;
    }
    return result;
  }

  /**
   * El método `map` devuelve una lista con los elementos que se obtienen
   * de aplicar la función que se pasa como parámetro a cada uno de los elementos de la lista.
   * @param lista Almacena la función que se quiere aplicar a 
   * cada elemento de la lista.
   * @returns Una lista con los elementos que se obtienen de aplicar la función.
   */
  map(lista) {
    for (let i = 0; i < this.length(); i++) {
      this.lista[i] = lista(this.lista[i]);
    }
    return this;
  }

  /**
   * El método `reduce` devuelve un valor que es el resultado de aplicar
   * una función a cada uno de los elementos de la lista.
   * @param valor Almacena el valor inicial.
   * @param acc Almacena el valor acumulado.
   * @param lista Almacena la función que se quiere aplicar a cada elemento 
   * de la lista.
   * @returns Una lista con los elementos que se obtienen de aplicar la función.
   */
  reduce(valor, acc, lista) {
    acc = valor;
    for (let i = 0; i < this.length(); i++) {
      acc = lista(acc, this.lista[i]);
    }
    return acc;
  }

  /**
   * El método `reverse` devuelve una lista con los elementos de la lista
   * original en orden inverso.
   * @returns La lista invertida.
   */
  reverse() {
    const reversedList = new Lista([]);
    let j = 0;
    for(let i = 1; i <= this.length(); i++) {
      reversedList.lista[j] = this.lista[this.length()- i];
      j++;
    }
    return reversedList;
  }

  /**
   * El método `forEach` ejecuta la función que se pasa como parámetro
   * sobre cada uno de los elementos de la lista.
   * @param lista Almacena la función que se quiere aplicar a cada elemento
   * de la lista. 
   * @returns La lista con los elementos que se obtienen de aplicar la función.
   */
  forEach(lista) {
    for(let i = 0; i < this.length(); i++) {
      lista(this.lista[i]);
    }
    return true;
  }
}