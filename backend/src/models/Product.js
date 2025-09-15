import mongoose from 'mongoose';


const productSchema = mongoose.Schema(
    {
        name : {type:String, required: true},
        description : {type: String, required: true},
        Price : {type:Number, required: true},
        category : {type:String, required: true},
        stock : {type:String, required: true},
        imageUrl : {type:String, required: true},
    }
);

const Product = mongoose.model("Product",productSchema);

export default Product;