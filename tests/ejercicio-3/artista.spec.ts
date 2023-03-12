
import 'mocha';
import {expect} from 'chai';
import {Artista} from '../../src/ejercicio-3/artista'
import { Disco } from '../../src/ejercicio-3/disco';
import { Cancion } from '../../src/ejercicio-3/cancion';
import { Single } from '../../src/ejercicio-3/single';
import { Discografia } from '../../src/ejercicio-3/discografia';


const cancion1 = new Cancion("cancion1", 120, ["genero2"], false, 500);
const cancion2 = new Cancion("cancion2", 120, ["genero1"], false, 500);
const cancion3 = new Cancion("cancion3v1", 120, ["genero2"], false, 60);
const cancion4 = new Cancion("cancion3v2", 120, ["genero2"], true, 60);

const single1 = new Single("single1", 2023, [cancion3, cancion4]);
const Disco1 = new Disco("disco1", 2010, [cancion1, cancion2]);

const discografia1 = new Discografia([Disco1, single1]);
const artista1 = new Artista("Artista1", 1000000, discografia1);

describe('Class Artista check', () => {

  it("artista1.getNombre() returns 'Artista1' ", () => {
    expect(artista1.getNombre()).to.be.eql("Artista1");
  });
  it("artista1.getOyentes() returns  1000000", () => {
    expect(artista1.getOyentes()).to.be.eql(1000000);
  });
  it("artista1.getDiscografia() returns discografia1", () => {
    expect(artista1.getDiscografia()).to.be.eql(discografia1);
  });
});