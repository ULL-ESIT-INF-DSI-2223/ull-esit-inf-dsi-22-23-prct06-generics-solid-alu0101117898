import "mocha";
import { expect } from "chai";
import { Pelicula } from "../../src/ejercicio-1/peliculas";
import { PeliculasCollection } from "../../src/ejercicio-1/peliculasCollection";

const coleccionPeliculas: PeliculasCollection = new PeliculasCollection([
  new Pelicula(1972, "El Padrino", 177 ),
  new Pelicula(2009, "Avatar", 162 ),
]);

describe("PeliculasCollection class tests", () => {

  it("PeliculasCollection.print() returns 'El Padrino, 1972, 177 minutes. Avatar, 2009, 162 minutes.'", () => {
    expect(coleccionPeliculas.print()).to.be.equal('El Padrino, 1972, 177 minutes. Avatar, 2009, 162 minutes.');
  });

  const elPadrino = ([new Pelicula(1972, "El Padrino", 177 )]);
  const avatar = ([new Pelicula(2009, "Avatar", 162 )]);

  it("PeliculasCollection.buscarPorNombre('El Padrino') returns 'El Padrino, 1972, 177 minutes.'", () => {
    expect(coleccionPeliculas.buscarPorNombre('El Padrino')).to.be.eql(elPadrino);
  });
  it("PeliculasCollection.buscarPorAño(2009) returns 'Avatar, 2009, 162 minutes.'", () => {
    expect(coleccionPeliculas.buscarPorAño(2009)).to.be.eql(avatar);
  });
  it("PeliculasCollection.buscarPorDuracion(162) returns 'Avatar, 2009, 162 minutes.'", () => {
    expect(coleccionPeliculas.buscarPorDuracion(162)).to.be.eql(avatar);
  });
});