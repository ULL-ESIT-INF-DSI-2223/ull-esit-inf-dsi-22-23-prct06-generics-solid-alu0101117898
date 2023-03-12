import 'mocha';
import {expect} from 'chai';
import {Discografia} from '../../src/ejercicio-3/discografia'
import { Cancion } from '../../src/ejercicio-3/cancion';
import { Disco } from '../../src/ejercicio-3/disco';
import { Single } from '../../src/ejercicio-3/single';

const cancion1 = new Cancion("cancion1", 120, ["genero2"], false, 500);
const cancion2 = new Cancion("cancion2", 120, ["genero1"], false, 500);
const cancion3 = new Cancion("cancion3v1", 120, ["genero2"], false, 60);
const cancion4 = new Cancion("cancion3v2", 120, ["genero2"], true, 60);

const single1 = new Single("single1", 2023, [cancion3, cancion4]);
const Disco1 = new Disco("disco1", 2010, [cancion1, cancion2]);


const discografia1 = new Discografia([Disco1, single1]);
const discografia2 = new Discografia([single1]);
const discografia3 = new Discografia([Disco1]);

describe('Getter de una discografía', () => {

  it("Getter de la discografía con un single y un disco", () => {
    expect(discografia1.getDiscografia()).to.be.eql([Disco1, single1]);
  });

  it("Getter de la discografía con un single ", () => {
    expect(discografia2.getDiscografia()).to.be.eql([single1]);
  });

  it("Getter de la discografía con un disco ", () => {
    expect(discografia3.getDiscografia()).to.be.eql([Disco1]);
  });
});