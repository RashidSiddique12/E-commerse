import { useDispatch, useSelector } from "react-redux";
import './pageStyle.css';
import { removeItemFromCart } from "../features/cart";

function CartPage() {
    const cartProducts = useSelector((store) => store.cart.value);
    const dispatch = useDispatch();

    let totalProductPrice = 0;

    cartProducts.forEach((currProduct)=>{
          totalProductPrice += currProduct.price * currProduct.qty;
    });
    // totalProductPrice  = totalProductPrice.toFixed(2);
    
    
    const handleRemoveProduct =(productId)=>{
        dispatch(removeItemFromCart(productId));

    }
     

    return (
        <div>
            <h2>Cart Page</h2>
            <div >
                {cartProducts.map((product) => (
                    <div style={{border:"1px solid black", height:"300px", display:"flex"}} key = {product.id}>
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
