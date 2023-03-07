// const firstStep = (cb2, cb3, cb4) => {
//   console.log(`Poner cimientos`);

//   setTimeout(function () {
//     cb2(cb3, cb4);
//   }, 1500);
// };

// const secondPart = (cb3, cb4) => {
//   console.log(`Poner loza`);

//   setTimeout(function () {
//     cb3(cb4);
//   }, 2000);
// };

// const thirdPart = (cb4) => {
//   console.log(`Pintarla`);

//   setTimeout(function () {
//     cb4();
//   }, 4000);
// };
// const fourthPart = () => console.log(`Open House`);

// const makeHouse = (cb1, cb2, cb3, cb4) => {
//   setTimeout(function () {
//     cb1(cb2, cb3, cb4);
//   }, 3000);
// };

// let resultHouse = makeHouse(firstStep, secondPart, thirdPart, fourthPart);

// console.log(resultHouse);

/* Ejercicio 
let carsArray =[
  {
    name: "Toledo",
    branch: "Seat",
    year: "2017",
    hp: 125,
    price: 300000,
    presentation: () => {
      console.log("Seat Toledo por tan sólo $300,000 MXN!!!");
    },
  }
] ;
  1.- ejecutar la presentación de cada auto en el array
  2.- Crear una función que me permita saber el pago mensual para cada carro ( debe permitirnos indicar los meses a pagar)*/

let carsArray = [
  {
    name: "Toledo",
    branch: "Seat",
    year: "2017",
    hp: 125,
    price: 300000,
    presentation: () => {
      console.log("Seat Toledo por tan sólo $300,000 MXN!!!");
    },
  },
  {
    name: "mini Coupé",
    branch: "ferrari",
    year: "2022",
    hp: 150,
    price: 900000,
    presentation: () => {
      console.log("ferrari mini Copper por tan sólo $900,000 MXN!!!");
    },
  },
  {
    name: "Odyssey",
    branch: "Honda",
    year: "2019",
    hp: 145,
    price: 450000,
    presentation: () => {
      console.log("Odyssey Honda por tan sólo $450,000 MXN!!!");
    },
  },
];

const presentationCars = (presentation) => {
  presentation.forEach((item) => {
    item.presentation();
  });
};

let result = presentationCars(carsArray);

const payments = (pay, months) => {
  pay.forEach((car) => {
    let monthlyPayment = car.price / months;
    console.log(
      `El pago mensual de ${car.name} es ${monthlyPayment} por ${months} meses`
    );
  });
};

let resultPay = payments(carsArray, 6);
