import { Artista } from "./artista"
import { Disco } from "./disco"
import {Cancion} from "./cancion"

/**
 * Se declara la clase BibliotecaMusical, que tiene como atributos
 * `artistas`.
 */
export class BibliotecaMusical_ {
  artistas: Artista[] = [];

  /**
   * Se declara el constructor de la clase BibliotecaMusical, que
   * recibe como parámetro `artistas`.
   */
  almacenarArtista(artista: Artista): void {
    this.artistas.push(artista);
  }

  /**
   * Se declara el método `imprimirInformacion`, que imprime por
   * consola la información de los artistas a través de la función
   * `console.table`.
   */
  imprimirInformacion(): void {
    console.table(this.artistas);
  }

  /**
   * Se declara el método `buscarArtista`, que recibe como parámetro
   * `entradaArtista` y devuelve el nombre del artista si se encuentra
   * en la biblioteca.
   */
  buscarArtista(entradaArtista: Artista) {
    let flag = false;
    let nombreArtista = "";
    this.artistas.forEach((artista) => {
      if (artista.nombre == entradaArtista.nombre) {
        console.table(artista);
        flag = true;
        nombreArtista = artista.nombre;
      }
    });
    if (flag !== false) {
      return nombreArtista;
    } else {
      return undefined;
    }
  }

  /**
   * El método `buscarDisco` recibe como parámetro `entradaDisco` y
   * devuelve el nombre del disco si se encuentra en la biblioteca.
   * @param entradaDisco Almacena el disco que se va a buscar.
   * @returns El nombre del disco si se encuentra en la biblioteca.
   */
  buscarDisco(entradaDisco: Disco) {
    let disc = "";
    let flag = false;
    this.artistas.forEach((artista) => {
      artista.discografia.getDiscografia().forEach((disco) => {
        if (entradaDisco.nombre == disco.nombre) {
          disc = disco.nombre;
          flag = true;
          console.table(disco);
        }
      });
    });
    if (flag !== false) {
      return disc;
    } else {
      return undefined;
    }
  }

  /**
   * El método `buscarCancion` recibe como parámetro `entradaCancion` y
   * devuelve el nombre de la canción si se encuentra en la biblioteca.
   * @param entradaCancion Almacena la canción que se va a buscar.
   * @returns En el caso de que la canción se encuentre en la biblioteca,
   * devuelve el nombre de la canción.
   * En el caso de que la canción no se encuentre en la biblioteca,
   * devuelve undefined.
   */
  buscarCancion(entradaCancion: Cancion) {
    let flag = false;
    let cancion = "";
    this.artistas.forEach((artista) => {
      artista.discografia.getDiscografia().forEach((disco) => {
        disco.getCanciones().forEach((nombreCancion) => {
          if (entradaCancion.nombre == nombreCancion.nombre) {
            console.table(nombreCancion);
            flag = true;
            cancion = nombreCancion.nombre;
          }
        });
      });
    });
    if (flag !== false) {
      return cancion;
    } else {
      return undefined;
    }
  }

  /**
   * El método `numeroCanciones` recibe como parámetro `disco` y devuelve
   * el número de canciones que tiene el disco.
   * @param disco Almacena el disco del que se quiere saber el número de canciones.
   * @returns El número de canciones que tiene el disco.
   */
  numeroCanciones(disco: Disco): number | undefined{
    let flag = false;
    let canciones = 0;
    this.artistas.forEach((artista) => { 
      artista.discografia.getDiscografia().forEach((discoElement) =>{
        if(discoElement.nombre == disco.nombre) {
          flag = true;
          canciones = discoElement.getCanciones().length;
        }
      });
    });
    if(flag === false) {
      return undefined;
    } else {
      return canciones;
    }
  }

  /**
   * El método `duracionDisco` recibe como parámetro `disco` y devuelve
   * la duración total del disco.
   * @param disco Almacena el disco del que se quiere saber la duración.
   * @returns La duración total del disco.
   */
  duracionDisco(disco: Disco): number | undefined{
    let flag = false;
    let duracion = 0;
    this.artistas.forEach((artista) => { 
      artista.discografia.getDiscografia().forEach((discoElement) =>{
        if(discoElement.nombre == disco.nombre) {
          flag = true;
          discoElement.getCanciones().forEach((nombreCancion) => {
            duracion += nombreCancion.duracion;
          });
        }
      });
    });
    if(flag === false) {
      return undefined;
    } else {
      return duracion;
    }
  }

  /**
   * El método `numeroReproducciones` recibe como parámetro `disco` y devuelve
   * el número de reproducciones totales del disco.
   * @param disco Almacena el disco del que se quiere saber el número de reproducciones.
   * @returns El número de reproducciones totales del disco.
   */
  numeroReproducciones(disco: Disco): number | undefined {
    let flag = false;
    let reproduccionesTotales = 0;
    this.artistas.forEach((artista) => { 
      artista.discografia.getDiscografia().forEach((discoElement) =>{
        if(discoElement.nombre == disco.nombre) {
          flag = true;
          discoElement.getCanciones().forEach((nombreCancion) =>{
            reproduccionesTotales += nombreCancion.reproducciones;
          })
        }
      });
    });
    if(flag == false) {
      return undefined;
    } else {
      return reproduccionesTotales;
    }
  }
}