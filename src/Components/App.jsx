
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from "./Navbar/Navbar";
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
//React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//React Toastify
import { ToastContainer } from 'react-toastify';
// Firebase
//import { cargarBDD } from '../utils/firebase';
import { getProductos } from '../utils/firebase';

import { Checkout } from './Checkout/Checkout';
import { Cart } from './Cart/Cart';
export function App() {
  //cargarBDD()
  getProductos()
  return (
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    
  );
}


