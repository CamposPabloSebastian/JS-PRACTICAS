
//pedimos dato al usuario
let dato = prompt("BIENVENIDO!\nQue tabla desea ver?, Ingrese un numero.\nPresione enter/aceptar para salir");

//se ejecuta mientras el dato no sea NULL/Vacio
while (dato != "") {

    //comprobamos si el dato es un numero o si es 0 (si el dato es cero no entra al if, lo tomo como false)
    if (parseInt(dato) || dato == 0) {
        //parseamos el dato a entero (aunque si es un numero string funciona igual)
        dato = parseInt(dato);
        console.log("MOSTRANDO TABLA DEL " + dato + "\n");

        for (let i = 0; i <= 10; i++) {
            console.log(dato + " X " + i + " = " + (dato * i));
        }
    } else {
        console.log("Error: " + "'" + dato + "'" + " NO es valido.");
    }

    dato = prompt("Ingrese nuevo numero.\nPresione enter/aceptar para salir");
}

alert("Cerrando... Adios");