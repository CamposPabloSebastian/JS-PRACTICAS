/*
Declarar un método para la clase Tienda con la siguiente cabecera esPropietario(nombre). Se retorna true si el nombre enviado corresponde al propietario de la tienda.Caso contrario, se retorna false.
Luego, invocar al menos tres(3) objetos usando esta clase y solicitar al usuario cinco(5) nombres. Informar por alerta si los nombres pertenecen a algún dueño de tienda.
*/

class Tienda {
    constructor(name, adress, propi, rubro) {
        this.nombre = name;
        this.direc = adress;
        this.propietario = propi;
        this.rubro = rubro;
    }

    esPropietario(nombre) {
        return this.propietario == nombre ? true : false;
    }
}

const tienda1 = new Tienda("sendas verdes", "rosello 362", "maria", "guarderia");
const tienda2 = new Tienda("del sur", "rosello 370", "pablo", "jardin");
const tienda3 = new Tienda("alcolera", "rosello 3620", "juan", "escuela");


console.log(tienda1.esPropietario("maria"));
console.log(tienda1.esPropietario("pablo"));
console.log(tienda3.esPropietario("juan"));