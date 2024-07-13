import mongoose,{Schema} from "mongoose"
const productModel=new Schema({
    productName: {type:String},
      price: {type:Number},
      starRating:{type:Number},
      productId: {type:Number},
      productAvailable:{type:String},
      productCode:{type:String},
      imageUrl: {type:String}     
},
{
    timestamps:true
},
)
export default mongoose.model('product',productModel) //mapping or decorating