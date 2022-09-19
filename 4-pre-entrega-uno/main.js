/**
 * Compra venta de productos.
 * Un usuario podra comprar productos publicados y podra publicar los suyos pero debera estar registrado para poder realizar la publicacion.
 */
 class Usuario{
    constructor(nombre, apellido, usuario, pass){
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
        this.pass = pass;
    }
}
let ID_AUTOINCREMENTABLE = 1;
class Producto{
    constructor(marca, modelo, kilometros, precio){
        this.id = ID_AUTOINCREMENTABLE++;
        this.marca = marca;
        this.modelo = modelo;
        this.kilometros =  kilometros;
        this.precio = precio;
    }

    toStringProducto(){
        // ${this.}
        return `COD PROD: ${this.id} - ${this.marca} - ${this.modelo} - ${this.kilometros}km -> €${this.precio}.-`;
    }
}

const usuario1 = new Usuario("pablo", "campos", "admin", "a");

//array que contiene los usuarios que se registraron
const registros = [usuario1];



const prod1 =  new Producto("Yamaha","Tracer 7",20000,8000);
const prod2 =  new Producto("Honda","CB500X",9500,5500);
const prod3 =  new Producto("Yamaha","MT 7",1500,7000);
const prod4 =  new Producto("Yamaha","Tenere",27000,10000);
const prod5 =  new Producto("BMW","GS 300",4900,5500);

const arrayProductos= [];
arrayProductos.push(prod1, prod2, prod3, prod4, prod5);


/************************************************************************** */
/************************************************************************** */

//array carrito de compras
const carrito = [];

function menuPrincipal(){
    return `Bienvenido. Seleccione opcion.\n1- Comprar producto\n2- Vender producto`
}

function registrarUsuario(){
    return 
}

function menuRegistrados(){
    return `1- Publicar\n2- Modificar\n3- Eliminar`
}


/**
 * funcion que recorre el array de productos para ser listarlos
 * @returns cadena con el array de productos.
 */
function listarProductos(){
    let cadena = [];
    arrayProductos.forEach(element => {
        cadena+= element.toStringProducto() + "\n";
    });
    return cadena;
}

function buscarProductos(idBuscado){
    return arrayProductos.find(element => element.id == idBuscado);
}


function iniciarSesion(){
    sesionCorreo = prompt("Ingrese correo: ");
    sesionPass = prompt("ingrese clave");
    if(registros.some(persona => persona.usuario == sesionCorreo && persona.pass == sesionPass)){
        return true;
    }else{
        return false;
    }
    
}

function ABM(opcionMenu){
    switch (opcionMenu){
        case "1":
            console.log("publicar")
            break;
        case "2":2
                console.log("modificar")
            break;
        case "3":
                opcion = prompt("Que producto desea eliminar?\n" + listarProductos());
                let encontrado = buscarProductos(parseInt(opcion));
                if(confirm(encontrado.toStringProducto() + "\nDesea eliminar producto?")){
                    // console.log("eliminar"+arrayProductos.slice(arrayProductos.indexOf(encontrado.id == opcion, 2)));
                    arrayProductos.shift();
                    alert(listarProductos());
                }
            break;2
    }
}

let sesionCorreo, sesionPass

/*******INICIO APP */

 let opcion = prompt(menuPrincipal());

 switch(opcion){
    case "1":
        opcion = prompt("Productos disponibles:\nSelecione cod. prod.\n" + listarProductos());
        let encontrado = buscarProductos(parseInt(opcion));
        if(confirm(encontrado.toStringProducto() + "\nDesea agregarlo al carrito?")){
            carrito.push(encontrado);
        }        
        break;
    case "2":
        if(iniciarSesion()){
            opcion = prompt(menuRegistrados());
            ABM(opcion);
        }else{
            console.log("uysuario no registrado")
            registrarUsuario();
        }
        break;
            
}

console.table(carrito[0].toStringProducto());