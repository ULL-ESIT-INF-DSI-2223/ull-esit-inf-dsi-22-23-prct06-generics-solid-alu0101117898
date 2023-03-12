import "mocha";
import { expect } from "chai";
import { Documental } from "../../src/ejercicio-1/documentales";
import { DocumentalCollection } from "../../src/ejercicio-1/documentalesCollection";

const coleccionDocumentales: DocumentalCollection = new DocumentalCollection([
  new Documental(2010, "The Walking Dead", "Zombies"),
  new Documental(2011, "Breaking Bad", "Drogas"),
]);

describe("DocumentalCollection class tests", () => {
  it('coleccionDocumentales.print() returns The Walking Dead, 2010, Zombies. Breaking Bad, 2011, Drogas.', () => {
    expect(coleccionDocumentales.print()).to.be.eqls('The Walking Dead, 2010, Zombies. Breaking Bad, 2011, Drogas.');
  });

  const theWalkingDead = ([new Documental(2010, "The Walking Dead", "Zombies")]);
  const breakingBad = ([new Documental(2011, "Breaking Bad", "Drogas")]);

  it("coleccionDocumentales.buscarPorNombre('The Walking Dead') returns 'The Walking Dead, 2010, Zombies.'", () => {
    expect(coleccionDocumentales.buscarPorNombre('The Walking Dead')).to.be.eql(theWalkingDead);
  });

  it("coleccionDocumentales.buscarPorAño(2011) returns 'Breaking Bad, 2011, Drogas.'", () => {
    expect(coleccionDocumentales.buscarPorAño(2011)).to.be.eql(breakingBad);
  });

  it("coleccionDocumentales.buscarPorTematica('Zombies') returns 'The Walking Dead, 2010, Zombies.'", () => {
    expect(coleccionDocumentales.buscarPorTipo('Zombies')).to.be.eql(theWalkingDead);
  });
});