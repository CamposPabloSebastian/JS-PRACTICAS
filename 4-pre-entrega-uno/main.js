/**
 * Compra venta de productos.
 * Un usuario podra comprar productos publicados y podra publicar los suyos pero debera estar registrado para poder realizar la publicacion.
 * 
 * Las credenciales para la seccion iniciar sesion son 
 * usuario = admin
 * password = a
 */

class Usuario {
    constructor(nombre, apellido, usuario, pass) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.pass = pass;
    }
}
let ID_AUTOINCREMENTABLE = 1;
class Producto {
    constructor(marca, modelo, kilometros, precio) {
        this.id = ID_AUTOINCREMENTABLE++;
        this.marca = marca;
        this.modelo = modelo;
        this.kilometros = kilometros;
        this.precio = precio;
    }

    toStringProducto() {
        // ${this.}
        return `COD PROD: ${this.id} - ${this.marca} - ${this.modelo} - ${this.kilometros}km -> €${this.precio}.-`;
    }
}

// objetos usuario
const usuario1 = new Usuario("pablo", "campos", "admin", "a");
//array que contiene los usuarios que se registraron
const registros = [usuario1];

// objetos producto
const prod1 = new Producto("Yamaha", "Tracer 7", 20000, 8000);
const prod2 = new Producto("Honda", "CB500X", 9500, 5500);
const prod3 = new Producto("Yamaha", "MT 7", 1500, 7000);
const prod4 = new Producto("Yamaha", "Tenere", 27000, 10000);
const prod5 = new Producto("BMW", "GS 300", 4900, 5500);

// array que contien los productos creados
const arrayProductos = [];
arrayProductos.push(prod1, prod2, prod3, prod4, prod5);


/************************************************************************** */
/************************************************************************** */

//array carrito de compras
const carrito = [];

/**
 * funcion que crea menu principal
 * @returns cadena con el meni
 */
function menuPrincipal() {
    return `Bienvenido. Seleccione opcion.\n1- Comprar producto\n2- Vender producto`
}

/**
 * funcion que crea menu para usuarios registrados o que se registraron en el momento
 * @returns cadena con el menu
 */
function menuRegistrados() {
    return `1- Publicar\n2- Modificar\n3- Eliminar`
}

/**
 * funcion que crea menu de las opciones que se puede modificar de un objeto
 * @returns cadena con el menu
 */
function menuModificar() {
    return `Que desea modificar?\n1- Modelo y marca\n2- Kilometros\n3- Precio`;
}

/**
 * funcion que crea menu para poder ingresar a la app
 * @returns cadena con el menu
 */
function menuIngresoApp() {
    return `1- Iniciar sesion\n2- Registrarse`;
}

/**
 * funcion que recorre el array de productos para ser listados
 * @returns cadena con el array de productos.
 */
function listarProductos() {
    let cadena = [];
    arrayProductos.forEach(element => {
        cadena += element.toStringProducto() + "\n";
    });
    return cadena;
}

/**
 * funcion que recorre el array pasado por param para ser listarlos
 * @returns cadena con los elementos del array
 */
function listarProductos2(array) {
    let cadena = [];
    array.forEach(element => {
        cadena += element.toStringProducto() + "\n";
    });
    return cadena;
}

/**
 * funcion que busca un elemento por id
 * @param {*} idBuscado id del elemento buscado
 * @returns el elemnto encontrado o undefine si no lo encuentra
 */
function buscarProductos(idBuscado) {
    return arrayProductos.find(element => element.id == idBuscado);
}

/**
 * funcion que pide credencciales al usuario para iniciar sesion
 * @returns true si las credenciales son correctas, de lo contrario false
 */
function iniciarSesion() {
    sesionCorreo = prompt("Ingrese usuario");
    sesionPass = prompt("Ingrese clave");
    if (registros.some(persona => persona.usuario == sesionCorreo && persona.pass == sesionPass)) {
        return true;
    } else {
        return false;
    }
}

/**
 * funcion obtiene datos para el registro de un nuevo usuario
 * @returns true si el registro se completa, de lo contrario false.
 */
function registrarUsuario() {
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let usuario = prompt("Ingrese su usuario");
    let pass;
    if (registros.some(obj => obj.usuario != usuario)) {
        pass = prompt("Ingrese su contraseña");
        registros.push(new Usuario(nombre, apellido, usuario, pass));
        alert("Registro completo!");
        return true;
    } else {
        usuario = prompt("Usuario ya existe. Ingrese nuevo usuario");
        if (registros.some(obj => obj.usuario != usuario)) {
            pass = prompt("Ingrese su contraseña");
            registros.push(new Usuario(nombre, apellido, usuario, pass));
            alert("Registro completo!");
        } else {
            alert("No se pudo completar el registro. Intente mas tarde");
        }
    }
    return false;
}

/**
 * funcion que solicita datos al usuario para modidicar segun su seleccion
 * @param {*} seleccion opcion a modifucar seleccionada
 * @param {*} elemento elemento a modificar
 */
function modificar(seleccion, elemento) {
    switch (seleccion) {
        case "1":
            elemento.marca = prompt("Ingrese nueva Marca");
            elemento.modelo = prompt("Ingrese nueva Modelo");
            break;
        case "2":
            elemento.kilometros = prompt("Ingrese nuevo kilometraje");
            break;
        case "3":
            elemento.precio = prompt("Ingrese nuevo precio");
            break;
    }
}


/**
 * funcion que solicita datos al usuario para crear un nuevo producto
 * @returns producto creado
 */
function publicarPorducto() {
    return new Producto(prompt("Ingrese marca"),
        prompt("Ingrese modelo"),
        prompt("Ingrese Kilometraje"),
        prompt("Ingrese precio"),
    )
}


/**
 * funcion que valida las opciones del menu ingresadas, se puede reintentar 2 veces mas
 * @param {*} menu menu que muestra para que el usuario seleccione opcion
 * @param {*} opcion seleccion del menu 
 * @param {*} min valor minimo del menu
 * @param {*} max valor maximo del menu
 * @returns false si se fallan todos los reintentos, de lo contrario la opcion validada
 */
function validarOpcionMenu(menu, opcion, min, max) {
    let correcto = false, intentos = 2;
    if (!isNaN(opcion) && opcion >= min && opcion <= max) {
        correcto = opcion;
    } else {
        while (!correcto && intentos != 0) {
            opcion = prompt("Opcion invalida, REINTENTE\n" + menu);
            if (!isNaN(opcion) && opcion >= min && opcion <= max) {
                correcto = opcion;
            }
            intentos--;
        }
    }
    return correcto;
}


/**
 * funcion que delega la opcion seleccionada por el usuario para publicar, modificar o eliminar un producto
 * @param {*} opcionMenu seleccion del usuario
 */
function ABM(opcionMenu) {
    let objeto;
    switch (opcionMenu) {
        case "1":
            alert(listarProductos());
            objeto = publicarPorducto();
            alert("Se publico el producto\n" + objeto.toStringProducto());
            arrayProductos.push(objeto);
            alert(listarProductos());
            break;
        case "2":
            opcion = prompt("Que producto desea Modificar?\n" + listarProductos());
            opcion = validarOpcionMenu(listarProductos(), opcion, OPCION_MINIMA_MENU, OPCION_MAX_PRODUCTOS);
            if (opcion != false) {
                objeto = buscarProductos(parseInt(opcion));
                if (objeto != undefined) {
                    opcion = prompt(menuModificar());
                    modificar(opcion, objeto);
                    alert("Producto modificado\n" + listarProductos());
                } else {
                    alert("Producto no encontrado");
                }
            } else {
                alert("Cerrando app por error de ingresos...");
            }
            break;
        case "3":
            opcion = prompt("Que producto desea eliminar?\n" + listarProductos());
            opcion = validarOpcionMenu(listarProductos(), opcion, OPCION_MINIMA_MENU, OPCION_MAX_PRODUCTOS);
            if (opcion != false) {
                objeto = buscarProductos(parseInt(opcion));
                if (objeto != undefined) {
                    if (confirm(objeto.toStringProducto() + "\nDesea eliminar el producto?")) {
                        let indice = arrayProductos.findIndex(elemento => elemento.id == objeto.id);
                        arrayProductos.splice(indice, 1);
                        alert(listarProductos());
                    }
                } else {
                    alert("Producto no encontrado");
                }
            }
            break;
    }
}

//CONSTANTES PARA VALIDAR MENUS
const OPCION_MINIMA_MENU = 1,
    OPCION_MAX_MENU_PRINCIPAL = 2,
    OPCION_MAX_MENU_MODIFICAR = 3,
    OPCION_MAX_MENU_REGISTROS = 3,
    OPCION_MAX_MENU_INGRESO_APP = 2,
    OPCION_MAX_PRODUCTOS = arrayProductos.length;

let sesionCorreo, sesionPass

/*******INICIO APP */

let opcion = prompt(menuPrincipal());
opcion = validarOpcionMenu(menuPrincipal(), opcion, OPCION_MINIMA_MENU, OPCION_MAX_MENU_PRINCIPAL);

if (opcion != false) {
    switch (opcion) {
        case "1":
            opcion = prompt("Productos disponibles:\nSelecione cod. prod.\n" + listarProductos());
            opcion = validarOpcionMenu(listarProductos(), opcion, OPCION_MINIMA_MENU, OPCION_MAX_PRODUCTOS);
            if (opcion != false) {
                let encontrado = buscarProductos(parseInt(opcion));
                if (confirm(encontrado.toStringProducto() + "\nDesea agregarlo al carrito?")) {
                    carrito.push(encontrado);
                }

            } else {
                alert("Cerrando app por error de ingresos...");
            }
            break;
        case "2":
            let registar = false;
            opcion = prompt(menuIngresoApp());
            opcion = validarOpcionMenu(menuIngresoApp(), opcion, OPCION_MINIMA_MENU, OPCION_MAX_MENU_INGRESO_APP);
            if (opcion != false) {
                if (opcion == "1") {
                    if (iniciarSesion()) {
                        opcion = prompt(menuRegistrados());
                        ABM(opcion);
                    } else {
                        alert("Usuario no registrado");
                        if (confirm("Deseas registrarte?")) {
                            registar = true;
                        }
                    }
                }
                if (opcion == "2" || registar) {
                    if (registrarUsuario()) {
                        opcion = prompt(menuRegistrados());
                        opcion = validarOpcionMenu(menuRegistrados(), opcion, OPCION_MINIMA_MENU, OPCION_MAX_MENU_REGISTROS);
                        if (opcion != false) {
                            ABM(opcion);
                        }
                    }
                }
            }
            break;
    }
}

if (carrito.length > 0) {
    if (confirm("Vas a comprar el siguiente producto\n" + listarProductos2(carrito))) {
        alert("Compra completa, en breves nos contactaremos con usted");
    } else {
        alert("Compra cancelada!!!");
    }
}
alert("ADIOS.");

