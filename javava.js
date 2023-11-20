"use strict";
/*
const nombre = prompt("Escribe tu nombre");
if (nombre) {
    document.write("hola "nombre);
} else {
    const nombre = prompt("Escribe tu nombre");
    if (nombre) {
        document.write("hola "nombre);
    } else {
        document.write("hola desconocido");
    }
}
*/
//saludar y preguntar el nombre si no responde poner hola desconocido

// Leer nombre y apellido, saludar por nombre y apellido.

// let nombre = prompt("cual es tu nombre ");
// let apellido = prompt("cual es tu apellido");
// document.write("hola " + nombre + " " + apellido);

// Pregunte al usuario si desea continuar, responder con hola o adiós.

// let siono = confirm("deceas continuar");
// if (siono) {
//   document.write("hola");
// } else {
//   document.write("adios");
// }

// Leer nombre y edad, Mostrar si es o no mayor de edad.

// let nombre = prompt("Escribe tu nombre completo");
// let edad = prompt("escribe tu edad");
// if (edad < 18) {
//   document.write("hola " + nombre + " eres menor de edad");
// } else {
//   document.write("hola " + nombre + " eres mayor de edad");
// }

// Leer un rol, (admin, ventas, cliente), acceso de acuerdo al rol.

// Leer un número, mostrar el doble de n.

// let respuesta = prompt("Escribe un numero");
// document.write("el doble de tu numero es " + respuesta * 2);

// Leer un número, mostrar la mitad de n.

// let respuesta = prompt("Escribe un numero");
// document.write("la mitad de tu numero es " + respuesta * 0.5);

// Leer un número, mostrar si es positivo, negativo o cero.

// let numero = prompt("escribe un numero");
// if (numero == 0) {
//   document.write("tu numero es 0");
// } else {
// }
// if (numero < 0) {
//   document.write("tu numero es negativo");
// } else {
//   document.write("tu numero es positivo");
// }

// Leer un número, mostrar si es par o impar.

// let n = prompt("escribe un numero");
// if (n % 2 === 0) {
//   document.write("tu numero es par");
// } else {
//   document.write("tu numero es impar");
// }

// Leer dos números, mostrar el mayor.

// let n1 = prompt("escribe un numero");
// let n2 = prompt("escribe un numero");
// if (n1 == n2) {
//   document.write("son iguales");
// } else {
//   if (n1 < n2) {
//     document.write("El mayor es " + n2);
//   } else {
//     document.write("El mayor es " + n1);
//   }
// }

// Leer dos números, mostrar operaciones básicas (+,-,x,/,%,cuadrado).

// let n1 = prompt("escribe un numero");
// let n2 = prompt("escribe un numero");
// n1 = Number(n1);
// n2 = Number(n2);
// let suma = n1 + n2;
// let resta = n1 - n2;
// let multipicacion = n1 * n2;
// let divicion = n1 / n2;
// let porcentaje = n1 % n2;
// let potencia = n1 ^ n2;
// document.write("la suma es " + suma);
// document.write(" la resta es " + resta);
// document.write(" la multiplicacion es " + multipicacion);
// document.write(" la divicion es " + divicion);
// document.write(" la porcentaje es " + porcentaje);
// document.write(" la potencia es " + potencia);

// Leer dos números, mostrar la suma dividido en la resta.

let n1 = prompt("escribe un numero");
let n2 = prompt("escribe un numero");
//let operacion = null;
n1 = Number(n1);
n2 = Number(n2);
//operacion = Number(operacion);
document.write((n1 + n2) / (n1 - n2));
