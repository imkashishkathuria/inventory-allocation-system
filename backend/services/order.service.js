import mongoose from "mongoose";
import productRepo from "../repositories/product.repository"
import orderRepo from "../repositories/order.repository"


const placeOrder = async ({ productId, quantity }) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const product = await productRepo.deductStock(
      productId,
      quantity,
      session
    );

    if (!product) {
      throw new Error("Insufficient stock");
    }

    await orderRepo.createOrder(
      { productId, quantity, status: "CONFIRMED" },
      session
    );

    await session.commitTransaction();
    return { message: "Order confirmed" };
  } catch (err) {
    await session.abortTransaction();
    throw err;
  } finally {
    session.endSession();
  }
};

export default placeOrder
