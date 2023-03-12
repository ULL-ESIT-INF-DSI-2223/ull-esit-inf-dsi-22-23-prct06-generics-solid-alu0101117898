import { PrintableCollection } from "./printableCollection";

/**
 * Se implementa una clase `NumericPrintableCollection` que extiende
 *  de la clase `PrintableCollection`. Se crea un constructor que recibe
 * un array de números y se le pasa al constructor de la clase padre.
 */
export class NumericPrintableCollection extends PrintableCollection<number> {
  constructor(private coleccion: number[] = []) {
      super(coleccion); 
  }

/**
 * Se implementa el método `print` que imprime por pantalla el array de números.
 */
  print(): void {
    console.log(this.coleccion.join(", "));
  }
}