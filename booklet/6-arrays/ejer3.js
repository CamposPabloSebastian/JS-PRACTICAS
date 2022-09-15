/*
Declarar una clase Jugador que permita registrar nombre, número de camiseta, edad, y si está lesionado. Luego instanciar al menos cinco (5) objetos usando esta clase, y asociarlos a un array.*/


class Jugador {
    constructor(nombre, numCamiseta, edad, lesio) {
        this.nombre = nombre;
        this.numCamiseta = numCamiseta;
        this.edad = edad;
        this.lesio = lesio;
    }
}
const Jugador1 = new Jugador("pABLO", 1, 12, false);
const Jugador2 = new Jugador("Maria", 2, 12, false);
const Jugador3 = new Jugador("Juan", 3, 12, false);

const equipo = [Jugador1, Jugador2, Jugador3];
// const equipo = [];
// equipo.push(Jugador1);
// equipo.push(Jugador2);
// equipo.push(Jugador3);

console.table(equipo);