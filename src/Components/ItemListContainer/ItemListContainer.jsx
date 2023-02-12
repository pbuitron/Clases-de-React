
import { consultarBDD } from '../../utils/funciones.js';
import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList.jsx';
export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        consultarBDD("./json/productos.json").then(prods => {
            const items = ItemList({ prods })
            setProductos(items)
        })
    }, []);

    return (
        <div className="row row-cols-1 row-cols-md-4 g-5">
            {productos}
        </div>
    );
}


