/*
Codificar una función con la siguiente cabecera: filtroJugadores(equipo, edad). En ella, se recibe un array de jugadores (objetos instanciados empleando la clase de la actividad 3), y una edad. La función retorna los jugadores cuya edad coincide con el segundo parámetro.
Realizar al menos cinco (5) filtros solicitando la edad al usuario, e informar sobre el resultado de los jugadores filtrados.
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
const Jugador2 = new Jugador("Maria", 2, 11, false);
const Jugador3 = new Jugador("Juan", 3, 12, false);

const equipo = [Jugador1, Jugador2, Jugador3];

function filtroJugadores(equipo, edad) {
    return equipo.filter(obj => obj.edad == edad);
}

console.log(filtroJugadores(equipo, 12));