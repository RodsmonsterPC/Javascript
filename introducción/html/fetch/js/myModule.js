const cardGenerator = (imgSrc, titleText, pText, btnText, link) => {
  let divCard = document.createElement("div");
  divCard.classList.add("card");
  let imgCard = document.createElement("img");
  imgCard.classList.add("card-img-top");
  imgCard.src = imgSrc;
  // card body
  let divCardBody = document.createElement("div");
  divCardBody.classList.add("card-body");
  let cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  let pCard = document.createElement("p");
  pCard.classList.add("card-text");
  let btn = document.createElement("a");
  btn.classList.add("btn", "btn-primary");
  // Create content
  cardTitle.innerText = titleText;
  pCard.innerText = pText;
  btn.innerText = btnText;
  btn.setAttribute("href", "btn-primary");
  // Insert content
  divCardBody.append(cardTitle, pCard, btn);
  divCard.append(imgCard, divCardBody);
  return divCard;
};

export { cardGenerator };

/*https://randomuser.me/ 

https://randomuser.me/api/?results=50&inc=gender,name,nat,dob,picture,phone*/
