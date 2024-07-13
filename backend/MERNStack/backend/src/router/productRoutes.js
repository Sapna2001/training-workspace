import express from 'express'
import productApi from '../controller/productController.js'
import secure from '../middleware/authMiddleware.js'

const {getProducts,getProductById,getProductByProductId,createProduct,updateProduct,deleteProduct}=productApi
const router = express.Router()
router.route('/').get(secure, getProducts).post(secure,createProduct)
router.route('/:id').get(secure,getProductById).put(secure,updateProduct).delete(secure,deleteProduct)
router.route('/pid/:id').get(secure,getProductByProductId)


export default router


