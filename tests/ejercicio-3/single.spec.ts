import 'mocha';
import {expect} from 'chai';
import { Cancion } from '../../src/ejercicio-3/cancion';
import {Single} from '../../src/ejercicio-3/single'

const cancion1 = new Cancion("Cancion1", 180, ["pop"], true, 10000);
const version2 = new Cancion("Version2", 185, ["pop"], true, 5000);
const single1 = new Single("Single1", 1991,[cancion1, version2]);

describe('Class Single check', () => {
  it("single1.getNombre() returns 'Single1' ", () => {
    expect(single1.getNombre()).to.be.eql("Single1");
  });

  it("single1.getAño() returns 1991", () => {
    expect(single1.getAño()).to.be.eql(1991);
  });

  it("single1.getCanciones() returns both songs", () => {
    expect(single1.getCanciones()).to.be.eql([cancion1, version2]);
  });
});