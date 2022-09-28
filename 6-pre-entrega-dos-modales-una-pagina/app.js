let ID_USUARIO = 1;

class Usuario {
    constructor(nombre, apellido, email, contrasenya) {
        this.id = ID_USUARIO++;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.contrasenya = contrasenya;
    }

    registrado(email, pass) {
        if (this.email == email && this.contrasenya == pass) {
            return this;
        }
    }
}

const usuariosRegistrados = [
    new Usuario("admin", "admin", "admin@admin.com", "admin"),
    new Usuario("Pablo", "campos", "pablo.c1791@mail.com", "1234"),
];


let ID_VEHICULO = 1;

class Vehiculo {
    constructor(marca, modelo, tipo, cilindrada, anio, kilometros, carnet, comentario, precio, img) {
        this.id = ID_VEHICULO++;
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
    };
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
    new Vehiculo("HONDA", "Africa twing", "Trail", 200, 2018, 4500, "A", "comentarios del vendedor", 9500, "./img/motos/africaTwin200.jpg"),
    new Vehiculo("HONDA", "CB500F", "Naked", 500, 2016, 7300, "A", "comentarios del vendedor", 4300, "./img/motos/CB500F.jpg"),
    new Vehiculo("HONDA", "CB500R", "Naked", 500, 2019, 7500, "A", "comentarios del vendedor", 19000, "./img/motos/CB500R.jpg"),
    new Vehiculo("HONDA", "CB500X", "Trail", 500, 2020, 5600, "A", "comentarios del vendedor", 11500, "./img/motos/CB500X.jpg"),
    new Vehiculo("KAWASAKY", "Versys 650", "Trail", 600, 2021, 7000, "A", "comentarios del vendedor", 15500, "./img/motos/versys650.png"),
    new Vehiculo("KAWASAKY", "Ninja 1000", "Racing", 1000, 2007, 6900, "A", "comentarios del vendedor", 26500, "./img/motos/ninja1000.jpg"),
    new Vehiculo("BMW", "R 1250 GS", "TraiL", 1250, 2014, 5600, "A", "comentarios del vendedor", 5500, "./img/motos/BMW-R-1250-GS.jpg"),
];


function validarImagen(imagen) {
    if (imagen.length == 0) {
        return "./img/card.webp"
    }
}

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
let ultimasPublicaciones = document.getElementById("ultimasPublicaciones");

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
function cargarHtml(array) {
    contenedorCards.innerHTML = "";
    array.forEach(element => {
        renderizarCard(element);
    });
}

cargarHtml(tienda);


const listaMarcas = ["YAMAHA", "HONDA", "KAWASAKY", "BMW", "DUCATI", "TRIUMF"];
const listaTipoMoto = ["NAKED", "TRAIL", "ENDURO", "PISTA", "TOURING", "CUSTOM"];
const listAnios = [];
const ANIO_MIN = 1980, ANIO_MAXIMO = new Date().getFullYear();
for (let i = ANIO_MIN; i <= ANIO_MAXIMO; i++) {
    listAnios.push(i);
}

/********************************** CARGA DE DATOS INICIAL HTML *******************************/

/**
 * Funcion que carga las opciones de los select
 * @param {*} array listado con las opciones a cargar
 * @param {*} nodoPadre contenedor de las opciones
 */
function cargaSelect(array, nodoPadre) {
    array.forEach(element => {
        let option = document.createElement("option");
        option.value = option.textContent = element;
        nodoPadre.appendChild(option);
    });
}


const selectMarca = document.getElementById("selectFiltroMarca");
cargaSelect(listaMarcas, selectMarca);

const selectAnioDesde = document.getElementById("anio-desde");
cargaSelect(listAnios, selectAnioDesde);

const selectAnioHasta = document.getElementById("anio-hasta");
cargaSelect(listAnios, selectAnioHasta);
selectAnioHasta.lastElementChild.setAttribute(`selected`, "");

let anioDesdeSeleccionado;
selectAnioDesde.addEventListener(`change`, e => {
    anioDesdeSeleccionado = e.target.value;
    selectAnioHasta.innerHTML = "";
    cargaSelect(listAnios.filter(x => x > anioDesdeSeleccionado), selectAnioHasta);
    selectAnioHasta.lastElementChild.setAttribute(`selected`, "");
})


const inputPrecioDesde = document.getElementById('inputPrecioDesde');
const labelPrecioDesde = document.getElementById('labelPrecioDesde')
inputPrecioDesde.addEventListener('input', () => {
    labelPrecioDesde.textContent = inputPrecioDesde.value;
})
const inputPrecioHasta = document.getElementById('inputPrecioHasta');
const labelPrecioHasta = document.getElementById('labelPrecioHasta')
inputPrecioHasta.addEventListener('input', () => {
    labelPrecioHasta.textContent = inputPrecioHasta.value;
})

/********************************** ACCIONES PARA FILTROS *******************************/

const objetoSeleccionesFiltro = {
    marca: "",
    modelo: "",
    anioMin: "",
    anioMax: "",
    precioMin: "",
    precioMax: ""
}

/**
 * funcion que compara el objetoSeleccionesFiltro con el objto pasado por marca
 * @param {*} producto objeto a comparar 
 * @returns si clave marca contiene algo (true):
 * retorna true si la comparacion es igual o false si no es igual.
 * si clave marca No contiene nada, esta vacia (false):
 * retorna el objeto pasada por parametro nuevamanete.
 */

function filtrarMarca(producto) {
    const { marca } = objetoSeleccionesFiltro; // destructurin de objeto
    return marca ? marca == producto.marca : producto;
}

selectMarca.addEventListener('change', e => {
    objetoSeleccionesFiltro.marca = e.target.value;
    filtrar();
})

/**
 * funcion que compara el objetoSeleccionesFiltro con otro objeto por año minimo
 * @param {*} producto objeto a comparar 
 * @returns si el objetoSeleccionesFiltro en su clave anioMin contiene algo:
 * retorna true si anioMin es menor o igual al anio del producto pasado por param, de lo contrario false.
 * si el objetoSeleccionesFiltro en su clave anioMin No contiene algo:
 * retorna el objeto pasado por parametro nuevamente.
 */
function filtrarAnioMin(producto) {
    const { anioMin } = objetoSeleccionesFiltro;
    if (anioMin) {
        return anioMin <= producto.anio;
    } else {
        return producto;
    }
}

selectAnioDesde.addEventListener(`change`, e => {
    objetoSeleccionesFiltro.anioMin = parseInt(e.target.value);
    filtrar();
})

/**
 * funcion que compara el objetoSeleccionesFiltro con otro objeto por año maximo
 * @param {*} producto objeto a comparar 
 * @returns si el objetoSeleccionesFiltro en su clave anioMax contiene algo:
 * retorna true si anioMax es mayor o igual al anio del producto pasado por param, de lo contrario false.
 * si el objetoSeleccionesFiltro en su clave anioMax No contiene algo:
 * retorna el objeto pasado por parametro nuevamente.
 */
function filtrarAnioMax(producto) {
    const { anioMax } = objetoSeleccionesFiltro;
    if (anioMax) {
        return anioMax >= producto.anio;
    } else {
        return producto;
    }
}

selectAnioHasta.addEventListener(`change`, e => {
    objetoSeleccionesFiltro.anioMax = parseInt(e.target.value);
    filtrar();
})

/**
 * funcion que compara el objetoSeleccionesFiltro con otro objeto por precio minimo
 * @param {*} producto objeto a comparar 
 * @returns si el objetoSeleccionesFiltro en su clave precioMin contiene algo:
 * retorna true si precioMin es mayor o igual al precio del producto pasado por param, de lo contrario false.
 * si el objetoSeleccionesFiltro en su clave precioMin No contiene algo:
 * retorna el objeto pasado por parametro nuevamente.
 */
function filtrarPrecioMin(producto) {
    const { precioMin } = objetoSeleccionesFiltro;
    if (precioMin) {
        return precioMin <= producto.precio;
    } else {
        return producto;
    }
}

inputPrecioDesde.addEventListener("change", e => {
    // e.preventDefault();
    objetoSeleccionesFiltro.precioMin = e.target.value;
    filtrar();
})


/**
 * funcion que compara el objetoSeleccionesFiltro con otro objeto por precio maximo
 * @param {*} producto objeto a comparar 
 * @returns si el objetoSeleccionesFiltro en su clave precioMax contiene algo:
 * retorna true si precioMax es mayor o igual al precio del producto pasado por param, de lo contrario false.
 * si el objetoSeleccionesFiltro en su clave precioMax No contiene algo:
 * retorna el objeto pasado por parametro nuevamente.
 */
function filtrarPrecioMax(producto) {
    const { precioMax } = objetoSeleccionesFiltro;
    if (precioMax) {
        return precioMax >= producto.precio;
    } else {
        return producto;
    }
}

inputPrecioHasta.addEventListener("change", e => {
    // e.preventDefault();
    objetoSeleccionesFiltro.precioMax = e.target.value;
    filtrar();
})


/**
 * Funcion que realiza carga en el html de acuerdo a los filtros parametros de filtros cargados por el usuario.
 */
function filtrar() {
    cargarHtml(tienda.filter(filtrarMarca).filter(filtrarAnioMin).filter(filtrarAnioMax).filter(filtrarPrecioMin).filter(filtrarPrecioMax));
}

const formFiltro = document.getElementById(`borrarFiltro`);
formFiltro.addEventListener(`click`, () => {
    document.getElementById(`form-filtro`).reset();
    cargarHtml(tienda);
});


/********************************** ACCIONES INICIAR SESION *******************************/
let sesionIniciada = false;

// /**
//  * Funcion que valida si la sesion esta iniciada.
//  * @param {*} formularioSesion formiralio para obtener las credenciales y validar sesion
//  * @returns true si se pudo iniciar sesion, de lo contrario false.
//  */
// function iniciarSesion(form) {
//     console.log("3 estoy en la funcion")
//     // form.addEventListener(`submit`, e => {
//     // e.preventDefault();
//     let formulario = document.forms[`formSesion`];
//     let user, pass;
//     user = formulario.email.value;
//     pass = formulario.password.value;
//     console.log(user)
//     console.log(pass)

//     let existe = usuariosRegistrados.find(usuario => usuario.registrado(user, pass));
//     if (existe) {
//         console.log("encontrado")
//         let span = document.getElementById(`credencialesIncorrectas`);
//         span.textContent = ``
//         let spanNav = document.getElementById(`usuarioRegistrado`);
//         console.log(spanNav)
//         spanNav.textContent = `${existe.nombre} ${existe.apellido}`
//         console.log(spanNav.textContent);
//         sesionIniciada = true;
//         form.reset();
//     } else {
//         console.log("no existe usuario")
//         let span = document.getElementById(`credencialesIncorrectas`);
//         span.textContent = `Usuario o contraseña incorrecto.`
//         span.style.color = "red";
//         sesionIniciada = false;
//     }
//     // })
//     console.log("la sesion en la funcion antes de salir es: " + sesionIniciada)

// }

// const formularioSesion = document.getElementById(`formSesion`);
// const botonIniciarSesion = document.getElementById(`botonIniciarSesion`);

// console.log("1 INICIO DE APP. la sesion es " + sesionIniciada);
// botonIniciarSesion.addEventListener('click', e => {
//     e.preventDefault();
//     console.log("2 diste click a iniccar sesion");
//     iniciarSesion(formularioSesion);
//     console.log("la funcion me devolvio un: " + sesionIniciada)
//     if (!sesionIniciada) {
//         console.log("reintento de sesion ahora es " + sesionIniciada);
//     } else {
//         ;
//     }
// })

// formularioSesion.addEventListener(`submit`, e => {
//     e.preventDefault();
//     let formulario = document.forms[`formSesion`];
//     let user, pass;
//     user = formulario.email.value;
//     pass = formulario.password.value;

//     let existe = usuariosRegistrados.find(usuario => usuario.registrado(user, pass));
//     if (existe) {
//         let span = document.getElementById(`credencialesIncorrectas`);
//         span.textContent = ``
//         sesionIniciada = true;
//     } else {
//         let span = document.getElementById(`credencialesIncorrectas`);
//         span.textContent = `Usuario o contraseña incorrecto.`
//         span.style.color = "red";
//     }
// })
const formularioSesion = document.getElementById(`formSesion`);

function iniciarSesion() {
    formularioSesion.addEventListener("submit", e => {
        e.preventDefault();
        let formulario = document.forms[`formSesion`];
        let user, pass;
        user = formulario.email.value;
        pass = formulario.password.value;
        console.log(user);
        console.log(pass);

        let existe = usuariosRegistrados.find(usuario => usuario.registrado(user, pass));
        if (existe) {
            console.log("encontrado")
            let span = document.getElementById(`credencialesIncorrectas`);
            span.textContent = ``
            let spanNav = document.getElementById(`usuarioRegistrado`);
            console.log(spanNav)
            spanNav.textContent = `${existe.nombre} ${existe.apellido}`
            console.log(spanNav.textContent);
            sesionIniciada = true;
            formularioSesion.reset();
            document.getElementById("cerrarVentanaSesion").click();
        } else {
            console.log("no existe usuario")
            let span = document.getElementById(`credencialesIncorrectas`);
            span.textContent = `Usuario o contraseña incorrecto.`
            span.style.color = "red";
            sesionIniciada = false;
        }
    })
}

document.getElementById(`botonMiCuenta`).addEventListener('click', e => {

});

// if (!sesionIniciada) {
//     iniciarSesion();
// }

/********************************** ACCIONES PARA PUBLICAR *******************************/

// const selectMarcaPublicar = document.getElementById("inputSelectMarca");
// const selectTipoPublicar = document.getElementById("inputSelectEstilo");
// const selectAnioPublicar = document.getElementById("inputSelectAnio");

// cargaSelect(listaMarcas, selectMarcaPublicar);
// cargaSelect(listaTipoMoto, selectTipoPublicar);
// cargaSelect(listAnios, selectAnioPublicar);


// const botonPublicar = document.getElementById("botonPublicar");

// botonPublicar.addEventListener('click', e => {
//     e.preventDefault();
//     console.log("Sesion no iniciada");
//     if (sesionIniciada) {
//         console.log("sesion iniciada");
//         botonPublicar.setAttribute("data-bs-toggle", "modal");
//     } else {
//         document.getElementById(`botonMiCuenta`).click();
//         if (sesionIniciada) {
//             botonPublicar.setAttribute("data-bs-toggle", "modal");
//             botonPublicar.click();
//         }
//     }
// })

// const formularioPublicar = document.getElementById(`formPublicar`);


// const botonContinuarPublicar = document.getElementById(`btnContinuarPublicacion`);

// formularioPublicar.addEventListener(`submit`, e => {
//     e.preventDefault();
//     let formulario = document.forms[`formPublicar`];
//     let nuevoVehiculo = new Vehiculo(
//         formulario.marca.value,
//         formulario.modelo.value,
//         formulario.tipo.value,
//         formulario.cilindrada.value,
//         formulario.anio.value,
//         formulario.kilometros.value,
//         formulario.carnet.value,
//         formulario.descripcion.value,
//         formulario.precio.value,
//         validarImagen(formulario.imagen.value),
//     );
//     tienda.unshift(nuevoVehiculo);
//     renderizarCardAlInicio(nuevoVehiculo);
//     formularioPublicar.reset();
//     document.getElementById("publicarVehiculo").click();
// });
