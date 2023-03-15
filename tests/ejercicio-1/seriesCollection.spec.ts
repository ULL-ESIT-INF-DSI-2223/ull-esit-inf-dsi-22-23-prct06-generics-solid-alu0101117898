/*import "mocha";
import { expect } from "chai";
import { Series } from "../../src/ejercicio-1/series";
import { SeriesCollection } from "../../src/ejercicio-1/seriesCollection";

const coleccionSeries: SeriesCollection = new SeriesCollection([
  new Series(2010, "The Walking Dead", 11),
  new Series(2011, "Breaking Bad", 5),
]);


describe("SeriesCollection class tests", () => {
  it("collection.print() returns 'The Walking Dead, 2010, 11 temporadas. Breaking Bad, 2011, 5 temporadas.'", () => {
    expect(coleccionSeries.print()).to.be.eqls('The Walking Dead, 2010, 11 temporadas. Breaking Bad, 2011, 5 temporadas.');
  });

  const theWalkingDead = ([new Series(2010, "The Walking Dead", 11)]); 
  const breakingBad = ([new Series(2011, "Breaking Bad", 5)]);

  it("collection.buscarPorNombre('The Walking Dead') returns 'The Walking Dead, 2010, 11 temporadas.'", () => {
    expect(coleccionSeries.buscarPorNombre('The Walking Dead')).to.be.eql(theWalkingDead);
  });

  it("collection.buscarPorAño(2011) returns 'Breaking Bad, 2011, 5 temporadas.'", () => {
    expect(coleccionSeries.buscarPorAño(2011)).to.be.eql(breakingBad);
  });
  it("collection.buscarPorTemporada(5) returns 'Breaking Bad, 2011, 5 temporadas.'", () => {
    expect(coleccionSeries.buscarPorTemporada(5)).to.be.eql(breakingBad);
  });
});*/