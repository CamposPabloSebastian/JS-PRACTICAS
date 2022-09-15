/*
Solicitar al usuario el registro de cinco (5) tiendas.
Emplear la clase Tienda de la actividad 1, para instanciar los objetos en función de las entradas capturadas. Generar una única salida compuesta por la información de los objetos instanciados.*/

class Tienda {
    constructor(name, adress, propi, rubro) {
        this.nombre = name;
        this.direc = adress;
        this.propietario = propi;
        this.rubro = rubro;
    }
}

let mensaje = "";
for (let i = 0; i < 5; i++) {
    let obj = new Tienda(prompt("Nombre de tienda"),
        prompt("direccion"),
        prompt("Propietario"),
        prompt("Rubro"));
    mensaje += `La tienda "${obj.nombre}" en ${obj.direc} de ${obj.propietario} es del rubro ${obj.rubro}\n`;
}

console.log(mensaje);