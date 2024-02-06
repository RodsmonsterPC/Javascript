/*url: la direccion o el recurso al que nos queremos conectar (string)
fetch(url, init);
init: objeto de configuración de la petición (objeto) */

let data = {};
let a = "x";
let b = "y";
let result;

// const getKoders = async () => {
//   let response = await fetch(
//     "https://rods-base-default-rtdb.firebaseio.com/koders"
//   );
//   let data = await response.json();
//   return data;
// };

// getKoders().then((data) => {
//   console.log(data);
// });

// let data;
//   fetch("https://rods-base-default-rtdb.firebaseio.com/koders")
//     .then((response) => response.json())
//     .then((json) => (data = json));

// const printData = (data) => {
//   document.write(JSON.stringify(data));
// };

// setTimeout(() => {
//   result = a + b;
// }, 5000);

// setTimeout(() => {
//   console.log(result);
// }, 5001);

const getKoders = async () => {
  let response = await fetch(
    "https://kodemia-24g-default-rtdb.firebaseio.com/koders/.json"
  );
  let data = await response.json();
  return data;
};

const printKoders = async () => {
  let koders = await getKoders();
  //   for (key in koders) {
  //     let heading = document.createElement("h1");
  //     heading.innerText = koders[key].name;

  //     document.body.appendChild(heading);
  //   }

  /*koders={
    koder1: {
        name: "Israel"
    }
}*/

  console.log(Object.keys(koders));
  console.log(Object.values(koders));
  console.log(Object.entries(koders));

  //   let kodersArray = Object.values(koders);

  //   kodersArray.forEach((koder) => {
  //     let heading = document.createElement("h1");
  //     heading.innerText = koder.name;
  //     document.body.appendChild(heading);
  //   });

  let kodersKeyArray = Object.keys(koders);

  kodersKeyArray.forEach((key) => {
    let { name } = koders[key];
    let heading = document.createElement("h1");
    heading.innerText = name;
    document.body.appendChild(heading);
  });
};

const deleteKoder = async (koderKey) => {
  let response = await fetch(
    `https://kodemia-24g-default-rtdb.firebaseio.com/koders/${koderKey}/.json`,
    {
      method: "DELETE",
    }
  );
  let data = await response.json();
  return data;
};

const createKoder = async (koderObject) => {
  let response = await fetch(
    "https://kodemia-24g-default-rtdb.firebaseio.com/koders/.json",
    {
      method: "POST",
      body: JSON.stringify(koderObject),
    }
  );

  let data = await response.json();
  return data;
};

printKoders();

//   getKoders().then((koders) => {
//     let data = document.write(JSON.stringify(koders));

//     let titleInfo = document.createElement("h1");

//     infoData = document.createTextNode(data);

//     titleInfo.appendChild(infoData);

//     document.getElementsByClassName("koder-wrapper").appendChild(titleInfo);
//   });
