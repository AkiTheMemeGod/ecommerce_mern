import Product from "../models/Product.js";
import Order from "../models/Order.js";

export async function save_cart_order(req, res){
    try{
        const {userId, items} = req.body;
        let total = 0;
        console.log(items);

        for (const item of items){
            console.log(item);
            const product = await Product.findById(item.productId);
            if (!product){
                return res.status(404).json({"message" : "Product not Found in the DB"});
                }
            total += product.Price * item.qty;
        }
        const order = new Order({
            userId,
            items,
            total
        });
        await order.save();
        res.status(201).json(order);
    }
    catch(error){
        console.log(error);
        res.status(500).json({"message" : "Error Creating Order", error});
    }
}

export async function fetch_order_history(res, req){
    
}