import express from 'express';
import { save_cart_order, fetch_order_history } from '../controllers/orderControllers.js';

const router = express.Router();

router.post("/checkout",save_cart_order);
router.get("/history",fetch_order_history);


export default router;