let student = {
  name: "Israel",
  lastName: "Salinas Martinez",
  age: 33,
};

const getObjectValue = (property) => {
  console.log(student[property]);
};

getObjectValue("name");
getObjectValue("lastName");
getObjectValue("score");

let date1 = new Date("09/27/1989").getTime();
let date2 = new Date("01/23/1993").getTime();
let currentDate = Date.now();

const compareDates = (firstDate, secondDate) => {
  let dateDiff = firstDate - secondDate;
  let dateDiffInMonths = dateDiff / (1000 * 60 * 60 * 24 * 30.5);
  let daysComplement = dateDiffInMonths - Math.trunc(dateDiffInMonths);
  let days = Math.floor(daysComplement * 30.5);

  return dateDiff < 0
    ? `Han pasado ${Math.floor(
        daysComplement * 3.5
      )} meses y ${days} dias desde tu cumpleaños`
    : `faltan ${dateDiffInMonths} Meses y ${days} dias para tu cumpleaños`;
};

let resultBirth = compareDates(date1, currentDate);
console.log(resultBirth);
