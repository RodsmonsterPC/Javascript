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

/*Ejercicios clase 24/02/2023*/
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

/*ejercicio 1
Crear una función que reciba un array de números y devuelva la suma total de todos los números del array*/
const sumValues = (arrayNumber) => {
  let sum = 0;
  for (let i = 0; i < arrayNumber.length; i++) {
    sum += arrayNumber[i];
  }
  return sum;
};

let sumResult = sumValues(numbers2);

console.log(sumResult);

/* Otra forma */
const numberAdittion = (numberList) => {
  let total = 0;

  for (let i = 0; i < numberList.length; i++) {
    let currentNumber = numberList[i];
    total += currentNumber;
  }
  return total;
};

console.log(numberAdittion(numbers2));
/*Ejercicio 2
Crear una función que reciba un array de strings y devuelva un nuevo array con los strings ordenados alfabéticamente*/

const alfabeticOrder = (orderWords) => {
  let alfabetic = orderWords.sort();

  return alfabetic;
};
let resultOrder = alfabeticOrder(names2);
console.log(resultOrder);

/* Ejercicio 3 
Crear una función que reciba un array de strings y devuelva un nuevo array con los strings invertidos*/

const inverseOrder = (arrayInverse) => {
  let process = arrayInverse.map((wordsReverse) => {
    let separateWords = wordsReverse.split("");

    let inverse = separateWords.reverse();

    let joinReverse = inverse.join("");

    return joinReverse;
  });
  return process;
};
/* Opcion de clase*/
const createReverseString = (stringArray) => {
  let finalArray = [];
  for (let i = 0; i < stringArray.length; i++) {
    let originalWord = stringArray[i];
    let revertedWord = originalWord.split("").reverse().join("");
    finalArray.push(revertedWord);
  }
  return finalArray;
};
let resultReverse = inverseOrder(names2);
console.log(resultReverse);
/* ejercicio 4
Crear una función que reciba un string y me devuelva la cantidad de palabras que existen en ese string*/

const sumWords = (word) => {
  let wordsOrder = word.split(" ");

  let numWords = wordsOrder.length;

  return numWords;
};

let resultWords = sumWords(text);

console.log(resultWords);
/* Ejemplo de clase */
const countOwrdsByBlock = (str) => {
  str.split(" ").length;
  return str;
};

constWordsBySpaces = (str) => {
  let spaceCount = 0;
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    currentChar === " " ? spaceCount++ : null;
  }
  return spaceCount + 1;
};
/*ejercicio 5 
Crear una función que reciba una matriz de nombres y apellidos, y me devuelva un nuevo array con las iniciales de esos nombres
    input:
    [
        ["Israel", "Salinas"],
        ["Charles", "Silva"],
        ["David", "Moranchel"],
        ["Naomi", "López"],
        ["Rose", "Ortega"]
    ]
    output:
    [
        "I.S.",
        "C.S.",
        "D.M.",
        "N.L.",
        "R.O."
    ]*/

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

/* Opcion de clase */

const getAbbreviations = (namesArray) => {
  let resultArray = [];

  for (let i = 0; i < namesArray.length; i++) {
    let firstName = namesArray[i][0];
    let lastName = namesArray[i][1];
    let nameInitial = `${firstName.charAt(0)}. `;
    let lastNameInitial = `${lastName.charAt(0)} `;
    let finalString = `${nameInitial}${lastNameInitial}`;
    console.log("finalString", finalString);
    resultArray.push(finalString);
  }
  return resultArray;
};

let resultArray = getAbbreviations(fullNames);
console.log(resultArray);
let textUpdate = "";
let result = fullNames.map((item) => `${item[0][0]}. ${item[1][0]}`);

let resultUpper = result.join(" ");

console.log(resultUpper);
