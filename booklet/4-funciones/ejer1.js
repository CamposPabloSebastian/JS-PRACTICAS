/*
Codificar tres funciones:
Una función entrada(), la cual solicite un valor al usuario y lo retorne.
Una función procesamiento(valor), donde se transforme la entrada.
Una función salida(valor), la cual mostrará el resultado por alerta.
    Luego, invocar las tres funciones
*/


function entrada() {
    return prompt("INgrese su nombre");
}

function procesamiento(valor) {
    return `Bienvenido ${valor}`
}

function salida(valor) {
    alert(valor);
}

salida(procesamiento(entrada()));