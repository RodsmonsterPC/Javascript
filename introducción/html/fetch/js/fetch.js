import { text } from "./myModule";
import createDom from "./exportDefault";
document.write(text);

const addCard = () => {
  let wrapper = document.getElementById("card-wrapper");

  wrapper.appendChild(
    createDom.createCard(
      "https://picsum.photos/200",
      "Card desde módulo",
      "lorem",
      "click me",
      "https://picsum.photos/"
    )
  );
};
