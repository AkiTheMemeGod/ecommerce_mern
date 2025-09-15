import Cart from "../models/Cart.js";

export async function addItem_Cart(req, res) {
    try {
        const userId = req.body.userId;
        const productId = req.params.id;
        const qty = req.body.qty || 1;

        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = new Cart({ userId, items: [{ productId, qty }] });
        } else {
            const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
            if (itemIndex > -1) {
                cart.items[itemIndex].qty += qty;
            } else {
                cart.items.push({ productId, qty });
            }
        }
        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: "Error adding item to cart", error });
    }
}
export async function deleteItem_Cart(req, res) {
    try {
        const userId = req.body.userId;
        const productId = req.params.id;

        const cart = await Cart.findOne({ userId });
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        cart.items = cart.items.filter(item => item.productId.toString() !== productId);
        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: "Error deleting item from cart", error });
    }
}

export async function updateItem_Cart(req, res) {
    try {
        const userId = req.body.userId;
        const productId = req.params.id;
        const qty = req.body.qty;

        const cart = await Cart.findOne({ userId });
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        const item = cart.items.find(item => item.productId.toString() === productId);
        if (item) {
            item.qty = qty;
            await cart.save();
            res.status(200).json(cart);
        } else {
            res.status(404).json({ message: "Item not found in cart" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating item in cart", error });
    }
}

export async function getItems_Cart(req, res){
    try {
        const cart_items = await Cart.find();
        res.status(200).json(cart_items);
    } catch (error) {
        console.log("Error Fetching Items in the cart ", error);
        res.status(500).json({"message" : "Error Fetching Items"});
    }
}
