/*
Declarar un array vacío, y cargarlo de forma dinámica solicitando al usuario nombres de forma consecutiva,  hasta que se ingrese “ESC”. Luego recorrer el array, e informar por alerta el nombre de cada jugador, así como la posición  que ocupa en la colección.*/

const vacio = [];

let carga = prompt("ingrese dato o esc para salir");

while (carga != "esc") {
    vacio.push(carga);
    console.log(carga)
    carga = prompt("ingrese dato o esc para salir");
}
console.log("vacio tiene " + vacio.length);
console.table(vacio);

// for (let i = 0; i < vacio.length; i++) {
//     console.log(vacio[i]);
// }