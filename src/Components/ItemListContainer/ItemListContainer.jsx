
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { consultarBDD } from '../../utils/funciones.js';
import { ItemList } from '../ItemList/ItemList.jsx';
export const ItemListContainer = () => {
    const { idCategoria } = useParams()
    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        if (idCategoria) {
            consultarBDD("../json/productos.json").then(products => {
                const prods = products.filter(prod => prod.idCategoria === idCategoria)
                const items = ItemList({ prods })
                setProductos(items)
            })

        } else {
            consultarBDD("./json/productos.json").then(prods => {
                const items = ItemList({ prods })
                setProductos(items)
            })
        }


    }, [idCategoria]);

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 ">
            {productos}
        </div>
    );
}


