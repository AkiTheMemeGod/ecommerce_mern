import { Link } from "react-router-dom"

const ProductCard = ({product}) => {
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
      <Link to={`/product/${product._id}`}>
      <button className="btn btn-secondary">View Details</button>
      </Link>
      <button className="btn btn-primary">Add To Cart</button>

      
    </div>
  </div>
</div>
  )
}

export default ProductCard