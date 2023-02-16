import { useDispatch, useSelector } from "react-redux";
import './pageStyle.css';
import { removeItemFromCart } from "../features/cart";
import { Link } from "react-router-dom";

function CartPage() {
    const cartProducts = useSelector((store) => store.cart.value);
    const dispatch = useDispatch();

    let totalProductPrice = 0;

    cartProducts.forEach((currProduct)=>{
          totalProductPrice += currProduct.price * currProduct.qty;
    });
    totalProductPrice  = totalProductPrice.toFixed(2);
    
    
    const handleRemoveProduct =(productId)=>{
        dispatch(removeItemFromCart(productId));

    }
     

    return (
        <div>
            <h2 style={{display:"flex"}}>Cart Page</h2>
            <Link to="/"><p style={{backgroundColor:"#D23F57", width:"147px", padding:"3px 8px", borderRadius:"5px", color:"white", fontWeight:"bold",display:"flex", float:"right", marginTop:"-30px" }}>Go to home page</p></Link>
       
            <div>
                {cartProducts.map((product) => (
                    <div style={{border:"1px solid black", height:"300px", display:"flex"}} >
                        <img src={product.image} style={{width:"160px", height:"160px", margin:"30px"}} />
                       <div style={{margin:"30px"}}>
                       <h4>{product.title}</h4>
                        <p>{product.description}</p>
                        <p>Quantity : {product.qty}</p>
                        <p>Price : {product.price * product.qty}</p>
                       <button id="remove" onClick ={()=>handleRemoveProduct(product.id)}>Remove</button>
                       </div>

                    </div>
                ))}
                <h5>Total Price : {totalProductPrice}</h5>
            </div>
        </div>
    )
}

export default CartPage;
