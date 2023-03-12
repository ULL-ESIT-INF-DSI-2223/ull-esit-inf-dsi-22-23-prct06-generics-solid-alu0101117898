import "mocha";
import { expect } from "chai";
import { NumericPrintableCollection } from "../../src/ejercicio-PE103/numericPrintableCollection";

const coleccionNumeros: NumericPrintableCollection = new NumericPrintableCollection([1, 2, 3, 4, 5]);
const coleccionNumeros2: NumericPrintableCollection = new NumericPrintableCollection([6, 7, 8, 9, 10]);

describe("NumericPrintableCollection class tests", () => {
  it("NumericPrintableCollection returns '1, 2, 3, 4, 5'", () => {
    expect(coleccionNumeros.print()).to.be.eqls([1, 2, 3, 4, 5]);
  });
  it("NumericPrintableCollection returns '6, 7, 8, 9, 10'", () => {
    expect(coleccionNumeros2.print()).to.be.eqls([6, 7, 8, 9, 10]);
  });
});

