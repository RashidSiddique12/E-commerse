import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart";
import { textAlign } from "@mui/system";

function Product({ item }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(item));
    }
    

    return (
        <div style={{ width: "250px", border: "1px solid black"}}>
            <Link to={`/products/${item.id}`}>
                <div style={{ height: "300px",overflow: "hidden"  }}>
                    <img src={item.image} width="100px" height="100px"  style={{margin:"40px", marginLeft:"80px"}}/>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                </div>
            </Link>
            <button 
                style={{ marginTop: "20px", marginBottom: "20px", padding: "8px" }}
                onClick={handleAddToCart}
            >
                Add to Cart
            </button>
        </div>
    );
}

export default Product;
