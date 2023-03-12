import { PrintableCollection } from "./printableCollection";

/**
 * Se implementa una clase `StringPrintableCollection` que extiende
 *  de la clase `PrintableCollection`. Se crea un constructor que recibe
 * un array de números y se le pasa al constructor de la clase padre.
 */
export class StringPrintableCollection extends PrintableCollection<string> {
  constructor(private coleccion: string[] = []) {
      super(coleccion); 
  }

/**
 * Se implementa el método `print` que imprime por pantalla el array de cadenas.
 */
  print(): void {
    console.log(this.coleccion.join(", "));
  }
}