import mongoose, { Schema } from "mongoose";

const userModel = new Schema(
  {
    name: { type: String, required: [true, "Please add a username"] },
    email: { type: String, required: [true, "Please add an email"] },
    password: { type: String, required: [true, "Please add a password"] },
    isAdmin: {type: Boolean, required: true, default: false}
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("User", userModel); 
