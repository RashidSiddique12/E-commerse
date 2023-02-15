import React from "react";
import Footer from "../components/Footer";
import Navbar1 from "../components/Navbar1";
import { Link } from "react-router-dom";
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import './pageStyle.css'
import { useState } from "react";

function HomePages() {

  const [men, setMen] = useState([]);

  const handleMen = {}
  const handleWomen = {}



  return (
    <>
      <Navbar1 />
    <div  >
      <p>HomePages</p>
      <div style={{  width:"500px", margin:"40px",display:"flex", float:"left"}}>
        <div id="off">
          <h1 >50% Off For Your <br /> First Shopping</h1>
          <p style={{margin:"14px"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit, <br /> qui mollitia consectetur cumque dolore illum vero atque vel.</p>
          <Link to="/products"><button id="shopNow">Shop now</button></Link>
        </div>
        </div>
        
         

      <div className="slider">
        
      <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://incredible-paletas-478aba.netlify.app/collections/collection1.png'
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://incredible-paletas-478aba.netlify.app/collections/collection2.png'
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://incredible-paletas-478aba.netlify.app/collections/collection4.png'
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>

     </div>
    </div>
    <div style={{ width:"100%", height:"600px"}}></div>
    <div className="offmax">
      <div><img src="https://incredible-paletas-478aba.netlify.app/banner2.png" alt="..." /></div>
      <div id="sev"><h3> &nbsp; &nbsp; &nbsp; &nbsp;70% off <br /> &nbsp; &nbsp; All Essentials</h3></div>
      <Link to="/products">
      <p id="pm" onClick={handleMen}>Men</p>
      <p id="pw" onClick={handleWomen}>Women</p>
      </Link>
    </div>
    <Footer/>
    </>
  );
}

export default HomePages;
