/*
Declarar un método para la clase Tienda con la siguiente cabecera estaAbierto(hora). Este retorna true si la hora enviada está entre las 08 y 12, o entre las 15 y 19. Caso contrario, se retorna false.
Luego invocar al menos un (1) objeto usando esta clase, y solicitar al usuario tres (3) horas. Informar por alerta si la tienda está abierta, en función de la hora ingresada.
*/

class Tienda {
    constructor(name, adress, propi, rubro) {
        this.nombre = name;
        this.direc = adress;
        this.propietario = propi;
        this.rubro = rubro;
    }

    estaAbierto(hora) {
        return (hora >= 8 && hora <= 12 || hora >= 15 && hora <= 19) ? true : false;
    }

}

const tienda1 = new Tienda("pablo", "rosello 362", "maria", "guarderia");
console.log(tienda1.estaAbierto(0));
console.log(tienda1.estaAbierto(12));
console.log(tienda1.estaAbierto(19));

