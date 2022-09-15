/*
Codificar una función con la siguiente cabecera: validacion(cadena). En ella, se retorna un valor booleano, el cual es true si el parámetro no es un cadena vacía. Caso contrario, se retorna false. Luego invocar la función de forma iterativa, hasta que el usuario tipee “ESC”, solicitando en cada ciclo una cadena a validar.
*/

function validacion(cadena) {
    return cadena !== "" ? true : false;
}

let valor = prompt("ingrese cadena de texto o esc para salir");
while (valor != "esc") {
    console.log(validacion(valor));
    valor = prompt("ingrese cadena de texto o esc para salir");
}