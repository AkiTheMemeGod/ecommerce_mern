import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/Product.js";
import products from "./product.js";

dotenv.config("./");

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log("MongoDB connected");
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("Products seeded!");
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
