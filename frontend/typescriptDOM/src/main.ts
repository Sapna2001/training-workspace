import productController from "./controller/productController";

document.addEventListener("DOMContentLoaded", productController.getProducts);

// Optional Chaining Operator
document
  .querySelector("#products")
  ?.addEventListener("click", productController.enableEdit);

  document
  .querySelector(".product-submit")
  ?.addEventListener("click", productController.submitProduct);