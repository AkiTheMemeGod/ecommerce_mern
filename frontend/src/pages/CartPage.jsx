
import CartTile from "../components/CartTile";
import getUserIdFromToken from "../services/jwt_util.js";
import {useState, useEffect} from 'react';
import axiosUtil from '../services/axios.js';
import toast from "react-hot-toast";
const CartPage = () => {
  const [cart, setCart] = useState(null);
  const userId = getUserIdFromToken();
  const handleCheckout = async() => {
    try {
    const res = await axiosUtil.order.post("/checkout",{
      "userId" : getUserIdFromToken(),
      "items" : cart.items})
    toast.success("Successfully placed Order");

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const fetchCart = async () => {
      if (!userId) return;
      const res = await axiosUtil.cart.get(`/${userId}`);
      const cartData = res.data;
      if (!cartData || !cartData.items || cartData.items.length === 0) {
        setCart(cartData);
        return;
      }
      // Fetch product details for each item
      const productPromises = cartData.items.map(item =>
        axiosUtil.product.get(`/view/${item.productId}`).then(res => res.data)
      );
      const products = await Promise.all(productPromises);
      // Merge product details into cart items
      const mergedItems = cartData.items.map((item, idx) => ({
        ...item,
        ...products[idx]
      }));
      setCart({ ...cartData, items: mergedItems });
    };
    fetchCart();
  }, [userId]);

  const handleQtyChange = async (productId, qty) => {
    await axiosUtil.cart.put(`/update/${productId}`, { userId, qty });
    setCart((prev) => ({
      ...prev,
      items: prev.items.map((item) =>
        item.productId === productId ? { ...item, qty } : item
      ),
    }));
  };

  const handleRemove = async (productId) => {
    await axiosUtil.cart.delete(`/delete/${productId}`, { data: { userId } });
    setCart((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.productId !== productId),
    }));
  };

  if (!cart || !cart.items || cart.items.length === 0) {
    return <div className="p-8 text-center">Your cart is empty.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="flex flex-col gap-2">
        {cart.items.map((item) => (
          <CartTile
            key={item.productId}
            item={item}
            onQtyChange={handleQtyChange}
            onRemove={handleRemove}
          />
        ))}
      </div>
      <button className="btn btn-accent" onClick={handleCheckout}>Checkout Order</button>
    </div>
  );
};

export default CartPage;