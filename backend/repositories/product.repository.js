import Product from "../models/Product";

const deductStock = (productId, qty, session) => {
  return Product.findOneAndUpdate(
    { _id: productId, stock: { $gte: qty } },
    { $inc: { stock: -qty } },
    { new: true, session }
  );
};
export default deductStock