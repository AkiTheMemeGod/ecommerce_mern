import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import cartRoutes from './Routes/cartRoutes.js';
import authRoutes from './Routes/authRoutes.js'
import productRoutes from './Routes/productRoutes.js';
import orderRoutes from './Routes/orderRoutes.js';
import connectDB from './config/db.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());

app.use("/api/cart", cartRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/order", orderRoutes);

//app.use("/api/orders", orderRoutes);


connectDB().then(()=>{
app.listen(5001, () => {
        console.log("Server is running on port: ", 5001);
});
});