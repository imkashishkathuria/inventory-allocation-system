import service from "../services/order.service.js"

const placeOrderController = async (req, res) => {
  try {
    const result = await service.placeOrder(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
export default placeOrderController
