import React, { useState, useEffect } from "react";
import axiosUtil from "../services/axios.js";
import ProductCard from "../components/ProductCard.jsx";
import toast from "react-hot-toast";
import NavBar from "../components/NavBar.jsx";

const HomePage = () => {


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axiosUtil.product.get("/");
        console.log(res.data);
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-base-200">
      {/* Navbar / Header */}
      <NavBar/>


      {/* Products Section */}
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && (
          <div className="text-center text-primary py-10">
            Loading Products..
          </div>
        )}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          !loading && (
            <div className="text-center text-gray-500 py-10">
              No products found
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default HomePage;
