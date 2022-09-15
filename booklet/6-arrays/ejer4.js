/*
Codificar una función con la siguiente cabecera: buscarJugador(equipo, jugador). En ella, se recibe por parámetro un array de jugadores (objetos instanciados empleando la clase de la actividad 3), y el nombre de un jugador. La función retorna el jugador que coincide con el nombre.
Realizar al menos tres (3) búsquedas solicitando el nombre al usuario, e informar sobre el resultado de cada búsqueda.
*/
class Jugador {
    constructor(nombre, numCamiseta, edad, lesio) {
        this.nombre = nombre;
        this.numCamiseta = numCamiseta;
        this.edad = edad;
        this.lesio = lesio;
    }
}
const Jugador1 = new Jugador("Pablo", 1, 12, false);
const Jugador2 = new Jugador("Maria", 2, 12, false);
const Jugador3 = new Jugador("Juan", 3, 12, false);

const equipo = [Jugador1, Jugador2, Jugador3];

function buscarJugador(equipo, jugador) {
    for (let i = 0; i < equipo.length; i++) {
        if (equipo[i].nombre == jugador) {
            return jugador + " es titular";
        }
        else { "no esta en el equipo" };
    }
}

function buscarJugador2(equipo, jugador) {
    return equipo.find(obj => obj.nombre == jugador.nombre);
}

console.log(buscarJugador(equipo, "Pablo"));
console.log(buscarJugador2(equipo, Jugador2));