const myfunction = () => {
  let num1 = 10;
  let num2 = 20;
  let result = num1 + num2;
  return result;
};

let suma1 = myfunction();

const myfunction2 = (num1, num2) => {
  let result = num1 + num2;
  return result;
};

let suma2 = myfunction2(45, 33);

let person = {
  name: "israel",
  age: 33,
  email: "israel@kodemia.mx",
};

let result2 = Object.entries(person);

let numbers = [1, 2, 3, 4, 5];

let someNumber = numbers[3];
let ascendingSort = numbers.sort((a, b) => a - b);
console.log(ascendingSort);
let descendingSort = numbers.sort((a, b) => b - a);
console.log(descendingSort);

console.log(someNumber.name);

console.log(numbers.length);

/*Agregae le valor al final del array*/
numbers.push(55);
/*Elimina el utlimo elemento*/
numbers.pop();
/*Elimina el primer elemento*/
numbers.shift();
/*Invierte os valores*/
numbers.reverse();
/*regresa el array como string, pero no modifica el original*/
let joinNumbers = numbers.join();

console.log(joinNumbers);

console.log(numbers);

let names = ["Rods", "Paco", "Miguel", "Ivan", "Ben"];

for (let i = 6; i < 5; i++) {
  console.log(i);
  console.log(names[i]);
}

/*Sort() ordena en el orden alfabetico los elementos */

let koders = [
  {
    name: "Rods",
    score: 10,
  },
  {
    name: "Pedro",
    score: 13,
  },
  {
    name: "Leonardo",
    score: 8,
  },
];

/*split(), toma un string divide el array en base lo que le pongamos espacio vacio o / etc.. */

let koderSort = koders.sort((a, b) => a.score - b.score);

/*Ejercicios*/
let numbers2 = [34, 12, 3, 8, 76];
let names2 = ["Israel", "Charles", "David"];
let text = "La mejor forma de predecir el futuro es creándolo";
let fullNames = [
  ["Israel", "Salinas"],
  ["Charles", "Silva"],
  ["David", "Moranchel"],
  ["Naomi", "López"],
  ["Rose", "Ortega"],
];

/*ejercicio 1*/
const sumValues = (arrayNumber) => {
  let sum = 0;
  for (let i = 0; i < arrayNumber.length; i++) {
    sum += arrayNumber[i];
  }
  return sum;
};

let sumResult = sumValues(numbers2);

console.log(sumResult);
/*Ejercicio 2*/

const alfabeticOrder = (orderWords) => {
  let alfabetic = orderWords.sort();

  return alfabetic;
};
let resultOrder = alfabeticOrder(names2);
console.log(resultOrder);

/* Ejercicio 3 */

const inverseOrder = (arrayInverse) => {
  let process = arrayInverse.map((wordsReverse) => {
    let separateWords = wordsReverse.split("");

    let inverse = separateWords.reverse();

    let joinReverse = inverse.join("");

    return joinReverse;
  });
  return process;
};

let resultReverse = inverseOrder(names2);
console.log(resultReverse);
/* ejercicio 4*/

const sumWords = (word) => {
  let wordsOrder = word.split(" ");

  let numWords = wordsOrder.length;

  return numWords;
};

let resultWords = sumWords(text);

console.log(resultWords);

/*ejercicio 5 */

const inicialWords = (arrayNames) => {
  let firstWord = arrayNames.map((firsLetter) => {
    let inicialLetter = [];

    inicialLetter[firsLetter[0].at(0)] = firsLetter[1].at(0);
    console.log(inicialLetter);

    return inicialLetter;
  });

  return firstWord;
};

let resultInicial = inicialWords(fullNames);

console.log(resultInicial);
