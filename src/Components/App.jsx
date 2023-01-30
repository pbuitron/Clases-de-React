
import './App.css';
import { Navbar } from "./Navbar/Navbar";
import { ItemListContainer } from './PrimeraSeccion/ItemListContainer';


export function App() {
  return (
    <div>
      <Navbar nombre = {`React`}/>
     <ItemListContainer greeting={`Hola`}/>
    </div>
  );
}


