import 'mocha';
import {expect} from 'chai';
import { Cancion } from '../../src/ejercicio-3/cancion';

const cancion1 = new Cancion("La vida misma", 240, ["pop"], false, 10000);

describe('Class Cancion check', () => {
  it("cancion1.getNombre() returns 'La vida misma' ", () => {
    expect(cancion1.getNombre()).to.be.eql("La vida misma");
  });

  it("cancion1.getDuracion() returns 240 ", () => {
    expect(cancion1.getDuracion()).to.be.eql(240);
  });

  it("cancion1.getGeneros() returns 'pop' ", () => {
    expect(cancion1.getGeneros()).to.be.eql(["pop"]);
  });

  it("cancion1.single returns false ", () => {
    expect(cancion1.single).to.be.eql(false);
  });
  it("cancion1.getReproducciones() returns 10000 ", () => {
    expect(cancion1.getReproducciones()).to.be.eql(10000);
  });
});