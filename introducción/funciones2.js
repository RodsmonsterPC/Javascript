/*Crear una función que nos retorne true si un número es par y false si no lo es */

const isEven = (num) => {
  return num % 2 === 0 ? true : false;
};

let result1 = isEven(7);
let result2 = isEven(4);

console.log(result1);
console.log(result2);

let person = {
  /*propiedad*/ name: "israel",
  age: 33,
  /*Metodo*/ greeting: () => console.log("hola, soy Rods"),
};

console.log(person.name);

console.log(person.age);

console.log(person.greeting());

/*toLowerCase*/

// Ejercicio 1

const getFirstAndLastChar = (name) => {
  return "${name.charAt(0)}${name.charAt(name.length-1)}";
};

let result3 = getFirstAndLastChar("paricutin");
console.log(result1);

/* 5.- Ejercicio */

const getDivision = (num1, num2) => {
  return num1 / num2;
};

let result4 = getDivision(3, 6);

console.log(result3);

/* 6.- Ejercicio */

const aritmeticOperation = (operation, num1, num2) => {
  switch (operation) {
    case "suma":
      let resultSum = num1 + num2;
      console.log(`El resultado de la suma es: ${resultSum}`);
      break;
    case "resta":
      let resultRes = num1 - num2;
      console.log(`El resultado de la resta es: ${resultRes}`);

      break;

    case "multiplicación":
      let resultMult = num1 * num2;
      console.log(`El resultado de la multiplicación es: ${resultMult}`);
      break;

    case "división":
      let resultDiv = num1 / num2;
      console.log(`El resultado de la división es: ${resultDiv}`);
      break;
    default:
      console.log("Escriba entre suma, resta, multiplicación o división");
  }
};

let resultOperation = aritmeticOperation("división", 3, 4);

/* crear una funcion que reciba un nombre y nos entregue la letra inicial */
const getFirstCharacter = (name) => {
  return name.charAt(0);
};

let result = getFirstCharacter("Rodolfo");

console.log(result);
