import { Link } from "react-router-dom"
import toast from "react-hot-toast";
import axiosUtil from '../services/axios.js'
import { getUserIdFromToken } from "../services/jwt_util.js";


const ProductCard = ({product}) => {

  const handleAddToCart = async () => {
    try{
      const res = await axiosUtil.cart.post(`/add/${product._id}`,{
        "userId": getUserIdFromToken(),
      })
      console.log(res)
      toast.success("Added To Cart Successfully");
  }

  catch(error){
    console.error(error)
  }
}


  return (
  <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={product.imageUrl}
      alt={product.name} />
    </figure>
    <div className="card-body">
    <h2 className="card-title">{product.name}</h2>
    <p>{product.description}</p>
    <div className="card-actions justify-between">
      <h3 className='card-title'>Rs.{product.Price}/- only</h3>
      <Link to={`/product/${product._id}`}>View Details</Link>
      <button className="btn btn-primary" onClick={handleAddToCart}>Add To Cart</button>

      
    </div>
  </div>
</div>
  )
}

export default ProductCard