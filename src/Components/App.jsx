
import './App.css';
import { Navbar } from "./Navbar/Navbar";
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/itemDetailContainer';

export function App() {
  return (
    <div>
      <Navbar/>
      
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}


