const simpleSucces = () => "El string es valido";
const simpleError = () => "El string no es valido";

const mediumError = (word, miniumLength) => {
  return `El string no es válido, te faltan ${
    miniumLength - word.length
  } caracteres`;
};

const evaluateString = (strEval, success, error) => {
  let strLenght = strEval.strLenght;
  return strLenght < 10 ? error(strEval, 10) : success();
};

let result1 = evaluateString("Rodolfo", simpleSucces, simpleError);

let result2 = evaluateString("Rodolfo", simpleSucces, mediumError);

console.log(result1);

/* Ejercicio - Gelatina*/
const waterBoiling = () => console.log("El agua esta hirviendo");
const addJelly = () => console.log("El sobre esta vertido");
const jellyCooler = () => console.log("La mezcla esta enfriandose");
const eatJelly = () => console.log("Ya puedes comer tu gelatina");

const makeJelly = (cb1, cb2, cb3, cb4) => {
  cb1();
  cb2();
  cb3();
  cb4();
};

let resultJelly = makeJelly(
  setTimeout(waterBoiling, 5000),
  setTimeout(addJelly, 10000),
  setTimeout(jellyCooler, 15000),
  setTimeout(eatJelly, 20000)
);

console.log(resultJelly);

/* Ejercicio - saludar o despedida */

const namePerson = "Rodolfo";

const hiMessage = (name) => console.log(`Hola buen dia ${name}`);

const byMessage = (name) => console.log(`Adios buena noche ${name}`);

/*timeday : "dia" || "noche"*/
const timeOfDay = (nameMessage, dayMessage, nightMessage, timeDay) => {
  timeDay === "dia" ? dayMessage(nameMessage) : nightMessage(nameMessage);
};

let resultDay = timeOfDay(namePerson, hiMessage, byMessage, "dia");
let resultNight = timeOfDay(namePerson, hiMessage, byMessage, "noche");
