
class Vehiculo {
    constructor(marca, modelo, tipo, cilindrada, anio, kilometros, carnet, comentario, precio, img) {
        this.id = 1;
        this.marca = marca;
        this.modelo = modelo;
        this.tipo = tipo;
        this.cilindrada = cilindrada;
        this.anio = anio;
        this.kilometros = kilometros;
        this.carnet = carnet;
        this.comentario = comentario;
        this.precio = precio;
        this.img = img;
    }
}

/**
 * array de elementos tipo vehiculo
 */
let tienda = [
    new Vehiculo("YAMAHA", "MT 125", "Naked", 125, 2015, 3500, "A", "comentarios del vendedor", 5000, "./img/motos/mt125-blue.jpg"),
    new Vehiculo("YAMAHA", "MT 7", "Naked", 700, 2016, 18000, "A", "comentarios del vendedor", 5300, "./img/motos/mt7-storm.jpg"),
    new Vehiculo("YAMAHA", "MT 9", "Naked", 900, 2019, 7500, "A", "comentarios del vendedor", 13000, "./img/motos/mt9-blue.jpg"),
    new Vehiculo("YAMAHA", "MT 10", "Naked", 1000, 2022, 12500, "A", "comentarios del vendedor", 1500, "./img/motos/mt-10.jpg"),
    new Vehiculo("HONDA", "Africa twing", "Trail", 1000, 2017, 9000, "A", "comentarios del vendedor", 30000, "./img/motos/africaTwin.jpg"),
    // new Vehiculo("HONDA", "Africa twing", "Trail", 200, 2018, 4500, "A", "comentarios del vendedor", 9500, "./img/motos/africaTwin200.jpg"),
    // new Vehiculo("HONDA", "CB500F", "Naked", 500, 2016, 7300, "A", "comentarios del vendedor", 4300, "./img/motos/CB500F.jpg"),
    // new Vehiculo("HONDA", "CB500R", "Naked", 500, 2019, 7500, "A", "comentarios del vendedor", 19000, "./img/motos/CB500R.jpg"),
    // new Vehiculo("HONDA", "CB500X", "Trail", 500, 2020, 5600, "A", "comentarios del vendedor", 11500, "./img/motos/CB500X.jpg"),
    // new Vehiculo("KAWASAKY", "Versys 650", "Trail", 600, 2021, 7000, "A", "comentarios del vendedor", 15500, "./img/motos/versys650.png"),
    // new Vehiculo("KAWASAKY", "Ninja 1000", "Racing", 1000, 2007, 6900, "A", "comentarios del vendedor", 26500, "./img/motos/ninja1000.jpg"),
    // new Vehiculo("BMW", "R 1250 GS", "TraiL", 1250, 2014, 5600, "A", "comentarios del vendedor", 5500, "./img/motos/BMW-R-1250-GS.jpg"),
];

/**
 * Funcion que crea un modelo de card ypara el vehiculo y carga los datos del objetos pasado
 * @param {*} vehiculo objeto que contiene los datos para completar datos de la card
 * @returns una modelo de card en sting
 */
function modelarCard(vehiculo) {
    return `<div class="card mb-2">
                    <img src="${vehiculo.img}" alt="" class="img-fluid" />
                    <div class="card-header text-center px-0 w-100">
                        <h5 class="card-title">${vehiculo.marca} - ${vehiculo.modelo}</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${vehiculo.tipo}</li>
                            <li class="list-group-item">${vehiculo.anio}</li>
                            <li class="list-group-item">${vehiculo.kilometros}</li>
                            <li class="list-group-item">${vehiculo.carnet}</li>
                        </ul>
                    </div>
                    <div class="card-footer text-end">${vehiculo.precio}</div>
                    <div class="btn btn-success">comprar</div>
                </div>`;
}

let contenedorCards = document.getElementById("contenedor-cards");

/**
 * Funcion que inserta el elemento card depues del ultimo hijo de su contenedor
 * @param {*} vehiculo elemento a insertar
 */
function renderizarCard(vehiculo) {
    let card = document.createElement(`div`);
    card.classList.add(`col-12`, `col-md-6`, `col-lg-4`);
    card.innerHTML = modelarCard(vehiculo);
    contenedorCards.appendChild(card);
}

/**
 * Funcion que inserta el elemento card anted del primer hijo de su contenedor
 * @param {*} vehiculo elemento a insertar
 */
function renderizarCardAlInicio(vehiculo) {
    let card = document.createElement(`div`);
    card.classList.add(`col-12`, `col-md-6`, `col-lg-4`);
    card.innerHTML = modelarCard(vehiculo);
    contenedorCards.insertAdjacentElement("afterbegin", card);
}

/**
 * For que recorre el array tienda para cargar todos lo elementos del al iniciar app
 */
tienda.forEach(element => {
    renderizarCard(element);
});


/**
 * Funcion que crea un nuevo objeto Vehiculo con los ddatos que le pasa el usuario y lo inserta al unicio del array
 * @returns objeto creado
 */
function crearObjetoVehiculo() {
    const nuevoVehiculo = new Vehiculo(prompt("Ingrese marca"),
        prompt("Ingrese modelo"),
        prompt("Ingrese tipo"),
        prompt("Ingrese cilindrada"),
        prompt("Ingrese año"),
        prompt("Ingrese kilometraje"),
        prompt("Ingrese carnet que habilita a conducir. A/A1/A2"),
        prompt("Ingrese comentarios sobre el vehiculo si lo desea"),
        prompt("Ingrese precio de venta"),
        prompt("Ingrese una imagen... (carga por defecto)"),
    );
    nuevoVehiculo.img = "./img/card.webp";

    tienda.unshift(nuevoVehiculo);
    return nuevoVehiculo;
}


/**************************************************************************************** 
 * INICIO DE LA APP
/**************************************************************************************** */

let publicar = prompt("PUBLICAR NUEVA MOTO? SI/NO");

while (publicar == "si" || publicar == "SI" || publicar == "Si" || publicar == "sI") {
    renderizarCardAlInicio(crearObjetoVehiculo());
    alert("carga completa");

    publicar = prompt("Realizar nueva publicacion? SI/NO");
}
