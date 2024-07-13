import mongoose from "mongoose";

const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://admin:admin@cloudfsd.a40vkra.mongodb.net/fsd?retryWrites=true&w=majority&appName=cloudfsd')
}

export default connectDB 
