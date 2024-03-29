/*import 'mocha';
import {expect} from 'chai';
import {BibliotecaMusical_} from '../../src/ejercicio-3/bibliotecaMusical';
import {Artista} from '../../src/ejercicio-3/artista';
import {Cancion} from '../../src/ejercicio-3/cancion';
import {Disco} from '../../src/ejercicio-3/disco';
import { Single } from '../../src/ejercicio-3/single';
import { Discografia } from '../../src/ejercicio-3/discografia';

const cancion1 = new Cancion("cancion1", 120, ["genero2"], false, 500);
const cancion2 = new Cancion("cancion2", 120, ["genero1"], false, 500);
const cancion3 = new Cancion("cancion3", 120, ["genero2"], false, 60);
const cancion4 = new Cancion("cancion4", 120, ["genero2"], true, 60);


const Disco1 = new Disco("disco1", 2010, [cancion1, cancion2]);
const Disco2 = new Disco("disco2", 2020, []);
const Disco3 = new Disco("disco3", 2022, [cancion3, cancion4]);


const single1 = new Single("single1", 2023, [cancion3, cancion4]);

const discografia1 = new Discografia([Disco1, single1, Disco2, Disco3]);
const discografia2 = new Discografia([single1]);
const discografia3 = new Discografia([Disco1, Disco3]);

const Artista1 = new Artista("artista1", 200, discografia1);
const Artista2 = new Artista("artista2", 300, discografia2);
const Artista3 = new Artista("artista3", 300, discografia3);

describe('Biblioteca Musical', () => {
  const biblioteca1 = new BibliotecaMusical_;

  it("Funcionalidad para añadir Artista1 y Artista2 ", () => {
    biblioteca1.almacenarArtista(Artista1);
    expect(biblioteca1.artistas).to.be.eql([Artista1]);
    biblioteca1.almacenarArtista(Artista2);
    expect(biblioteca1.artistas).to.be.eql([Artista1, Artista2]);
  });

  it("Búsqueda de Artista1 debería devolver 'artista1'", () => {
    expect(biblioteca1.buscarArtista(Artista1)).to.be.eql("artista1");
  });

  it("Búsqueda de Artista3 debería devolver undefined, porque el artista no está en la biblioteca", () => {
    expect(biblioteca1.buscarArtista(Artista3)).to.be.eql(undefined);
  });

  it("Búsqueda de Disco1 debería devolver 'disco1'", () => {
    expect(biblioteca1.buscarDisco(Disco1)).to.be.eql("disco1");
  });

  it("Búsqueda de Disco nuevo debería devolver undefined", () => {
    expect(biblioteca1.buscarDisco(new Disco("disco nuevo", 1990, [cancion1]))).to.be.eql(undefined);
  });

   it("Búsqueda de Canción1 debería devolver 'cancion1'", () => {
    expect(biblioteca1.buscarCancion(cancion1)).to.be.eql("cancion1");
  });

  it("Búsqueda de una canción nueva debería devolver undefined", () => {
    expect(biblioteca1.buscarCancion(new Cancion("cancion5", 120, ["genero3"], true, 60))).to.be.eql(undefined);
  });

  it("Conteo de canciones incluídas en el Disco1, debería retornar 2", () => {
    expect(biblioteca1.numeroCanciones(Disco1)).to.be.eql(2);
  });

  it("Conteo de canciones incluídas en el Disco2, debería retornar 0 porque no tiene canciones", () => {
    expect(biblioteca1.numeroCanciones(Disco2)).to.be.eql(0);
  });

  it("Conteo de canciones incluídas en un disco nuevo, debería retornar undefined.", () => {
    expect(biblioteca1.numeroCanciones(new Disco("disco nuevo", 1990, [cancion1]))).to.be.eql(undefined);
  });

  it("Cálculo de la duración del disco1 debería devolver 240", () => {
    expect(biblioteca1.duracionDisco(Disco1)).to.be.eql(240);
  });

  it("Cálculo de la duración del disco2 debería devolver 0, porque no tiene canciones", () => {
    expect(biblioteca1.duracionDisco(Disco2)).to.be.eql(0);
  });

  it("Cálculo de la duración de un disco nuevo debería devolver undefined.", () => {
    expect(biblioteca1.duracionDisco(new Disco("disco nuevo", 1990, [cancion1]))).to.be.eql(undefined);
  });

  it("Cálculo del número de reproducciones del Disco3 debería devolver 120", () => {
    expect(biblioteca1.numeroReproducciones(Disco3)).to.be.eql(120);
  });

  it("Cálculo del número de reproducciones del Disco2 debería devolver 0", () => {
    expect(biblioteca1.numeroReproducciones(Disco2)).to.be.eql(0);
  });

  it("Cálculo del número de reproducciones de un disco nuevo debería devolver undefined.", () => {
    expect(biblioteca1.numeroReproducciones(new Disco("disco nuevo", 1990, [cancion1]))).to.be.eql(undefined);
  });

});*/