/*
Declarar un array de cadenas, compuesto por  los cuatro (4) nombres pertenecientes a los integrantes de un equipo. Luego recorrer el array, e informar por alerta el nombre de cada jugador, así como la posición  que ocupa en la colección.*/

const cadena = ["Pablo", "Maria", "Juan", "Miriam"];

for (let i = 0; i < cadena.length; i++) {
    alert(`${i} ${cadena[i]}`);
}