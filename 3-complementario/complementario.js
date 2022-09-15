let PROXIMIMO_ID_PRODUCTO = 1;

class Producto {

    constructor(marca, modelo, motor, descripcionVendedor, precio, kilometros) {
        this.id = PROXIMIMO_ID_PRODUCTO++;
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor
        this.descripcion = descripcionVendedor;
        this.precio = precio;
        this.kilometros = kilometros;
    }

    mostrarDatos() {
        return `Cod prod ${this.id}: ${this.marca} - ${this.modelo} ${this.motor}cc, con ${this.kilometros} kilometros €${this.precio}.-`;
    }
}

const tienda = [
    new Producto("Yamaha", "MT 125", 125, "Motor 125cc, frenos ABS, Full led, peso 150kg", 5500, 14516),
    new Producto("Yamaha", "MT 7", 700, "Motor 700cc, frenos ABS, Full led, peso 150kg", 7500, 24516),
    new Producto("Yamaha", "MT 9", 900, "Motor 900cc, frenos ABS, Full led, peso 150kg", 9500, 14516),
    new Producto("Yamaha", "MT 1", 1000, "Motor 1000cc, frenos ABS, Full led, peso 150kg", 12500, 34516),
    new Producto("Yamaha", "MT 3", 300, "Motor 300cc, frenos ABS, Full led, peso 150kg", 6500, 21650),
    new Producto("Yamaha", "R125", 125, "Motor 300cc, frenos ABS, Full led, peso 150kg", 6000, 71650),
    new Producto("Yamaha", "R3", 300, "Motor 300cc, frenos ABS, Full led, peso 150kg", 7000, 11652),
    new Producto("Yamaha", "R6", 600, "Motor 300cc, frenos ABS, Full led, peso 150kg", 7500, 1650),
    new Producto("Yamaha", "R1", 1000, "Motor 300cc, frenos ABS, Full led, peso 150kg", 14000, 31651),
];

/**
 * Funcion que crea un string para mostrear el menu
 * @returns 
 */
function mostarMenu() {
    return `Bienvenido a la tienda de motos\n1-Mostrar motos\n2-Ordenar por precio\n3-Publicar tu moto\n4-Eliminar moto`;
}

/**
 * funcion que recorre el array y mustrea detalle de cada producto
 * @param {*} list array a recorrer
 * @returns un string con todos los productos
 */
function listarMotos(list) {
    let lista = "";
    for (let i = 0; i < list.length; i++) {
        lista += list[i].mostrarDatos() + "\n";
    }
    return lista;
}

/**
 * funcion que crea una copia del array original y lo ordena de mayor a menor
 * @returns cadena con el listado de productos ordenados
 */
function ordenarPorValor() {
    let otro = tienda.slice();
    otro.sort((a, b) => a.precio > b.precio ? -1 : 1);
    return listarMotos(otro);
}


/**
 * funcion que pide los datos al usuario para crear un nuevo producto, lo carga al array original
 */
function publicar() {
    const nuevo = new Producto(prompt("Ingrese Marca"),
        prompt("Ingrese modelo"),
        parseInt(prompt("Ingrese cilindrada")),
        prompt("ingrese breve descripcion"),
        parseInt(prompt("Ingrese kilometraje")),
        parseFloat(prompt("Ingrese precio")));

    alert(`Se publicara nuevo producto\n${nuevo.mostrarDatos()}`);
    tienda.push(nuevo);
}

/**
 * funcion que filtra el array original entre un rango de valores
 * @param {*} min valor minimo buscado
 * @param {*} max valor maximo buscado
 * @return un array con los elementos encontrados.
 */
function filtrarPorPrecio(min, max) {
    return tienda.filter(a => a.precio >= min && a.precio <= max);
}

let opcion = prompt(mostarMenu());

switch (opcion) {
    case "1":
        alert(listarMotos(tienda));
        break;
    case "2":
        alert(ordenarPorValor());
        break;
    case "3":
        publicar();
        alert(listarMotos(tienda));
        break;
    case "4":
        alert("Ingrese valor minimo y maximo para realizar busqueda")
        let encontrado = filtrarPorPrecio(
            parseInt(prompt("ingrese monto minimo")),
            parseInt(prompt("ingrese monto maximo")));
        if (encontrado.length == 0) {
            alert("No hay productos con los filtros seleccionados");
        } else {
            alert("Se encontraron los siguiente productos\n" + listarMotos(encontrado));
        }
        break;
}
