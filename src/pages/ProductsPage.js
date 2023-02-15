import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isLoding, setLoding] = useState(false);
  const [isError, setError] = useState(false);
  const [category, setCategory] = useState("all");
  const [showProducts, setShowProducts] = useState([]);

  useEffect(() => {
    setLoding(true);
    axios.get("https://fakestoreapi.com/products").then((response) => {
      // console.log(response.data)
      setProducts(response.data);
      setShowProducts(response.data);
      setLoding(false);
    }).catch((error) => {
      console.log("Error : " + error);
      setLoding(false);
      setError(true);
    })
  }, []);

  
  // Category using using the filter method
const handleSelect =(event) => {
  const cat = event.target.value;
  setCategory(cat);
  
  // take the copy
  let updatedPrducts = [...products]
  
  // update the copy
  if(cat !== 'all'){
    updatedPrducts = updatedPrducts.filter(
      (currProduct) => {
        return currProduct.category === cat;
      });
    }
  // modify the copy
  setShowProducts(updatedPrducts);

}


// for Search box filtering
const getSearchValue = (searchvalue)=>{

  let updatedProduct = [...products];
  updatedProduct = updatedProduct.filter((currProduct)=>{
    return currProduct.title.toLowerCase().includes(searchvalue.toLowerCase());
  });

  setShowProducts(updatedProduct);
}
 
  return (
    <div>
      <Navbar1  getSearchValue={getSearchValue}/>
      <p>Products Page</p>
      <select onChange={handleSelect} value={category}>
        <option value="all"> All</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
        <option value="men's clothing">Men's clothing</option>
        <option value="women's clothing">Women's clothing</option>
      </select>

      {
        isLoding ? <p>Loading...</p> : <>
        
        <ul style={{ display: "flex", flexWrap: "wrap", margin: "25px" }}>
        {/* <li>{products.length > 0 && products[0].title}</li> */}

        {showProducts.map((product) => {
          // return <li>{product.title}</li>
          return <Product key={product.id} item={product} />;
        })}
      </ul>
        </>
      }

      { isError && <p>Some error Ocurred</p>}
      <Footer/>
    </div>
  );
}


export default ProductsPage;


//Catagory
//   const handleSelect = async(event) => {
//     const cat = event.target.value;
//     setCategory(cat);

//    let response;
//    try{
//     setLoding(true)
//     if(cat === 'all'){
//       response = await axios.get(`https://fakestoreapi.com/products`);     
//     }
//     else{
//       response = await axios.get(`https://fakestoreapi.com/products/category/${cat}`); 
//     }
//     setLoding(false);
//     setProducts(response.data); 
//   } catch (error) {
//     setError(true);
//   }
// }