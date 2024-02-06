import { getProducts } from "./api.js";

const printProdcuts = async () => {
  let products = await getProducts();
};

printProdcuts();
