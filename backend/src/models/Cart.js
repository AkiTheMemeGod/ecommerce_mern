import mongoose from 'mongoose';


const cartSchema = mongoose.Schema(
    {
        userId : {type: mongoose.Schema.Types.ObjectId, required: true},
        items: [
            {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            qty: {
                type: Number,
                required: true,
                min: 1,
                default: 1
            }
            }
        ]
    }
);

const Cart = mongoose.model("Cart",cartSchema);

export default Cart;