
import { Link } from 'react-router-dom';
// import logo from '../assets/logo2.svg';
// import { useSelector } from 'react-redux';
// import Navbar1 from './Navbar1';

function Navbar() {
    
    // const cartProducts = useSelector((store) => store.cart);
    // let nCartItems = 0;
    // cartProducts.map((item) => {
    //     nCartItems += item.qty;
    // });

    return (
        <>
        {/* <Navbar1  getSearchValue ={getSearchValue}/> */}
  
        <div style={{ display: "flex" }}> 
        <div >
            <Link to="/"><p>Home</p></Link>
        </div>

            <div style={{ marginLeft: "50px" }}>
                <Link to="/products">
                    <p>Products Page</p>
                </Link>
            </div>

            <div style={{ marginLeft: "50px" }}>
                <Link to="/user">
                    <p>User Page</p>
                </Link>
            </div>

            <div style={{ marginLeft: "50px" }}>
                <Link to="/login">
                    <p>Login/Signup</p>
                </Link>
            </div>

            <div style={{ marginLeft: "50px" }}>
                <Link to='/about'>
                    <p>About</p>
                </Link>
            </div>

            <div style={{ marginLeft: "50px" }}>
                <Link to='/privacy'>
                    <p>Privacy Policy</p>
                </Link>
            </div>

            <div style={{ marginLeft: "50px" }}>
                <Link to='/term'>
                    <p>Term and Conditions</p>
                </Link>
            </div>


            {/* <div style={{ marginLeft: "50px" }}>
                <Link to='/cart'>
                    <p>Cart ({nCartItems})</p>
                </Link>
            </div> */}

        </div>
        </>
    )
}

export default Navbar;
