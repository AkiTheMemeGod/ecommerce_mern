import Cart from "../models/Cart.js";

export async function addItem_Cart(req, res){

    //console.log("Item Added");
}

export async function deleteItem_Cart(req, res){
    console.log("Item Deleted");
}

export async function updateItem_Cart(req, res){
    console.log("Item Updated");
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
