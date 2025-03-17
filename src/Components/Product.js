import '../Styles/Product.css';
import { Link } from 'react-router-dom';
function Product(props) {
  const { product } = props; 

  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-img" />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-description">{product.description}</p>
        <p className="card-price">${product.price}</p>
        <Link to={`/product/${product.id}`} className="btn btn-primary">
            Go to Product Details
        </Link>
      </div>
    </div>
  );
}

export default Product;
