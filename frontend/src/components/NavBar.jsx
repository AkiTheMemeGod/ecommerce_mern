import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const NavBar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
    localStorage.removeItem("token"); // clear jwt
    navigate("/"); // redirect to login
    toast.success("Logged out successfully");
    };

    const handleViewcart = () => {
    navigate("/viewcart");
    }
  return (
    <div className="w-full bg-base-100 shadow-md px-6 py-4 flex justify-between">
        <h1 className="text-xl font-bold text-primary">My Store 🛍️</h1>
        <button className="btn btn-secondary" onClick={handleViewcart}>View Cart</button>
        <button onClick={handleLogout} className="btn btn-error">
          Logout
        </button>
    </div>
  )
}

export default NavBar