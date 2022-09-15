/*
Codificar dos funciones:
Una función cotizarDolar(pesos), la cual recibe un valor monetario en pesos argentinos, y lo retorna en su equivalente en dólares.
Una función cotizarPesos(dolar), que recibe un valor monetario en dólares, y lo retorna en su equivalente en pesos argentinos.
Luego invocar las funciones solicitando  al usuario el valor y el tipo de cotización a realizar.
*/

const cotizarDolar = (pesos) => pesos / 300;
const cotizarPesos = (dolar) => dolar * 300;

console.log(cotizarDolar(prompt("cantidad de pesos a cambiar a dolare")));
console.log(cotizarPesos(prompt("cantidad de dolares a cambiar a pesos")));
