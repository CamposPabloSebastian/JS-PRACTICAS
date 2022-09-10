/*
Aplicacion que calcula el interes de un producto si es comprado en cuotas

+ 12 cuotas 10% interes
+ 24 cuotas 15% interes
+ 36 cuotas 20% interes
+ 48 cuotas 25% interes
+ 60 cuotas 30% interes
*/

// Constantes de descuentos
const INTERES_1 = 10, INTERES_2 = 15, INTERES_3 = 20, INTERES_4 = 25, INTERES_5 = 30;

/**
 * 
 * @returns Funcion que retorna un estrin con un mensaje de las opciones de plazos para pagar.
 */
function mensajePlazo() {
    return "1- 12 Cuotas (10% interes)\n2- 24 Cuotas(15 % interes)\n3- 36 Cuotas (20% interes)\n4- 48 Cuotas (25% interes)\n5- 60 Cuotas (30% interes)";
}

/**
 * Funcion que valida si un valor ingresado es numerico y si no lo es lo pide 2 veces mas. 
 * @param {*} valor valor a validar
 * @returns un numero o false si no es numero
 */
function validarNumero(valor) {
    let intentos = 0;

    while (isNaN(valor) && intentos <= 1) {
        valor = prompt("ingrese nuevo valor");
        intentos++;
        if (!isNaN(valor)) {
            return Number(valor);
        }
        if (intentos == 2) {
            return false;
        }
    }
    return Number(valor);
}

/**
 * Funcion que valida  si un numero esta dentro de un rango
 * @param {} min opcion minima del menu
 * @param {*} max opcion maxima del menu
 * @param {*} opcion valor seleccionado
 * @returns 
 */
function validarRango(min, max, opcion) {
    return opcion >= min && opcion <= max ? true : false;
}

/**
 * Funcion que valida si un valor ingresado es numerico dentro de un rango de un menu de opciones y si no lo es lo pide 2 veces mas. 
 * @param {*} valor valor a validar
 * @returns un numero o false si no es numero
 */
function validarNumeroEnRango(valor) {
    let intentos = 0;

    while (isNaN(valor) && intentos <= 1) {
        valor = prompt("ingrese nuevo valor");
        intentos++;
        if (!isNaN(valor)) {
            if (validarRango(1, 5, valor)) {
                break;
            } else {
                alert("Opcion no valida.");
            }
        }
        if (intentos == 2) {
            return false;
        }
    }

    switch (valor) {
        case '1':
            return 12;
        case '2':
            return 24;
        case '3':
            return 36;
        case '4':
            return 48;
        case '5':
            return 60;
    }
}


let continuar = prompt("Bienvenido a la calculadora de intereses\nPresione cualquier tecla para continuar o nter para salir!");

let totalFinalProducto;
let mensajeFinal = "";

while (continuar != "") {
    let price = validarNumero(prompt("Ingrese precio del producto"));
    let months = validarNumeroEnRango(prompt(`Seleccione plazo:\n${mensajePlazo()}`));

    switch (months) {
        case 12:
            totalFinalProducto = price + (price * INTERES_1 / 100);
            break;
        case 24:
            totalFinalProducto = price + (price * INTERES_2 / 100);
            break;
        case 36:
            totalFinalProducto = price + (price * INTERES_3 / 100);
            break;
        case 48:
            totalFinalProducto = price + (price * INTERES_4 / 100);
            break
        case 60:
            totalFinalProducto = price + (price * INTERES_5 / 100);
            break;
    }
    let mensaje = `** Precio inicial €${price}\nEl precio total es de €${totalFinalProducto}.-\nEn ${months} cuotas de ${totalFinalProducto / months}`;

    alert(mensaje);

    continuar = prompt("Desea continuar calculado?\nPresione cualquier tecla para continuar o nter para salir!");

    mensajeFinal += `\n\n${mensaje}`;

}
if (mensajeFinal != "") {
    alert(`Su resumen de calculos${mensajeFinal}`);
}

