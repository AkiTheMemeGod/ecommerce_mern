import mongoose from 'mongoose';


const orderSchema = mongoose.Schema(
    {
        userId : {type: mongoose.Schema.Types.ObjectId, required: true},
        items: [
          {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
            qty: { type: Number, required: true }
          }
        ],
        total : {type:Number, required: true},

    },
    { timestamps: true }
);

const Order = mongoose.model("Order",orderSchema);

export default Order;