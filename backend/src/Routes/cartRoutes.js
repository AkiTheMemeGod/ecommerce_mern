import express from 'express';
import {getItems_Cart, addItem_Cart, deleteItem_Cart, updateItem_Cart} from '../controllers/cartControllers.js';

const router = express.Router()

router.get("/:id",getItems_Cart)
router.post("/add/:id",addItem_Cart)
router.delete("/delete/:id",deleteItem_Cart)
router.put("/update/:id",updateItem_Cart)

export default router;