const introduce = (name) => {
  return `Hola, mi nombre es ${name}`;
};

let primerSaludo = introduce("Rodolfo Pérez Cerecedo");
let segundoSaludo = introduce("Marco Ochoa Martinez");

console.log(primerSaludo);
console.log(segundoSaludo);

const capitalize = (textToCapitalize) => {
  let firstLetter = textToCapitalize.charAt(0);
  let rest = textToCapitalize.substring(1);
  let result = firstLetter.toUpperCase() + rest;
  return result;
};
