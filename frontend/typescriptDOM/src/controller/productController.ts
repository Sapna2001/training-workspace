import httpClient from "../apiClient/httpClient";
import productView from "../view/productView";

var starRating: number = 0;

async function getProducts() {
  const products = await httpClient.get("http://localhost:4200/products");
  productView.displayProducts(products);
}

function enableEdit(e: any) {
  if (e.target.parentElement.classList.contains("edit")) {
    const id = e.target.parentElement.dataset.id;
    const productName =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .previousElementSibling.textContent;
    const price =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent;
    starRating = e.target.parentElement.previousElementSibling.textContent;

    // Object literal extensions-
    const product = {
      id,
      productName,
      price,
    };
    productView.fillform(product);
  }
}

async function submitProduct() {
  const productName = (<HTMLInputElement>document.querySelector("#productName"))
    .value;
  const price = (<HTMLInputElement>document.querySelector("#price")).value;
  const id = (<HTMLInputElement>document.querySelector("#id")).value;

  const data = {
    productName,
    price,
    id,
    starRating,
  };

  console.log(data);

  if (id) {
    httpClient.update(`http://localhost:4200/products`, data).then((data) => {
      getProducts();
    });
  } else {
    const products = await httpClient.get("http://localhost:4200/products");
    const newId = products.length + 1;
    data.id = newId.toString();
    httpClient.add(`http://localhost:4200/products`, data).then((data) => {
      getProducts();
    });
  }

  productView.originalState();
}

export default {
  getProducts,
  enableEdit,
  submitProduct,
};
