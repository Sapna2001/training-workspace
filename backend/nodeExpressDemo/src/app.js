import express from "express";
import productRoutes from "./router/productRoutes.js";

const app = express()

// Parsing the json data
app.use(express.json())

// URL ending with /ibm will be redirected to productRoutes
app.use("/ibm", productRoutes)

app.listen(9999, () => console.log("Server started"))