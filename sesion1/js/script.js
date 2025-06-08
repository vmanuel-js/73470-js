// VARIABLES = Un espacio de memoria donde se guarda información.

const nombre = "Juan D' Alesandro";
//  Tipo de variable const -> no se puede cambiar el valor
//  nombre -> alias del espacio de memoria
//  "Juan" -> cadena de caracteres o string

const edad = 20; // number -> tipo de dato numérico
const esEstudiante = false; // boolean -> true o false

let apellido = "D' Alesandro"; // let -> se puede cambiar el valor en el tiempo
console.log(apellido);
apellido = "Villajuan";
console.log(apellido);

console.log(edad);

const cumple = 1;

const actual = edad + cumple;

console.log(actual);
console.log(edad);

// alert("Hola Mundo");

const respuestaUsuario = prompt("¿Cuál es tu nombre?"); // cuando una function devuelve un valor, lo hace de derecha a izquierda
// console.log(respuestaUsuario);

const saludo = "Hola, tu nombre ingresado es: " + respuestaUsuario;
console.log(saludo);
