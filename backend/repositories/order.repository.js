import Order from '../models/Order.js'

const createOrder = (data, session) => {
  return Order.create([data], { session });
};

export default {createOrder}
