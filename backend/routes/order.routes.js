import express from 'express'


const router = express.Router();
import placeOrder from "../controllers/order.controller.js"

router.post("/order", placeOrder);

export default router
