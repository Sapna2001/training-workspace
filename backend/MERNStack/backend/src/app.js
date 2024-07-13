import express from "express"
import productRoutes from "./router/productRoutes.js"
import userRoutes from "./router/userRoutes.js"
import connectDB from "./config/dbConfig.js"
import errorHandler from "./middleware/errorMiddleware.js"
import cors from 'cors'
const app = express()
app.use(cors())

connectDB()
app.use(express.json()) //configuring middleware 
// app.use(express.urlencoded({extended:false}))
app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)
app.use(errorHandler)

app.listen(9999,()=>console.log('server started'))
