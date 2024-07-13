import express from "express";
import products from "../model/products.js";

const router = express.Router();

router.get("/api/products", (req, res) => {
  res.json(products);
});

router.post("/api/products", (req, res) => {
  const newProduct = req.body;

  if (!newProduct.productName && !newProduct.price) {
    res.status(400).json({ msg: "Product name or Price is mandatory" });
  }

  products.push(newProduct);
  res.json(products);
});

router.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const exists = products.some((product) => product.productId == +id);

  if (exists) {
    const product = products.filter((product) => product.productId == +id)[0];

    res.status(200).json(product);
  } else {
    res
      .status(400)
      .json({ msg: `Product with the product id : ${id} does not exist` });
  }
});

router.delete("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const exists = products.some((product) => product.productId == +id);
  const index = products.findIndex((product) => product.productId === +id);

  if (exists) {
    products.splice(index, 1);
    // products = products.filter(product => product => product.productId !== +id)
    res.status(200).json({
      msg: `Product with the product id : ${id} deleted`,
      products: products,
    });
  } else {
    res
      .status(400)
      .json({ msg: `Product with the product id : ${id} does not exist` });
  }
});

// router.put("/api/products/:id", (req, res) => {
//   const id = req.params.id;
//   const exists = products.some((product) => product.productId == +id);
//   const index = products.findIndex((product) => product.productId === +id);

//   if (exists) {
//     const updatedProduct = req.body;
//     products[index] = updatedProduct;
//     res.status(200).send("Product updated");
//   } else {
//     res
//       .status(400)
//       .json({ msg: `Product with the product id : ${id} does not exist` });
//   }
// });

router.put("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const exists = products.some((product) => product.productId == +id);

  if (exists) {
    const product = products.find((product) => product.productId === +id);
    const { productName, price } = req.body;
    product.productName = productName || product.productName;
    product.price = price || product.price;
    res.status(200).json({msg : "Product updated", products: products});
  } else {
    res
      .status(400)
      .json({ msg: `Product with the product id : ${id} does not exist` });
  }
});

export default router;
