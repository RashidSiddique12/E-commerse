import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import Navbar1 from '../components/Navbar1';
import axios from 'axios';
// import { style } from '@mui/system';

function ProductPage() {
  const params = useParams();
  // const navigate = useNavigate();
  console.log(params);
  const productId = params.productId;
  const [state, setState] = useState();
  const [isLoading, setLoding] = useState(false);
  
  useEffect(() => {
    setLoding(true);
      axios
          .get(`https://fakestoreapi.com/products/${productId}`)
          .then((response)=>{
                console.log(response.data)
                setState(response.data);
                setLoding(false);
      })
  }, []);

  // const handleButtonClick = ()=>{
  //   navigate("/user");
  // }

  return (
    <div>
      <Navbar1 />
      {/* <button onClick={handleButtonClick}>Go to user Page</button> */}
       <p>ProductPage</p>
      
       {
        isLoading ? <p>Loading...</p> :
                    <div  >
                    {state && <img src={state.image} alt={state.title} /> }
                    {state && <h3>{state.title}</h3>}
                    {state && state.description}
                    </div>
       }
    </div>
  )
}

export default ProductPage
