
import './App.css';
import { Navbar } from "./Navbar/Navbar";
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/itemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:idCategoria' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />

      
      </Routes>
    </BrowserRouter>
    </>
  );
}


