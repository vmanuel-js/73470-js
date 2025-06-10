// 1. Hacer un programa que permita ingresar 10 notas de alumno y sacar el promedio
// 2. Modificar para que el usuario primero ingrese la cantidad de alumnos y luego sacar el promedio en base en eso.
// 3. Modificar que siga haciendo lo del punto 2 pero a que a medida de ingresar la nota mencione si esta aprobado o no (>=7)
// 4. Modificar el for del punto 3, pasarlo a while

// Clase 3 - Funciones
// Funciones: Bloque de código reutilizable, procesa datos/información.

// Sintaxis

function pedirNombre(salida) {
  // salida -> string,
  const nombre = prompt("Ingrese un nombre");

  if (salida === "alert") {
    alert(nombre);
  } else {
    console.log(nombre);
  }
}
// Ejecutar una función
pedirNombre();

// -----------------------------------------
function mostrarMensaje(mensaje, mensaje2, mensaje3, mensaje4) {
  console.log(mensaje);
  console.log(mensaje2);
  console.log(mensaje3);
  console.log(mensaje4);
}

// Ejecutar una función
mostrarMensaje("Hola", 2, true, "Adiós");
mostrarMensaje(5, false, "Leonel", 20);

// -----------------------------------------
function sumar(a, b) {
  const resultado = a + b;
  return resultado;
}
sumar(5, 10);

// -----------------------------------------
export function crearAlumno() {
  // pedir datos
  // retorno el alumno con datos
}

function guardarBBDD(alumno) {
  // guarda en la base de datos al alumno
}

const alumno = crearAlumno();
guardarBBDD(alumno);

// -----------------------------------------

function esMayor(numero) {
  // numero 102
  if (numero > 100) {
    return "Es mayor a 100";
  }
  if (numero > 50) {
    return "Es mayor a 50";
  }
  return "Es menor a 50";
}

// -----------------------------------------
// SCOPE
const a = 2; //globales
const b = 3; //glocales

function evaluar() {
  const a = 5; //locales
  const b = 30; //locales
  function mostrar() {
    a = 10;
    b = 50;
    console.log(a, b);
  }
}

evaluar();

// EXPORTAR FUNCIONES A OTRO ARCHIVO

// COMMONJS
module.export = {
  crearAlumno,
};

// ESMODULES

// FUNCIONES ANONIMAS
// const crearAlumno = function () {

// }

// crearAlumno()

// Funcion tipo flecha

// const suma = (a, b) => { return a+b } Lo mismo es
const suma = (a, b) => a + b;
suma(2, 5);




