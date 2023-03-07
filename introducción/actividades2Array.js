/* Ejercicio1 
Crear una función que recibe un string y retorna true si la palabra dada es un palíndromo y false si no lo es*/

const polidromo = (word) => {
  let reverseWord = word.split("").reverse().join("");

  let poliWord = word === reverseWord ? true : false;

  return poliWord;
};

let resultPoli = polidromo("helicoptero");

console.log(resultPoli);

/* Ejercicio 2 
Crear una función que recibe un string con varias palabras y cambia a mayúscula la primer letra de cada palabra*/

let text = "hola mundo";

const capitalizeWords = (text) => {
  let selectWords = text.split(" ");

  let result = selectWords.map(
    (item) => `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
  );
  return result.join(" ");
};

let resultCapitalizeWords = capitalizeWords(text);

console.log(resultCapitalizeWords);

/* Ejercicio 3 
Crear una función que recibe un string con multiples palabras y regresa únicamente la palabra mas larga en la oración*/

let textLargest = "helicoptero libros carros";

const largestString = (text) => {
  let separateWords = text.split(" ");

  let searchWord = separateWords.map((index) => {
    return {
      longitud: index.length,
      palabra: index,
    };
  });

  searchWord.sort((a, b) => (a.longitud > b.longitud ? 1 : -1));
  return searchWord.pop().palabra;
};

let resultLargestString = largestString(textLargest);

console.log(resultLargestString);

/* Ejercicio 4 
Crear una función que recibe 2 argumentos una cadena de texto y un carácter, la función regresa un número que representa el número de veces que se repite el carácter en la cadena dada*/

let text3 = "escopeta";
let caracter = "a";

const countWords = (text) => {
  let caracterCount = 0;
  for (let i = 0; i < text.length; i++) {
    let currentChar = text[i];
    currentChar === caracter ? caracterCount++ : null;
  }
  return caracterCount;
};

let resultCount = countWords(text3);

console.log(resultCount);
