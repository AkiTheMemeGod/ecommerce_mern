import express from 'express';
import { addItem_Product, deleteItem_Product, getItems_Product, updateItem_Product } from '../controllers/productsControllers.js';

const router = express.Router()

router.get("/",getItems_Product)
router.post("/add",addItem_Product)
router.delete("/delete/:id",deleteItem_Product)
router.put("/update/:id",updateItem_Product)

export default router;