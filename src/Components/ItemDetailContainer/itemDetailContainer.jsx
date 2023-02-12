import { useState, useEffect } from "react";
import { consultarBDD } from "../../utils/funciones";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])

    useEffect(() => {
        consultarBDD(`../json/productos.json`).then(prods => {
            const prod = prods.find(item => item.item === 5)
            setProducto(prod)
        })
    }, [])

    return (
        <div className= "container card mb-3" style={{maxWidth: '540px', marginTop: '2rem'}}>
            <ItemDetail prod={producto}/>
        </div>
    );
}
