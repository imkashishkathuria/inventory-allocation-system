import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  stock: Number,
});

export default mongoose.model("Product", productSchema);
