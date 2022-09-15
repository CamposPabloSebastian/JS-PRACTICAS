/*
Declarar un clase Tienda que permita registrar:
Nombre de la tienda.
Dirección de la tienda.
Propietario de la tienda.
Rubro de la tienda.
Luego invocar al menos tres (3) objetos usando esta clase.
*/

class Tienda {
    constructor(name, adress, propi, rubro) {
        this.nombre = name;
        this.direc = adress;
        this.propietario = propi;
        this.rubro = rubro;
    }
}

const tienda1 = new Tienda("pablo", "rosello 362", "maria", "guarderia");
const tienda2 = new Tienda("pablo", "rosello 370", "pablo", "jardin");
const tienda3 = new Tienda("pablo", "rosello 3620", "juan", "escuela");
