import { Lista } from "./lista";

/**
 * Se declara una interfaz `DeclaracionLista` que extiende de la clase `Lista`.
 * Esta interfaz contiene los métodos que se van a implementar en la clase `Lista`.
 */
export interface DeclaracionLista<T> {

  append(lista: Lista<T>): Lista<T>;
  concatenate(...lista: Lista<T>[]): Lista<T>;
  filter(lista): Lista<T>;
  length(): number;
  map(lista): Lista<T>;
  reduce(valor, acc, lista);
  reverse(): Lista<T>;
  forEach(lista);

}