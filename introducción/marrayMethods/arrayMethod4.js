const koders = [
  {
    name: "Isra",
    birthDate: "09/27/1989",
  },
  {
    name: "Rodolfo",
    birthDate: "11/27/1998",
  },
  {
    name: "Kim",
    birthDate: "11/15/1996",
  },
  {
    name: "Kim",
    birthDate: "09/26/1997",
  },
  {
    name: "Manu",
    birthDate: "11/21/1986",
  },
  {
    name: "Jesus",
    birthDate: "11/04/2000",
  },
];

// const differenceBirth = (arrayBirth) => {
//   let datesMiliseconds = arrayBirth.map((date) => {
//     parseInt(date.birthDate.split(`/`)[2]);
//   });
//   console.log(datesMiliseconds);
//   let ageDifference =
//     Math.max(...datesMiliseconds) - Math.min(...datesMiliseconds);
//   console.log(ageDifference);
//   return ageDifference;
// };

// let resultBirth = differenceBirth(koders);
// console.log(
//   `La diferencia de edad entre el Koder más joven y el más experimentado es de ${resultBirth}`
// );

const differenceBirth = (arrayBirth) => {
  let MaxYear = arrayBirth.sort(
    (a, b) => Date.parse(a.birthDate) - Date.parse(b.birthDate)
  );
  let youngKoder = MaxYear[0].birthDate
    .replace("/", " ")
    .replace("/", " ")
    .split(" ");
  let olderKoder = MaxYear[MaxYear.length - 1].birthDate
    .replace("/", " ")
    .replace("/", " ")
    .split(" ");
  let result = olderKoder[2] - youngKoder[2];
  return result;
};

let result = differenceBirth(koders);
console.log(
  `La diferencia de edad del koder más joven al mmayor es de ${result}`
);
