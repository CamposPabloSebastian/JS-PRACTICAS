
let contenedorCard = document.getElementById("contenedor-card");

console.log(contenedorCard.innerText);

//Creo un modelo de card

function crearCard(img = "./img/card.webp", marca, modelo, estilo, anio, Kilometos, licencia, Precio) {
    return `<div class="card mb-2">
                    <img src="${img}" alt="" class="img-fluid" />
                    <div class="card-header text-center px-0 w-100">
                        <h5 class="card-title">${marca} - ${modelo}</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${estilo}</li>
                            <li class="list-group-item">${anio}</li>
                            <li class="list-group-item">${Kilometos}</li>
                            <li class="list-group-item">${licencia}</li>
                        </ul>
                    </div>
                    <div class="card-footer text-end">${Precio}</div>
                    <div class="btn btn-success">comprar</div>
                </div>`;
}


for (let i = 0; i < 10; i++) {
    let nuevaPublicacion = document.createElement("div");
    nuevaPublicacion.classList.add(`col-12`, `col-md-6`, `col-lg-4`);

    nuevaPublicacion.innerHTML = crearCard();
    contenedorCard.appendChild(nuevaPublicacion);
}