// /* Sujeto, condicción, acción*/

// let element = document.querySelector("#my-button");

// // otra forma let element = document.getElementById("my-button");

// element.addEventListener("click", () => {
//   alert("Hola koders");
// });

// let firstInput = document.getElementById("first-input");

// firstInput.addEventListener("keyup", () => {
//   console.log("escribiendo");
// });
// firstInput.addEventListener("keyup", (event) => {
//   let text = event.target.name;
//   console.log(text);
//   let title = document.querySelector("#title");
//   title.innerText = text;
// });
// let checkBox = document.querySelectorAll(".my-checkbox");
// /*Otra forma querySelectorAll("#checkbox-warapper input")*/

// checkBox.forEach((element) => {
//   element.addEventListener("change", () => {
//     console.log("cambiando");
//   });
// });

// JSON.stringify(object);

/* https://github.com/Israel2709/24js */

let inputInfo = document.querySelectorAll(".form-control");

inputInfo.forEach((element) => {
  let textInput = event.target.element.value;
  let inputName = event.target.element.name;

  console.log();

  console.log(textInput);
});
