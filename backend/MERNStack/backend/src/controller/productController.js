import Product from '../model/productModel.js'
import asyncHandler from 'express-async-handler'

const getProducts = asyncHandler(async(req,res)=>{
    const products=await Product.find()
    res.status(200).json(products)
})

const getProductById = asyncHandler(async(req,res)=>{
    const id = req.params.id
    const products=await Product.findById(id)
    if(!products){
        throw new Error(`Product id ${id} not found`)
    }
    res.status(200).json(products)
})

const getProductByProductId = asyncHandler(async(req,res)=>{
    const id = req.params.id
    const products=await Product.findOne({"productId":id})
    if(!products){
        throw new Error(`Product id ${id} not found`)
    }
    res.status(200).json(products)
})

const createProduct = asyncHandler(async(req,res)=>{
    const {productName,price,starRating,productId,ImageUrl,ProductAvailable} = req.body
    if(!productName || !price || !productId){
        throw new Error(`Please provide product details`)
    }
    const products=await Product.create({productName,price,starRating,productId,ImageUrl,ProductAvailable})
    res.status(201).json(products)
})
const updateProduct = asyncHandler(async(req,res)=>{
    const id = req.params.id
    const products=await Product.findByIdAndUpdate(id,req.body)
    if(!products){
        throw new Error(`Please provide the correct details to update the product`)
    }
    res.status(201).json(products)
})
const deleteProduct = asyncHandler(async(req,res)=>{
    const id = req.params.id
    // const products=await Product.deleteOne({"productId":id})
    const result =await Product.findById(id)
    if(!result){
        res.status(404)
        throw new Error(`Product with id ${id} deletion failed `)
    }
    await Product.findByIdAndDelete(id)
    res.status(200).json({msg:`Product removed with id ${id}`})
    
})

export default {getProducts,getProductById,getProductByProductId,createProduct,updateProduct,deleteProduct};