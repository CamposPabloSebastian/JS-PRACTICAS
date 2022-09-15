/*
Declarar una clase Cliente que permita:
Registrar nombre, presupuesto, si tiene tarjeta de descuento, y número de teléfono del cliente.
Un método transferirDinero(valor), que permita  obtener y restar cierta cantidad del presupuesto, siempre que este parámetro sea menor al valor enviado, y mayor que cero.
Luego invocar al menos tres (3) objetos usando esta clase, y solicitar al usuario cinco (5) números. Informar por alerta si cada uno de los clientes cuenta con el presupuesto suficiente para realizar una transferencia de igual monto al ingresado.
*/

class Cliente {
    constructor(nombre, presupuesto, tarjetaDesc, numTelfono) {
        this.nombre = nombre;
        this.presupuesto = presupuesto;
        this.tarjetaDesc = tarjetaDesc;
        this.numTelfono = numTelfono;
    }

    transferirDinero(valor) {
        if (this.presupuesto >= valor && this.presupuesto > 0) {
            return true;
        } else {
            return false;
        }
    }
}

const cliente1 = new Cliente("Pablo", 100, false, 123);
const cliente2 = new Cliente("Maria", 200, true, 456);
const cliente3 = new Cliente("Juan", 300, true, 789);

for (let i = 0; i < 3; i++) {
    let monto = Number(prompt("Monto?"));
    if (cliente1.transferirDinero(monto)) {
        console.log(`${cliente1.nombre} te puede pagar`);
    } else {
        console.log(`${cliente1.nombre} NO puede pagar`);
    }
    if (cliente2.transferirDinero(monto)) {
        console.log(`${cliente2.nombre} te puede pagar`);
    } else {
        console.log(`${cliente2.nombre} NO puede pagar`);
    }
    if (cliente3.transferirDinero(monto)) {
        console.log(`${cliente3.nombre} te puede pagar`);
    } else {
        console.log(`${cliente3.nombre} NO puede pagar`);
    }
}