let value1 = 2;
let value2 = 1;

if (value1 > value2) {
  console.log(`${value1} es mayor que ${value2}`);
} else if (value1 === value2) {
  console.log("son iguales");
} else {
  console.log(`${value2} es mayor que ${value1}`);
}

let value3 = "Rodolfo";
let value4 = "Moi";

if (value3.length > value4.length) {
  console.log(`${value3} es más largo que ${value4}`);
} else if (value3.length === value4.length) {
  console.log("Tiene el mismo largo");
} else {
  console.log(`${value4} es más largo`);
}

let value5 = 2;
let value6 = 4;

if (value5 % value6 === 0) {
  console.log(`${value5} es divisible con ${value6}`);
} else {
  console.log("no son divisbles");
}

let value7 = "pablito clavo un clavito";
console.log(value7.length);

switch (value7) {
  case value7.length > 10 && value7.length % 2 === 0:
    console.log("El texto es largo y sus caracters son pares");
    break;

  case value7.length < 10 && value7.length % 2 === 0:
    console.log("El texto es corto y sus caracteres son pares");
    break;
  default:
    console.log("El texto no cumple con alguna especificación");
}
