/*Métodos para crear elementos en javascript*/

// let paragraph = document.createElement("p");
// let div = document.createElement("div");
// let h1 = document.createElement("h1");

// let parargaphContent = document.createTextNode("Hola mundo!!");
// console.log(parargaphContent);

// parentNode.appendChild(child);

// paragraph.appendChild(parargaphContent);

// document.body.appendChild(paragraph);

// console.log(paragraph);
// console.log(div);
// console.log(h1);

let koders = [
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
    name: "Iyari",
    birthDate: "09/26/1997",
  },
  {
    name: "Manu",
    birthDate: "11/21/1986",
  },
  {
    name: "Antonio",
    birthDate: "07/23/1993",
  },
  {
    name: "Rafa",
    birthDate: "03/11/1997",
  },
  {
    name: "Eddie",
    birthDate: "11/05/1997",
  },
  {
    name: "Jesús",
    birthDate: "11/04/2000",
  },
  {
    name: "Mar",
    birthDate: "12/18/1994",
  },
  {
    name: "Roberto",
    birthDate: "01/14/1985",
  },
  {
    name: "Javi",
    birthDate: "12/07/1993",
  },
  {
    name: "Mario",
    birthDate: "11/02/1999",
  },
];

/*querySelector("#koders-list")
 me va entregar el primer elemento que tenga coincidencia, por lo que es mejor para los id, porque solo entrega el primero no más.

 querySelectorAll(".some-class")
 Entrega todos los elementos con la coincidencia y entrega una NodeList

 document.createElement(tagname) => crea un elemento tagname que indique en el argumento
 
 document.createTextNode(Text) => crea un node de texto con el contenido indicido en el argumento

 element.appendChild(child) => inserta un elemento (child) a un elemento padre(element)

 document.getElementById(id) => selecciona, el elemento de DOM cuyo id coincida con el id que se use de argumento, devuelve un elemento
 de dom

 docuemnt.getElementByClassName(classname) => selecciona todos los elementos de DOM que incluyan "classname" en una lista de clases,
 devuelve una HTMLCollection

 docuemnte.querySelector(cssSelector) => selecciona el primer elemento que coincida con el selector de CSS proporciona, devuelve
 un elemento

 document.querySelectorAll(cssSelector) => selecciona todos los elementos que coincidan con el selector, devuelve una NodeList
*/

// const createKoderList = (kodersArray) => {
//   let koderList = document.getElementById("koders-list");
//   kodersArray.innerHTML = "";
//   kodersArray.forEach((koder) => {
//     let { name } = koder;
//     let koderLi = document.createElement("li");
//     let koderText = document.createTextNode(name);
//     koderLi.appendChild(koderText);
//     console.log(koderLi);

//     koderList.appendChild(koderLi);
//   });
// };

// createKoderList(koders);

// let addKoder = (koderObject) => {
//   koders.push(koderObject);
//   console.log(koders);
//   createKoderList(koders);
// };

// addKoder({ name: "Charles", birthDate: "12/18/1993" });

const kodersBirth = (arrayKoders) => {
  let currentDate = Date.now();
  let koderList = document.getElementById("koders-list");
  arrayKoders.forEach((age) => {
    let dateDiff = new Date(age.birthDate).getTime();
    -currentDate;
    let dateDiffMonths = dateDiff / (1000 * 60 * 60 * 24 * 30.5);
    let daysComplement = dateDiffMonths - Math.trunc(dateDiffMonths);
    let days = Math.floor(daysComplement * 30.5);
    let result =
      dateDiff < 0
        ? `Han pasado ${Math.floor(
            daysComplement * 3.5
          )} meses y ${days} dias desde tu cumpleaños`
        : dateDiff === 0
        ? `Feliz cumpleaños`
        : `Faltan ${Math.floor(
            dateDiffMonths / 30.5
          )} Meses y ${days} dias para tu cumpleaños`;
    let birthList = document.createElement("li");
    let dateText = document.createTextNode(result);
    birthList.appendChild(dateText);
    birthList.classList.add(`list-group-item`, `list-group-item-dark`);
    koderList.appendChild(birthList);
  });

  return;
};

kodersBirth(koders);
