// Hacer un programa que permita realizar operaciones matemáticas hasta que el usuario ingrese la palabra ESC
// Calculadora suma, resta, multiplicacion y division

// Ingrese una opcion 1,2,3,4,5
// Pedir 2 números por alert mostrar el resultado
// Volver a preguntar por una opcion

const pedirNumero = () => {
  return parseInt(prompt("Ingrese un número"));
};

const suma = (numero1, numero2) => numero1 + numero2;
const resta = (numero1, numero2) => numero1 - numero2;
const multiplicacion = (numero1, numero2) => numero1 * numero2;
const dividir = (numero1, numero2) => numero1 / numero2;
const menu = `Ingrese un número \n
                1. Sumar
                2. Restar
                3. Multiplicación
                4. Dividir
                5. Salir
`;

function calculadora() {
  let opcion = parseInt(prompt(menu));
  while (opcion !== 5) {
    const numero1 = pedirNumero();
    const numero2 = pedirNumero();
    switch (opcion) {
      case 1:
        alert(suma(numero1, numero2));
        break;
      case 2:
        alert(resta(numero1, numero2));
        break;
      case 3:
        alert(multiplicacion(numero1, numero2));
        break;
      case 4:
        alert(dividir(numero1, numero2));
        break;
      default:
        alert("Numero Incorrecto (1-5)");
        opcion = parseInt(prompt(menu));
        break;
    }
    opcion = parseInt(prompt(menu));
  }
}

calculadora();
