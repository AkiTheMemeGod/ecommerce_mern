import Product from "../models/Product.js";

export async function addItem_Product(req, res){
    try{
        const {name, description, Price, category, stock, imageUrl} = req.body
        const newProduct = new Product({name, description, Price, category, stock, imageUrl})
        await newProduct.save()
        res.status(201).json({"message": "Product created", prodcut: newProduct})
    }   
    catch(error){
        console.error("Error Adding Product:", error);
        res.status(500).json({"message": "Server error"});
    }
}

export async function deleteItem_Product(req, res){
    try{
        const deletedProduct = await Product.findByIdAndDelete(req.params.id)
        if (!deletedProduct) return res.status(404).json({"message": "Product not found"})
        res.status(200).json({"message": "Product Deleted", deletedProduct: Product})
    }
    catch(error){
        console.error("Error Deleting Product:", error);
        res.status(500).json({"message": "Server error"});
    }
}

export async function updateItem_Product(req, res){
    try{
        const {name, description, Price, category, stock, imageUrl} = req.body
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {name, description, Price, category, stock, imageUrl},
            {
            new: true,
        }
        );
        if(!updatedProduct) return res.status(404).json({"message": "Product not found"})
        res.status(200).json({"message": "Product updated", updatedProduct: Product})
    }
    catch(error){
        console.error("Error updating Product:", error);
        res.status(500).json({"message": "Server error"});
    }
}

export async function getItems_Product(req, res){
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.log("Error Fetching all the Products ", error);
        res.status(500).json({"message" : "Error Fetching Products"});
    }
}

export async function getItem_Product(req, res){
    try {
        const _id = req.params.id
        console.log(_id)
        const product = await Product.findOne({_id});
        res.status(200).json(product);
    } catch (error) {
        console.log("Error Fetching all the Products ", error);
        res.status(500).json({"message" : "Error Fetching Products"});
    }
}
