
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from "./Navbar/Navbar";
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
//React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//React Toastify
import { ToastContainer } from 'react-toastify';

import { CarritoProvider } from './context/CarritoContext';

import { Checkout } from './Checkout/Checkout';
import { Cart } from './Cart/Cart';
import { Footer } from './Footer/Footer';
export function App() {

  return (

    <BrowserRouter>
      <CarritoProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </CarritoProvider>
    </BrowserRouter>

  );
}


