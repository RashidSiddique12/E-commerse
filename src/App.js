// import Navbar from "./components/Navbar";
import ProductsPage from "./pages/ProductsPage";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import HomePages from "./pages/HomePages";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import UserPage from "./pages/UserPage";
import Login from "./pages/Login";
import CartPage from "./pages/CartPage";
import About from "./pages/About";
// import AccountDetails from "./pages/AccountDetails";
import Privacy from "./pages/Privacy";
import Term from "./pages/Term";
import AccountDetails from "./pages/AccountDetails";

function App() {
  return (
    <div className="App">
     {/* <Navbar /> */}
      {/* <ProductsPage /> */}

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePages />}/>
      <Route path='/products' element={<ProductsPage />}/>
      <Route path='/products/:productId' element={<ProductPage />}/>
      <Route path='/user' element={<UserPage />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/about' element={<About />} />
      <Route path='/privacy' element={<Privacy />} />
      <Route path='/term' element={<Term />} />

      <Route path='/account' element={<AccountDetails />} />
      

      <Route path='*' element={<NotFoundPage />}/>
    </Routes>
    </BrowserRouter>
      
      
    </div>
  );
}

export default App;
