import "./ItemDetailContainer.css"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducto } from "../../utils/firebase";
import { ItemDetail } from "../ItemDetail/ItemDetail";
export const ItemDetailContainer = () => {
    const {id}= useParams()
    const [producto, setProducto] = useState([])

    useEffect(() => {
        getProducto(id).then(prod => {
            setProducto(prod)
        })
    }, [])

    return (
        <div className= "container card mb-3 conteiner" >
            <ItemDetail prod={producto}/>
        </div>
    );
}
